import React from 'react';
import ScannerForm from './components/ScannerForm';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Nikto Web Scanner</h1>
        <ScannerForm />
      </div>
    </div>
  );
}