# SoJourn

# Sojourn

Sojourn is a web application for listing and reviewing places to stay. Users can browse, add, edit, and review listings. It uses Node.js, Express, MongoDB, and Passport.js for authentication.

## Live Demo
Check out the live version here: [Sojourn on Render](https://sojourn-hnxq.onrender.com)

## Features
- User authentication with Passport.js
- Create, edit, and delete listings
- Add and delete reviews for listings
- Flash messages for notifications
- Persistent sessions stored in MongoDB

## Technologies Used
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** EJS, Bootstrap, JavaScript
- **Authentication:** Passport.js (Local Strategy)
- **Session Management:** express-session, connect-mongo
- **Deployment:** Render (for hosting), MongoDB Atlas (for database)

## Installation & Setup

### Prerequisites
- Node.js & npm installed
- MongoDB Atlas account with a database
- Render account for deployment

### Steps
1. **Clone the repository**
   ```sh
   git clone <repo-link>
   cd sojourn
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add:
   ```sh
   ATLASDB_URL=<your_mongodb_atlas_url>
   SECRET=<your_session_secret>
   ```

4. **Run the app locally**
   ```sh
   node app.js
   ```
   The server will start on `http://localhost:8080`

## Deployment on Render
- The app is deployed on Render with MongoDB Atlas.
- Make sure to add `ATLASDB_URL` and `SECRET` in Render's Environment Variables settings.
- Render automatically detects changes and redeploys the application.

## Folder Structure
```
sojourn/
│-- models/           # Mongoose schemas for Listings & Users
│-- routes/           # Express routers for listings, users, and reviews
│-- views/            # EJS templates
│-- public/           # Static files (CSS, JS, Images)
│-- utils/            # Custom error handling
│-- app.js            # Main application entry point
│-- package.json      # Dependencies and scripts
│-- .env              # Environment variables (not committed)
```

## Contributing
Feel free to fork this project and contribute! Open a pull request for any improvements.

## License
MIT License

