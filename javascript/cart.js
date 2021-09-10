// Fecthing data from link and then displaying the data

function populateCart() {
    fetch("https://safe-stream-00881.herokuapp.com/view-all/")
    .then(
      (request) => {
        request.json().then((obj) => {
          data = obj.data;
          let cart_container = document.querySelector(".cart");
          let total_cost = 0;
          cart_container.innerHTML = ``;
          cart.forEach((order) => {
            data.forEach((comic) => {
              if (comic[0] == order) {
                total_cost += parseFloat(comic[3].replace("R", ""));
                cart_container.innerHTML += `<div class="cart-item">
              <p class="id">Title: ${comic[1]}</p>
              <p class="price">Price: R${comic[3]}.00</p>
              <p class="quantity">Quantity: 1</p>
              <button>Remove</button>
            </div>`;
              }
            });
          });
          createTotal(total_cost);
          
        });
      }
    );
  }
  
// Function to calculate the sum of all the costs

  function createTotal(cost) {
    let total_container = document.querySelector(".cart");
    total_container.innerHTML += `<div class="total-div">
    <p class="total-p">Total : R${cost}.00</p>
    </div>`;
  }

// Function to toggle the Cart div

function toggleCart() {
  console.log(document.querySelector(".cart-container"))
  document.querySelector(".cart-container").classList.toggle("show");
}
