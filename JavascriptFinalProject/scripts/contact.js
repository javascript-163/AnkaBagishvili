function handleSubmit(event) {
  event.preventDefault();

  let contactName = document.getElementById("contactName").value;
  let contactLastName = document.getElementById("contactLastName").value;
  let contactAge = document.getElementById("contactAge").value;
  let contactGender = document.getElementById("contactGender").value;
  let contactCountry = document.getElementById("contactCountry").value;

  let formData = {
    contactName,
    contactLastName,
    contactAge,
    contactGender,
    contactCountry,
    contactCity: "",
  };
  let formDataStorage = JSON.stringify(formData);
  localStorage.setItem("formData", formDataStorage);

  fetch(
    `http://api.geonames.org/searchJSON?country=${contactCountry}&maxRows=10&username=ankabagi`
  )
    .then((response) => response.json())
    .then((data) => {
      const cities = data.geonames.map((city) => city.name);
      const cityInput = document.getElementById("contactCity");
      cityInput.value = cities.join(", ");
    })
    .catch((error) => {
      console.log("Error", error);
    });
}

let form = document.getElementById("contactForm");
form.addEventListener("submit", handleSubmit);
