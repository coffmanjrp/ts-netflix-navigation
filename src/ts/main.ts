const nav = document.querySelectorAll('.nav') as NodeListOf<HTMLDivElement>;
const openBtn = document.getElementById('open-btn') as HTMLButtonElement;
const closeBtn = document.getElementById('close-btn') as HTMLButtonElement;

closeBtn.addEventListener('click', () => {
  nav.forEach((navEl) => {
    navEl.classList.remove('visible');
  });
});

openBtn.addEventListener('click', () => {
  nav.forEach((navEl) => {
    navEl.classList.add('visible');
  });
});
