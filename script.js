// Language Toggle Logic
const langBtn = document.getElementById('lang-toggle');
let currentLang = 'KA';

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'KA' ? 'EN' : 'KA';
    langBtn.innerText = currentLang === 'KA' ? 'EN' : 'KA';
    
    document.querySelectorAll('[data-ka]').forEach(el => {
        el.innerText = currentLang === 'KA' ? el.getAttribute('data-ka') : el.getAttribute('data-en');
    });
});

// Basket Logic
let cart = [];
const cartCount = document.getElementById('cart-count');
const basketItems = document.getElementById('basket-items');

function addToCart(item) {
    if(!cart.includes(item)) {
        cart.push(item);
        updateCart();
        toggleCart(true);
    }
}

function updateCart() {
    cartCount.innerText = cart.length;
    basketItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <span>${item}</span>
            <button onclick="removeItem(${index})">&times;</button>
        </div>
    `).join('');
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}

function toggleCart(forceOpen = false) {
    const sidebar = document.getElementById('side-basket');
    if(forceOpen) sidebar.classList.add('active');
    else sidebar.classList.toggle('active');
}

// Form Submission Simulation
document.getElementById('order-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("მოთხოვნა გაგზავნილია! Global Education Network-ის გუნდი დაგიკავშირდებათ მითითებულ ნომერზე.");
    cart = [];
    updateCart();
    toggleCart();
});
