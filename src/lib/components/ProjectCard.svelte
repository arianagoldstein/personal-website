<script lang="ts">
	import type { Project } from '$lib/data/content';

	let { title, description, tags, githubUrl, liveUrl }: Project = $props();
</script>

<article class="project-card">
	<div class="card-header">
		<h3 class="card-title">{title}</h3>
		<div class="card-links">
			{#if githubUrl}
				<a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
						<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
					</svg>
				</a>
			{/if}
			{#if liveUrl}
				<a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live site">
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
			{#each tags as tag}
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
