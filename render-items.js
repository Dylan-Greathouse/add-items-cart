export function renderProducts(product){
    const productLi = document.createElement('li');
    const producth3 = document.createElement('h3');
    producth3.textContent = product.name;

    const productImg = document.createElement('img');
    productImg.src = `./assets/${product.image}`;
    productImg.alt = product.name;

    const productSpan = document.createElement('span');
    productSpan.textContent = `${product.price} munnyz`;

    const productDescription = document.createElement('h4');
    productDescription.textContent = `${product.description}`;

    const button = document.createElement('button');
    button.textContent = 'Buy';

    productLi.appendChild(producth3);
    productLi.appendChild(productImg);
    productLi.appendChild(productSpan);
    productLi.appendChild(productDescription);
    productLi.appendChild(button);

    return productLi;
}