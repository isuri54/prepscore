## PrepScore — ML-Based Interview Score Prediction System

[![CI/CD](https://github.com/isuri54/prepscore/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/isuri54/prepscore/actions/workflows/ci-cd.yml)
Frontend: http://localhost:4200 | Backend: http://localhost:8000

PrepScore is a full-stack machine learning web application designed exclusively for IT candidates to predict interview success scores based on skills, GPA, experience, and certifications.
The system combines Angular frontend, FastAPI backend, and a trained ML model (RandomForest), following modern DevOps and production-grade practices such as Docker, automated testing, and CI/CD pipelines.

## Features
Interview Score Prediction :
Candidates input academic and professional details, and the system predicts an interview success score using a trained machine learning model.

Machine Learning–Powered Backend :
A pre-trained ML pipeline (stored as .pkl files) processes inputs, performs preprocessing, and returns accurate predictions via REST APIs.

High-Performance API (FastAPI) :
Fast, lightweight, and scalable backend built with FastAPI, offering clean request validation and structured JSON responses.

Automated Backend Testing :
Backend endpoints are tested using pytest and FastAPI TestClient, ensuring API reliability and correctness.

Clean & Responsive Frontend (Angular) :
User-friendly Angular interface with production-grade builds, responsive layout, and seamless API integration.

Dockerized Full-Stack Architecture :
Frontend and backend run in separate containers, orchestrated with Docker Compose for easy setup and deployment.

CI/CD Ready :
GitHub Actions pipeline automatically:
Installs dependencies
Runs backend tests
Builds Angular production assets
Builds Docker images on every push or pull request

## Tech Stack

Frontend : Angular, TypeScript, HTML / CSS
Backend : Python, FastAPI, Uvicorn, Machine Learning, Scikit-learn, Pickle (.pkl model & scaler)
Testing : Pytest, FastAPI TestClient
Containerization & DevOps : Docker, Docker Compose, GitHub Actions (CI/CD)

## Screenshots

<img width="1919" height="913" alt="Screenshot 2025-12-22 005928" src="https://github.com/user-attachments/assets/fdae7e72-46ec-4322-963b-b027de503ebd" />
<img width="1919" height="916" alt="Screenshot 2025-12-22 005944" src="https://github.com/user-attachments/assets/bf5eea44-fe70-4928-8ae1-68e42bc19539" />
<img width="1919" height="911" alt="Screenshot 2025-12-22 010106" src="https://github.com/user-attachments/assets/e461be88-3fe1-4947-9533-3253675259d0" />

## Getting Started
(Docker)
Clone the repository:
git clone https://github.com/isuri54/prepscore.git
cd prepscore

docker compose up --build

(Manual Setup)
#Backend
cd backend
pip install -r requirements.txt
uvicorn app.main:app --reload

#Frontend
cd frontend/prepscore-ui
npm install
npm start
