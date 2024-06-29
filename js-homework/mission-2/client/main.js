const navigation = document.querySelector('.imageNavigation');
import data from './data/data.js';
import { setBgColor, setImage, setNameText } from './lib/index.js';

function handleClick(e) {
  e.preventDefault();

  const liElement = e.target.closest('li');
  if(!liElement) return;

  const liArray = [...navigation.children];
  liArray.forEach((li) => {
    li.classList.remove('is-active');
  })
  liElement.classList.add('is-active');
  
  const index = liElement.dataset.index - 1;
  // console.log(index);

  setImage(data[index].img, data[index].name);
  setBgColor(data[index].color);
  setNameText(data[index].name);
}
navigation.addEventListener('click', handleClick);