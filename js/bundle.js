/**
 * i18n.js — All site translations (AI with Robert for Business)
 * ─────────────────────────────────────────────────────────────────────────────
 * THIS IS YOUR EDITORIAL FILE.
 * English strings are under `en:`, French strings under `fr:`.
 * index.html carries a copy of the `en` text; keep both in sync
 * (python3 scripts/check_content_sync.py) and rebuild the French page with
 * python3 scripts/build_fr_page.py.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const translations = {

  en: {
    'brand-tagline': 'for Business',
    'nav-home': 'Home',
    'nav-services': 'Services',
    'nav-process': 'How It Works',
    'nav-speaking': 'Speaking',
    'nav-about': 'About Robert',
    'nav-contact': 'Contact',
    'nav-faq': 'FAQ',
    'hero-title': 'Get a Real Return on Your Business’s AI Investment',
    'hero-tagline': 'I help small and mid-sized businesses cut through the noise, upskill their teams, and build safe, practical AI workflows that actually boost your bottom line.',
    'hero-area-note': 'Based in Côte Saint-Luc, serving businesses across Greater Montréal — in person or online, in English or French.',
    'hero-cta': 'Book a Free Discovery Call',
    'stat-years': '25+',
    'stat-years-label': 'Years in Technology',
    'stat-bilingual': 'EN / FR',
    'stat-bilingual-label': 'Fully Bilingual',
    'stat-privacy': 'Law 25',
    'stat-privacy-label': 'Privacy-Minded Setups',
    'stat-free': 'Free',
    'stat-free-label': 'Discovery Call',
    'entity-aside': '<strong>AI with Robert for Business</strong> — practical AI strategy, team training and workflow automation for small and mid-sized businesses in Montréal, QC. Led by Robert Simon. Bilingual (English/French), in person or online. Free discovery call. <a href="tel:514-250-8491">514-250-8491</a> &nbsp;&middot;&nbsp; <a href="mailto:biz@aiwithrobert.com">biz@aiwithrobert.com</a>',
    'geo-summary': '<strong>AI with Robert for Business</strong> is the business branch of AI with Robert, founded by <strong>Robert Simon</strong>, a technology professional with over 25 years of experience in digital innovation and AI implementation, including at Bell Canada. It helps owners and teams of small and mid-sized businesses in Greater Montréal get practical value from AI: an ROI audit and 90-day roadmap, hands-on team workshops, simple workflow automation, and a clear safe-use policy that takes Quebec’s Law 25 into account. Services are available in English and French, in person or online. Book a free discovery call at 514-250-8491 or biz@aiwithrobert.com. This is a separate branch from AI with Robert for Seniors (seniors.aiwithrobert.com).',
    'services-title': 'Services',
    'services-subtitle': 'Practical, jargon-free help to get more from the AI tools you already pay for — and to use them safely.',
    'service1-title': 'SMB AI ROI Audit &amp; Roadmap',
    'service1-desc': 'Find where your business is losing time and pinpoint the low-cost AI tools with the best return.',
    'service1-item1': 'For: owners who want clarity before spending on tools or training',
    'service1-item2': 'You get: a workflow review, tool recommendations and a prioritized 90-day plan',
    'service1-item3': 'Format: strategic audit, about 1–2 weeks',
    'service1-item4': 'Outcome: less wasted software spend and 2–3 high-impact wins',
    'service2-title': 'Team AI Upskilling &amp; Hands-On Workshops',
    'service2-desc': 'Help your staff use AI safely to finish everyday tasks faster.',
    'service2-item1': 'For: small teams in admin, sales, marketing and operations',
    'service2-item2': 'You get: an interactive half-day workshop, prompt libraries and cheat sheets for your industry',
    'service2-item3': 'Format: in person or virtual',
    'service2-item4': 'Outcome: practical AI habits your team can start using the next day',
    'service3-title': 'Practical Workflow Automation',
    'service3-desc': 'Streamline repetitive tasks with simple, smart AI workflows that run reliably.',
    'service3-item1': 'For: owners and operations managers with drafting, reporting, inquiries or content to automate',
    'service3-item2': 'You get: workflow setup, step-by-step procedures and team walkthroughs',
    'service3-item3': 'Format: implementation project',
    'service3-item4': 'Outcome: hours back each week on manual administrative work',
    'service4-title': 'AI Safe-Use Policy &amp; Governance',
    'service4-desc': 'Protect client data and your reputation with a straightforward AI policy, without red tape.',
    'service4-item1': 'For: owners who need simple rules for how staff use AI',
    'service4-item2': 'You get: a 2-page acceptable-use policy, a Law 25 privacy checklist and staff guidelines',
    'service4-item3': 'Format: done-for-you policy package',
    'service4-item4': 'Outcome: clear rules your team follows, with privacy built in (practical guidance, not legal advice)',
    'process-title': 'How It Works',
    'process-subtitle': 'Three simple steps from first call to results your team can feel.',
    'step1-title': '1. Discover',
    'step1-desc': 'We have a quick call about your current tools, team bottlenecks and goals.',
    'step2-title': '2. Target',
    'step2-desc': 'We pick the AI opportunities with the best return for your budget and business.',
    'step3-title': '3. Execute',
    'step3-desc': 'We train your team and set up simple, secure workflows that save time right away.',
    'speaking-title': 'Speaking for Business Groups',
    'speaking-subtitle': 'Practical, hands-on AI sessions for networking groups, chambers and associations — no hype, real takeaways.',
    'speaking-p1': 'Your members want to use AI in their own businesses tomorrow morning, not sit through another hype-filled keynote. I deliver short, interactive talks and live demonstrations tailored to your group, in English or French, in person across Greater Montréal or online.',
    'speaking-cta': 'Ask About Speaking',
    'about-title': 'About Robert',
    'about-subtitle': 'Practical technology leadership for Montréal business owners.',
    'about-heading': 'Meet Robert Simon',
    'about-p1': 'I’m an independent AI thought leader and digital transformation expert with over 25 years of experience in digital innovation and AI implementation, including at Bell Canada. I now focus on helping small and mid-sized businesses get real, everyday value from AI.',
    'about-p2': 'My approach is practical and zero-hype: use the tools you already have, start with the tasks that cost you the most time, and keep your data private. No agency jargon — just clear guidance from someone who understands how small businesses actually run.',
    'about-summary': '<strong>Quick facts about Robert Simon:</strong> Based in Côte Saint-Luc, QC. Over 25 years in technology and AI, including Bell Canada. Helps small and mid-sized businesses with AI ROI audits, team workshops, workflow automation and safe-use policies. Bilingual (English/French). Free discovery call. Phone: 514-250-8491. Email: biz@aiwithrobert.com.',
    'about-personal-link': 'Robert’s Personal Site &amp; AI Insights Blog',
    'exp-years': '25+ Years in Technology',
    'exp-bell': 'Bell Canada Experience',
    'exp-bilingual': 'Bilingual EN / FR',
    'exp-workshops': 'Hands-On Workshops',
    'contact-title': 'Book Your Free Discovery Call',
    'contact-subtitle': 'Tell me a little about your business and I’ll get back to you within one business day to set up a time.',
    'contact-heading': 'Practical AI for Montréal Businesses',
    'contact-call-note': 'Call anytime, or fill out the form below',
    'form-name': 'Your Name',
    'form-email': 'Email Address',
    'form-phone': 'Phone Number',
    'form-company': 'Company (Optional)',
    'form-interest': 'I’m Interested In',
    'form-option-choose': 'Choose an option...',
    'form-option-audit': 'AI ROI Audit & Roadmap',
    'form-option-workshop': 'Team Workshop',
    'form-option-automation': 'Workflow Automation',
    'form-option-policy': 'AI Safe-Use Policy',
    'form-option-speaking': 'Speaking for a Group',
    'form-option-unsure': 'Not Sure Yet',
    'form-goals': 'What Would You Like Help With? (Optional)',
    'form-goals-placeholder': 'Tell me about your business and what takes up most of your time...',
    'form-submit': 'Send Message',
    'free-call-title': 'Free Discovery Call',
    'free-call-text': 'A friendly conversation about your goals, with no pressure or obligation',
    'success-title': 'Thank You!',
    'success-text': 'Your request has been received.<br>I’ll get back to you within one business day.',
    'faq-title': 'Frequently Asked Questions',
    'faq-subtitle': 'Straight answers about AI consulting and training for small and mid-sized businesses in Montréal.',
    'faq-q-different': 'How is this different from just buying AI software subscriptions?',
    'faq-a-different': 'Software alone doesn’t change a business — knowing how to apply it does. I help you choose the right tools and teach your team to use them for real results.',
    'faq-q-cost': 'How much does it cost?',
    'faq-a-cost': 'Every business is different, so each project is scoped up front and you know the cost before we start. We discuss options on the free discovery call.',
    'faq-q-data': 'Will our business data be safe?',
    'faq-a-data': 'Data privacy is a priority. I show you how to set tools up so confidential business and client information stays private, and I help you write simple rules for your team.',
    'faq-q-law25': 'How does this relate to Quebec’s Law 25?',
    'faq-a-law25': 'Law 25 governs how personal information is handled. I help you set up AI tools and write staff guidelines with those requirements in mind. This is practical guidance, not legal advice — for legal questions, check with your lawyer.',
    'faq-q-technical': 'Do we need technical skills or an IT person on staff?',
    'faq-a-technical': 'No. I work with non-technical owners and staff. If you can use email and a web browser, you can use these solutions.',
    'faq-q-inperson': 'Do you work in person or online?',
    'faq-a-inperson': 'Both. I run in-person workshops and meetings across Greater Montréal, as well as virtual sessions.',
    'faq-q-results': 'How quickly will we see results?',
    'faq-a-results': 'Workshops give your team skills they can use the next day. Workflow projects typically start saving time within a few weeks, depending on scope.',
    'faq-q-french': 'Are services available in French?',
    'faq-a-french': 'Yes. Workshops, coaching, policies and materials are available in both English and French.',
    'footer-tagline': 'Practical AI Strategy &amp; Team Training for Montréal Businesses',
    'footer-services': 'ROI audits &bull; Team workshops &bull; Workflow automation &bull; AI safe-use policies',
    'footer-serving': 'Serving Côte Saint-Luc, Montréal &amp; Greater Montréal — in English and French',
    'footer-seniors-link': 'Looking for AI help for seniors? Visit AI with Robert for Seniors',
    'footer-rights': 'All rights reserved.',
  },

  fr: {
    'brand-tagline': 'pour entreprises',
    'nav-home': 'Accueil',
    'nav-services': 'Services',
    'nav-process': 'Démarche',
    'nav-speaking': 'Conférences',
    'nav-about': 'À Propos',
    'nav-contact': 'Contact',
    'nav-faq': 'FAQ',
    'hero-title': 'Tirez un vrai rendement de l’IA dans votre entreprise',
    'hero-tagline': 'J’aide les PME à faire le tri dans le bruit, à former leurs équipes et à bâtir des flux de travail IA sûrs et pratiques qui améliorent vraiment vos résultats.',
    'hero-area-note': 'Basé à Côte Saint-Luc, au service des entreprises du Grand Montréal — en personne ou en ligne, en français ou en anglais.',
    'hero-cta': 'Réserver un appel découverte gratuit',
    'stat-years': '25+',
    'stat-years-label': 'Années en technologie',
    'stat-bilingual': 'FR / EN',
    'stat-bilingual-label': 'Entièrement bilingue',
    'stat-privacy': 'Loi 25',
    'stat-privacy-label': 'Configurations soucieuses de la vie privée',
    'stat-free': 'Gratuit',
    'stat-free-label': 'Appel découverte',
    'entity-aside': '<strong>AI with Robert pour entreprises</strong> — stratégie IA pratique, formation d’équipe et automatisation des flux de travail pour les PME de Montréal, QC. Dirigé par Robert Simon. Bilingue (français/anglais), en personne ou en ligne. Appel découverte gratuit. <a href="tel:514-250-8491">514-250-8491</a> &nbsp;&middot;&nbsp; <a href="mailto:biz@aiwithrobert.com">biz@aiwithrobert.com</a>',
    'geo-summary': '<strong>AI with Robert pour entreprises</strong> est la branche d’affaires d’AI with Robert, fondée par <strong>Robert Simon</strong>, professionnel des technologies avec plus de 25 ans d’expérience en innovation numérique et en mise en œuvre de l’IA, notamment chez Bell Canada. Elle aide les dirigeants et les équipes de PME du Grand Montréal à tirer une valeur concrète de l’IA : audit de rendement et feuille de route de 90 jours, ateliers pratiques pour les équipes, automatisation simple des flux de travail et politique d’utilisation claire qui tient compte de la Loi 25 du Québec. Services offerts en français et en anglais, en personne ou en ligne. Réservez un appel découverte gratuit au 514-250-8491 ou à biz@aiwithrobert.com. Cette branche est distincte d’AI with Robert pour aînés (seniors.aiwithrobert.com).',
    'services-title': 'Services',
    'services-subtitle': 'Une aide pratique, sans jargon, pour tirer davantage des outils d’IA que vous payez déjà — et les utiliser en toute sécurité.',
    'service1-title': 'Audit de rendement IA et feuille de route pour PME',
    'service1-desc': 'Repérez où votre entreprise perd du temps et ciblez les outils d’IA abordables au meilleur rendement.',
    'service1-item1': 'Pour : les dirigeants qui veulent y voir clair avant de dépenser',
    'service1-item2': 'Vous obtenez : une revue de vos processus, des recommandations d’outils et un plan de 90 jours priorisé',
    'service1-item3': 'Format : audit stratégique, environ 1 à 2 semaines',
    'service1-item4': 'Résultat : moins de dépenses logicielles inutiles et 2 à 3 gains majeurs',
    'service2-title': 'Formation IA d’équipe et ateliers pratiques',
    'service2-desc': 'Aidez votre personnel à utiliser l’IA en toute sécurité pour accomplir ses tâches quotidiennes plus vite.',
    'service2-item1': 'Pour : les petites équipes en administration, ventes, marketing et opérations',
    'service2-item2': 'Vous obtenez : un atelier interactif d’une demi-journée, des bibliothèques de requêtes et des aide-mémoire pour votre secteur',
    'service2-item3': 'Format : en personne ou virtuel',
    'service2-item4': 'Résultat : des habitudes d’IA pratiques que votre équipe peut adopter dès le lendemain',
    'service3-title': 'Automatisation pratique des flux de travail',
    'service3-desc': 'Simplifiez les tâches répétitives avec des flux de travail IA simples et fiables.',
    'service3-item1': 'Pour : les dirigeants et gestionnaires des opérations qui veulent automatiser rédaction, rapports, demandes ou contenu',
    'service3-item2': 'Vous obtenez : la mise en place des flux, des procédures pas à pas et des démonstrations pour l’équipe',
    'service3-item3': 'Format : projet de mise en œuvre',
    'service3-item4': 'Résultat : des heures récupérées chaque semaine sur le travail administratif manuel',
    'service4-title': 'Politique d’utilisation sûre de l’IA et gouvernance',
    'service4-desc': 'Protégez les données de vos clients et votre réputation avec une politique d’IA claire, sans lourdeur administrative.',
    'service4-item1': 'Pour : les dirigeants qui ont besoin de règles simples sur l’utilisation de l’IA par le personnel',
    'service4-item2': 'Vous obtenez : une politique d’utilisation de 2 pages, une liste de vérification Loi 25 et des lignes directrices pour le personnel',
    'service4-item3': 'Format : trousse de politique clés en main',
    'service4-item4': 'Résultat : des règles claires que votre équipe suit, avec la vie privée intégrée (conseils pratiques, pas des conseils juridiques)',
    'process-title': 'Comment ça fonctionne',
    'process-subtitle': 'Trois étapes simples, du premier appel à des résultats que votre équipe ressent.',
    'step1-title': '1. Découvrir',
    'step1-desc': 'Un court appel pour parler de vos outils actuels, des goulots d’étranglement de votre équipe et de vos objectifs.',
    'step2-title': '2. Cibler',
    'step2-desc': 'Nous choisissons les occasions d’IA qui offrent le meilleur rendement pour votre budget et votre entreprise.',
    'step3-title': '3. Réaliser',
    'step3-desc': 'Nous formons votre équipe et mettons en place des flux de travail simples et sécuritaires qui font gagner du temps rapidement.',
    'speaking-title': 'Conférences pour groupes d’affaires',
    'speaking-subtitle': 'Séances d’IA pratiques pour réseaux d’affaires, chambres de commerce et associations — sans battage, avec des applications concrètes.',
    'speaking-p1': 'Vos membres veulent utiliser l’IA dans leur entreprise dès demain matin, pas assister à une autre conférence pleine de battage. J’offre des présentations courtes et interactives, avec démonstrations en direct, adaptées à votre groupe, en français ou en anglais, en personne dans le Grand Montréal ou en ligne.',
    'speaking-cta': 'Demander une conférence',
    'about-title': 'À propos de Robert',
    'about-subtitle': 'Un leadership technologique pratique pour les dirigeants d’entreprise de Montréal.',
    'about-heading': 'Faites la connaissance de Robert Simon',
    'about-p1': 'Je suis un leader d’opinion indépendant en IA et un expert en transformation numérique, avec plus de 25 ans d’expérience en innovation numérique et en mise en œuvre de l’IA, notamment chez Bell Canada. Je me consacre maintenant à aider les PME à tirer une valeur concrète et quotidienne de l’IA.',
    'about-p2': 'Mon approche est pratique et sans battage : utiliser les outils que vous avez déjà, commencer par les tâches qui vous coûtent le plus de temps et protéger vos données. Pas de jargon d’agence — seulement des conseils clairs d’une personne qui comprend le fonctionnement réel des petites entreprises.',
    'about-summary': '<strong>En bref sur Robert Simon :</strong> Basé à Côte Saint-Luc, QC. Plus de 25 ans en technologie et en IA, notamment chez Bell Canada. Aide les PME avec des audits de rendement IA, des ateliers d’équipe, l’automatisation des flux de travail et des politiques d’utilisation sûre. Bilingue (français/anglais). Appel découverte gratuit. Téléphone : 514-250-8491. Courriel : biz@aiwithrobert.com.',
    'about-personal-link': 'Site personnel de Robert et blogue sur l’IA',
    'exp-years': 'Plus de 25 ans en technologie',
    'exp-bell': 'Expérience chez Bell Canada',
    'exp-bilingual': 'Bilingue FR / EN',
    'exp-workshops': 'Ateliers pratiques',
    'contact-title': 'Réservez votre appel découverte gratuit',
    'contact-subtitle': 'Parlez-moi un peu de votre entreprise et je vous répondrai dans un délai d’un jour ouvrable pour fixer un moment.',
    'contact-heading': 'L’IA pratique pour les entreprises de Montréal',
    'contact-call-note': 'Appelez à tout moment, ou remplissez le formulaire ci-dessous',
    'form-name': 'Votre nom',
    'form-email': 'Adresse courriel',
    'form-phone': 'Numéro de téléphone',
    'form-company': 'Entreprise (facultatif)',
    'form-interest': 'Je suis intéressé par',
    'form-option-choose': 'Choisissez une option...',
    'form-option-audit': 'Audit de rendement IA et feuille de route',
    'form-option-workshop': 'Atelier d’équipe',
    'form-option-automation': 'Automatisation des flux de travail',
    'form-option-policy': 'Politique d’utilisation sûre de l’IA',
    'form-option-speaking': 'Conférence pour un groupe',
    'form-option-unsure': 'Pas encore certain',
    'form-goals': 'Sur quoi aimeriez-vous de l’aide? (facultatif)',
    'form-goals-placeholder': 'Parlez-moi de votre entreprise et de ce qui vous prend le plus de temps...',
    'form-submit': 'Envoyer le message',
    'free-call-title': 'Appel découverte gratuit',
    'free-call-text': 'Une conversation amicale sur vos objectifs, sans pression ni obligation',
    'success-title': 'Merci!',
    'success-text': 'Votre demande a bien été reçue.<br>Je vous répondrai dans un délai d’un jour ouvrable.',
    'faq-title': 'Questions fréquentes',
    'faq-subtitle': 'Des réponses claires sur la consultation et la formation en IA pour les PME de Montréal.',
    'faq-q-different': 'En quoi est-ce différent d’acheter simplement des abonnements à des logiciels d’IA?',
    'faq-a-different': 'Un logiciel seul ne change pas une entreprise — savoir l’appliquer, oui. Je vous aide à choisir les bons outils et j’enseigne à votre équipe à s’en servir pour obtenir de vrais résultats.',
    'faq-q-cost': 'Combien cela coûte-t-il?',
    'faq-a-cost': 'Chaque entreprise est différente : chaque projet est défini à l’avance et vous connaissez le coût avant de commencer. Nous discutons des options lors de l’appel découverte gratuit.',
    'faq-q-data': 'Nos données d’entreprise seront-elles en sécurité?',
    'faq-a-data': 'La confidentialité des données est une priorité. Je vous montre comment configurer les outils pour que les renseignements confidentiels de votre entreprise et de vos clients restent privés, et je vous aide à rédiger des règles simples pour votre équipe.',
    'faq-q-law25': 'Quel est le lien avec la Loi 25 du Québec?',
    'faq-a-law25': 'La Loi 25 encadre la gestion des renseignements personnels. Je vous aide à configurer vos outils d’IA et à rédiger des lignes directrices pour votre personnel en tenant compte de ces exigences. Il s’agit de conseils pratiques, pas de conseils juridiques — pour toute question juridique, consultez votre avocat.',
    'faq-q-technical': 'Avons-nous besoin de compétences techniques ou d’un spécialiste TI?',
    'faq-a-technical': 'Non. Je travaille avec des dirigeants et du personnel sans formation technique. Si vous savez utiliser le courriel et un navigateur, vous pouvez utiliser ces solutions.',
    'faq-q-inperson': 'Travaillez-vous en personne ou en ligne?',
    'faq-a-inperson': 'Les deux. J’anime des ateliers et des rencontres en personne dans le Grand Montréal, ainsi que des séances virtuelles.',
    'faq-q-results': 'En combien de temps verrons-nous des résultats?',
    'faq-a-results': 'Les ateliers donnent à votre équipe des compétences utilisables dès le lendemain. Les projets de flux de travail commencent généralement à faire gagner du temps en quelques semaines, selon l’ampleur.',
    'faq-q-french': 'Les services sont-ils offerts en français?',
    'faq-a-french': 'Oui. Les ateliers, l’accompagnement, les politiques et les documents sont offerts en français et en anglais.',
    'footer-tagline': 'Stratégie IA pratique et formation d’équipe pour les entreprises de Montréal',
    'footer-services': 'Audits de rendement &bull; Ateliers d’équipe &bull; Automatisation &bull; Politiques d’utilisation de l’IA',
    'footer-serving': 'Au service de Côte Saint-Luc, de Montréal et du Grand Montréal — en français et en anglais',
    'footer-seniors-link': 'Vous cherchez de l’aide en IA pour aînés? Visitez AI with Robert pour aînés',
    'footer-rights': 'Tous droits réservés.',
  }

}; // end translations
/**
 * language.js — Language detection and switching
 * Reads ?lang= from the URL, falls back to localStorage, defaults to 'en'.
 */

