import { useState } from 'react';
import chatBotLogo from '/ChatBot.svg'
import CloseIcon from '@mui/icons-material/Close';
import './Chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
        <img src={chatBotLogo} className="chatbot-logo"></img>
      </div>
      {isOpen && (
        <div className="chatbox">
          <p><strong>Chatbot:</strong> Hi! How can I help you today?</p>
          {/* Replace with real chat content or chatbot integration */}
        </div>
      )}
    </>
  );
}
