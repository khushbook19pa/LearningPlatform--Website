$(document).ready(function() {
  $("#nav").waypoint(function(direction) {
    if (direction == "down") {
      $("#nav").addClass("navFixed");
    } else {
      $("#nav").removeClass("navFixed");
    }
  });
});
var toggleDone = true;
let followUs = document.getElementById("followUs");
let followUsClose = document.getElementsByClassName("followClose")[0];
let techCard = document.getElementsByClassName("techCard")[0];
let techScroll = document.getElementsByClassName("techScroll")[0];
let techScrollUp = document.getElementsByClassName("techScroll")[1];
let webScroll = document.getElementsByClassName("sideScroll")[0];
let webCards = document.getElementsByClassName("webCards")[0];
let androidCards = document.getElementsByClassName("androidCards")[0];
let androidScroll = document.getElementsByClassName("sideScroll2")[0];
let webScrollLeft = document.getElementById("webScrollLeft");
let androidScrollLeft = document.getElementById("androidScrollLeft");
let toggle = document.getElementById("toggle");

followUs.onclick = () => {
  document.getElementsByClassName("followContainer")[0].style.display = "block";
};
followUsClose.onclick = () => {
  document.getElementsByClassName("followContainer")[0].style.display = "none";
};
techScroll.onclick = () => {
  techCard.scrollBy(0, 290);
};
techScrollUp.onclick = () => {
  techCard.scrollBy(0, -290);
};
webScroll.onclick = () => {
  webCards.scrollBy(400, 0);
};
androidScroll.onclick = () => {
  androidCards.scrollBy(400, 0);
};
webScrollLeft.onclick = () => {
  webCards.scrollBy(-350, 0);
};
androidScrollLeft.onclick = () => {
  androidCards.scrollBy(-350, 0);
};
toggle.onclick = () => {
  if (toggleDone) {
    document.getElementById("nav2").style.height = "400px";
    document.getElementById("mobileMenu").style.display = "flex";
    toggleDone = false;
  } else {
    document.getElementById("nav2").style.height = "30px";
    document.getElementById("mobileMenu").style.display = "none";
    toggleDone = true;
  }
};
