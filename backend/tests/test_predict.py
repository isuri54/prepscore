from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_predict_success():
    payload = {
        "Skills": ["Python", "Java"],
        "GPA": 3.4,
        "Experience": 2,
        "Certifications": 1
    }

    response = client.post("/predict", json=payload)

    assert response.status_code == 200
    assert "Predicted_Score" in response.json()
