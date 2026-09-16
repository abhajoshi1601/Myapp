```html
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>TechNova Solutions | Portfolio</title>

    <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: Arial, sans-serif;
            color: #222;
            line-height: 1.6;
        }

        /* Navigation */

        header {
            background: #0b132b;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        nav {
            max-width: 1200px;
            margin: auto;
            padding: 18px 25px;

            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            color: white;
            font-size: 28px;
            font-weight: bold;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 30px;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
        }

        .nav-links a:hover {
            color: #00d4ff;
        }

        .menu {
            display: none;
            color: white;
            font-size: 28px;
            cursor: pointer;
        }


        /* Home */

        #home {
            min-height: 90vh;

            display: flex;
            align-items: center;

            background: linear-gradient(
                135deg,
                #0b132b,
                #1c2541,
                #3a506b
            );

            color: white;
        }

        .hero {
            max-width: 1200px;
            width: 100%;
            margin: auto;
            padding: 50px 25px;
        }

        .hero small {
            color: #00d4ff;
            font-weight: bold;
            letter-spacing: 2px;
        }

        .hero h1 {
            font-size: 55px;
            max-width: 800px;
            line-height: 1.2;
            margin: 20px 0;
        }

        .hero h1 span {
            color: #00d4ff;
        }

        .hero p {
            max-width: 650px;
            font-size: 18px;
            color: #e0e0e0;
        }

        .buttons {
            margin-top: 30px;
        }

        .btn {
            display: inline-block;
            padding: 13px 25px;
            margin-right: 10px;

            background: #00b4d8;
            color: white;

            text-decoration: none;
            border-radius: 5px;
        }

        .btn:hover {
            background: #0096c7;
        }

        .btn-outline {
            background: transparent;
            border: 1px solid white;
        }


        /* Common Section */

        section {
            padding: 80px 25px;
        }

        .section-title {
            text-align: center;
            margin-bottom: 50px;
        }

        .section-title p {
            color: #0096c7;
            font-weight: bold;
            letter-spacing: 2px;
        }

        .section-title h2 {
            font-size: 38px;
            color: #0b132b;
        }


        /* About */

        .about {
            max-width: 1200px;
            margin: auto;

            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 50px;
            align-items: center;
        }

        .about h3 {
            font-size: 30px;
            margin-bottom: 20px;
        }

        .about p {
            color: #666;
            margin-bottom: 15px;
        }

        .experience {
            background: #0b132b;
            color: white;
            padding: 45px 25px;
            text-align: center;
            border-radius: 10px;
        }

        .experience h2 {
            font-size: 60px;
            color: #00d4ff;
        }


        /* Services */

        #services {
            background: #f5f8fb;
        }

        .services {
            max-width: 1200px;
            margin: auto;

            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
        }

        .service {
            background: white;
            padding: 30px;
            border-radius: 10px;

            box-shadow: 0 5px 20px rgba(0,0,0,0.08);

            transition: 0.3s;
        }

        .service:hover {
            transform: translateY(-8px);
        }

        .service .icon {
            font-size: 40px;
            margin-bottom: 15px;
        }

        .service h3 {
            color: #0b132b;
            margin-bottom: 10px;
        }

        .service p {
            color: #666;
        }


        /* Projects */

        .projects {
            max-width: 1200px;
            margin: auto;

            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
        }

        .project {
            border-radius: 10px;
            overflow: hidden;

            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }

        .project-image {
            height: 180px;

            display: flex;
            align-items: center;
            justify-content: center;

            font-size: 65px;
            background: #eaf8ff;
        }

        .project-content {
            padding: 25px;
        }

        .project-content span {
            color: #0096c7;
            font-size: 14px;
            font-weight: bold;
        }

        .project-content h3 {
            margin: 10px 0;
        }

        .project-content p {
            color: #666;
        }


        /* Technologies */

        #technology {
            background: #f5f8fb;
        }

        .technologies {
            max-width: 1000px;
            margin: auto;

            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px;
        }

        .tech {
            background: white;
            padding: 15px 30px;
            border-radius: 30px;
            font-weight: bold;

            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
        }


        /* Team */

        .team {
            max-width: 1200px;
            margin: auto;

            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 25px;
        }

        .member {
            text-align: center;
            background: #f5f8fb;
            padding: 30px 20px;
            border-radius: 10px;
        }

        .member-photo {
            width: 100px;
            height: 100px;

            margin: auto;
            margin-bottom: 15px;

            border-radius: 50%;

            display: flex;
            align-items: center;
            justify-content: center;

            background: #dff7ff;
            font-size: 45px;
        }

        .member p {
            color: #0096c7;
        }


        /* Contact */

        #contact {
            background: #f5f8fb;
        }

        .contact {
            max-width: 1100px;
            margin: auto;

            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
        }

        .contact-info h3 {
            font-size: 30px;
            margin-bottom: 15px;
        }

        .contact-info p {
            color: #666;
            margin-bottom: 20px;
        }

        form {
            background: white;
            padding: 30px;
            border-radius: 10px;

            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }

        input,
        textarea {
            width: 100%;
            padding: 13px;
            margin-bottom: 15px;

            border: 1px solid #ddd;
            border-radius: 5px;

            font-family: Arial;
        }

        input:focus,
        textarea:focus {
            outline: none;
            border-color: #00b4d8;
        }

        form button {
            width: 100%;
            border: none;
            cursor: pointer;
        }


        /* Footer */

        footer {
            background: #0b132b;
            color: white;
            text-align: center;
            padding: 35px 20px;
        }

        footer p {
            color: #ccc;
        }


        /* Responsive */

        @media (max-width: 900px) {

            .services,
            .projects {
                grid-template-columns: repeat(2, 1fr);
            }

            .team {
                grid-template-columns: repeat(2, 1fr);
            }

            .about {
                grid-template-columns: 1fr;
            }

        }


        @media (max-width: 650px) {

            .menu {
                display: block;
            }

            .nav-links {
                display: none;

                position: absolute;
                top: 65px;
                left: 0;

                width: 100%;

                background: #0b132b;

                flex-direction: column;
                text-align: center;

                padding: 20px;
            }

            .nav-links.active {
                display: flex;
            }

            .hero h1 {
                font-size: 38px;
            }

            .services,
            .projects,
            .team,
            .contact {
                grid-template-columns: 1fr;
            }

        }

    </style>

</head>


<body>


    <!-- Navigation -->

    <header>

        <nav>

            <div class="logo">
                TechNova
            </div>

            <div class="menu" onclick="toggleMenu()">
                ☰
            </div>

            <ul class="nav-links">

                <li>
                    <a href="#home">Home</a>
                </li>

                <li>
                    <a href="#about">About</a>
                </li>

                <li>
                    <a href="#services">Services</a>
                </li>

                <li>
                    <a href="#projects">Projects</a>
                </li>

                <li>
                    <a href="#team">Team</a>
                </li>

                <li>
                    <a href="#contact">Contact</a>
                </li>

            </ul>

        </nav>

    </header>


    <!-- Home -->

    <section id="home">

        <div class="hero">

            <small>
                WELCOME TO TECHNOVA SOLUTIONS
            </small>

            <h1>
                We Build
                <span>Digital Solutions</span>
                For Your Business
            </h1>

            <p>
                TechNova Solutions is an innovative IT company
                providing modern software, web development,
                cybersecurity and digital solutions.
            </p>

            <div class="buttons">

                <a href="#services" class="btn">
                    Our Services
                </a>

                <a href="#contact" class="btn btn-outline">
                    Contact Us
                </a>

            </div>

        </div>

    </section>


    <!-- About -->

    <section id="about">

        <div class="section-title">

            <p>WHO WE ARE</p>

            <h2>About Our Company</h2>

        </div>


        <div class="about">

            <div>

                <h3>
                    Technology That Makes A Difference
                </h3>

                <p>
                    TechNova Solutions is a technology company
                    focused on creating reliable and user-friendly
                    digital solutions.
                </p>

                <p>
                    Our team combines creativity, technology and
                    problem-solving skills to develop solutions
                    for modern businesses.
                </p>

                <p>
                    We work with startups, organizations and
                    businesses to help them improve their digital
                    presence and productivity.
                </p>

            </div>


            <div class="experience">

                <h2>5+</h2>

                <h3>
                    Years Experience
                </h3>

                <p>
                    Delivering technology solutions
                    for growing businesses.
                </p>

            </div>

        </div>

    </section>


    <!-- Services -->

    <section id="services">

        <div class="section-title">

            <p>WHAT WE DO</p>

            <h2>Our Services</h2>

        </div>


        <div class="services">

            <div class="service">

                <div class="icon">💻</div>

                <h3>
                    Web Development
                </h3>

                <p>
                    Modern and responsive websites designed
                    for businesses and organizations.
                </p>

            </div>


            <div class="service">

                <div class="icon">📱</div>

                <h3>
                    App Development
                </h3>

                <p>
                    User-friendly mobile applications
                    for modern platforms.
                </p>

            </div>


            <div class="service">

                <div class="icon">🔐</div>

                <h3>
                    Cybersecurity
                </h3>

                <p>
                    Security solutions that help protect
                    applications and business data.
                </p>

            </div>


            <div class="service">

                <div class="icon">🤖</div>

                <h3>
                    Artificial Intelligence
                </h3>

                <p>
                    AI-based solutions for automation
                    and intelligent applications.
                </p>

            </div>


            <div class="service">

                <div class="icon">☁️</div>

                <h3>
                    Cloud Solutions
                </h3>

                <p>
                    Scalable cloud solutions for
                    modern applications.
                </p>

            </div>


            <div class="service">

                <div class="icon">🗄️</div>

                <h3>
                    Database Solutions
                </h3>

                <p>
                    Secure and efficient database
                    design and management.
                </p>

            </div>

        </div>

    </section>


    <!-- Projects -->

    <section id="projects">

        <div class="section-title">

            <p>OUR WORK</p>

            <h2>Featured Projects</h2>

        </div>


        <div class="projects">

            <div class="project">

                <div class="project-image">
                    🌐
                </div>

                <div class="project-content">

                    <span>
                        WEB DEVELOPMENT
                    </span>

                    <h3>
                        Business Management System
                    </h3>

                    <p>
                        A web-based platform for managing
                        customers, services and business operations.
                    </p>

                </div>

            </div>


            <div class="project">

                <div class="project-image">
                    🛡️
                </div>

                <div class="project-content">

                    <span>
                        CYBERSECURITY
                    </span>

                    <h3>
                        Cyber Security Platform
                    </h3>

                    <p>
                        An interactive platform designed to
                        improve cybersecurity awareness.
                    </p>

                </div>

            </div>


            <div class="project">

                <div class="project-image">
                    🤖
                </div>

                <div class="project-content">

                    <span>
                        ARTIFICIAL INTELLIGENCE
                    </span>

                    <h3>
                        AI Learning Assistant
                    </h3>

                    <p>
                        An intelligent assistant that helps
                        users understand technical concepts.
                    </p>

                </div>

            </div>

        </div>

    </section>


    <!-- Technologies -->

    <section id="technology">

        <div class="section-title">

            <p>OUR EXPERTISE</p>

            <h2>Technologies We Use</h2>

        </div>


        <div class="technologies">

            <div class="tech">
                HTML5
            </div>

            <div class="tech">
                CSS3
            </div>

            <div class="tech">
                JavaScript
            </div>

            <div class="tech">
                Python
            </div>

            <div class="tech">
                Java
            </div>

            <div class="tech">
                MySQL
            </div>

            <div class="tech">
                Git
            </div>

            <div class="tech">
                Artificial Intelligence
            </div>

        </div>

    </section>


    <!-- Team -->

    <section id="team">

        <div class="section-title">

            <p>OUR PEOPLE</p>

            <h2>Meet Our Team</h2>

        </div>


        <div class="team">

            <div class="member">

                <div class="member-photo">
                    👨‍💼
                </div>

                <h3>
                    Rahul Sharma
                </h3>

                <p>
                    Founder & CEO
                </p>

            </div>


            <div class="member">

                <div class="member-photo">
                    👩‍💻
                </div>

                <h3>
                    Priya Singh
                </h3>

                <p>
                    Lead Developer
                </p>

            </div>


            <div class="member">

                <div class="member-photo">
                    👨‍🔬
                </div>

                <h3>
                    Arjun Verma
                </h3>

                <p>
                    Cybersecurity Expert
                </p>

            </div>


            <div class="member">

                <div class="member-photo">
                    👩‍💼
                </div>

                <h3>
                    Ananya Joshi
                </h3>

                <p>
                    Project Manager
                </p>

            </div>

        </div>

    </section>


    <!-- Contact -->

    <section id="contact">

        <div class="section-title">

            <p>GET IN TOUCH</p>

            <h2>Contact Us</h2>

        </div>


        <div class="contact">

            <div class="contact-info">

                <h3>
                    Let's Work Together
                </h3>

                <p>
                    Have an idea or project in mind?
                    Contact us and let's create something
                    amazing together.
                </p>

                <p>
                    📍 Dehradun, Uttarakhand, India
                </p>

                <p>
                    📧 info@technova.com
                </p>

                <p>
                    📞 +91 98765 43210
                </p>

            </div>


            <form id="contactForm">

                <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    required
                >

                <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    required
                >

                <input
                    type="text"
                    id="subject"
                    placeholder="Subject"
                    required
                >

                <textarea
                    id="message"
                    rows="6"
                    placeholder="Your Message"
                    required
                ></textarea>

                <button
                    type="submit"
                    class="btn"
                >
                    Send Message
                </button>

            </form>

        </div>

    </section>


    <!-- Footer -->

    <footer>

        <h2>
            TechNova Solutions
        </h2>

        <p>
            Building innovative digital solutions
            for a better future.
        </p>

        <br>

        <p>
            © 2026 TechNova Solutions.
            All Rights Reserved.
        </p>

    </footer>


    <!-- JavaScript -->

    <script>

        function toggleMenu() {

            const menu =
                document.querySelector(".nav-links");

            menu.classList.toggle("active");

        }


        document
            .getElementById("contactForm")
            .addEventListener("submit", function(event) {

                event.preventDefault();

                const name =
                    document.getElementById("name").value;

                alert(
                    "Thank you, " +
                    name +
                    "! Your message has been submitted successfully."
                );

                document
                    .getElementById("contactForm")
                    .reset();

            });


        const links =
            document.querySelectorAll(".nav-links a");

        links.forEach(function(link) {

            link.addEventListener("click", function() {

                document
                    .querySelector(".nav-links")
                    .classList.remove("active");

            });

        });

    </script>

</body>

</html>
```
