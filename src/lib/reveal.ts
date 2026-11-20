import type { Attachment } from 'svelte/attachments';

/*
	Fades an element in once it scrolls into view. The element should also carry data-reveal,
	which the CSS in layout.css hides until .is-visible lands. Siblings can stagger with a
	--reveal-index custom property.
*/

let observer: IntersectionObserver | undefined;

function getObserver() {
	observer ??= new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				entry.target.classList.add('is-visible');
				observer?.unobserve(entry.target);
			}
		},
		{ rootMargin: '0px 0px -10% 0px' }
	);
	return observer;
}

export const reveal: Attachment<HTMLElement> = (node) => {
	if (!('IntersectionObserver' in window)) {
		node.classList.add('is-visible');
		return;
	}
	const obs = getObserver();
	obs.observe(node);
	return () => obs.unobserve(node);
};
