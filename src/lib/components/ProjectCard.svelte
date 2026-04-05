<script lang="ts">
	import type { Project } from '$lib/data/content';
	import { siGithub } from 'simple-icons';

	let { title, description, tags, githubUrl, liveUrl }: Project = $props();
</script>

<article class="project-card">
	<div class="card-header">
		<h3 class="card-title">{title}</h3>
		<div class="card-links">
			{#if githubUrl}
				<a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
						<path d={siGithub.path} />
					</svg>
				</a>
			{/if}
			{#if liveUrl}
				<a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live site">
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
						<polyline points="15 3 21 3 21 9" />
						<line x1="10" y1="14" x2="21" y2="3" />
					</svg>
				</a>
			{/if}
		</div>
	</div>
	<p class="card-description">{description}</p>
	{#if tags.length > 0}
		<div class="card-tags">
			{#each tags as tag (tag)}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	{/if}
</article>

<style>
	.project-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		transition: border-color 0.2s;
	}

	.project-card:hover {
		border-color: var(--color-accent);
	}

	.card-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
	}

	.card-title {
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text);
		line-height: 1.3;
	}

	.card-links {
		display: flex;
		gap: 0.75rem;
		flex-shrink: 0;
	}

	.card-links a {
		color: var(--color-text-muted);
		transition: color 0.2s;
		display: flex;
		align-items: center;
	}

	.card-links a:hover {
		color: var(--color-accent);
	}

	.card-description {
		font-size: 0.875rem;
		color: var(--color-text-muted);
		line-height: 1.65;
		flex: 1;
	}

	.card-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin-top: 0.25rem;
	}

	.tag {
		font-size: 0.7rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		color: var(--color-accent);
		background: rgba(79, 142, 247, 0.08);
		border: 1px solid rgba(79, 142, 247, 0.2);
		border-radius: 3px;
		padding: 0.2rem 0.5rem;
	}
</style>
