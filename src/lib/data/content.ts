export const hero = {
	name: 'Ariana Goldstein',
	tagline: 'software engineer, artist, leader'
};

export const about = {
	bio: "I'm a software engineer based in New York, currently at Bloomberg. I like building products that are fast, thoughtful, and easy to use. Outside of work I'm usually hiking, at a concert, or planning my next trip."
};

export type Experience = {
	company: string;
	role: string;
	dates: string;
};

export const experience: Experience[] = [
	{
		company: 'Bloomberg',
		role: 'Software Engineer',
		dates: '2024 – Present'
	},
	{
		company: 'Bloomberg',
		role: 'Software Engineer Intern',
		dates: 'May – Aug 2023'
	},
	{
		company: 'Meta',
		role: 'Software Engineer Intern',
		dates: 'May – Aug 2022'
	},
	{
		company: 'Sandia National Laboratories',
		role: 'Software Engineer Intern',
		dates: 'May – Aug 2021'
	}
];

export type Project = {
	title: string;
	description: string;
	tags: string[];
	githubUrl?: string;
	liveUrl?: string;
	figmaUrl?: string;
	imageUrl?: string;
	videoUrl?: string;
};

export const projects: Project[] = [
	{
		title: 'CoJourney',
		description: 'An app that streamlines the group travel planning process',
		tags: ['Figma'],
		figmaUrl:
			'https://www.figma.com/design/f8dosYkJsSIi7G4m2L257E/BUAD-301-Stuff?node-id=581-981&t=jadnpFacNJfDog5d-1',
		imageUrl: '/images/projects/cojourney.png'
	},
	{
		title: 'Baton',
		description: 'A web app that transfers your workout history from MapMyRun to Strava',
		tags: ['JavaScript', 'Python'],
		githubUrl: 'https://github.com/arianagoldstein/mapmyrun-to-strava',
		imageUrl: '/images/projects/baton.png'
	},
	{
		title: 'Encore',
		description:
			"An iOS app that's like Yelp, but for concerts— find, review, and save concerts near you. Follow your favorite artists, view setlists, and post.",
		tags: ['Swift', 'iOS', 'Firebase'],
		githubUrl: 'https://github.com/arianagoldstein/Encore',
		imageUrl: '/images/projects/encore.png',
		videoUrl: 'https://youtu.be/Ic3vFAsGfCY?si=amwURqMsbBtfeLQ8'
	},
	{
		title: 'Tripline',
		description:
			'An Android app to share travel inspiration and preserve memories from your adventures in a visual, shareable format.',
		tags: ['Java', 'Android', 'Parse'],
		githubUrl: 'https://github.com/arianagoldstein/tripline',
		imageUrl: '/images/projects/tripline.png',
		videoUrl: 'https://www.youtube.com/watch?v=PfuI-PiXZ5M'
	},
	{
		title: 'USC Marketplace',
		description:
			'A peer-to-peer marketplace for USC students to buy, sell, and trade furniture, leases, football tickets, and more.',
		tags: ['Web', 'Firebase'],
		githubUrl: 'https://github.com/idcpaine/uscmarketplace',
		imageUrl: '/images/projects/uscmarketplace.png'
	},
	{
		title: 'Autofill Trojan Check',
		description:
			'A Chrome extension that streamlines the daily campus health check-in process, saving hundreds of clicks a semester.',
		tags: ['JavaScript', 'Python', 'Firebase', 'Chrome Extension'],
		githubUrl: 'https://github.com/Autofill-Trojan-Check/atc',
		imageUrl: '/images/projects/atc.png',
		videoUrl: 'https://drive.google.com/file/d/1GnYve6PxWNqlU7KMJzW2vwcqJ0qd5hb5/view'
	}
];

export const social = {
	github: 'https://github.com/arianagoldstein',
	linkedin: 'https://www.linkedin.com/in/ariana-goldstein/',
	spotify: 'https://open.spotify.com/user/arianagoldstein?si=046f2bb3da804691',
	letterboxd: 'https://boxd.it/anPmp',
	goodreads: 'https://www.goodreads.com/arianagoldstein',
	beli: 'https://beliapp.co/app/arianagoldstein',
	strava: 'https://strava.app.link/wo5w1fFf61b',
	youtube: 'https://www.youtube.com/@arianagoldstein',
	pinterest: 'https://www.pinterest.com/goldsteinariana/'
};
