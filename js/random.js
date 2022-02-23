const loadBuddies = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => displayBuddies(data));
};
loadBuddies();
const displayBuddies = (data) => {
  const buddies = data.results;
  for (const buddy of buddies) {
    const buddiesDiv = document.getElementById("buddies");
    console.log(buddy);
    const p = document.createElement("p");
    p.innerText = ` ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} \nEmail:${buddy.email}\n Gender: ${buddy.gender}, Phone: ${buddy.phone} \n Address:${buddy.location.city} State: ${buddy.location.state} \n Country: ${buddy.location.country} \n `;
    buddiesDiv.appendChild(p);
  }
};
