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
    }
]

const container = document.createElement('div')
container.classList.add('container')
document.body.appendChild(container)

for (const account of accounts) {
    const div = document.createElement('div')
    div.classList.add('div-box')

    const values = Object.values(account)
  const owner = values.slice(0,1)
  const job = values.slice(3,4)
  const fullProfile = owner.concat(job)
  console.log(fullProfile);
}