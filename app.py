# MovieMagic - Flask Movie Booking Web Application

A complete Flask web application for movie booking with TMDB API integration, featuring a Netflix-style dashboard, search functionality, and QR code ticket generation.

## Features

### Backend
- **Flask Application** with secure user authentication
- **TMDB API Integration** using API key: `a7230d20c47f744d4acf29f1ef60b218`
- **Database Integration** with SQLAlchemy for user and booking management
- **Form Validation** with WTForms including password strength requirements
- **QR Code Generation** for digital tickets

### Frontend
- **Netflix-style Dashboard** with movie grid layout
- **Smart Search** with search history and real-time suggestions
- **Category Filters** (Action, Romance, Comedy, Disney, Sci-Fi)
- **Language Filters** (English, Non-English)
- **Responsive Design** that works on all devices
- **Modern UI** with gradient themes and smooth animations

### User Experience
- **User Registration & Login** with secure password validation
- **Movie Discovery** with ratings, descriptions, and detailed information
- **Booking Flow** with show time and seat selection
- **Payment Processing** with form validation
- **Digital Tickets** with QR codes for theater entry
- **User Profile** with booking history

## Project Structure

```
MovieMagic/
├── app.py              # Main Flask application
├── requirements.txt    # Python dependencies
├── README.md          # This file
├── templates/         # HTML templates
│   ├── index.html
│   ├── login.html
│   ├── signup.html
│   ├── dashboard.html
│   ├── movie_details.html
│   ├── booking.html
│   ├── payment.html
│   ├── confirmation.html
│   └── profile.html
└── static/           # Static assets
    ├── css/         # Stylesheets
    │   ├── style.css
    │   ├── auth.css
    │   ├── dashboard.css
    │   ├── movie_details.css
    │   ├── booking.css
    │   ├── payment.css
    │   ├── confirmation.css
    │   └── profile.css
    └── js/          # JavaScript files
        └── script.js
```

## Routes

- `/` - Home page with app introduction
- `/login` - User login form
- `/signup` - User registration form
- `/dashboard` - Movie browsing with search and filters
- `/movie/<id>` - Detailed movie information
- `/booking/<id>` - Booking form for selected movie
- `/payment/<id>` - Payment processing page
- `/confirm_booking/<id>` - Booking confirmation with QR code
- `/profile` - User profile and booking history
- `/logout` - User logout

## Installation

1. **Clone or download** the project files to your local machine
2. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
3. **Run the application**:
   ```bash
   python app.py
   ```
4. **Open your browser** and navigate to `http://localhost:5000`

## Dependencies

- Flask==2.3.3
- Flask-SQLAlchemy==3.0.5
- Flask-Login==0.6.2
- Flask-WTF==1.1.1
- Werkzeug==2.3.7
- requests==2.31.0
- qrcode==7.4.2
- Pillow==10.0.1
- python-dotenv==1.0.0

## Password Requirements

The application enforces strong password policies:
- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number

## TMDB API Integration

The application fetches movie data from The Movie Database (TMDB) API:
- Fetches 20+ popular movies
- Provides detailed movie information including ratings, descriptions, and genres
- Supports search functionality with real-time suggestions
- Includes movie posters and backdrop images

## Features Highlights

### Search & Discovery
- Real-time search suggestions from TMDB
- Search history tracking
- Category-based filtering (Action, Romance, Comedy, Disney, Sci-Fi)
- Language filtering (English/Non-English)

### Booking System
- Select show times and seat numbers
- Real-time booking summary updates
- Secure payment form with validation
- QR code generation for digital tickets

### User Management
- Secure user registration with password validation
- Login/logout functionality
- User profile with booking history
- Session-based search history

### Responsive Design
- Mobile-first approach
- Grid-based movie layouts
- Smooth animations and transitions
- Dark mode toggle for user preference

## Development Notes

- The application uses SQLite for database storage (moviemagic.db)
- QR codes are generated and saved in the static/qr_codes/ directory
- All templates use Jinja2 templating engine
- CSS uses modern features like CSS Grid and Flexbox
- JavaScript includes utility functions for forms, modals, and user interactions

## Future Enhancements

Potential improvements that could be added:
- Movie trailers and video content
- User reviews and ratings
- Multiple theater locations
- Advanced seat selection interface
- Email notifications for bookings
- Admin dashboard for movie management
- Advanced analytics and reporting

## License

This project is created for educational purposes and demonstration of Flask web development skills.