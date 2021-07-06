// name
// image
// price
// cost
// description


const potion = {
    id: 'potion',
    name: 'Potion',
    image: 'Potion.PNG',
    description: 'A bitter medicine that is used by many adventures. Heals 250 hp.',
    category: 'healing',
    price: 300,
};

const hiPotion = {
    id: 'hi-potion',
    name: 'Hi-potion',
    image: 'Hi-potion.PNG',
    description: 'A bitter medicine, better than that boring, old potion. Heals 1000 hp.',
    category: 'healing',
    price: 600,
};

const xPotion = {
    id: 'x-potion',
    name: 'X-potion',
    image: 'X-potion.PNG',
    description: "A great potion for long journeys. A perfect potion made from years of research and perfecting the recipe. Can't change that bitter taste though. Heals 2500 hp.",
    category: 'healing',
    price: 1200,
};
const antidote = {
    id: 'antidote',
    name: 'Antidote',
    image: 'Antidote.PNG',
    description: 'A salve that helps when one is poisoned. Cures poision status.',
    category: 'healing',
    price: 200,
};

const fireBomb = {
    id: 'fire-bomb',
    name: 'Fire bomb',
    image: 'Bomb.PNG',
    description: 'Throw the bomb at an enemy to inflict fire damage. Inflicts 500 fire damage to a single target.',
    category: 'damage',
    price: 400,
};
const bigFireBomb = {
    id: 'big-fire-bomb',
    name: 'Big fire bomb',
    image: 'Big-bomb.PNG',
    description: 'A bigger explosion than a regular fire bomb. Do not hurt teammates! Inflicts 2000 fire damage to a single target.',
    category: 'damage',
    price: 300,
};


const items = [
    potion,
    hiPotion,
    xPotion,
    antidote,
    fireBomb,
    bigFireBomb,
];

export default items;