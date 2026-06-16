# Inventory Management System

A full-stack Inventory Management System built with **FastAPI**, **React**, **SQLite**, **Docker**, and deployed using **Render** and **Vercel**.

---

## 🚀 Live Demo

### Frontend

https://inventory-management-system-seven-lilac.vercel.app

### Backend API

https://inventory-management-system-cz32.onrender.com

### API Documentation (Swagger UI)

https://inventory-management-system-cz32.onrender.com/docs

---

# 📌 Features

### Product Management

* Add products
* View products
* Update products
* Delete products

### Customer Management

* Add customers
* View customers
* Update customers
* Delete customers

### Order Management

* Create orders
* View orders
* Delete orders

### Dashboard

* Total products
* Total customers
* Total orders
* Low stock products
* Recent orders

### API Features

* RESTful APIs
* FastAPI Swagger documentation
* Proper error handling
* CORS support

### Docker Support

* Backend containerization
* Frontend containerization
* Docker Compose support

---

# 🛠 Tech Stack

## Frontend

* React
* Axios
* Bootstrap
* React Router DOM

## Backend

* FastAPI
* SQLAlchemy
* Pydantic
* Uvicorn

## Database

* SQLite

## Deployment

* Render (Backend)
* Vercel (Frontend)

## Containerization

* Docker
* Docker Compose

---

# 📂 Project Structure

```
inventory-management-system/
│
├── backend/
│   ├── app/
│   │   ├── routers/
│   │   │   ├── product.py
│   │   │   ├── customer.py
│   │   │   └── order.py
│   │   ├── database.py
│   │   ├── dependencies.py
│   │   ├── main.py
│   │   ├── models.py
│   │   └── schema.py
│   │
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api.js
│   │   ├── App.js
│   │   └── index.js
│   │
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
```

---

# ⚙️ Backend Setup

### Clone Repository

```bash
git clone https://github.com/soumya-bej/inventory-management-system.git
cd inventory-management-system
```

### Go to Backend

```bash
cd backend
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Start Server

```bash
python -m uvicorn app.main:app --reload
```

Backend runs on:

```
http://localhost:8000
```

Swagger Documentation:

```
http://localhost:8000/docs
```

---

# ⚙️ Frontend Setup

### Go to Frontend

```bash
cd frontend
```

### Install Dependencies

```bash
npm install
```

### Start React App

```bash
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

# 🐳 Docker Setup

### Build Containers

```bash
docker compose build
```

### Start Containers

```bash
docker compose up
```

### Stop Containers

```bash
docker compose down
```

---

# 📸 Screenshots

### Dashboard

* Total Products
* Total Customers
* Total Orders
* Low Stock Products

### Products Page

* Create Product
* Update Product
* Delete Product

### Customers Page

* Create Customer
* Update Customer
* Delete Customer

### Orders Page

* Create Order
* Delete Order

---

# API Endpoints

## Products

| Method | Endpoint       |
| ------ | -------------- |
| GET    | /products      |
| POST   | /products      |
| PUT    | /products/{id} |
| DELETE | /products/{id} |

## Customers

| Method | Endpoint        |
| ------ | --------------- |
| GET    | /customers      |
| POST   | /customers      |
| PUT    | /customers/{id} |
| DELETE | /customers/{id} |

## Orders

| Method | Endpoint     |
| ------ | ------------ |
| GET    | /orders      |
| POST   | /orders      |
| DELETE | /orders/{id} |

---

# Future Improvements

* Authentication (JWT)
* PostgreSQL Integration
* Dockerized Database
* Search and Filtering
* Pagination
* User Roles
* Export Reports to Excel/PDF

---

# Author

### Soumya Bej

GitHub:
https://github.com/soumya-bej

---

⭐ If you found this project useful, please give it a star!
