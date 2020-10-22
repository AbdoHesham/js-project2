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
var side= document.querySelector("#side");
var imgLogo=document.querySelector("#imgLogo");

function openModal() {
  console.log(localStorage );
  setTimeout(function () {
    if (!localStorage.getItem("email","password")) {
      nav.style.display="none";
      side.style.display="none";
      imgLogo.style.display="none";
      modal.style.display = "block";
      
    } else {
      
      console.log(localStorage );
    }
  }, 3000);

}

function close() {
  nav.style.display="block";
  side.style.display="block";
  imgLogo.style.display="block";
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

