<script lang="ts">
	import type { Project } from '$lib/data/content';
	import { siGithub } from 'simple-icons';

	let { title, description, tags, githubUrl, liveUrl, figmaUrl, imageUrl, videoUrl }: Project =
		$props();
</script>

<article class="project-card">
	<div class="card-content">
		<div class="card-header">
			<h3 class="card-title">{title}</h3>
			<div class="card-links">
				{#if videoUrl}
					<a href={videoUrl} target="_blank" rel="noopener noreferrer" aria-label="Demo video">
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
							<polygon points="5 3 19 12 5 21 5 3" />
						</svg>
					</a>
				{/if}
				{#if figmaUrl}
					<a href={figmaUrl} target="_blank" rel="noopener noreferrer" aria-label="Figma">
						<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
							<path
								d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4z"
							/>
							<path d="M4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4z" />
							<path d="M4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4z" />
							<path d="M12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0z" />
							<path d="M20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" />
						</svg>
					</a>
				{/if}
				{#if githubUrl}
					<a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
						<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
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
	</div>
	{#if imageUrl}
		<div class="card-image">
			<img src={imageUrl} alt={title} />
		</div>
	{/if}
</article>

<style>
	.project-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		transition: border-color 0.2s;
	}

	.project-card:hover {
		border-color: var(--color-accent);
	}

	.card-content {
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
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
	}

	.card-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
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

	.card-image {
		height: 200px;
		overflow: hidden;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top;
		display: block;
		transition: transform 0.4s ease;
	}

	.project-card:hover .card-image img {
		transform: scale(1.08);
	}
</style>
