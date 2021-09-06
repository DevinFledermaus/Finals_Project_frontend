let cart = [];
console.log("hew", window.localStorage.getItem("username"))


// Adding to cart

function addToCart(index){
    cart.push(index);
    let add_btn = document.querySelector(`.AtCbtn-${index}`);
    add_btn.style.display = "none";
    alert("Comic moved to cart. Open cart to adjust quantity.");
    populateCart();
}

function viewCart(){
    document.querySelector(".cart").classList.toggle("active");
}


function editComic(){   
    console.log("he", window.localStorage.getItem("username"))
    if (window.localStorage.getItem("username") === null){
        let edit_btn = document.querySelectorall(`.btn`)
        edit_btn.forEach((btn) => {
            btn.style.display = "none";
        })
        // edit_btn.style.display = "none";
    };
    

}
editComic();

function dltComic(){

}

// Fetching products from database and then displaying them

function createCards() {
    let container = document.querySelector(".cards");

    fetch("https://safe-stream-00881.herokuapp.com/view-all/").then(
        (request) => {
            request.json().then((obj) => {
              console.log(obj);
              data = obj.data;
              console.log(data);
              container.innerHTML = ``;
              let index = 0;
              data.forEach((comic) => {
                container.innerHTML += `<div class="card">
               <div class="card-info">
               <h2> ${comic[1]}</h2>
               <h4>R ${comic[3]}.00</h4>
               </div>
               <button onclick="addToCart(${comic[0]})" class="AtCbtn-${comic[0]}">Add to cart</button>
               <button onclick="editComic(${comic[0]})" class="editbtn btn-${comic[0]}">Edit Comic Details</button>
               <button onclick="dltComic(${comic[0]})" class="dltbtn btn-${comic[0]}">Delete Comic</button>
           </div>`;
                console.log(index);
                index++;
                });
            });
            editComic();
        }
    );
}

createCards();