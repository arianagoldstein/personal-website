<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { initScrollAnimations, killScrollAnimations } from '$lib/animations/scroll';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Experience from '$lib/components/Experience.svelte';
	import Education from '$lib/components/Education.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Footer from '$lib/components/Footer.svelte';

	onMount(() => {
		initScrollAnimations();
	});

	onDestroy(() => {
		killScrollAnimations();
	});
</script>

<main>
	<Hero />
	<About />
	<Experience />
	<Education />
	<Projects />
	<Footer />
</main>
