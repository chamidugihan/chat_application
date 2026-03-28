# 💬 MERN CHAT APP

<div align="center">

![Chat App Banner](https://img.shields.io/badge/MERN%20CHAT%20APP-Real--Time%20Chat-blue?style=for-the-badge&logo=chatbot&logoColor=white)

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Socket.IO](https://img.shields.io/badge/Socket.IO-Real--Time-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

<br/>

> ✦ A full-stack real-time chat application built with the MERN stack, Socket.IO, and TailwindCSS

<br/>

![Demo](https://img.shields.io/badge/Status-Live-success?style=flat-square&logo=render)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)
![Made with Love](https://img.shields.io/badge/Made%20with-❤️-FF0080?style=flat-square)

</div>

---

## 🌐 Live Demo

<div align="center">

[![Live Demo](https://img.shields.io/badge/MERN%20CHAT%20APP-Live%20Demo-blue?style=for-the-badge&logo=render&logoColor=white)](https://chat-application-t5dy.onrender.com)

### 🔗 [https://chat-application-t5dy.onrender.com](https://chat-application-t5dy.onrender.com)

> ⚠️ The app is hosted on Render's free tier — it may take **30–60 seconds** to wake up on first load.

</div>

---

## ✨ Features

- 🔐 **Authentication** — Secure JWT-based signup & login with bcrypt password hashing
- 💬 **Real-Time Messaging** — Instant message delivery powered by Socket.IO
- 🟢 **Online Presence** — See which users are currently online
- 🔔 **Message Notifications** — Shake animation on new incoming messages
- 🎨 **Dynamic Avatars** — Auto-generated profile pictures via DiceBear API
- 🌙 **Beautiful UI** — Glassmorphism design with TailwindCSS & DaisyUI
- ⚡ **Real-time State** — Zustand for instant UI updates
- 📱 **Responsive** — Works on mobile, tablet and desktop

---

## 🖥️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 19, Vite, TailwindCSS, DaisyUI, Zustand |
| **Backend** | Node.js, Express.js 5 |
| **Database** | MongoDB, Mongoose |
| **Real-Time** | Socket.IO |
| **Auth** | JWT, bcryptjs, Cookie Parser |
| **Icons** | React Icons, Lucide React |

---

## 🚀 Getting Started

### Prerequisites

- Node.js `v18+`
- MongoDB Atlas account or local MongoDB
- Git

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/chamidugihan/mern-chatapp.git
cd mern-chatapp
```

**2. Install dependencies**
```bash
# Install backend dependencies
npm install

# Install frontend dependencies
npm install --prefix frontend
```

**3. Set up environment variables**

Create a `.env` file in the root directory:
```env
PORT=5000
MONGO_DB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

**4. Run the app**

Backend (Terminal 1):
```bash
npm run server
```

Frontend (Terminal 2):
```bash
cd frontend && npm run dev
```

**5. Open in browser**
```
http://localhost:5173
```

---

## 📁 Project Structure

```
mern-chatapp/
├── backend/
│   ├── controllers/        # Auth, Message, User controllers
│   ├── db/                 # MongoDB connection
│   ├── middleware/          # JWT auth middleware
│   ├── models/             # User, Message, Conversation models
│   ├── routes/             # Express route definitions
│   ├── socket/             # Socket.IO server setup
│   ├── utils/              # Token generator, helpers
│   └── server.js           # Entry point
│
├── frontend/
│   └── src/
│       ├── components/     # Messages, Sidebar, Navbar, Skeletons
│       ├── context/        # Auth & Socket context providers
│       ├── hooks/          # Custom hooks (useLogin, useSendMessage, etc.)
│       ├── pages/          # Login, Signup, Home pages
│       ├── utils/          # extractTime, emoji helpers
│       └── zustand/        # Global state store
│
├── .env
├── package.json
└── README.md
```

---

## 🔗 API Endpoints

### Auth — `/api/auth`
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/signup` | Register a new user |
| `POST` | `/login` | Login an existing user |
| `POST` | `/logout` | Logout current user |

### Messages — `/api/messages`
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/:id` | Get messages with a user |
| `POST` | `/send/:id` | Send a message to a user |

### Users — `/api/users`
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Get all users for sidebar |

---

## ⚡ Socket.IO Events

| Event | Direction | Description |
|-------|-----------|-------------|
| `newMessage` | Server → Client | Delivers a new message in real time |
| `getOnlineUsers` | Server → Client | Broadcasts list of online user IDs |

---

## 🌐 Deployment on Render

1. Push code to GitHub
2. Create new **Web Service** on [Render](https://render.com)
3. Set **Build Command:**
```bash
npm install && npm install --prefix frontend && npm run build --prefix frontend
```
4. Set **Start Command:**
```bash
npm start
```
5. Add environment variables:
   - `MONGO_DB_URI` = your MongoDB URI
   - `JWT_SECRET` = your secret key
   - `NODE_ENV` = `production`
   - `PORT` = `5000`

---

## 📸 Screenshots

> Add screenshots of your app here
<img width="1877" height="1042" alt="Image" src="https://github.com/user-attachments/assets/633f8060-6c52-475c-804f-95db867e228e" />
<img width="1894" height="1035" alt="Image" src="https://github.com/user-attachments/assets/dd04b03b-786c-4351-a027-563347a9efb0" />
<img width="1895" height="1056" alt="Image" src="https://github.com/user-attachments/assets/d21f7649-91c7-41a8-b5df-321f9b83b241" />
<img width="1905" height="1052" alt="Image" src="https://github.com/user-attachments/assets/59270762-abb2-4329-a03c-1ffeed3637fb" />
---

## 🛠️ Environment Variables

```env
PORT=5000
MONGO_DB_URI=mongodb+srv://...
JWT_SECRET=your_secret_key
NODE_ENV=development
```

---

## 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

**✦ Built with 💙 by Chamidu Gihan ✦**

[![GitHub](https://img.shields.io/badge/GitHub-chamidugihan-181717?style=flat-square&logo=github)](https://github.com/chamidugihan)

</div>