/**
 * Which language this URL *is*, structurally: /fr/ serves a fully pre-rendered
 * French page, everything else serves English. This is authoritative and must
 * outrank ?lang= and localStorage — without it a returning visitor whose
 * localStorage says 'en' would land on /fr/ and have the whole page instantly
 * rewritten into English, and every crawler that runs JS would index /fr/ as
 * a duplicate of the English page.
 */
function getPageLanguage() {
  // Strip a trailing slash and/or an explicit index.html before testing, so
  // /fr/, /fr and /fr/index.html all read as French. Without the index.html
  // case a direct hit on /fr/index.html — which crawlers and hand-typed links
  // do produce — would fall through to 'en' and rewrite the French page into
  // English while the address bar still said /fr/.
  var path = window.location.pathname.replace(/\/(index\.html?)?$/i, '');
  return path.endsWith('/fr') ? 'fr' : 'en';
}

function getCurrentLanguage() {
  const pageLang = getPageLanguage();
  if (pageLang === 'fr') return 'fr';

  const p = new URLSearchParams(window.location.search);
  const l = p.get('lang');
  if (l === 'en' || l === 'fr') return l;
  return localStorage.getItem('language') || 'en';
}

/** Canonical URL for a language, preserving any anchor the visitor is on. */
function urlForLanguage(lang) {
  return (lang === 'fr' ? '/fr/' : '/') + window.location.hash;
}

