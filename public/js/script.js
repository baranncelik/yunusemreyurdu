    window.addEventListener('load', () => {
      const preloader = document.getElementById('preloader');
      preloader.style.opacity = '0';
      setTimeout(() => preloader.remove(), 500);
      AOS.init({ once: true });
    });
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

