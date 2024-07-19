import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import Task from './Task';
import { Droppable, Draggable } from 'react-beautiful-dnd';

function Column({ list, cards }) {
  return (
    <Paper elevation={3} style={{ padding: '16px', backgroundColor: '#2D2D2D', color: '#FFFFFF' }}>
      <Typography variant="h6" gutterBottom>{list.title}</Typography>
      <Droppable droppableId={list.id}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} style={{ minHeight: '100px' }}>
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
      <Button variant="outlined" style={{ color: '#FFFFFF', borderColor: '#FFFFFF' }}>
        + Kart ekle
      </Button>
    </Paper>
  );
}

export default Column;
