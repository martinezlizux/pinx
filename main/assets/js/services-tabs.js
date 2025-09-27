// Pinx Tabs Interaction (Servicios & Portfolio)
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.pinx-tabs').forEach(tabGroup => {
        const tabBtns = tabGroup.querySelectorAll('.pinx-tab-btn');
        const tabContents = tabGroup.parentElement.parentElement.querySelectorAll('.pinx-tab-content');

    // Initialize aria-selected based on presence of pinx-tab-btn--selected
    tabBtns.forEach(b => b.setAttribute('aria-selected', b.classList.contains('pinx-tab-btn--selected') ? 'true' : 'false'));

        tabBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                tabBtns.forEach(b => {
                    b.classList.remove('pinx-tab-btn--selected');
                    b.setAttribute('aria-selected', 'false');
                });
                tabContents.forEach(c => c.classList.add('d-none'));
                btn.classList.add('pinx-tab-btn--selected');
                btn.setAttribute('aria-selected', 'true');
                const tab = btn.getAttribute('data-tab');
                tabGroup.parentElement.parentElement.querySelector(`.pinx-tab-content[data-content="${tab}"]`).classList.remove('d-none');

        // Mobile: indicator + autoscroll
        updateIndicator(tabGroup);
        if (window.innerWidth < 768) {
          scrollTabIntoView(btn, tabGroup);
        }
            });
        });

    // Initial indicator
    updateIndicator(tabGroup);
    });
});

// Dynamic width sync for Services tabs and content wrapper
document.addEventListener('DOMContentLoaded', () => {
  const servicesSection = document.querySelector('#services');
  if (!servicesSection) return;
  const tabs = servicesSection.querySelector('.pinx-tabs');
  const wrapper = servicesSection.querySelector('.pinx-tab-content-wrapper');
  if (!tabs || !wrapper) return;

  let rafId;
  const applyWidth = () => {
    rafId && cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      // On mobile we let the wrapper be fluid (scrolling tabs pattern)
      if (window.innerWidth < 768) {
        wrapper.style.width = '100%';
        return;
      }
      const rect = tabs.getBoundingClientRect();
      const w = Math.round(rect.width); // fractional px -> rounded
      const max = window.innerWidth - 32; // 16px gutter each side safety
      wrapper.style.width = (w < max ? w : max) + 'px';
    });
  };

  // Initial pass
  applyWidth();

  // Re-run after fonts load (can shift text width)
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(applyWidth).catch(() => {});
  }

  window.addEventListener('resize', applyWidth, { passive: true });
  const ro = new ResizeObserver(applyWidth);
  ro.observe(tabs);
});

// Helper: update indicator position/width (mobile)
function updateIndicator(tabGroup){
  if (!tabGroup) return;
  if (window.innerWidth >= 768) {
    tabGroup.style.removeProperty('--indicator-width');
    tabGroup.style.removeProperty('--indicator-x');
    return;
  }
  const active = tabGroup.querySelector('.pinx-tab-btn--selected');
  if (!active) return;
  const rect = active.getBoundingClientRect();
  const parentRect = tabGroup.getBoundingClientRect();
  const width = Math.round(rect.width);
  const x = Math.round(rect.left - parentRect.left + tabGroup.scrollLeft);
  tabGroup.style.setProperty('--indicator-width', width + 'px');
  tabGroup.style.setProperty('--indicator-x', x + 'px');
}

// Helper: ensure active tab is visible (mobile)
function scrollTabIntoView(btn, tabGroup){
  const btnRect = btn.getBoundingClientRect();
  const groupRect = tabGroup.getBoundingClientRect();
  const offset = btnRect.left - groupRect.left; // visible left inside container
  const overflowRight = offset + btnRect.width - tabGroup.clientWidth;
  if (offset < 0) {
    tabGroup.scrollBy({left: offset - 16, behavior: 'smooth'});
  } else if (overflowRight > 0) {
    tabGroup.scrollBy({left: overflowRight + 16, behavior: 'smooth'});
  }
}

// Recalculate indicator on resize & scroll
window.addEventListener('resize', () => {
  document.querySelectorAll('.pinx-tabs').forEach(updateIndicator);
});
document.addEventListener('scroll', () => {
  if (window.innerWidth < 768) {
    document.querySelectorAll('.pinx-tabs').forEach(updateIndicator);
  }
}, true);
