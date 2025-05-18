from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from .nikto_scan import run_nikto_scan

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ScanRequest(BaseModel):
    url: str

@app.post("/scan")
async def scan_url(request: ScanRequest):
    try:
        result = run_nikto_scan(request.url)
        return {"result": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
    