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
const supportedLanguages = ["en", "de", "es", "fr", "ru"];
const userLanguages = navigator.languages || [navigator.language];

document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('lang-select');

  function getBestLanguageMatch(supported, preferred) {
    for (const lang of preferred) {
      const lowerLang = lang.toLowerCase();
      const baseLang = lowerLang.split('-')[0]; 
      if (supported.includes(lowerLang)) return lowerLang;
      if (supported.includes(baseLang)) return baseLang;
    }
    return supported[0]; // fallback default
  }

  function switchLanguage(lang) {
    const allLangElems = document.querySelectorAll('.lang-ru, .lang-en, .lang-de, .lang-es, .lang-fr');
    allLangElems.forEach(el => {
      if (el.classList.contains(`lang-${lang}`)) {
        el.style.display = ''; 
      } else {
        el.style.display = 'none'; 
      }
    });
  }

  // Check preference in localStorage, else detect from browser
  let chosenLanguage = localStorage.getItem('preferredLanguage');
  if (!chosenLanguage) {
    chosenLanguage = getBestLanguageMatch(supportedLanguages, userLanguages);
  }

  // Select input and page language on initial load
  if (langSelect) {
    langSelect.value = chosenLanguage;
  }
  switchLanguage(chosenLanguage);

  // Update language on user selection, and remember preference
  if (langSelect) {
    langSelect.addEventListener('change', () => {
      const selectedLang = langSelect.value;
      switchLanguage(selectedLang);
      localStorage.setItem('preferredLanguage', selectedLang);
    });
  }

  // current year
  const yearElem = document.getElementById("currentYear");
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }
});
