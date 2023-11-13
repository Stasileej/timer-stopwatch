function tabs() {
  const tabsContainer = document.querySelector('.selector__tab-contaner');
  const tabs = document.querySelectorAll('.selector__tab');
  const tabsContent = document.querySelectorAll('.selector__content');
  const title = document.querySelector('title');
  

  tabsContainer.addEventListener('click', (e) => {
    const clicked = e.target.closest('.selector__tab');

    if (!clicked) return;

    title.innerText = clicked.innerText;
    tabs.forEach((tab) => tab.classList.remove('selector__tab--active'));
    clicked.classList.add('selector__tab--active');

    tabsContent.forEach((content) => content.classList.remove('selector__content--active'));
    document.querySelector(`.selector__content--${clicked.dataset.tab}`).classList.add('selector__content--active');
  });
}

export default tabs;
