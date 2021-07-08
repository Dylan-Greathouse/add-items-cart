import products from '../data/items.js';
import cart from '../data/cart.js';
import { toMunnyz, getTotal, findById } from '../utils.js';
import { renderTableRow } from './render-table-row.js';

const tableBody = document.getElementById('table-body');

for (let item of cart) {
    const product = findById(products, item.id);
    const tr = renderTableRow(product, item);
    tableBody.appendChild(tr);
}

const totalDom = document.getElementById('order-total');
const total = getTotal(products, cart);
totalDom.textContent = toMunnyz(total);