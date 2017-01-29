var key = document.getElementById("newKey").value;

document.getElementById("newKey").onchange = function(){
    key = document.getElementById("newKey").value;
    console.log(key);
}


document.getElementsByClassName("one").onclick = function(){
    console.log(key);
    var noteOne = new Audio("sounds/" + key + ".mp3)");
    noteOne.play();
}

$(".one").click(function() {
        var noteTwo = new Audio("sounds/" + key + ".mp3");
        noteTwo.play();
        //$(".one").jump();
});	

$(".two").click(function() {
        var noteTwo = new Audio("sounds/" + (Number(key) + 2) + ".mp3");
        noteTwo.play();
        //$(".two").jump();
});	

$(".three").click(function() {
   var noteThree = new Audio("sounds/" + (Number(key) + 4) + ".mp3");
    noteThree.play();
});

$(".four").click(function() {
    var noteFour = new Audio("sounds/" + (Number(key) + 5) + ".mp3");
    noteFour.play();
});

$(".five").click(function() {
    var noteFive = new Audio("sounds/" + (Number(key) + 7) + ".mp3");
    noteFive.play();
});

$(".six").click(function() {
     var noteSix = new Audio("sounds/" + (Number(key) + 9) + ".mp3");
     noteSix.play();
});

$(".seven").click(function() {
     var noteSeven = new Audio("sounds/" + (Number(key) + 11) + ".mp3");
    noteSeven.play();
});

$(".eight").click(function() {
    var noteEight = new Audio("sounds/" + (Number(key) + 12) + ".mp3");
    noteEight.play();
});

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
            key -= 12;
        break;

        case 38: // up
        console.log("UP CLICKED");
        break;

        case 39: // right
        console.log("RIGHT CLICKED");
        	key += 12;
        break;

        case 40: // down
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
    });

$(document).keyup(function(e) {
 switch(e.which) {
       case 37: // left
           key += 12;
      break;

        case 38: // up
        console.log("UP REMOVED");
        break;

        case 39: // right
        console.log("RIGHT REMOVED");
        	key = -12;
        break;

        case 40: // down
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
