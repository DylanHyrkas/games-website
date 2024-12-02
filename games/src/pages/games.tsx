import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Games: React.FC = () => {
  const navigate = useNavigate();

  // Array of games with their routes and titles
  const games = [
    { title: 'Papas Pizzaria', route: '/games/papaspizzaria' },
    { title: 'Game 2', route: '/games/game2' },
    { title: 'Game 3', route: '/games/game3' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" color='black'>
        Games Page 
      </Typography>  
      <Grid container spacing={2}>
        {games.map((game, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => navigate(game.route)}
            >
              {game.title}
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Games;
