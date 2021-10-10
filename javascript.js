// dark mode
const slider = document.querySelector('.checkbox') //finally this is not a checkbox, its's just a div element
const sliderBtn = document.querySelector('.slidingBtn');
const topBG = document.querySelector('.bg-top');
const body = document.body;
const firstTitle = document.querySelector('.first-title');
const secondTitle = document.querySelector('.second-title');


function switchMode() {
  sliderBtn.classList.toggle('toRight');
  slider.classList.toggle('toDarkBG');

  topBG.classList.toggle('bg-top-dark-mode');
  body.classList.toggle('body-dark-mode');
  firstTitle.classList.toggle('first-title-dark-mode');
  secondTitle.classList.toggle('second-title-dark-mode');

  const fourBox = document.getElementById('firstBoxesSection');
    for (let i = 0; i < fourBox.children.length; i++) {
      fourBox.children[i].classList.toggle('upperBox-dark-mode');
    }   

  const eightBox = document.getElementById('secondBoxesSection');
    for (let x = 0; x < eightBox.children.length; x++) {
      eightBox.children[x].classList.toggle('overview-dark-mode');
    }  
}


slider.addEventListener('click', switchMode);

