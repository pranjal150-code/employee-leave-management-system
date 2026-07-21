# Employee Leave Management System

A full-stack web application for managing employee records and leave requests. The system provides separate dashboards for administrators and employees.

## Features

- User Registration & Login
- Forgot Password & Reset Password
- Admin Dashboard
- Employee Dashboard
- Add, Edit & Delete Employees
- Apply for Leave
- Approve/Reject Leave Requests
- Leave History
- Role-Based Authentication

## Tech Stack

### Frontend
- React
- Vite
- React Router
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

## Project Structure

```text
employee-leave-management-system/
│
├── backend/
├── public/
├── src/
├── package.json
├── vite.config.js
└── README.md
```

## Installation

### Frontend

```bash
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the `backend` folder.

```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Author

**Pranjal Prakash**

GitHub: https://github.com/pranjal150-code

## License

This project is developed for educational purposes.