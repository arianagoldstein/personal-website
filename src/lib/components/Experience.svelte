<script lang="ts">
	import { experience } from '$lib/data/content';
</script>

<section>
	<div class="section-inner animate-fade-up">
		<p class="section-label">Experience</p>
		<ul class="experience-list">
			{#each experience as role (role.company + role.dates)}
				<li class="role">
					<div class="role-left">
						<span class="company">{role.company}</span>
					</div>
					<div class="role-right">
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
		justify-content: space-between;
		align-items: baseline;
		gap: 2rem;
		padding: 1.5rem 0;
		border-bottom: 1px solid var(--color-border);
	}

	.role:first-child {
		border-top: 1px solid var(--color-border);
	}

	.company {
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text);
	}

	.role-right {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: 0.2rem;
		flex-shrink: 0;
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
		.role {
			flex-direction: column;
			gap: 0.4rem;
		}

		.role-right {
			align-items: flex-start;
		}
	}
</style>
