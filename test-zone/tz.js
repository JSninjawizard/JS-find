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
mainDiv.classList.add('test')
mainDiv.textContent='ewe'
console.log(mainDiv);
document.body.appendChild(mainDiv)


const arr = []
for (const account of accounts) {
  const diva = document.createElement('div')
  diva.classList.add('herna')

  const all = Object.entries(accounts)
  const keys = Object.keys(accounts)
  const values = Object.values(account)
  // console.log(values);


  const test = values.slice(0,1)
  const test1 = values.slice(3,4)
  const test3 = test.concat(test1)
  console.log(test3);

  test3.forEach(el => {
    const par = document.createElement('p')
    par.textContent = el
    diva.appendChild(par)
    mainDiv.appendChild(diva)
  })

    values.forEach((value,index,c,d) => {
      // console.log(`${value} - ${index+1}`);
      // console.log(value.slice);

    })
}



// const result = words.filter((word) => word.length > 6)