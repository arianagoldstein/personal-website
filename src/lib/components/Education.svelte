<script lang="ts">
	import { education } from '$lib/data/content';
</script>

<section>
	<div class="section-inner animate-fade-up">
		<p class="section-label">Education</p>
		<div class="edu-row">
			<a
				href={education.url}
				target="_blank"
				rel="noopener noreferrer"
				class="logo-link"
				aria-label="{education.school} website"
			>
				<img
					src={education.logoSrc}
					alt={education.school}
					class="edu-logo"
					class:invert={education.invertLogo}
				/>
			</a>
			<div class="edu-info">
				<span class="school">{education.school}</span>
				<span class="degree">{education.degree}</span>
				<span class="minor">{education.minor}</span>
				<span class="meta">{education.honors} · {education.dates}</span>
			</div>
		</div>
	</div>
</section>

<style>
	.edu-row {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		padding: 1.5rem 0;
		border-top: 1px solid var(--color-border);
		border-bottom: 1px solid var(--color-border);
	}

	.edu-logo {
		height: 48px;
		width: 48px;
		object-fit: contain;
		flex-shrink: 0;
		opacity: 0.9;
	}

	.edu-logo.invert {
		filter: invert(1);
	}

	.edu-info {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.school {
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text);
	}

	.degree {
		font-size: 0.9rem;
		color: var(--color-text-muted);
	}

	.minor {
		font-size: 0.9rem;
		color: var(--color-text-muted);
	}

	.meta {
		font-size: 0.8rem;
		color: var(--color-text-muted);
		opacity: 0.6;
	}

	@media (max-width: 540px) {
		.edu-logo {
			height: 40px;
			width: 40px;
		}
	}
</style>
