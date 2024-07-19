import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function Task({ card }) {
  return (
    <Card style={{ backgroundColor: '#3A3A3A', color: '#FFFFFF' }}>
      <CardContent>
        <Typography>{card.title}</Typography>
      </CardContent>
    </Card>
  );
}

export default Task;
