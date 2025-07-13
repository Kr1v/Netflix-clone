📺 Netflix Clone
A fully functional Netflix-inspired streaming app built with React and Firebase.
Includes user authentication, routing, and streaming interface.



🛠 Tech Stack
React+Firebase




✨ Features
🔐 Firebase Authentication (Sign in & Sign up)

🎬 Movie cards with hover effects

🎥 Video player view

🗺️ React Router for seamless navigation

📦 Fully deployed on Netlify

Coming Soon:

❤️ Add to Favorites

🔍 Movie Search functionality

📱 Responsive design

🔄 Continue Watching section

🔧 Setup Instructions
Clone the repo

bash
Copy
Edit
git clone https://github.com/kr1v/netflix-clone.git
cd netflix-clone
Install dependencies

bash
Copy
Edit
npm install
Configure Firebase

Create a Firebase project

Enable Email/Password auth

Create a .env file in root:

env
Copy
Edit
REACT_APP_FIREBASE_API_KEY=your_key
REACT_APP_AUTH_DOMAIN=your_app.firebaseapp.com
REACT_APP_PROJECT_ID=your_project_id
REACT_APP_STORAGE_BUCKET=your_app.appspot.com
REACT_APP_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_APP_ID=your_app_id
Start the app

bash
Copy
Edit
npm start
📁 Folder Structure
css
Copy
Edit
src/
├── assets/
├── components/
│    ├── navbar/
│      ├── Navbar.jsx
│      ├── Navbar.css
│    ├── TitleCarda/
│      ├── TitleCards.jsx
│      ├── TitleCards.css
│   ├── Player/
│      ├── Player.jsx
│      ├── Player.css
    
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Player.jsx
├── App.js
├── firebase.js

🚀 Deployment
Deployed on Netlify

Build command: npm run build

Publish directory: build

🙋‍♀️ Author
Made with ❤️ by Kr1v

📝 License
This project is for educational purposes only. Not affiliated with or endorsed by Netflix.
