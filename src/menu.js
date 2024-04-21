const getCurrentPage = () => {
  const self = document.querySelector('.mobile-bottom-bar');
  const projects = document.querySelector('.projects');
  const home = document.querySelector('.home');
  const locator = document.querySelector('.maps');
  const calc = document.querySelector('.calc');
  const products = document.querySelector('.prod');

  if (document.getElementById('proyectos')) {
    projects.classList.add('active');
    projects.querySelector('.icon-menu').classList.add('black-icon');
  }
  if (document.getElementById('home')) {
    home.classList.add('active');
    home.querySelector('.icon-menu').classList.add('black-icon');
  }
  if (document.getElementById('localizador')) {
    locator.classList.add('active');
    locator.querySelector('.icon-menu').classList.add('black-icon');
  }
  if (document.getElementById('calculadora')) {
    calc.classList.add('active');
    calc.querySelector('.icon-menu').classList.add('black-icon');
  }
};

getCurrentPage();

//   .black-icon {
//     color: #060606 !important;
//     }
//   .active {
//   	background-color: #fedb00;
//     height: 120%;
//     border-radius: 4px 4px 0 0 !important;
//   	box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.2);
//   }

