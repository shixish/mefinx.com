/*
	All of the site's copy lives here, so changing wording never means touching markup.
	Claims about the app should be checkable against the app repo (its README and /privacy page).
*/

export const APP_URL = 'https://mefinx.app';

export const site = {
	title: 'mefinx',
	tagline: 'The personal CRM you talk to',
	description:
		'mefinx is a personal CRM you talk to. Tell it about the people you meet and it builds a living map of everyone you know.',
	url: 'https://mefinx.com'
};

export interface Link {
	label: string;
	href: string;
}

export const nav: Link[] = [
	{ label: 'How it works', href: '/#how' },
	{ label: 'Features', href: '/#features' },
	{ label: 'FAQ', href: '/#faq' }
];

export const footerColumns: { heading: string; links: Link[] }[] = [
	{ heading: 'Product', links: [...nav, { label: 'Open mefinx', href: APP_URL }] },
	{
		heading: 'Legal',
		links: [
			{ label: 'Privacy', href: `${APP_URL}/privacy` },
			{ label: 'Terms', href: `${APP_URL}/terms` }
		]
	}
];

export const hero = {
	eyebrow: 'Installs on your phone · works offline',
	headline: 'Remember everyone you meet.',
	subheadline:
		'mefinx is a personal CRM you talk to. Tell it about the people you meet, the places you go and what you did together, and it builds a living map of everyone you know that you can ask anything.',
	primary: { label: 'Open mefinx', href: APP_URL },
	secondary: { label: 'See how it works', href: '#how' }
};

export interface Message {
	speaker: 'you' | 'mefinx';
	text: string;
}

export const conversation = {
	headline: 'Just tell it what happened',
	subheadline:
		"No forms and no fields. Talk to mefinx the way you'd tell a friend, and it files every detail in the right place.",
	caption:
		'The same conversation works for events, places, birthdays and who introduced you to whom.',
	messages: [
		{
			speaker: 'you',
			text: 'Met Jordan at the Kava Bar tonight. Green mohawk, works with Maya at Kalani, really into bouldering.'
		},
		{
			speaker: 'mefinx',
			text: 'Added Jordan with a note about the mohawk and the bouldering, linked them to Maya as coworkers at Kalani, and logged tonight at the Kava Bar.'
		},
		{ speaker: 'you', text: 'Who was that person from Kalani with the green hair?' },
		{
			speaker: 'mefinx',
			text: "That's Jordan. You met them last night at the Kava Bar, and they work with Maya."
		}
	] satisfies Message[]
};

export type FeatureIcon =
	'graph' | 'search' | 'filter' | 'pin' | 'calendar' | 'offline' | 'undo' | 'sparkle' | 'lock';

export interface Feature {
	icon: FeatureIcon;
	title: string;
	description: string;
}

export const features = {
	headline: 'Your people, places and moments in one graph',
	subheadline:
		'Everything you tell mefinx becomes part of a graph you can explore, filter and question.',
	items: [
		{
			icon: 'graph',
			title: 'See how everyone connects',
			description:
				'An interactive graph of people, places and events, with every relationship drawn in: family, partners, friends, housemates and coworkers.'
		},
		{
			icon: 'search',
			title: 'Find people from fuzzy memories',
			description:
				'Ask for "the climber who works with Maya" and get the right person back, even when you\'ve forgotten their name.'
		},
		{
			icon: 'filter',
			title: 'Filter to what matters',
			description:
				"Narrow the graph by type, relationship, date range or how many hops out from someone, and spot the friends you haven't seen in a while."
		},
		{
			icon: 'pin',
			title: 'Knows where you are',
			description:
				'Turn on location and mefinx matches where you are to the places in your graph, so "who do I know here?" just works. Only your latest position is kept.'
		},
		{
			icon: 'calendar',
			title: 'Works with Google',
			description:
				'Sign in with Google and mefinx can look up your contacts and calendar, read-only and only when it needs to.'
		},
		{
			icon: 'offline',
			title: 'Installs like an app',
			description:
				"Add mefinx to your home screen on your phone or desktop. It opens instantly, your graph stays readable offline, and anything you type without a connection sends when you're back."
		},
		{
			icon: 'undo',
			title: 'Every change can be undone',
			description:
				"Every edit, including the assistant's, lands in a ledger, so a wrong change can be traced back and reversed."
		},
		{
			icon: 'sparkle',
			title: 'Pick your model',
			description:
				'Chat with the built-in model, or bring your own Claude or Gemini key and choose the model per message.'
		},
		{
			icon: 'lock',
			title: 'Your data stays yours',
			description:
				'No ads, no tracking and nothing sold. Download everything as JSON, or delete your account and all of it, whenever you want.'
		}
	] satisfies Feature[]
};

export const faq = {
	headline: 'Questions, answered',
	items: [
		{
			question: 'What is mefinx, exactly?',
			answer:
				'A notebook for remembering people. You chat with an assistant about who you met and what happened, and it keeps a structured graph of people, events and places that you can browse or ask questions of later.'
		},
		{
			question: 'Does it work on my phone?',
			answer:
				'Yes. mefinx is a web app you can install to your home screen on Android or desktop. Once installed it opens like any other app and your graph stays readable without a connection.'
		},
		{
			question: 'Which AI models does it use?',
			answer:
				'A Mistral model is available out of the box. You can also paste your own Anthropic or Google key in Settings to unlock Claude or Gemini, and pick the model for each message.'
		},
		{
			question: 'Where does my data go?',
			answer:
				'Your graph is stored on Cloudflare. When you ask a question, the question and the parts of your graph needed to answer it go to the model you picked. There is no advertising, no analytics and no third-party cookies. The privacy policy has the details.'
		},
		{
			question: 'Will it import my Google contacts?',
			answer:
				"It doesn't bulk-import. When you've linked Google, the assistant can look someone up in your contacts or calendar on demand, read-only, and add what's useful to your graph."
		},
		{
			question: "What shouldn't I put in it?",
			answer:
				'Anything worth stealing: passwords, account numbers, ID numbers, health details someone told you in confidence, or work secrets. mefinx is for remembering people, not a vault.'
		},
		{
			question: 'Can I get my data out?',
			answer:
				'Any time. Settings has a one-click export of your whole graph as JSON, and deleting your account erases everything you own.'
		}
	]
};

export const callToAction = {
	eyebrow: 'Ready when you are',
	headline: 'Start your graph',
	subheadline: 'Sign in with Google and tell mefinx about the last person you met.',
	primary: { label: 'Open mefinx', href: APP_URL }
};
