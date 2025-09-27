// Archivo JS principal
console.log('Pinx cargado');

document.addEventListener('DOMContentLoaded', () => {
	/* =============================================
	 * Active link highlight on scroll
	 * ============================================= */
	const nav = document.querySelector('.pinx-header__nav');
	if (nav) {
		const links = Array.from(nav.querySelectorAll('a[href^="#"]'));
		if (links.length) {
			const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
			const setActive = (id) => {
				links.forEach(a => {
					const isActive = a.getAttribute('href') === `#${id}`;
					a.classList.toggle('selected', isActive);
					if (isActive) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
				});
			};
			const observer = new IntersectionObserver((entries) => {
				const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
				if (visible?.target?.id) setActive(visible.target.id);
			}, { root: null, rootMargin: '0px 0px -60% 0px', threshold: [0.25, 0.5, 0.75] });
			sections.forEach(sec => observer.observe(sec));
			const first = sections.find(s => s.getBoundingClientRect().top >= 0) || sections[0];
			if (first) setActive(first.id);
		}
	}

	/* =============================================
	 * Hamburger Menu Toggle
	 * ============================================= */
	const toggleBtn = document.querySelector('.pinx-header__toggle');
	const primaryNav = document.getElementById('primary-nav');
	if (toggleBtn && primaryNav) {
		const closeOnEscape = (e) => { if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') toggleBtn.click(); };
		toggleBtn.addEventListener('click', () => {
			const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
			toggleBtn.setAttribute('aria-expanded', String(!expanded));
			primaryNav.classList.toggle('is-open', !expanded);
			if (!expanded) document.addEventListener('keydown', closeOnEscape); else document.removeEventListener('keydown', closeOnEscape);
		});
	}

	/* =============================================
	 * Dark Mode Toggle (token-driven)
	 * ============================================= */
	const themeToggleBtn = document.querySelector('.pinx-theme-toggle');
	const root = document.documentElement;
	const PREF_KEY = 'pinx-theme';
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
	const applyTheme = (mode) => {
		if (mode === 'dark') {
			root.setAttribute('data-theme', 'dark');
			themeToggleBtn?.classList.add('is-dark');
			if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun" aria-hidden="true"></i>';
		} else {
			root.removeAttribute('data-theme');
			themeToggleBtn?.classList.remove('is-dark');
			if (themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon" aria-hidden="true"></i>';
		}
	};
	const storedTheme = localStorage.getItem(PREF_KEY);
	applyTheme(storedTheme || (prefersDark.matches ? 'dark' : 'light'));
	prefersDark.addEventListener('change', (e) => { if (!localStorage.getItem(PREF_KEY)) applyTheme(e.matches ? 'dark' : 'light'); });
	themeToggleBtn?.addEventListener('click', () => {
		const isDark = root.getAttribute('data-theme') === 'dark';
		const next = isDark ? 'light' : 'dark';
		applyTheme(next);
		localStorage.setItem(PREF_KEY, next);
			themeToggleBtn.setAttribute('aria-pressed', next === 'dark');
	});

	/* =============================================
	 * Lazy Image Loader (data-src -> src when in view)
	 * ============================================= */
	const lazyImgs = document.querySelectorAll('img[data-src]');
	if (lazyImgs.length) {
		const obs = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const img = entry.target;
						const dataSrc = img.getAttribute('data-src');
						if (dataSrc) {
							img.setAttribute('src', dataSrc);
							img.removeAttribute('data-src');
						}
						observer.unobserve(img);
				}
			});
		}, { rootMargin: '140px 0px' });
		lazyImgs.forEach(img => obs.observe(img));
	}

		/* =============================================
		 * Lazy Background Loader: elements with [data-bg]
		 * Sets style.backgroundImage when near viewport.
		 * ============================================= */
		const lazyBgEls = document.querySelectorAll('[data-bg]');
		if (lazyBgEls.length) {
			const bgObs = new IntersectionObserver((entries, observer) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const el = entry.target;
						const url = el.getAttribute('data-bg');
						if (url) {
							el.style.backgroundImage = `url("${url}")`;
							el.removeAttribute('data-bg');
						}
						observer.unobserve(el);
					}
				});
			}, { rootMargin: '180px 0px' });
			lazyBgEls.forEach(el => bgObs.observe(el));
		}

	/* =============================================
	 * Conditional Font Preload (avoid on slow networks)
	 * ============================================= */
	try {
		const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
		const effectiveType = connection?.effectiveType || '4g';
		const fast = !/(2g|slow-2g)/i.test(effectiveType);
		if (fast) {
			const link = document.createElement('link');
			link.rel = 'preload';
			link.as = 'style';
			link.href = 'https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800;900&family=Roboto:wght@400;700&display=swap';
			document.head.appendChild(link);
		}
	} catch (err) {
		// Optional enhancement; ignore errors
	}

	/* =============================================
	 * Dynamic Year Injection for Legal Notice
	 * ============================================= */
	const yearSpan = document.getElementById('year');
	if (yearSpan) {
		yearSpan.textContent = new Date().getFullYear();
	}

	/* =============================================
	 * Lazy Map Loader (click-to-load iframe)
	 * ============================================= */
	const lazyMap = document.querySelector('.px-map--lazy[data-map-src]');
	if (lazyMap) {
		const loadBtn = lazyMap.querySelector('.px-map__load');
		const activate = () => {
			if (lazyMap.getAttribute('data-loaded') === 'true') return;
			const src = lazyMap.getAttribute('data-map-src');
			if (!src) return;
			const iframe = document.createElement('iframe');
			iframe.setAttribute('title', 'Interactive business map');
			iframe.setAttribute('loading', 'lazy');
			iframe.setAttribute('importance', 'low');
			iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
			iframe.setAttribute('allowfullscreen', '');
			iframe.src = src;
			lazyMap.appendChild(iframe);
			lazyMap.setAttribute('data-loaded', 'true');
			const overlay = lazyMap.querySelector('.px-map__overlay');
			if (overlay) overlay.remove();
			lazyMap.removeAttribute('aria-label');
		};
		loadBtn?.addEventListener('click', activate);
		// Keyboard accessibility: Enter/Space on container
		lazyMap.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ' ) { e.preventDefault(); activate(); }
		});
		// Provide role & tabindex for accessibility
		lazyMap.setAttribute('tabindex', '0');
		lazyMap.setAttribute('role', 'button');
		// Optional: preload if near viewport
		const preObs = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting && entry.intersectionRatio > 0.35) {
					// Preload after slight delay for user-centric performance
					setTimeout(() => { if (lazyMap.getAttribute('data-loaded') !== 'true') activate(); }, 4000);
					preObs.disconnect();
				}
			});
		}, { rootMargin: '200px 0px', threshold: [0.25, 0.5] });
		preObs.observe(lazyMap);
	}
});
