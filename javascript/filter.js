function dcCards() {
    let container = document.querySelector(".cards");

    fetch("https://safe-stream-00881.herokuapp.com/view-all/").then(
        (request) => {
            request.json().then((obj) => {
            //   console.log(obj);
              data = obj.data;
            //   console.log(data);
              let filtered = data.filter(e => {
                  return e[4] == "DC Comics";
              })
              console.log(filtered);
              container.innerHTML = ``;
              let index = 0;
              filtered.forEach((comic) => {
                container.innerHTML += `<div class="card">
                <div class="title">
                    <h2> ${comic[1]}</h2>
                </div>
                <div class="rest">
                    <div class="comic-buttons">
                        <button onclick="viewComic(${comic[0]})" class="viewbtn-${comic[0]}">View</button>
                        <button onclick="addToCart(${comic[0]})" class="AtCbtn-${comic[0]}">Add to cart</button>
                        <button onclick="editComic(${comic[0]})" class="editbtn btn-${comic[0]}">Edit Comic Details</button>
                        <button onclick="dltComic(${comic[0]})" class="dltbtn btn-${comic[0]}">Delete Comic</button>
                    </div>
                    <h4>R ${comic[3]}.00</h4>
                </div>
           </div>`;
                // console.log(index);
                index++;
                });
            });
        }
    );
}

dcCards();


function marvelCards() {
    let container = document.querySelector(".cards");

    fetch("https://safe-stream-00881.herokuapp.com/view-all/").then(
        (request) => {
            request.json().then((obj) => {
            //   console.log(obj);
              data = obj.data;
            //   console.log(data);
              let filtered = data.filter(e => {
                return e[4] == "Marvel Comics";
              })
              console.log(filtered);
              container.innerHTML = ``;
              let index = 0;
              filtered.forEach((comic) => {
                container.innerHTML += `<div class="card">
                <div class="title">
                    <h2> ${comic[1]}</h2>
                </div>
                <div class="rest">
                    <div class="comic-buttons">
                        <button onclick="viewComic(${comic[0]})" class="viewbtn-${comic[0]}">View</button>
                        <button onclick="addToCart(${comic[0]})" class="AtCbtn-${comic[0]}">Add to cart</button>
                        <button onclick="editComic(${comic[0]})" class="editbtn btn-${comic[0]}">Edit Comic Details</button>
                        <button onclick="dltComic(${comic[0]})" class="dltbtn btn-${comic[0]}">Delete Comic</button>
                    </div>
                    <h4>R ${comic[3]}.00</h4>
                </div>
           </div>`;
                // console.log(index);
                index++;
                });
            });
        }
    );
}

marvelCards();


function vertigoCards() {
    let container = document.querySelector(".cards");

    fetch("https://safe-stream-00881.herokuapp.com/view-all/").then(
        (request) => {
            request.json().then((obj) => {
            //   console.log(obj);
              data = obj.data;
            //   console.log(data);
              let filtered = data.filter(e => {
                return e[4] == "Vertigo Comics";
              })
              console.log(filtered);
              container.innerHTML = ``;
              let index = 0;
              filtered.forEach((comic) => {
                container.innerHTML += `<div class="card">
                <div class="title">
                    <h2> ${comic[1]}</h2>
                </div>
                <div class="rest">
                    <div class="comic-buttons">
                        <button onclick="viewComic(${comic[0]})" class="viewbtn-${comic[0]}">View</button>
                        <button onclick="addToCart(${comic[0]})" class="AtCbtn-${comic[0]}">Add to cart</button>
                        <button onclick="editComic(${comic[0]})" class="editbtn btn-${comic[0]}">Edit Comic Details</button>
                        <button onclick="dltComic(${comic[0]})" class="dltbtn btn-${comic[0]}">Delete Comic</button>
                    </div>
                    <h4>R ${comic[3]}.00</h4>
                </div>
           </div>`;
                // console.log(index);
                index++;
                });
            });
        }
    );
}

vertigoCards();


function modCards() {
    let container = document.querySelector(".cards");

    fetch("https://safe-stream-00881.herokuapp.com/view-all/").then(
        (request) => {
            request.json().then((obj) => {
            //   console.log(obj);
              data = obj.data;
            //   console.log(data);
              let filtered = data.filter(e => {
                return e[5] == "Modern Age";
              })
              console.log(filtered);
              container.innerHTML = ``;
              let index = 0;
              filtered.forEach((comic) => {
                container.innerHTML += `<div class="card">
                <div class="title">
                    <h2> ${comic[1]}</h2>
                </div>
                <div class="rest">
                    <div class="comic-buttons">
                        <button onclick="viewComic(${comic[0]})" class="viewbtn-${comic[0]}">View</button>
                        <button onclick="addToCart(${comic[0]})" class="AtCbtn-${comic[0]}">Add to cart</button>
                        <button onclick="editComic(${comic[0]})" class="editbtn btn-${comic[0]}">Edit Comic Details</button>
                        <button onclick="dltComic(${comic[0]})" class="dltbtn btn-${comic[0]}">Delete Comic</button>
                    </div>
                    <h4>R ${comic[3]}.00</h4>
                </div>
           </div>`;
                // console.log(index);
                index++;
                });
            });
        }
    );
}

