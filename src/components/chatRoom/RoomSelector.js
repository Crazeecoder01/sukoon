// src/chatRoom/RoomSelector.js
import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText } from '@mui/material';
import ChatRoom from './ChatRoom';

const RoomSelector = ({ userId, displayName }) => {
  const [open, setOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = ['Room 1', 'Room 2', 'Room 3', 'Room 4']; // Replace with dynamic fetching if needed

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
    handleClose();
  };

  return (
    <div>
      {!selectedRoom ? (
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Select a Chat Room
        </Button>
      ) : (
        <ChatRoom userId={userId} displayName={displayName} room={selectedRoom} />
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Select a Chat Room</DialogTitle>
        <DialogContent>
          <List>
            {rooms.map((room) => (
              <ListItem button key={room} onClick={() => handleRoomSelect(room)}>
                <ListItemText primary={room} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RoomSelector;
