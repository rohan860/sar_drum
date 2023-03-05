// document.querySelector("button").addEventListener("click" ,handleclicked);  
// function handleclicked(){
//     alert("I Got clicked")
// }
// also can do 
var numberofDrumButton = document.querySelectorAll(".drum").length;
// for (var i = 0; i < numberofDrumButton; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         // console.log(this.innerHTML);
//         this.style.color = "white";
//     });
// }
// // document.querySelector("h1").innerHTML=numberofDrumButton;
// $0.addEventListener("click", function () {
//     alert("i got Clicked");
//     console.log("i clicked");

// });
// var audio= new audio("sounds/tom-1.mp3");
// // alert("I Got clicked")
// audio.play();
//DETECTING BUTTON PRESS
for (var i = 0; i < numberofDrumButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}
//DETECTING KEYBOARD PRESS
addEventListener("keypress",function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});
function makesound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
        default:

            break;
    }
}
function buttonAnimation(currentKey){
   var activeButton= document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");
   
   setTimeout(function(){
    activeButton.classList.remove("pressed");
   },100)
}