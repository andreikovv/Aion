
function loadCart() {
    const items = JSON.parse(localStorage.getItem("cart") || "[]");
    const container = document.getElementById("cartItems");
    let total = 0;
    container.innerHTML = "";
    items.forEach((item, i) => {
        total += item.price;
        const div = document.createElement("div");
        div.innerHTML = `${item.name} - ${item.price} zł <button onclick="removeItem(${i})">Usuń</button>`;
        container.appendChild(div);
    });
    document.getElementById("totalPrice").innerText = total + " zł";
}

function removeItem(index) {
    let items = JSON.parse(localStorage.getItem("cart") || "[]");
    items.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(items));
    loadCart();
}

document.getElementById("checkoutForm").addEventListener("submit", e => {
    e.preventDefault();
    alert("Zamówienie złożone! Dziękujemy.");
    localStorage.removeItem("cart");
    loadCart();
});

window.onload = loadCart;
