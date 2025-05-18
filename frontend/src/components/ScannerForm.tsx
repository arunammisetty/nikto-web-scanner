import React, { useState } from 'react';
import axios from 'axios';

export default function ScannerForm() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleScan = async () => {
    setLoading(true);
    setResult('');
    try {
      const response = await axios.post('http://localhost:8000/scan', { url });
      setResult(response.data.result);
    } catch (error: any) {
      setResult('Scan failed: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        className="w-full p-2 mb-4 text-black"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        onClick={handleScan}
        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Scanning...' : 'Scan'}
      </button>
      {result && (
        <pre className="mt-4 bg-gray-800 p-4 rounded overflow-auto max-h-96 whitespace-pre-wrap">
          {result}
        </pre>
      )}
    </div>
  );
}

