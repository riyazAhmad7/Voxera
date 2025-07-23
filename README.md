<h1 align="center">
  <img src="frontend/public/favicon.svg" width="40" alt="Voxera Logo" />
  <span style="vertical-align: middle;">Voxera</span>
</h1>
<p align="center">
  <b>Chat. Learn. Grow.</b><br>
  <i>The ultimate language exchange and chat platform for global learners.</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000000?logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?logo=cloudinary&logoColor=white" />
  <img src="https://img.shields.io/badge/Stream-005FFF?logo=stream&logoColor=white" />
  <img src="https://img.shields.io/badge/Deployed%20on-Render-46E3B7?logo=render&logoColor=white" />
  <img src="https://img.shields.io/badge/Deployed%20on-Vercel-000?logo=vercel&logoColor=white" />
</p>

---

## 🚀 Overview

**Voxera** is a full-stack chat and language exchange platform designed for seamless real-time messaging, video calls, and global language learning. Built with modern technologies, Voxera offers a beautiful, responsive UI and a robust backend, making it perfect for both end-users and developers.

---

## ✨ Features

- **🔐 Authentication & Onboarding**
  - Secure JWT authentication
  - Onboarding flow to complete user profiles (bio, languages, location, avatar)
- **💬 Real-Time Chat**
  - 1-on-1 and group messaging
  - Typing indicators, reactions, and message threads
- **📹 Video Calling**
  - 1-on-1 and group video calls
  - Screen sharing and recording
- **🌍 Language Exchange**
  - Match with users based on native and learning languages
  - Discover and connect with new learners
- **🧑‍🤝‍🧑 Friend System**
  - Send, accept, and manage friend requests
  - See online status and friend lists
- **🔔 Notifications**
  - Real-time notifications for friend requests and chat events
- **🎨 Theming**
  - 32+ beautiful UI themes (light/dark and more)
- **🖼️ Profile Management**
  - Update name, bio, languages, and profile picture (Cloudinary upload)
- **🔎 Powerful Search**
  - Search friends and users by name, native language, or learning language
- **🌐 Modern Tech Stack**
  - React + Vite + TailwindCSS + Zustand + React Query
  - Express + MongoDB + JWT + Stream API
- **⚡️ Fast & Scalable**
  - Deployed on Render (backend) and Vercel (frontend)
- **📱 Responsive Design**
  - Works beautifully on desktop and mobile

---

## 🛠️ Tech Stack

| Frontend                                                                                                                                                                                                                                                                                                | Backend                                                                                                                                                                                                                                                                     | Realtime/Media                                                                                 | Storage                                                                                        | Deployment                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![React](https://img.shields.io/badge/-React-20232A?logo=react&logoColor=61DAFB) <br> ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white) <br> ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white) <br> Zustand <br> React Query | ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white) <br> ![Express](https://img.shields.io/badge/-Express-000000?logo=express&logoColor=white) <br> ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white) | ![Stream](https://img.shields.io/badge/-Stream-005FFF?logo=stream&logoColor=white) <br> WebRTC | ![Cloudinary](https://img.shields.io/badge/-Cloudinary-3448C5?logo=cloudinary&logoColor=white) | ![Render](https://img.shields.io/badge/-Render-46E3B7?logo=render&logoColor=white) <br> ![Vercel](https://img.shields.io/badge/-Vercel-000?logo=vercel&logoColor=white) |

---

## 📸 Screenshots

<p align="center">
  <img src="frontend/public/screenshot-for-readme.png" alt="Voxera Screenshot" width="700"/>
</p>

---

## ⚙️ Getting Started

### 1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/voxera.git
cd voxera
```


### 3. **Install Dependencies**

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

### 4. **Run Locally**

#### Backend

```bash
cd backend
npm run dev
```

#### Frontend

```bash
cd frontend
npm run dev
```

---

## 🚀 Deployment

### **Backend (Render)**

- Push your code to GitHub.
- Create a new Web Service on [Render](https://render.com/), set root to `/backend`, and add your environment variables.
- Set build command: `npm install`
- Set start command: `npm start`

### **Frontend (Vercel)**

- Push your code to GitHub.
- Import your repo on [Vercel](https://vercel.com/), set root to `/frontend`, and add your environment variables.
- Set framework to **Vite**.
- Deploy!

---

## 🧩 Folder Structure

```
voxera/
├── backend/      # Express API, MongoDB models, controllers, routes
├── frontend/     # React app, Vite, TailwindCSS, Zustand, etc.
├── README.md
└── ...
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open an issue or submit a pull request.

---

## 📄 License

This project is [MIT](LICENSE) licensed.

---

## 🙏 Acknowledgements

- [Lucide Icons](https://lucide.dev/)
- [Stream API](https://getstream.io/)
- [Cloudinary](https://cloudinary.com/)
- [Render](https://render.com/)
- [Vercel](https://vercel.com/)
- [TailwindCSS](https://tailwindcss.com/)

---

<p align="center">
  <b>Voxera</b> — Chat. Learn. Grow.
</p>
