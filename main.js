/* global  document, console*/
//
var theMenu = document.getElementById("dropDownMenu");
var Disappearing = document.getElementById("disappear");
var openMenu = document.getElementById("drop-down-menu");


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
