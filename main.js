/* global  document,  Console*/


//the button to pressed for menu to appear
var openMenu = document.getElementById("OpenMenuClick");
var TheMenu = document.getElementById("TheMenu");
var ContainerToDisapp = document.getElementById("container");
var ContactForm = document.getElementById("contact-mailing");




var Aboutcontainer = document.getElementById("About-container-box");

var theMenuButton = document.getElementById("menu-press-button");

var openMenu = document.getElementById("OpenMenuClick");


openMenu.onclick = function () {
    "use strict";
    Disappearing.style.display = "none";
    theMenu.style.display = "block";
    console.log("hello");
    
};
//GoBack.onclick = function (){
//    "use strick";
//    console.log("hello");
//    Disappearing.style.display = "none";    
//}
