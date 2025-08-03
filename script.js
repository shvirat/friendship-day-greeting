// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Theme toggle functionality
    const body = document.body;
    const themeButton = document.getElementById('themeButton');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
    }
    
    // Theme toggle handler
    themeButton.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });

    // Create floating flowers dynamically
    function createFloatingFlowers() {
        const container = document.querySelector('.floating-flowers');
        const flowerCount = 6;
        
        for (let i = 0; i < flowerCount; i++) {
            const flower = document.createElement('div');
            flower.className = 'float-flower';
            container.appendChild(flower);
        }
    }
    
    // Initialize floating flowers
    createFloatingFlowers();
});
