function filterCards() {
    let container = document.querySelector(".cards");

    fetch("https://safe-stream-00881.herokuapp.com/view-all/").then(
        (request) => {
            request.json().then((obj) => {
              console.log(obj);
              data = obj.data;
              console.log(data);
              let filtered = data.filter(function (e){
                  return e.data[3] == 300;
              });
              console.log(filtered);
              container.innerHTML = ``;
              let index = 0;
              data.forEach((comic) => {
                container.innerHTML += `<div class="card">
               <h2> ${comic[1]}</h2>
               <h4>R ${comic[3]}.00</h4>
               <button onclick="addToCart(${comic[0]})" class="AtCbtn-${comic[0]}">Add to cart</button>
               <button onclick="editComic(${comic[0]})" class="editbtn-${comic[0]}">Edit Comic Details</button>
               <button onclick="dltComic(${comic[0]})" class="dltbtn-${comic[0]}">Delete Comic</button>
           </div>`;
                console.log(index);
                index++;
                });
            });
        }
    );
}

filterCards();