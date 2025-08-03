# MERN Stack E-Commerce Website 🛒

This is a MERN (MongoDB, Express.js, React, Node.js) stack e-commerce project currently **under development**. The goal is to build a full-featured online shopping platform with user authentication, product browsing, cart functionality, and more.

---

## 🚧 Project Status: Under Construction

> This project is a work in progress. So far, basic user authentication and some static pages have been implemented. More core features like product listings, checkout, and admin functionality are coming soon.

---

## ✅ Features Implemented So Far

### 🔐 Authentication
- User Registration
- User Login & Logout
- Auth Context using React Context API
- JWT-based authentication (backend)
- Secure password storage using bcrypt

### 🧭 Frontend Pages
- Home Page
- About Page
- Contact Page
- Policy Page
- Category Page (placeholder)
- Cart Page (placeholder)
- 404 Error Page

### ⚙️ Backend
- User Model (MongoDB)
- Auth Routes & Controllers
- Middleware for secure routes (in progress)
- Basic route structure in place

---

## 💡 Good Practices Followed

### ⚡️ Lazy Loading with `React.lazy()` + `Suspense`
- Pages like Home, Login, About, Contact, etc. are **lazy-loaded** to improve performance and reduce initial bundle size.
- A fallback `Loading` component ensures a smooth user experience while components are being loaded.

### 🧠 Context-Based State Management
- Authentication state (user & token) is managed globally using React’s Context API and a custom `useAuth` hook for clean access across components.

### 🔒 Secure Backend Authentication
- Passwords are securely hashed using `bcrypt`.
- JWT tokens are used for authentication and session management.
- Sensitive credentials are stored in `.env` files to keep them out of the source code.

### 💬 Toast Notifications
- User-friendly toast messages using `react-toastify` for login, logout, errors, and more.

### ♻️ Component Reusability
- Common UI components like `Header`, `Footer`, and `Loading` are modular and reused across pages.

---

## 🗂 Tech Stack

| Tech            | Description                           |
|-----------------|---------------------------------------|
| **Frontend**    | React, React Router, React Toastify   |
| **Backend**     | Node.js, Express.js                   |
| **Database**    | MongoDB, Mongoose                     |
| **Auth**        | JWT, bcrypt                           |
| **Dev Tools**   | Nodemon, concurrently, dotenv         |

---

## 🚀 Getting Started

### Prerequisites
- Node.js & npm
- MongoDB (local or Atlas)

### Clone the repository
```bash
git clone https://github.com/bharat40/MERN-WEBSITE-E-COMMERCE.git
cd MERN-WEBSITE-E-COMMERCE