function setLanguage(lang) {
  localStorage.setItem('language', lang);

  // Each language has its own real, indexable URL. If the requested language
  // isn't the one this URL serves, navigate instead of swapping text in place:
  // that keeps the visible language and the address bar in agreement, and
  // gives the hreflang pair in <head> two genuinely distinct pages to point at.
  if (lang !== getPageLanguage()) {
    window.location.href = urlForLanguage(lang);
    return;
  }

  const url = new URL(window.location);
  url.searchParams.delete('lang');
  window.history.replaceState({}, '', url);

  // Update all translatable elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update textarea placeholder separately
  const ta = document.querySelector('[data-i18n-placeholder]');
  if (ta) {
    const k = ta.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][k]) {
      ta.placeholder = translations[lang][k];
    }
  }

  // Update select option text
  document.querySelectorAll('select option[data-i18n]').forEach(opt => {
    const k = opt.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][k]) {
      opt.textContent = translations[lang][k];
    }
  });

  // Sync the language selector dropdown
  document.getElementById('language-select').value = lang;

  // Update page-level meta
  if (lang === 'fr') {
    // Must stay byte-identical to FR_TITLE/FR_DESC in scripts/build_fr_page.py,
    // which bakes them into /fr/. Title <= 60 chars, description <= 155, or
    // search engines truncate them and Bing flags an SEO error.
    document.title = 'AI with Robert pour entreprises — IA pratique, Montréal';
    document.querySelector('meta[name="description"]').setAttribute('content',
      'Stratégie et formation IA pratiques pour les PME de Montréal. Un vrai rendement, en toute sécurité. Appel découverte gratuit. 514-250-8491.');
    document.documentElement.lang = 'fr';
  } else {
    // Must stay byte-identical to the <title>/<meta name="description"> in
    // index.html's <head>. JS overwrites them on load, so any drift means
    // crawlers that render JS see different metadata than those that don't.
    document.title = 'AI with Robert for Business — Practical AI, Montréal';
    document.querySelector('meta[name="description"]').setAttribute('content',
      'Practical AI strategy and team training for small and mid-sized businesses in Montréal. Real ROI, used safely. Free discovery call. 514-250-8491.');
    document.documentElement.lang = 'en';
  }

  checkFormValidity();
}

