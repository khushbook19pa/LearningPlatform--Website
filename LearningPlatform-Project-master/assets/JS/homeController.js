var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(xhttp.responseText);
    techRender(data.techData);
    webRender(data.webData);
    androidRender(data.androidData);
  }
};
xhttp.open("GET", "/assets/resources/data.JSON", true);
xhttp.send();

function techRender(data) {
  let techCard = document.getElementsByClassName("techCard")[0];
  let index = 0;
  for (let i = 0; i < data.count; i++) {
    let techCards = document.createElement("div");
    let sideBar = document.createElement("div");
    let techImg = document.createElement("div");
    let techHeadline = document.createElement("div");
    let techRead = document.createElement("div");

    techRead.setAttribute("class", "techRead");
    techHeadline.setAttribute("class", "techHeadline");
    techImg.setAttribute("class", "techImg");
    sideBar.setAttribute("class", "sideBar");
    techCards.setAttribute("class", "techCards");

    techHeadline.innerHTML = `<span><h4>${data.headline[index]}</h4>${data.text[index]}</span>`;
    techRead.innerHTML = `<span id="techTime">${data.date[index]}</span>
  <div class="techButton">
    <span>Continue...</span>
  </div>`;
    techImg.style.backgroundImage = `url${data.image[index]}`;
    techCards.appendChild(techRead);
    techCards.appendChild(techHeadline);
    techCards.appendChild(techImg);
    techCards.appendChild(sideBar);
    techCard.appendChild(techCards);
    index++;
  }
}

function webRender(data) {
  let index = 0;
  let webCards = document.getElementsByClassName("webCards")[0];
  for (let i = 0; i < data.count; i++) {
    let card = document.createElement("div");
    card.innerHTML = `
    <div class="cardHeading"><span>${data.section[index]}</span></div>
    <div class="cardImg"><img src="${data.img[index]}"></div>
    <div class="cardHeadLine"><span>${data.heading[index]}</span></div>
    <div class="cardBody"><span>${data.body[index]}</span></div>
    <div class="cardButton"><span>Read More</span></div>
  `;
    card.setAttribute("class", "card");
    webCards.appendChild(card);
    index++;
  }
}

function androidRender(data) {
  let index = 0;
  for (let i = 0; i < data.count; i++) {
    let androidCards = document.getElementsByClassName("androidCards")[0];
    let card = document.createElement("div");
    card.innerHTML = `
    <div class="cardHeading"><span>${data.section[index]}</span></div>
    <div class="cardImg"><img src="${data.img[index]}"></div>
    <div class="cardHeadLine"><span>${data.heading[index]}</span></div>
    <div class="cardBody"><span>${data.body[index]}</span></div>
    <div class="cardButton"><span>Read More</span></div>
  `;
    card.setAttribute("class", "card androidCardBg");
    androidCards.appendChild(card);
    index++;
  }
}
