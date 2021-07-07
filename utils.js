

export function findById(items, id){
   
    for (const item of items){
        if (item.id === id) {
            return item;
        }
    }
}

export function toMunnyz(number) {
    const munnzyXchg = 2.0;
    return `${number * munnzyXchg} Munnyz`;
}

export function renderTableRow(productItem, cartItem){
    // return <tr> element with all the info we need
    // <tr>
    //     <td>Apple</td>  
    //     <td>$1.00 (from fruits.js)</td>
    //     <td>2 (from cart.js)</td>
    //     <td>$4.00 (calculated)</td>
    // </tr>
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

export function getTotal(products, cart){
    let orderTotal = 0;
    // // loop through the cart items
    // // get the associated fruit
    // // sum up the qty * price
    // // return the orderTotal
    for (let item of cart) {
        const product = findById(products, item.id);
        orderTotal += product.price * item.qty;
    }
    return orderTotal;
}