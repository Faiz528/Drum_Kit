
var numberOfDrum = document.querySelectorAll(".drum").length;

for(var i =0; i<numberOfDrum ; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var drumButton = this.innerHTML;
    happen(drumButton);
    buttonAnimation(drumButton);

  });
}
document.addEventListener("keypress", function(event){
   happen(event.key);
   buttonAnimation(event.key);
});

function happen(key){

  switch(key){

    case "l":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play()
    break;

    case "w":
    var crash = new Audio("sounds/crash.mp3");
    crash.play()
    break;

    case "a":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;

    case "s":
    var snare = new Audio("sounds/snare.mp3");
    snare.play()
    break;

    case "d":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play()
    break;

    case "j":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play()
    break;

    case "k":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play()
    break;

    default:
    console.log("sorry");
  }
}

function buttonAnimation(key){

  var effect = document.querySelector("."+key);
  effect.classList.add("pressed");

    setTimeout(function(){

      effect.classList.remove("pressed");
    },100);// 100 denotes the time after which it returns to its original form.

}















//var sound = new Audio("sounds/crash.mp3");
//sound.play();
