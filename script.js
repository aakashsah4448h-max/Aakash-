/* --- New Image Helper Adjustments --- */
.main-profile-img {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid var(--primary-color);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.image-about-grid {
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 3rem;
    align-items: center;
}

.about-featured-img {
    width: 100%;
    max-height: 400px;
    border-radius: 12px;
    object-fit: cover;
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

/* For smaller screens, stack the about image cleanly */
@media (max-width: 968px) {
    .image-about-grid {
        grid-template-columns: 1fr;
        text-align: center;
    }
    .about-featured-img {
        max-width: 320px;
        margin-bottom: 2rem;
    }
}
    
