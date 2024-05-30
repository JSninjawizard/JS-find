const accounts = [
  {
    owner: "Ahmed abu Shukraniye",
    code: 111,
    profession: "Nurse",
    sector: "Medical Services",
    work: "Kaplan",
  },
  {
    owner: "Basim ibn Abdaliye",
    code: 222,
    profession: "Laboratory Specialist",
    sector: "Medical Services",
    work: "Yoseftal",
  },
  {
    owner: "Carim abu Kaplaniye",
    code: 333,
    profession: "Doctor",
    sector: "Medical Services",
    work: "Shneider",
  },
  {
    owner: "Darwish ibn Sanitariye",
    code: 444,
    profession: "Nurse",
    sector: "Medical Services",
    work: "Beilinson",
  },
];
// console.log(accounts);

const zeAccountImmaLookingFor = accounts.find(
  (x) => x.owner === "Carim abu Kaplaniye"
);
// console.log(zeAccountImmaLookingFor);

const createUserNames = (accounts) => {
  accounts.forEach((account) => {
    account.username = account.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUserNames(accounts);
console.log(accounts);



const logo = document.querySelector('.logo')
const test = document.querySelector('.rest-container')
const username = document.querySelector('.input-username')
const code = document.querySelector('.input-code')



username.addEventListener("focus", (event) => {
  event.target.style.background = "pink";
  
});

username.addEventListener("blur", (event) => {
  event.target.style.background = "";
});

logo.addEventListener('click', () => {
    logo.style.color = 'green'
    test.classList.toggle('unseen')

})

