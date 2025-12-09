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
    trackOPositions();
    trackXPosition();
    gameResult(trackOPositions, trackXPosition);
}

// The idea is that we need to track the position of the x or o using a formula of: 
//  0 1 2
//  3 4 5 
//  6 7 8 

// ! Track indexes not elemets, store the indexx in the new generated array, that would be way easier to do when tracking who won
// !So eventually, move toward:

// “Does my X array contain 0,1,2?”
// instead of
// “Does my X array contain the DOM nodes representing boxes 0,1,2?”


// use this function in foreach loop for the node list 
function trackXPosition() {
    let xPositions = [];
    // console.log(boxes);
    // check the textContent of that container if it's x than get all x positions
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].textContent === 'x') {
                xPositions.push(i);
            }
        }
        console.log(xPositions);
        return xPositions;
}

function trackOPositions() {
    let oPositions = [];
    // console.log(boxes);
    // check the textContent of that container if it's x than get all x positions
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].textContent === 'o') {
                oPositions.push(i);
            }
        }
        console.log(oPositions);
        return oPositions;
}

function gameResult(trackXPosition, trackOPositions) {
    const oS = trackOPositions();
    const xS = trackXPosition();

    // All possible winning combos
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Check O positions
    for (const combo of winningCombos) {
        if (combo.every(num => oS.includes(num))) {
            console.log('O wins');
            return;
        }
    }

    // Check X positions
    for (const combo of winningCombos) {
        if (combo.every(num => xS.includes(num))) {
            console.log('X wins');
            return;
        }
    }
}


