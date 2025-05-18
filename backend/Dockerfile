FROM python:3.11-slim

RUN apt-get update && \
    apt-get install -y nikto && \
    pip install fastapi uvicorn

WORKDIR /app
COPY app /app

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

