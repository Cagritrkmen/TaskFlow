import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';

function AddCardDialog({ open, handleClose, handleAddCard }) {
  const [newCardTitle, setNewCardTitle] = useState('');

  const handleAdd = () => {
    handleAddCard(newCardTitle);
    setNewCardTitle('');
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Yeni Kart Ekle</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Lütfen yeni kartın başlığını girin.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Kart Başlığı"
          fullWidth
          variant="outlined"
          value={newCardTitle}
          onChange={(e) => setNewCardTitle(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          İptal
        </Button>
        <Button onClick={handleAdd} color="primary">
          Ekle
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddCardDialog;
