<script lang="ts">
	import { experience } from '$lib/data/content';
</script>

<section>
	<div class="section-inner animate-fade-up">
		<p class="section-label">Experience</p>
		<ul class="experience-list">
			{#each experience as role (role.company + role.dates)}
				<li class="role">
					{#if role.logoSrc}
						<svelte:element
							this={role.url ? 'a' : 'span'}
							href={role.url}
							target={role.url ? '_blank' : undefined}
							rel={role.url ? 'noopener noreferrer' : undefined}
							class="logo-link"
							aria-label={role.url ? `${role.company} website` : undefined}
						>
							<img
								src={role.logoSrc}
								alt={role.company}
								class="company-logo"
								class:invert={role.invertLogo}
							/>
						</svelte:element>
					{/if}
					<div class="role-info">
						<span class="company">{role.company}</span>
						<span class="title">{role.role}</span>
						<span class="dates">{role.dates}</span>
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.experience-list {
		list-style: none;
		display: flex;
		flex-direction: column;
	}

	.role {
		display: flex;
		align-items: center;
		gap: 1.25rem;
		padding: 1.5rem 0;
		border-bottom: 1px solid var(--color-border);
	}

	.role:first-child {
		border-top: 1px solid var(--color-border);
	}

	.company-logo {
		height: 48px;
		width: 48px;
		object-fit: contain;
		flex-shrink: 0;
		opacity: 0.9;
	}

	.company-logo.invert {
		filter: invert(1);
	}

	.role-info {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
	}

	.company {
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text);
	}

	.title {
		font-size: 0.9rem;
		color: var(--color-text-muted);
	}

	.dates {
		font-size: 0.8rem;
		color: var(--color-text-muted);
		opacity: 0.6;
	}

	@media (max-width: 540px) {
		.company-logo {
			height: 40px;
			width: 40px;
		}
	}
</style>
