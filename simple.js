  (() => {

  let currentX = 0, currentY = 0;
  let isDragging = false;
  let startX, startY;


  const images = [
    { src: "imgs/1.png", alt: "Изображение 1", caption: "Отдел по борьбе с коррупцией — Генеральная прокуратура 2016 г."},
    { src: "imgs/2.png", alt: "Изображение 2", caption: "Отдел ДКС (нынешний — Консульская служба) МИД КР 2017 г." },
    { src: "imgs/3.png", alt: "Изображение 3", caption: "ССБ МВД КР 2017 г." },
    { src: "imgs/4_1.png", alt: "Изображение 4", caption: "НПО «Голос Свободы» против пыток - заявление 2017 г." },
    { src: "imgs/4_2.png", alt: "Изображение 5", caption: "НПО «Голос Свободы» против пыток - заявление 2017 г." },
    { src: "imgs/4_3.png", alt: "Изображение 6", caption: "НПО «Голос Свободы» против пыток - заявление 2017 г." },
    { src: "imgs/4_4.png", alt: "Изображение 7", caption: "НПО «Голос Свободы» против пыток - заявление 2017 г." },
    { src: "imgs/5.png", alt: "Изображение 8", caption: "Военная прокуратура КР 2017 г." },
    { src: "imgs/6.png", alt: "Изображение 9", caption: "Военный гарнизон по Южному региону г. Ош - засекречивание 2018 г." },
    { src: "imgs/7_1.png", alt: "Изображение 10", caption: "НПО «Голос Свободы» против пыток - жалоба 2018 г." },
    { src: "imgs/7_2.png", alt: "Изображение 11", caption: "НПО «Голос Свободы» против пыток - жалоба 2018 г." },
    { src: "imgs/7_3.png", alt: "Изображение 12", caption: "НПО «Голос Свободы» против пыток - жалоба 2018 г." },
    { src: "imgs/8.png", alt: "Изображение 13", caption: "Военная прокуратура КР 2018 г." },
    { src: "imgs/9_1.png", alt: "Изображение 14", caption: "Консульская служба МИД КР 2018 г." },
    { src: "imgs/9_2.png", alt: "Изображение 15", caption: "Консульская служба МИД КР 2018 г." },
    { src: "imgs/10_1.png", alt: "Изображение 16", caption: "Заместитель министра МИД КР 2018 г. — распространение ложных сведений и покровительство" },
    { src: "imgs/10_2.png", alt: "Изображение 17", caption: "Заместитель министра МИД КР 2018 г. — распространение ложных сведений и покровительство" },
    { src: "imgs/SSBGKNB_1.png", alt: "Изображение 17-1", caption: "ССБ ГКНБ КР 2018 г. - от имени Совета Безопасности КР" },
    { src: "imgs/MIDI_1.png", alt: "Изображение 17-2", caption: "Миграционные службы Швейцарии (МИД КР 2018 г.) — умышленное ложное обвинение против заявителя КР" },
    { src: "imgs/INTERPOL_K.png", alt: "Изображение 17-2-1", caption: "ИНТЕРПОЛ Кыргызстан 2017 г. - ложные сведения о регистрации паспорта" },
    { src: "imgs/INTERPOL_B.png", alt: "Изображение 17-2-2", caption: "ИНТЕРПОЛ Швейцарии 2017 г. - отсутствие уголовных и административных дел" },
    { src: "imgs/INTERPOL_E.png", alt: "Изображение 17-2-3", caption: "ИНТЕРПОЛ Эквадор 2017 г. запрос документов -> ИНТЕРПОЛ Кыргызстан" },
    { src: "imgs/FA_1.png", alt: "Изображение 17-3", caption: "Заявление против сотрудников Миграционной службы Швейцарии от заявителя КР" },
    { src: "imgs/FA_2.png", alt: "Изображение 17-3", caption: "Заявление против сотрудников Миграционной службы Швейцарии от заявителя КР" },
    { src: "imgs/FA_3.png", alt: "Изображение 17-5", caption: "Заявление против сотрудников Миграционной службы Швейцарии от заявителя КР" },
    { src: "imgs/Freispruch_1.png", alt: "Изображение 17-6", caption: "Оправдание заявителя КР от всех ложных обвинений в Швейцарии в 2019-2020 гг." },
    { src: "imgs/Freispruch_2.png", alt: "Изображение 17-7", caption: "Оправдание заявителя КР от всех ложных обвинений в Швейцарии в 2019-2020 гг." },
    { src: "imgs/11_1.png", alt: "Изображение 18", caption: "Комитет ЖК против преступности и коррупции в КР 2019 г. " },
    { src: "imgs/11_2.png", alt: "Изображение 19", caption: "Комитет ЖК против преступности и коррупции в КР 2019 г." }, 
    { src: "imgs/13.png", alt: "Изображение 22", caption: "МВД КР -> ГУВД г. Ош с 2010 по настоящий момент не отвечает на официальные запросы — беззаконие" },
    { src: "imgs/14.png", alt: "Изображение 23", caption: "ГКНБ КР 2021 г." },
    { src: "imgs/15.png", alt: "Изображение 24", caption: "ГКНБ КР 2021 г." },
    { src: "imgs/16.png", alt: "Изображение 25", caption: "Военная прокуратура КР 2021 г. - засекречивание!" },
    { src: "imgs/17.png", alt: "Изображение 26", caption: "Генпрокуратура КР 2021 г. -> Военной прокуратуре принять меры против ГКНБ" },
    { src: "imgs/18.png", alt: "Изображение 27", caption: "Генпрокуратура КР 2023 г. -> Военной прокуратуре о бездействии против ГКНБ" },
    { src: "imgs/19.png", alt: "Изображение 28", caption: "ГКНБ КР 2021 г. " }
  ];

  // 
  let currentIndex = 0;
  const carouselImage = document.getElementById('carousel-image');
  const zoomInBtn = document.getElementById('zoom-in');
  const zoomOutBtn = document.getElementById('zoom-out');
  const downloadBtn = document.getElementById('download-image');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');

  let currentScale = 1;
  const scaleStep = 0.2;
  const minScale = 1;
  const maxScale = 3;

  function updateImage() {
    carouselImage.src = images[currentIndex].src;
    carouselImage.alt = images[currentIndex].alt;
    captionText.textContent = images[currentIndex].caption;
    currentScale = 1;
    currentX = 0;
    currentY = 0;
    carouselImage.style.transform = `scale(${currentScale})`;
  }

  // On DOMContentLoaded or script initialization
  const captionText = document.getElementById('caption-text');

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });

  zoomInBtn.addEventListener('click', () => {
    if (currentScale < maxScale) {
      currentScale = +(currentScale + scaleStep).toFixed(2);
      carouselImage.style.transform = `scale(${currentScale})`;
    }
  });

  zoomOutBtn.addEventListener('click', () => {
    if (currentScale > minScale) {
      currentScale = +(currentScale - scaleStep).toFixed(2);
      carouselImage.style.transform = `scale(${currentScale})`;
    }
  });

  downloadBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = carouselImage.src;
    link.download = carouselImage.alt.replace(/\s+/g, '_') + '.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  // Initialize carousel with first image
  updateImage();


  carouselImage.style.cursor = 'grab';

  carouselImage.addEventListener('mousedown', (e) => {
    if (currentScale <= 1) return;
    isDragging = true;
    startX = e.clientX - currentX;
    startY = e.clientY - currentY;
    carouselImage.style.cursor = 'grabbing';
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    carouselImage.style.cursor = currentScale > 1 ? 'grab' : 'default';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    currentX = e.clientX - startX;
    currentY = e.clientY - startY;
    carouselImage.style.transform = `translate(${currentX}px, ${currentY}px) scale(${currentScale})`;
  });

  // Reset position on zoom in/out or image change
  function resetPosition() {
    currentX = 0;
    currentY = 0;
    carouselImage.style.transform = `scale(${currentScale})`;
  }
  zoomInBtn.addEventListener('click', resetPosition);
  zoomOutBtn.addEventListener('click', resetPosition);
  prevBtn.addEventListener('click', resetPosition);
  nextBtn.addEventListener('click', resetPosition);

})();

