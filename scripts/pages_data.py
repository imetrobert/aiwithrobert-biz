# -*- coding: utf-8 -*-
"""Content for the business service pages and articles. Edit wording HERE, then run
`python3 scripts/build_pages.py`. Rules: independent and platform-neutral, no prices,
no invented statistics, clients, results or savings figures. Quebec French."""

PAGES = [
 {
  "id": "consulting", "kind": "service", "related": ["platforms", "subs"],
  "en": dict(
    slug="ai-consulting-small-business-montreal",
    title="AI Consulting for Small Businesses in Montréal",
    desc="Independent AI consulting for small businesses in Greater Montréal. Find where AI can save time, using the tools you already pay for.",
    h1="AI consulting for small businesses in Montréal",
    intro="AI with Robert for Business helps small businesses and professional practices of about 5 to 20 people find where AI can genuinely save time, and put it to work with the subscriptions they already have.",
    body="""
<h2>What the work looks like</h2>
<p>It starts with an AI Opportunity Assessment. We review the AI subscriptions you already pay for and how they are used, map your processes, and spot the repetitive tasks that cost the most time.</p>
<h2>What you get</h2>
<ul>
<li>A prioritized list of opportunities, with time savings and return on investment estimated where the numbers allow</li>
<li>A practical roadmap you can follow on your own or with my help</li>
<li>Written documentation in plain language, with prompts tailored to your tasks</li>
</ul>
<h2>Independent and platform-neutral</h2>
<p>I am not tied to any vendor. I recommend what suits your business, which may be ChatGPT, Google Gemini, Microsoft Copilot, Claude or another affordable tool. What is possible depends on your plan, connectors and integrations, so I confirm what your subscriptions can actually do before suggesting anything.</p>
<h2>Who it is for</h2>
<p>Professional services, trades, retail, health and wellness practices and other small teams in Greater Montréal. Beginners with no AI subscription yet are welcome too.</p>
<h2>How we start</h2>
<p>With a free discovery call. We look at the tools you use and the tasks that eat your time, and you decide whether to go further. Each engagement is scoped up front, and there is no public price list.</p>
""",
    faq=[("What does an AI consultant do for a small business?", "An AI consultant reviews the tools and processes a business already has, finds the repetitive tasks where AI can save time, and sets up practical, documented ways to use it. AI with Robert for Business does this for small businesses in Greater Montréal."),
         ("Do I need an AI subscription before I start?", "No. Businesses with no AI subscription are welcome, and so are those already paying for tools like ChatGPT, Gemini, Copilot or Claude.")],
  ),
  "fr": dict(
    slug="conseil-ia-petite-entreprise-montreal",
    title="Conseil en IA pour petites entreprises à Montréal",
    desc="Conseil en IA indépendant pour les petites entreprises du Grand Montréal. Repérez où l’IA peut vous faire gagner du temps avec les outils que vous payez déjà.",
    h1="Conseil en IA pour petites entreprises à Montréal",
    intro="AI with Robert pour entreprises aide les petites entreprises et pratiques professionnelles d’environ 5 à 20 personnes à repérer où l’IA peut réellement faire gagner du temps, puis à la mettre au travail avec les abonnements qu’elles ont déjà.",
    body="""
<h2>En quoi consiste le travail</h2>
<p>Tout commence par une évaluation des occasions d’IA. Nous passons en revue les abonnements d’IA que vous payez déjà et la façon dont ils sont utilisés, nous cartographions vos processus et nous repérons les tâches répétitives qui coûtent le plus de temps.</p>
<h2>Ce que vous obtenez</h2>
<ul>
<li>Une liste priorisée d’occasions, avec le temps gagné et le rendement estimés lorsque les chiffres le permettent</li>
<li>Une feuille de route concrète, à appliquer seul ou avec mon aide</li>
<li>De la documentation rédigée en langage clair, avec des requêtes adaptées à vos tâches</li>
</ul>
<h2>Indépendant et neutre quant aux plateformes</h2>
<p>Je ne suis lié à aucun fournisseur. Je recommande ce qui convient à votre entreprise : ChatGPT, Google Gemini, Microsoft Copilot, Claude ou un autre outil abordable. Ce qui est possible dépend de votre forfait, de vos connecteurs et de vos intégrations; je confirme donc ce que vos abonnements permettent réellement avant de proposer quoi que ce soit.</p>
<h2>À qui s’adresse ce service</h2>
<p>Services professionnels, métiers spécialisés, commerce de détail, cabinets de santé et de bien-être et autres petites équipes du Grand Montréal. Les débutants qui n’ont pas encore d’abonnement d’IA sont aussi les bienvenus.</p>
<h2>Comment commencer</h2>
<p>Par un appel découverte gratuit. Nous examinons les outils que vous utilisez et les tâches qui vous font perdre du temps, puis vous décidez si vous voulez aller plus loin. Chaque mandat est défini à l’avance, et il n’y a pas de liste de prix publique.</p>
""",
    faq=[("Que fait un consultant en IA pour une petite entreprise?", "Un consultant en IA passe en revue les outils et les processus d’une entreprise, repère les tâches répétitives où l’IA peut faire gagner du temps et met en place des façons pratiques et documentées de l’utiliser. AI with Robert pour entreprises offre ce service aux petites entreprises du Grand Montréal."),
         ("Ai-je besoin d’un abonnement d’IA pour commencer?", "Non. Les entreprises sans abonnement d’IA sont les bienvenues, tout comme celles qui paient déjà pour des outils comme ChatGPT, Gemini, Copilot ou Claude.")],
  ),
 },
 {
  "id": "platforms", "kind": "service", "related": ["compare", "subs"],
  "en": dict(
    slug="chatgpt-gemini-copilot-consulting",
    title="ChatGPT, Gemini and Copilot Consulting for Small Businesses",
    desc="Not sure which AI tool fits your small business? Independent help choosing and using ChatGPT, Gemini, Copilot or Claude in Montréal.",
    h1="ChatGPT, Gemini and Copilot consulting",
    intro="Most small businesses already have access to an AI assistant, or are about to. The harder part is knowing which one fits, and using it well. I help with both, without selling any platform.",
    body="""
<h2>Choosing the right tool</h2>
<p>ChatGPT, Google Gemini, Microsoft Copilot and Claude overlap a lot, but they differ in how they connect to the software you use every day. A business that lives in Microsoft 365 may be served differently from one that lives in Google Workspace. I look at your real tools and tasks first.</p>
<h2>Getting more from what you already pay for</h2>
<p>Many teams use a small fraction of their subscription. We look at how it is used today and where it could take on recurring work, using tailored prompts and simple workflows.</p>
<h2>Confirming what is possible</h2>
<p>What an assistant can do varies by plan, connectors, API access and third-party services. I confirm what your subscriptions can actually do, and I explain up front when something would need an extra service or a paid API.</p>
<h2>What you keep</h2>
<ul>
<li>Documentation in plain language, with prompts written for your specific tasks</li>
<li>Configured workflows around your recurring tasks, with a walkthrough</li>
</ul>
<h2>Start with a conversation</h2>
<p>A free discovery call is the first step. There is no obligation and no public price list; each engagement is scoped after we talk.</p>
""",
    faq=[("Which is best for a small business: ChatGPT, Gemini or Copilot?", "It depends on the tools your team already uses and the tasks you want help with. There is no single best choice, so it is worth comparing them against your real work before paying for more subscriptions."),
         ("Can you help us use the AI subscription we already have?", "Yes. Many teams use only a small part of their subscription. I review how it is used and set up tailored prompts and workflows for recurring tasks.")],
  ),
  "fr": dict(
    slug="conseil-chatgpt-gemini-copilot",
    title="Conseil ChatGPT, Gemini et Copilot pour petites entreprises",
    desc="Quel outil d’IA convient à votre petite entreprise? Aide indépendante pour choisir et utiliser ChatGPT, Gemini, Copilot ou Claude à Montréal.",
    h1="Conseil ChatGPT, Gemini et Copilot",
    intro="La plupart des petites entreprises ont déjà accès à un assistant d’IA, ou sont sur le point de l’avoir. Le plus difficile est de savoir lequel convient et de bien s’en servir. J’aide pour les deux, sans vendre aucune plateforme.",
    body="""
<h2>Choisir le bon outil</h2>
<p>ChatGPT, Google Gemini, Microsoft Copilot et Claude se recoupent beaucoup, mais ils diffèrent par leur façon de se connecter aux logiciels que vous utilisez chaque jour. Une entreprise qui vit dans Microsoft 365 n’est pas forcément bien servie comme une entreprise qui vit dans Google Workspace. Je regarde d’abord vos vrais outils et vos vraies tâches.</p>
<h2>Tirer plus de ce que vous payez déjà</h2>
<p>Beaucoup d’équipes n’utilisent qu’une petite fraction de leur abonnement. Nous regardons comment il est utilisé aujourd’hui et où il pourrait prendre en charge du travail récurrent, à l’aide de requêtes adaptées et de flux simples.</p>
<h2>Confirmer ce qui est possible</h2>
<p>Ce qu’un assistant peut faire varie selon le forfait, les connecteurs, l’accès aux API et les services tiers. Je confirme ce que vos abonnements permettent réellement et j’explique dès le départ lorsqu’un service additionnel ou une API payante serait nécessaire.</p>
<h2>Ce que vous conservez</h2>
<ul>
<li>De la documentation en langage clair, avec des requêtes rédigées pour vos tâches précises</li>
<li>Des flux de travail configurés autour de vos tâches récurrentes, avec une démonstration</li>
</ul>
<h2>Commencer par une conversation</h2>
<p>Un appel découverte gratuit est la première étape. Aucun engagement et aucune liste de prix publique; chaque mandat est défini après notre discussion.</p>
""",
    faq=[("Quel outil est le meilleur pour une petite entreprise : ChatGPT, Gemini ou Copilot?", "Cela dépend des outils que votre équipe utilise déjà et des tâches pour lesquelles vous voulez de l’aide. Il n’y a pas de meilleur choix unique : mieux vaut les comparer à votre travail réel avant de payer d’autres abonnements."),
         ("Pouvez-vous nous aider à utiliser l’abonnement d’IA que nous avons déjà?", "Oui. Beaucoup d’équipes n’utilisent qu’une petite partie de leur abonnement. Je vérifie comment il est utilisé et je mets en place des requêtes et des flux adaptés aux tâches récurrentes.")],
  ),
 },
 {
  "id": "automation", "kind": "service", "related": ["agents", "consulting"],
  "en": dict(
    slug="workflow-automation-small-business",
    title="AI Workflow Automation for Small Businesses in Montréal",
    desc="Turn repetitive tasks into documented AI workflows: incoming documents, quotes, customer inquiries and recurring reports for small Montréal teams.",
    h1="AI workflow automation for small businesses",
    intro="Workflow automation turns what AI can do into processes that run the same way every week. The goal is simple: less time on repetitive tasks, with a human still in charge.",
    body="""
<h2>Examples of what can be automated</h2>
<ul>
<li>Processing incoming documents, forms and emails</li>
<li>Preparing quotes and proposals from your own templates</li>
<li>Sorting customer inquiries and automating follow-ups</li>
<li>Building recurring reports and consolidating information</li>
</ul>
<p>These are illustrations, not limits. We start from your processes.</p>
<h2>How it is done</h2>
<p>I design solutions around your existing subscriptions, affordable integrations and the right automation tools, then set up the workflows with human approval wherever it matters.</p>
<h2>What you keep</h2>
<p>Every workflow comes with documentation and a walkthrough, so you and your team can keep using it, adjust it and rely on it without me.</p>
<h2>Honest about fit</h2>
<p>Not every task is worth automating. I tell you plainly when a simple prompt or a checklist is enough, and what extra tools or paid connections a workflow would need before you commit.</p>
<h2>Start with a discovery call</h2>
<p>We look at the tasks that eat your time and decide together whether automation fits. Scope is agreed up front, with no public price list.</p>
""",
    faq=[("What business tasks can AI automate?", "Common examples are processing incoming documents and emails, preparing quotes from templates, sorting customer inquiries with follow-ups, and building recurring reports. The right candidates depend on your own processes."),
         ("Will I keep control of an automated workflow?", "Yes. Human approval is built in wherever it matters, and every workflow comes with documentation and a walkthrough so your team can use and adjust it.")],
  ),
  "fr": dict(
    slug="automatisation-flux-de-travail-ia",
    title="Automatisation des flux de travail par l’IA à Montréal",
    desc="Transformez les tâches répétitives en flux de travail documentés : documents entrants, soumissions, demandes de clients et rapports pour petites équipes.",
    h1="Automatisation des flux de travail par l’IA",
    intro="L’automatisation des flux de travail transforme ce que l’IA peut faire en processus qui se déroulent de la même façon chaque semaine. L’objectif est simple : moins de temps sur les tâches répétitives, avec un humain toujours aux commandes.",
    body="""
<h2>Exemples de tâches automatisables</h2>
<ul>
<li>Traiter les documents, formulaires et courriels entrants</li>
<li>Préparer des soumissions et des propositions à partir de vos propres modèles</li>
<li>Trier les demandes de clients et automatiser les suivis</li>
<li>Produire des rapports récurrents et regrouper l’information</li>
</ul>
<p>Ces exemples illustrent des cas possibles, ils n’en marquent pas la limite. Nous partons de vos processus.</p>
<h2>Comment procéder</h2>
<p>Je conçois des solutions à partir de vos abonnements existants, d’intégrations abordables et des bons outils d’automatisation, puis je mets en place les flux avec une approbation humaine là où c’est important.</p>
<h2>Ce que vous conservez</h2>
<p>Chaque flux est accompagné de documentation et d’une démonstration, pour que vous et votre équipe puissiez continuer à l’utiliser, l’ajuster et vous y fier sans moi.</p>
<h2>Honnête sur la pertinence</h2>
<p>Toutes les tâches ne valent pas la peine d’être automatisées. Je vous dis franchement quand une simple requête ou une liste de vérification suffit, et quels outils ou connexions payantes un flux exigerait avant que vous vous engagiez.</p>
<h2>Commencer par un appel découverte</h2>
<p>Nous examinons les tâches qui vous font perdre du temps et décidons ensemble si l’automatisation convient. L’ampleur est convenue à l’avance, sans liste de prix publique.</p>
""",
    faq=[("Quelles tâches d’entreprise l’IA peut-elle automatiser?", "Parmi les exemples courants : le traitement des documents et courriels entrants, la préparation de soumissions à partir de modèles, le tri des demandes de clients avec suivis, et les rapports récurrents. Les bonnes candidates dépendent de vos propres processus."),
         ("Garderai-je le contrôle d’un flux automatisé?", "Oui. Une approbation humaine est intégrée là où c’est important, et chaque flux est accompagné de documentation et d’une démonstration pour que votre équipe puisse l’utiliser et l’ajuster.")],
  ),
 },
 {
  "id": "agents", "kind": "service", "related": ["automation", "platforms"],
  "en": dict(
    slug="ai-agents-for-small-teams",
    title="AI Agents for Small Teams: Practical and Under Your Control",
    desc="AI agents that carry out defined tasks across your tools, with human approval built in. Only recommended when it pays off. Small teams in Montréal.",
    h1="AI agents for small teams",
    intro="An AI agent is an assistant set up to carry out a defined job across your tools, such as research or first-line customer replies. It is for businesses ready to go further, and not every business needs one.",
    body="""
<h2>What an agent can do</h2>
<ul>
<li>Handle a defined job, such as research or first-line customer replies</li>
<li>Run multi-step workflows that connect your apps and business information</li>
<li>Pause for human approval wherever a decision matters</li>
</ul>
<h2>When it makes sense</h2>
<p>Agents earn their place when a task is frequent, well defined and tedious. I only recommend one when it pays off. For many businesses, a good prompt or a simple workflow is the better answer, and I will say so.</p>
<h2>You stay in control</h2>
<p>Human approval is built in where it matters, so nothing important happens without you. Limits and access to your data are decided up front.</p>
<h2>Scope and cost, explained first</h2>
<p>Scope and cost depend on the tools and connections involved, such as extra services or paid APIs. These are explained before you commit, and there is no public price list.</p>
<h2>Where to begin</h2>
<p>A free discovery call. We check whether an agent fits your situation or whether something simpler serves you better.</p>
""",
    faq=[("What is an AI agent for a small business?", "An AI agent is an assistant set up to carry out a defined job across your tools, such as research or first-line customer replies, with human approval built in where it matters."),
         ("Does my small business need AI agents?", "Not necessarily. Agents suit frequent, well-defined, tedious tasks. Many businesses are better served by good prompts or simple workflows, and I only recommend an agent when it pays off.")],
  ),
  "fr": dict(
    slug="agents-ia-petites-equipes",
    title="Agents IA pour petites équipes : pratiques et sous votre contrôle",
    desc="Des agents IA qui accomplissent des tâches précises dans vos outils, avec approbation humaine. Recommandés seulement quand c’est rentable. Montréal.",
    h1="Agents IA pour petites équipes",
    intro="Un agent IA est un assistant configuré pour accomplir une tâche précise dans vos outils, comme la recherche ou les premières réponses aux clients. Il s’adresse aux entreprises prêtes à aller plus loin; toutes n’en ont pas besoin.",
    body="""
<h2>Ce qu’un agent peut faire</h2>
<ul>
<li>Accomplir une tâche précise, comme la recherche ou les premières réponses aux clients</li>
<li>Exécuter des flux en plusieurs étapes qui relient vos applications et vos données d’affaires</li>
<li>S’arrêter pour obtenir une approbation humaine chaque fois qu’une décision est importante</li>
</ul>
<h2>Quand cela a du sens</h2>
<p>Un agent mérite sa place quand une tâche est fréquente, bien définie et fastidieuse. Je n’en recommande un que lorsque c’est rentable. Pour bien des entreprises, une bonne requête ou un flux simple est la meilleure réponse, et je vous le dirai.</p>
<h2>Vous gardez le contrôle</h2>
<p>Une approbation humaine est intégrée là où c’est important : rien d’important ne se produit sans vous. Les limites et l’accès à vos données sont décidés dès le départ.</p>
<h2>Ampleur et coût, expliqués d’abord</h2>
<p>L’ampleur et le coût dépendent des outils et des connexions requis, comme des services additionnels ou des API payantes. Tout cela est expliqué avant que vous vous engagiez, et il n’y a pas de liste de prix publique.</p>
<h2>Par où commencer</h2>
<p>Par un appel découverte gratuit. Nous vérifions si un agent convient à votre situation ou si quelque chose de plus simple vous servirait mieux.</p>
""",
    faq=[("Qu’est-ce qu’un agent IA pour une petite entreprise?", "Un agent IA est un assistant configuré pour accomplir une tâche précise dans vos outils, comme la recherche ou les premières réponses aux clients, avec une approbation humaine là où c’est important."),
         ("Ma petite entreprise a-t-elle besoin d’agents IA?", "Pas nécessairement. Les agents conviennent aux tâches fréquentes, bien définies et fastidieuses. Beaucoup d’entreprises sont mieux servies par de bonnes requêtes ou des flux simples, et je ne recommande un agent que lorsque c’est rentable.")],
  ),
 },
 {
  "id": "training", "kind": "service", "related": ["subs", "consulting"],
  "en": dict(
    slug="practical-ai-staff-training",
    title="Practical AI Staff Training for Small Businesses in Montréal",
    desc="Hands-on AI training for your team: reusable prompts, simple workflows and responsible use. For small Montréal businesses, in English or French.",
    h1="Practical AI staff training",
    intro="For larger teams that need more than a single working session, practical training gets your employees confident with the AI tools and workflows you already use, and keeps the results going.",
    body="""
<h2>What the training covers</h2>
<ul>
<li>Getting more from the subscriptions you already have</li>
<li>Building reusable prompts and workflows for everyday tasks</li>
<li>Spotting where automation fits</li>
<li>Using AI responsibly, with privacy in mind, including Quebec's Law 25</li>
<li>Learning to maintain and improve your new workflows yourselves</li>
</ul>
<p>Privacy points are practical guidance for everyday use, not legal advice.</p>
<h2>Built around your work</h2>
<p>Sessions use your own tasks and tools rather than generic examples, so people leave with something they can use on Monday morning.</p>
<h2>Language</h2>
<p>Training can be given in English, in French, or in both, to suit your team.</p>
<h2>Where it fits</h2>
<p>For a small team, the core offer is a scoped working session that produces documentation and configured workflows. Employee training is a separate, optional service for teams that want to go further.</p>
<h2>Start with a discovery call</h2>
<p>We talk about your team and your tools, and I suggest a format that fits. No obligation and no public price list.</p>
""",
    faq=[("Do you train employees to use AI at work?", "Yes. Practical training covers getting more from existing subscriptions, building reusable prompts and workflows, spotting where automation fits and using AI responsibly with privacy in mind. It can be given in English, French or both."),
         ("Is the AI training legal advice about Law 25?", "No. Privacy points are practical guidance for everyday use of AI tools, not legal advice.")],
  ),
  "fr": dict(
    slug="formation-pratique-ia-employes",
    title="Formation pratique en IA pour les employés, à Montréal",
    desc="Formation pratique en IA pour votre équipe : requêtes réutilisables, flux simples et utilisation responsable. Petites entreprises de Montréal, en français ou en anglais.",
    h1="Formation pratique en IA pour les employés",
    intro="Pour les équipes plus grandes qui ont besoin de plus qu’une seule séance de travail, une formation pratique met vos employés à l’aise avec les outils d’IA et les flux de travail que vous utilisez déjà, et maintient les résultats.",
    body="""
<h2>Ce que couvre la formation</h2>
<ul>
<li>Tirer plus des abonnements que vous avez déjà</li>
<li>Créer des requêtes et des flux réutilisables pour les tâches courantes</li>
<li>Repérer où l’automatisation s’applique</li>
<li>Utiliser l’IA de façon responsable, en tenant compte de la vie privée, y compris la Loi 25 du Québec</li>
<li>Apprendre à maintenir et à améliorer vous-mêmes vos nouveaux flux de travail</li>
</ul>
<p>Les points sur la vie privée sont des repères pratiques pour l’usage courant, et non des conseils juridiques.</p>
<h2>Conçue autour de votre travail</h2>
<p>Les séances s’appuient sur vos propres tâches et outils plutôt que sur des exemples génériques : les gens repartent avec quelque chose qu’ils peuvent utiliser dès lundi matin.</p>
<h2>Langue</h2>
<p>La formation peut être donnée en français, en anglais ou dans les deux langues, selon votre équipe.</p>
<h2>Où elle s’inscrit</h2>
<p>Pour une petite équipe, l’offre de base est une séance de travail définie qui produit de la documentation et des flux configurés. La formation des employés est un service distinct et facultatif, pour les équipes qui veulent aller plus loin.</p>
<h2>Commencer par un appel découverte</h2>
<p>Nous parlons de votre équipe et de vos outils, et je propose un format qui convient. Aucun engagement et aucune liste de prix publique.</p>
""",
    faq=[("Formez-vous les employés à utiliser l’IA au travail?", "Oui. La formation pratique couvre l’optimisation des abonnements existants, la création de requêtes et de flux réutilisables, le repérage des occasions d’automatisation et une utilisation responsable de l’IA en tenant compte de la vie privée. Elle peut être donnée en français, en anglais ou dans les deux langues."),
         ("La formation donne-t-elle des conseils juridiques sur la Loi 25?", "Non. Les points sur la vie privée sont des repères pratiques pour l’usage courant des outils d’IA, et non des conseils juridiques.")],
  ),
 },
 {
  "id": "compare", "kind": "article", "related": ["platforms", "subs"],
  "en": dict(
    slug="chatgpt-vs-gemini-vs-copilot-small-business",
    title="ChatGPT vs Gemini vs Copilot for a Small Business",
    desc="Comparing ChatGPT, Google Gemini and Microsoft Copilot for a team of 5 to 20: the questions that matter more than feature lists.",
    h1="ChatGPT vs Gemini vs Copilot for a small business",
    intro="There is no single winner. For a team of about 5 to 20 people, the better question is which tool fits the way you already work. Here are the questions that decide it.",
    body="""
<h2>1. Where does your team already work?</h2>
<p>If your documents, email and calendar live in Microsoft 365, Copilot is built to work alongside them. If you live in Google Workspace, Gemini is the natural neighbour. If your work is mostly in a browser and a mix of tools, a general assistant such as ChatGPT or Claude may fit better. What is available to you depends on your plan.</p>
<h2>2. What tasks do you want help with?</h2>
<p>Drafting, summarizing, researching, preparing quotes and organizing information are common. A tool that handles your top two or three tasks well is worth more than one with a long feature list.</p>
<h2>3. What can your plan actually do?</h2>
<p>Features vary by plan, connectors, API access and third-party services. Check what your own subscription includes before assuming a capability, and before buying another.</p>
<h2>4. How will you handle privacy?</h2>
<p>Decide what staff may and may not enter into any assistant, and check the privacy settings of the plan you use. This is practical housekeeping, not legal advice.</p>
<h2>5. Who will keep it going?</h2>
<p>A tool only pays off if people use it. Tailored prompts, a short written guide and a walkthrough matter more than the logo on the tool.</p>
<h2>A sensible way to decide</h2>
<p>Pick two or three real tasks, try them in the tools you already have access to, and compare the results. I help teams do exactly that, and I do not sell any of these platforms.</p>
""",
    faq=[("Which is better for a small business, ChatGPT, Gemini or Copilot?", "It depends on where your team already works, which tasks you want help with and what your plan includes. Copilot works alongside Microsoft 365, Gemini alongside Google Workspace, and general assistants like ChatGPT or Claude suit mixed setups."),
         ("How should a small business choose an AI tool?", "Pick two or three real tasks, test them in tools you already have access to, and compare the results. Check what your plan includes and decide what staff may enter into the tool.")],
  ),
  "fr": dict(
    slug="chatgpt-gemini-copilot-petite-entreprise",
    title="ChatGPT, Gemini ou Copilot pour une petite entreprise?",
    desc="Comparer ChatGPT, Google Gemini et Microsoft Copilot pour une équipe de 5 à 20 personnes : les questions qui comptent plus que les listes de fonctions.",
    h1="ChatGPT, Gemini ou Copilot pour une petite entreprise?",
    intro="Il n’y a pas de gagnant unique. Pour une équipe d’environ 5 à 20 personnes, la bonne question est plutôt : quel outil convient à votre façon de travailler? Voici les questions qui tranchent.",
    body="""
<h2>1. Où votre équipe travaille-t-elle déjà?</h2>
<p>Si vos documents, vos courriels et votre calendrier sont dans Microsoft 365, Copilot est conçu pour travailler à leurs côtés. Si vous êtes dans Google Workspace, Gemini est le voisin naturel. Si votre travail se fait surtout dans un navigateur et avec un mélange d’outils, un assistant généraliste comme ChatGPT ou Claude peut mieux convenir. Ce qui vous est offert dépend de votre forfait.</p>
<h2>2. Pour quelles tâches voulez-vous de l’aide?</h2>
<p>Rédiger, résumer, faire de la recherche, préparer des soumissions et organiser l’information sont des cas courants. Un outil qui réussit bien vos deux ou trois principales tâches vaut mieux qu’un outil à la longue liste de fonctions.</p>
<h2>3. Que permet réellement votre forfait?</h2>
<p>Les fonctions varient selon le forfait, les connecteurs, l’accès aux API et les services tiers. Vérifiez ce que comprend votre propre abonnement avant de supposer une capacité, et avant d’en acheter un autre.</p>
<h2>4. Comment gérerez-vous la vie privée?</h2>
<p>Décidez ce que le personnel peut ou ne peut pas saisir dans un assistant, et vérifiez les paramètres de confidentialité du forfait utilisé. Ce sont des mesures pratiques, et non des conseils juridiques.</p>
<h2>5. Qui maintiendra l’élan?</h2>
<p>Un outil ne rapporte que si les gens s’en servent. Des requêtes adaptées, un court guide écrit et une démonstration comptent plus que le logo de l’outil.</p>
<h2>Une façon sensée de décider</h2>
<p>Choisissez deux ou trois tâches réelles, essayez-les dans les outils auxquels vous avez déjà accès et comparez les résultats. J’aide les équipes à faire exactement cela, et je ne vends aucune de ces plateformes.</p>
""",
    faq=[("Quel est le meilleur choix pour une petite entreprise : ChatGPT, Gemini ou Copilot?", "Cela dépend de l’endroit où votre équipe travaille déjà, des tâches visées et de ce que comprend votre forfait. Copilot travaille avec Microsoft 365, Gemini avec Google Workspace, et les assistants généralistes comme ChatGPT ou Claude conviennent aux environnements mixtes."),
         ("Comment une petite entreprise devrait-elle choisir un outil d’IA?", "Choisissez deux ou trois tâches réelles, essayez-les dans les outils auxquels vous avez déjà accès et comparez les résultats. Vérifiez ce que comprend votre forfait et décidez ce que le personnel peut saisir dans l’outil.")],
  ),
 },
 {
  "id": "subs", "kind": "article", "related": ["platforms", "consulting"],
  "en": dict(
    slug="get-more-from-your-ai-subscriptions",
    title="Getting More From the AI Subscriptions You Already Pay For",
    desc="Many small teams use only a fraction of their AI subscription. Five practical steps to get more value from what you already pay for.",
    h1="Getting more from the AI subscriptions you already pay for",
    intro="Many small businesses pay for an AI assistant and use it for a few occasional questions. Before buying another tool, it is worth checking how much of the one you have is actually working for you.",
    body="""
<h2>1. List what you pay for</h2>
<p>Write down every AI subscription across the team, who uses it and how often. Overlap is common, and so are licences that nobody opens.</p>
<h2>2. Name the repetitive tasks</h2>
<p>Look for tasks that recur every week: answering similar emails, preparing quotes, summarizing documents, writing reports. These are the best candidates.</p>
<h2>3. Turn good prompts into shared ones</h2>
<p>When someone gets a good result, write the prompt down in a shared place, with an example of a good input and output. Reusable prompts are the cheapest improvement available.</p>
<h2>4. Check what your plan can do</h2>
<p>Features differ by plan, connectors, API access and third-party services. Confirm what your subscription includes, and note anything that would need an extra service.</p>
<h2>5. Add human review where it matters</h2>
<p>Keep a person in the loop for anything that goes to a client or involves a decision. AI drafts quickly; people stay accountable.</p>
<h2>When to ask for help</h2>
<p>If this feels like a lot, a scoped working session can do it with you: review your subscriptions, document tailored prompts and configure workflows around recurring tasks, with a walkthrough. Beginners with no subscription yet are welcome too.</p>
""",
    faq=[("How can a small business get more value from its AI subscription?", "List what you pay for, name the repetitive tasks, turn good prompts into shared ones, confirm what your plan can do, and keep human review where it matters."),
         ("Should we buy another AI tool?", "Not before checking how much of your current subscription is working for you. Many teams use only a small part of it.")],
  ),
  "fr": dict(
    slug="tirer-plus-de-vos-abonnements-ia",
    title="Tirer plus des abonnements d’IA que vous payez déjà",
    desc="Beaucoup de petites équipes n’utilisent qu’une fraction de leur abonnement d’IA. Cinq étapes pratiques pour tirer plus de valeur de ce que vous payez déjà.",
    h1="Tirer plus des abonnements d’IA que vous payez déjà",
    intro="Beaucoup de petites entreprises paient pour un assistant d’IA et s’en servent pour quelques questions occasionnelles. Avant d’acheter un autre outil, il vaut la peine de vérifier ce que celui que vous avez fait réellement pour vous.",
    body="""
<h2>1. Dressez la liste de ce que vous payez</h2>
<p>Notez chaque abonnement d’IA de l’équipe, qui l’utilise et à quelle fréquence. Les chevauchements sont courants, tout comme les licences que personne n’ouvre.</p>
<h2>2. Nommez les tâches répétitives</h2>
<p>Cherchez les tâches qui reviennent chaque semaine : répondre à des courriels semblables, préparer des soumissions, résumer des documents, rédiger des rapports. Ce sont les meilleures candidates.</p>
<h2>3. Transformez les bonnes requêtes en requêtes partagées</h2>
<p>Quand quelqu’un obtient un bon résultat, notez la requête dans un endroit partagé, avec un exemple d’entrée et de résultat réussis. Les requêtes réutilisables sont l’amélioration la plus économique qui soit.</p>
<h2>4. Vérifiez ce que permet votre forfait</h2>
<p>Les fonctions diffèrent selon le forfait, les connecteurs, l’accès aux API et les services tiers. Confirmez ce que comprend votre abonnement et notez tout ce qui exigerait un service additionnel.</p>
<h2>5. Ajoutez une révision humaine là où c’est important</h2>
<p>Gardez une personne dans la boucle pour tout ce qui part chez un client ou qui comporte une décision. L’IA rédige vite; les gens restent responsables.</p>
<h2>Quand demander de l’aide</h2>
<p>Si cela semble beaucoup, une séance de travail définie peut le faire avec vous : examen de vos abonnements, documentation de requêtes adaptées et configuration de flux autour des tâches récurrentes, avec une démonstration. Les débutants sans abonnement sont aussi les bienvenus.</p>
""",
    faq=[("Comment une petite entreprise peut-elle tirer plus de valeur de son abonnement d’IA?", "Dressez la liste de ce que vous payez, nommez les tâches répétitives, transformez les bonnes requêtes en requêtes partagées, confirmez ce que permet votre forfait et gardez une révision humaine là où c’est important."),
         ("Devrions-nous acheter un autre outil d’IA?", "Pas avant d’avoir vérifié ce que votre abonnement actuel fait réellement pour vous. Beaucoup d’équipes n’en utilisent qu’une petite partie.")],
  ),
 },
]
