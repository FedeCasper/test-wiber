# FARM Stack base proyect

## Description

This project is a simple CRUD (Create, Read, Update, Delete) application developed using the FARM stack (FastAPI, React, MongoDB). It facilitates the creation and versioning of scripts, storing them in a comprehensive change history. Additionally, the application allows for efficient script filtering directly from the database.

## Usage Options

## `Option 1: Docker`

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop) installed on your machine.

### Deployment Using Docker

The application is dockerized for easy deployment in a multi-container setup. Follow these steps:

1. Navigate to the root of the project.
2. Run the containers:
```Bash
   docker-compose up -d
```
3. Open your web browser and go to `http://localhost:3000` to interact with the application.

## `Option 2: Usage Without Docker`

### Steps

1. Clone the Repository:
   ```bash
   git clone https://github.com/your/repository.git

### Prerequisites

- Node.js (v20.10.0)
- Vite.js (v5.0.2)
- React.js (v18.2.0)
- Python (v3.12.0)
- Fastapi (v0.104.1)
- Uvicorn (v0.24.0.post1)

### Configuration

1. Clone the repository: `git clone https://github.com/FedeCasper/test-wiber.git`
2. Navigate to the project directory: `cd test-wiber`
3. Install backend dependencies:
   cd Backend 
   python -m venv venv ( Creates virtual enviroment )
   source venv\Scripts\activate ( Activate the vitual enviroment for Windows )
   pip install -r requirements.txt.
4. Return to the main directory: `cd ..`
5. Install frontend dependencies:
   cd Frontend
   npm install

### Instalación

1. Open a new terminal (CMD) and navigate to the backend directory
2. Start the backend service: `uvicorn main:app --reload`
3. Open a new terminal (Bash) and navigate to the frontend directory
4. Start the frontend: `npm run dev`
5. Open your browser and visit `http://localhost:3000`

### Project Structure

- `/backend`: Backend source code
- `/frontend`: Frontend source code

### Usage

The application features a welcoming section and a dashboard section where you can perform Create, Read, Update, and Delete operations on scripts.

### Database

This project uses MongoDB Atlas as its database. Ensure you have an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and follow these steps:

1. Create a cluster in MongoDB Atlas.
2. Configure your cluster's security by allowing access from any IP address (0.0.0.0/0) or adjust it according to your security needs.
3. Create a database user with the necessary permissions.
4. Get the MongoDB Atlas connection string. It should have a format similar to: `mongodb+srv://<username>:<password>@cluster0.mongodb.net/<database_name>?retryWrites=true&w=majority`

Remember to update the connection details in both the backend configuration and the Docker Compose file to link it with your desired database.

### Known Issues

 - This project structure may not work with Node.js versions below 14. 
 - Please be aware that the setup of the virtual environment may vary based on the operating system. 
 - Additionally, ensure that Vite is included among the development dependencies.
 - Dockerfiles include tools for making requests between containers and verifying their connection.

### Contact

For any questions or issues, feel free to reach out at federicorouyere@gmail.com .

### Contribution

Contributions are welcome! Please follow the standard contribution workflow.


