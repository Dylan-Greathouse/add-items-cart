import { getCart, CART } from '../storage-utils.js';
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