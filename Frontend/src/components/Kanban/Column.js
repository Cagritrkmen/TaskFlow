import React, { useState } from 'react';
import { Paper, Typography, Button, useTheme, Box } from '@mui/material';
import Task from './Task';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { addCard } from '../../store/KanbanSlice/kanbanSlice';
import CardDialog from './CardDialog';

function Column({ list, cards }) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddCard = (title) => {
    if (title.trim()) {
      dispatch(addCard({ listId: list.id, title }));
      handleClose();
    }
  };

  return (
    <Paper
      elevation={5}
      style={{
        padding: '16px',
        backgroundColor: theme.palette.secondary.main,
        color: '#FFFFFF',
        width: '100%',  // Sütun genişliği
        maxWidth: '300px',  // Maksimum genişlik
        height: 'auto',  // Yükseklik otomatik
      }}
    >
      <Typography style={{ color: theme.palette.customBlack.main }} variant="h6" gutterBottom>
        {list.title}
      </Typography>

      <Droppable droppableId={list.id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} >
            {cards.map((card, index) => (
              <Draggable key={card.id} draggableId={card.id.toString()} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{ marginBottom: '8px', ...provided.draggableProps.style }}
                  >
                    <Task card={card} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Button variant="outlined" style={{ color: '#000000', borderColor: '#000000' }} onClick={handleClickOpen}>
        + Kart ekle
      </Button>

      <CardDialog open={open} handleClose={handleClose} handleAddCard={handleAddCard} />
    </Paper>
  );
}

export default Column;
