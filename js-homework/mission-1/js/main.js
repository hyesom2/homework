const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

/*
1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리
*/

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const form = document.querySelector('form.login-form');
const userEmailInput = document.querySelector('.user-email-input');
const userPwInput = document.querySelector('.user-password-input');;
const loginButton = document.querySelector('.btn-login'); // 로그인 버튼

let emailState = false;
let pwState = false;

userEmailInput.addEventListener('input', function() {
  let emailInputValue = this.value;
  // console.log(emailReg(emailInputValue));
  
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


loginButton.addEventListener('click', function(e) {
  e.preventDefault();

  if((emailState && userEmailInput.value === user.id) && (pwState && userPwInput.value === user.pw)) {
    window.location.href = 'welcome.html';
  } else {
    alert('아이디 또는 비밀번호를 확인해주세요.');
  }
})















