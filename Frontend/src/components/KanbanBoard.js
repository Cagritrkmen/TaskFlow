import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Grid } from '@mui/material';
import Column from './Column';

function KanbanBoard({ lists }) {
  const [state, setState] = useState(lists);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Hedef konum yoksa (kart bırakılmamışsa) işlemi sonlandır
    if (!destination) {
      return;
    }

    // Aynı sütun içinde mi taşınıyor?
    if (source.droppableId === destination.droppableId) {
      const list = state.find(list => list.id === source.droppableId);
      const [movedCard] = list.cards.splice(source.index, 1);
      list.cards.splice(destination.index, 0, movedCard);
      setState([...state]);
    } else {
      // Farklı sütuna taşınıyor
      const sourceList = state.find(list => list.id === source.droppableId);
      const destinationList = state.find(list => list.id === destination.droppableId);
      const [movedCard] = sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, movedCard);
      setState([...state]);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container spacing={2}>
        {state.map((list) => (
          <Grid item xs={4} key={list.id}>
            <Droppable droppableId={list.id}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <Column list={list} cards={list.cards} />
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Grid>
        ))}
      </Grid>
    </DragDropContext>
  );
}

export default KanbanBoard;
