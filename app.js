/ Movie Website Application JavaScript with AdSense Integration

// Application State
let movies = [];
let filteredMovies = [];
let isAdminLoggedIn = false;
let currentSection = 'home';
let currentAdminTab = 'overview';
let currentMovieId = null;
let adsenseConfig = {
    publisherId: '',
    isActive: false
};

// Sample data and configuration
const sampleMoviesData = [
    {
        "id": 1,
        "title": "The Dark Knight",
        "description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        "poster": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
        "trailer": "https://www.youtube.com/watch?v=EXeTwQWrcwY",
        "downloadLinks": {
            "1080p": "#download-1080p",
            "720p": "#download-720p",
            "480p": "#download-480p"
        },
        "genre": ["Action", "Crime", "Drama"],
        "year": 2008,
        "rating": 9.0,
        "cast": ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
        "director": "Christopher Nolan",
        "duration": "152 min",
        "addedDate": "2024-01-15"
    },
    {
        "id": 2,
        "title": "Inception",
        "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        "poster": "https://images.unsplash.com/photo-1489599735734-79b4bbdc5c04?w=400&h=600&fit=crop",
        "trailer": "https://www.youtube.com/watch?v=YoHD9XEInc0",
        "downloadLinks": {
            "1080p": "#download-1080p",
            "720p": "#download-720p"
        },
        "genre": ["Action", "Sci-Fi", "Thriller"],
        "year": 2010,
        "rating": 8.8,
        "cast": ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"],
        "director": "Christopher Nolan",
        "duration": "148 min"
Asset 6 of 12
