console.log('js loaded');
const container = document.querySelector('.container');
const boxes = document.querySelectorAll('.box');

let isX = true; // ! Should be Global, so the event listener wil noe reset it again


// console.log(container);
// console.log(boxes);

container.addEventListener('click',assignBox);


function assignBox(e) {
    if (isX) {
        e.target.textContent = 'x';
        isX = false;
    } else{
        e.target.textContent = 'o';
        isX = true;
    }
    // console.log(e.target);
}

// The idea is that we need to track the position of the x or o using a formula of: 
//  0 1 2
//  3 4 5 
//  6 7 8 


// use this function in foreach loop for the node list 
function trackXPosition() {
    console.log('trackPosiitons()');
    let xPositions = [];
    console.log(boxes);
    // check the textContent of that container if it's x than get all x positions
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].textContent === 'x') {
                xPositions.push(boxes[i]);
            }
        }
        console.log(xPositions);
        return xPositions;
}

function trackOPositions() {
    console.log('trackPosiitons()');
    let oPositions = [];
    console.log(boxes);
    // check the textContent of that container if it's x than get all x positions
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].textContent === 'o') {
                oPositions.push(boxes[i]);
            }
        }
        console.log(oPositions);
        return oPositions;
}