window.setLanguage = setLanguage;
window.getCurrentLanguage = getCurrentLanguage;
window.getPageLanguage = getPageLanguage;
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
/**
 * ui.js — FAQ accordion and navigation highlight on scroll
 */

/* ── FAQ accordion ── */
function toggleFaq(btn) {
  const answer = btn.nextElementSibling;
  const isOpen = btn.getAttribute('aria-expanded') === 'true';

  // Close all
  document.querySelectorAll('.faq-question').forEach(b => {
    b.setAttribute('aria-expanded', 'false');
    b.nextElementSibling.classList.remove('open');
  });

  // Open clicked one if it was closed
  if (!isOpen) {
    btn.setAttribute('aria-expanded', 'true');
    answer.classList.add('open');
  }
}

window.toggleFaq = toggleFaq;

/* ── Nav active highlight on scroll ── */
const sections = document.querySelectorAll('section, .hero');
const navLinks  = document.querySelectorAll('nav a');

function highlightNav() {
  let cur = '';
  const sp = window.scrollY + 250;
  sections.forEach(s => {
    if (sp >= s.offsetTop && sp < s.offsetTop + s.clientHeight) {
      cur = s.getAttribute('id');
    }
  });

  const changed = cur !== highlightNav.lastActive;
  highlightNav.lastActive = cur;

  navLinks.forEach(a => {
    a.classList.remove('active');
    // aria-current gives screen reader users the same "you are here"
    // signal the visual .active style gives sighted users — without
    // it, the active-section highlight was purely decorative.
    a.removeAttribute('aria-current');
    if (a.getAttribute('href') === '#' + cur) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'true');
    }
  });

  // Keep the scroll-highlighted nav item in view as the page scrolls,
  // not just when someone taps a link — same centering used for taps.
  // Guarded because revealNavItemForHash isn't wired up until
  // navTapReveal() runs, which happens slightly after the first
  // highlightNav() call on page load.
  if (changed && cur && typeof window.revealNavItemForHash === 'function') {
    window.revealNavItemForHash('#' + cur);
  }
}

