// 切換
const toSignUpPage = document.querySelector('.to-signup-page')
const toLoginPage = document.querySelector('.to-login-page')
const signUpPage = document.querySelector('.signup-page')
const loginPage = document.querySelector('.login-page')
// console.log(signUpPage.innerHTML)

toSignUpPage.addEventListener('click', () => {
  loginPage.classList.toggle('active')
  signUpPage.classList.toggle('active')
})
toLoginPage.addEventListener('click', () => {
  loginPage.classList.toggle('active')
  signUpPage.classList.toggle('active')
})

// 註冊
const apiUrl = 'https://todoo.5xcamp.us'
const signUpEmail = document.querySelector('#signupEmail')
const nickName = document.querySelector('#nickName')
const signUpPassword = document.querySelector('#signUpPassword')
const signUpPassword2 = document.querySelector('#signUpPassword2')
const signupBtn = document.querySelector('.signup-btn')
signupBtn.addEventListener('click', () => {
  const userEmail = signUpEmail.value
  const userNickName = nickName.value
  const userSignUpPassword = signUpPassword.value
  const userSignUpPassword2 = signUpPassword2.value
  signUp(userEmail, userNickName, userSignUpPassword)
})
function signUp (userEmail, userNickName, userSignUpPassword) {
  console.log(userEmail, userNickName, userSignUpPassword)
  axios.post(`${apiUrl}/users`, {
    user: {
      email: userEmail,
      nickname: userNickName,
      password: userSignUpPassword
    }
  })
    .then(res => {
      alert(res.data.message)
    })
    .catch(res => {
      alert(res.message)
    })
}

// 登入
const loginEmail = document.querySelector('#loginEmail')
const loginPassword = document.querySelector('#loginPassword')
const loginBtn = document.querySelector('.login-btn')
loginBtn.addEventListener('click', () => {
  const userEmail = loginEmail.value
  const userPassword = loginPassword.value
  login(userEmail, userPassword)
})
function login (userEmail, userPassword) {
  axios.post(`${apiUrl}/users/sign_in`, {
    user: {
      email: userEmail,
      password: userPassword
    }
  })
    .then(res => {
      alert(res.data.message)
      toListPage()
    })
    .catch(res => {
      alert(res.message)
    })
}

// 切換到待辦頁面&登出
const userPage = document.querySelector('.user-page')
const todoPage = document.querySelector('.todo-page')
const signOut = document.querySelector('.sign-out')
function toListPage () {
  userPage.classList.toggle('active')
  todoPage.classList.toggle('active')
}
signOut.addEventListener('click', () => {
  userPage.classList.toggle('active')
  todoPage.classList.toggle('active')
})

// 內頁
document.querySelector('.nickname').innerHTML = '<h2>666666</h2>'
