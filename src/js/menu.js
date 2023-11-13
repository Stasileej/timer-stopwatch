function menu() {
  const menuContainer = document.querySelector('.menu-style');
  const menuBtn = document.querySelector('.menu-btn');
  const toggleTheme = document.querySelector('#theme');
  const toggleScheme = document.querySelector('#color-scheme');
  const body = document.getElementById('body');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menuBtn.classList.toggle('not-active');
    menuContainer.classList.toggle('hidden');
  });

  toggleTheme.addEventListener('click', () => {
    body.classList.toggle('typewriter');
    body.classList.toggle('jb24');
  });
  toggleScheme.addEventListener('click', () => {
    body.classList.toggle('dark');
  });
}

export default menu;
