// ენების მონაცემები
const translations = {
    ka: {
        "nav-home": "მთავარი",
        "hero-title": "გლობალური განათლების ქსელი",
        "hero-sub": "ოქსფორდის პირველი და ერთადერთი ოფიციალური წარმომადგენელი საქართველოში",
        "prog-title": "საერთაშორისო პროგრამები"
    },
    en: {
        "nav-home": "Home",
        "hero-title": "Global Education Network",
        "hero-sub": "Oxford's First and Only Official Representative in Georgia",
        "prog-title": "International Programs"
    }
};

let currentLang = 'ka';

// ენის შეცვლა
document.getElementById('lang-switch').addEventListener('click', () => {
    currentLang = currentLang === 'ka' ? 'en' : 'ka';
    document.getElementById('lang-switch').innerText = currentLang === 'ka' ? 'EN' : 'KA';
    
    document.querySelectorAll('[data-key]').forEach(elem => {
        const key = elem.getAttribute('data-key');
        elem.innerText = translations[currentLang][key];
    });
});

// კალათის სისტემა
let cart = [];
function addToCart(item) {
    cart.push(item);
    updateCartUI();
    alert(item + " დაემატა კალათაში");
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
}

// მოდალის კონტროლი
const modal = document.getElementById('cart-modal');
document.querySelector('.cart-icon').onclick = () => {
    const list = document.getElementById('cart-items');
    list.innerHTML = cart.map(item => `<li>${item}</li>`).join('');
    modal.style.display = 'block';
};

function closeCart() {
    modal.style.display = 'none';
}

// შეკვეთის გაგზავნა (Simulation)
document.getElementById('order-form').onsubmit = (e) => {
    e.preventDefault();
    alert("თქვენი მოთხოვნა გაგზავნილია! ადმინისტრატორი დაგიკავშირდებათ მითითებულ ნომერზე.");
    cart = [];
    updateCartUI();
    closeCart();
};
