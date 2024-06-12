
//@ Testing Modal New user
const jobInput = document.querySelector(".job__input")
const addressInput = document.querySelector(".address__input")
const cityInput = document.querySelector(".city__input")
const codeInput = document.querySelector(".code__input")
const eyes = document.querySelector(".eyes-icon")
const emailInput = document.querySelector(".email__input")
const ownerInput = document.querySelector(".owner__input")
const telInput = document.querySelector(".tel__input")

jobInput.addEventListener("click", (e) => {
  jobInput.classList.add('remove')

})

jobInput.addEventListener("blur", (e) => {
  jobInput.classList.remove('remove')

})

addressInput.addEventListener("click", (e) => {
  addressInput.classList.add('remove')

})

addressInput.addEventListener("blur", (e) => {
  addressInput.classList.remove('remove')

})

cityInput.addEventListener("click", (e) => {
  cityInput.classList.add('remove')

})

cityInput.addEventListener("blur", (e) => {
  cityInput.classList.remove('remove')

})

codeInput.addEventListener("click", (e) => {
  codeInput.classList.add('remove')
    eyes.classList.add('show-eyes')
})

codeInput.addEventListener("blur", (e) => {
    codeInput.classList.remove('remove')
    // eyes.classList.remove('show-eyes')
})

eyes.addEventListener('click', () => {
    codeInput.type = 'text'
})

emailInput.addEventListener("click", (e) => {
  emailInput.classList.add('remove')

})

emailInput.addEventListener("blur", (e) => {
  emailInput.classList.remove('remove')

})

ownerInput.addEventListener("click", (e) => {
  ownerInput.classList.add('remove')

})

ownerInput.addEventListener("blur", (e) => {
  ownerInput.classList.remove('remove')

})

telInput.addEventListener("click", (e) => {
  telInput.classList.add('remove')

})

telInput.addEventListener("blur", (e) => {
  telInput.classList.remove('remove')

})

