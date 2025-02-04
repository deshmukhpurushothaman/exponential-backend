# Backend for Clicker Game

This repository contains the backend for a Clicker Game application. The backend is built using **Node.js**, **Mongoose** (for MongoDB), and various other tools for managing database connections, user interactions, and business logic.

## Features

- **MongoDB Atlas** for data storage.
- **Mongoose** for handling database operations.
- **Environment-based configuration** for flexibility (e.g., `.env` for MongoDB URL).
- **Connection error handling** and logging.

## Requirements

- **Node.js** (v14.x or later)
- **MongoDB Atlas** account for cloud database setup or local MongoDB instance.
- **npm** or **yarn** for package management.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/deshmukhpurushothaman/exponential-backend.git
   cd exponential-backend
   ```

2. Install the required dependencies:

```bash
npm install
# or
yarn install
```

3. Set up your MongoDB Atlas connection string:

- Go to MongoDB Atlas and create a new cluster if you don’t already have one.
- Create a new database and user with appropriate permissions.
- Whitelist your IP address or use `0.0.0.0/0` to allow all IP addresses (not recommended for production).

4. Create a .env file in the root directory with your MongoDB URL:

```bash
PORT=8000
MONGODB_URL=mongodb+srv://<your_username>:<your_password>@cluster0.jdt3y.mongodb.net/<your_db_name>?retryWrites=true&w=majority
```

Replace `<your_username>`, `<your_password>`, and `<your_db_name>` with your credentials and database name.

5. Running the Backend:

```bash
npm run dev
# or
yarn dev
```
