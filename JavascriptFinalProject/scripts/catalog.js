fetch("https://myfakeapi.com/api/cars/model/E-Class")
  .then((response) => response.json())
  .then((data) => {
    let CLECars = document.getElementById("CLECars");
    CLECars.innerHTML = "";

    for (let i = 0; i < data.Cars.length; i++) {
      const car = data.Cars[i];
      let carDiv = document.createElement("p");
      carDiv.innerHTML = `
        Model: ${car.car_model},
        Manufacturer: ${car.car}, 
        Color: ${car.car_color}, 
        Year: ${car.car_model_year}`;

      carDiv.style.color = "rgb(113, 113, 113)";
      carDiv.style.fontSize = "20px";

      CLECars.appendChild(carDiv);
    }
  })
  .catch((error) => {
    console.log("Error", error);
  });
