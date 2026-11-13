/* Free feasibility check for biz.aiwithrobert.com.
   A short form (plan, team size, up to 3 needs, personal information, contact) that shows an instant preliminary result:
   Yes / Partly / No per need for the visitor's own paid AI plan. No AI and no manual step: verdicts come from the capability
   table Robert maintains in the toolkit (public RPC public_caps; the SNAPSHOT below is the fallback until that is published).
   The result deliberately shows verdicts only: no how-to, no conditions, no plan comparison, no prices.
   Every check is saved with RPC submit_inquiry (extra.kind = "feasibility"), so it lands in the toolkit as a lead with the
   check attached. When the site is at capacity the person is also added to the waitlist (RPC join_waitlist) and the result
   shows a waitlist message in place of the booking button. Standalone file like capacity.js (NOT in js/bundle.js).
   Wording EN/FR lives in T below. Booking link and reply time: CONFIG. */
(function () {
  "use strict";
  var CONFIG = {
    site: "business",
    url: "https://ipnajvgwtjrlecbqfwrh.supabase.co",
    key: "sb_publishable_oPa7fZdSTeXKuCwpOF338Q_PcXS57go",
    booking: "https://calendar.app.google/4Wdg7xGxXUcyXzdr7",
    email: "biz@aiwithrobert.com",
    notify: "https://formsubmit.co/ajax/forms@aiwithrobert.com",
    maxNeeds: 3
  };
  var SNAPSHOT = {"verified":"2026-11-11","cells":{"write":{"chatgpt":"yes","claude":"yes","gemini":"yes","copilot":"yes"},"files":{"chatgpt":"yes","claude":"yes","gemini":"yes","copilot":"yes"},"reuse":{"chatgpt":"yes","claude":"yes","gemini":"yes","copilot":"yes"},"own":{"chatgpt":"partial","claude":"yes","gemini":"partial","copilot":"yes"},"sched":{"chatgpt":"partial","claude":"partial","gemini":"partial","copilot":"unknown"},"auto":{"chatgpt":"no","claude":"no","gemini":"no","copilot":"no"},"img":{"chatgpt":"yes","claude":"no","gemini":"yes","copilot":"unknown"},"office":{"chatgpt":"partial","claude":"yes","gemini":"partial","copilot":"yes"},"web":{"chatgpt":"yes","claude":"yes","gemini":"yes","copilot":"yes"},"team":{"chatgpt":"partial","claude":"partial","gemini":"partial","copilot":"yes"},"priv":{"chatgpt":"partial","claude":"partial","gemini":"partial","copilot":"partial"}}};
  var TOOLS = [["chatgpt", "ChatGPT"], ["claude", "Claude"], ["gemini", "Gemini"], ["copilot", "Microsoft Copilot"]];
  /* form field name (same names as the contact form, read by the toolkit) -> capability id */
  var NEEDS = [["need_writing", "write"], ["need_documents", "files"], ["need_reuse", "reuse"], ["need_own_data", "own"], ["need_schedule", "sched"], ["need_automatic", "auto"], ["need_images", "img"], ["need_office_files", "office"], ["need_research", "web"]];
  var T = {
    en: {
      plan: "Which paid AI plan do you use most?", none: "None yet", unsure: "Not sure", choose: "Choose an option...",
      team: "How many people would use AI?", team1: "Just me", team2: "2 to 5 people", team3: "6 to 20 people", team4: "More than 20 people",
      needs: "What would you like AI to do? (choose up to 3)",
      need: { write: "Writing: emails, quotes, reports", files: "Summarizing documents, PDFs or spreadsheets", reuse: "Saved prompts my whole team can reuse", own: "Working with my own email, calendar or files", sched: "A task that runs on a schedule", auto: "Something that runs by itself when an email, form or invoice arrives", img: "Creating images or marketing visuals", office: "Ready-made Word, Excel or PowerPoint files", web: "Researching competitors, suppliers or markets", team: "Several people sharing one setup", priv: "Handling customers’ personal information" },
      priv: "Will this involve your customers’ or clients’ personal information?", yes: "Yes", no: "No",
      name: "Your name", email: "Email address", org: "Company (optional)", phone: "Phone number (optional)",
      consent: "I agree that these details may be used to contact me about my result and about availability. They are not sold or shared.",
      go: "Show my result", working: "Checking...",
      ePlan: "Please choose your plan (or None yet).", eTeam: "Please choose how many people would use AI.", eNeeds: "Please choose at least one thing you would like AI to do.", ePriv: "Please answer the personal information question.", eName: "Please enter your name.", eEmail: "Please enter a valid email address.", eConsent: "Please tick the box to agree before seeing your result.",
      max: "You can choose up to 3. Untick one to pick another.",
      rTitle: "Your preliminary result", rFor: "For your plan: ", rAny: "You do not have a paid plan yet, so this shows what the common paid plans can do.",
      v: { yes: "Yes", partial: "Partly", no: "No", unknown: "Needs a closer look" },
      s: { yes: "Your plan can do this today.", partial: "Possible, with conditions or some setup. The specifics are part of a call or the AI Opportunity Assessment.", no: "Not offered by this plan today. There is usually another way to get there, and we can look at it together.", unknown: "I need a closer look before I can confirm this one." },
      sAny: { yes: "The common paid plans can do this.", partial: "Possible on some plans, with conditions. Which plan fits you best is part of a call.", no: "Not offered by the common paid plans today. There is usually another way to get there.", unknown: "I need a closer look before I can confirm this one." },
      note: "This is a preliminary result based on public plan information, last verified on ", note2: ". Plans change often, and how to set each item up for your business is not covered here.",
      nextT: "Next step", next: "Book a free 15-minute call and we will scope what this means for your business. Questions by email are answered within 1 to 2 business days.", book: "Book a 15-minute call",
      capT: "You are on the waitlist", cap: "I am fully booked right now, so I am not taking calls at the moment. Your result is saved and you have been added to the waitlist. I will contact you as soon as a spot opens.", reopen: "I expect to have availability around ",
      again: "Check something else", saved: "Your check is saved.",
      flowT: "What happens next", flowDone: "Done", flowNow: "You are here",
      flowOpen: [["Free feasibility check", "Two minutes. Your result appears on screen right away."], ["Free 15-minute call", "You pick a time. We look at what the result means for your business."], ["Proposal", "A clear scope and price, so you know the cost before anything starts."], ["Setup and training", "I set it up with you, and your team learns to run it."]],
      flowCap: [["Free feasibility check", "Two minutes. Your result appears on screen right away."], ["Waitlist", "I am fully booked right now. You are added automatically and I contact you when a spot opens."], ["Free 15-minute call", "When a spot opens, you pick a time and we look at what the result means for your business."], ["Proposal", "A clear scope and price, so you know the cost before anything starts."], ["Setup and training", "I set it up with you, and your team learns to run it."]]
    },
    fr: {
      plan: "Quel forfait d’IA payant utilisez-vous le plus?", none: "Aucun pour l’instant", unsure: "Je ne suis pas certain", choose: "Choisissez une option...",
      team: "Combien de personnes utiliseraient l’IA?", team1: "Moi seulement", team2: "2 à 5 personnes", team3: "6 à 20 personnes", team4: "Plus de 20 personnes",
      needs: "Que voulez-vous que l’IA fasse? (choisissez jusqu’à 3)",
      need: { write: "Rédaction : courriels, soumissions, rapports", files: "Résumer des documents, des PDF ou des chiffriers", reuse: "Des invites enregistrées que toute mon équipe peut réutiliser", own: "Travailler avec mes propres courriels, mon calendrier ou mes fichiers", sched: "Une tâche qui s’exécute selon un horaire", auto: "Quelque chose qui s’exécute seul à l’arrivée d’un courriel, d’un formulaire ou d’une facture", img: "Créer des images ou des visuels de marketing", office: "Des fichiers Word, Excel ou PowerPoint prêts à utiliser", web: "Faire de la recherche sur des concurrents, des fournisseurs ou des marchés", team: "Plusieurs personnes qui partagent une même configuration", priv: "Traiter des renseignements personnels de clients" },
      priv: "Est-ce que cela touchera des renseignements personnels de vos clients?", yes: "Oui", no: "Non",
      name: "Votre nom", email: "Adresse courriel", org: "Entreprise (facultatif)", phone: "Numéro de téléphone (facultatif)",
      consent: "J’accepte que ces renseignements servent à me contacter au sujet de mon résultat et des disponibilités. Ils ne sont ni vendus ni partagés.",
      go: "Voir mon résultat", working: "Vérification...",
      ePlan: "Veuillez choisir votre forfait (ou Aucun pour l’instant).", eTeam: "Veuillez indiquer combien de personnes utiliseraient l’IA.", eNeeds: "Veuillez choisir au moins une chose que vous aimeriez que l’IA fasse.", ePriv: "Veuillez répondre à la question sur les renseignements personnels.", eName: "Veuillez entrer votre nom.", eEmail: "Veuillez entrer une adresse courriel valide.", eConsent: "Veuillez cocher la case pour accepter avant de voir votre résultat.",
      max: "Vous pouvez en choisir jusqu’à 3. Décochez-en un pour en choisir un autre.",
      rTitle: "Votre résultat préliminaire", rFor: "Pour votre forfait : ", rAny: "Vous n’avez pas encore de forfait payant; voici donc ce que les forfaits payants courants peuvent faire.",
      v: { yes: "Oui", partial: "En partie", no: "Non", unknown: "À vérifier" },
      s: { yes: "Votre forfait peut le faire dès aujourd’hui.", partial: "Possible, avec des conditions ou un peu de configuration. Les détails font partie d’un appel ou de l’Évaluation des occasions d’IA.", no: "Ce forfait ne l’offre pas pour l’instant. Il existe habituellement une autre façon d’y arriver, et nous pouvons la regarder ensemble.", unknown: "Je dois regarder de plus près avant de confirmer ce point." },
      sAny: { yes: "Les forfaits payants courants peuvent le faire.", partial: "Possible avec certains forfaits, sous conditions. Le choix du forfait qui vous convient fait partie d’un appel.", no: "Les forfaits payants courants ne l’offrent pas pour l’instant. Il existe habituellement une autre façon d’y arriver.", unknown: "Je dois regarder de plus près avant de confirmer ce point." },
      note: "Ceci est un résultat préliminaire fondé sur l’information publique des forfaits, vérifiée la dernière fois le ", note2: ". Les forfaits changent souvent, et la façon de mettre chaque élément en place dans votre entreprise n’est pas couverte ici.",
      nextT: "Prochaine étape", next: "Réservez un appel gratuit de 15 minutes et nous verrons ce que cela représente pour votre entreprise. Je réponds aux questions par courriel dans un délai de 1 à 2 jours ouvrables.", book: "Réserver un appel de 15 minutes",
      capT: "Vous êtes sur la liste d’attente", cap: "Mon horaire est complet pour le moment; je ne prends donc pas d’appels actuellement. Votre résultat est enregistré et vous avez été ajouté à la liste d’attente. Je vous contacterai dès qu’une place se libère.", reopen: "Je prévois avoir de la disponibilité vers le ",
      again: "Vérifier autre chose", saved: "Votre vérification est enregistrée.",
      flowT: "Ce qui se passe ensuite", flowDone: "Fait", flowNow: "Vous êtes ici",
      flowOpen: [["Vérification de faisabilité gratuite", "Deux minutes. Votre résultat s’affiche tout de suite à l’écran."], ["Appel gratuit de 15 minutes", "Vous choisissez un moment. Nous regardons ce que le résultat représente pour votre entreprise."], ["Proposition", "Une portée et un prix clairs : vous connaissez le coût avant que quoi que ce soit commence."], ["Mise en place et formation", "Je le mets en place avec vous, et votre équipe apprend à s’en servir."]],
      flowCap: [["Vérification de faisabilité gratuite", "Deux minutes. Votre résultat s’affiche tout de suite à l’écran."], ["Liste d’attente", "Mon horaire est complet pour le moment. Vous êtes ajouté automatiquement et je vous contacte dès qu’une place se libère."], ["Appel gratuit de 15 minutes", "Quand une place se libère, vous choisissez un moment et nous regardons ce que le résultat représente pour votre entreprise."], ["Proposition", "Une portée et un prix clairs : vous connaissez le coût avant que quoi que ce soit commence."], ["Mise en place et formation", "Je le mets en place avec vous, et votre équipe apprend à s’en servir."]]
    }
  };
  var doc = document, mount = doc.getElementById("feas-check");
  if (!mount) return;
  var FR = /^\/fr(\/|$)/.test(location.pathname), L = FR ? "fr" : "en", C = T[L], caps = SNAPSHOT;

  var st = doc.createElement("style");
  st.textContent = ".feas-box{background:#fff;border:1px solid #e2e8f0;border-radius:16px;padding:1.6rem 1.4rem;max-width:720px;margin:0 auto 2.5rem;text-align:left;color:#11304c;scroll-margin-top:150px}" +
    ".feas-box h3{margin:0 0 .5rem;font-size:1.5rem;color:#11304c}.feas-box>p{margin:.3rem 0 1rem;color:#4b5563}.feas-box fieldset{border:0;padding:0;margin:0 0 1.2rem}.feas-box legend{font-weight:600;margin-bottom:.45rem;padding:0}" +
    ".feas-box label.fx-check{display:flex;gap:.6rem;align-items:flex-start;margin:.45rem 0;font-weight:400;cursor:pointer}.feas-box label.fx-check span{flex:1}.feas-box input[type=checkbox]{width:1.3rem;height:1.3rem;min-width:1.3rem;padding:0;margin:.15rem 0 0;flex:none}" +
    ".feas-box label.fx-off{opacity:.45}.feas-box .fx-hp{position:absolute;left:-9999px;height:0;overflow:hidden}.feas-box .fx-msg{margin:.8rem 0 0;font-weight:600;color:#b42318}.feas-box .fx-invalid{outline:2px solid #b42318;outline-offset:2px;border-radius:6px}" +
    ".feas-box .fx-hint{font-size:.9rem;color:#6b7280;margin:.2rem 0 0}.feas-box .fx-row{display:flex;gap:.9rem;align-items:flex-start;padding:.9rem 0;border-top:1px solid #e2e8f0}.feas-box .fx-row:first-of-type{border-top:0}" +
    ".feas-box .fx-chip{flex:none;min-width:5.2rem;text-align:center;font-weight:700;font-size:.9rem;border-radius:999px;padding:.3rem .7rem;margin-top:.1rem}" +
    ".feas-box .fx-yes{background:#dcfce7;color:#14532d}.feas-box .fx-partial{background:#ffedd5;color:#9a3412}.feas-box .fx-no{background:#fee2e2;color:#991b1b}.feas-box .fx-unknown{background:#e5e7eb;color:#374151}" +
    ".feas-box .fx-row strong{display:block;margin-bottom:.15rem}.feas-box .fx-row span.fx-s{color:#4b5563}.feas-box .fx-note{font-size:.88rem;color:#6b7280;margin:1rem 0}" +
    ".feas-box .fx-next{background:#fbf6e3;border:1px solid #eadfae;border-radius:12px;padding:1.1rem 1.2rem;margin-top:1rem}.feas-box .fx-next h4{margin:0 0 .4rem;font-size:1.15rem}.feas-box .fx-next p{margin:.3rem 0 .8rem}" +
    ".feas-box .fx-flow{margin:1.2rem 0;padding:1rem 1.1rem;background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px}.feas-box .fx-flow h4{margin:0 0 .7rem;font-size:1.1rem}.feas-box .fx-flow ol{list-style:none;margin:0;padding:0}" +
    ".feas-box .fx-flow li{display:flex;gap:.8rem;align-items:flex-start;padding:0 0 .9rem;position:relative}.feas-box .fx-flow li:last-child{padding-bottom:0}.feas-box .fx-flow li:not(:last-child)::before{content:'';position:absolute;left:.95rem;top:2rem;bottom:0;width:2px;background:#cbd5e1}" +
    ".feas-box .fx-num{flex:none;width:2rem;height:2rem;border-radius:50%;background:#fff;border:2px solid #cbd5e1;color:#475569;font-weight:700;display:flex;align-items:center;justify-content:center;position:relative;z-index:1}" +
    ".feas-box .fx-flow li.fx-done .fx-num{background:#11304c;border-color:#11304c;color:#fff}.feas-box .fx-flow li.fx-now .fx-num{background:#c9a227;border-color:#c9a227;color:#11304c}.feas-box .fx-flow li strong{display:block}.feas-box .fx-flow li span.fx-d{color:#4b5563;font-size:.95rem}" +
    ".feas-box .fx-tag{display:inline-block;font-size:.75rem;font-weight:700;border-radius:999px;padding:.1rem .55rem;margin-left:.45rem;vertical-align:middle;background:#e2e8f0;color:#334155}.feas-box .fx-now .fx-tag{background:#fbf6e3;color:#8a6d0b;border:1px solid #eadfae}" +
    ".feas-box.fx-result>h3,.feas-box.fx-result>p{display:none}" +
    ".feas-box .fx-again{background:none;border:0;color:#1b4469;font-weight:600;text-decoration:underline;cursor:pointer;padding:.6rem 0;font-size:1rem;margin-top:.6rem}";
  doc.head.appendChild(st);

  function h(tag, attrs, kids) {
    var e = doc.createElement(tag), k;
    for (k in (attrs || {})) { if (k === "text") e.textContent = attrs[k]; else e.setAttribute(k, attrs[k]); }
    (kids || []).forEach(function (c) { if (c) e.appendChild(c); });
    return e;
  }
  function rpc(name, body) {
    return fetch(CONFIG.url + "/rest/v1/rpc/" + name, { method: "POST", headers: { apikey: CONFIG.key, "Content-Type": "application/json" }, body: JSON.stringify(body || {}) });
  }
  function okCaps(c) {
    if (!c || typeof c !== "object" || !/^\d{4}-\d{2}-\d{2}$/.test(c.verified || "") || !c.cells) return false;
    return NEEDS.map(function (n) { return n[1]; }).concat(["team", "priv"]).every(function (id) {
      return c.cells[id] && TOOLS.every(function (t) { return /^(yes|partial|no|unknown)$/.test(c.cells[id][t[0]] || ""); });
    });
  }
  /* The published table replaces the built-in snapshot when it is valid and at least as recent. */
  rpc("public_caps").then(function (r) { return r.ok ? r.json() : null; }).then(function (j) { if (okCaps(j) && j.verified >= SNAPSHOT.verified) caps = j; }).catch(function () {});

  function select(id, label, opts) {
    var s = h("select", { id: id, name: id }, [h("option", { value: "", text: C.choose })].concat(opts.map(function (o) { return h("option", { value: o[0], text: o[1] }); })));
    return { el: h("div", { "class": "form-group" }, [h("label", { "for": id, text: label + " *" }), s]), input: s };
  }
  function field(id, label, type, required, ac, max) {
    var i = h("input", { type: type, id: id, name: id, maxlength: String(max) });
    if (ac) i.setAttribute("autocomplete", ac);
    return { el: h("div", { "class": "form-group" }, [h("label", { "for": id, text: label + (required ? " *" : "") }), i]), input: i };
  }
  var RANK = { yes: 3, partial: 2, unknown: 1, no: 0 };
  function verdict(id, tool) {
    var c = caps.cells[id];
    if (tool) return c[tool];
    return TOOLS.map(function (t) { return c[t[0]]; }).sort(function (a, b) { return RANK[b] - RANK[a]; })[0];
  }
  function fmtDate(iso) { var p = iso.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]).toLocaleDateString(FR ? "fr-CA" : "en-CA", { year: "numeric", month: "long", day: "numeric" }); }

  /* "What happens next": numbered steps, different when at capacity. done = number of finished steps; the next one is "You are here". */
  function flow(cap, done) {
    var steps = cap ? C.flowCap : C.flowOpen;
    return h("div", { "class": "fx-flow" }, [h("h4", { text: C.flowT }), h("ol", {}, steps.map(function (sp, i) {
      var cls = i < done ? "fx-done" : i === done ? "fx-now" : "";
      return h("li", { "class": cls }, [h("span", { "class": "fx-num", "aria-hidden": "true", text: i < done ? "✓" : String(i + 1) }),
        h("div", {}, [h("strong", {}, [doc.createTextNode(sp[0]), cls ? h("span", { "class": "fx-tag", text: i < done ? C.flowDone : C.flowNow }) : null]), h("span", { "class": "fx-d", text: sp[1] })])]);
    }))]);
  }
  function capNow() { try { var c = JSON.parse(localStorage.getItem("awr_cap_" + CONFIG.site) || "null"); return !!(c && c.on); } catch (e) { return false; } }
  function buildForm() {
    var plan = select("fx-plan", C.plan, TOOLS.concat([["none", C.none], ["unsure", C.unsure]]));
    var team = select("fx-team", C.team, [["1", C.team1], ["2-5", C.team2], ["6-20", C.team3], ["21+", C.team4]]);
    var hint = h("p", { "class": "fx-hint", role: "status" });
    var boxes = NEEDS.map(function (n) {
      var cb = h("input", { type: "checkbox", name: n[0], value: n[1] });
      return { cb: cb, label: h("label", { "class": "fx-check" }, [cb, h("span", { text: C.need[n[1]] })]) };
    });
    var needs = h("fieldset", {}, [h("legend", { text: C.needs + " *" })].concat(boxes.map(function (b) { return b.label; })).concat([hint]));
    function cap() {
      var n = boxes.filter(function (b) { return b.cb.checked; }).length;
      boxes.forEach(function (b) { var off = n >= CONFIG.maxNeeds && !b.cb.checked; b.cb.disabled = off; b.label.classList.toggle("fx-off", off); });
      hint.textContent = n >= CONFIG.maxNeeds ? C.max : "";
    }
    needs.addEventListener("change", cap);
    var priv = select("fx-priv", C.priv, [["yes", C.yes], ["no", C.no], ["not-sure", C.unsure]]);
    var name = field("fx-name", C.name, "text", true, "name", 120), email = field("fx-email", C.email, "email", true, "email", 200), org = field("fx-org", C.org, "text", false, "organization", 160), phone = field("fx-phone", C.phone, "tel", false, "tel", 40);
    var consent = h("input", { type: "checkbox", id: "fx-consent", name: "fx-consent" }), consentLabel = h("label", { "class": "fx-check" }, [consent, h("span", { text: C.consent + " *" })]);
    var hp = h("input", { type: "text", name: "fx-hp-field", tabindex: "-1", autocomplete: "off", "data-lpignore": "true", "data-form-type": "other" });
    var msg = h("p", { "class": "fx-msg", role: "alert" }), btn = h("button", { type: "submit", "class": "cta-button", text: C.go });
    var flowBox = h("div", {}, [flow(liveCap === null ? capNow() : liveCap, 0)]);
    onCap = function () { flowBox.replaceChildren(flow(liveCap, 0)); };
    var form = h("form", { novalidate: "novalidate" }, [flowBox, h("div", { "class": "fx-hp", "aria-hidden": "true" }, [hp]), plan.el, team.el, needs, priv.el, name.el, email.el, org.el, phone.el, h("p", {}, [consentLabel]), h("div", { style: "text-align:center;margin-top:1.2rem" }, [btn]), msg]);
    form.addEventListener("input", function (e) { if (e.target.classList) e.target.classList.remove("fx-invalid"); needs.classList.remove("fx-invalid"); consentLabel.classList.remove("fx-invalid"); msg.textContent = ""; });
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      function bad(el, text) { el.classList.add("fx-invalid"); msg.textContent = text; if (el.focus && el.tagName !== "FIELDSET" && el.tagName !== "LABEL") el.focus(); try { el.scrollIntoView({ block: "center", behavior: "smooth" }); } catch (x) {} }
      var picked = boxes.filter(function (b) { return b.cb.checked; }).map(function (b) { return { field: b.cb.name, id: b.cb.value }; });
      if (!plan.input.value) return bad(plan.input, C.ePlan);
      if (!team.input.value) return bad(team.input, C.eTeam);
      if (!picked.length) return bad(needs, C.eNeeds);
      if (!priv.input.value) return bad(priv.input, C.ePriv);
      if (!name.input.value.trim()) return bad(name.input, C.eName);
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.input.value.trim())) return bad(email.input, C.eEmail);
      if (!consent.checked) return bad(consentLabel, C.eConsent);
      var a = { plan: plan.input.value, team: team.input.value, priv: priv.input.value, picked: picked.slice(0, CONFIG.maxNeeds), name: name.input.value.trim(), email: email.input.value.trim(), org: org.input.value.trim(), phone: phone.input.value.trim(), bot: !!hp.value };
      btn.disabled = true; btn.textContent = C.working;
      run(a);
    });
    return form;
  }

  function run(a) {
    var tool = TOOLS.some(function (t) { return t[0] === a.plan; }) ? a.plan : "";
    var ids = a.picked.map(function (p) { return p.id; });
    if (a.team !== "1") ids.push("team");
    if (a.priv !== "no") ids.push("priv");
    var rows = ids.map(function (id) { return { id: id, v: verdict(id, tool) }; });
    var cached = null; try { cached = JSON.parse(localStorage.getItem("awr_cap_" + CONFIG.site) || "null"); } catch (e) {}
    var state = { on: !!(cached && cached.on), reopen: cached && cached.reopen || null };
    function finish() { if (!a.bot) save(a, tool, rows, state); show(a, tool, rows, state); }
    var doneOnce = false, timer = setTimeout(function () { if (!doneOnce) { doneOnce = true; finish(); } }, 4000);
    rpc("site_capacity", { p_site: CONFIG.site }).then(function (r) { return r.ok ? r.json() : null; })
      .then(function (j) { if (j && typeof j.at_capacity === "boolean") state = { on: j.at_capacity, reopen: j.reopen || null }; })
      .catch(function () {})
      .then(function () { if (!doneOnce) { doneOnce = true; clearTimeout(timer); finish(); } });
  }

  function save(a, tool, rows, state) {
    var extra = { kind: "feasibility", interest: "feasibility-check", team_size: a.team, personal_info: a.priv, plan: a.plan, capacity: state.on ? "yes" : "no", table: caps.verified,
      result: rows.map(function (r) { return r.id + ":" + r.v; }).join(",") };
    if (tool) extra["tool_" + tool] = "Yes"; else extra["tool_" + a.plan] = "Yes";
    /* Where the visitor came from (for example a blog issue link with utm_campaign=issue-2026-12), so the lead can be traced to it. */
    try { var q = new URLSearchParams(location.search), src = [q.get("utm_source"), q.get("utm_campaign")].filter(Boolean).join("/").replace(/[^A-Za-z0-9_\/-]/g, "").slice(0, 80); if (src) extra.source = src; } catch (e) {}
    a.picked.forEach(function (p) { extra[p.field] = "Yes"; });
    var summary = rows.map(function (r) { return T.en.need[r.id] + ": " + T.en.v[r.v]; }).join("; ");
    try {
      rpc("submit_inquiry", { p_site: CONFIG.site, p_name: a.name, p_organization: a.org, p_email: a.email, p_phone: a.phone, p_message: ("Website feasibility check. " + summary).slice(0, 3900), p_extra: extra, p_language: L }).catch(function () {});
      if (state.on) rpc("join_waitlist", { p_site: CONFIG.site, p_name: a.name, p_organization: a.org, p_email: a.email, p_phone: a.phone, p_services: ["Feasibility check"], p_language: L, p_consent: true }).catch(function () {});
      var fd = new FormData();
      fd.append("_subject", "[Business · " + L.toUpperCase() + "] Feasibility check" + (state.on ? " (at capacity, waitlisted)" : "") + " - " + a.name);
      fd.append("_template", "box"); fd.append("_captcha", "false");
      fd.append("name", a.name); fd.append("email", a.email); fd.append("company", a.org); fd.append("phone", a.phone);
      fd.append("plan", a.plan); fd.append("team_size", a.team); fd.append("personal_info", a.priv); fd.append("result", summary);
      fd.append("note", "Automatic. No reply needed: the result was shown on screen and the lead is in the toolkit.");
      fetch(CONFIG.notify, { method: "POST", headers: { Accept: "application/json" }, body: fd }).catch(function () {});
    } catch (e) {}
  }

  function show(a, tool, rows, state) {
    var S = tool ? C.s : C.sAny, planName = tool ? TOOLS.filter(function (t) { return t[0] === tool; })[0][1] : "";
    var list = rows.map(function (r) {
      return h("div", { "class": "fx-row" }, [h("span", { "class": "fx-chip fx-" + r.v, text: C.v[r.v] }), h("div", {}, [h("strong", { text: C.need[r.id] }), h("span", { "class": "fx-s", text: S[r.v] })])]);
    });
    var next;
    if (state.on) {
      var re = null;
      if (state.reopen && /^\d{4}-\d{2}-\d{2}$/.test(state.reopen)) re = h("p", { text: C.reopen + fmtDate(state.reopen) + "." });
      next = h("div", { "class": "fx-next" }, [h("h4", { text: C.capT }), h("p", { text: C.cap }), re]);
    } else {
      next = h("div", { "class": "fx-next" }, [h("h4", { text: C.nextT }), h("p", { text: C.next }), h("a", { href: CONFIG.booking, "class": "cta-button", target: "_blank", rel: "noopener", text: C.book })]);
    }
    var again = h("button", { type: "button", "class": "fx-again", text: C.again });
    again.addEventListener("click", function () { mount.classList.remove("fx-result"); body.replaceChildren(buildForm()); try { mount.scrollIntoView({ block: "start", behavior: "smooth" }); } catch (e) {} });
    var out = h("div", { role: "status", "aria-live": "polite" }, [h("h3", { text: C.rTitle }), h("p", { text: tool ? C.rFor + planName : C.rAny })].concat(list).concat([
      h("p", { "class": "fx-note", text: C.note + fmtDate(caps.verified) + C.note2 }), next, flow(state.on, 1), again]));
    onCap = null;
    mount.classList.add("fx-result"); /* hides the "Free Feasibility Check" heading and intro while the result is shown */
    body.replaceChildren(out);
    try { mount.scrollIntoView({ block: "start", behavior: "smooth" }); } catch (e) {}
  }

  var liveCap = null, onCap = null;
  rpc("site_capacity", { p_site: CONFIG.site }).then(function (r) { return r.ok ? r.json() : null; }).then(function (j) { if (j && typeof j.at_capacity === "boolean") { liveCap = j.at_capacity; if (onCap) onCap(); } }).catch(function () {});
  var body = h("div", { "class": "fx-body" });
  mount.appendChild(body);
  body.appendChild(buildForm());
})();
