# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.


---
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

---

### ※ 변수 선언
```javascript
const userEmailInput = document.querySelector('.user-email-input');
const userPwInput = document.querySelector('.user-password-input');
const loginButton = document.querySelector('.btn-login');
```

### 문제1 ) email 정규표현식을 사용한 validation
```javascript
userEmailInput.addEventListener('input', function() {
  let emailInputValue = this.value;
  
  if(emailReg(emailInputValue)) {
    userEmailInput.classList.remove('is--invalid');
  } else if(emailInputValue === '') {
    userEmailInput.classList.remove('is--invalid');
  } else if(!emailReg(emailInputValue)) {
    userEmailInput.classList.add('is--invalid');
  }
})
```
* userEmailInput에 input 이벤트를 넣어준다 → input 태그에 값을 입력할 때 실시간으로 값 변경
* emailInputValue 변수에 this.value로 userEmailInput에 쓰는 값을 넣어준다.
* emailReg함수의 매개변수로 emailInputValue를 넣어주어 유효성검사가 맞을 경우 true, 맞지 않은 경우 false를 반환하게된다.
* 조건문을 사용하여 true인 경우 userEmailInput에 is-invalid 클래스를 추가, false인 경우 userEmailInput에 is-invalid 클래스를 삭제한다.
* emailInputValue의 값이 없는 경우에도 is-invalid 클래스를 삭제한다. → 쓰다가 삭제됐을 때 계속 is-invalid클래스가 남아있었기 때문

### 문제2 ) pw 정규표현식을 사용한 validation
```javascript
userPwInput.addEventListener('input', function(){
  let pwInputValue = this.value;
  
  if(pwReg(pwInputValue)) {
    userPwInput.classList.remove('is--invalid');
    pwState = true;
  } else if(pwInputValue === "") {
    userPwInput.classList.remove('is--invalid');
  } else if(!pwReg(pwInputValue)) {
    userPwInput.classList.add('is--invalid');
    pwState = false;
  }
})
```
* userPwInput input 이벤트를 넣어준다 → input 태그에 값을 입력할 때 실시간으로 값 변경
* pwInputValue 변수에 this.value로 userPwInput에 쓰는 값을 넣어준다.
* pwReg함수의 매개변수로 pwInputValue를 넣어주어 유효성검사가 맞을 경우 true, 맞지 않은 경우 false를 반환하게된다.
* 조건문을 사용하여 true인 경우 userPwInput에 is-invalid 클래스를 추가, false인 경우 userPwInput에 is-invalid 클래스를 삭제한다.
* pwInputValue의 값이 없는 경우에도 is-invalid 클래스를 삭제한다. → 쓰다가 삭제됐을 때 계속 is-invalid클래스가 남아있었기 때문

### 문제3 ) 상태 변수 관리
```javascript
let emailState = false;
let pwState = false;
```
* emailState와 pwState변수를 추가하여 기본값을 false로 설정

```javascript
userEmailInput.addEventListener('input', function() {
  let emailInputValue = this.value;
  
  if(emailReg(emailInputValue)) {
    userEmailInput.classList.remove('is--invalid');
    emailState = true;
  } else if(emailInputValue === '') {
    userEmailInput.classList.remove('is--invalid');
  } else if(!emailReg(emailInputValue)) {
    userEmailInput.classList.add('is--invalid');
    emailState = false;
  }
})

userPwInput.addEventListener('input', function(){
  let pwInputValue = this.value;
  
  if(pwReg(pwInputValue)) {
    userPwInput.classList.remove('is--invalid');
    pwState = true;
  } else if(pwInputValue === "") {
    userPwInput.classList.remove('is--invalid');
  } else if(!pwReg(pwInputValue)) {
    userPwInput.classList.add('is--invalid');
    pwState = false;
  }
})
```
* 유효성 검사가 맞을 경우 상태변수를 true로, 아닌 경우 false로 넣어주었다.

### 문제4 ) 로그인 버튼을 클릭시 조건처리
```javascript
loginButton.addEventListener('click', function(e) {
  e.preventDefault();

  if((emailState && userEmailInput.value === user.id) && (pwState && userPwInput.value === user.pw)) {
    window.location.href = 'welcome.html';
  } else {
    alert('아이디 또는 비밀번호를 확인해주세요.');
  }
})
```
* e.preventDefault() 로 form태그의 action을 막는다.
* 조건절로 email의 상태변수가 true 이면서 userEmailInput.value와 user.id가 일치한 경우, pw의 상태변수가 true 이면서 userPwInput.value와 user.pw가 일치한 경우 welcome.html로 이동
* 조건에 맞지 않는 경우 alert창을 띄워준다.

---

### 결과 )
![2024-06-2303-41-15-ezgif com-video-to-gif-converter](https://github.com/hyesom2/homework/assets/123542438/9a9e47c0-cd5e-439b-904a-249307d0ece8)
