import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QRScanner = () => {
    const [scanResult, setScanResult] = useState(null);
  
    const handleScan = data => {
      if (data) {
        setScanResult(data);
        // Redirect to the login page with the scanned content
        window.location.href = `/login?code=${encodeURIComponent(data)}`;
      }
    };
  
    const handleError = error => {
      console.error(error);
    };
  
    return (
      <div>
        <h1>Scan the QR code</h1>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        {scanResult && <p>Scanned content: {scanResult}</p>}
      </div>
    );
  };
  
  export default QRScanner;
  