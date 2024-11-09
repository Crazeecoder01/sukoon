// src/chatRoom/ChatRoom.js
import React, { useState, useEffect } from 'react';
import ChatService from './ChatService';
import Message from './Message';
import ChatInput from './ChatInput';
import { Container, Typography, Paper, List } from '@mui/material';

const ChatRoom = ({ userId, displayName, room }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (room) {
      const unsubscribe = ChatService.subscribeToMessages(room, setMessages);
      return () => unsubscribe();
    }
  }, [room]);

  const sendMessage = (text) => {
    ChatService.sendMessage(room, { text, uid: userId, displayName });
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h5" gutterBottom>{`Chat Room: ${room}`}</Typography>
      <Paper elevation={3} style={{ padding: '1rem', maxHeight: '60vh', overflowY: 'auto' }}>
        <List>
          {messages.map(message => (
            <Message key={message.id} message={message} userId={userId} />
          ))}
        </List>
      </Paper>
      <ChatInput onSend={sendMessage} />
    </Container>
  );
};

export default ChatRoom;
