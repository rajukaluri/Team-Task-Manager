 # Team Task Manager
A full-stack, AI-ready MERN (MongoDB, Express, React, Node.js) task management application. This project is optimized for MERN architecture, deployment on Railway and Vercel, and scalable backend/frontend integration.

🛠️ Technology Stack
Frontend
Core: React 19, Vite, React Router DOM

HTTP Client: Axios

UI Components: Lucide React

Backend & Database
Runtime: Node.js, Express

Database: MongoDB, Mongoose

Authentication: JWT (JSON Web Tokens), bcryptjs

 Deployment Platforms: Railway (Backend), Vercel (Frontend)
 
 📦 Project Structure
Plaintext
team-task-manager/
├── frontend/                 
│   ├── src/                  
│   │   └── services/         
│   ├── package.json
│   └── ...
├── routes/                   
├── index.js                  
├── vercel.json               
├── package.json              
└── README.md

⚙️ Configuration & Environment Setup
Prerequisites
Make sure you have Node.js (v18+ recommended) and MongoDB installed locally or access to MongoDB Atlas.

1. Clone the repository
Bash
git clone https://github.com/your-username/team-task-manager.git
cd team-task-manager
2. Configure Backend Environment
Create a .env file in the root directory:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
3. Install Dependencies
Bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
🚀 Running the Project Locally
1. Run the Backend
From the root directory:

Bash
npm run dev
The server will start on http://localhost:5000.

2. Run the Frontend
In a separate terminal tab:

Bash
cd frontend
npm run dev
The application UI will start on http://localhost:5173.

🌐 Production Deployments
This architecture is optimized to separate resources across platforms for maximum performance and efficiency:

Backend: Deployed on Railway (https://team-task-manager-production-e5fe.up.railway.app)

Frontend: Deployed on Vercel

Integration Architecture
👤 Author
Raju Kaluri

Graduating Class of 2026 – B.Tech in Computer Science and AI

Passionate about scalable, AI-First full-stack development.

📜 License
This project is licensed under the ISC License.
