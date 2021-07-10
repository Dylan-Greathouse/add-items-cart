import { getCart, CART, clearCart, addItemToCart } from '../storage-utils.js';
const test = QUnit.test;

test('Would getCart return correct JSON.parse', (expect) => {
    const mockCart = [
        { id: 1, qty: 2 },
        { id: 3, qty: 1 }];
    const mockCartString = JSON.stringify(mockCart);
    localStorage.setItem(CART, mockCartString);
    const cart = getCart(); 
    expect.deepEqual(cart, mockCart);

});

test('clearCart removes item from cart', (expect) =>{
    const mockCart = [
        { id: 1, qty: 2 },
        { id: 3, qty: 1 }];
    const mockCartString = JSON.stringify(mockCart);
    localStorage.setItem(CART, mockCartString);
    clearCart();
    const expected = [];
    const cart = getCart();
    expect.deepEqual(cart, expected);
});

test('Should add item into cart', (expect) =>{
    const mockCart = [
        { id: 1, qty: 2 },
        { id: 3, qty: 1 }];
    const mockCartString = JSON.stringify(mockCart);
    localStorage.setItem(CART, mockCartString);
    addItemToCart(2, 1);
    const newCart = getCart();
    const expected = [
        { id: 1, qty: 2 },
        { id: 3, qty: 1 },
        { id: 2, qty: 1 }
    ];

    expect.deepEqual(newCart, expected);
});
