async function fetchDataProducts() {
    const data = await fetch('https://dummyjson.com/products');
    const finalData = await data.json();
    return finalData;
}

async function data() {
    const container = document.querySelector('.container');
    const fetchData = await fetchDataProducts();

    fetchData.products.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h1');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.textContent = item.description;

        const price = document.createElement('p');
        price.textContent = `Price: $${item.price}`;

        const image = document.createElement('img');
        image.src = item.thumbnail;
        image.alt = item.title;

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(price);
        container.appendChild(card);
    });
}

data();