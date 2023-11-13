function menu() {
  const menuContainer = document.querySelector('.menu-style');
  const menuBtn = document.querySelector('.menu-btn');
  const toggleTheme = document.querySelector('#theme');
  const toggleScheme = document.querySelector('#color-scheme');
  const body = document.getElementById('body');

  const toggleActive = () => {
    menuBtn.classList.toggle('active');
  };
  const toggleNotActive = () => {
    menuBtn.classList.toggle('not-active');
  };
  const toggleHidden = () => {
    menuContainer.classList.toggle('hidden');
  };
  menuBtn.addEventListener('click', () => {
    toggleActive();
    toggleNotActive();
    toggleHidden();
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
