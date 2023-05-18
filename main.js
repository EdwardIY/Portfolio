// function overflowfreezefix(){
// document.querySelector('html').style.overflowY="initial"
// document.querySelector('header').style.left="0px"
// document.querySelector('.serviceNav').style.display="none"
// document.querySelector('.hireNav').style.display="block"
// document.querySelector('.perspective').style.display='none'
// document.querySelector('.perspectiveafterChosen').style.opacity='1'
// document.querySelector('.looking2Hire').classList.add('perspectiveChosenButton')
// document.querySelector('.needWebsite').classList.remove('perspectiveChosenButton')

// }

// function needWebsiteBtn (){
// document.querySelector('html').style.overflowY="initial" Uncomment when u start this perspective
// document.querySelector('body').style.overflow="initial"
// document.querySelector('header').style.left="0px"
// document.querySelector('.hireNav').style.display="none"
// document.querySelector('.serviceNav').style.display="block"
// document.querySelector('.perspective').style.display='none'
// document.querySelector('.perspectiveafterChosen').style.opacity='1'
// document.querySelector('.needWebsite').classList.add('perspectiveChosenButton')
// document.querySelector('.looking2Hire').classList.remove('perspectiveChosenButton')
// }

// MOBILE
const openNav = document.getElementById('open');
const closeNav = document.getElementById('close');
const nav = document.getElementById('nav');

function openToggle() {
  if (window.screen.width <= 580 && localStorage.getItem('perspective') === 'chosen') {
    openNav.style.display = 'block';
    closeNav.style.display = 'block';
  } else {
    openNav.style.display = 'none';
    closeNav.style.display = 'none';
  }
}

openNav.addEventListener('click', () => {
  nav.style.left = '0px';
  openNav.style.zIndex = '-1';
  openNav.style.opacity = '0';
  closeNav.style.zIndex = '3';
  closeNav.style.opacity = '1';
});

closeNav.addEventListener('click', () => {
  nav.style.left = '-322px';
  openNav.style.zIndex = '3';
  openNav.style.opacity = '1';
  closeNav.style.zIndex = '-1';
  closeNav.style.opacity = '0';
});

window.addEventListener('resize', (() => {
  openToggle();
}));

const img = document.querySelectorAll('.hiddenLeft');
const text = document.querySelectorAll('.hiddenRight');
const title = document.querySelectorAll('h2');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
    }
  });
});

img.forEach((el) => observer.observe(el));
text.forEach((el) => observer.observe(el));
title.forEach((el) => observer.observe(el));

// PRE LOADER
const preloader = document.getElementById('preloader');

setTimeout(() => {
  preloader.style.zIndex = '-1';
  preloader.style.opacity = '0';
}, 1000);
// STATIC PAGE IMAGE CHANGER

// const images = [
//   './IMAGES/KhanAcademy_Page.jpeg',
//   './IMAGES/College_site.jpeg',
//   './IMAGES/Restaurant_Page.jpeg',
//   './IMAGES/MarketTemplate_Page.jpeg',
//   './IMAGES/RealState.jpeg'];
// const currentImg = document.getElementById('currentImg');
// let i = 0;

// setInterval(() => {
//   currentImg.style.backgroundImage = `url(${images[i]})`;
//   i += 1;
//   if (i === 5) i = 0;
// }, 5000);

// Perspective
function looking2HireBtn() {
  localStorage.setItem('perspective', 'chosen');
  openToggle();
  document.querySelector('html').style.overflowY = 'initial';
  document.querySelector('header').style.left = '0px';
  // document.querySelector('.serviceNav').style.display="none";
  document.querySelector('.hireNav').style.display = 'flex';
  document.querySelector('.perspective').style.display = 'none';
  document.querySelector('.perspectiveafterChosen').style.opacity = '1';
  document.querySelector('.looking2Hire').classList.add('perspectiveChosenButton');
  document.querySelector('.needWebsite').classList.remove('perspectiveChosenButton');
  document.querySelector('.needWebsite').style.opacity = '.3';
  document.querySelector('.needWebsite').style.overflow = 'hidden'; // Make sure to delete when INaW is ready
}
if (localStorage.getItem('perspective') === 'chosen') looking2HireBtn();

// Button Sounds effect
const effects = [
  new Audio('./sound.mp3'),
  new Audio('./sound.mp3'),
  new Audio('./sound.mp3'),
  new Audio('./sound.mp3'),
  new Audio('./sound.mp3'),
  new Audio('./sound.mp3'),
  new Audio('./sound.mp3'),
  new Audio('./sound.mp3'),
  new Audio('./sound.mp3'),
];

const buttons = document.querySelectorAll('.link');

buttons.forEach((btn, i) => {
  btn.addEventListener('mouseover', () => {
    effects[i].volume = 0.1;
    effects[i].play();
  });
});

// Email

function closeForm() {
  document.getElementById('Contact').innerHTML = `
  <h3>Thanks!</h3>
  <p>Your form has been submitted and will get a response within the next 12 hours.</p>`;
  setTimeout(() => {
    document.getElementById('Contact').style.display = 'none';
  }, 5000);
}
function sendMail(e) {
  e.preventDefault();
  const params = {
    type: document.getElementById('type').value,
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  const serviceID = 'service_xuespnc';
  const templateID = 'template_02wex08';

  emailjs.send(serviceID, templateID, params).then((res) => {
    document.getElementById('type').value = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    console.log(res);
    closeForm();
  }).catch((err) => console.log(err));
}

document.getElementById('Contact').addEventListener('submit', (e) => {
  e.preventDefault();
  sendMail(e);
});
