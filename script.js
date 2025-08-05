document.addEventListener('DOMContentLoaded', () => {
  // Hero title typing effect
  const heroTitle = document.querySelector('#hero h1');
  const text = heroTitle.textContent;
  heroTitle.textContent = '';
  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    } else {
      heroTitle.style.borderRight = 'none'; // Remove cursor when done
    }
  }
  typeWriter();

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Interactive hover effect for sections
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.style.transform = 'translateY(-5px)';
      section.style.boxShadow = '0 0 30px rgba(0, 195, 255, 0.2), inset 0 0 20px rgba(0, 195, 255, 0.2)';
    });
    section.addEventListener('mouseleave', () => {
      section.style.transform = 'translateY(0)';
      section.style.boxShadow = '0 0 20px rgba(0, 195, 255, 0.1), inset 0 0 15px rgba(0, 195, 255, 0.1)';
    });
  });

  // Mobile navigation toggle
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  mobileNavToggle.addEventListener('click', () => {
    mainNav.classList.toggle('is-active');
  });

  // Scroll-triggered animations for sections
  const animatedSections = document.querySelectorAll('section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  animatedSections.forEach(section => {
    observer.observe(section);
  });
});
