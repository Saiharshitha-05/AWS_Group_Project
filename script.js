/* Movie Details Styles */
.movie-header {
    background: #2c3e50;
    color: white;
    padding: 1rem 0;
}

.back-btn {
    color: white;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 8px 16px;
    border-radius: 8px;
    transition: background-color 0.3s ease;
    font-weight: 500;
}

.back-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
}

/* Main Content */
.movie-details {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    padding: 40px 0;
    background: #f8f9fa;
}

.movie-poster-section {
    position: sticky;
    top: 20px;
    align-self: start;
}

.movie-backdrop {
    position: relative;
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 2rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.movie-backdrop img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.backdrop-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
}

.movie-poster-large {
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.movie-poster-large img {
    width: 100%;
    height: auto;
    display: block;
}

.poster-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 450px;
    background: #e9ecef;
    color: #6c757d;
    font-size: 4rem;
}

/* Movie Info Section */
.movie-info-section {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.movie-header-info {
    margin-bottom: 2rem;
    border-bottom: 2px solid #eee;
    padding-bottom: 2rem;
}

.movie-title {
    font-size: 2.5rem;
    color: #2c3e50;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.movie-meta {
    display: flex;
    gap: 20px;
    margin-bottom: 1rem;
    flex-wrap: wrap;
}

.movie-rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    color: #f39c12;
}

.movie-rating i {
    color: #f39c12;
}

.movie-year, .movie-runtime {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #666;
    font-weight: 500;
}

.movie-genres {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.genre-tag {
    background: #e3f2fd;
    color: #1976d2;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
}

/* Description */
.movie-description {
    margin-bottom: 2rem;
}

.movie-description h2 {
    color: #2c3e50;
    margin-bottom: 1rem;
}

.movie-description p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
}

/* Production */
.movie-production {
    margin-bottom: 2rem;
}

.movie-production h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
}

.production-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.production-company {
    background: #f8f9fa;
    color: #495057;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.9rem;
    border: 1px solid #dee2e6;
}

/* Actions */
.movie-actions {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
}

/* Responsive Design */
@media (max-width: 900px) {
    .movie-details {
        grid-template-columns: 1fr;
    }
    
    .movie-poster-section {
        position: relative;
        top: 0;
    }
    
    .movie-backdrop {
        height: 300px;
    }
    
    .movie-title {
        font-size: 2rem;
    }
    
    .movie-actions {
        flex-direction: column;
        gap: 1rem;
    }
}

@media (max-width: 480px) {
    .movie-info-section {
        padding: 1.5rem;
    }
    
    .movie-title {
        font-size: 1.75rem;
    }
    
    .movie-meta {
        flex-direction: column;
        gap: 10px;
    }
    
    .movie-backdrop {
        height: 250px;
    }
}