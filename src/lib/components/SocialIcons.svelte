<script lang="ts">
	import { social } from '$lib/data/content';
	import {
		siGithub,
		siSpotify,
		siLetterboxd,
		siGoodreads,
		siStrava,
		siYoutube,
		siPinterest
	} from 'simple-icons';

	// LinkedIn was removed from Simple Icons due to brand licensing — using inline path
	const linkedinPath =
		'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z';

	type Icon =
		| { label: string; url: string; type: 'svg'; path: string }
		| { label: string; url: string; type: 'img'; src: string };

	const icons: Icon[] = [
		{ label: 'GitHub', url: social.github, type: 'svg', path: siGithub.path },
		{ label: 'LinkedIn', url: social.linkedin, type: 'svg', path: linkedinPath },
		{ label: 'Spotify', url: social.spotify, type: 'svg', path: siSpotify.path },
		{ label: 'Letterboxd', url: social.letterboxd, type: 'svg', path: siLetterboxd.path },
		{ label: 'Goodreads', url: social.goodreads, type: 'svg', path: siGoodreads.path },
		{ label: 'Beli', url: social.beli, type: 'img', src: '/beli.png' },
		{ label: 'Strava', url: social.strava, type: 'svg', path: siStrava.path },
		{ label: 'YouTube', url: social.youtube, type: 'svg', path: siYoutube.path },
		{ label: 'Pinterest', url: social.pinterest, type: 'svg', path: siPinterest.path }
	];
</script>

<div class="social-icons">
	{#each icons as icon (icon.label)}
		<a
			href={icon.url}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={icon.label}
			title={icon.label}
		>
			{#if icon.type === 'svg'}
				<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path d={icon.path} />
				</svg>
			{:else}
				<img src={icon.src} alt={icon.label} class="icon-img" />
			{/if}
		</a>
	{/each}
</div>

<style>
	.social-icons {
		display: flex;
		gap: 1.25rem;
		align-items: center;
	}

	a {
		color: var(--color-text-muted);
		transition: color 0.2s;
		display: flex;
		align-items: center;
	}

	a:hover {
		color: var(--color-accent);
	}

	svg {
		width: 18px;
		height: 18px;
		fill: currentColor;
	}

	.icon-img {
		width: 18px;
		height: 18px;
		object-fit: contain;
		filter: grayscale(1) brightness(0.72) sepia(0.2) hue-rotate(180deg);
		transition: filter 0.2s;
	}

	a:hover .icon-img {
		filter: grayscale(1) sepia(1) hue-rotate(195deg) saturate(4) brightness(1.1);
	}
</style>
