var imgs = document.querySelectorAll('.slider img');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image 
const interval = 5000; // duration(speed) of the slide

function changeSlide(index) {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = 0;
    dots[i].classList.remove('active');
  }
  imgs[index].style.opacity = 1;
  dots[index].classList.add('active');
  currentImg = index;
}

function nextSlide() {
  currentImg++;
  if (currentImg >= imgs.length) {
    currentImg = 0;
  }
  changeSlide(currentImg);
}

function prevSlide() {
  currentImg--;
  if (currentImg < 0) {
    currentImg = imgs.length - 1;
  }
  changeSlide(currentImg);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    changeSlide(index);
  });
});

setInterval(() => {  nextSlide();
}, interval);