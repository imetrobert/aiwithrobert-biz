/**
 * form.js — Contact form validation and auto-formatting
 */

// Anchored regex: exactly XXX-XXX-XXXX, no extra digits
const PHONE_RE = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

const submitBtn = document.getElementById('submit-btn');
const formHint  = document.getElementById('form-hint');

const reqFields = {
  'name':         document.getElementById('name'),
  'email':        document.getElementById('email'),
  'phone':        document.getElementById('phone'),
  'session-type': document.getElementById('session-type'),
};

function checkFormValidity() {
  let ok = true;
  let missing = [];

  for (let f in reqFields) {
    const el = reqFields[f];
    if (!el.value || !el.value.trim()) {
      ok = false;
      missing.push(el.previousElementSibling.textContent.replace(' *', '').trim());
    } else if (el.type === 'tel' && !PHONE_RE.test(el.value)) {
      ok = false;
      missing.push('Valid Phone Number');
    } else if (el.type === 'email' && !el.validity.valid) {
      ok = false;
      missing.push('Valid Email');
    }
  }

  submitBtn.disabled = !ok;
  formHint.style.display = ok ? 'none' : 'block';

  if (!ok) {
    const lang = getCurrentLanguage();
    const prefix   = lang === 'fr' ? 'Champs manquants : ' : 'Still needed: ';
    const fallback = lang === 'fr'
      ? 'Veuillez remplir tous les champs obligatoires (*) ci-dessus'
      : 'Please fill in all required (*) fields above';
    formHint.textContent = missing.length ? prefix + missing.join(', ') : fallback;
  }

  return ok;
}

// Live validation on all required fields
for (let f in reqFields) {
  reqFields[f].addEventListener('input', () => {
    checkFormValidity();
    reqFields[f].classList.remove('error');
    const em = document.getElementById(f + '-error');
    if (em) em.classList.remove('show');
  });
  reqFields[f].addEventListener('change', checkFormValidity);
}

// Auto-format phone as XXX-XXX-XXXX while typing
document.getElementById('phone').addEventListener('input', function (e) {
  let v = e.target.value.replace(/\D/g, '');
  if (v.length <= 3)      e.target.value = v;
  else if (v.length <= 6) e.target.value = v.slice(0, 3) + '-' + v.slice(3);
  else                    e.target.value = v.slice(0, 3) + '-' + v.slice(3, 6) + '-' + v.slice(6, 10);
  checkFormValidity();
});

// Catch browser autofill (fires 'change' not 'input')
window.addEventListener('load', () => {
  Object.values(reqFields).forEach(el => {
    if (el.value && el.value.trim()) checkFormValidity();
  });
});

// Send French visitors back to the French page after formsubmit.co redirects
(function () {
  const next = document.getElementById('form-next');
  if (next) {
    const fr = /^\/fr(\/|$)/i.test(window.location.pathname);
    next.value = window.location.origin + (fr ? '/fr/' : '/') + '?submitted=true#contact';
  }
})();

// Submit in the background (formsubmit.co AJAX endpoint) so visitors never leave the
// page or see formsubmit.co's own thank-you page. If JavaScript is unavailable the
// plain form POST + _next redirect above still works.
(function () {
  const form = document.querySelector('.contact-form form');
  if (!form) return;
  form.addEventListener('submit', async function (ev) {
    ev.preventDefault();
    if (!checkFormValidity()) return;
    const fr = getCurrentLanguage() === 'fr';
    document.getElementById('form-subject').value =
      '[Business · ' + (fr ? 'FR' : 'EN') + '] New Business Inquiry - AI with Robert for Business';
    document.getElementById('form-language').value = fr ? 'Français' : 'English';
    submitBtn.disabled = true;
    submitBtn.dataset.label = submitBtn.textContent;
    submitBtn.textContent = fr ? 'Envoi…' : 'Sending…';
    try {
      const res = await fetch(form.action.replace('formsubmit.co/', 'formsubmit.co/ajax/'), {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      const data = await res.json();
      if (!res.ok || String(data.success) !== 'true') throw new Error(data.message || 'send failed');
      const msg = document.getElementById('success-message');
      document.querySelector('.contact-form').style.display = 'none';
      msg.style.display = 'block';
      msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (err) {
      submitBtn.textContent = submitBtn.dataset.label;
      submitBtn.disabled = false;
      formHint.style.display = 'block';
      formHint.textContent = fr
        ? 'Désolé, l’envoi a échoué. Écrivez-moi à biz@aiwithrobert.com ou appelez le 514-250-8491.'
        : 'Sorry, that didn’t send. Please email biz@aiwithrobert.com or call 514-250-8491.';
    }
  });
})();

// Show success panel after formsubmit.co redirect
function checkFormSuccess() {
  if (new URLSearchParams(window.location.search).get('submitted') === 'true') {
    const form = document.querySelector('.contact-form');
    const msg  = document.getElementById('success-message');
    if (form && msg) {
      form.style.display = 'none';
      msg.style.display  = 'block';
      setTimeout(() => msg.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
    }
  }
}

window.checkFormValidity = checkFormValidity;
window.checkFormSuccess  = checkFormSuccess;
