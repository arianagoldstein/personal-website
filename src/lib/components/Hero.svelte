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
</section>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding: 0 2rem;
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
</style>