window.addEventListener('scroll', highlightNav, { passive: true });

/* ── Corrective anchor scroll ──
   Why this is needed: when a link like index.html?lang=fr#pricing loads,
   the browser jumps to #pricing BEFORE our JS runs. setLanguage() then
   swaps in French text, which is often longer than English and changes
   the height of every section above the target — so by the time layout
   settles, the browser's original jump is off. Clicking a nav link
   in-page never hits this because layout is already stable by then.
   Fix: after the language swap (and again after fonts/images finish
   loading, which can also shift heights), recompute the target's real
   position — accounting for the fixed nav's height — and re-scroll. */
function scrollToHashTarget() {
  const hash = window.location.hash;
  if (!hash || hash.length < 2) return;

  let target;
  try { target = document.querySelector(hash); } catch (e) { return; }
  if (!target) return;

  const nav = document.querySelector('nav');
  const offset = (nav ? nav.offsetHeight : 0) + 16;
  const y = target.getBoundingClientRect().top + window.pageYOffset - offset;

  // Force an instant jump (not the smooth-scroll from base.css) since
  // this is a silent correction, not a user-initiated navigation.
  const prevBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';
  window.scrollTo(0, Math.max(y, 0));
  document.documentElement.style.scrollBehavior = prevBehavior;
}

