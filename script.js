let cart = [];

function addToCart(product) {
    cart.push(product);

    let cartList = document.getElementById("cart");

    let li = document.createElement("li");
    li.textContent = product;

    cartList.appendChild(li);
}

function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty!");
    } else {
        alert("Order Placed Successfully!");
        cart = [];
        document.getElementById("cart").innerHTML = "";
    }
}