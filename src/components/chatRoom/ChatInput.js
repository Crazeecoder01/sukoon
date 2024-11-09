// src/chatRoom/ChatInput.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const ChatInput = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <Box mt={2} display="flex" gap={1}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type a message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSend}>
        Send
      </Button>
    </Box>
  );
};

export default ChatInput;
