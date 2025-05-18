import subprocess

def run_nikto_scan(target_url: str) -> str:
    try:
        result = subprocess.run(
            ["nikto", "-host", target_url],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True
        )
        if result.returncode != 0:
            return f"Error: {result.stderr}"
        return result.stdout
    except Exception as e:
        return str(e)
