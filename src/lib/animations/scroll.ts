import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const triggers: ScrollTrigger[] = [];

export function initScrollAnimations() {
	gsap.registerPlugin(ScrollTrigger);

	gsap.from('.animate-fade-up:first-of-type', {
		opacity: 0,
		y: 30,
		duration: 0.9,
		ease: 'power2.out'
	});

	gsap.utils.toArray<Element>('.animate-fade-up:not(:first-of-type)').forEach((el) => {
		const tween = gsap.from(el, {
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
		if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
	});

	const cardTween = gsap.from('.project-card', {
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
	if (cardTween.scrollTrigger) triggers.push(cardTween.scrollTrigger);
}

export function killScrollAnimations() {
	triggers.forEach((trigger) => trigger.kill());
	triggers.length = 0;
}
