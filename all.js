// 切換
const signBtn = document.querySelector('.sing-btn')
const loginBtn = document.querySelector('.login-btn')
const signUp = document.querySelector('.signup')
const login = document.querySelector('.login')
// console.log(signUp.innerHTML)

signBtn.addEventListener('click', () => {
  login.classList.toggle('active')
  signUp.classList.toggle('active')
})
loginBtn.addEventListener('click', () => {
  login.classList.toggle('active')
  signUp.classList.toggle('active')
})

// 註冊
const signUpEmail = document.querySelector('#signupEmail')
const nickName = document.querySelector('#nickName')
const signUpPassword = document.querySelector('#signUpPassword')
const signUpPassword2 = document.querySelector('#signUpPassword2')
const btn2 = document.querySelector('.btn2')
btn2.addEventListener('click', () => {
  let email = signUpEmail.value
  console.log(email)
})
