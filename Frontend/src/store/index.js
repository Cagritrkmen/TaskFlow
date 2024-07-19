import { configureStore } from '@reduxjs/toolkit';
import kanbanReducer from './KanbanSlice/kanbanSlice';

const store = configureStore({
  reducer: {
    kanban: kanbanReducer,
  },
});

export default store;
