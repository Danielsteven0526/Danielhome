const products = [
    { id: 1, name: "Camiseta Básica", price: 15, image: "https://via.placeholder.com/250x150?text=Camiseta+Básica" },
    { id: 2, name: "Pantalón Casual", price: 30, image: "https://via.placeholder.com/250x150?text=Pantalón+Casual" },
    { id: 3, name: "Zapatillas Deportivas", price: 50, image: "https://via.placeholder.com/250x150?text=Zapatillas+Deportivas" },
    { id: 4, name: "Gorra Deportiva", price: 20, image: "https://via.placeholder.com/250x150?text=Gorra+Deportiva" }
];

let cart = [];

function updateCart() {
    const cartButton = document.getElementById("cartButton");
    cartButton.textContent = `Carrito (${cart.length})`;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Añadir al carrito</button>
        `;
        productList.appendChild(productElement);
    });
}

renderProducts();
