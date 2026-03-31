<script lang="ts">
	import { onMount } from 'svelte';
	import { initScrollAnimations } from '$lib/animations/scroll';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		initScrollAnimations();
	});
</script>

<main>
	<Hero />
	<About />
	<Experience />
	<Projects />
	<Footer />
</main>
