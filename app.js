const accounts = [
  {
    owner: "Wilber Durgan",
    email: "Berniece.Schmitt10@yahoo.com",
    username: "Andres2",
    Job: "Senior Metrics Consultant",
    tel: "1-062-815-0158 x6026",
    city: "Waelchiside",
    address: "South Johnschester, McKenzie Views, 35967",
  },
  {
    owner: "Erika Bergstrom",
    email: "Ari_Medhurst@hotmail.com",
    username: "Laney.Cummerata24",
    Job: "Senior Marketing Orchestrator",
    tel: "(312) 597-9928 x4137",
    city: "Domenicton",
    address: "Port South Max, O'Conner Via, 30895",
  },
  {
    owner: "Maybell Wiegand",
    email: "Lon.Little@hotmail.com",
    username: "Madie.Anderson59",
    Job: "Central Paradigm Orchestrator",
    tel: "1-474-716-1693 x5862",
    city: "New Kennashire",
    address: "New Port Alexysstad, Lubowitz Way, 47258",
  },
  {
    owner: "Maribel Prohaska",
    email: "Rosamond.Murray@yahoo.com",
    username: "Maritza.Rodriguez",
    Job: "Principal Usability Analyst",
    tel: "1-244-682-5095",
    city: "Parkermouth",
    address: "North Jaleelbury, Hirthe Roads, 32095",
  },
  {
    owner: "Kiara Hodkiewicz",
    email: "Wilhelm.Nitzsche@gmail.com",
    username: "Will3",
    Job: "Future Paradigm Liaison",
    tel: "1-462-505-7892",
    city: "New Carlie",
    address: "West Lake Ole, Napoleon Falls, 66835",
  },
  {
    owner: "Fanny Marks",
    email: "Annamarie_Satterfield61@yahoo.com",
    username: "Ernestina.OKon33",
    Job: "Forward Assurance Technician",
    tel: "1-380-004-5537 x283",
    city: "Fosterbury",
    address: "New East Hulda, Percy Land, 56692",
  },
  {
    owner: "Gertrude Berge",
    email: "Eden72@yahoo.com",
    username: "Jeanie.Nader",
    Job: "Forward Directives Planner",
    tel: "201.871.4345 x35745",
    city: "Dorthaborough",
    address: "South Mckennaville, Trantow Avenue, 59320",
  },
  {
    owner: "Rowena Runolfsdottir",
    email: "Jaunita_Crooks44@hotmail.com",
    username: "Hayden15",
    Job: "Senior Usability Designer",
    tel: "1-142-000-4344",
    city: "Alfordmouth",
    address: "Port North Sophiashire, Briana Garden, 88391",
  },
  {
    owner: "Terrence Kling",
    email: "Elda.Considine2@gmail.com",
    username: "Manuel62",
    Job: "Dynamic Division Executive",
    tel: "542-153-5177",
    city: "Lubowitztown",
    address: "Lake Cummerataland, Strosin Common, 23164",
  },
  {
    owner: "Mrs. Colby Donnelly",
    email: "Dejuan87@yahoo.com",
    username: "Jessica54",
    Job: "Forward Integration Strategist",
    tel: "618-106-5746 x7850",
    city: "Enricomouth",
    address: "Port Kohlerhaven, Gibson Walk, 83302",
  },
  {
    owner: "Diana Gerhold",
    email: "Lexi68@gmail.com",
    username: "Nicola_Kerluke",
    Job: "Dynamic Creative Assistant",
    tel: "678-097-8621 x881",
    city: "Schoenbury",
    address: "North East Wallace, Kenyon Cove, 54534",
  },
  {
    owner: "Osvaldo Dare",
    email: "Libby_Blick20@gmail.com",
    username: "Zola27",
    Job: "Legacy Accountability Assistant",
    tel: "(911) 666-1961",
    city: "East Miller",
    address: "North Port Oranville, Kuphal Cape, 6786",
  },
  {
    owner: "Katelynn Dare",
    email: "Pearlie53@hotmail.com",
    username: "Karen_Abbott",
    Job: "Human Research Technician",
    tel: "642.531.1789",
    city: "Maximilianland",
    address: "New South Estherstad, Holly Ranch, 67974",
  },
  {
    owner: "Liam Macejkovic",
    email: "Newell_Kemmer39@yahoo.com",
    username: "Cordie5",
    Job: "Customer Creative Architect",
    tel: "(144) 060-6308",
    city: "West Rogers",
    address: "Lake North Garret, Wilson Tunnel, 53481",
  },
  {
    owner: "Alexandro Wintheiser",
    email: "Katrine_Runte63@yahoo.com",
    username: "Delbert_Rau66",
    Job: "Dynamic Communications Engineer",
    tel: "(030) 733-3306 x901",
    city: "North Soledadfort",
    address: "East Chelsieview, Mortimer Trail, 35590",
  },
];

