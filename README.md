<!DOCTYPE html>
<html lang="ka">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GEN | Global Education Network</title>
    
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Inter:wght@300;400;600&display=swap" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
    
    <style>
        :root {
            --brand-blue: #0a2351;
            --brand-red: #d32f2f;
            --brand-light: #f4f4f4;
            --white: #ffffff;
            --text-main: #1a1a1a;
            --serif: 'Playfair Display', serif;
            --sans: 'Inter', sans-serif;
            --transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: var(--sans); background: var(--white); color: var(--text-main); overflow-x: hidden; }

        /* --- Editorial Typography --- */
        h1, h2, h3 { font-family: var(--serif); font-weight: 700; }

        /* --- Navigation --- */
        nav {
            display: flex; justify-content: space-between; align-items: center;
            padding: 20px 5%; background: rgba(255,255,255,0.95);
            position: fixed; width: 100%; top: 0; z-index: 1000;
            border-bottom: 1px solid rgba(0,0,0,0.05);
        }
        .logo img { height: 50px; }
        .nav-right { display: flex; align-items: center; gap: 30px; }
        .nav-links { display: flex; list-style: none; gap: 25px; }
        .nav-links a { text-decoration: none; color: var(--brand-blue); font-weight: 600; font-size: 0.9rem; transition: var(--transition); }
        .nav-links a:hover { color: var(--brand-red); }
        
        .basket-icon { position: relative; cursor: pointer; font-size: 1.2rem; }
        .basket-count { 
            position: absolute; top: -8px; right: -10px; 
            background: var(--brand-red); color: white; 
            font-size: 0.7rem; padding: 2px 6px; border-radius: 50%; 
        }

        /* --- Hero Section --- */
        .hero {
            height: 100vh; display: flex; align-items: center;
            background: linear-gradient(rgba(10,35,81,0.7), rgba(10,35,81,0.4)), url('hero-bg.jpg.jpeg');
            background-size: cover; background-position: center;
            color: var(--white); padding: 0 5%; margin-top: 0;
        }
        .hero-content { max-width: 800px; animation: fadeInUp 1s ease; }
        .hero h1 { font-size: 4.5rem; line-height: 1.1; margin-bottom: 20px; }
        .hero p { font-size: 1.2rem; margin-bottom: 30px; opacity: 0.9; border-left: 3px solid var(--brand-red); padding-left: 20px; }

        /* --- Stats Block --- */
        .stats {
            display: grid; grid-template-columns: repeat(3, 1fr);
            background: var(--brand-blue); color: white; padding: 40px 5%;
            text-align: center;
        }
        .stat-item h2 { font-size: 3rem; color: var(--brand-red); }

        /* --- Programs (Editorial Grid) --- */
        .section-padding { padding: 100px 5%; }
        .section-header { margin-bottom: 50px; }
        .section-header h2 { font-size: 3rem; color: var(--brand-blue); }

        .programs-grid {
            display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;
        }
        .program-card {
            background: var(--brand-light); border-radius: 0; overflow: hidden;
            transition: var(--transition); border: 1px solid transparent;
        }
        .program-card:hover { transform: translateY(-10px); border-color: var(--brand-blue); }
        .program-img { height: 400px; overflow: hidden; position: relative; }
        .program-img img { width: 100%; height: 100%; object-fit: cover; transition: var(--transition); }
        .program-card:hover img { transform: scale(1.05); }
        .program-info { padding: 25px; }
        .program-info h3 { margin-bottom: 15px; font-size: 1.5rem; }

        /* --- Mentor Logic (Greyscale/Active) --- */
        .mentors-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .mentor-card {
            padding: 40px; text-align: center; border: 1px solid #eee; transition: var(--transition);
        }
        .mentor-card.booked { filter: grayscale(1); opacity: 0.5; cursor: not-allowed; }
        .status-dot { 
            display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: 5px;
        }
        .status-active { background: #4CAF50; }
        .status-busy { background: #f44336; }

        /* --- Buttons --- */
        .btn {
            display: inline-block; padding: 15px 35px; background: var(--brand-blue);
            color: white; text-decoration: none; font-weight: 600;
            border: none; cursor: pointer; transition: var(--transition);
            font-family: var(--sans); text-transform: uppercase; letter-spacing: 1px;
        }
        .btn:hover { background: var(--brand-red); }
        .btn-outline { background: transparent; border: 2px solid var(--brand-blue); color: var(--brand-blue); }

        /* --- Animations --- */
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* --- Responsive --- */
        @media (max-width: 768px) {
            .hero h1 { font-size: 2.5rem; }
            .mentors-container { grid-template-columns: 1fr; }
            .nav-links { display: none; }
        }
    </style>
</head>
<body>

    <script>
        const assets = {
            hero: 'hero-bg.jpg.jpeg',
            programs: ['pic1.jpg.jpeg', 'pic3.jpg.jpeg', 'cons1.jpg.jpeg'],
            gallery: ['cons2.jpg.jpeg', 'pic2.jpg.jpeg'],
            logo: 'logo.png.jpg'
        };
    </script>

    <nav>
        <div class="logo"><img src="logo.png.jpg" alt="GEN Logo"></div>
        <div class="nav-right">
            <ul class="nav-links">
                <li><a href="#about" data-ge="ჩვენს შესახებ" data-en="About Us">ჩვენს შესახებ</a></li>
                <li><a href="#programs" data-ge="პროგრამები" data-en="Programs">პროგრამები</a></li>
                <li><a href="#mentors" data-ge="მენტორინგი" data-en="Mentorship">მენტორინგი</a></li>
                <li><a href="#contact" data-ge="კონტაქტი" data-en="Contact">კონტაქტი</a></li>
            </ul>
            <div class="basket-icon" onclick="toggleBasket()">
                <i class="fas fa-shopping-bag"></i>
                <span class="basket-count" id="cart-count">0</span>
            </div>
            <button class="btn-outline" style="padding: 5px 15px;" onclick="changeLang()" id="langBtn">EN</button>
        </div>
    </nav>

    <section class="hero">
        <div class="hero-content">
            <h1 id="hero-title">გლობალური განათლების ქსელი</h1>
            <p id="hero-sub">ოქსფორდის პირველი და ერთადერთი ოფიციალური წარმომადგენელი საქართველოში. ჩვენ ვაშენებთ ხიდს თქვენსა და მსოფლიოს წამყვან უნივერსიტეტებს შორის.</p>
            <a href="#programs" class="btn" id="hero-btn">აღმოაჩინე პროგრამები</a>
        </div>
    </section>

    <div class="stats">
        <div class="stat-item"><h2>500+</h2><p>სტუდენტი</p></div>
        <div class="stat-item"><h2>15+</h2><p>პარტნიორი ქვეყანა</p></div>
        <div class="stat-item"><h2>100%</h2><p>წარმატება</p></div>
    </div>

    <section id="programs" class="section-padding">
        <div class="section-header">
            <h2 id="prog-title">საერთაშორისო პროგრამები</h2>
        </div>
        <div class="programs-grid">
            <div class="program-card">
                <div class="program-img"><img src="pic1.jpg.jpeg" alt="Oxford"></div>
                <div class="program-info">
                    <h3>Oxford Summer Courses</h3>
                    <p>ექსკლუზიური აკადემიური გამოცდილება დიდი ბრიტანეთის გულში.</p><br>
                    <button class="btn" onclick="addToCart('Oxford Summer')">კალათაში დამატება</button>
                </div>
            </div>
            <div class="program-card">
                <div class="program-img"><img src="pic3.jpg.jpeg" alt="USA"></div>
                <div class="program-info">
                    <h3>Ivy League Tour</h3>
                    <p>სტრატეგიული ვიზიტი აშშ-ს საუკეთესო უნივერსიტეტებში.</p><br>
                    <button class="btn" onclick="addToCart('Ivy League Tour')">კალათაში დამატება</button>
                </div>
            </div>
            <div class="program-card">
                <div class="program-img"><img src="cons1.jpg.jpeg" alt="Europe"></div>
                <div class="program-info">
                    <h3>EU Institutions Visit</h3>
                    <p>სასწავლო ვიზიტი სტრასბურგსა და ბრიუსელში.</p><br>
                    <button class="btn" onclick="addToCart('EU Visit')">კალათაში დამატება</button>
                </div>
            </div>
        </div>
    </section>

    <section id="mentors" class="section-padding" style="background: var(--brand-light);">
        <div class="section-header">
            <h2 id="mentor-title">აკადემიური მენტორინგი</h2>
        </div>
        <div class="mentors-container">
            <div class="mentor-card">
                <h3>მარიამი</h3>
                <p>Oxford Admissions Expert</p><br>
                <p><span class="status-dot status-active"></span> თავისუფალია</p><br>
                <button class="btn btn-outline">ზარის მოთხოვნა</button>
            </div>
            <div class="mentor-card booked">
                <h3>გიორგი</h3>
                <p>US Ivy League Expert</p><br>
                <p><span class="status-dot status-busy"></span> დაკავებულია</p><br>
                <button class="btn btn-outline" disabled>ადგილები შევსებულია</button>
            </div>
            <div class="mentor-card">
                <h3>ელენე</h3>
                <p>EU Education Strategy</p><br>
                <p><span class="status-dot status-active"></span> თავისუფალია</p><br>
                <button class="btn btn-outline">ზარის მოთხოვნა</button>
            </div>
        </div>
    </section>

    <footer style="background: var(--brand-blue); color: white; padding: 60px 5%; text-align: center;">
        <h2 style="font-family: var(--serif); margin-bottom: 20px;">GEN - Global Education Network</h2>
        <p>© 2026 ყველა უფლება დაცულია. ოქსფორდის ოფიციალური წარმომადგენლობა საქართველოში.</p>
    </footer>

    <script>
        // Language Logic
        let currentLang = 'GE';
        const langData = {
            'GE': {
                heroTitle: "გლობალური განათლების ქსელი",
                heroSub: "ოქსფორდის პირველი და ერთადერთი ოფიციალური წარმომადგენელი საქართველოში.",
                heroBtn: "აღმოაჩინე პროგრამები",
                progTitle: "საერთაშორისო პროგრამები",
                mentorTitle: "აკადემიური მენტორინგი"
            },
            'EN': {
                heroTitle: "Global Education Network",
                heroSub: "The first and only official Oxford representative in Georgia.",
                heroBtn: "Discover Programs",
                progTitle: "International Programs",
                mentorTitle: "Academic Mentoring"
            }
        };

        function changeLang() {
            currentLang = currentLang === 'GE' ? 'EN' : 'GE';
            document.getElementById('langBtn').innerText = currentLang === 'GE' ? 'EN' : 'GE';
            
            document.getElementById('hero-title').innerText = langData[currentLang].heroTitle;
            document.getElementById('hero-sub').innerText = langData[currentLang].heroSub;
            document.getElementById('hero-btn').innerText = langData[currentLang].heroBtn;
            document.getElementById('prog-title').innerText = langData[currentLang].progTitle;
            document.getElementById('mentor-title').innerText = langData[currentLang].mentorTitle;
        }

        // Basket Logic
        let cart = [];
        function addToCart(item) {
            cart.push(item);
            document.getElementById('cart-count').innerText = cart.length;
            alert(item + " დაემატა კალათაში!");
        }

        function toggleBasket() {
            if(cart.length === 0) {
                alert("კალათა ცარიელია");
            } else {
                alert("თქვენს კალათაშია: " + cart.join(", "));
            }
        }
    </script>
</body>
</html>
