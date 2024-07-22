import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';

function CardDialog({ open, handleClose, card, handleAddCard, handleUpdateCard }) {
  const [cardTitle, setCardTitle] = useState('');

  useEffect(() => {
    if (card) {
      setCardTitle(card.title);
    } else {
      setCardTitle('');
    }
  }, [card]);

  const handleSave = () => {
    if (card) {
      handleUpdateCard(card.id, cardTitle);
    } else {
      handleAddCard(cardTitle);
    }
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{card ? 'Kartı Güncelle' : 'Yeni Kart Ekle'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Lütfen kartın başlığını girin.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Kart Başlığı"
          fullWidth
          variant="outlined"
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          İptal
        </Button>
        <Button onClick={handleSave} color="primary">
          {card ? 'Güncelle' : 'Ekle'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CardDialog;
