function showSection(sectionId) {
    document.getElementById(sectionId).style.display = 'block'
}

  const tabButtons = document.querySelectorAll('.tab-button');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active state from all buttons
      tabButtons.forEach(b => b.classList.remove('text-blue-700', 'font-semibold'));
      btn.classList.add('text-blue-700', 'font-semibold');

      // Hide all contents
      tabContents.forEach(tc => tc.classList.add('hidden'));

      // Show selected content
      const target = btn.getAttribute('data-tab');
      document.getElementById(target).classList.remove('hidden');
    });
  });

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav ul li a");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach((link) => {
                        link.classList.remove("bg-gray-300", "text-white");
                    });
                    const activeLink = document.querySelector(
                        `header nav ul li a[href="#${entry.target.id}"]`
                    );
                    if (activeLink) {
                        activeLink.classList.add("bg-gray-300", "text-white");
                    }
                }
            });
        },
        {
            root: null, // Use the viewport as the root
            rootMargin: "0px", // No margin around the root
            threshold: 0.5, // Trigger when 50% of the section is visible
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});

// JavaScript to toggle header background based on scroll position
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const welcomeSection = document.querySelector('#welcome');

    window.addEventListener('scroll', () => {
        const welcomeBottom = welcomeSection.getBoundingClientRect().bottom;
        if (welcomeBottom <= 0) {
            header.classList.add('bg-black', 'bg-opacity-70');
        } else {
            header.classList.remove('bg-black', 'bg-opacity-70');
        }
    });
});




