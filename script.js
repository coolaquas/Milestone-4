function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.background = "radial-gradient(#2598a7, rgb(23, 20, 98))";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.background = "radial-gradient(rgb(233, 53, 92), rgb(56, 2, 2))";
}



function about() {
  var modal = document.getElementById("aboutModal");
  var span = document.getElementsByClassName("close")[0];
  
  modal.style.display = "block";
  span.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  }


function team(){
    var modal = document.getElementById("teamModal");
    var span = document.getElementsByClassName("close")[1];
    
    modal.style.display = "block";
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

function Rummy(){
    window.location.assign("./Rummy/index.html");
}

function Mixormatch(){
  window.location.assign("./Mixormatch/index.html");
}