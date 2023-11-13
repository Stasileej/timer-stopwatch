export const padZero = (val) => ('' + val).padStart(2, '0');

function stopwatch() {
  const hr = document.getElementById('hr-sw');
  const min = document.getElementById('min-sw');
  const sec = document.getElementById('sec-sw');
  // const count = document.getElementById('count-sw');
  const startBtn = document.getElementById('start-sw');
  const stopBtn = document.getElementById('stop-sw');
  const resetBtn = document.getElementById('reset-sw');
  const title = document.querySelector('title');
  const stopwatchTab = document.querySelector('[data-tab="stopwatch"]');

  let timeflow;
  let hour = 0;
  let minute = 0;
  let second = 0;
  let counter = 0;


  const numbersRendering = () => {
    hr.innerText = padZero(hour);
    min.innerText = padZero(minute);
    sec.innerText = padZero(second);
    // count.innerText = padZero(counter);
  };

  function titleTimer (hrVal = 0, minVal = 0, secVal = 0) {
    title.innerText = `Stopwatch ${padZero(hrVal)}:${padZero(minVal)}:${padZero(secVal)}`
  }

  const chronograph = () => {
    if (!timeflow) return;

    counter++;
    if (counter === 1) {
      second++;
      counter = 0;
    }
    if (second === 60) {
      minute++;
      second = 0;
    }
    if (minute === 60) {
      hour++;
      minute = 0;
    }

    numbersRendering();

    if (stopwatchTab.classList.contains('selector__tab--active')) {
      titleTimer(hour, minute, second);
    }

    setTimeout(chronograph, 1000);
  };

  startBtn.addEventListener('click', () => {
    timeflow = true;
    chronograph();
  });

  stopBtn.addEventListener('click', () => {
    timeflow = false;
  });

  resetBtn.addEventListener('click', () => {
    timeflow = false;
    hour = 0;
    minute = 0;
    second = 0;
    counter = 0;
    numbersRendering();
    title.innerText = `Stopwatch`
  });
}

export default stopwatch;
