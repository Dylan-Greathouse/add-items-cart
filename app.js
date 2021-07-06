// import functions and grab DOM elements
import items from './items.js';
import { renderItems } from './render-items.js';
// console.log(items);


const itemsUl = document.getElementById('items');
// initialize state

for (let item of items) {
    const itemLi = renderItems(item);
    itemsUl.appendChild(itemLi);
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
