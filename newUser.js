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

const jobDiv = document.querySelector(".job");
const addressDiv = document.querySelector(".address");
const cityDiv = document.querySelector(".city");
const codeDiv = document.querySelector(".code");
const emailDiv = document.querySelector(".email");
const ownerDiv = document.querySelector(".owner");
const telDiv = document.querySelector(".tel");

jobInput.addEventListener("click", (e) => {
  jobInput.classList.add("remove-placeholder");
  jobDiv.classList.remove("not-validated");
});

jobInput.addEventListener("blur", (e) => {
  jobInput.classList.remove("remove-placeholder");
});

addressInput.addEventListener("click", (e) => {
  addressInput.classList.add("remove-placeholder");
  addressDiv.classList.remove("not-validated");
});

addressInput.addEventListener("blur", (e) => {
  addressInput.classList.remove("remove-placeholder");
});

cityInput.addEventListener("click", (e) => {
  cityInput.classList.add("remove-placeholder");
  cityDiv.classList.remove("not-validated");
});

cityInput.addEventListener("blur", (e) => {
  cityInput.classList.remove("remove-placeholder");
});

codeInput.addEventListener("click", (e) => {
  codeInput.classList.add("remove-placeholder");
  codeDiv.classList.remove("not-validated");
  // eyes.classList.add("show-eyes");
});

codeInput.addEventListener("input", (e) => {
  if (e.target.value !== "") {
    eyes.classList.add("show-eyes");
  } else {
    eyes.classList.remove("show-eyes");
  }
});

codeInput.addEventListener("blur", (e) => {
  codeInput.classList.remove("remove-placeholder");
  // eyes.classList.remove('show-eyes')
  console.log(e.target);
});

eyes.addEventListener("click", () => {
  // console.log(codeInput.type);
  if (codeInput.type === "password") {
    // eyes.classList.add("show-eyes");
    eyes.classList.remove("fa-eye");
    eyes.classList.add("fa-eye-slash");
    codeInput.type = "text";
  } else if (codeInput.type === "text") {
    eyes.classList.remove("fa-eye-slash");
    eyes.classList.add("fa-eye");
    codeInput.type = "password";
  }
});

emailInput.addEventListener("click", (e) => {
  emailInput.classList.add("remove-placeholder");
  emailDiv.classList.remove("not-validated");
});

emailInput.addEventListener("blur", (e) => {
  emailInput.classList.remove("remove-placeholder");
});

ownerInput.addEventListener("click", (e) => {
  ownerInput.classList.add("remove-placeholder");
  ownerDiv.classList.remove("not-validated");
});

ownerInput.addEventListener("blur", (e) => {
  ownerInput.classList.remove("remove-placeholder");
});

telInput.addEventListener("click", (e) => {
  telInput.classList.add("remove-placeholder");
  telDiv.classList.remove("not-validated");
});

telInput.addEventListener("blur", (e) => {
  telInput.classList.remove("remove-placeholder");
});

regBtn.addEventListener("click", () => {
  if (
    jobInput.value === "" ||
    addressInput.value === "" ||
    cityInput.value === "" ||
    Number(codeInput.value) === "" ||
    emailInput.value === "" ||
    ownerInput.value === "" ||
    telInput.value === ""
  ) {
    validateNewUser();
  }
  else if (
    jobInput.value !== "" &&
    addressInput.value !== "" &&
    cityInput.value !== "" &&
    Number(codeInput.value) !== "" &&
    emailInput.value !== "" &&
    ownerInput.value !== "" &&
    telInput.value !== ""
  ) {
    validatedNewUser ()
    closeModal()
  }
  else
  {
    const account = new Object();
    account.job = jobInput.value;
    account.address = addressInput.value;
    account.city = cityInput.value;
    account.code = Number(codeInput.value);
    account.email = emailInput.value;
    account.owner = ownerInput.value;
    account.tel = telInput.value;

    accounts.push(account);
    createAcronym(accounts);
    console.log(accounts);

    closeModal()
    // closeOverlay()
  }
});

function validateNewUser() {
  if (jobInput.value !== "") {
    jobDiv.classList.remove("not-validated");
    jobDiv.classList.add("validated");
  } else {
    jobDiv.classList.remove("validated");
    jobDiv.classList.add("not-validated");
  }

  if (addressInput.value !== "") {
    addressDiv.classList.remove("not-validated");
    addressDiv.classList.add("validated");
  } else {
    addressDiv.classList.remove("validated");
    addressDiv.classList.add("not-validated");
  }

  if (cityInput.value !== "") {
    cityDiv.classList.add("validated");
  } else {
    cityDiv.classList.remove("validated");
    cityDiv.classList.add("not-validated");
  }

  if (codeInput.value !== "") {
    codeDiv.classList.add("validated");
  } else {
    codeDiv.classList.remove("validated");
    codeDiv.classList.add("not-validated");
  }

  if (emailInput.value !== "") {
    emailDiv.classList.add("validated");
  } else {
    emailDiv.classList.remove("validated");
    emailDiv.classList.add("not-validated");
  }

  if (ownerInput.value !== "") {
    ownerDiv.classList.add("validated");
  } else {
    ownerDiv.classList.remove("validated");
    ownerDiv.classList.add("not-validated");
  }

  if (telInput.value !== "") {
    telDiv.classList.add("validated");
  } else {
    telDiv.classList.remove("validated");
    telDiv.classList.add("not-validated");
  }
}


function validatedNewUser () {
  jobDiv.classList.add("validated");
  addressDiv.classList.add("validated");
  cityDiv.classList.add("validated");
  codeDiv.classList.add("validated");
  emailDiv.classList.add("validated");
  ownerDiv.classList.add("validated");
  telDiv.classList.add("validated");
}

function closeModal () {
  newUserModal.classList.add('close-modal')
  newUserModal.classList.add('delay-1')
}