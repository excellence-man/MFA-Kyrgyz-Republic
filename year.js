// Nav
  // Simple smooth scroll for nav links
  document.querySelectorAll('nav a').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetID = this.getAttribute('href').substring(1);
          const target = document.getElementById(targetID);
          if (target) {
            window.scrollTo({
              top: target.offsetTop - 60,
              behavior: 'smooth'
            });
          }
      });
  });

// Year
document.addEventListener("DOMContentLoaded", function() {
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