modCards();


function brnCards() {
    let container = document.querySelector(".cards");

    fetch("https://safe-stream-00881.herokuapp.com/view-all/").then(
        (request) => {
            request.json().then((obj) => {
            //   console.log(obj);
              data = obj.data;
            //   console.log(data);
              let filtered = data.filter(e => {
                return e[5] == "Bronze Age";
              })
              console.log(filtered);
              container.innerHTML = ``;
              let index = 0;
              filtered.forEach((comic) => {
                container.innerHTML += `<div class="card">
                <div class="title">
                    <h2> ${comic[1]}</h2>
                </div>
                <div class="rest">
                    <div class="comic-buttons">
                        <button onclick="viewComic(${comic[0]})" class="viewbtn-${comic[0]}">View</button>
                        <button onclick="addToCart(${comic[0]})" class="AtCbtn-${comic[0]}">Add to cart</button>
                        <button onclick="editComic(${comic[0]})" class="editbtn btn-${comic[0]}">Edit Comic Details</button>
                        <button onclick="dltComic(${comic[0]})" class="dltbtn btn-${comic[0]}">Delete Comic</button>
                    </div>
                    <h4>R ${comic[3]}.00</h4>
                </div>
           </div>`;
                // console.log(index);
                index++;
                });
            });
        }
    );
}

brnCards();


function ascCards() {
    let container = document.querySelector(".cards");

    fetch("https://safe-stream-00881.herokuapp.com/view-all/").then(
        (request) => {
            request.json().then((obj) => {
            //   console.log(obj);
              data = obj.data;
            //   console.log(data);
            let filtered = data.sort((a, b) => {
              return a[3] - b[3];
            })
              console.log(filtered);
              container.innerHTML = ``;
              let index = 0;
              filtered.forEach((comic) => {
                container.innerHTML += `<div class="card">
                <div class="title">
                    <h2> ${comic[1]}</h2>
                </div>
                <div class="rest">
                    <div class="comic-buttons">
                        <button onclick="viewComic(${comic[0]})" class="viewbtn-${comic[0]}">View</button>
                        <button onclick="addToCart(${comic[0]})" class="AtCbtn-${comic[0]}">Add to cart</button>
                        <button onclick="editComic(${comic[0]})" class="editbtn btn-${comic[0]}">Edit Comic Details</button>
                        <button onclick="dltComic(${comic[0]})" class="dltbtn btn-${comic[0]}">Delete Comic</button>
                    </div>
                    <h4>R ${comic[3]}.00</h4>
                </div>
           </div>`;
                // console.log(index);
                index++;
                });
            });
        }
    );
}

ascCards();


function desCards() {
    let container = document.querySelector(".cards");

    fetch("https://safe-stream-00881.herokuapp.com/view-all/").then(
        (request) => {
            request.json().then((obj) => {
            //   console.log(obj);
              data = obj.data;
            //   console.log(data);
              let filtered = data.sort((a, b) => {
                return b[3] - a[3];
              })
              console.log("blah", filtered);
              container.innerHTML = ``;
              let index = 0;
              filtered.forEach((comic) => {
                container.innerHTML += `<div class="card">
                <div class="title">
                    <h2> ${comic[1]}</h2>
                </div>
                <div class="rest">
                    <div class="comic-buttons">
                        <button onclick="viewComic(${comic[0]})" class="viewbtn-${comic[0]}">View</button>
                        <button onclick="addToCart(${comic[0]})" class="AtCbtn-${comic[0]}">Add to cart</button>
                        <button onclick="editComic(${comic[0]})" class="editbtn btn-${comic[0]}">Edit Comic Details</button>
                        <button onclick="dltComic(${comic[0]})" class="dltbtn btn-${comic[0]}">Delete Comic</button>
                    </div>
                    <h4>R ${comic[3]}.00</h4>
                </div>
           </div>`;
                // console.log(index);
                index++;
                });
            });
        }
    );
}

desCards();

function resetCards() {
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
                    <div class="comic-buttons">
                        <button onclick="viewComic(${comic[0]})" class="viewbtn-${comic[0]}">View</button>
                        <button onclick="addToCart(${comic[0]})" class="AtCbtn-${comic[0]}">Add to cart</button>
                        <button onclick="editComic(${comic[0]})" class="editbtn btn-${comic[0]}">Edit Comic Details</button>
                        <button onclick="dltComic(${comic[0]})" class="dltbtn btn-${comic[0]}">Delete Comic</button>
                    </div>
                    <h4>R ${comic[3]}.00</h4>
                </div>
           </div>`;
              console.log(index);
              index++;
              });
          });
      }
  );
}

resetCards();

function toggleFilter(index) {
  // console.log(index);
  document.querySelectorAll(`.hidden-${index}`).forEach((hidden) => {
    hidden.classList.toggle("show")
  })
}