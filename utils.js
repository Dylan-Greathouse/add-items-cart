

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


export function getTotal(products, cart){
    let orderTotal = 0;
  
    for (let item of cart) {
        const product = findById(products, item.id);
        orderTotal += product.price * item.qty;
    }
    return orderTotal;
}