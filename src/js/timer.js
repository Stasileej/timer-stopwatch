import { padZero } from './stopwatch';

function timer() {
  const hrInput = document.getElementById('input-hr');
  const minInput = document.getElementById('input-min');
  const secInput = document.getElementById('input-sec');
  const hr = document.getElementById('hr-timer');
  const min = document.getElementById('min-timer');
  const sec = document.getElementById('sec-timer');
  const startBtn = document.getElementById('start-timer');
  const stopBtn = document.getElementById('stop-timer');
  const resetBtn = document.getElementById('reset-timer');
  const inputContainer = document.querySelector('.selector__content--inputs');
  const title = document.querySelector('title');
  const timerTab = document.querySelector('[data-tab="timer"]');

  let timeflow = false;
  let timerStarter = true;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;
  let counter = 0;

  function resetAll() {
    timerStarter = true;
    timeflow = false;
    hours = minutes = seconds = counter = 0;
    hrInput.value = minInput.value = secInput.value = null;
    renderNumbers();
    inputContainer.style.display = null;
    title.innerText = `Timer`;
  }

  function startTimerBtn() {
    if (timerStarter) {
      counter = hours * 3600 + minutes * 60 + seconds;
      if (!counter) return;
      [hours, minutes, seconds] = [0, 0, 0];
      timerStarter = false;
      timeflow = true;
      [hrInput.value, minInput.value, secInput.value] = [null, null, null];
      startTimer();
    } else {
      timeflow = true;
      startTimer();
    }
    inputContainer.style.display = 'none';
  }

  function inputCheck() {
    this.value = this.value.replace(/\D/g, '');

    const numericValue = parseInt(this.value, 10);

    if (!isNaN(numericValue)) {
      if (this.id === 'input-hr' && numericValue > 99) {
        this.value = '99';
      } else if (this.id !== 'hr' && numericValue > 59) {
        this.value = '59';
      }
    }
  }
  hrInput.addEventListener('input', inputCheck);
  minInput.addEventListener('input', inputCheck);
  secInput.addEventListener('input', inputCheck);

  function handleInput(e) {
    let value = Math.abs(e.target.value);
    let targetElement;

    switch (e.target.id) {
      case 'input-hr':
        hours = value;
        targetElement = hr;
        break;
      case 'input-min':
        minutes = value;
        targetElement = min;
        break;
      case 'input-sec':
        seconds = value;
        targetElement = sec;
        break;
      default:
        break;
    }
    targetElement.innerText = padZero(value);
  }

  function activeOnHover(element) {
    element.addEventListener('mouseover', function () {
      this.focus();
    });
  }
  activeOnHover(hrInput);
  activeOnHover(minInput);
  activeOnHover(secInput);

  function startOnEnter(element) {
    element.addEventListener('keydown', function (event) {
      if (event.key !== 'Enter') return;
      startTimerBtn();
    });
  }
  startOnEnter(hrInput);
  startOnEnter(minInput);
  startOnEnter(secInput);

  hrInput.addEventListener('input', handleInput);
  minInput.addEventListener('input', handleInput);
  secInput.addEventListener('input', handleInput);

  startBtn.addEventListener('click', startTimerBtn);

  stopBtn.addEventListener('click', () => (timeflow = false));

  resetBtn.addEventListener('click', resetAll);

  function renderNumbers(hrVal = 0, minVal = 0, secVal = 0) {
    hr.innerText = padZero(hrVal);
    min.innerText = padZero(minVal);
    sec.innerText = padZero(secVal);
  }

  function titleTimer (hrVal = 0, minVal = 0, secVal = 0) {
    title.innerText = `Timer ${padZero(hrVal)}:${padZero(minVal)}:${padZero(secVal)}`
  }

  function startTimer() {
    if (!timeflow) return;

    counter--;
    let hrRest = Math.floor(counter / 3600);
    let minRest = Math.floor((counter % 3600) / 60);
    let secRest = Math.floor(counter % 60);

    renderNumbers(hrRest, minRest, secRest);
    
    if (timerTab.classList.contains('selector__tab--active')) {
      titleTimer(hrRest, minRest, secRest);
    }

    setTimeout(startTimer, 1000);

    if (counter < 0) {
      renderNumbers();
      resetAll();
      alert(`Time's Over`);
      return;
    }
  }
}

export default timer;
