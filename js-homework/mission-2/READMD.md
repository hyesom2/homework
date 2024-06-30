# 함께하고 싶은 포켓몬을 고르세요!

---

## ※ 파일구조
![image](https://github.com/hyesom2/homework/assets/123542438/de1013cb-1f01-4d52-88c9-9ab4696e1f32)

## ※ HTML 구조
```html
  <div class="container">
    <div class="heading">
      <h2>함께하고싶은 포켓몬을 고르세요!</h2>
      <p>Select your first partner Pokemon!</p>
    </div>

    <div class="imageWrapper">
      <h1>???</h1>
      <img src="https://cdn-icons-png.flaticon.com/256/1068/1068729.png" alt="물음표" />
    </div>
    
    <ul class="imageNavigation">
      <li data-index="1">
        <button type="button">
          <img src="../assets/01.jpg" alt="이상해씨" />
        </button>
      </li>
      <li data-index="2">
        <button type="button">
          <img src="../assets/02.jpg" alt="파이리" />
        </button>
      </li>
      <li data-index="3">
        <button type="button">
          <img src="../assets/03.jpg" alt="꼬부기" />
        </button>
      </li>
      <li data-index="4">
        <button type="button">
          <img src="../assets/04.jpg" alt="피카츄" />
        </button>
      </li>
    </ul>
  </div>
```

---

### 문제1) 이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.
  1. 이벤트 위임
  2. 반복문
```javascript
const navigation = document.querySelector('.imageNavigation');

function handleClick(e) {
  e.preventDefault();

  const liElement = e.target.closest('li');
  if(!liElement) return;

  const liArray = [...navigation.children];
  liArray.forEach((li) => {
    li.classList.remove('is-active');
  })
  liElement.classList.add('is-active');
}
navigation.addEventListener('click', handleClick);
```

### 문제2) 이미지와 색상의 데이터는 data.js 에서 불러와주세요.
```javascript
import data from './data/data.js';
```

### 문제3) 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.
```javascript
// a. 배경색 변경(colorB의 값의 기본값은 #000 으로)
const body = document.querySelector('body');
function setBgColor(colorA, colorB = '000') {
  if(typeof colorA !== 'string') return;
  return body.style.background = `linear-gradient(to bottom, ${colorA}, #${colorB})`;
}

// b. 이미지 변경
const mainImage = document.querySelector('.imageWrapper > img');
function setImage(imgUrl, altContent) {
  mainImage.setAttribute('src', imgUrl);
  mainImage.setAttribute('alt', altContent);
}
```

### 문제4) 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요
```javascript
const imageWrapper = document.querySelector('.imageWrapper');
function setNameText(name) {
  const h1 = imageWrapper.querySelector('h1');
  h1.textContent = name;
}
```

### 문제5) 함수를 분리시켜주세요.
```javascript
// fn.js
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
```

---

결과)

![result](https://github.com/hyesom2/homework/assets/123542438/0e4decbb-8619-4c23-9da4-972500ec1e33)

