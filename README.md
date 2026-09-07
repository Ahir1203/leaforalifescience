# Leafora Life Science - Full-Stack Application Setup

A modern, production-ready full-stack project architecture featuring a **React (Vite)** frontend, **Node.js & Express** REST API backend, and **MySQL** database integration.

---

## 📁 Repository Structure

```
leaforalifescience/
├── frontend/                 # React Application (Vite)
│   ├── public/               # Static public assets
│   ├── src/
│   │   ├── assets/           # Media & static files
│   │   ├── components/       # Reusable UI components (Navbar, Footer, ProductCard)
│   │   ├── pages/            # Page components (Home, Products)
│   │   ├── services/         # API integration client (Axios)
│   │   ├── styles/           # CSS styling system & variables
│   │   ├── App.jsx           # React Router layout setup
│   │   ├── main.jsx          # React app entry point
│   │   └── index.css         # Global design system & theme
│   ├── package.json
│   └── vite.config.js        # Vite configuration & proxy rules
│
├── backend/                  # Node.js + Express REST API Server
│   ├── src/
│   │   ├── config/           # Database pool configuration (db.js)
│   │   ├── controllers/      # Request handlers (healthController, productController)
│   │   ├── middleware/       # Error handling & CORS middlewares
│   │   ├── models/           # Data access layer & SQL queries (productModel)
│   │   ├── routes/           # Express API router (api.js)
│   │   ├── app.js            # Express server initialization
│   │   └── server.js         # Entry point listener
│   ├── .env                  # Environment configuration
│   ├── .env.example          # Environment variables template
│   └── package.json
│
└── README.md
```

---

## ⚡ Quick Start Guide

### 1. Backend Setup (Express + MySQL)

```bash
cd backend
npm install
```

Create/check `.env` file in `backend/`:
```env
PORT=5000
NODE_ENV=development

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=leafora_db
DB_PORT=3306
```

Start backend development server:
```bash
npm run dev
```
Backend API will run at `http://localhost:5000/api`

---

## 🗄️ MySQL Database Schema (Optional Setup)

Run the following SQL script in your MySQL Workbench or command line client to populate the sample `leafora_db` database:

```sql
CREATE DATABASE IF NOT EXISTS leafora_db;
USE leafora_db;

CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  stock INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, category, price, stock) VALUES
('LeafExtract Pharma Grade', 'Herbal Extract', 49.99, 120),
('BioVital Nutraceutical', 'Supplements', 29.50, 85),
('EcoScience Active Solution', 'Biotech Formulation', 89.00, 40);
```

---

### 2. Frontend Setup (React + Vite)

```bash
cd frontend
npm install
npm run dev
```
Frontend app will run at `http://localhost:5173`

---

## 🔗 Main API Endpoints

- `GET /api/health` - System health check & MySQL connection status
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
