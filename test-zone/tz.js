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
]

const mainDiv = document.createElement('div')
const arr = []
for (const account of accounts) {
  // const owner = account.owner
  // const job = account.Job
  // arr.push(owner,job)

  const all = Object.entries(accounts)
  const keys = Object.keys(accounts)
  const values = Object.values(account)
  console.log(values);

  const result = values.filter((vals, i) => i[0]))
  console.log(result);
}



// const result = words.filter((word) => word.length > 6)