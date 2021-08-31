// Fetching products from database and then displaying them

function createCards() {
    let container = document.querySelector(".hero");

    fetch("https://safe-stream-00881.herokuapp.com/view-characters/").then(
        (request) => {
            request.json().then((obj) => {
              console.log(obj);
              data = obj.data;
              console.log(data);
              container.innerHTML = ``;
              let index = 0;
              data.forEach((character) => {
                container.innerHTML += `<button class="btn" onclick="getCharacterInfo('${character[0]}')">${character[1]}</button>`;
                console.log(index);
                index++;
                });
            });
        }
    );
}

createCards();

function getCharacterInfo(index) {
    console.log(index);
    let character_div = document.querySelector(".character-details");
    character_div.classList.toggle("show")
    character_div.innerHTML = ``;

    if(index !== -1){
        fetch("https://safe-stream-00881.herokuapp.com/view-characters/").then(
            (request) => {
                request.json().then((obj) => {
                    data = obj.data;
                    data.forEach((character) => {
                        if(character[0] == index) {
                            character_div.innerHTML += `<h1 class="name">${character[1]}</h1> <h2 class="alias">${character[2]}</h2> <h3 class="debut">${character[3]}</h3> <h3 class="species">${character[4]}</h3> <h3 class="universe">${character[5]}</h3> <h3 class="powers-abilites">${character[6]}</h3> <h5 class="quote">${character[7]}</h5> <p class="description">${character[8]}</p>`;
                            console.log(character)
                            }
                        });
                    character_div.innerHTML += `<button onclick="getCharacterInfo(-1)">X</button>`
                });
            }
        );
    }

}