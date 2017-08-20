/**
 * Created by Julius Alvarado on 8/19/2017.
 */

// super make sure to have a unique name added to global scope
const juliusSpecialGlobalDocspotObject = (function () {
    "use strict";
    let boxes = document.querySelectorAll(".j-box");
    const randomColors = ["red", "blue", "green", "yellow", "purple", "brown", "grey", "orange",
        "forestgreen", "darkgreen", "greenyellow", "cornflowerblue", "dodgerblue",
        "darkblue", "darkslateblue", "cadetblue", "deepskyblue", "aliceblue",
        "indianred", "darkred", "mediumpurple", "rebeccapurple", "coral", "lightcoral"];
    let selectedBoxesArr = [];

    function gridRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function boxManager(box) {
        if (selectedBoxesArr.indexOf(box) < 0) { // box has NOT been selected yet
            selectedBoxesArr.push(box);
            box.innerHTML = '<div class="dscom">2 secs</div>';
            box.style.backgroundColor = randomColors[gridRandom(0, randomColors.length)];

            setTimeout(function(){
                box.innerHTML = '<div class="dscom">1.5 secs</div>';
            }, 500);

            setTimeout(function(){
                box.innerHTML = '<div class="dscom">1.0 sec</div>';
            }, 1000);

            setTimeout(function(){
                box.innerHTML = '<div class="dscom">0.5 secs</div>';
            }, 1500);

            setTimeout(function(){
                box.innerHTML = '<div class="dscom">0.0 secs</div>';
            }, 1900);

            setTimeout(function () {
                selectedBoxesArr[0].innerHTML = '<div class="dscom">docspot.com</div>';
                selectedBoxesArr[0].style.backgroundColor = "#ffffff";
                document.getElementById("j-grid-que").innerHTML = selectedBoxesArr.length-1 + " boxes in Que.";
                selectedBoxesArr.shift();
            }, 2000);
        }
    }

    let bgChangeColor = setInterval(function () {
        let selectedBox = boxes[gridRandom(0, boxes.length)];

        boxManager(selectedBox);

    }, 250);

    let juliusStopChangingBackgroundColor = function () {
        clearInterval(bgChangeColor);
    };

    return {
        juliusStopChangingBackgroundColor: juliusStopChangingBackgroundColor,
        bgChangeColor: bgChangeColor
    }
}());

