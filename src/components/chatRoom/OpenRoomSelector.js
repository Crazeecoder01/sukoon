// src/chatRoom/OpenRoomSelector.js
import React, { useState } from 'react';
import { Button } from '@mui/material';
import RoomSelector from './RoomSelector';
import { useAuth0 } from '@auth0/auth0-react';

const OpenRoomSelector = () => {
  const [showRoomSelector, setShowRoomSelector] = useState(false);
  const {user} = useAuth0();

  console.log("USERCHECK", user);
  const uid = user?.nickname;
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
        <RoomSelector userId={uid} displayName={user?.name} />
      )}
    </div>
  );
};

export default OpenRoomSelector;
