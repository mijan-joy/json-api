const loadCountries = () => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
loadCountries();
const displayCountries = (countries) => {
  //   for (const country of countries) {
  //     console.log(country);
  //   }
  const countriesDiv = document.getElementById("countries");
  countries.forEach((country) => {
    // console.log(country);

    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        
        <button onclick="loadCountryByName('${country.name}')">Details</button>
    `;

    // const h4 = document.createElement("h4");
    // h4.innerText = country.name;
    // div.appendChild(h4);
    // const p = document.createElement("p");
    // p.innerText = `Country: ${country.capital} , Region: ${country.region} Population: ${country.population}`;
    // div.appendChild(p);
    countriesDiv.appendChild(div);
  });
};

const loadCountryByName = (name) => {
  const url = `https://restcountries.com/v2/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetail(data[0]));
};
const displayCountryDetail = (country) => {
  console.log(country);
  const countryDiv = document.getElementById("country-details");
  countryDiv.innerHTML = `
  <h2>${country.name}</h2>
  <p>Population: ${country.population}</p>
  <img width="150px" src="${country.flag}">
  `;
};
const bondCode = ` I am Fake James bond . My new code is: 00${7 + 1 + 2}`;
console.log(bondCode);
