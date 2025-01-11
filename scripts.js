// Toggle Dark Mode
function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
}

// Intersection Observer to trigger fade-in effect when sections come into view
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null,
        threshold: 0.5, // Trigger fade-in when 50% of section is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});
