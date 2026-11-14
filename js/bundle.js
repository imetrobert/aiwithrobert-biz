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
    'nav-examples': 'Examples',
    'nav-services': 'Services',
    'nav-process': 'How It Works',
    'nav-speaking': 'Speaking',
    'nav-about': 'About Robert',
    'nav-contact': 'Contact',
    'nav-faq': 'FAQ',
    'hero-title': 'Make AI Earn Its Keep in Your Business',
    'hero-tagline': 'Whether you already pay for tools like ChatGPT, Gemini, Microsoft Copilot or Claude, or have not started with AI yet, I help you turn them into practical, documented workflows built around your work — and show you how to keep using them.',
    'hero-area-note': 'For owner-run businesses and small teams of about 5 to 20 people — no IT department needed. Based in Côte Saint-Luc, serving Greater Montréal, in person or online, in English or French.',
    'hero-cta': 'Get a Free Feasibility Check',
    'stat-years': '25+',
    'stat-years-label': 'Years in Technology',
    'stat-bilingual': 'EN / FR',
    'stat-bilingual-label': 'Fully Bilingual',
    'stat-platforms': '4+',
    'stat-platforms-label': 'AI Platforms We Work With',
    'stat-free': 'Free',
    'stat-free-label': 'Discovery Call',
    'entity-aside': '<strong>AI with Robert for Business</strong> — AI consulting and workflow automation for small businesses and professional practices in Montréal, QC. Beginners welcome: helping owners choose AI tools that fit their needs and budget, or get more from the ones they already pay for (ChatGPT, Gemini, Microsoft Copilot, Claude), through documented workflows built around their work. Led by Robert Simon. Bilingual (English/French), in person or online. Free discovery call. <a href="tel:514-250-8491">514-250-8491</a> &nbsp;&middot;&nbsp; <a href="mailto:biz@aiwithrobert.com">biz@aiwithrobert.com</a>',
    'geo-summary': '<strong>AI with Robert for Business</strong> is the business branch of AI with Robert, founded by <strong>Robert Simon</strong>, a technology professional with over 25 years of experience in digital innovation and AI implementation, including at Bell Canada. It is an independent, platform-neutral AI productivity and automation consultancy for small businesses and professional practices (about 5–20 people) in Greater Montréal — professional services, trades, retail, health and wellness practices and more. Businesses that already pay for AI subscriptions (ChatGPT, Google Gemini, Microsoft Copilot, Claude and other affordable tools) get more value from them, and beginners are helped to choose tools that fit their needs and budget. Work is scoped up front, and the outcome is a package you can use: written documentation with prompts tailored to your tasks, and workflows configured around your recurring tasks, with a walkthrough so you can reuse them. Follow-up sessions to refine or expand are scoped the same way. The four services are an AI opportunity assessment, AI workflow automation, AI agents and advanced automation, and practical AI training and enablement for larger teams; speaking for business groups is also offered. No enterprise platform and no custom software. Human oversight and privacy (including Quebec’s Law 25) are taken into account. Available in English and French, in person or online. Book a free discovery call at 514-250-8491 or biz@aiwithrobert.com. This is a separate branch from AI with Robert for Seniors (seniors.aiwithrobert.com).',
    'opp-title': 'You’re Probably Using a Fraction of the AI You Already Pay For',
    'opp-subtitle': 'Whether you already pay for AI tools or are just getting started, the real value comes from repeatable processes — not one-off chats.',
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
    'opp-next-note': 'These are examples, not the limit. I only offer what your own AI plan can actually do, so we start from your work, your industry and your subscription.',
    'opp-callout-title': 'No enterprise platform. No custom software. If you’re new to AI, I’ll recommend only the subscriptions that fit your needs and budget.',
    'opp-callout-text': 'We start with the tools you already pay for and the tasks that cost you the most time. Success is measured in hours saved, manual work removed and processes that run better — not in buzzwords.',
    'opp-caveat': 'What’s possible depends on your plan. I confirm what your subscription can do before I promise anything, and I tell you plainly what it cannot do.',
    'keep-title': 'What You Keep',
    'keep-intro': 'Every engagement is scoped up front, and the outcome is yours to use:',
    'keep-1-title': 'Documentation',
    'keep-1-desc': 'Prompts and guidance written for your specific tasks, in plain language you and your team can follow.',
    'keep-2-title': 'Working workflows',
    'keep-2-desc': 'Configured around your recurring tasks, with a walkthrough so you can use and reuse them confidently.',
    'keep-closing': 'Want to refine or expand later? Follow-up sessions are scoped the same way.',
    'services-title': 'Services',
    'services-subtitle': 'Whatever your business — professional practice, trades, retail, services — these are the ways we can work together. Start with the one that fits, or we’ll work it out together on a free discovery call.',
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
    'service2-note': 'The workflows we set up come with documentation so you can keep using them.',
    'service3-title': 'AI Agents &amp; Advanced Automation',
    'service3-desc': 'For businesses ready to go further: AI assistants set up inside the AI plan you already pay for to carry out a defined job, with you in control. I only recommend it when your plan supports it and it pays off.',
    'service3-item1': 'AI assistants that handle a defined job, such as research or first-line customer replies',
    'service3-item2': 'Multi-step workflows using the connections your plan includes',
    'service3-item3': 'Human approval built in wherever it matters',
    'service3-item4': 'Limited to what your plan can do, confirmed before we start',
    'service4-title': 'Practical AI Training &amp; Enablement',
    'service4-desc': 'For larger teams that need more than a working session: training that gets your employees confident with the AI tools and workflows you use — and keeps the results going.',
    'service4-item1': 'Get more from the subscriptions you already have',
    'service4-item2': 'Build reusable prompts and workflows for everyday tasks',
    'service4-item3': 'Spot where automation fits, and use AI responsibly with privacy (including Quebec’s Law 25) in mind',
    'service4-item4': 'Learn to maintain and improve your new workflows yourselves',
    'nav-pricing': 'Pricing',
    'pricing-title': 'Clear Starting Prices',
    'pricing-subtitle': 'Fixed fees, confirmed in writing before any work begins. Prices are in Canadian dollars, before GST and QST. You buy your own AI subscription directly from the vendor, and I confirm what it can do before we start.',
    'price1-title': 'AI Opportunity Assessment',
    'price1-amt': 'From $900',
    'price1-unit': 'Up to 5 people. $1,800 for 6 to 20 people.',
    'price1-i1': 'Your needs checked against the AI plan you use or plan to buy',
    'price1-i2': 'A written assessment of what works, what has conditions and what does not',
    'price1-i3': 'A shortlist of workflows with estimated time savings',
    'price1-i4': 'A clear proposal for the next step',
    'price2-title': 'AI Workflow Setup',
    'price2-amt': 'From $2,000',
    'price2-unit': 'Per workflow. Conditions that need extra setup on your plan are quoted up front at $500 each.',
    'price2-i1': 'A workflow document written for your business',
    'price2-i2': 'Saved instructions set up inside your own AI account',
    'price2-i3': 'Tested on a real example of yours',
    'price2-i4': 'A handover so your team can keep using it',
    'price3-title': 'Team Training Session',
    'price3-amt': '$1,500',
    'price3-unit': 'Up to 10 people, 3 hours. $100 for each additional person.',
    'price3-i1': 'Live, hands-on session in English or French',
    'price3-i2': 'Workbook and slides built for your business',
    'price3-i3': 'Take-home handout with your own prompts',
    'price3-i4': 'Feedback survey to guide next steps',
    'price4-title': 'Starter Bundle',
    'price4-amt': '$3,950',
    'price4-unit': 'Instead of $4,400 when bought separately.',
    'price4-i1': 'An assessment for up to 5 people',
    'price4-i2': 'One workflow set up and tested',
    'price4-i3': 'One training session for up to 10 people',
    'price4-i4': 'It starts with the assessment, so nothing is promised that your plan cannot do',
    'pricing-also': 'Also available: talks for business groups from $500, monthly support at $300 a month (about 2 hours), and extra help at $150 an hour. AI agents are quoted after an assessment, and only where your plan supports them.',
    'pricing-note': 'These are starting prices. Final scope and price are always confirmed in writing before any work begins.',
    'pricing-cta': 'Start with a free feasibility check',
    'process-title': 'How It Works',
    'process-subtitle': 'Four connected steps, from first conversation to results you can measure — with time saved and return on investment in view throughout.',
    'step1-title': '1. Discover',
    'step1-desc': 'We talk about your tools, your team and the tasks that eat up your time, and spot where AI and automation could help most.',
    'step2-title': '2. Design',
    'step2-desc': 'I design practical solutions around your existing subscriptions and what your plan can do.',
    'step3-title': '3. Implement',
    'step3-desc': 'I set up the workflows, automations and assistants, with human approval and oversight wherever it matters.',
    'step4-title': '4. Enable',
    'step4-desc': 'You learn to run, understand and maintain what we’ve set up, and you keep the documentation and prompts — so the value lasts.',
    'speaking-title': 'Speaking for Business Groups',
    'speaking-subtitle': 'Practical, hands-on AI sessions for networking groups, chambers and associations — no hype, real takeaways.',
    'speaking-p1': 'Your members want to use AI in their own businesses tomorrow morning, not sit through another hype-filled keynote. I deliver short, interactive talks and live demonstrations tailored to your group, in English or French, in person across Greater Montréal or online.',
    'speaking-cta': 'Ask About Speaking',
    'speaking-testimonial-quote': `What stood out most was Robert's ability to adapt the workshop to the experience level of the audience. Participants who were already somewhat comfortable with AI asked thoughtful, in-depth questions, and Robert responded with clear, patient, and detailed explanations. He skillfully guided discussions on topics such as AI neutrality, chatbots, and responsible use, keeping conversations informative and respectful.`,
    'speaking-testimonial-role': 'Programming and Community Engagement Coordinator, public library',
    'speaking-testimonial-context': 'Community workshop on AI for a public library audience',
    'about-title': 'About Robert',
    'about-subtitle': 'Practical technology leadership for Montréal business owners.',
    'about-heading': 'Meet Robert Simon',
    'about-p1': 'I’m an independent AI thought leader and digital transformation expert with over 25 years of experience in digital innovation and AI implementation, including at Bell Canada. I now focus on helping small businesses and professional practices get real, everyday value from AI.',
    'about-p2': 'My approach is practical and zero-hype: use the tools you already pay for, start with the tasks that cost you the most time, measure the savings, and keep your data private. No agency jargon — just clear guidance from someone who understands how small businesses actually run.',
    'about-disclaimer': 'AI with Robert for Business is an independent practice of Robert Simon. Mentions of his experience describe his background only; the business is not affiliated with, sponsored by or endorsed by any employer, including Bell Canada.',
    'about-summary': '<strong>Quick facts about Robert Simon:</strong> Based in Côte Saint-Luc, QC. Over 25 years in technology and AI, including Bell Canada. Helps small businesses and professional practices get real value from AI — whether or not they already pay for AI tools — through opportunity assessments, workflow automation, AI agents and practical training. Bilingual (English/French). Free discovery call. Phone: 514-250-8491. Email: biz@aiwithrobert.com.',
    'about-personal-link': 'Robert’s Personal Site &amp; AI Insights Blog',
    'exp-years': '25+ Years in Technology',
    'exp-bell': 'Bell Canada Experience',
    'exp-bilingual': 'Bilingual EN / FR',
    'exp-workshops': 'Hands-On Workshops',
    'contact-title': 'Let’s Find Where AI Can Save Your Business Time and Money',
    'contact-subtitle': 'Start with a free feasibility check: answer a few questions and see right away whether your current AI plan can do what you need.',
    'ba-title': 'Same Tool, Very Different Results',
    'ba-subtitle': 'Six examples of what changes when a $30 AI plan stops polishing emails and starts doing a piece of the work.',
    'ba-before-label': 'Before: polishing',
    'ba-after-label': 'After: a workflow',
    'ba1-title': 'A quote after a site visit',
    'ba1-before': 'You write the quote yourself, paste it into the AI and ask it to sound more professional. It reads better. It took just as long.',
    'ba1-after': 'You drop in your site-visit notes and your price list. The same AI builds the full quote in your format, in English or French, with your terms and the line items priced. You review it and send.',
    'ba1-worth': 'Illustration: 6 quotes a week, 30 minutes saved on each, is 3 hours a week.',
    'ba2-title': 'The Friday client updates',
    'ba2-before': 'You ask the AI to fix the wording of one status email, then do the same for the next client.',
    'ba2-after': 'You give it this week’s job spreadsheet. It writes each client’s update from their own rows, flags the jobs running late and lists what you need to chase. You read, adjust and send.',
    'ba2-worth': 'Illustration: 12 updates a week, 10 minutes saved on each, is 2 hours a week.',
    'ba3-title': 'Follow-up after a client call',
    'ba3-before': 'You type up your follow-up email and ask the AI to make it shorter.',
    'ba3-after': 'You paste your call notes. Saved instructions turn them into a summary, a list of who does what by when, the follow-up email and the note for the client file. Same result every time, for everyone on your team.',
    'ba3-worth': 'Illustration: 10 calls a week, 15 minutes saved on each, is 2.5 hours a week.',
    'ba4-title': 'A financial advisor’s client review meeting',
    'ba4-before': 'You write the recap email after each review meeting and ask the AI to tidy the wording.',
    'ba4-after': 'You paste your meeting notes. Saved instructions turn them into a plain-language recap for the client, the action items for you and for them, and the note for the file in your firm’s format. You check every figure and send.',
    'ba4-worth': 'Illustration: 8 review meetings a week, 15 minutes saved on each, is 2 hours a week.',
    'ba5-title': 'An accountant’s missing-documents chase',
    'ba5-before': 'You write one reminder about missing documents and ask the AI to make it more polite.',
    'ba5-after': 'You give it your year-end checklist and the list of what each client has sent. It drafts each client’s request naming exactly what is still missing, in English or French, and gives you a summary of which files are held up. You review and send.',
    'ba5-worth': 'Illustration: 15 reminders a week, 10 minutes saved on each, is 2.5 hours a week.',
    'ba6-title': 'A property manager’s maintenance requests',
    'ba6-before': 'You reply to a tenant’s complaint and ask the AI to soften the tone.',
    'ba6-after': 'You paste the tenant’s message. Saved instructions turn it into a work order for the contractor, a reply to the tenant and a line for the owner’s monthly report. Same format for every building, whoever on your team handles it.',
    'ba6-worth': 'Illustration: 15 requests a week, 10 minutes saved on each, is 2.5 hours a week.',
    'ba-math-title': 'The arithmetic',
    'ba-math-text': 'Two to three hours a week at $60 an hour is roughly $6,000 to $9,000 a year. Setting up one workflow starts at $2,000, paid once, on a subscription you already have.',
    'ba-note': 'These are illustrations with round numbers, not client results. Use your own hours and your own rate. What is possible depends on your plan, which is what the free feasibility check tells you. It also asks whether your work involves clients’ personal information, because that changes which plans are suitable.',
    'ba-cta': 'Check what your plan can do',
    'feas-title': 'Free Feasibility Check',
    'feas-intro': 'It takes about two minutes. Tell me which AI plan you pay for and up to three things you would like it to do. You get a preliminary Yes, Partly or No for each one on screen, free and with no obligation.',
    'feas-noscript': 'The feasibility check needs JavaScript. You can also email biz@aiwithrobert.com.',
    'other-summary': 'Speaking for a group, or another question? Send a message',
    'contact-other': 'Speaking for a group, or another question? Email <a href="mailto:biz@aiwithrobert.com" style="color:#1b4469;font-weight:600;">biz@aiwithrobert.com</a>.',
    'contact-heading': 'Something Else in Mind?',
    'contact-call-note': 'Fill out the form below, or book a 15-minute call.',
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
    'form-prep-summary': 'Help me prepare for our call (optional, about 1 minute)',
    'form-prep-note': 'Nothing here is required. These answers help me prepare so our call is more useful and I can tell you up front what is realistic.',
    'form-team': 'How many people would use AI?',
    'form-team-1': 'Just me',
    'form-team-2': '2 to 5 people',
    'form-team-3': '6 to 20 people',
    'form-team-4': 'More than 20 people',
    'form-tools-label': 'AI tools you already pay for',
    'form-tool-none': 'None yet',
    'form-tool-unsure': 'Not sure',
    'form-needs-label': 'What would you like AI to help with? (tick all that apply)',
    'form-need-writing': 'Writing: emails, quotes, reports',
    'form-need-documents': 'Summarizing documents, PDFs or spreadsheets',
    'form-need-reuse': 'Saved prompts my whole team can reuse',
    'form-need-own-data': 'Working with my own email, calendar or files',
    'form-need-schedule': 'A task that runs on a schedule',
    'form-need-automatic': 'Something that runs by itself when an email, form or invoice arrives',
    'form-need-images': 'Creating images or marketing visuals',
    'form-need-office-files': 'Ready-made Word, Excel or PowerPoint files',
    'form-need-research': 'Researching competitors, suppliers or markets',
    'form-privacy-label': 'Will this involve your customers’ or clients’ personal information?',
    'form-notice': 'I use what you send only to reply and prepare for our call. I do not sell or share it. This form is processed by formsubmit.co, which forwards it to me by email, and a copy is kept in my private contact list. To ask for access or deletion, email biz@aiwithrobert.com.',
    'form-privacy-yes': 'Yes',
    'form-privacy-no': 'No',
    'form-privacy-unsure': 'Not sure',
    'form-submit': 'Send Message',
    'form-error-name': 'Please enter your name',
    'form-error-email': 'Please enter a valid email address',
    'form-error-phone': 'Please enter a valid phone number (XXX-XXX-XXXX)',
    'form-error-choice': 'Please choose an option',
    'free-call-title': 'Free Discovery Call',
    'free-call-text': 'We’ll look at the AI tools you already use and where they could save you time — no pressure, no obligation.',
    'free-call-btn': 'Book a 15-minute call',
    'success-title': 'Thank You!',
    'success-text': 'Your request has been received and logged.<br>I’ll reach out as soon as I’m available.',
    'faq-title': 'Frequently Asked Questions',
    'faq-subtitle': 'Straight answers about AI consulting, automation and training for small businesses in Montréal.',
    'faq-q-different': 'How is this different from just buying more AI subscriptions?',
    'faq-a-different': 'You probably don’t need another one. Most businesses already pay for ChatGPT, Gemini, Copilot or Claude and use a fraction of what they offer. I help you turn what you already have into repeatable workflows, and I only suggest something extra when it clearly pays for itself. And if you don’t use AI yet, I help you choose a subscription that fits your needs and budget — and make sure it earns its keep.',
    'faq-q-platforms': 'Which AI platforms do you work with?',
    'faq-a-platforms': 'ChatGPT, Google Gemini, Microsoft Copilot and Claude, plus other affordable automation tools where they fit. I’m independent, so I recommend what suits your business. What’s possible varies by plan, connectors, API access and third-party services, so I confirm what your subscriptions can actually do before we plan anything.',
    'faq-q-who': 'What kinds of businesses do you work with?',
    'faq-a-who': 'Any small business or professional practice of roughly 5 to 20 people — professional services, trades, retail, health and wellness practices, and more. We start from your processes, so the examples on this page are illustrations, not the limit. The goal is always the same: find where AI can save you the most time, and set it up so you can keep using it.',
    'faq-q-agents': 'Do we need an AI agent?',
    'faq-a-agents': 'Not necessarily. Many businesses get most of their savings from simpler workflows. I only suggest agents or advanced automation when the payoff justifies the extra complexity and cost, and I explain the trade-offs in plain language.',
    'faq-q-cost': 'How much does it cost?',
    'faq-a-cost': 'Starting prices are listed in the Pricing section. Every business is different, so each project is scoped up front and you know the final cost before we start. If something you want goes beyond what your AI plan can do, I tell you plainly and we leave it out or look at a different plan. We discuss options on the free discovery call. Follow-up sessions to refine or expand what we’ve set up are scoped the same way.',
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
    'footer-pages': '<strong>Learn more:</strong> <a href="/services/ai-consulting-small-business-montreal/">AI consulting</a> · <a href="/services/chatgpt-gemini-copilot-consulting/">ChatGPT, Gemini &amp; Copilot</a> · <a href="/services/workflow-automation-small-business/">Workflow automation</a> · <a href="/services/ai-agents-for-small-teams/">AI agents</a> · <a href="/services/practical-ai-staff-training/">Staff training</a> · <a href="/articles/chatgpt-vs-gemini-vs-copilot-small-business/">Which AI tool?</a> · <a href="/articles/get-more-from-your-ai-subscriptions/">Your AI subscriptions</a>',
    'footer-seniors-link': 'Looking for AI help for seniors? Visit AI with Robert for Seniors',
    'footer-rights': 'All rights reserved.',
    'footer-hub-link': 'AI with Robert main site',
  },

  fr: {
    'brand-tagline': 'pour entreprises',
    'nav-home': 'Accueil',
    'nav-examples': 'Exemples',
    'nav-services': 'Services',
    'nav-process': 'Démarche',
    'nav-speaking': 'Conférences',
    'nav-about': 'À Propos',
    'nav-contact': 'Contact',
    'nav-faq': 'FAQ',
    'hero-title': 'Rentabilisez l’IA dans votre entreprise',
    'hero-tagline': 'Que vous payiez déjà pour des outils comme ChatGPT, Gemini, Microsoft Copilot ou Claude, ou que vous n’ayez pas encore commencé avec l’IA, je vous aide à en faire des processus concrets et documentés, bâtis autour de votre travail — et je vous montre comment continuer à les utiliser.',
    'hero-area-note': 'Pour les entreprises dirigées par leur propriétaire et les petites équipes d’environ 5 à 20 personnes — aucun service TI requis. Basé à Côte Saint-Luc, au service du Grand Montréal, en personne ou en ligne, en français ou en anglais.',
    'hero-cta': 'Obtenir une vérification de faisabilité gratuite',
    'stat-years': '25+',
    'stat-years-label': 'Années en technologie',
    'stat-bilingual': 'FR / EN',
    'stat-bilingual-label': 'Entièrement bilingue',
    'stat-platforms': '4+',
    'stat-platforms-label': 'Plateformes d’IA avec lesquelles je travaille',
    'stat-free': 'Gratuit',
    'stat-free-label': 'Appel découverte',
    'entity-aside': '<strong>AI with Robert pour entreprises</strong> — consultation en IA et automatisation des flux de travail pour les petites entreprises et les cabinets professionnels de Montréal, QC. Les débutants sont les bienvenus : j’aide les dirigeants à choisir des outils d’IA adaptés à leurs besoins et à leur budget, ou à tirer plus de ceux qu’ils paient déjà (ChatGPT, Gemini, Microsoft Copilot, Claude), grâce à des flux de travail documentés, bâtis autour de leur travail. Dirigé par Robert Simon. Bilingue (français/anglais), en personne ou en ligne. Appel découverte gratuit. <a href="tel:514-250-8491">514-250-8491</a> &nbsp;&middot;&nbsp; <a href="mailto:biz@aiwithrobert.com">biz@aiwithrobert.com</a>',
    'geo-summary': '<strong>AI with Robert pour entreprises</strong> est la branche d’affaires d’AI with Robert, fondée par <strong>Robert Simon</strong>, professionnel des technologies avec plus de 25 ans d’expérience en innovation numérique et en mise en œuvre de l’IA, notamment chez Bell Canada. Il s’agit d’un cabinet indépendant, neutre quant aux plateformes, spécialisé en productivité et en automatisation par l’IA pour les petites entreprises et les cabinets professionnels (environ 5 à 20 personnes) du Grand Montréal — services professionnels, métiers spécialisés, commerce de détail, cabinets de santé et de bien-être, et plus encore. Les entreprises qui paient déjà des abonnements d’IA (ChatGPT, Google Gemini, Microsoft Copilot, Claude et d’autres outils abordables) en tirent plus de valeur, et les débutants sont aidés à choisir des outils adaptés à leurs besoins et à leur budget. Le travail est défini à l’avance, et le résultat est un ensemble utilisable : de la documentation écrite avec des requêtes adaptées à vos tâches, et des flux de travail configurés autour de vos tâches récurrentes, avec une démonstration pour que vous puissiez les réutiliser. Les séances de suivi pour peaufiner ou élargir sont définies de la même façon. Les quatre services sont une évaluation des occasions d’IA, l’automatisation des flux de travail par l’IA, les agents IA et l’automatisation avancée, et la formation pratique et l’accompagnement en IA pour les équipes plus grandes; des conférences pour groupes d’affaires sont aussi offertes. Pas de plateforme d’entreprise ni de logiciel sur mesure. La supervision humaine et le respect de la vie privée (y compris la Loi 25 du Québec) sont pris en compte. Offert en français et en anglais, en personne ou en ligne. Réservez un appel découverte gratuit au 514-250-8491 ou à biz@aiwithrobert.com. Cette branche est distincte d’AI with Robert pour aînés (seniors.aiwithrobert.com).',
    'opp-title': 'Vous n’utilisez probablement qu’une fraction de l’IA que vous payez déjà',
    'opp-subtitle': 'Que vous payiez déjà pour des outils d’IA ou que vous commenciez à peine, la vraie valeur vient de processus répétables — pas de conversations ponctuelles.',
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
    'opp-next-note': 'Ce ne sont que des exemples, pas des limites. Je n’offre que ce que votre propre forfait d’IA peut réellement faire; nous partons donc de votre travail, de votre secteur et de votre abonnement.',
    'opp-callout-title': 'Pas de plateforme d’entreprise. Pas de logiciel sur mesure. Si vous débutez avec l’IA, je ne recommande que les abonnements qui conviennent à vos besoins et à votre budget.',
    'opp-callout-text': 'Nous commençons par les outils que vous payez déjà et les tâches qui vous font perdre le plus de temps. Le succès se mesure en heures gagnées, en travail manuel éliminé et en processus qui fonctionnent mieux — pas en mots à la mode.',
    'opp-caveat': 'Ce qui est possible dépend de votre forfait. Je confirme ce que votre abonnement permet avant de rien promettre, et je vous dis franchement ce qu’il ne permet pas.',
    'keep-title': 'Ce que vous conservez',
    'keep-intro': 'Chaque mandat est défini à l’avance, et vous pouvez vous servir du résultat :',
    'keep-1-title': 'Documentation',
    'keep-1-desc': 'Des requêtes et des consignes rédigées pour vos tâches précises, dans un langage clair que vous et votre équipe pouvez suivre.',
    'keep-2-title': 'Flux de travail fonctionnels',
    'keep-2-desc': 'Configurés autour de vos tâches récurrentes, avec une démonstration pas à pas pour que vous puissiez les utiliser et les réutiliser en toute confiance.',
    'keep-closing': 'Envie de peaufiner ou d’élargir plus tard? Les séances de suivi sont définies de la même façon.',
    'services-title': 'Services',
    'services-subtitle': 'Quelle que soit votre entreprise — cabinet professionnel, métiers spécialisés, commerce de détail, services — voici les façons dont nous pouvons collaborer. Commencez par celle qui vous convient, ou nous trouverons la bonne ensemble lors d’un appel découverte gratuit.',
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
    'service2-note': 'Les flux de travail que nous mettons en place sont accompagnés de documentation, pour que vous puissiez continuer à les utiliser.',
    'service3-title': 'Agents IA et automatisation avancée',
    'service3-desc': 'Pour les entreprises prêtes à aller plus loin : des assistants IA configurés dans le forfait d’IA que vous payez déjà pour accomplir une tâche précise, sous votre contrôle. Je ne les recommande que si votre forfait le permet et que c’est rentable.',
    'service3-item1': 'Des assistants IA qui accomplissent une tâche précise, comme la recherche ou les premières réponses aux clients',
    'service3-item2': 'Des flux en plusieurs étapes qui utilisent les connexions incluses dans votre forfait',
    'service3-item3': 'Une approbation humaine intégrée là où c’est important',
    'service3-item4': 'Limité à ce que votre forfait permet, confirmé avant de commencer',
    'service4-title': 'Formation pratique et accompagnement en IA',
    'service4-desc': 'Pour les équipes plus grandes qui ont besoin de plus qu’une séance de travail : une formation qui met vos employés à l’aise avec les outils d’IA et les flux de travail que vous utilisez — et qui maintient les résultats.',
    'service4-item1': 'Tirer plus des abonnements que vous avez déjà',
    'service4-item2': 'Créer des requêtes et des flux réutilisables pour les tâches courantes',
    'service4-item3': 'Repérer où l’automatisation s’applique et utiliser l’IA de façon responsable, en tenant compte de la vie privée (y compris la Loi 25 du Québec)',
    'service4-item4': 'Apprendre à maintenir et à améliorer vous-mêmes vos nouveaux flux de travail',
    'nav-pricing': 'Tarifs',
    'pricing-title': 'Des prix de départ clairs',
    'pricing-subtitle': 'Des tarifs fixes, confirmés par écrit avant le début du travail. Les prix sont en dollars canadiens, avant la TPS et la TVQ. Vous achetez votre propre abonnement d’IA directement auprès du fournisseur, et je confirme ce qu’il permet avant de commencer.',
    'price1-title': 'Évaluation des occasions d’IA',
    'price1-amt': 'À partir de 900 $',
    'price1-unit': 'Jusqu’à 5 personnes. 1 800 $ pour 6 à 20 personnes.',
    'price1-i1': 'Vos besoins vérifiés selon le forfait d’IA que vous utilisez ou prévoyez acheter',
    'price1-i2': 'Une évaluation écrite de ce qui fonctionne, de ce qui a des conditions et de ce qui n’est pas possible',
    'price1-i3': 'Une liste de flux de travail avec des économies de temps estimées',
    'price1-i4': 'Une proposition claire pour la prochaine étape',
    'price2-title': 'Mise en place d’un flux de travail IA',
    'price2-amt': 'À partir de 2 000 $',
    'price2-unit': 'Par flux de travail. Les conditions qui exigent une configuration supplémentaire dans votre forfait sont soumissionnées d’avance à 500 $ chacune.',
    'price2-i1': 'Un document de flux de travail rédigé pour votre entreprise',
    'price2-i2': 'Des instructions enregistrées dans votre propre compte d’IA',
    'price2-i3': 'Testé sur un exemple réel de votre entreprise',
    'price2-i4': 'Une remise pour que votre équipe puisse continuer à l’utiliser',
    'price3-title': 'Séance de formation d’équipe',
    'price3-amt': '1 500 $',
    'price3-unit': 'Jusqu’à 10 personnes, 3 heures. 100 $ par personne additionnelle.',
    'price3-i1': 'Séance pratique en direct, en français ou en anglais',
    'price3-i2': 'Cahier et diapositives conçus pour votre entreprise',
    'price3-i3': 'Aide-mémoire à emporter avec vos propres requêtes',
    'price3-i4': 'Sondage de rétroaction pour orienter la suite',
    'price4-title': 'Forfait de démarrage',
    'price4-amt': '3 950 $',
    'price4-unit': 'Au lieu de 4 400 $ si acheté séparément.',
    'price4-i1': 'Une évaluation pour jusqu’à 5 personnes',
    'price4-i2': 'Un flux de travail mis en place et testé',
    'price4-i3': 'Une séance de formation pour jusqu’à 10 personnes',
    'price4-i4': 'Tout commence par l’évaluation : rien n’est promis que votre forfait ne puisse faire',
    'pricing-also': 'Aussi offerts : conférences pour groupes d’affaires à partir de 500 $, soutien mensuel à 300 $ par mois (environ 2 heures) et aide ponctuelle à 150 $ l’heure. Les agents IA sont soumissionnés après une évaluation, et seulement si votre forfait les permet.',
    'pricing-note': 'Ce sont des prix de départ. La portée et le prix final sont toujours confirmés par écrit avant le début du travail.',
    'pricing-cta': 'Commencer par une vérification de faisabilité gratuite',
    'process-title': 'Comment ça fonctionne',
    'process-subtitle': 'Quatre étapes liées, de la première conversation à des résultats mesurables — avec le temps gagné et le rendement toujours en vue.',
    'step1-title': '1. Découvrir',
    'step1-desc': 'Nous discutons de vos outils, de votre équipe et des tâches qui vous font perdre du temps, puis nous repérons où l’IA et l’automatisation peuvent aider le plus.',
    'step2-title': '2. Concevoir',
    'step2-desc': 'Je conçois des solutions pratiques à partir de vos abonnements existants et de ce que votre forfait permet.',
    'step3-title': '3. Mettre en œuvre',
    'step3-desc': 'Je mets en place les flux de travail, les automatisations et les assistants, avec approbation et supervision humaines là où c’est important.',
    'step4-title': '4. Former et accompagner',
    'step4-desc': 'Vous apprenez à utiliser, comprendre et maintenir ce que nous avons mis en place, et vous conservez la documentation et les requêtes — pour que la valeur dure.',
    'speaking-title': 'Conférences pour groupes d’affaires',
    'speaking-subtitle': 'Séances d’IA pratiques pour réseaux d’affaires, chambres de commerce et associations — sans battage, avec des applications concrètes.',
    'speaking-p1': 'Vos membres veulent utiliser l’IA dans leur entreprise dès demain matin, pas assister à une autre conférence pleine de battage. J’offre des présentations courtes et interactives, avec démonstrations en direct, adaptées à votre groupe, en français ou en anglais, en personne dans le Grand Montréal ou en ligne.',
    'speaking-cta': 'Demander une conférence',
    'speaking-testimonial-quote': `Ce qui a le plus marqué, c'est la capacité de Robert à adapter l'atelier au niveau d'expérience de l'auditoire. Les participants déjà à l'aise avec l'IA ont posé des questions approfondies et réfléchies, et Robert y a répondu avec clarté, patience et précision. Il a habilement guidé les discussions sur des sujets comme la neutralité de l'IA, les clavardeurs (chatbots) et l'usage responsable, tout en gardant les échanges informatifs et respectueux.`,
    'speaking-testimonial-role': 'Coordinatrice des programmes et de l’engagement communautaire, bibliothèque publique',
    'speaking-testimonial-context': 'Atelier communautaire sur l’IA pour le public d’une bibliothèque',
    'about-title': 'À propos de Robert',
    'about-subtitle': 'Un leadership technologique pratique pour les dirigeants d’entreprise de Montréal.',
    'about-heading': 'Faites la connaissance de Robert Simon',
    'about-p1': 'Je suis un leader d’opinion indépendant en IA et un expert en transformation numérique, avec plus de 25 ans d’expérience en innovation numérique et en mise en œuvre de l’IA, notamment chez Bell Canada. Je me consacre maintenant à aider les petites entreprises et les cabinets professionnels à tirer une valeur concrète et quotidienne de l’IA.',
    'about-p2': 'Mon approche est pratique et sans battage : utiliser les outils que vous payez déjà, commencer par les tâches qui vous coûtent le plus de temps, mesurer les gains et protéger vos données. Pas de jargon d’agence — seulement des conseils clairs d’une personne qui comprend le fonctionnement réel des petites entreprises.',
    'about-disclaimer': 'AI with Robert pour entreprises est une pratique indépendante de Robert Simon. Les mentions de son expérience décrivent uniquement son parcours; l’entreprise n’est affiliée à aucun employeur, ni commanditée ou approuvée par aucun d’eux, y compris Bell Canada.',
    'about-summary': '<strong>En bref sur Robert Simon :</strong> Basé à Côte Saint-Luc, QC. Plus de 25 ans en technologie et en IA, notamment chez Bell Canada. Aide les petites entreprises et les cabinets professionnels à tirer une valeur concrète de l’IA — qu’ils paient déjà pour des outils d’IA ou non — grâce à l’évaluation des occasions, à l’automatisation des flux de travail, aux agents IA et à la formation pratique. Bilingue (français/anglais). Appel découverte gratuit. Téléphone : 514-250-8491. Courriel : biz@aiwithrobert.com.',
    'about-personal-link': 'Site personnel de Robert et blogue sur l’IA',
    'exp-years': 'Plus de 25 ans en technologie',
    'exp-bell': 'Expérience chez Bell Canada',
    'exp-bilingual': 'Bilingue FR / EN',
    'exp-workshops': 'Ateliers pratiques',
    'contact-title': 'Trouvons où l’IA peut faire gagner du temps et de l’argent à votre entreprise',
    'contact-subtitle': 'Commencez par une vérification de faisabilité gratuite : répondez à quelques questions et voyez tout de suite si votre forfait d’IA actuel peut faire ce dont vous avez besoin.',
    'ba-title': 'Le même outil, des résultats très différents',
    'ba-subtitle': 'Six exemples de ce qui change quand un forfait d’IA à 30 $ cesse de peaufiner des courriels et commence à faire une partie du travail.',
    'ba-before-label': 'Avant : peaufiner',
    'ba-after-label': 'Après : un flux de travail',
    'ba1-title': 'Une soumission après une visite de chantier',
    'ba1-before': 'Vous rédigez la soumission vous-même, vous la collez dans l’IA et vous lui demandez un ton plus professionnel. Elle se lit mieux. Elle a pris autant de temps.',
    'ba1-after': 'Vous déposez vos notes de visite et votre liste de prix. La même IA prépare la soumission complète dans votre format, en français ou en anglais, avec vos conditions et les prix de chaque ligne. Vous la révisez et vous l’envoyez.',
    'ba1-worth': 'Illustration : 6 soumissions par semaine, 30 minutes gagnées sur chacune, soit 3 heures par semaine.',
    'ba2-title': 'Les suivis clients du vendredi',
    'ba2-before': 'Vous demandez à l’IA de corriger la formulation d’un courriel de suivi, puis vous recommencez pour le client suivant.',
    'ba2-after': 'Vous lui donnez le chiffrier des travaux de la semaine. Elle rédige le suivi de chaque client à partir de ses propres lignes, signale les travaux en retard et dresse la liste de ce que vous devez relancer. Vous lisez, ajustez et envoyez.',
    'ba2-worth': 'Illustration : 12 suivis par semaine, 10 minutes gagnées sur chacun, soit 2 heures par semaine.',
    'ba3-title': 'Le suivi après un appel client',
    'ba3-before': 'Vous tapez votre courriel de suivi et vous demandez à l’IA de le raccourcir.',
    'ba3-after': 'Vous collez vos notes d’appel. Des instructions enregistrées les transforment en résumé, en liste de qui fait quoi et pour quand, en courriel de suivi et en note pour le dossier du client. Le même résultat chaque fois, pour toute votre équipe.',
    'ba3-worth': 'Illustration : 10 appels par semaine, 15 minutes gagnées sur chacun, soit 2,5 heures par semaine.',
    'ba4-title': 'La rencontre de révision d’un conseiller financier',
    'ba4-before': 'Vous rédigez le courriel récapitulatif après chaque rencontre et vous demandez à l’IA d’en soigner la formulation.',
    'ba4-after': 'Vous collez vos notes de rencontre. Des instructions enregistrées les transforment en récapitulatif en langage clair pour le client, en liste des actions pour vous et pour lui, et en note au dossier dans le format de votre cabinet. Vous vérifiez chaque chiffre et vous envoyez.',
    'ba4-worth': 'Illustration : 8 rencontres par semaine, 15 minutes gagnées sur chacune, soit 2 heures par semaine.',
    'ba5-title': 'La relance des documents manquants d’un comptable',
    'ba5-before': 'Vous rédigez un rappel pour des documents manquants et vous demandez à l’IA de le rendre plus poli.',
    'ba5-after': 'Vous lui donnez votre liste de contrôle de fin d’année et la liste de ce que chaque client a envoyé. Elle rédige la demande de chaque client en nommant exactement ce qui manque encore, en français ou en anglais, et vous remet un sommaire des dossiers bloqués. Vous révisez et vous envoyez.',
    'ba5-worth': 'Illustration : 15 rappels par semaine, 10 minutes gagnées sur chacun, soit 2,5 heures par semaine.',
    'ba6-title': 'Les demandes d’entretien d’un gestionnaire immobilier',
    'ba6-before': 'Vous répondez à la plainte d’un locataire et vous demandez à l’IA d’adoucir le ton.',
    'ba6-after': 'Vous collez le message du locataire. Des instructions enregistrées le transforment en bon de travail pour l’entrepreneur, en réponse au locataire et en ligne pour le rapport mensuel du propriétaire. Le même format pour chaque immeuble, peu importe qui s’en occupe dans votre équipe.',
    'ba6-worth': 'Illustration : 15 demandes par semaine, 10 minutes gagnées sur chacune, soit 2,5 heures par semaine.',
    'ba-math-title': 'Le calcul',
    'ba-math-text': 'Deux à trois heures par semaine à 60 $ l’heure, c’est environ 6 000 $ à 9 000 $ par année. La mise en place d’un flux de travail commence à 2 000 $, payés une seule fois, sur un abonnement que vous avez déjà.',
    'ba-note': 'Ce sont des illustrations avec des chiffres ronds, et non des résultats de clients. Utilisez vos propres heures et votre propre taux. Ce qui est possible dépend de votre forfait, et c’est ce que la vérification de faisabilité gratuite vous indique. Elle demande aussi si votre travail touche aux renseignements personnels de vos clients, car cela change les forfaits qui conviennent.',
    'ba-cta': 'Vérifier ce que votre forfait peut faire',
    'feas-title': 'Vérification de faisabilité gratuite',
    'feas-intro': 'Cela prend environ deux minutes. Dites-moi quel forfait d’IA vous payez et jusqu’à trois choses que vous aimeriez qu’il fasse. Vous obtenez à l’écran un Oui, En partie ou Non préliminaire pour chacune, gratuitement et sans obligation.',
    'feas-noscript': 'La vérification de faisabilité nécessite JavaScript. Vous pouvez aussi écrire à biz@aiwithrobert.com.',
    'other-summary': 'Une conférence pour un groupe ou une autre question? Envoyez un message',
    'contact-other': 'Une conférence pour un groupe ou une autre question? Écrivez à <a href="mailto:biz@aiwithrobert.com" style="color:#1b4469;font-weight:600;">biz@aiwithrobert.com</a>.',
    'contact-heading': 'Autre chose en tête?',
    'contact-call-note': 'Remplissez le formulaire ci-dessous, ou réservez un appel de 15 minutes.',
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
    'form-prep-summary': 'Aidez-moi à préparer notre appel (facultatif, environ 1 minute)',
    'form-prep-note': 'Rien ici n’est obligatoire. Ces réponses me permettent de me préparer pour que notre appel soit plus utile et de vous dire d’emblée ce qui est réaliste.',
    'form-team': 'Combien de personnes utiliseraient l’IA?',
    'form-team-1': 'Moi seulement',
    'form-team-2': '2 à 5 personnes',
    'form-team-3': '6 à 20 personnes',
    'form-team-4': 'Plus de 20 personnes',
    'form-tools-label': 'Outils d’IA que vous payez déjà',
    'form-tool-none': 'Aucun pour l’instant',
    'form-tool-unsure': 'Je ne suis pas certain',
    'form-needs-label': 'Pour quoi voulez-vous de l’aide de l’IA? (cochez tout ce qui s’applique)',
    'form-need-writing': 'Rédaction : courriels, soumissions, rapports',
    'form-need-documents': 'Résumer des documents, des PDF ou des chiffriers',
    'form-need-reuse': 'Des invites enregistrées que toute mon équipe peut réutiliser',
    'form-need-own-data': 'Travailler avec mes propres courriels, mon calendrier ou mes fichiers',
    'form-need-schedule': 'Une tâche qui s’exécute selon un horaire',
    'form-need-automatic': 'Quelque chose qui s’exécute seul à l’arrivée d’un courriel, d’un formulaire ou d’une facture',
    'form-need-images': 'Créer des images ou des visuels de marketing',
    'form-need-office-files': 'Des fichiers Word, Excel ou PowerPoint prêts à utiliser',
    'form-need-research': 'Faire de la recherche sur des concurrents, des fournisseurs ou des marchés',
    'form-privacy-label': 'Est-ce que cela touchera des renseignements personnels de vos clients?',
    'form-notice': 'J’utilise ce que vous m’envoyez uniquement pour vous répondre et préparer notre appel. Je ne le vends ni ne le partage. Ce formulaire est traité par formsubmit.co, qui me le transmet par courriel, et une copie est conservée dans ma liste de contacts privée. Pour demander l’accès ou la suppression de vos renseignements, écrivez à biz@aiwithrobert.com.',
    'form-privacy-yes': 'Oui',
    'form-privacy-no': 'Non',
    'form-privacy-unsure': 'Je ne suis pas certain',
    'form-submit': 'Envoyer le message',
    'form-error-name': 'Veuillez entrer votre nom',
    'form-error-email': 'Veuillez entrer une adresse courriel valide',
    'form-error-phone': 'Veuillez entrer un numéro de téléphone valide (XXX-XXX-XXXX)',
    'form-error-choice': 'Veuillez choisir une option',
    'free-call-title': 'Appel découverte gratuit',
    'free-call-text': 'Nous examinerons les outils d’IA que vous utilisez déjà et où ils pourraient vous faire gagner du temps — sans pression ni obligation.',
    'free-call-btn': 'Réserver un appel de 15 minutes',
    'success-title': 'Merci!',
    'success-text': 'Votre demande a bien été reçue et enregistrée.<br>Je vous contacterai dès que je serai disponible.',
    'faq-title': 'Questions fréquentes',
    'faq-subtitle': 'Des réponses claires sur la consultation, l’automatisation et la formation en IA pour les petites entreprises de Montréal.',
    'faq-q-different': 'En quoi est-ce différent d’acheter simplement d’autres abonnements d’IA?',
    'faq-a-different': 'Vous n’en avez probablement pas besoin d’un autre. La plupart des entreprises paient déjà pour ChatGPT, Gemini, Copilot ou Claude et n’en utilisent qu’une fraction. Je vous aide à transformer ce que vous avez déjà en processus répétables, et je ne suggère un ajout que s’il se rentabilise clairement. Et si vous n’utilisez pas encore l’IA, je vous aide à choisir un abonnement adapté à vos besoins et à votre budget, et à faire en sorte qu’il se rentabilise.',
    'faq-q-platforms': 'Avec quelles plateformes d’IA travaillez-vous?',
    'faq-a-platforms': 'ChatGPT, Google Gemini, Microsoft Copilot et Claude, ainsi que d’autres outils d’automatisation abordables lorsqu’ils conviennent. Je suis indépendant : je recommande ce qui convient à votre entreprise. Ce qui est possible varie selon le forfait, les connecteurs, l’accès aux API et les services tiers; je vérifie donc ce que vos abonnements peuvent réellement faire avant de planifier quoi que ce soit.',
    'faq-q-who': 'Avec quels types d’entreprises travaillez-vous?',
    'faq-a-who': 'Toute petite entreprise ou pratique professionnelle d’environ 5 à 20 personnes — services professionnels, métiers spécialisés, commerce de détail, cabinets de santé et de bien-être, et plus encore. Nous partons de vos processus : les exemples de cette page illustrent des cas possibles, ils n’en marquent pas la limite. L’objectif est toujours le même : trouver où l’IA peut vous faire gagner le plus de temps, et la mettre en place pour que vous puissiez continuer à l’utiliser.',
    'faq-q-agents': 'Avons-nous besoin d’un agent IA?',
    'faq-a-agents': 'Pas nécessairement. Plusieurs entreprises réalisent l’essentiel de leurs économies avec des flux de travail plus simples. Je ne propose des agents ou de l’automatisation avancée que si les retombées justifient la complexité et le coût additionnels, et j’explique les compromis en langage clair.',
    'faq-q-cost': 'Combien cela coûte-t-il?',
    'faq-a-cost': 'Les prix de départ sont indiqués dans la section Tarifs. Chaque entreprise est différente : chaque projet est défini à l’avance et vous connaissez le coût final avant de commencer. Si ce que vous souhaitez dépasse ce que votre forfait d’IA permet, je vous le dis franchement et nous l’écartons ou envisageons un autre forfait. Nous discutons des options lors de l’appel découverte gratuit. Les séances de suivi pour peaufiner ou élargir ce que nous avons mis en place sont définies de la même façon.',
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
    'footer-pages': '<strong>En savoir plus :</strong> <a href="/fr/services/conseil-ia-petite-entreprise-montreal/">Conseil en IA</a> · <a href="/fr/services/conseil-chatgpt-gemini-copilot/">ChatGPT, Gemini et Copilot</a> · <a href="/fr/services/automatisation-flux-de-travail-ia/">Automatisation</a> · <a href="/fr/services/agents-ia-petites-equipes/">Agents IA</a> · <a href="/fr/services/formation-pratique-ia-employes/">Formation</a> · <a href="/fr/articles/chatgpt-gemini-copilot-petite-entreprise/">Quel outil d’IA?</a> · <a href="/fr/articles/tirer-plus-de-vos-abonnements-ia/">Vos abonnements d’IA</a>',
    'footer-seniors-link': 'Vous cherchez de l’aide en IA pour aînés? Visitez AI with Robert pour aînés',
    'footer-rights': 'Tous droits réservés.',
    'footer-hub-link': 'Site principal AI with Robert',
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
      'L’IA concrète pour petites entreprises et cabinets de Montréal : des flux de travail documentés, bâtis autour de votre travail. Appel découverte gratuit.');
    document.documentElement.lang = 'fr';
  } else {
    // Must stay byte-identical to the <title>/<meta name="description"> in
    // index.html's <head>. JS overwrites them on load, so any drift means
    // crawlers that render JS see different metadata than those that don't.
    document.title = 'AI with Robert for Business — Small Business AI, Montréal';
    document.querySelector('meta[name="description"]').setAttribute('content',
      'Practical AI for small businesses and professional practices in Montréal: documented workflows built around your work. Free discovery call.');
    document.documentElement.lang = 'en';
  }

  checkFormValidity();
}

