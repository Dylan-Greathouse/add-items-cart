// import functions and grab DOM elements
import products from './data/items.js';
import { renderProducts } from './render-items.js';
// console.log(items);


const productUl = document.getElementById('items');
// initialize state

for (let item of products) {
    const productLi = renderProducts(item);
    productUl.appendChild(productLi);
}


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
