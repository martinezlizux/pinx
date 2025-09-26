// Archivo JS principal
console.log('Pinx cargado');

// Header nav active state on scroll
document.addEventListener('DOMContentLoaded', () => {
	const nav = document.querySelector('.pinx-header__nav');
	if (!nav) return;

	const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
	if (!links.length) return;

	const sections = links
		.map(a => document.querySelector(a.getAttribute('href')))
		.filter(Boolean);

	// Helper to set active link
	const setActive = (id) => {
		links.forEach(a => {
			const isActive = a.getAttribute('href') === `#${id}`;
			a.classList.toggle('selected', isActive);
			if (isActive) {
				a.setAttribute('aria-current', 'page');
			} else {
				a.removeAttribute('aria-current');
			}
		});
	};

	// IntersectionObserver to watch sections
	const observer = new IntersectionObserver((entries) => {
		// Find the entry most in view by highest intersectionRatio
		const visible = entries
			.filter(e => e.isIntersecting)
			.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

		if (visible && visible.target && visible.target.id) {
			setActive(visible.target.id);
		}
	}, {
		root: null,
		rootMargin: '0px 0px -60% 0px', // favor section that's 40% from top
		threshold: [0.25, 0.5, 0.75]
	});

	sections.forEach(sec => observer.observe(sec));

	// On load, set to first section in view (fallback to first link)
	const first = sections.find(s => s.getBoundingClientRect().top >= 0) || sections[0];
	if (first) setActive(first.id);
});
