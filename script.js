// sw.js
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}

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

// Language select and Year in footer
document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang-select');
    
    function switchLanguage(lang) {
      const allLangElems = document.querySelectorAll('.lang-ru, .lang-en, .lang-de, .lang-es, .lang-fr');
      allLangElems.forEach(el => {
        if(el.classList.contains(`lang-${lang}`)) {
          el.style.display = '';  // restore default display style
        } else {
          el.style.display = 'none';
        }
      });
    }
    // Initial language setup
    switchLanguage(langSelect.value);

    langSelect.addEventListener('change', () => {
      switchLanguage(langSelect.value);
    });

    // Year
    // document.getElementById("currentYear").textContent = new Date().getFullYear();
    const yearEl = document.getElementById('currentYear');
    if(yearEl) yearEl.textContent = new Date().getFullYear();
  });
