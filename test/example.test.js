// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderItems } from "../render-items.js";

const test = QUnit.test;

test('Is this a Potion?', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li><h3>Potion</h3><img src="./assets/Potion.PNG" alt="Potion"><span>300 munnyz</span><h4>A bitter medicine that is used by many adventures. Heals 250 hp.</h4><button>Buy</button></li>`;
    
    const potion = {
        id: 'potion',
        name: 'Potion',
        image: 'Potion.PNG',
        description: 'A bitter medicine that is used by many adventures. Heals 250 hp.',
        category: 'healing',
        price: 300,
    };

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderItems(potion);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('Is this a Hi potion?', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li><h3>Hi-potion</h3><img src="./assets/Hi-potion.PNG" alt="Hi-potion"><span>600 munnyz</span><h4>A bitter medicine, better than that boring, old potion. Heals 1000 hp.</h4><button>Buy</button></li>`;
    

    const hiPotion = {
        id: 'hi-potion',
        name: 'Hi-potion',
        image: 'Hi-potion.PNG',
        description: 'A bitter medicine, better than that boring, old potion. Heals 1000 hp.',
        category: 'healing',
        price: 600,
    };
   

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderItems(hiPotion);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('Is this a X potion?', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li><h3>X-potion</h3><img src="./assets/X-potion.PNG" alt="X-potion"><span>1200 munnyz</span><h4>A great potion for long journeys. A perfect potion made from years of research and perfecting the recipe. Can't change that bitter taste though. Heals 2500 hp.</h4><button>Buy</button></li>`;
    

    const xPotion = {
        id: 'x-potion',
        name: 'X-potion',
        image: 'X-potion.PNG',
        description: "A great potion for long journeys. A perfect potion made from years of research and perfecting the recipe. Can't change that bitter taste though. Heals 2500 hp.",
        category: 'healing',
        price: 1200,
    };
   
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderItems(xPotion);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('Is this a Fire bomb?', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li><h3>Fire bomb</h3><img src="./assets/Bomb.PNG" alt="Fire bomb"><span>400 munnyz</span><h4>Throw the bomb at an enemy to inflict fire damage. Inflicts 500 fire damage to a single target.</h4><button>Buy</button></li>`;
    
    const fireBomb = {
        id: 'fire-bomb',
        name: 'Fire bomb',
        image: 'Bomb.PNG',
        description: 'Throw the bomb at an enemy to inflict fire damage. Inflicts 500 fire damage to a single target.',
        category: 'damage',
        price: 400,
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderItems(fireBomb);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


