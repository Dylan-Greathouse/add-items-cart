import { findById } from './utils.js';

export const CART = 'MERCHANT_CART';


export function getcart(){
    let stringCart = localStorage.getItem(CART) || '[]';

    const cart = JSON.parse(stringCart);
    return cart;
}

export function addItemToCart(itemId){
    const cart = getCart();
    const item = findById(cart, itemId);

    if (item) {
        item.qty += 1;
    } else {
        const newItem = { id: itemId, qty: 1 };
        cart.push(newItem);
    }
    localStorage.setItem(CART, JSON.stringify(cart));
}

export function clearCart(){
    localStorage.removeItem(CART);
}