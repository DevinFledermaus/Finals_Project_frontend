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
                container.innerHTML += `<button>${character[1]}</button>`;
                console.log(index);
                index++;
                });
            });
        }
    );
}

createCards();