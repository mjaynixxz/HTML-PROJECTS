//Variable declaration for calculator buttons

let btnAc = document.getElementById('btn-ac');
let btnDel = document.getElementById('btn-del');
let btnDecimal = document.getElementById('btn-decimal');
let delBtn = document.getElementById('btn-del');
let displayZero = document.getElementById('disp-zero');
let numberBtns = document.getElementsByClassName('calc-btns-num');
let operatorBtns = document.getElementsByClassName('calc-btns-operator');

let valueDisplayed = "0";
let pendingVal;
let evalArray=[];




/*
    Function definition
*/

//Update display function
const updateDisplay = (e) => {

    if (evalArray.length == 18) {
        lengthOfisplay();
    } else{
    let btnClicked = e.target.innerText;
    if (valueDisplayed === "0") 
        valueDisplayed = '';

    valueDisplayed += btnClicked;
    displayZero.innerText = valueDisplayed;
}
}

const performMath = (e) => {
   let arithOp =  e.target.innerText;

   switch (arithOp) {
       case "+":
                pendingVal = valueDisplayed;
                valueDisplayed = "0";
                displayZero.innerHTML = valueDisplayed;
                evalArray.push(pendingVal);
                evalArray.push('+');
           break;
       case "-":
                pendingVal = valueDisplayed;
                valueDisplayed = "0";
                displayZero.innerHTML = valueDisplayed;
                evalArray.push(pendingVal);
                evalArray.push('-');
           break;
       case "x":
                pendingVal = valueDisplayed;
                valueDisplayed = "0";
                displayZero.innerHTML = valueDisplayed;
                evalArray.push(pendingVal);
                evalArray.push('*');
           break;
       case "/":
                pendingVal = valueDisplayed;
                valueDisplayed = "0";
                displayZero.innerHTML = valueDisplayed;
                evalArray.push(pendingVal);
                evalArray.push('/');
           break;
       case "%":
                pendingVal = valueDisplayed;
                valueDisplayed = "0";
                displayZero.innerHTML = valueDisplayed;
                evalArray.push(pendingVal);
                evalArray.push('*');
                
           
           break;
        case "=":
                evalArray.push(valueDisplayed);
                let operation = eval(evalArray.join(' '));
                valueDisplayed = operation + '';
                displayZero.innerText = valueDisplayed;
                evalArray = [];
            break;    
   
       default:
           break;
   }
}

// iterating through Arrays (numberBtns & operatorBtns)

//iterating through numberBtns arrays
for(let i = 0; i < numberBtns.length; i++) {
      numberBtns[i].addEventListener('click', updateDisplay, false);
}

//iterating through opertors btns
for (let j = 0; j < operatorBtns.length; j++) {
    operatorBtns[j].addEventListener('click', performMath, false);
}



btnDecimal.onclick = () => {
    if (!valueDisplayed.includes('.'))
        valueDisplayed += '.';
        displayZero.innerText = valueDisplayed;
}





btnAc.onclick = () => {
    valueDisplayed = '0';
    pendingVal = undefined;
    evalArray = [];
    displayZero.innerHTML = valueDisplayed;


};

btnDel.onclick = () => {
    let lengthDisplay = valueDisplayed.length;
    valueDisplayed = valueDisplayed.slice(0, lengthDisplay - 1);
    if (valueDisplayed === '')
        valueDisplayed = "0";
    displayZero.innerText = valueDisplayed;
    }