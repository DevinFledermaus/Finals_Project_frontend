let cart = [];
console.log("hew", window.localStorage.getItem("username"))


// Adding to cart

function addToCart(index){
    cart.push(index);
    let add_btn = document.querySelector(`.AtCbtn-${index}`);
    add_btn.style.display = "none";
    alert("Comic moved to cart, You're lucky we had one in stock.");
    populateCart();
}

function viewCart(){
    document.querySelector(".cart").classList.toggle("active");
}


// Fetching products from database and then displaying them

function createLimitedCards() {
    let container = document.querySelector(".limited");

    fetch("https://safe-stream-00881.herokuapp.com/view-all/").then(
        (request) => {
            request.json().then((obj) => {
              console.log(obj);
              data = obj.data;
              console.log(data);
              random_data = data.sort( () => .5 - Math.random() ).slice(0, 5)
              container.innerHTML = ``;
              let index = 0;
              random_data.forEach((comic) => {
                container.innerHTML += `<div class="card">
                <div class="title">
                    <h2> ${comic[1]}</h2>
                </div>
                <div class="rest">
                    <h4>R ${comic[3]}.00</h4>
                    <button onclick="addToCart(${comic[0]})" class="AtCbtn-${comic[0]}">Add to cart</button>
                </div>
           </div>`;
                console.log(index);
                index++;
                });
            });
        }
    );
}

createLimitedCards();

// Fetching products from database and then displaying them

function createBestCards() {
    let container = document.querySelector(".best");

    fetch("https://safe-stream-00881.herokuapp.com/view-all/").then(
        (request) => {
            request.json().then((obj) => {
              console.log(obj);
              data = obj.data;
              console.log(data);
              best_data = data.sort(() => Math.random - Math.random()).slice(4, 10)
              container.innerHTML = ``;
              let index = 0;
              best_data.forEach((comic) => {
                container.innerHTML += `<div class="card">
                <div class="title">
                    <h2> ${comic[1]}</h2>
                </div>
                <div class="rest">
                    <h4>R ${comic[3]}.00</h4>
                    <button onclick="addToCart(${comic[0]})" class="AtCbtn-${comic[0]}">Add to cart</button>
                </div>
           </div>`;
                console.log(index);
                index++;
                });
            });
        }
    );
}

createBestCards();