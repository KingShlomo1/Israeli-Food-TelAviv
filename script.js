document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
const cta = document.querySelector('.nav-cta');

toggle.addEventListener('click', () => {
  const open = links.style.display === 'flex';
  links.style.display = open ? 'none' : 'flex';
  cta.style.display = open ? 'none' : 'inline-block';
  links.style.flexDirection = 'column';
  links.style.position = 'absolute';
  links.style.top = '72px';
  links.style.left = '0';
  links.style.right = '0';
  links.style.background = 'rgba(14,58,63,0.97)';
  links.style.padding = '20px 24px';
  links.style.gap = '16px';
});
