export const hero = {
	name: 'Ariana Goldstein',
	tagline: 'Software engineer. I build things that work.' // TODO: update with your own tagline
};

export const about = {
	// TODO: replace with your own bio (2-4 sentences, write it like a human not a resume)
	bio: "I'm a software engineer based in New York, currently at Bloomberg. I like building products that are fast, thoughtful, and easy to use. Outside of work I'm usually hiking, at a concert, or planning my next trip."
};

export type Experience = {
	company: string;
	role: string;
	dates: string;
	type: 'full-time' | 'intern';
};

export const experience: Experience[] = [
	{
		company: 'Bloomberg',
		role: 'Software Engineer',
		dates: '2024 – Present',
		type: 'full-time'
	},
	{
		company: 'Bloomberg',
		role: 'Software Engineer Intern',
		dates: 'May – Aug 2023',
		type: 'intern'
	},
	{
		company: 'Meta',
		role: 'Software Engineer Intern',
		dates: 'May – Aug 2022',
		type: 'intern'
	},
	{
		company: 'Sandia National Laboratories',
		role: 'Software Engineer Intern',
		dates: 'May – Aug 2021',
		type: 'intern'
	}
];

export type Project = {
	title: string;
	description: string;
	tags: string[];
	githubUrl?: string;
	liveUrl?: string;
};

export const projects: Project[] = [
	{
		title: 'Baton',
		description:
			'A web app that transfers your workout history from MapMyRun to Strava — because your data should move with you.',
		tags: ['TypeScript', 'Web'], // TODO: update with actual tech stack
		githubUrl: 'https://github.com/arianagoldstein/baton' // TODO: update URL
	},
	{
		title: 'Encore',
		description:
			'An iOS app that brings the Yelp discovery experience to live music — find, review, and save concerts near you.',
		tags: ['Swift', 'iOS'], // TODO: update with actual tech stack
		githubUrl: 'https://github.com/arianagoldstein/encore' // TODO: update URL
	},
	{
		title: 'Tripline',
		description:
			'An Android app to share travel inspiration and preserve memories from your adventures in a visual, shareable format.',
		tags: ['Kotlin', 'Android'], // TODO: update with actual tech stack
		githubUrl: 'https://github.com/arianagoldstein/tripline' // TODO: update URL
	},
	{
		title: 'USC Marketplace',
		description:
			'A peer-to-peer marketplace for USC students to buy, sell, and trade furniture, leases, football tickets, and more.',
		tags: ['Web'], // TODO: update with actual tech stack
		githubUrl: 'https://github.com/arianagoldstein/usc-marketplace' // TODO: update URL
	},
	{
		title: 'Autofill Trojan Check',
		description:
			'A Chrome extension that streamlines the daily campus health check-in process, saving hundreds of clicks a semester.',
		tags: ['JavaScript', 'Chrome Extension'],
		githubUrl: 'https://github.com/arianagoldstein/autofill-trojan-check' // TODO: update URL
	}
];

export const social = {
	github: 'https://github.com/arianagoldstein', // TODO: verify URL
	linkedin: 'https://linkedin.com/in/arianagoldstein' // TODO: verify URL
};
