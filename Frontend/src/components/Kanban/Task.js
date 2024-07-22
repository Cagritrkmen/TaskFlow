import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import CardDialog from './CardDialog';

function Task({ card, onCardClick }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    onCardClick(card); // Kart tıklandığında üst bileşene bildir
    setOpen(true);
  };

  return (
    <Card style={{ backgroundColor: '#3A3A3A', color: '#FFFFFF', width: '100%' }} onClick={handleClickOpen}>
      <CardContent>
        <Typography>{card.title}</Typography>
      </CardContent>
    </Card>
  );
}

export default Task;
