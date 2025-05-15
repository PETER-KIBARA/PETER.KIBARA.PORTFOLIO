// script.js

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const toggleButton = document.querySelector('.sidebar-toggle');
    const overlay = document.querySelector('.overlay');

    // Function to open the sidebar
    function openSidebar() {
        sidebar.classList.add('open');
        overlay.style.display = 'block'; // Show the overlay
    }

    // Function to close the sidebar
    function closeSidebar() {
        sidebar.classList.remove('open');
        overlay.style.display = 'none'; // Hide the overlay
    }

    // Toggle sidebar on button click
    if (toggleButton && sidebar && overlay) {
        toggleButton.addEventListener('click', () => {
            if (sidebar.classList.contains('open')) {
                closeSidebar();
            } else {
                openSidebar();
            }
        });

        // Close sidebar when clicking outside (on the overlay)
        overlay.addEventListener('click', () => {
            closeSidebar();
        });

        // Optional: Close sidebar when a navigation link is clicked (for smoother mobile navigation)
        const navLinks = document.querySelectorAll('.sidebar nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Add a small delay to allow the navigation before closing
                 setTimeout(closeSidebar, 100); // Adjust delay as needed
            });
        });
    }
});
