/**
 * Created by Julius Alvarado on 8/19/2017.
 */

// super make sure to have a unique name added to global scope
const juliusSpecialGlobalDocspotObject = (function () {
    "use strict";

    const randomColors = ["red","blue","green", "yellow", "purple", "brown", "grey", "orange",
        "forestgreen", "darkgreen", "greenyellow", "cornflowerblue", "dodgerblue", "cadeblue",
        "indianred", "darkred", "mediumpurple", "rebeccapurple", "coral", "lightcoral"];

    function gridRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    let bgChangeColor = setInterval(function () {
        let boxes = document.querySelectorAll(".j-box");
        boxes[gridRandom(0, boxes.length)].style.backgroundColor = randomColors[gridRandom(0, randomColors.length)];
    }, 250);

    let juliusStopChangingBackgroundColor = function () {
        clearInterval(bgChangeColor);
    };

    return {
        juliusStopChangingBackgroundColor: juliusStopChangingBackgroundColor
    }
}());