const createAcronym = (accounts) => {
  accounts.forEach((account) => {
    account.acronym = account.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createAcronym(accounts);
// console.log(accounts);

const createCode = (accounts) => {
  accounts.forEach((account, a, b) => {
    account.code = Number(`${a + 1}${a + 1}${a + 1}`);
    // console.log(`${a+1}${a+1}${a+1}`);
  });
};
createCode(accounts);
console.log(accounts[0]);

const overlay = document.querySelector(".overlay");
const logo = document.querySelector(".logo");
const username = document.querySelector(".input-username");
const code = document.querySelector(".input-code");
const userIcon = document.querySelector(".user-icon");
const lockIcon = document.querySelector(".lock-icon");
//@Icons
const closedDoor = document.querySelector(".closed-door");
const openedDoor = document.querySelector(".opened-door");
const newUserIcon = document.querySelector(".new-user-icon");

//@Message
const welcomeMsg = document.querySelector(".output__msg");
const owner = document.querySelector(".output__owner");
//@Containers
const loginContainer = document.querySelector(".container--login");
const bodyContainer = document.querySelector(".body-container");
const footerContainer = document.querySelector(".container--footer");
const inputContainer = document.querySelector(".container--input");
const outputContainer = document.querySelector(".container--output");
const detailsContainer = document.querySelector(".body-container__details");

//@More Info
const moreDetails = document.querySelector(".output__more-details");
const job = document.querySelector(".output__more-details--job");
const tel = document.querySelector(".output__more-details--tel");

//@New user modal
const newUserModal = document.querySelector(".new-user-modal");


logo.addEventListener("click", () => {
  logo.classList.toggle("green");
  bodyContainer.classList.toggle("hidden");
  if (bodyContainer.classList.contains("hidden")) {
    location.reload();
    // username.value = ''
    // code.value = ''
  }
});

const userNameArr = [];
const codeArr = [];

username.addEventListener("input", (e) => {
  closedDoor.classList.remove("animate");
  if (e.target.value !== "") {
    userIcon.classList.add("not-empty");
  } else {
    userIcon.classList.remove("not-empty");
  }
});

username.addEventListener("blur", (e) => {
  const userNameVal = e.target.value;
  userNameArr.push(userNameVal);
});

username.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    validate();
  }
});

code.addEventListener("input", (e) => {
  closedDoor.classList.remove("animate");
  if (e.target.value !== "") {
    lockIcon.classList.add("not-empty");
  } else {
    lockIcon.classList.remove("not-empty");
  }
});

code.addEventListener("blur", (e) => {
  const codeVal = e.target.value;
  codeArr.push(codeVal);
});

code.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    validate();
  }
});

closedDoor.addEventListener("click", () => {
  // const userString = userNameArr.toString()
  // const codeString = codeArr.toString()
  validate();
});

function validate() {
  const userString = username.value;
  const codeString = code.value;
  console.log(userString);
  console.log(codeString);

  const currentUser = accounts.find((x) => x.acronym === userString);
  console.log(currentUser);

  if (currentUser === undefined) {
    closedDoor.classList.add("animate");
  } else if (currentUser?.code !== Number(codeString)) {
    console.log("wrong");
    closedDoor.classList.add("animate");
  } else if (currentUser?.code === Number(codeString)) {
    console.log(currentUser.owner);

    closedDoor.classList.add("hide-door");
    openedDoor.classList.remove("abs");
    openedDoor.classList.add("show-door");

    welcomeMsg.textContent = `Welcome Back: `;
    welcomeMsg.classList.add("welcome-show");
    owner.textContent = currentUser.owner;
    owner.classList.add("owner-show");

    // !remove irrelevant items
    loginContainer.classList.add('hide-login-container')
    footerContainer.classList.add('hide-footer-container')
    // inputContainer.classList.add('hide-footer-container')
    outputContainer.classList.add('margin0')

    inputContainer.classList.add('hide')
    bodyContainer.classList.add('hide')
    detailsContainer.classList.remove('hide')

    // !show more info
    job.textContent = `Job: ${currentUser.Job}`
    tel.textContent = `Tel: ${currentUser.tel}`
  }
}


newUserIcon.addEventListener('click', (e) => {
  newUserModal.classList.remove('hide-modal')
  overlay.classList.remove('hide-overlay')
  console.log('was clicked');

})

overlay.addEventListener('click', () => {
  newUserModal.classList.add('hide-modal')
  overlay.classList.add('hide-overlay')
})
