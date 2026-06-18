    /* --- Global Reset & Variables --- */
:root {
    --primary-color: #1a73e8;
    --primary-dark: #1557b0;
    --secondary-color: #f1f3f4;
    --text-color: #202124;
    --text-light: #5f6368;
    --bg-color: #ffffff;
    --card-bg: #ffffff;
    --border-color: #dadce0;
    --hero-blob: rgba(26, 115, 232, 0.1);
    --transition-speed: 0.3s;
    --container-max-width: 1200px;
}

[data-theme="dark"] {
    --primary-color: #8ab4f8;
    --primary-dark: #c58af9;
    --secondary-color: #303134;
    --text-color: #e8eaed;
    --text-light: #9aa0a6;
    --bg-color: #202124;
    --card-bg: #2d2e31;
    --border-color: #3c4043;
    --hero-blob: rgba(138, 180, 248, 0.15);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-color);
    color: var(--text-color);
    line-height: 1.6;
    transition: background-color var(--transition-speed), color var(--transition-speed);
}

.container {
    width: 90%;
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 2rem 0;
}

/* --- Typography Helpers --- */
h1, h2, h3, h4 {
    font-weight: 700;
    margin-bottom: 1rem;
}

a {
    text-decoration: none;
    color: inherit;
    transition: color var(--transition-speed);
}

/* --- Button Framework --- */
.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
    transition: all var(--transition-speed);
    border: none;
    text-align: center;
}

.btn-primary {
    background-color: var(--primary-color);
    color: #ffffff;
}

[data-theme="dark"] .btn-primary {
    color: #202124;
}

.btn-primary:hover {
    background-color: var(--primary-dark);
}

.btn-secondary {
    background-color: var(--secondary-color);
    color: var(--text-color);
    border: 1px solid var(--border-color);
}

.btn-secondary:hover {
    background-color: var(--border-color);
}

/* --- Section Formatting --- */
section {
    padding: 5rem 0;
    border-bottom: 1px solid var(--border-color);
}

.section-header {
    text-align: center;
    margin-bottom: 4rem;
}

.section-header h2 {
    font-size: 2.25rem;
    color: var(--primary-color);
}

.section-header p {
    color: var(--text-light);
    font-size: 1.1rem;
}

/* --- Header / Navbar --- */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--bg-color);
    border-bottom: 1px solid var(--border-color);
    z-index: 1000;
    transition: background-color var(--transition-speed);
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text-color);
}

.logo span {
    color: var(--primary-color);
}

.nav-menu {
    display: flex;
    gap: 2rem;
}

.nav-link {
    font-weight: 500;
    color: var(--text-light);
    position: relative;
    padding: 0.25rem 0;
}

.nav-link:hover, .nav-link.active {
    color: var(--primary-color);
}

.nav-link.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--primary-color);
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

#theme-toggle {
    background: none;
    border: none;
    color: var(--text-color);
    font-size: 1.25rem;
    cursor: pointer;
}

.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
}

.hamburger .bar {
    width: 25px;
    height: 3px;
    background-color: var(--text-color);
    border-radius: 3px;
    transition: var(--transition-speed);
}

/* --- Hero Section --- */
.hero-section {
    padding-top: 8rem;
    background: linear-gradient(135deg, var(--bg-color) 60%, var(--hero-blob));
}

.hero-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 4rem;
    align-items: center;
}

.hero-text h1 {
    font-size: 3rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
}

.hero-text h1 span {
    color: var(--primary-color);
}

.hero-text p {
    font-size: 1.2rem;
    color: var(--text-light);
    margin-bottom: 2rem;
}

.hero-btns {
    display: flex;
    gap: 1rem;
}

.hero-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.blob-bg {
    position: absolute;
    width: 300px;
    height: 300px;
    background-color: var(--primary-color);
    opacity: 0.1;
    border-radius: 50%;
    filter: blur(40px);
    z-index: 1;
}

.main-profile-img {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid var(--primary-color);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    position: relative;
    z-index: 2;
    animation: bounce 3s ease-in-out infinite;
}

@keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}

/* --- About Section --- */
.image-about-grid {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 3rem;
    align-items: center;
}

.about-featured-img {
    width: 100%;
    max-height: 420px;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.about-content h3 {
    font-size: 1.75rem;
}

.about-content .subtitle {
    color: var(--primary-color);
    font-weight: 500;
    margin-bottom: 1rem;
}

.about-content p {
    margin-bottom: 1.25rem;
    color: var(--text-light);
}

.about-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 500;
}

.feature-item i {
    color: var(--primary-color);
}

