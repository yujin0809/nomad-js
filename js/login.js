
const loginPage = document.querySelector(".login-page")
const loginForm = loginPage.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginBtn = loginForm.querySelector("button");
const loginText = document.querySelector("#greeting");

// 일반적으로 string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용.
// 그냥 string은 오타나면 에러 확인이 어렵지만, 변수로 저장해두면 js가 오타를 지적해줌.
// 반복되는 string은 대문자 변수로 저장 해놓자.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
   // 브라우저는 새로고침 후 form을 submit함. (기본동작)
   // preventDefault() < event의 기본동작을 발생되지 않게 막음.
    event.preventDefault();

    const username = loginInput.value;
   // localStorage < 브라우저에 값을 저장하거나 불러오기, 삭제 등 할 수 있음.
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(username);
}

// login 완료 시
function paintGreetings(username){
    greeting.innerText = `Hello, ${username}!`;
    loginText.classList.remove(HIDDEN_CLASSNAME);
    loginPage.style.display = 'none';
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// username이 저장 되지 않으면 로그인 폼 보여주기.
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
   // 버튼클릭, 엔터 누를 때 submit
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}