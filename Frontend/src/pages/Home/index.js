import React from 'react';
import KanbanBoard from "../../components/KanbanBoard";
import { Container, Typography } from '@mui/material';

const initialData = {
  lists: [
    {
      id: '1',
      title: 'Yapılacaklar',
      cards: [
        { id: '1', title: 'Proje planlaması' },
        { id: '2', title: 'Toplantı başlatma' },
      ],
    },
    {
      id: '2',
      title: 'Yapılıyor',
      cards: [],
    },
    {
      id: '3',
      title: 'Bitti',
      cards: [],
    },
  ],
};

function Home() {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Trello Panom
      </Typography>
      <KanbanBoard lists={initialData.lists} />
    </Container>
  );
}

export default Home;
