import {useState, useRef, useEffect} from 'react';
import chatBotLogo from '/ChatBot.svg'
import './Chatbot.css';

import CloseIcon from '@mui/icons-material/Close';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const intervalRef = useRef(null);

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setElapsedSeconds(0);
      intervalRef.current = setInterval(() => {
        setElapsedSeconds(prev => prev + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleReset = () => {
    setMessages([]);
    setElapsedSeconds(0);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { sender: 'user', text: message }]);
      
      setMessage('');

      const response = getPlaceholderResponse();
      
      // add a timeout of 500ms to simulate real time chatbot
      setTimeout(() => {
        const response = getPlaceholderResponse();
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'chatbot', text: response }
        ]);
      }, 500);;
    }
  };

  const getPlaceholderResponse = () => {
    return 'Thank you for your query! We will get back to you as soon as possible.';
  };

  return (
    <>
      <div className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
        <img src={chatBotLogo} className="chatbot-logo"></img>
      </div>
      {isOpen && (
         <div className="chatbox">
         <div className="chatbox-topbar">
           <span className="elapsed-time">{elapsedSeconds}s</span>
           <div className="topbar-buttons">
             <IconButton size="small" onClick={handleReset}>
               <RestartAltIcon sx={{ color: 'white' }} />
             </IconButton>
             <IconButton size="small" onClick={handleClose}>
               <CloseIcon sx={{ color: 'white' }} />
             </IconButton>
           </div>
         </div>
         <div className="chatbox-content">
         {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${msg.sender === 'user' ? 'user-message' : 'chatbot-message'}`}
            >
              <p>{msg.text}</p>
            </div>
          ))}
          </div>
         <div className="chatbox-input">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              InputProps={{
                endAdornment: (
                  <Button onClick={sendMessage} color="primary">
                    <SendIcon />
                  </Button>
                ),
              }}
            />
         </div>
         </div>
      )}
    </>
  );
}
