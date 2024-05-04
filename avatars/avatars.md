# 과제1_아바타 만들기

* 공통 CSS 요소
```css
/* reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* variable */
:root {
  --avatar-size: 64px;
  --avatar-margin: 20px;
  --gray-color: #DBDBDB;
  --green-color: #4CFE88;
}

/* 화면 정가운데에 배치 */
body {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
→ 자주 사용되는 값들은 root 가상클래스로 변수를 주었다. <br />
→ body의 position값은 제가 중앙정렬을 좋아하기 때문에... 넣어보았다.

---

* 기본 아바타 구조 <br />
![image](https://github.com/hyesom2/homework/assets/123542438/8f1dffc9-c3b4-4fc6-b206-38bbd1625883)
```html
<div class="avatar is-off">
  <img src="./images/faces/face1.jpg" alt="아바타1" />
  <span class="status" aria-label="off"></span>
</div>

<div class="avatar is-on">
  <img src="./images/faces/face2.jpg" alt="아바타2" />
  <span class="status" aria-label="on"></span>
</div>
```
```css
/* avatar css */
.avatar {
  position: relative;
  width: var(--avatar-size);
  height: var(--avatar-size);
}
.avatar img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
.avatar .status {
  position: absolute;
  right: 0;
  bottom: 0;
  width: calc(var(--avatar-size)/4); /* 16px */
  height: calc(var(--avatar-size)/4); /* 16px */
  background-color: var(--green-color);
  border: 1px solid #fff;
  border-radius: 50%;
}
/* status on,off css */
.avatar.is-on .status {
  background-color: var(--green-color);
}
.avatar.is-off .status {
  background-color: var(--gray-color);
}
```
→ avatar box에 is-off와 is-on을 준 이유 : 나중에 javascript로 작업할 때 avatar box에 클래스만 부여하면 될 것 같다. <br />
→ status는 position:absolute로 avatar box에 position:relative로 기준을 잡고 right:0, bottom:0 으로 오른쪽아래에 배치하였다. <br />

---

## ❓ 방법1
![image](https://github.com/hyesom2/homework/assets/123542438/24efdc48-4a73-4b1c-b41b-f261bba68cd4)
* avatar 하나의 box를 만들어서 각각의 avatar box에 margin-right, margin-bottom을 부여했다. <br />
* 하다보니 **문제점** : flow일때는 상관이 없는데 flexbox를 사용할 때 과제에서 요구하는 대로 배치하지를 못했다. <br />
```html
<div class="avatar-wrap">
  <div class="avatar is-off">
    <img src="./images/faces/face1.jpg" alt="아바타 1" />
    <span class="status" aria-label="off"></span>
  </div>
  <div class="avatar is-on">
    <img src="./images/faces/face2.jpg" alt="아바타 2" />
    <span class="status" aria-label="on"></span>
  </div>
  <div class="avatar is-off">
    <img src="./images/faces/face4.png" alt="아바타 3" />
    <span class="status" aria-label="off"></span>
  </div>
  <div class="avatar is-on">
    <img src="./images/faces/face4.jpg" alt="아바타 4" />
    <span class="status" aria-label="on"></span>
  </div>
  <div class="avatar is-on">
    <img src="./images/faces/face5.jpg" alt="아바타 5" />
    <span class="status" aria-label="on"></span>
  </div>
  <div class="avatar is-on">
    <img src="./images/faces/face6.jpg" alt="아바타 6" />
    <span class="status" aria-label="on"></span>
  </div>
  <div class="avatar is-off">
    <img src="./images/faces/face7.jpg" alt="아바타 7" />
    <span class="status" aria-label="off"></span>
  </div>
  <div class="avatar is-off">
    <img src="./images/faces/face8.jpg" alt="아바타 8" />
    <span class="status" aria-label="off"></span>
  </div>
</div>
```

```css
/* avatar layout */
.avatar-wrap {
  display: flow-root;
  width: calc(var(--avatar-size) * 4 + var(--avatar-margin) * 3); /* 316px */
}
.avatar {
  float: left;
  margin-right: var(--avatar-margin);
  margin-bottom: var(--avatar-margin);
}
.avatar:nth-child(4n) {
  margin-right: 0;
}
.avatar:nth-child(n+5) {
  margin-bottom: 0;
}

