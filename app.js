// import functions and grab DOM elements
import products from './data/items.js';
import { renderProducts } from './render-items.js';
import { addItemToCart } from './storage-utils.js';

// console.log(items);


const productUl = document.getElementById('items');
// initialize state

for (let product of products) {
    const productLi = renderProducts(product);
    productUl.appendChild(productLi);
}


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const addButtons = document.querySelectorAll('.add');
for (let btn of addButtons) {
    btn.addEventListener('click', (e)=>{
        console.log('i am clicking button', e.target.value);
        console.log(typeof(e.target.value));
          // e.target.value is a string, we need our IDs to be numbers
        addItemToCart(Number(e.target.value));
    });
}
  