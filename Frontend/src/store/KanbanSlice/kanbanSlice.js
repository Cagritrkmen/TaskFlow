import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lists: [
    {
      id: '1',
      title: 'Yapılacaklar',
      cards: [
        { id: '1', title: 'Proje planlaması' },
        { id: '2', title: 'Toplantı başlatma' },
        { id: '3', title: 'Dokümantasyon hazırlama' },
        { id: '4', title: 'Tasarım incelemesi' },
        { id: '5', title: 'Kod gözden geçirme' },
      ],
    },
    {
      id: '2',
      title: 'Yapılıyor',
      cards: [
        { id: '6', title: 'Backend geliştirme' },
        { id: '7', title: 'Frontend entegrasyonu' },
      ],
    },
    {
      id: '3',
      title: 'Bitti',
      cards: [
        { id: '8', title: 'Prototip oluşturma' },
        { id: '9', title: 'Veritabanı tasarımı' },
      ],
    },
    {
      id: '4',
      title: 'Test Ediliyor',
      cards: [
        { id: '10', title: 'Birim testleri yazma' },
        { id: '11', title: 'Entegrasyon testleri' },
      ],
    },
  ],
};

const kanbanSlice = createSlice({
  name: 'kanban',
  initialState,
  reducers: {
    addCard: (state, action) => {
      const { listId, title } = action.payload;
      const list = state.lists.find(list => list.id === listId);
      const newCard = {
        id: (Math.random() * 10000).toFixed(0), // Random ID for simplicity
        title,
      };
      if (list) {
        list.cards.push(newCard);
      }
    },
    moveCard: (state, action) => {
      const { source, destination } = action.payload;
      const sourceListIndex = state.lists.findIndex(list => list.id === source.droppableId);
      const destinationListIndex = state.lists.findIndex(list => list.id === destination.droppableId);
      const [movedCard] = state.lists[sourceListIndex].cards.splice(source.index, 1);
      state.lists[destinationListIndex].cards.splice(destination.index, 0, movedCard);
    },
  },
});

export const { addCard, moveCard } = kanbanSlice.actions;
export default kanbanSlice.reducer;
