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

const box1 = document.querySelector(".box-1")

for (const account of accounts) {
    let job = account.Job
    let owner = account.owner
    // console.log(huy);

    const div = document.createElement("div");
    div.append(job)
    div.append(owner)
    box1.appendChild(div)
    
    
    
    
    for (const pro in account) {
        // const owner = `${pro}: ${account[pro]}`
        // console.log(pro.split(''));

        // const div = document.createElement("div");
        // div.append(owner)
        // box1.appendChild(div)
    }
}