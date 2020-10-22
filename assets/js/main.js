function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
openModal();

function saveToLocal(e) {
  var email = document.getElementById("email").value;
  var passWord = document.getElementById("password").value;
  if (email != "" && passWord != "") {
    // Check browser support
    if (typeof (Storage) !== "undefined") {
      // Store
      localStorage.setItem("email", email);
      localStorage.setItem("password", passWord);
      // Retrieve
      document.getElementById("result").innerHTML = localStorage.getItem("email", "password");
      allertSuc();
      close();

    } else {
      allertErr();
    }

  } else {
    allertErr();
  }
  e.preventDefault();
}
var modal = document.getElementById("myModal");
var nav = document.querySelector(".nav");
var side = document.querySelector("#side");
var imgLogo = document.querySelector("#imgLogo");

function openModal() {
  console.log(localStorage);
  setTimeout(function () {
    if (!localStorage.getItem("email", "password")) {
      nav.style.display = "none";
      side.style.display = "none";
      imgLogo.style.display = "none";
      modal.style.display = "block";

    } else {

      console.log(localStorage);
    }
  }, 3000);

}

function close() {
  nav.style.display = "block";
  side.style.display = "block";
  imgLogo.style.display = "block";
  modal.style.display = "none";
}



// allert success
function allertSuc() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
// allert error
function allertErr() {
  var x = document.getElementById("snackbar-2");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

/////////////////////////////// slider/////////////////////////////////////////
var imgs = ["https://images.pexels.com/photos/1432066/pexels-photo-1432066.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
  "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  "https://images.pexels.com/photos/142497/pexels-photo-142497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 
  "https://images.pexels.com/photos/1188849/pexels-photo-1188849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
];

document.onkeydown = function (event) {
  var e = event || window.event;
  if (e.keyCode == '37') { //LEFT
    changeImage(-1);
  } else if (e.keyCode == '39') { //RIGHT
    changeImage(1);
  }
}

function changeImage(dir) {
  var img = document.getElementById("imgClickAndChange");
  img.src = imgs[imgs.indexOf(img.src) + dir] || imgs[(dir == 1) ? 0 : imgs.length - 1];
}