window.scrollToHashTarget = scrollToHashTarget;

/* ── Mobile/tablet nav scroll affordance ──
   The nav links can overflow horizontally on narrower screens (see
   nav.css / responsive.css). Since the scrollbar itself is hidden,
   people had no visual cue there was more to scroll to. This adds a
   fade on whichever edge has hidden content, plus a one-time gentle
   nudge on load so the scrollability is obvious without anyone
   having to discover it by accident. */
/* Respect prefers-reduced-motion: reused by the nav nudge and the
   centering behavior below. Some seniors are more sensitive to
   on-screen motion (vestibular issues), and this is the standard way
   browsers let people opt out of non-essential animation. */
function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function initNavScrollHint() {
  const wrap = document.querySelector('.nav-scroll-wrap');
  const list = wrap ? wrap.querySelector('ul') : null;
  if (!wrap || !list) return;

  function updateFade() {
    const hasOverflow = list.scrollWidth > list.clientWidth + 2;
    wrap.classList.toggle('has-overflow', hasOverflow);
    wrap.classList.toggle('scrolled-start', list.scrollLeft <= 2);
    wrap.classList.toggle(
      'scrolled-end',
      list.scrollLeft + list.clientWidth >= list.scrollWidth - 2
    );
  }

  list.addEventListener('scroll', updateFade, { passive: true });
  window.addEventListener('resize', updateFade);
  updateFade();

  if (list.dataset.navHintShown) return;

  // The nudge is purely decorative — skip it entirely under reduced
  // motion rather than just making it instant, since even an instant
  // jump-and-back reads as unwanted motion for this preference.
  if (prefersReducedMotion()) {
    list.dataset.navHintShown = 'true';
    return;
  }

  if (list.scrollWidth > list.clientWidth + 2) {
    list.dataset.navHintShown = 'true';
    setTimeout(() => {
      list.scrollTo({ left: 40, behavior: 'smooth' });
      setTimeout(() => {
        list.scrollTo({ left: 0, behavior: 'smooth' });
        updateFade();
      }, 500);
    }, 700);
  }
}

