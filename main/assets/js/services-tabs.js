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
            });
        });
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
            // Get exact rendered width INCLUDING horizontal padding of .pinx-tabs
            const w = tabs.offsetWidth;
            // Apply width to wrapper unless screen is very narrow; then allow 100%
            if (w < window.innerWidth - 32) {
                wrapper.style.width = w + 'px';
            } else {
                wrapper.style.width = '100%';
            }
        });
    };

    // Recalculate on font load, images, and resize
    applyWidth();
    window.addEventListener('resize', applyWidth, { passive: true });
    // If tabs content changes (e.g., responsive wrapping), observe size
    const ro = new ResizeObserver(applyWidth);
    ro.observe(tabs);
});
// Services Tabs Functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.service-tab-btn');
    const contentDivs = document.querySelectorAll('.service-content');
    
    // Function to show specific content and hide others with smooth transition
    function showContent(targetTab) {
        // Add fade out effect to all visible content
        contentDivs.forEach(content => {
            if (!content.classList.contains('hidden')) {
                content.style.opacity = '0';
                content.style.transform = 'translateY(20px)';
            }
        });
        
        // After fade out, hide all and show target
        setTimeout(() => {
            // Hide all content
            contentDivs.forEach(content => {
                content.style.display = 'none';
                content.classList.add('hidden');
            });
            
            // Show target content
            const targetContent = document.querySelector(`[data-content="${targetTab}"]`);
            if (targetContent) {
                targetContent.style.display = 'block';
                targetContent.classList.remove('hidden');
                
                // Reset styles for animation
                targetContent.style.opacity = '0';
                targetContent.style.transform = 'translateY(20px)';
                
                // Trigger fade in animation
                setTimeout(() => {
                    targetContent.style.opacity = '1';
                    targetContent.style.transform = 'translateY(0)';
                }, 50);
            }
        }, 150);
    }
    
    // Function to update active tab button
    function updateActiveTab(activeButton) {
        // Remove active class from all buttons
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            btn.style.backgroundColor = 'white';
            btn.style.borderColor = '#ffedf5';
            btn.style.color = '#ff006c';
        });
        
        // Add active class to clicked button
        activeButton.classList.add('active');
        activeButton.style.backgroundColor = '#ffedf5';
        activeButton.style.borderColor = '#ffedf5';
        activeButton.style.color = '#ff006c';
    }
    
    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Prevent multiple rapid clicks
            if (this.classList.contains('active')) return;
            
            const targetTab = this.getAttribute('data-tab');
            
            // Update active tab
            updateActiveTab(this);
            
            // Show corresponding content
            showContent(targetTab);
        });
    });
    
    // Initialize with first tab active
    if (tabButtons.length > 0) {
        updateActiveTab(tabButtons[0]);
        showContent('large-format');
    }
});
