let cart = [];
console.log("hew", window.localStorage.getItem("username"))


// Adding to cart

function addToCart(index){
    cart.push(index);
    let add_btn = document.querySelector(`.AtCbtn-${index}`);
    add_btn.style.display = "none";
    alert("Comic moved to cart, Luckily we still had one in stock.");
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
                <div class="title">
                    <h2> ${comic[1]}</h2>
                </div>
                <div class="rest">
                    <h4>R ${comic[3]}.00</h4>
                    <div class="buttons">
                        <button onclick="viewComic(${comic[0]})" class="viewbtn-${comic[0]}">View</button>
                        <button onclick="addToCart(${comic[0]})" class="AtCbtn-${comic[0]}">Add to cart</button>
                        <button onclick="editComic(${comic[0]})" class="editbtn btn-${comic[0]}">Edit Comic Details</button>
                        <button onclick="dltComic(${comic[0]})" class="dltbtn btn-${comic[0]}">Delete Comic</button>
                    </div>
                </div>
           </div>`;
                console.log(index);
                index++;
                });
            });
        }
    );
}

createCards();

// modal

function viewComic(index) {
    console.log(index)
    let comic_div = document.querySelector(".comic-details");
    comic_div.classList.toggle("show")
    comic_div.innerHTML = ``;
    actModal()

    if(index !== -1){
        fetch("https://safe-stream-00881.herokuapp.com/view-all/")
        .then((request) => request.json())
        .then((obj) => {
            data = obj.data;
            data.forEach((comic) => {
                if(comic[0] == index) {
                    comic_div.innerHTML += `
                    <h1 class="title">${comic[1]}</h1>
                    <h2 class="universe">${comic[4]}</h2>
                    <h4 class="era">${comic[5]}</h4>
                    <p class="description">${comic[2]}</p>
                    <h4 class="price">R${comic[3]}</h4>`;
                    console.log("wahhh", comic)
                }
            });
            comic_div.innerHTML += `<button onclick="viewComic(-1)">X</button>`
        });
    }
}