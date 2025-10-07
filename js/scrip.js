    AOS.init({
      duration: 800,
      once: true,
      offset: 100
    });
    
    let currentLang = 'ua';
    
    const translations = {
      ua: {},
      ru: {}
    };
    
    function switchLanguage(lang) {
      currentLang = lang;
      
      document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      event.target.classList.add('active');
      
      document.querySelectorAll('[data-ua]').forEach(el => {
        const text = lang === 'ua' ? el.getAttribute('data-ua') : el.getAttribute('data-ru');
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          return;
        }
        if (text) {
          el.textContent = text;
        }
      });
      
      document.querySelectorAll('[data-ua-placeholder]').forEach(el => {
        const placeholder = lang === 'ua' ? el.getAttribute('data-ua-placeholder') : el.getAttribute('data-ru-placeholder');
        if (placeholder) {
          el.placeholder = placeholder;
        }
      });
      
      document.querySelectorAll('option[data-ua]').forEach(el => {
        const text = lang === 'ua' ? el.getAttribute('data-ua') : el.getAttribute('data-ru');
        if (text) {
          el.textContent = text;
        }
      });
    }
    
    window.switchLanguage = switchLanguage;
    
    function toggleFAQ(element) {
      const answer = element.nextElementSibling;
      const icon = element.querySelector('span:last-child');
      
      answer.classList.toggle('open');
      icon.textContent = answer.classList.contains('open') ? '−' : '+';
    }
    
    window.toggleFAQ = toggleFAQ;
    
    // Scroll Progress Bar
    window.addEventListener('scroll', () => {
      const scrollProgress = document.getElementById('scrollProgress');
      if (scrollProgress) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = progress + '%';
      }
    });
    
// Замените функцию openBinotelWidget на эту:
function openBinotelWidget() {
    // Ищем кнопку Binotel по правильному селектору
    const binotelButton = document.getElementById('bingc-phone-button');
    
    if (binotelButton) {
        binotelButton.click();
    } else {
        console.log('Binotel button not found');
        // Альтернативное действие - прокрутка к форме
        document.getElementById('form').scrollIntoView({ behavior: 'smooth' });
    }
}

// Обновите обработчики для кнопок (добавьте этот код в DOMContentLoaded):
const consultButtons = document.querySelectorAll('a.btn-primary-custom, a[href="#form"]');
    
consultButtons.forEach(button => {
    // Убедитесь, что кнопка не sticky-cta
    if (!button.classList.contains('sticky-cta')) {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            openBinotelWidget();
        });
    }
});

    // Hero Gradient Animation
    const heroSection = document.getElementById('heroSection');
    if (heroSection) {
      heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        heroSection.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(28, 142, 142, 0.12) 0%, rgba(92, 111, 123, 0.05) 40%, transparent 70%)`;
      });
    }
    
    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial-item');
    let currentTestimonial = 0;
    
    function rotateTestimonials() {
      if (testimonials.length > 0) {
        testimonials[currentTestimonial].classList.remove('active');
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        testimonials[currentTestimonial].classList.add('active');
      }
    }
    
    if (testimonials.length > 0) {
      setInterval(rotateTestimonials, 5000);
    }
    
    document.getElementById('contactForm').addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const formData = new FormData(e.target);
      const data = {
        name: formData.get('name'),
        email: formData.get('phone'),
        message: `Телефон: ${formData.get('phone')}\nМесенджер: ${formData.get('messenger')}\nКоментар: ${formData.get('comment') || 'Немає'}`
      };
      
      try {
        const response = await fetch(`${window.HATCH_CONFIG.apiBaseUrl}/services/send_email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });
        
        if (response.ok) {
          const form = document.getElementById('contactForm');
          const success = document.getElementById('formSuccess');
          if (form && success) {
            form.style.display = 'none';
            success.classList.add('active');
            setTimeout(() => {
              success.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
          }
        } else {
          alert(currentLang === 'ua' ? 'Помилка відправки. Спробуйте ще раз.' : 'Ошибка отправки. Попробуйте еще раз.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert(currentLang === 'ua' ? 'Помилка відправки. Спробуйте ще раз.' : 'Ошибка отправки. Попробуйте еще раз.');
      }
    });
    
    function openPrivacyModal() {
      document.getElementById('privacyModal').classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    
    function closePrivacyModal(event) {
      if (!event || event.target.id === 'privacyModal') {
        document.getElementById('privacyModal').classList.remove('active');
        document.body.style.overflow = '';
      }
    }
    
    window.openPrivacyModal = openPrivacyModal;
    window.closePrivacyModal = closePrivacyModal;
// Обработчик для sticky-cta кнопки
const stickyCta = document.querySelector('.sticky-cta');
if (stickyCta) {
    stickyCta.addEventListener('click', function(e) {
        e.preventDefault();
        openBinotelWidget();
    });
}