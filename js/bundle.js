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
    'hero-title': 'Get Far More From the AI You Already Pay For',
    'hero-tagline': 'Most small businesses use ChatGPT, Gemini, Microsoft Copilot or Claude for emails and quick answers — a fraction of what those subscriptions can do. I help you turn them into repeatable workflows that save time and money, often without buying anything new.',
    'hero-area-note': 'For owner-run businesses and small teams of about 5 to 20 people — no IT department needed. Based in Côte Saint-Luc, serving Greater Montréal, in person or online, in English or French.',
    'hero-cta': 'Book a Free Discovery Call',
    'stat-years': '25+',
    'stat-years-label': 'Years in Technology',
    'stat-bilingual': 'EN / FR',
    'stat-bilingual-label': 'Fully Bilingual',
    'stat-platforms': '4+',
    'stat-platforms-label': 'AI Platforms We Work With',
    'stat-free': 'Free',
    'stat-free-label': 'Discovery Call',
    'entity-aside': '<strong>AI with Robert for Business</strong> — AI consulting and workflow automation for small businesses in Montréal, QC. Helping owners get far more value from the AI subscriptions they already pay for (ChatGPT, Gemini, Microsoft Copilot, Claude). Led by Robert Simon. Bilingual (English/French), in person or online. Free discovery call. <a href="tel:514-250-8491">514-250-8491</a> &nbsp;&middot;&nbsp; <a href="mailto:biz@aiwithrobert.com">biz@aiwithrobert.com</a>',
    'geo-summary': '<strong>AI with Robert for Business</strong> is the business branch of AI with Robert, founded by <strong>Robert Simon</strong>, a technology professional with over 25 years of experience in digital innovation and AI implementation, including at Bell Canada. It is an independent, platform-neutral AI productivity and automation consultancy for small businesses (about 5–20 employees) in Greater Montréal. It helps owners get more value from the AI subscriptions they already pay for — ChatGPT, Google Gemini, Microsoft Copilot, Claude and other affordable tools — through four services: an AI opportunity assessment, AI workflow automation, AI agents and advanced automation, and practical AI training. Results are measured in time saved and business value, with human oversight and privacy (including Quebec’s Law 25) taken into account. Available in English and French, in person or online. Book a free discovery call at 514-250-8491 or biz@aiwithrobert.com. This is a separate branch from AI with Robert for Seniors (seniors.aiwithrobert.com).',
    'opp-title': 'You’re Probably Using a Fraction of the AI You Already Pay For',
    'opp-subtitle': 'Most small businesses stop at the chat window. The real savings come from turning AI into processes that run the same way every time.',
    'opp-platforms-label': 'Independent and platform-neutral — I work with the tools you already have:',
    'opp-today-title': 'Where most teams stop',
    'opp-today-intro': 'Useful, but it’s only the starting point:',
    'opp-today-1': 'Polishing and writing emails',
    'opp-today-2': 'Drafting marketing content',
    'opp-today-3': 'Summarizing documents',
    'opp-today-4': 'Answering one-off questions',
    'opp-today-5': 'Brainstorming ideas',
    'opp-next-title': 'Where the real time savings are',
    'opp-next-intro': 'Repeatable workflows that do the work for you:',
    'opp-next-1': 'Incoming documents and emails processed automatically',
    'opp-next-2': 'Details pulled from forms and requests into the right place',
    'opp-next-3': 'Quotes and proposals prepared from your own templates',
    'opp-next-4': 'Customer inquiries sorted, with follow-ups handled',
    'opp-next-5': 'Weekly and monthly reports assembled for you',
    'opp-next-6': 'AI assistants that handle defined tasks, with your approval',
    'opp-callout-title': 'No enterprise platform. No custom software. Often, no new subscription.',
    'opp-callout-text': 'We start with the tools you already pay for and the tasks that cost you the most time. Success is measured in hours saved, manual work removed and processes that run better — not in buzzwords.',
    'opp-caveat': 'What’s possible depends on your plan, tools and connections. If a workflow needs an extra service or a paid connection, I’ll explain the trade-off and the expected payoff before you decide.',
    'services-title': 'Services',
    'services-subtitle': 'Four ways to get more from the AI tools you already pay for. Start with the one that fits — or we’ll work it out together.',
    'service1-title': 'AI Opportunity Assessment',
    'service1-desc': 'Find out where AI can make a real difference in your business — and what it’s worth.',
    'service1-item1': 'Review the AI subscriptions you already pay for and how they’re used',
    'service1-item2': 'Map your processes and spot the repetitive tasks that cost the most time',
    'service1-item3': 'Prioritize the opportunities and estimate time savings and ROI',
    'service1-item4': 'Get a practical roadmap you can act on, on your own or with my help',
    'service2-title': 'AI Workflow Automation',
    'service2-desc': 'Turn what AI can do into repeatable processes that save time every week.',
    'service2-item1': 'Process incoming documents, forms and emails',
    'service2-item2': 'Prepare quotes and proposals from your own templates',
    'service2-item3': 'Sort customer inquiries and automate follow-ups',
    'service2-item4': 'Build recurring reports and consolidate information automatically',
    'service3-title': 'AI Agents &amp; Advanced Automation',
    'service3-desc': 'For businesses ready to go further: AI that carries out defined tasks across your tools, with you in control. Not every business needs this — I only recommend it when it pays off.',
    'service3-item1': 'AI assistants that handle a defined job, such as research or first-line customer replies',
    'service3-item2': 'Multi-step workflows that connect your apps and business information',
    'service3-item3': 'Human approval built in wherever it matters',
    'service3-item4': 'Scope and cost depend on the tools and connections involved — explained up front',
    'service4-title': 'Practical AI Training &amp; Enablement',
    'service4-desc': 'Help you and your team move beyond basic AI use — and keep the results going.',
    'service4-item1': 'Get more from the subscriptions you already have',
    'service4-item2': 'Build reusable prompts and workflows for everyday tasks',
    'service4-item3': 'Spot where automation fits, and use AI responsibly with privacy (including Quebec’s Law 25) in mind',
    'service4-item4': 'Learn to maintain and improve your new workflows yourselves',
    'process-title': 'How It Works',
    'process-subtitle': 'Four connected steps, from first conversation to results you can measure — with time saved and return on investment in view throughout.',
    'step1-title': '1. Discover',
    'step1-desc': 'We talk about your tools, your team and the tasks that eat up your time, and spot where AI and automation could help most.',
    'step2-title': '2. Design',
    'step2-desc': 'I design practical solutions around your existing subscriptions, affordable integrations and the right automation tools.',
    'step3-title': '3. Implement',
    'step3-desc': 'I set up the workflows, automations and assistants, with human approval and oversight wherever it matters.',
    'step4-title': '4. Enable',
    'step4-desc': 'I train you and your team to run, understand and maintain the new workflows, so the savings last.',
    'speaking-title': 'Speaking for Business Groups',
    'speaking-subtitle': 'Practical, hands-on AI sessions for networking groups, chambers and associations — no hype, real takeaways.',
    'speaking-p1': 'Your members want to use AI in their own businesses tomorrow morning, not sit through another hype-filled keynote. I deliver short, interactive talks and live demonstrations tailored to your group, in English or French, in person across Greater Montréal or online.',
    'speaking-cta': 'Ask About Speaking',
    'about-title': 'About Robert',
    'about-subtitle': 'Practical technology leadership for Montréal business owners.',
    'about-heading': 'Meet Robert Simon',
    'about-p1': 'I’m an independent AI thought leader and digital transformation expert with over 25 years of experience in digital innovation and AI implementation, including at Bell Canada. I now focus on helping small and mid-sized businesses get real, everyday value from AI.',
    'about-p2': 'My approach is practical and zero-hype: use the tools you already pay for, start with the tasks that cost you the most time, measure the savings, and keep your data private. No agency jargon — just clear guidance from someone who understands how small businesses actually run.',
    'about-summary': '<strong>Quick facts about Robert Simon:</strong> Based in Côte Saint-Luc, QC. Over 25 years in technology and AI, including Bell Canada. Helps small businesses get more from the AI tools they already pay for: opportunity assessments, workflow automation, AI agents and practical training. Bilingual (English/French). Free discovery call. Phone: 514-250-8491. Email: biz@aiwithrobert.com.',
    'about-personal-link': 'Robert’s Personal Site &amp; AI Insights Blog',
    'exp-years': '25+ Years in Technology',
    'exp-bell': 'Bell Canada Experience',
    'exp-bilingual': 'Bilingual EN / FR',
    'exp-workshops': 'Hands-On Workshops',
    'contact-title': 'Let’s Find Where AI Can Save Your Business Time and Money',
    'contact-subtitle': 'Tell me a little about your business. It’s a friendly, no-pressure conversation — I’ll get back to you within one business day to set up a time.',
    'contact-heading': 'A Friendly Conversation, Not a Sales Pitch',
    'contact-call-note': 'Call anytime, or fill out the form below',
    'form-name': 'Your Name',
    'form-email': 'Email Address',
    'form-phone': 'Phone Number',
    'form-company': 'Company (Optional)',
    'form-interest': 'I’m Interested In',
    'form-option-choose': 'Choose an option...',
    'form-option-audit': 'AI Opportunity Assessment',
    'form-option-automation': 'AI Workflow Automation',
    'form-option-agents': 'AI Agents & Advanced Automation',
    'form-option-workshop': 'Practical AI Training',
    'form-option-speaking': 'Speaking for a Group',
    'form-option-unsure': 'Not Sure Yet — Help Me Find Out',
    'form-goals': 'What Takes Up Most of Your Time? (Optional)',
    'form-goals-placeholder': 'Which AI tools do you use today, and which tasks eat up your week?',
    'form-submit': 'Send Message',
    'form-error-name': 'Please enter your name',
    'form-error-email': 'Please enter a valid email address',
    'form-error-phone': 'Please enter a valid phone number (XXX-XXX-XXXX)',
    'form-error-choice': 'Please choose an option',
    'free-call-title': 'Free Discovery Call',
    'free-call-text': 'We’ll look at the AI tools you already use and where they could save you time — no pressure, no obligation.',
    'success-title': 'Thank You!',
    'success-text': 'Your request has been received.<br>I’ll get back to you within one business day.',
    'faq-title': 'Frequently Asked Questions',
    'faq-subtitle': 'Straight answers about AI consulting, automation and training for small businesses in Montréal.',
    'faq-q-different': 'How is this different from just buying more AI subscriptions?',
    'faq-a-different': 'You probably don’t need another one. Most businesses already pay for ChatGPT, Gemini, Copilot or Claude and use a fraction of what they offer. I help you turn what you already have into repeatable workflows, and I only suggest something extra when it clearly pays for itself.',
    'faq-q-platforms': 'Which AI platforms do you work with?',
    'faq-a-platforms': 'ChatGPT, Google Gemini, Microsoft Copilot and Claude, plus other affordable automation tools where they fit. I’m independent, so I recommend what suits your business. What’s possible varies by plan, connectors, API access and third-party services, so I confirm what your subscriptions can actually do before we plan anything.',
    'faq-q-agents': 'Do we need an AI agent?',
    'faq-a-agents': 'Not necessarily. Many businesses get most of their savings from simpler workflows. I only suggest agents or advanced automation when the payoff justifies the extra complexity and cost, and I explain the trade-offs in plain language.',
    'faq-q-cost': 'How much does it cost?',
    'faq-a-cost': 'Every business is different, so each project is scoped up front and you know the cost before we start. If a workflow needs an extra tool or paid service, I explain the cost and the expected value first. We discuss options on the free discovery call.',
    'faq-q-measure': 'How do we know it’s working?',
    'faq-a-measure': 'We agree up front on what to measure — usually time saved, manual work removed and how smoothly a process runs — and look at those numbers once the workflow is in place.',
    'faq-q-data': 'Will our business data be safe?',
    'faq-a-data': 'Data privacy is a priority. I show you how to set tools up so confidential business and client information stays private, and I help you write simple rules for your team.',
    'faq-q-law25': 'How does this relate to Quebec’s Law 25?',
    'faq-a-law25': 'Law 25 governs how personal information is handled. I help you set up AI tools and write staff guidelines with those requirements in mind. This is practical guidance, not legal advice — for legal questions, check with your lawyer.',
    'faq-q-technical': 'Do we need technical skills or an IT person on staff?',
    'faq-a-technical': 'No. I work with non-technical owners and staff. If you can use email and a web browser, you can use these solutions.',
    'faq-q-inperson': 'Do you work in person or online?',
    'faq-a-inperson': 'Both. I run in-person workshops and meetings across Greater Montréal, as well as virtual sessions.',
    'faq-q-results': 'How quickly will we see results?',
    'faq-a-results': 'Training gives your team skills they can use the next day. Workflow projects typically start saving time within a few weeks, depending on scope.',
    'faq-q-french': 'Are services available in French?',
    'faq-a-french': 'Yes. Training, coaching, policies and materials are available in both English and French.',
    'footer-tagline': 'Helping Montréal Small Businesses Get More From the AI They Already Pay For',
    'footer-services': 'Opportunity assessments &bull; Workflow automation &bull; AI agents &bull; Practical training',
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
    'hero-title': 'Tirez beaucoup plus de l’IA que vous payez déjà',
    'hero-tagline': 'La plupart des petites entreprises utilisent ChatGPT, Gemini, Microsoft Copilot ou Claude pour rédiger des courriels et obtenir des réponses rapides — une fraction de ce que ces abonnements peuvent faire. Je vous aide à en faire des processus répétables qui font gagner du temps et de l’argent, souvent sans rien acheter de plus.',
    'hero-area-note': 'Pour les entreprises dirigées par leur propriétaire et les petites équipes d’environ 5 à 20 personnes — aucun service TI requis. Basé à Côte Saint-Luc, au service du Grand Montréal, en personne ou en ligne, en français ou en anglais.',
    'hero-cta': 'Réserver un appel découverte gratuit',
    'stat-years': '25+',
    'stat-years-label': 'Années en technologie',
    'stat-bilingual': 'FR / EN',
    'stat-bilingual-label': 'Entièrement bilingue',
    'stat-platforms': '4+',
    'stat-platforms-label': 'Plateformes d’IA avec lesquelles je travaille',
    'stat-free': 'Gratuit',
    'stat-free-label': 'Appel découverte',
    'entity-aside': '<strong>AI with Robert pour entreprises</strong> — consultation en IA et automatisation des flux de travail pour les petites entreprises de Montréal, QC. J’aide les dirigeants à tirer beaucoup plus de valeur des abonnements d’IA qu’ils paient déjà (ChatGPT, Gemini, Microsoft Copilot, Claude). Dirigé par Robert Simon. Bilingue (français/anglais), en personne ou en ligne. Appel découverte gratuit. <a href="tel:514-250-8491">514-250-8491</a> &nbsp;&middot;&nbsp; <a href="mailto:biz@aiwithrobert.com">biz@aiwithrobert.com</a>',
    'geo-summary': '<strong>AI with Robert pour entreprises</strong> est la branche d’affaires d’AI with Robert, fondée par <strong>Robert Simon</strong>, professionnel des technologies avec plus de 25 ans d’expérience en innovation numérique et en mise en œuvre de l’IA, notamment chez Bell Canada. Il s’agit d’un cabinet indépendant, neutre quant aux plateformes, spécialisé en productivité et en automatisation par l’IA pour les petites entreprises (environ 5 à 20 employés) du Grand Montréal. Il aide les dirigeants à tirer plus de valeur des abonnements d’IA qu’ils paient déjà — ChatGPT, Google Gemini, Microsoft Copilot, Claude et d’autres outils abordables — grâce à quatre services : une évaluation des occasions d’IA, l’automatisation des flux de travail par l’IA, les agents IA et l’automatisation avancée, et la formation pratique en IA. Les résultats se mesurent en temps gagné et en valeur d’affaires, avec supervision humaine et respect de la vie privée (y compris la Loi 25 du Québec). Offert en français et en anglais, en personne ou en ligne. Réservez un appel découverte gratuit au 514-250-8491 ou à biz@aiwithrobert.com. Cette branche est distincte d’AI with Robert pour aînés (seniors.aiwithrobert.com).',
    'opp-title': 'Vous n’utilisez probablement qu’une fraction de l’IA que vous payez déjà',
    'opp-subtitle': 'La plupart des petites entreprises s’arrêtent à la fenêtre de clavardage. Les vraies économies viennent de l’IA transformée en processus qui fonctionnent toujours de la même façon.',
    'opp-platforms-label': 'Indépendant et neutre quant aux plateformes — je travaille avec les outils que vous avez déjà :',
    'opp-today-title': 'Là où la plupart des équipes s’arrêtent',
    'opp-today-intro': 'Utile, mais ce n’est qu’un point de départ :',
    'opp-today-1': 'Rédiger et peaufiner des courriels',
    'opp-today-2': 'Rédiger du contenu marketing',
    'opp-today-3': 'Résumer des documents',
    'opp-today-4': 'Répondre à des questions ponctuelles',
    'opp-today-5': 'Trouver des idées',
    'opp-next-title': 'Là où se trouvent les vraies économies de temps',
    'opp-next-intro': 'Des processus répétables qui font le travail à votre place :',
    'opp-next-1': 'Documents et courriels entrants traités automatiquement',
    'opp-next-2': 'Renseignements tirés des formulaires et des demandes et placés au bon endroit',
    'opp-next-3': 'Soumissions et propositions préparées à partir de vos propres modèles',
    'opp-next-4': 'Demandes de clients triées, avec suivis pris en charge',
    'opp-next-5': 'Rapports hebdomadaires et mensuels préparés pour vous',
    'opp-next-6': 'Assistants IA qui accomplissent des tâches précises, avec votre approbation',
    'opp-callout-title': 'Pas de plateforme d’entreprise. Pas de logiciel sur mesure. Souvent, aucun nouvel abonnement.',
    'opp-callout-text': 'Nous commençons par les outils que vous payez déjà et les tâches qui vous font perdre le plus de temps. Le succès se mesure en heures gagnées, en travail manuel éliminé et en processus qui fonctionnent mieux — pas en mots à la mode.',
    'opp-caveat': 'Ce qui est possible dépend de votre forfait, de vos outils et de leurs connexions. Si un processus exige un service additionnel ou une connexion payante, je vous explique le compromis et le gain attendu avant que vous décidiez.',
    'services-title': 'Services',
    'services-subtitle': 'Quatre façons de tirer plus des outils d’IA que vous payez déjà. Commencez par celle qui vous convient — ou trouvons-la ensemble.',
    'service1-title': 'Évaluation des occasions d’IA',
    'service1-desc': 'Découvrez où l’IA peut vraiment changer les choses dans votre entreprise — et ce que cela vaut.',
    'service1-item1': 'Passer en revue les abonnements d’IA que vous payez déjà et la façon dont ils sont utilisés',
    'service1-item2': 'Cartographier vos processus et repérer les tâches répétitives qui coûtent le plus de temps',
    'service1-item3': 'Prioriser les occasions et estimer le temps gagné et le rendement',
    'service1-item4': 'Obtenir une feuille de route concrète, à appliquer seul ou avec mon aide',
    'service2-title': 'Automatisation des flux de travail par l’IA',
    'service2-desc': 'Transformez ce que l’IA peut faire en processus répétables qui font gagner du temps chaque semaine.',
    'service2-item1': 'Traiter les documents, formulaires et courriels entrants',
    'service2-item2': 'Préparer des soumissions et des propositions à partir de vos propres modèles',
    'service2-item3': 'Trier les demandes de clients et automatiser les suivis',
    'service2-item4': 'Produire des rapports récurrents et regrouper l’information automatiquement',
    'service3-title': 'Agents IA et automatisation avancée',
    'service3-desc': 'Pour les entreprises prêtes à aller plus loin : une IA qui accomplit des tâches précises dans vos outils, sous votre contrôle. Toutes les entreprises n’en ont pas besoin — je ne la recommande que lorsque c’est rentable.',
    'service3-item1': 'Des assistants IA qui accomplissent une tâche précise, comme la recherche ou les premières réponses aux clients',
    'service3-item2': 'Des flux en plusieurs étapes qui relient vos applications et vos données d’affaires',
    'service3-item3': 'Une approbation humaine intégrée là où c’est important',
    'service3-item4': 'L’ampleur et le coût dépendent des outils et des connexions requis — expliqués dès le départ',
    'service4-title': 'Formation pratique et accompagnement en IA',
    'service4-desc': 'Aidez-vous et votre équipe à aller au-delà de l’utilisation de base de l’IA — et à maintenir les résultats.',
    'service4-item1': 'Tirer plus des abonnements que vous avez déjà',
    'service4-item2': 'Créer des requêtes et des flux réutilisables pour les tâches courantes',
    'service4-item3': 'Repérer où l’automatisation s’applique et utiliser l’IA de façon responsable, en tenant compte de la vie privée (y compris la Loi 25 du Québec)',
    'service4-item4': 'Apprendre à maintenir et à améliorer vous-mêmes vos nouveaux flux de travail',
    'process-title': 'Comment ça fonctionne',
    'process-subtitle': 'Quatre étapes liées, de la première conversation à des résultats mesurables — avec le temps gagné et le rendement toujours en vue.',
    'step1-title': '1. Découvrir',
    'step1-desc': 'Nous discutons de vos outils, de votre équipe et des tâches qui vous font perdre du temps, puis nous repérons où l’IA et l’automatisation peuvent aider le plus.',
    'step2-title': '2. Concevoir',
    'step2-desc': 'Je conçois des solutions pratiques à partir de vos abonnements existants, d’intégrations abordables et des bons outils d’automatisation.',
    'step3-title': '3. Mettre en œuvre',
    'step3-desc': 'Je mets en place les flux de travail, les automatisations et les assistants, avec approbation et supervision humaines là où c’est important.',
    'step4-title': '4. Former et accompagner',
    'step4-desc': 'Je vous forme, vous et votre équipe, à utiliser, comprendre et maintenir les nouveaux flux de travail, pour que les gains durent.',
    'speaking-title': 'Conférences pour groupes d’affaires',
    'speaking-subtitle': 'Séances d’IA pratiques pour réseaux d’affaires, chambres de commerce et associations — sans battage, avec des applications concrètes.',
    'speaking-p1': 'Vos membres veulent utiliser l’IA dans leur entreprise dès demain matin, pas assister à une autre conférence pleine de battage. J’offre des présentations courtes et interactives, avec démonstrations en direct, adaptées à votre groupe, en français ou en anglais, en personne dans le Grand Montréal ou en ligne.',
    'speaking-cta': 'Demander une conférence',
    'about-title': 'À propos de Robert',
    'about-subtitle': 'Un leadership technologique pratique pour les dirigeants d’entreprise de Montréal.',
    'about-heading': 'Faites la connaissance de Robert Simon',
    'about-p1': 'Je suis un leader d’opinion indépendant en IA et un expert en transformation numérique, avec plus de 25 ans d’expérience en innovation numérique et en mise en œuvre de l’IA, notamment chez Bell Canada. Je me consacre maintenant à aider les PME à tirer une valeur concrète et quotidienne de l’IA.',
    'about-p2': 'Mon approche est pratique et sans battage : utiliser les outils que vous payez déjà, commencer par les tâches qui vous coûtent le plus de temps, mesurer les gains et protéger vos données. Pas de jargon d’agence — seulement des conseils clairs d’une personne qui comprend le fonctionnement réel des petites entreprises.',
    'about-summary': '<strong>En bref sur Robert Simon :</strong> Basé à Côte Saint-Luc, QC. Plus de 25 ans en technologie et en IA, notamment chez Bell Canada. Aide les petites entreprises à tirer plus des outils d’IA qu’elles paient déjà : évaluation des occasions, automatisation des flux de travail, agents IA et formation pratique. Bilingue (français/anglais). Appel découverte gratuit. Téléphone : 514-250-8491. Courriel : biz@aiwithrobert.com.',
    'about-personal-link': 'Site personnel de Robert et blogue sur l’IA',
    'exp-years': 'Plus de 25 ans en technologie',
    'exp-bell': 'Expérience chez Bell Canada',
    'exp-bilingual': 'Bilingue FR / EN',
    'exp-workshops': 'Ateliers pratiques',
    'contact-title': 'Trouvons où l’IA peut faire gagner du temps et de l’argent à votre entreprise',
    'contact-subtitle': 'Parlez-moi un peu de votre entreprise. C’est une conversation amicale et sans pression — je vous répondrai dans un délai d’un jour ouvrable pour fixer un moment.',
    'contact-heading': 'Une conversation amicale, pas un argumentaire de vente',
    'contact-call-note': 'Appelez à tout moment, ou remplissez le formulaire ci-dessous',
    'form-name': 'Votre nom',
    'form-email': 'Adresse courriel',
    'form-phone': 'Numéro de téléphone',
    'form-company': 'Entreprise (facultatif)',
    'form-interest': 'Je suis intéressé par',
    'form-option-choose': 'Choisissez une option...',
    'form-option-audit': 'Évaluation des occasions d’IA',
    'form-option-automation': 'Automatisation des flux de travail par l’IA',
    'form-option-agents': 'Agents IA et automatisation avancée',
    'form-option-workshop': 'Formation pratique en IA',
    'form-option-speaking': 'Conférence pour un groupe',
    'form-option-unsure': 'Pas encore certain — aidez-moi à le découvrir',
    'form-goals': 'Qu’est-ce qui vous prend le plus de temps? (facultatif)',
    'form-goals-placeholder': 'Quels outils d’IA utilisez-vous aujourd’hui, et quelles tâches mangent votre semaine?',
    'form-submit': 'Envoyer le message',
    'form-error-name': 'Veuillez entrer votre nom',
    'form-error-email': 'Veuillez entrer une adresse courriel valide',
    'form-error-phone': 'Veuillez entrer un numéro de téléphone valide (XXX-XXX-XXXX)',
    'form-error-choice': 'Veuillez choisir une option',
    'free-call-title': 'Appel découverte gratuit',
    'free-call-text': 'Nous examinerons les outils d’IA que vous utilisez déjà et où ils pourraient vous faire gagner du temps — sans pression ni obligation.',
    'success-title': 'Merci!',
    'success-text': 'Votre demande a bien été reçue.<br>Je vous répondrai dans un délai d’un jour ouvrable.',
    'faq-title': 'Questions fréquentes',
    'faq-subtitle': 'Des réponses claires sur la consultation, l’automatisation et la formation en IA pour les petites entreprises de Montréal.',
    'faq-q-different': 'En quoi est-ce différent d’acheter simplement d’autres abonnements d’IA?',
    'faq-a-different': 'Vous n’en avez probablement pas besoin d’un autre. La plupart des entreprises paient déjà pour ChatGPT, Gemini, Copilot ou Claude et n’en utilisent qu’une fraction. Je vous aide à transformer ce que vous avez déjà en processus répétables, et je ne suggère un ajout que s’il se rentabilise clairement.',
    'faq-q-platforms': 'Avec quelles plateformes d’IA travaillez-vous?',
    'faq-a-platforms': 'ChatGPT, Google Gemini, Microsoft Copilot et Claude, ainsi que d’autres outils d’automatisation abordables lorsqu’ils conviennent. Je suis indépendant : je recommande ce qui convient à votre entreprise. Ce qui est possible varie selon le forfait, les connecteurs, l’accès aux API et les services tiers; je vérifie donc ce que vos abonnements peuvent réellement faire avant de planifier quoi que ce soit.',
    'faq-q-agents': 'Avons-nous besoin d’un agent IA?',
    'faq-a-agents': 'Pas nécessairement. Plusieurs entreprises réalisent l’essentiel de leurs économies avec des flux de travail plus simples. Je ne propose des agents ou de l’automatisation avancée que si les retombées justifient la complexité et le coût additionnels, et j’explique les compromis en langage clair.',
    'faq-q-cost': 'Combien cela coûte-t-il?',
    'faq-a-cost': 'Chaque entreprise est différente : chaque projet est défini à l’avance et vous connaissez le coût avant de commencer. Si un flux de travail exige un outil ou un service payant additionnel, je vous explique d’abord le coût et la valeur attendue. Nous discutons des options lors de l’appel découverte gratuit.',
    'faq-q-measure': 'Comment saurons-nous que ça fonctionne?',
    'faq-a-measure': 'Nous convenons d’avance de ce qu’il faut mesurer — généralement le temps gagné, le travail manuel éliminé et la fluidité d’un processus — et nous examinons ces chiffres une fois le flux de travail en place.',
    'faq-q-data': 'Nos données d’entreprise seront-elles en sécurité?',
    'faq-a-data': 'La confidentialité des données est une priorité. Je vous montre comment configurer les outils pour que les renseignements confidentiels de votre entreprise et de vos clients restent privés, et je vous aide à rédiger des règles simples pour votre équipe.',
    'faq-q-law25': 'Quel est le lien avec la Loi 25 du Québec?',
    'faq-a-law25': 'La Loi 25 encadre la gestion des renseignements personnels. Je vous aide à configurer vos outils d’IA et à rédiger des lignes directrices pour votre personnel en tenant compte de ces exigences. Il s’agit de conseils pratiques, pas de conseils juridiques — pour toute question juridique, consultez votre avocat.',
    'faq-q-technical': 'Avons-nous besoin de compétences techniques ou d’un spécialiste TI?',
    'faq-a-technical': 'Non. Je travaille avec des dirigeants et du personnel sans formation technique. Si vous savez utiliser le courriel et un navigateur, vous pouvez utiliser ces solutions.',
    'faq-q-inperson': 'Travaillez-vous en personne ou en ligne?',
    'faq-a-inperson': 'Les deux. J’anime des ateliers et des rencontres en personne dans le Grand Montréal, ainsi que des séances virtuelles.',
    'faq-q-results': 'En combien de temps verrons-nous des résultats?',
    'faq-a-results': 'La formation donne à votre équipe des compétences utilisables dès le lendemain. Les projets de flux de travail commencent généralement à faire gagner du temps en quelques semaines, selon l’ampleur.',
    'faq-q-french': 'Les services sont-ils offerts en français?',
    'faq-a-french': 'Oui. La formation, l’accompagnement, les politiques et les documents sont offerts en français et en anglais.',
    'footer-tagline': 'Aider les petites entreprises de Montréal à tirer plus de l’IA qu’elles paient déjà',
    'footer-services': 'Évaluation des occasions &bull; Automatisation des flux de travail &bull; Agents IA &bull; Formation pratique',
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
    document.title = 'AI with Robert pour entreprises — IA pour PME, Montréal';
    document.querySelector('meta[name="description"]').setAttribute('content',
      'Vous payez déjà ChatGPT, Gemini, Copilot ou Claude? J’aide les PME de Montréal à en faire des processus qui font gagner du temps. Appel découverte gratuit.');
    document.documentElement.lang = 'fr';
  } else {
    // Must stay byte-identical to the <title>/<meta name="description"> in
    // index.html's <head>. JS overwrites them on load, so any drift means
    // crawlers that render JS see different metadata than those that don't.
    document.title = 'AI with Robert for Business — Small Business AI, Montréal';
    document.querySelector('meta[name="description"]').setAttribute('content',
      'Already paying for ChatGPT, Gemini, Copilot or Claude? I help Montréal small businesses turn them into workflows that save time. Free discovery call.');
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
