let signIn = document.querySelector("#loginform");

function login(username, password) {
    console.log(username);
    console.log(password);
    fetch("https://safe-stream-00881.herokuapp.com/auth", {
      method: "POST",
      body: JSON.stringify({
        username: `${username}`,
        password: `${password}`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data["access_token"]) {
          console.log(data);
          myStorage = window.localStorage;
          myStorage.setItem("jwt-token", data["access_token"]);
          myStorage.setItem("username", username);
          myStorage.setItem("password", password);
          alert("Successfully Logged In")
          window.location.href = "./index.html";
        }
      });
  }

  document.querySelector("#loginform").addEventListener("submit", (e) => {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    e.preventDefault();
    login(username, password);
  });