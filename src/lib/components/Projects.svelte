<script lang="ts">
	import { projects } from '$lib/data/content';
	import ProjectCard from './ProjectCard.svelte';
</script>

<section>
	<div class="section-inner">
		<p class="section-label animate-fade-up">Projects</p>
		<div class="projects-grid">
			{#each projects as project}
				<ProjectCard {...project} />
			{/each}
		</div>
	</div>
</section>

<style>
	.projects-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}

	@media (max-width: 640px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
