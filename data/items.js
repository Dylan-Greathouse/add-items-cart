// name
// image
// price
// cost
// description


const potion = {
    id: 1,
    name: 'Potion',
    image: 'Potion.PNG',
    description: 'A bitter medicine that is used by many adventures. Heals 250 hp.',
    category: 'healing',
    price: 30,
};

const hiPotion = {
    id: 2,
    name: 'Hi-potion',
    image: 'Hi-potion.PNG',
    description: 'A bitter medicine, better than that boring, old potion. Heals 1000 hp.',
    category: 'healing',
    price: 60,
};

const xPotion = {
    id: 3,
    name: 'X-potion',
    image: 'X-potion.PNG',
    description: "A great potion for long journeys. A perfect potion made from years of research and perfecting the recipe. Can't change that bitter taste though. Heals 2500 hp.",
    category: 'healing',
    price: 120,
};
const antidote = {
    id: 4,
    name: 'Antidote',
    image: 'Antidote.PNG',
    description: 'A salve that helps when one is poisoned. Cures poision status.',
    category: 'healing',
    price: 20,
};

const elixer = {
    id: 5,
    name: 'Elixer',
    image: 'elixer.PNG',
    description: 'A magical potion that can bring anything back from the brink of death. Cures fainted status.',
    category: 'healing',
    price: 20,
};

const fireBomb = {
    id: 6,
    name: 'Fire bomb',
    image: 'Bomb.PNG',
    description: 'Throw the bomb at an enemy to inflict fire damage. Inflicts 500 fire damage to a single target.',
    category: 'damage',
    price: 40,
};
const bigFireBomb = {
    id: 7,
    name: 'Big fire bomb',
    image: 'Big-bomb.PNG',
    description: 'A bigger explosion than a regular fire bomb. Do not hurt teammates! Inflicts 2000 fire damage to a single target.',
    category: 'damage',
    price: 30,
};

const holyWater = {
    id: 8,
    name: 'Holy Water',
    image: 'Holy-water.PNG',
    description: 'Water that has been blessed by a priest, but it looks just like normal water... Inflicts wet status.',
    category: 'status',
    price: 20,
};

const poisonDart = {
    id: 9,
    name: 'Posion Dart',
    image: 'poison-dart.PNG',
    description: "A dart dipped in poison. Better watch out and don't get cut! Inflicts poison status.",
    category: 'status',
    price: 20,
};



const products = [
    potion,
    hiPotion,
    xPotion,
    antidote,
    elixer,
    fireBomb,
    bigFireBomb,
    holyWater,
    poisonDart
];

export default products;