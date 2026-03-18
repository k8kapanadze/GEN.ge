// კალათის გახსნა/დახურვა
function toggleCart() {
    document.getElementById('side-cart').classList.toggle('active');
}

// დამატების ლოგიკა
let items = [];
function addToCart(name) {
    items.push(name);
    document.getElementById('cart-count').innerText = items.length;
    renderCart();
}

function renderCart() {
    const container = document.getElementById('cart-content');
    container.innerHTML = items.map(i => `<div class="cart-row">${i}</div>`).join('');
}

// Scroll Effect Navbar-ისთვის
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if(window.scrollY > 50) {
        nav.style.padding = "10px 50px";
        nav.style.background = "rgba(5, 10, 24, 0.95)";
    } else {
        nav.style.padding = "20px 50px";
    }
});
