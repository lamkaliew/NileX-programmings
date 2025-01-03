/* global  document,  Console*/


//the button to pressed for menu to appear
var OpenMenu = document.getElementById("OpenMenuClick");
var TheMenu = document.getElementById("TheMenu");
var ContainerToDisapp = document.getElementById("container");
var ContactForm = document.getElementById("contact-mailing");
var AboutContainer = document.getElementById("About-container-box");
console.log(OpenMenu);
OpenMenu.onclick = function () {
    "use strict";
    
        ContainerToDisapp.style.display = "none";
        OpenMenu.style.display = "none";
        TheMenu.style.display = "block";
        console.log("what is the problem second scenario");
};
