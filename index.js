let slideIndex = 0;
  let intervalId;

  function showSlides() {
    const slides = document.getElementsByClassName('slide');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
  }

  function startStopSlides() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
      document.getElementById('startStopBtn').textContent = 'Start';
    } else {
      intervalId = setInterval(showSlides, 2000); 
      document.getElementById('startStopBtn').textContent = 'Stop';
    }
  }

  function plusSlides(n) {
    clearInterval(intervalId);
    intervalId = null;

    slideIndex += n;
    if (slideIndex > document.getElementsByClassName('slide').length) {
      slideIndex = 1;
    } else if (slideIndex < 1) {
      slideIndex = document.getElementsByClassName('slide').length;
    }

    showSlides();
  }

  document.getElementById('startStopBtn').addEventListener('click', startStopSlides);
  document.getElementById('prevBtn').addEventListener('click', () => plusSlides(-1));
  document.getElementById('nextBtn').addEventListener('click', () => plusSlides(1));
  startStopSlides();