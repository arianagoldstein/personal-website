<script lang="ts">
	import { about } from '$lib/data/content';
</script>

<section>
	<div class="section-inner animate-fade-up">
		<p class="section-label">About</p>
		<p class="bio">{about.bio}</p>
	</div>
</section>

<style>
	.bio {
		font-size: clamp(1.1rem, 2.5vw, 1.35rem);
		color: var(--color-text-muted);
		line-height: 1.8;
		max-width: 640px;
	}
</style>
