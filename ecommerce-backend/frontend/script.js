document.addEventListener("DOMContentLoaded", () => {
    const productList = document.getElementById("product-list");

    fetch("http://localhost:5000/api/products")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch");
            }
            return response.json();
        })
        .then(data => {
            productList.innerHTML = ""; // Clear loading text

            // Check if products exist
            if (data.length === 0) {
                productList.innerHTML = "<p style='color: red;'>No products found.</p>";
                return;
            }

            // Display products
            data.forEach(product => {
                const productElement = document.createElement("div");
                productElement.classList.add("product");
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p><strong>Price:</strong> $${product.price}</p>
                    <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
                `;
                productList.appendChild(productElement);
            });
        })
        .catch(error => {
            console.error("Error fetching products:", error);
            productList.innerHTML = "<p style='color: red;'>Failed to load products. Please check backend.</p>";
        });
});

// Add to Cart Function
function addToCart(id, name, price) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ id, name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
}
