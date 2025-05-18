FROM python:3.11-slim

# Install dependencies for git, perl, and FastAPI
RUN apt-get update && \
    apt-get install -y git perl libnet-ssleay-perl openssl libwhisker2-perl libhtml-parser-perl && \
    pip install fastapi uvicorn

# Install Nikto manually
RUN git clone https://github.com/sullo/nikto.git /opt/nikto

# Set environment variable for easier command use
ENV PATH="/opt/nikto:$PATH"

WORKDIR /app
COPY app /app

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
