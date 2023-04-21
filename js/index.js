
window.onload = function() {
  document.getElementById('buttons').style.display = "block";
}

// Manejo de tabs
function openTab(evt, idSection) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab__content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("btn__tab");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(idSection).style.display = "block";
    evt.currentTarget.className += " active";
}