document.querySelectorAll('.icon-box').forEach(item => {
    item.addEventListener('mouseover', event => {
        const info = event.currentTarget.getAttribute('data-info');
        const infoText = document.getElementById('info-text');
        infoText.textContent = info;
    });
});

function handleScroll() {
    const elements = document.querySelectorAll('.scroll-fade-in');
  
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
      if (rect.top <= windowHeight - 50) {
        element.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);