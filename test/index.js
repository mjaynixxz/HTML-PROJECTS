
/*
Program to check if a machine is started or not


===================================================
===================================================
        // let btn = document.querySelector('button');    
        // let txt = document.querySelector('p');


        // btn.addEventListener('click', machineOperation);

        // function machineOperation () {

        // if (btn.textContent === 'Start machine') {
        //     btn.textContent = 'Stop Machine';
        //     txt.textContent = 'The machine has Started';
        // }
        // else  {
        //     btn.textContent = 'Start machine';
        //     txt.textContent = 'The machine has stopped';
        // }
        // }

*/

/* 

Program to split a string of products from their price

const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';
let stringProduct = "Underpants:6.99 Socks:5.99 T-shirt:14.99 Trousers:31.99 Shoes:23.99";
let product = stringProduct.split(' ');
for (let i = 0; i <= product.length; i++) { 
  let subArray = product[i].split(':');
  let name = subArray[0];
 
  let price = Number(+subArray[1]);
  total+=price;
  let itemText = name + ' - $' + price;

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);

*/



/*

Program to utitllize method in array, to check if Search terms is greater than 5 and delete the last item

const list = document.querySelector('.output ul');
const searchInput = document.querySelector('.output input');
const searchBtn = document.querySelector('.output button');

list.innerHTML = '';

let myHistory= [];

searchBtn.onclick = function() {
 if(searchInput.value !== '') {
 myHistory.unshift(searchInput.value);

 list.innerHTML = '';

 for(let i = 0; i < myHistory.length; i++) {
 itemText = myHistory[i];
 const listItem = document.createElement('li');
 listItem.textContent = itemText;
 list.appendChild(listItem);
 }

 if(myHistory.length >= 5) {
 myHistory.pop();
 }

 searchInput.value = '';
 searchInput.focus();
 }
}
*/