//dom을 가져오는 구역

const signInput = document.getElementById('username');
const sign = document.getElementById('blank');
const userSection = document.getElementById('user');

const getLoggedUser = () => localStorage.getItem('login-user');

function addLogoutLayout(){
    const logoutButton = document.createElement('button');
    logoutButton.textContent = '로그아웃';
    logoutButton.id = 'logout-button';
    logoutButton.addEventListener('click',logout);
    userSection.appendChild(logoutButton);
   
}

function isloggedIn() {
    const username = getLoggedUser();
    if(username === null)
        return false;
    else
        return true;
}

function repaintLoginAttributes(msg){
    const signInput = document.getElementById('username');
    signInput.textContent = '';
    const sign = document.getElementById('blank');
    
    userSection.removeChild(signInput);
    userSection.removeChild(sign);
    const welcomeSpanElement = document.createElement('span');
    welcomeSpanElement.textContent = msg;
    welcomeSpanElement.id = 'welcome-msg';
    userSection.appendChild(welcomeSpanElement);
    addLogoutLayout();

}

function login() {
    const username = document.getElementById('username').value;
    if(username.trim().length === 0)
        return window.alert('이름을 입력해주세요');
    const welcomeMessage = `${username}님 환영합니다.`;
    repaintLoginAttributes(welcomeMessage);
   
    window.localStorage.setItem('login-user', username);
}

function logout(){
    const welcomeMsg = document.getElementById('welcome-msg');
    const logoutBtn = document.getElementById('logout-button');
    userSection.removeChild(welcomeMsg);
    userSection.removeChild(logoutBtn);

    const idInput = document.createElement('input');
    idInput.id = 'username';
    userSection.appendChild(idInput);

    localStorage.removeItem('login-user');
    const loginBtn = document.createElement('button');
    loginBtn.id = 'blank';
    loginBtn.textContent = 'Sign';
    loginBtn.addEventListener('click',login);
    userSection.appendChild(loginBtn);

   
}

function onClickMessage(){
    window.alert(signInput.value);
}

function initialize(){
   sign.addEventListener('click', login);

   const isLoggedIn = isloggedIn();
   
   if(isLoggedIn){
       const username = getLoggedUser();
       const welcomingMsg = `${username}님 환영합니다.`;
       repaintLoginAttributes(welcomingMsg);
   }
/**
 * 
 */
}
//함수가 실행되는 구역
initialize();
