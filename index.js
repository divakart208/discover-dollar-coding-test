document.addEventListener('DOMContentLoaded', function() {
    const productsData = [{
            id: 1,
            name: "Smartphone",
            price: "$499",
            image: "https://tse4.mm.bing.net/th?id=OIP.SM32I1WedoZ75g0uq24OCQHaFj&pid=Api&P=0&h=220"
        },
        {
            id: 2,
            name: "Laptop",
            price: "$1099",
            image: "https://tse2.mm.bing.net/th?id=OIP.puzai_D4808Fi7vlZTj3dQHaFh&pid=Api&P=0&h=220"
        },
        {
            id: 3,
            name: "Headphones",
            price: "$199",
            image: "https://tse2.mm.bing.net/th?id=OIP.E0HqFb3QUflcVW2tgRROUwHaHa&pid=Api&P=0&h=220"
        },
        {
            id: 4,
            name: "Headphones",
            price: "$999",
            image: "https://tse3.mm.bing.net/th?id=OIP.s_nc11N1vsQvlME1SS5NagHaHa&pid=Api&P=0&h=220"
        },
    ];

    function generateProductCards(products) {
        const productContainer = document.querySelector('.product-list');
        products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <button>Add to Cart</button>
      `;
            productContainer.appendChild(card);
        });
    }

    generateProductCards(productsData);
});