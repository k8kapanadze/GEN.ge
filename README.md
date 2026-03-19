<!DOCTYPE html>
<html lang="ka">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Global Education Network | Oxford Representative Georgia</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js"></script>
    <style>
        /* --- BRAND IDENTITY & VARIABLES --- */
        :root {
            --primary-blue: #0a2351;
            --accent-red: #d32f2f;
            --light-bg: #f8f9fa;
            --white: #ffffff;
            --text-dark: #1a1a1a;
            --transition: all 0.3s ease;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }

        body { background-color: var(--white); color: var(--text-dark); line-height: 1.6; }

        /* --- NAVIGATION --- */
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 5%;
            background: var(--white);
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .logo img { height: 60px; }

        .nav-links { display: flex; list-style: none; gap: 2rem; align-items: center; }
        .nav-links a { text-decoration: none; color: var(--primary-blue); font-weight: 600; transition: var(--transition); }
        .nav-links a:hover { color: var(--accent-red); }

        .lang-switch {
            cursor: pointer;
            padding: 5px 12px;
            border: 2px solid var(--primary-blue);
            border-radius: 20px;
            font-weight: bold;
            color: var(--primary-blue);
        }

        /* --- HERO SECTION --- */
        .hero {
            height: 80vh;
            background: linear-gradient(rgba(10, 35, 81, 0.6), rgba(10, 35, 81, 0.6)), url('hero-bg.jpg.jpeg');
            background-size: cover;
            background-position: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: var(--white);
            padding: 0 10%;
        }

        .hero h1 { font-size: 3.5rem; margin-bottom: 1rem; }
        .hero p { font-size: 1.5rem; margin-bottom: 2rem; font-weight: 300; }

        /* --- INTERACTIVE OVERLAY BLOCKS --- */
        .overlay-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            width: 80%;
            margin: -50px auto 50px;
            z-index: 10;
        }

        .info-card {
            background: var(--white);
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
            text-align: center;
            transition: var(--transition);
            border-bottom: 4px solid var(--primary-blue);
        }

        .info-card:hover { transform: translateY(-10px); border-color: var(--accent-red); }
        .info-card i { font-size: 2.5rem; color: var(--accent-red); margin-bottom: 15px; }

        /* --- PROGRAMS SECTION --- */
        .section-title { text-align: center; margin: 4rem 0 2rem; font-size: 2.5rem; color: var(--primary-blue); }
        
        .destinations {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            padding: 0 5%;
        }

        .dest-card {
            position: relative;
            height: 300px;
            border-radius: 15px;
            overflow: hidden;
            cursor: pointer;
        }

        .dest-card img { width: 100%; height: 100%; object-fit: cover; transition: var(--transition); }
        .dest-card:hover img { scale: 1.1; }
        .dest-overlay {
            position: absolute; inset: 0;
            background: linear-gradient(transparent, rgba(0,0,0,0.8));
            display: flex; align-items: flex-end; padding: 20px;
            color: white; font-size: 1.5rem; font-weight: bold;
        }

        /* --- MENTORSHIP PANEL (Availability Logic) --- */
        .mentors {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            padding: 0 5%;
        }

        .mentor-card {
            background: #fff;
            border-radius: 15px;
            padding: 20px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .mentor-card.unavailable {
            filter: grayscale(1);
            opacity: 0.7;
            pointer-events: none;
        }

        .status-badge {
            display: inline-block;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.8rem;
            margin-bottom: 10px;
        }
        .status-available { background: #e8f5e9; color: #2e7d32; }
        .status-booked { background: #ffebee; color: #c62828; }

        /* --- BUTTONS --- */
        .btn {
            background: var(--primary-blue);
            color: white;
            padding: 12px 25px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
            transition: var(--transition);
            text-transform: uppercase;
        }
        .btn:hover { background: var(--accent-red); }

        /* --- GALLERY SECTION --- */
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 15px;
            padding: 0 5%;
        }
        .gallery-grid img { width: 100%; height: 250px; object-fit: cover; border-radius: 10px; }

        /* --- FOOTER & CONTACT --- */
        footer {
            background: var(--primary-blue);
            color: white;
            padding: 4rem 5% 2rem;
            margin-top: 5rem;
        }

        .footer-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 40px;
        }

        .cta-fixed {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: var(--accent-red);
            color: white;
            width: 60px; height: 60px;
            border-radius: 50%;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 5px 20px rgba(0,0,0,0.3);
            cursor: pointer;
            z-index: 999;
        }
    </style>
</head>
<body>

    <nav>
        <div class="logo">
            <img src="logo.png.jpg" alt="GEN Logo">
        </div>
        <ul class="nav-links">
            <li><a href="#programs" id="nav-programs">პროგრამები</a></li>
            <li><a href="#mentors" id="nav-mentors">მენტორინგი</a></li>
            <li><a href="#academy" id="nav-academy">აკადემია</a></li>
            <li><a href="#gallery" id="nav-gallery">გალერეა</a></li>
            <li><div class="lang-switch" onclick="toggleLanguage()">EN</div></li>
        </ul>
    </nav>

    <header class="hero">
        <h1 id="hero-title">გლობალური განათლების ქსელი</h1>
        <p id="hero-sub">ოქსფორდის პირველი და ერთადერთი ოფიციალური წარმომადგენელი საქართველოში</p>
        <button class="btn" onclick="openApply()">რეგისტრაცია / Apply</button>
    </header>

    <div class="overlay-container">
        <div class="info-card">
            <i class="fas fa-eye"></i>
            <h3 id="card-1-title">ხედვა და მისია</h3>
            <p>აკადემიური ბრწყინვალება და ინოვაცია.</p>
        </div>
        <div class="info-card">
            <i class="fas fa-globe"></i>
            <h3 id="card-2-title">გლობალური პროგრამები</h3>
            <p>ჩაირიცხეთ მსოფლიოს წამყვან უნივერსიტეტებში.</p>
        </div>
        <div class="info-card">
            <i class="fas fa-graduation-cap"></i>
            <h3 id="card-3-title">ენობრივი აკადემია</h3>
            <p>IELTS და ბიზნეს ინგლისურის კურსები.</p>
        </div>
    </div>

    <section id="programs">
        <h2 class="section-title" id="title-programs">საერთაშორისო მიმართულებები</h2>
        <div class="destinations">
            <div class="dest-card">
                <img src="pic1.jpg.jpeg" alt="UK">
                <div class="dest-overlay">United Kingdom</div>
            </div>
            <div class="dest-card">
                <img src="pic3.jpg.jpeg" alt="USA">
                <div class="dest-overlay">USA / International</div>
            </div>
            <div class="dest-card">
                <img src="cons1.jpg.jpeg" alt="Europe">
                <div class="dest-overlay">Europe</div>
            </div>
        </div>
    </section>

    <section id="mentors">
        <h2 class="section-title" id="title-mentors">აკადემიური გზამკვლევი</h2>
        <div class="mentors">
            <div class="mentor-card">
                <span class="status-badge status-available">Available</span>
                <h3>გიორგი მ.</h3>
                <p>Ivy League Specialist</p>
                <button class="btn" style="margin-top:15px">Request a Call</button>
            </div>
            <div class="mentor-card unavailable">
                <span class="status-badge status-booked">Booked (Waitlist)</span>
                <h3>ანა კ.</h3>
                <p>Oxford/Cambridge Expert</p>
                <button class="btn" style="margin-top:15px">No Slots</button>
            </div>
            <div class="mentor-card">
                <span class="status-badge status-available">Available</span>
                <h3>მარიამ ბ.</h3>
                <p>EU Public Policy Expert</p>
                <button class="btn" style="margin-top:15px">Request a Call</button>
            </div>
        </div>
    </section>

    <section id="gallery">
        <h2 class="section-title">მედია არქივი</h2>
        <div class="gallery-grid">
            <img src="pic1.jpg.jpeg" alt="Event 1">
            <img src="cons2.jpg.jpeg" alt="Event 2">
            <img src="pic2.jpg.jpeg" alt="TV Show">
            <img src="pic3.jpg.jpeg" alt="UN Building">
        </div>
    </section>

    <footer>
        <div class="footer-grid">
            <div>
                <h3>Global Education Network</h3>
                <p>ოქსფორდის წარმომადგენლობა საქართველოში.</p>
            </div>
            <div>
                <h3>კონტაქტი</h3>
                <p>Email: info@gen.ge</p>
                <p>Social: @gen_georgia</p>
            </div>
        </div>
        <p style="text-align:center; margin-top:3rem; font-size: 0.8rem; opacity: 0.6;">© 2026 GEN. All Rights Reserved.</p>
    </footer>

    <div class="cta-fixed" onclick="openApply()">
        <i class="fas fa-edit"></i>
    </div>

    <script>
        let currentLang = 'GE';

        const content = {
            'GE': {
                heroTitle: "გლობალური განათლების ქსელი",
                heroSub: "ოქსფორდის პირველი და ერთადერთი ოფიციალური წარმომადგენელი საქართველოში",
                navProgs: "პროგრამები",
                navMentors: "მენტორინგი",
                navAcademy: "აკადემია",
                navGallery: "გალერეა"
            },
            'EN': {
                heroTitle: "Global Education Network",
                heroSub: "The first and only official Oxford representative in Georgia",
                navProgs: "Programs",
                navMentors: "Mentorship",
                navAcademy: "Academy",
                navGallery: "Gallery"
            }
        };

        function toggleLanguage() {
            currentLang = currentLang === 'GE' ? 'EN' : 'GE';
            document.querySelector('.lang-switch').innerText = currentLang === 'GE' ? 'EN' : 'GE';
            
            // Update Text Elements
            document.getElementById('hero-title').innerText = content[currentLang].heroTitle;
            document.getElementById('hero-sub').innerText = content[currentLang].heroSub;
            document.getElementById('nav-programs').innerText = content[currentLang].navProgs;
            document.getElementById('nav-mentors').innerText = content[currentLang].navMentors;
            document.getElementById('nav-academy').innerText = content[currentLang].navAcademy;
            document.getElementById('nav-gallery').innerText = content[currentLang].navGallery;
        }

        function openApply() {
            const name = prompt("გთხოვთ შეიყვანოთ თქვენი სახელი:");
            if(name) {
                alert("მადლობა " + name + "! თქვენი მოთხოვნა გაიგზავნა ადმინისტრაციასთან. ჩვენ მალე დაგიკავშირდებით.");
                console.log("Order Logged: Lead generated for " + name);
            }
        }
    </script>
</body>
</html>
