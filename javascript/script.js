function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


var images = ["img/BG1.jpg","img/BG2.jpg","img/BG4.jpg", "img/BG5.jpg","img/BG6.jpg"]

function changeImg(i) {
  document.getElementById("imgBgChange").src = images[i];

}

function changeImgDefault() {
  document.getElementById("imgBgChange").src = 'img/nav-bg.jpg';
}