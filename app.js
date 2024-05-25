const accounts = [
    {
        owner: "Ahmed abu Shukraniye",
        profession: "Nurse",
        sector: "Medical Services",
        work: 'Kaplan'
    },
    {
        owner: "Basim ibn Abdaliye",
        profession: "Laboratory Specialist",
        sector: "Medical Services",
        work: "Yoseftal"

    },
    {
        owner: "Carim abu Kaplaniye",
        profession: "Doctor",
        sector: "Medical Services",
        work: "Shneider"
    },
    {
        owner: "Darwish ibn Sanitariye",
        profession: "Nurse",
        sector: "Medical Services",
        work: "Beilinson"
    },
]
// console.log(accounts);

const zeAccountImmaLookingFor = accounts.find(x => x.owner === "Carim abu Kaplaniye")
// console.log(zeAccountImmaLookingFor);

const createUserNames = (accounts) => {
    accounts.forEach(account => {
        account.username = account.owner
        .toLowerCase()
        .split(" ")
        .map(name => name[0])
        .join("")
    })
}
createUserNames(accounts)

console.log(accounts);

//^ Exercise 1
//^          create login page that will check if the user is in the system.
const user = document.querySelector(".username")
const password = document.querySelector(".code")
const btn = document.querySelector(".btn")
const text = document.querySelector(".text")
const spanName = document.querySelector(".spanName")

btn.addEventListener('click', ()=>{
    console.log(user.value);
    console.log(password.value);
    //! -=
    if (user.value === "") {
        text.innerHTML = `Fill in all the required fileds <br> hit cmd+r`
        user.classList.add('red')
    }
    // if (user.value === "" && password.value === "") {
    //     text.innerHTML = `Fill in all the required fileds <br> hit cmd+r`
    //     user.classList.add('red')
    //     password.classList.add('red')
    // }
    // if (user.value === "" && password.value !== "") {
    //     text.innerHTML = `Fill in all the required fileds <br> hit cmd+r`
    //     user.classList.add('red')
    // }
    // if (user.value !== "" && password.value === "") {
    //     text.innerHTML = `Fill in all the required fileds <br> hit cmd+r`
    //     password.classList.add('red')
    // }

    //@ >>- Working with find
    const currentUser = accounts.find(x => x.username === user.value)
    console.log(currentUser);
    if (currentUser === undefined) {
        text.textContent = 'No such user'
    }
    else {
    text.textContent = `Welcome Back:`
    spanName.textContent = `${currentUser.owner}`
    spanName.classList.add("green")
    }


        // if (currentUser.username === user.value) {
        //     text.textContent = `Welcome back, ${currentUser.owner}`
        // }
        // else {
        //     text.textContent = "no such user"
        // }


    //@ >>- Working with for of
    // for (const el of accounts) {
    //     const usr = el.username
    //     if (user.value === el.username) {
    //         text.textContent = `Welcome Back, ${accounts.owner}`
    //     }
    //     else {
    //         text.textContent = 'No such user'
    //     }
    // }
})