//@ Testing Modal New user
const jobInput = document.querySelector(".job__input");
const addressInput = document.querySelector(".address__input");
const cityInput = document.querySelector(".city__input");
const codeInput = document.querySelector(".code__input");
const eyes = document.querySelector(".eyes-icon");
const emailInput = document.querySelector(".email__input");
const ownerInput = document.querySelector(".owner__input");
const telInput = document.querySelector(".tel__input");
const regBtn = document.querySelector(".new-user-reg__btn");

jobInput.addEventListener("click", (e) => {
  jobInput.classList.add("remove-placeholder");
});

jobInput.addEventListener("blur", (e) => {
  jobInput.classList.remove("remove-placeholder");
});

addressInput.addEventListener("click", (e) => {
  addressInput.classList.add("remove-placeholder");
});

addressInput.addEventListener("blur", (e) => {
  addressInput.classList.remove("remove-placeholder");
});

cityInput.addEventListener("click", (e) => {
  cityInput.classList.add("remove-placeholder");
});

cityInput.addEventListener("blur", (e) => {
  cityInput.classList.remove("remove-placeholder");
});

codeInput.addEventListener("click", (e) => {
  codeInput.classList.add("remove-placeholder");
    // eyes.classList.add("show-eyes");
  });
  
  codeInput.addEventListener('input', (e) => {
    if (e.target.value !== "") {
      eyes.classList.add("show-eyes");
    } else {
      eyes.classList.remove("show-eyes");
  }
})

codeInput.addEventListener("blur", (e) => {
  codeInput.classList.remove("remove-placeholder");
  // eyes.classList.remove('show-eyes')
});

eyes.addEventListener("click", () => {
  // console.log(codeInput.type);
  if (codeInput.type === "password") {
    // eyes.classList.add("show-eyes");
    eyes.classList.remove('fa-eye')
    eyes.classList.add('fa-eye-slash')
    codeInput.type = "text";
  }
  else if (codeInput.type === 'text') {
    eyes.classList.remove('fa-eye-slash')
    eyes.classList.add('fa-eye')
    codeInput.type = "password";
  }
});

emailInput.addEventListener("click", (e) => {
  emailInput.classList.add("remove-placeholder");
});

emailInput.addEventListener("blur", (e) => {
  emailInput.classList.remove("remove-placeholder");
});

ownerInput.addEventListener("click", (e) => {
  ownerInput.classList.add("remove-placeholder");
});

ownerInput.addEventListener("blur", (e) => {
  ownerInput.classList.remove("remove-placeholder");
});

telInput.addEventListener("click", (e) => {
  telInput.classList.add("remove-placeholder");
});

telInput.addEventListener("blur", (e) => {
  telInput.classList.remove("remove-placeholder");
});

regBtn.addEventListener('click', ()=>{
  const pizda = []
  pizda.push(jobInput.value)
  console.log(pizda);
})