/* --- Services Section --- */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.service-card {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 2.5rem 2rem;
    border-radius: 8px;
    transition: transform var(--transition-speed), box-shadow var(--transition-speed);
}

.service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

.icon-wrapper {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
}

.service-card p {
    color: var(--text-light);
}

/* --- Portfolio Section --- */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.portfolio-item {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    overflow: hidden;
}

.portfolio-img-placeholder {
    height: 200px;
    background-color: var(--secondary-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5rem;
    color: var(--text-light);
    border-bottom: 1px solid var(--border-color);
}

.portfolio-info {
    padding: 1.5rem;
}

.portfolio-info p {
    color: var(--text-light);
    font-size: 0.95rem;
    margin-top: 0.5rem;
}

/* --- Testimonials Section --- */
.testimonials-slider {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
}

.testimonial-card {
    background-color: var(--secondary-color);
    padding: 2rem;
    border-radius: 8px;
    position: relative;
}

.testimonial-card .quote {
    font-style: italic;
    margin-bottom: 1.5rem;
    color: var(--text-color);
}

.client-info {
    display: flex;
    flex-direction: column;
}

.client-info strong {
    color: var(--primary-color);
}

.client-info span {
    font-size: 0.85rem;
    color: var(--text-light);
}

/* --- FAQ Section --- */
.faq-accordion {
    max-width: 700px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.faq-item {
    border: 1px solid var(--border-color);
    border-radius: 5px;
    overflow: hidden;
    background-color: var(--card-bg);
}

.faq-question {
    width: 100%;
    padding: 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--text-color);
    text-align: left;
    cursor: pointer;
}

.faq-question i {
    transition: transform var(--transition-speed);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transition-speed) ease-out;
    background-color: var(--secondary-color);
}

.faq-answer p {
    padding: 1.25rem;
    color: var(--text-light);
}

.faq-item.active .faq-answer {
    max-height: 200px;
}

.faq-item.active .faq-question i {
    transform: rotate(180deg);
}

/* --- Contact Section --- */
.contact-grid {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 3rem;
}

.contact-info-panel {
    background-color: var(--primary-color);
    color: #ffffff;
    padding: 3rem 2rem;
    border-radius: 8px;
}

[data-theme="dark"] .contact-info-panel {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
}

.contact-info-panel h3 {
    margin-bottom: 1rem;
}

.contact-info-panel p {
    opacity: 0.9;
    margin-bottom: 1.5rem;
}

.info-links {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.info-link {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.1rem;
}

.qr-container {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(255,255,255,0.2);
    text-align: center;
}

[data-theme="dark"] .qr-container {
    border-top-color: var(--border-color);
}

.qr-container p {
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
}

.instagram-qr {
    width: 130px;
    height: 130px;
    border-radius: 8px;
    background-color: white;
    padding: 5px;
}

.contact-form-container {
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    padding: 3rem 2rem;
    border-radius: 8px;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
}

.form-group input, .form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    background-color: var(--bg-color);
    color: var(--text-color);
    font-family: inherit;
}

.form-group input:focus, .form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}

/* --- Footer --- */
footer {
    background-color: var(--secondary-color);
    padding: 2rem 0;
    text-align: center;
    border-top: 1px solid var(--border-color);
    font-size: 0.95rem;
    color: var(--text-light);
}

.footer-content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

/* --- Sticky Action Component --- */
.whatsapp-sticky {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: #25d366;
    color: #ffffff;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.25rem;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    z-index: 999;
    transition: transform var(--transition-speed);
}

.instagram-sticky {
    background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
}

.whatsapp-sticky:hover {
    transform: scale(1.1);
}

/* --- Mobile Responsiveness --- */
@media (max-width: 968px) {
    .hero-grid, .contact-grid {
        grid-template-columns: 1fr;
        text-align: center;
    }
    .hero-image {
        order: -1;
    }
    .hero-btns {
        justify-content: center;
    }
    .hamburger {
        display: flex;
    }
    .nav-menu {
        position: fixed;
        left: -100%;
        top: 70px;
        flex-direction: column;
        background-color: var(--bg-color);
        width: 100%;
        text-align: center;
        gap: 1.5rem;
        padding: 2rem 0;
        box-shadow: 0 10px 15px rgba(0,0,0,0.05);
        transition: 0.3s;
        border-bottom: 1px solid var(--border-color);
    }
    .nav-menu.active {
        left: 0;
    }
    .image-about-grid {
        grid-template-columns: 1fr;
        text-align: center;
    }
    .about-featured-img {
        max-width: 320px;
        margin-bottom: 2rem;
    }
    .hamburger.active .bar:nth-child(2) { opacity: 0; }
    .hamburger.active .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
    .hamburger.active .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
                          }
    
