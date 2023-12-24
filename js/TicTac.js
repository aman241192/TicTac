let tictac = document.querySelectorAll(".tictac");
let block1 = document.querySelectorAll(".block1");
let result = document.querySelectorAll(".result");
let turn = document.querySelectorAll(".turn");

let value_00 = document.querySelector("#value_00")
let value_01 = document.querySelector("#value_01")
let value_02 = document.querySelector("#value_02")
let value_10 = document.querySelector("#value_10")
let value_11 = document.querySelector("#value_11")
let value_12 = document.querySelector("#value_12")
let value_20 = document.querySelector("#value_20")
let value_21 = document.querySelector("#value_21")
let value_22 = document.querySelector("#value_22")

let xo = 1;
let countX = 0;
let countO = 0;


for (const blocks of block1) {
    blocks.addEventListener("click", handle);
}

function handle(e) {
    if (e.target.innerText == "") {
        if (xo % 2 == 0) {
            for (const turns of turn) {
                turns.innerHTML = "It's X's turn";
            }
            let value = e.target.innerText = "O";
            xo++;
            tictacValue(value);
        }

        else {
            for (const turns of turn) {
                turns.innerHTML = "It's O's turn";
            }
            let value = e.target.innerText = "X";
            xo++;
            tictacValue(value);
        }
    }

}


function tictacValue(index) {

    if (value_00.innerText == "O" && value_01.innerText == "O" && value_02.innerText == "O") {
        countO++;
    }
    else if (value_00.innerText == "O" && value_01.innerText == "O" && value_02.innerText == "O") {
        countO++;
    }
    else if (value_00.innerText == "O" && value_01.innerText == "O" && value_02.innerText == "O") {
        countO++;
    }
    else if (value_00.innerText == "O" && value_10.innerText == "O" && value_20.innerText == "O") {
        countO++;
    }
    else if (value_02.innerText == "O" && value_12.innerText == "O" && value_22.innerText == "O") {
        countO++;
    }
    else if (value_20.innerText == "O" && value_11.innerText == "O" && value_02.innerText == "O") {
        countO++;
    }
    else if (value_10.innerText == "O" && value_11.innerText == "O" && value_12.innerText == "O") {
        countO++;
    }
    else if (value_20.innerText == "O" && value_21.innerText == "O" && value_22.innerText == "O") {
        countO++;
    }
    else if (value_01.innerText == "O" && value_11.innerText == "O" && value_21.innerText == "O") {
        countO++;
    }
    else if (value_00.innerText == "O" && value_11.innerText == "O" && value_22.innerText == "O") {
        countO++;
    }

    
    /************for X ************      agar else me X ko liya to contX ki value 1 ho jai gi fir removeEventListener  lag jai ga                 **************** */           

    if (value_00.innerText == "X" && value_01.innerText == "X" && value_02.innerText == "X") {
        countX++;
    }
    if (value_00.innerText == "X" && value_10.innerText == "X" && value_20.innerText == "X") {
        countX++;
    }
    if (value_02.innerText == "X" && value_12.innerText == "X" && value_22.innerText == "X") {
        countX++;
    }
    if (value_20.innerText == "X" && value_11.innerText == "X" && value_02.innerText == "X") {
        countX++;
    }
    if (value_10.innerText == "X" && value_11.innerText == "X" && value_12.innerText == "X") {
        countX++;
    }
    if (value_20.innerText == "X" && value_21.innerText == "X" && value_22.innerText == "X") {
        countX++;
    }
    if (value_01.innerText == "X" && value_11.innerText == "X" && value_21.innerText == "X") {
        countX++;
    }
    if (value_00.innerText == "X" && value_11.innerText == "X" && value_22.innerText == "X") {
        countX++;
    }
    if (value_00.innerText == "X" && value_01.innerText == "X" && value_02.innerText == "X") {
        countX++;
    }
    if (value_02.innerText == "X" && value_11.innerText == "X" && value_20.innerText == "X") {
        countX++;
    }

    winner(countX, countO);
}


function winner(countX, countO) {
    if (countO >= 1 && countX == 0) {
        for (const results of result) {
            results.innerHTML = `Winnier is O`;
        }

        for (const blocks of block1) {
            blocks.removeEventListener("click", handle);
        }

        for (const turns of turn) {
            turns.innerHTML = "Congratulations";
        }
    }
    if (countX >= 1 && countO == 0) {
        for (const results of result) {
            results.innerHTML = `Winnier is X`;
        }

        for (const blocks of block1) {
            blocks.removeEventListener("click", handle);
        }

        for (const turns of turn) {
            turns.innerHTML = "Congratulations";
        }
    }
    if (countX == 0 && countO == 0) {
        for (const results of result) {
            results.innerHTML = `It's a Tie`;
            break;
        }
    }
}