/* ------------------------------------------------ */
/*      flex를 지원하는 웹브라우저를 위한 스타일      */
/* ------------------------------------------------ */
@supports (display:flex) {
  /* ===== 방법1 ===== */
  .avatar-wrap {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    width: calc(var(--avatar-size) * 4 + var(--avatar-margin) * 3);
  }
  .avatar {
    float: none;
    margin-right: var(--avatar-margin);
    margin-bottom: var(--avatar-margin);
  }
  .avatar:nth-child(4n) {
    margin-right: 0;
  }
  .avatar:nth-child(n+5) {
    margin-bottom: 0;
  }
```
* flex-direction을 어떻게 해야 될지 모르겠다!!😱😱😱

---

## ❓ 방법2
![image](https://github.com/hyesom2/homework/assets/123542438/5ac2de21-32c7-4b0b-9495-51300df7f783)
* 방법1에서 flex-direction을 해결하기 위해 가로 방향으로 위, 아래로 나누어 avatar-wrap을 해주었다.
```html
<body>
  <!-- ===== 방법2 ===== -->
  <div class="avatar-wrap">
    <div class="avatar is-off">
      <img src="./images/faces/face1.jpg" alt="아바타 1" />
      <span class="status" aria-label="off"></span>
    </div>
    <div class="avatar is-on">
      <img src="./images/faces/face2.jpg" alt="아바타 2" />
      <span class="status" aria-label="on"></span>
    </div>
    <div class="avatar is-off">
      <img src="./images/faces/face4.png" alt="아바타 3" />
      <span class="status" aria-label="off"></span>
    </div>
    <div class="avatar is-on">
      <img src="./images/faces/face4.jpg" alt="아바타 4" />
      <span class="status" aria-label="on"></span>
    </div>
  </div>
  <div class="avatar-wrap">
    <div class="avatar is-on">
      <img src="./images/faces/face5.jpg" alt="아바타 5" />
      <span class="status" aria-label="on"></span>
    </div>
    <div class="avatar is-on">
      <img src="./images/faces/face6.jpg" alt="아바타 6" />
      <span class="status" aria-label="on"></span>
    </div>
    <div class="avatar is-off">
      <img src="./images/faces/face7.jpg" alt="아바타 7" />
      <span class="status" aria-label="off"></span>
    </div>
    <div class="avatar is-off">
      <img src="./images/faces/face8.jpg" alt="아바타 8" />
      <span class="status" aria-label="off"></span>
    </div>
  </div>
</body>
```

```css
/* ===== 방법2 ===== */
/* avatar layout */
.avatar-wrap {
  display: flow-root;
  width: calc(var(--avatar-size) * 4 + var(--avatar-margin) * 3);
}
.avatar-wrap:first-child {
  margin-bottom: var(--avatar-margin);
}
.avatar {
  float: left;
  margin-right: var(--avatar-margin);
}
.avatar:nth-child(4n) {
  margin-right: 0;
}

/* ------------------------------------------------ */
/*      flex를 지원하는 웹브라우저를 위한 스타일      */
/* ------------------------------------------------ */
@supports (display:flex) {
  /* ===== 방법2 ===== */
  body {
    display: flex;
    flex-direction: column-reverse;
  }
  .avatar-wrap {
    display: flex;
  }
  .avatar-wrap:nth-child(2) {
    margin-bottom: 20px;
  }
  .avatar {
    float: none;
    margin-right: var(--avatar-margin);
  }
  .avatar:nth-child(4n) {
    margin-right: 0;
  }
  .avatar-wrap:first-child {
    margin-bottom: 0;
  }
}
```
* 위, 아래로 avatar-wrap를 잡고 flex-direction을 column-reverse로 하니 원하는 배치가 되었다.
* avatar:nth-child(4n)으로 avatar의 4n번째에 있는 요소들의 margin-right를 0을 주었다.
* @supports (display:flex)에서 .avatar-wrap:first-child를 준 이유는 위의 float떄의 margin-bottom이 남아있기 때문이다.

## <결과물>
![image](https://github.com/hyesom2/homework/assets/123542438/87710807-e2a8-4277-9df9-2b18a86330c3)
* 간단한 HTML, CSS 작업 같지만 flexbox를 많이 사용하다보니 float를 사용할 때 요소들의 배치에 고민을 많이 하게 되는 과제였다.
* 중복되는 값들을 root 가상클래스 변수로 만들어서 사용하면 유지보수에 좋을 꺼 같다는 생각이 들었다.
* javascript를 사용하게 될 때 status의 상태를 어떻게 하면 효율적으로 적용할 수 있을까도 고민을 했다.
