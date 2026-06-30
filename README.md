# DevOps Project

## Team Members

- Morad
- leenfteme39-bot

---

## Project Architecture

This project demonstrates a simple DevOps pipeline using Docker, Nginx, GitHub Actions and a Node.js application.

### Components

- Node.js Application
- Nginx Reverse Proxy
- Docker
- Docker Compose
- GitHub Actions

### Database

No database was used in this project because it is a simple web application.

### Reverse Proxy

Nginx is configured as a Reverse Proxy. It receives client requests and forwards them to the Node.js application.

### Communication Between Services

Client
↓
Nginx
↓
Node.js Application

Docker Compose connects the services together.

---

## CI Pipeline

The CI pipeline runs automatically on every push and pull request.

It performs the following checks:

- Checkout repository
- Check that the `.env` file is not committed
- Check HTML files
- Build Docker image

---

## Screenshots

### GitHub Actions Success

### Nginx 403 Forbidden

---

## Technologies Used

- Git
- GitHub
- GitHub Actions
- Docker
- Docker Compose
- Nginx
- Node.js