window.navScrollHint = initNavScrollHint;

/* ── Tap-to-reveal for partially hidden nav items ──
   If someone taps a link to a section that's cut off at the edge of
   the scrollable nav (e.g. "Testimonials" bleeding off-screen), bring
   it fully into view by scrolling the nav horizontally, in addition
   to the normal page jump to that section. This doubles as a second,
   context-specific cue that the nav scrolls.

   Driven by the target hash rather than "whatever was clicked": the
   logo also links to #home but lives outside the scrollable list, so
   listening only on list links missed it. Listening on every #-link
   in <nav> and resolving to the matching list item fixes that, and
   naturally works in reverse too — scrollIntoView shifts the list
   left or right, whichever direction is actually needed. */
function initNavTapReveal() {
  const wrap = document.querySelector('.nav-scroll-wrap');
  const list = wrap ? wrap.querySelector('ul') : null;
  if (!list) return;

  function revealForHash(hash) {
    if (!hash) return;
    // Only step in when the nav is actually scrollable — on a full-width
    // nav (desktop/no overflow) there's nothing to center, so don't
    // trigger an unnecessary no-op scroll animation.
    if (!wrap.classList.contains('has-overflow')) return;

    let targetLink;
    try { targetLink = list.querySelector(`a[href="${hash}"]`); } catch (e) { return; }
    const li = targetLink ? targetLink.closest('li') : null;
    if (!li) return;

    // Always center the active item — not just when it's cut off —
    // so there's consistently room to reach neighbors on both sides
    // after tapping something near either edge. Still centers under
    // reduced motion (that's functional, not decorative) but skips
    // the animation itself.
    li.scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      inline: 'center',
      block: 'nearest'
    });
  }

  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', () => {
      revealForHash(link.getAttribute('href'));
    });
  });

  window.revealNavItemForHash = revealForHash;
}

window.navTapReveal = initNavTapReveal;
/**
 * main.js — Initialisation
 * Runs after DOM is ready. Order matters: language must apply before
 * form validity is checked (checkFormValidity reads getCurrentLanguage).
 */

window.addEventListener('DOMContentLoaded', () => {
  const copyrightYear = document.getElementById('copyright-year');
  if (copyrightYear) copyrightYear.textContent = new Date().getFullYear();

  setLanguage(getCurrentLanguage());
  checkFormValidity();
  highlightNav();
  checkFormSuccess();
  navScrollHint();
  navTapReveal();

  // Double rAF: wait for the i18n text swap above to actually reflow
  // the layout before measuring where the anchor now sits.
  requestAnimationFrame(() => requestAnimationFrame(scrollToHashTarget));
});

// Images can still shift section heights after DOMContentLoaded fires.
window.addEventListener('load', () => {
  scrollToHashTarget();
  navScrollHint();
});

// Web fonts swapping in (FOUT) can also shift heights; correct once more.
if (window.document.fonts && document.fonts.ready) {
  document.fonts.ready.then(scrollToHashTarget);
}
