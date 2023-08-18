// function to write rectangle in the page
var container = document.querySelector(".container");
var maxRectangle = 1;
var rectangleOffset;
var selectedRectangle;


// function to create a div and append to container
function createRectangle() {
    var rectangle = document.createElement("div");
    rectangle.classList.add("rectangle");
    container.appendChild(rectangle);
    
    var minTop = 50;
    var maxTop = window.innerHeight;

    var minLeft = 50;
    var maxLeft = window.innerWidth;

    var minSize = 150;
    var maxSize = 300;

    var rectWidth = getSize(minSize, maxSize);
    var rectHeight = getSize(minSize, maxSize);

    rectangle.style.width = rectWidth +  "px";
    rectangle.style.height = rectHeight +  "px";
    rectangle.style.backgroundColor = getRGB();

    var top = getDistance(minTop, maxTop, rectHeight);
    var left = getDistance(minLeft, maxLeft, rectWidth);

    // Set the top and left properties of the square element
    rectangle.style.top = top + "px";
    rectangle.style.left = left + "px";

}

//createRectangle();

function drawRectangle(num){
    for(current = 0; current < num; current++) {
        createRectangle();
    }
}

drawRectangle(maxRectangle);

function getRectangles() {
    return [...document.getElementsByClassName("rectangle")];
}

function addRectangleListeners() {
    var rectangles = getRectangles();
    
    rectangles.forEach(rectangle => {
        rectangle.addEventListener("mousedown", dragStart);
    });

    document.addEventListener("mousemove", dragMove);
    document.addEventListener("mouseup", dragEnd);
}

addRectangleListeners();

function getDistance (min, max, size){
    var maxAccepted = max - min - size;
    var randomMax = Math.random() * (maxAccepted - min) + min;
    return Math.round(randomMax);
}

function getSize(min, max){
    var randomMax = Math.random() * (max - min) + min;
    return Math.round(randomMax);
}

function getRGB() {

    function getRGBnum() {
        return Math.round(Math.random() * 255);
    }

    return "rgb(" + getRGBnum() + "," + getRGBnum() + "," + getRGBnum() + ")";
}

function dragStart(event)　{
    if (rectangleOffset) return;

    rectangleOffset = {};
    rectangleOffset.x = event.clientX - parseInt(event.target.style.left);
    rectangleOffset.y = event.clientY - parseInt(event.target.style.top);

    selectedRectangle = event.target;
}

function dragMove(event) {
    if (!rectangleOffset) return;
    
    selectedRectangle.style.left = event.clientX + "px";
    selectedRectangle.style.top = event.clientY + "px";
}

function dragEnd() {
    rectangleOffset = undefined;
    selectedRectangle = undefined;
}



//230512HW make rectangle position max to 50 pixel from RIGHT not left.think
//230512HW make getSize function to random rectangle size with 150 300 (width and height) DO IT.

//230609HW make rectangle show different color everytime.manipulate the color code.
//230609HW draw 5 rectangles at the same time. stacking is okay.

//230616HW research how to make rectangle onclick and drag pointer event
//230616HW 10 min speach how to move the rectangles and possible problems may occur

//230622HW Read about data types on javascript!! 
//230622HW How do I make dragmove no extra global valuable. use the global var already there.










// 0 - 500 but from 100.

//Similar to 0 to 300


// <--- "defer" does this job so don't need--->
// window.onload = (event) => {
//     createRectangle();
// }


// display rectangle randomely position-wise everytime refresh the page
// read about window object and document
// difference between queryselector and getElementsbyClassname

// function randomPosition() {
//     // Generate random values for top and left properties
//     var top = Math.floor(Math.random() * window.innerHeight);
//     var left = Math.floor(Math.random() * window.innerWidth);

//     // Set the top and left properties of the square element
//     rectangle.style.top = topValue + "px";
//     rectangle.style.left = leftValue + "px";
// }