/**
 * The footer's "This page in English" / "Cette page en français" link is a plain
 * <a href> so crawlers and no-JS visitors can follow it (hreflang pair). Followed
 * as-is it would NOT update the saved preference, and on "/" the init code in
 * main.js would read the stale 'fr' from localStorage and bounce the visitor
 * straight back to /fr/. So route clicks through setLanguage(), exactly like the
 * nav dropdown does: it saves the preference, then navigates to the right URL.
 * Modified clicks (new tab/window) just save the preference and keep the default.
 */
document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('#lang-alternate-link a[hreflang]');
  if (!a) return;
  var lang = a.getAttribute('hreflang');
  if (lang !== 'en' && lang !== 'fr') return;
  var plain = e.button === 0 && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
  if (plain) {
    e.preventDefault();
    setLanguage(lang);
  } else {
    localStorage.setItem('language', lang);
  }
});
document.addEventListener('auxclick', function (e) {
  var a = e.target.closest && e.target.closest('#lang-alternate-link a[hreflang]');
  if (a && e.button === 1) localStorage.setItem('language', a.getAttribute('hreflang'));
});

window.setLanguage = setLanguage;
window.getCurrentLanguage = getCurrentLanguage;
window.getPageLanguage = getPageLanguage;
/**
 * form.js
 * The old contact form was removed on 2026-11-12: the free feasibility check (js/feascheck.js, standalone) is the one
 * form on the Business site, and other questions go by email. main.js still calls the two functions below on load,
 * so they stay as harmless no-ops. If a classic contact form is ever brought back, restore the earlier version of this
 * file from git history (it had validation, the formsubmit.co AJAX submit and saveInquiryCopy()).
 */
function checkFormValidity() { return true; }
function checkFormSuccess() {}

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
