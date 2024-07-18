import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Paper, Typography } from "@mui/material";

// Örnek görevlerin listesi
const initialTasks = [
  { id: "task-1", content: "First task" },
  { id: "task-2", content: "Second task" },
  { id: "task-3", content: "Third task" },
  { id: "task-4", content: "Fourth task" },
  { id: "task-5", content: "Fifth task" }
];

// İlk sütunların tanımları
const initialColumns = {
  requested: {
    id: "requested",
    name: "Requested",
    tasks: initialTasks.slice(0, 5)
  },
  todo: {
    id: "todo",
    name: "To do",
    tasks: []
  },
  inProgress: {
    id: "inProgress",
    name: "In Progress",
    tasks: []
  },
  done: {
    id: "done",
    name: "Done",
    tasks: []
  }
};

function Home() {
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId === destination.droppableId) {
      const column = columns[source.droppableId];
      const copiedItems = [...column.tasks];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          tasks: copiedItems,
        },
      });
    } else {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.tasks];
      const destItems = [...destColumn.tasks];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          tasks: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          tasks: destItems,
        },
      });
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
      <DragDropContext onDragEnd={onDragEnd}>
        {Object.entries(columns).map(([columnId, column]) => (
          <div style={{ margin: 8 }} key={columnId}>
            <Typography variant="h6">{column.name}</Typography>
            <Paper
              elevation={1}
              style={{
                padding: 8,
                backgroundColor: "#f5f5f5",
                minHeight: 200,
                minWidth: 250
              }}
            >
              <Droppable droppableId={columnId}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    style={{
                      background: snapshot.isDraggingOver
                        ? "lightblue"
                        : "lightgrey",
                      padding: 4,
                      minHeight: 200,
                      minWidth: 250
                    }}
                  >
                    {column.tasks.map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              userSelect: "none",
                              padding: 16,
                              margin: "0 0 8px 0",
                              minHeight: "50px",
                              backgroundColor: snapshot.isDragging
                                ? "#263B4A"
                                : "#456C86",
                              color: "white",
                              ...provided.draggableProps.style
                            }}
                          >
                            {task.content}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </Paper>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
}

export default Home;
