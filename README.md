# MERN Bug Tracker 🐞

A full-stack bug tracking application built with the MERN stack (MongoDB, Express, React, Node.js).

![App Screenshot](/Screenshot 2025-07-18 170138.png)

## Features ✨

- Create, view, update, and delete bugs
- Track bug status (Open, In Progress, Resolved)
- Set priority levels (Low, Medium, High)
- Responsive design for all devices
- Comprehensive error handling
- RESTful API backend

## Tech Stack 🛠️

**Frontend:**
- React 18
- React Router 6
- Axios for API calls
- CSS Modules for styling
- React Testing Library/Jest for testing

**Backend:**
- Node.js/Express
- MongoDB/Mongoose
- CORS middleware
- REST API design

## Prerequisites 📋

- Node.js v16+
- MongoDB (local or Atlas)
- npm or yarn

## Installation 🚀

### 1. Clone the repository
```bash
git clone https://github.com/MellonP/mern-bug-tracker.git
cd mern-bug-tracker

## Project Structure

```
mern-testing/
├── client/                 # React front-end
│   ├── src/                # React source code
│   │   ├── components/     # React components
│   │   ├── tests/          # Client-side tests
│   │   │   ├── unit/       # Unit tests
│   │   │   └── integration/ # Integration tests
│   │   └── App.jsx         # Main application component
│   └── cypress/            # End-to-end tests
├── server/                 # Express.js back-end
│   ├── src/                # Server source code
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Mongoose models
│   │   ├── routes/         # API routes
│   │   └── middleware/     # Custom middleware
│   └── tests/              # Server-side tests
│       ├── unit/           # Unit tests
│       └── integration/    # Integration tests
├── jest.config.js          # Jest configuration
└── package.json            # Project dependencies
```

Configuration
MONGO_URI=mongodb://localhost:27017/bugtracker
PORT=5000
FRONTEND_URL=http://localhost:3000

Testing 🧪
Run backend tests
bash = cd server
npm test

Run frontend tests
bash = cd client
npm test

Contributing 🤝
1. Fork the project

2. Create your feature branch (git checkout -b feature/AmazingFeature)

3. Commit your changes (git commit -m 'Add some amazing feature')

4. Push to the branch (git push origin feature/AmazingFeature)

5. Open a Pull Request

License 📄
This project is licensed under the MIT License - see the LICENSE file for details.

## Author 👩💻
MellonP  