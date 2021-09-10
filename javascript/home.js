// Fetching products from database and then displaying them

function createLimitedCards() {
    let container = document.querySelector(".limited");
    console.log("Hello");
    fetch("https://safe-stream-00881.herokuapp.com/view-all/")
    .then(res => res.json())
    .then((obj) => {
            console.log("Hello there")
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
                    <button onclick="viewComic(${comic[0]})" class="viewbtn-${comic[0]}">View</button>
                </div>
           </div>`;
                console.log(index);
                index++;
                });
            });
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
                    <button onclick="viewComic(${comic[0]})" class="viewbtn-${comic[0]}">View</button>
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

// modal

function viewComic(index) {
    console.log(index)
    let comic_div = document.querySelector(".mod-content");
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
                    <button onclick="viewComic(-1)">X</button>
                    <h1 class="title">${comic[1]}</h1>
                    <h2 class="universe">${comic[4]}</h2>
                    <h4 class="era">${comic[5]}</h4>
                    <p class="description">${comic[2]}</p>
                    <h4 class="price">R${comic[3]}</h4>`;
                }
            });
        });
    }
}