function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
   
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {     
        if(document.getElementById("myDropdown").classList.contains("show")){
          document.getElementById("myDropdown").classList.remove("show");
        }      
    }
}

// Работает
//window.onclick = function(event) {
//  if (!event.target.matches('.dropbtn')) {
//
//    var dropdowns = document.getElementsByClassName("dropdown-content");
//    var i;
//    for (i = 0; i < dropdowns.length; i++) {
//      var openDropdown = dropdowns[i];
//      if (openDropdown.classList.contains('show')) {
//        openDropdown.classList.remove('show');
//      }
//    }
//  }
//}

