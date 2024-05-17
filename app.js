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

//^ Exercise 1
//^          create login page that will check if the user is in the system.
