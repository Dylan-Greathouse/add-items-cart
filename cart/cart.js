// import cart from '../data/cart.js';
import { toMunnyz, getTotal, findById } from '../utils.js';
import { renderTableRow } from './render-table-row.js';
import products from '../data/items.js';
import { getCart, clearCart } from '../storage-utils.js';

const tableBody = document.getElementById('table-body');


function rendercart(){
    const cart = getCart();
    for (let item of cart) {
        const product = findById(products, item.id);
        const tr = renderTableRow(product, item);
        tableBody.appendChild(tr);
    }
    if (cart.length === 0){
        tableBody.innerHTML = '';
    }
    const totalDom = document.getElementById('order-total');
    const total = getTotal(products, cart);
    totalDom.textContent = toMunnyz(total);
  
}
rendercart();
const placeOrder = document.getElementById('place-order');
placeOrder.addEventListener('click', ()=>{
    alert('ya good?');
    window.location.href = '../index.html';
    clearCart();
});

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', ()=>{
    clearCart();
    location.reload();
       
});