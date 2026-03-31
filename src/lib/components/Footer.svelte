<script lang="ts">
	import { social } from '$lib/data/content';

	const year = new Date().getFullYear();
</script>

<footer>
	<div class="footer-inner">
		<div class="footer-links">
			<a href={social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
			<a href={social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
		</div>
		<p class="copyright">© {year} Ariana Goldstein</p>
	</div>
</footer>

<style>
	footer {
		border-top: 1px solid var(--color-border);
	}

	.footer-inner {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 2.5rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.footer-links {
		display: flex;
		gap: 1.5rem;
	}

	.footer-links a {
		font-size: 0.85rem;
		font-weight: 500;
		color: var(--color-text-muted);
		transition: color 0.2s;
	}

	.footer-links a:hover {
		color: var(--color-accent);
	}

	.copyright {
		font-size: 0.8rem;
		color: var(--color-text-muted);
		opacity: 0.5;
	}

	@media (max-width: 480px) {
		.footer-inner {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
