export function renderItems(item){
    const itemLi = document.createElement('li');
    const itemh3 = document.createElement('h3');
    itemh3.textContent = item.name;

    const itemImg = document.createElement('img');
    itemImg.src = `./assets/${item.image}`;
    itemImg.alt = item.name;

    const itemSpan = document.createElement('span');
    itemSpan.textContent = `${item.price} munnyz`;

    const itemDescription = document.createElement('span');
    itemDescription.textContent = `${item.description}`;

    const button = document.createElement('button');
    button.textContent = 'Buy';

    itemLi.appendChild(itemh3);
    itemLi.appendChild(itemImg);
    itemLi.appendChild(itemSpan);
    itemLi.appendChild(itemDescription);
    itemLi.appendChild(button);

    return itemLi;
}