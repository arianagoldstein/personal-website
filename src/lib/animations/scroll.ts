import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export function initScrollAnimations() {
	gsap.registerPlugin(ScrollTrigger);

	// Hero fades in on load (not scroll-triggered)
	gsap.from('.animate-fade-up:first-of-type', {
		opacity: 0,
		y: 30,
		duration: 0.9,
		ease: 'power2.out'
	});

	// All other sections fade up as they scroll into view
	gsap.utils.toArray<Element>('.animate-fade-up:not(:first-of-type)').forEach((el) => {
		gsap.from(el, {
			opacity: 0,
			y: 40,
			duration: 0.7,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: el,
				start: 'top 85%',
				toggleActions: 'play none none none'
			}
		});
	});

	// Project cards stagger in when the grid enters view
	gsap.from('.project-card', {
		opacity: 0,
		y: 24,
		duration: 0.5,
		stagger: 0.08,
		ease: 'power2.out',
		scrollTrigger: {
			trigger: '.projects-grid',
			start: 'top 80%'
		}
	});
}
