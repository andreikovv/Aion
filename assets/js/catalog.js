
const products = [
    { name: "Krem nawilżający", price: 49, type: "dry" },
    { name: "Żel oczyszczający", price: 39, type: "oily" },
    { name: "Serum witaminowe", price: 69, type: "combo" }
];

function displayProducts(filter) {
    const list = document.getElementById("productList");
    list.innerHTML = "";
    products
        .filter(p => filter === "all" || p.type === filter)
        .forEach(p => {
            const item = document.createElement("div");
            item.className = "product";
            item.innerHTML = `<h3>${p.name}</h3><p>${p.price} zł</p><button onclick="addToCart('${p.name}', ${p.price})">Dodaj do koszyka</button>`;
            list.appendChild(item);
        });
}

document.getElementById("skinFilter").addEventListener("change", e => {
    displayProducts(e.target.value);
});

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Dodano do koszyka!");
}

window.onload = () => displayProducts("all");
