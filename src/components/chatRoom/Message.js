// src/chatRoom/Message.js
import React from 'react';
import { ListItem, ListItemText, Typography } from '@mui/material';

const Message = ({ message, userId }) => {
  const isUser = message.uid === userId;
  return (
    <ListItem alignItems="flex-start" style={{ textAlign: isUser ? 'right' : 'left' }}>
      <ListItemText
        primary={<Typography variant="subtitle2" color="textSecondary">{message.displayName}</Typography>}
        secondary={
          <Typography
            variant="body1"
            style={{
              backgroundColor: isUser ? '#e1f5fe' : '#f1f1f1',
              padding: '0.5rem',
              borderRadius: '10px',
              display: 'inline-block',
            }}
          >
            {message.text}
          </Typography>
        }
      />
    </ListItem>
  );
};

export default Message;
