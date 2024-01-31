import { useState } from "react";
import QRCode from 'react-qr-code';
import './styles.css';

export default function QrCodeGenerator() {
    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");
    const handleGeneratorQrCode=()=> {
        setQrCode(input);
        setInput('')
    }

    return (
        <div className="qr-code-generator">
            <h1> QR Code Generator </h1>
            <input
             onChange={(e) => setInput(e.target.value)}
              type="text" 
              name="qr-code" 
              value={input} 
              placeholder="Enter your Value Here" />
            <button disabled={input && input.trim() !== "" ? false : true}
             onClick={handleGeneratorQrCode}> Generate</button>
            <QRCode
                id="qr-code-value" value={qrCode} size={200} />

        </div>
    );
}