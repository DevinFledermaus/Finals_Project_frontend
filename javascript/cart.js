function populateCart() {
    fetch("https://safe-stream-00881.herokuapp.com/view-all/").then(
      (request) => {
        request.json().then((obj) => {
          //   console.log(obj);
          data = obj.data;
          let cart_container = document.querySelector(".cart");
          let total_cost = 0;
          //   let total = 0;
          cart_container.innerHTML = ``;
          cart.forEach((order) => {
            console.log("waah", order);
            data.forEach((comic) => {
              if (comic[0] == order) {
                // console.log(product);
                total_cost += parseFloat(comic[3].replace("R", ""));
                cart_container.innerHTML += `<div class="cart-item">
              <p class="id">Title: ${comic[1]}</p>
              <p class="name">Description: ${comic[2]}</p>
              <p class="price">Price: R${comic[3]}.00</p>
              <div class="quantity-div">
                <label for="quantity">Quantity: </label>
                <input type="number" class="quantity-input" name="quantity" min="1" max="100" value="1">
              </div>
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
  
  function createTotal(cost) {
    let total_container = document.querySelector(".cart");
    total_container.innerHTML += `<div class="total-div">
    <p class="total-p">Total : R${cost}.00</p>
    </div>`;
  }