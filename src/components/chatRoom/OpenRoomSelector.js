// src/chatRoom/OpenRoomSelector.js
import React, { useState } from 'react';
import { Button } from '@mui/material';
import RoomSelector from './RoomSelector';

const OpenRoomSelector = ({ userId, displayName }) => {
  const [showRoomSelector, setShowRoomSelector] = useState(false);

  const handleOpenRoomSelector = () => {
    setShowRoomSelector(true);
  };

  return (
    <div>
      {!showRoomSelector ? (
        <Button variant="contained" color="primary" onClick={handleOpenRoomSelector}>
          Open Room Selector
        </Button>
      ) : (
        <RoomSelector userId={userId} displayName={displayName} />
      )}
    </div>
  );
};

export default OpenRoomSelector;
