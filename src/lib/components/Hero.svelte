<script lang="ts">
	import { hero } from '$lib/data/content';
	import SocialIcons from './SocialIcons.svelte';
</script>

<section class="hero">
	<div class="hero-content animate-fade-up">
		<p class="greeting">Hey there! My name is</p>
		<h1 class="name">{hero.name}</h1>
		<p class="tagline">{hero.tagline}</p>
		<SocialIcons />
	</div>
	<div class="scroll-cue" aria-hidden="true">
		<svg width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M10 3v14M4 11l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
	</div>
</section>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding: 0 2rem;
		position: relative;
	}

	.hero-content {
		max-width: var(--max-width);
		margin: 0 auto;
		width: 100%;
	}

	.greeting {
		font-size: 1rem;
		font-weight: 500;
		color: var(--color-accent);
		letter-spacing: 0.06em;
		margin-bottom: 0.75rem;
	}

	.name {
		font-size: clamp(2.8rem, 8vw, 5.5rem);
		font-weight: 700;
		line-height: 1.05;
		letter-spacing: -0.03em;
		margin-bottom: 1.25rem;
	}

	.tagline {
		font-size: clamp(1rem, 2.5vw, 1.2rem);
		color: var(--color-text-muted);
		max-width: 480px;
		line-height: 1.6;
		margin-bottom: 2.5rem;
	}

	.scroll-cue {
		position: absolute;
		bottom: 2.5rem;
		left: 50%;
		transform: translateX(-50%);
		color: var(--color-text-muted);
		opacity: 0.5;
		animation: bounce 2s ease-in-out infinite;
	}

	@keyframes bounce {
		0%, 100% { transform: translateX(-50%) translateY(0); }
		50% { transform: translateX(-50%) translateY(6px); }
	}
</style>
