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

const btn = document.querySelector(".btn")
const p = document.querySelector("p")

btn.addEventListener('click', () => {
    accounts.forEach((a,b,c,d) => {
        const newDiv = document.createElement("div");
        console.log(a.owner);
        newDiv.textContent = a.owner
        newDiv.classList.add("box")
        p.appendChild(newDiv)
    })

})