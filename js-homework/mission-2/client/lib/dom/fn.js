const body = document.querySelector('body');
export function setBgColor(colorA, colorB = '000') {
  if(typeof colorA !== 'string') return;
  return body.style.background = `linear-gradient(to bottom, ${colorA}, #${colorB})`;
}

const mainImage = document.querySelector('.imageWrapper > img');
export function setImage(imgUrl, altContent) {
  mainImage.setAttribute('src', imgUrl);
  mainImage.setAttribute('alt', altContent);
}

const imageWrapper = document.querySelector('.imageWrapper');
export function setNameText(name) {
  const h1 = imageWrapper.querySelector('h1');
  h1.textContent = name;
}