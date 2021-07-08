// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { findById, getTotal, renderTableRow } from '../utils.js';
import products from '../data/items.js';
import { renderProducts } from '../render-items.js';

const test = QUnit.test;

test('Is this a Potion?', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li><h3>Potion</h3><img src="./assets/Potion.PNG" alt="Potion"><span>30 munnyz</span><h4>A bitter medicine that is used by many adventures. Heals 250 hp.</h4><button>Buy</button></li>`;
    
    const potion = {
        id: 'potion',
        name: 'Potion',
        image: 'Potion.PNG',
        description: 'A bitter medicine that is used by many adventures. Heals 250 hp.',
        category: 'healing',
        price: 30,
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProducts(potion);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('Is this a Hi potion?', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li><h3>Hi-potion</h3><img src="./assets/Hi-potion.PNG" alt="Hi-potion"><span>60 munnyz</span><h4>A bitter medicine, better than that boring, old potion. Heals 1000 hp.</h4><button>Buy</button></li>`;
    

    const hiPotion = {
        id: 'hi-potion',
        name: 'Hi-potion',
        image: 'Hi-potion.PNG',
        description: 'A bitter medicine, better than that boring, old potion. Heals 1000 hp.',
        category: 'healing',
        price: 60,
    };
   

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProducts(hiPotion);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('Is this a X potion?', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li><h3>X-potion</h3><img src="./assets/X-potion.PNG" alt="X-potion"><span>120 munnyz</span><h4>A great potion for long journeys. A perfect potion made from years of research and perfecting the recipe. Can't change that bitter taste though. Heals 2500 hp.</h4><button>Buy</button></li>`;
    

    const xPotion = {
        id: 'x-potion',
        name: 'X-potion',
        image: 'X-potion.PNG',
        description: "A great potion for long journeys. A perfect potion made from years of research and perfecting the recipe. Can't change that bitter taste though. Heals 2500 hp.",
        category: 'healing',
        price: 120,
    };
   
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProducts(xPotion);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('Is this a Fire bomb?', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li><h3>Fire bomb</h3><img src="./assets/Bomb.PNG" alt="Fire bomb"><span>40 munnyz</span><h4>Throw the bomb at an enemy to inflict fire damage. Inflicts 500 fire damage to a single target.</h4><button>Buy</button></li>`;
    
    const fireBomb = {
        id: 'fire-bomb',
        name: 'Fire bomb',
        image: 'Bomb.PNG',
        description: 'Throw the bomb at an enemy to inflict fire damage. Inflicts 500 fire damage to a single target.',
        category: 'damage',
        price: 40,
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderProducts(fireBomb);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('returns fruits by id', expect => {
    const expected = {
        id: 6,
        name: 'Big fire bomb',
        image: 'Big-bomb.PNG',
        description: 'A bigger explosion than a regular fire bomb. Do not hurt teammates! Inflicts 2000 fire damage to a single target.',
        category: 'damage',
        price: 30,
    };
    const actual = findById(products, 6);

    expect.deepEqual(actual, expected);
});

test('renderTableRow returns a <tr> element', expect => {
    const potion = {
        id: 1,
        name: 'Potion',
        image: 'Potion.PNG',
        description: 'A bitter medicine that is used by many adventures. Heals 250 hp.',
        category: 'healing',
        price: 30,
    };
    const potionCart = {
        id: 1,
        qty: 2
    };
    const expected = `<tr><td>Potion</td><td>60 Munnyz</td><td>2</td><td>120 Munnyz</td></tr>`;
    const dom = renderTableRow(potion, potionCart);
    const actual = dom.outerHTML;
    expect.equal(actual, expected);
});

test('Does getTotal return the total?', expect=>{
    const products = [{
        id: 1,
        name: 'Potion',
        image: 'Potion.PNG',
        description: 'A bitter medicine that is used by many adventures. Heals 250 hp.',
        category: 'healing',
        price: 30,
    }];
    const cart = [{ id: 1, qty: 2 }];

    const expected = 60;
    const actual = getTotal(products, cart);
    expect.equal(expected, actual);
});


test('Does getTotal return the whole total?', expect=>{
    const cart = [
        { id: 1, qty: 4 },
        { id: 2, qty: 6 }
    ];
    const data = [{
        id: 1,
        price: 30
    },
    {
        id: 2, 
        price: 60
    }];

    const expected = 480;
    const actual = getTotal(data, cart);
    expect.equal(expected, actual);
});

test('Does getTotal return the whole total?-redone', expect=>{
    const cart = [
        { id: 1, qty: 4 }];
    const data = [{
        id: 1,
        price: 30
    }];

    const expected = 120;
    const actual = getTotal(data, cart);
    expect.equal(expected, actual);
});