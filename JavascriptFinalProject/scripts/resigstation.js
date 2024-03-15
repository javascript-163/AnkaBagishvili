function registerAcc() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("Password").value;

  let userData = localStorage.getItem("userData");
  let user = {
    firstName,
    lastName,
    username,
    password
  };

  if (userData !== null || userData.length) {
    userData = JSON.parse(userData);
    userData.push(user);
    localStorage.setItem("userData", JSON.stringify(userData));
  } else {
    userData = [];
    userData.push(user);

    localStorage.setItem("userData", JSON.stringify(userData));
  }

  // if (localStorage.getItem(username)) {
  //   window.location.href = "../index.html";
  // } else alert("Registration failed!");

  // return false;
}
