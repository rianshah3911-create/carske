let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const list = document.getElementById("cartItems");
  const totalEl = document.getElementById("total");

  list.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - KES ${item.price}`;
    list.appendChild(li);
  });

  totalEl.textContent = `Total: KES ${total}`;
}


let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 4000);
