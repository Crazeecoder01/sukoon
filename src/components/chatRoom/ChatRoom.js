// src/chatRoom/ChatRoom.js
import React, { useState, useEffect } from 'react';
import { collection, query, where, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import Message from './Message';
import ChatInput from './ChatInput';
import { Container, Typography, Paper, List } from '@mui/material';

const ChatRoom = ({ userId, displayName, room }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (room) {
      const messagesRef = collection(db, 'chatRooms');
      const q = query(messagesRef, where('room', '==', room), orderBy('timestamp'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      });
      return () => unsubscribe();
    }
  }, [room]);

  const sendMessage = async (text) => {
    if (userId) {
      await addDoc(collection(db, 'chatRooms'), {
        text,
        uid: userId,
        displayName: displayName || 'Anonymous',
        room,
        timestamp: serverTimestamp(),
      });
    }
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
