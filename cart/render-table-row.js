import { toMunnyz } from '../utils.js';
// render table row function
export function renderTableRow(productItem, cartItem){
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = productItem.name;
    tr.appendChild(tdName);

    const tdPrice = document.createElement('td');
    tdPrice.textContent = toMunnyz(productItem.price);
    tr.appendChild(tdPrice);

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    tr.appendChild(tdQty);

    const tdTotal = document.createElement('td');
    const total = productItem.price * cartItem.qty;
    tdTotal.textContent = toMunnyz(total);
    tr.appendChild(tdTotal);

    return tr;

}