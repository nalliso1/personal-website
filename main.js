document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav ul li a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Remove active classes from all nav links
          navLinks.forEach((link) =>
            link.classList.remove("bg-gray-300")
          );

          // Add active class to the matching link
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
      threshold: 0.6, // Trigger when 60% of a section is visible
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});
