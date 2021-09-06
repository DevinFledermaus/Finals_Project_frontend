let reg_form = document.querySelector(".registration-form");
if (reg_form != null) {
    reg_form.addEventListener("submit", (e) => {
      //  PREVENT THE DEFAULT ACTION OF THE FORM
      e.preventDefault();
  
      //  CREATE AN OBJECT CONTAINING ALL THE INPUTS VALUES
      let new_user = {
        fisrt_name: document.querySelector("#first-name").value,
        last_name: document.querySelector("#last-name").value,
        username: document.querySelector("#username").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
      };
  
      console.log(new_user);
  
      fetch("https://safe-stream-00881.herokuapp.com/registration/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(new_user)
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if(data.status_code == 201) {
            let user = data.user;
            localStorage.setItem("user", JSON.stringify(user));
            alert("successful registration")
            window.location.href = "login.html";
          } else {
            alert("unsuccessful registration")
            
          }
         
        });
    });
  }