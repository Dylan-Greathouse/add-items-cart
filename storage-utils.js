import { findById } from './utils.js';

export const CART = 'MERCHANT_CART';
export const SELLER = 'SELLER';


export function getCart(){
    let stringCart = localStorage.getItem(CART) || '[]';

    const cart = JSON.parse(stringCart);
    return cart;
}

export function addItemToCart(productId){
    const cart = getCart();
    const item = findById(cart, productId);

    if (item) {
        item.qty += 1;

    } else {
        const newItem = { id: productId, qty: 1 };
        cart.push(newItem);
    }
    localStorage.setItem(CART, JSON.stringify(cart));
}

export function clearCart(){
    localStorage.removeItem(CART);
}