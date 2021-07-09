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
const productQty = document.getElementsByClassName('qty');
for (let btn of addButtons) {
    btn.addEventListener('click', ()=>{
     
        addItemToCart(Number(btn.value));
        
        for (let i = 0; i < productQty.length; i++) {
          
            if (Number(productQty[i].id) === Number(btn.value)) {
                productQty[i].textContent = Number(productQty[i].textContent) + 1;
            
            }
        }


    });
}



// button value compared to qty value.