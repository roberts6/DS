import React from 'react';
import '../styles/cards.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export const CardContainer = ({ id, login, type, onDelete }) => {
  const jugadorInfo = localStorage.getItem('jugadores');
  const jugadores = jugadorInfo ? JSON.parse(jugadorInfo) : [];

  // Buscar el jugador con el ID correspondiente
  const jugador = jugadores.find((jugador) => jugador.id === id);

  const handleDelete = () => {
    // Eliminar el jugador de la lista en el estado local
    const updatedJugadores = jugadores.filter((jugador) => jugador.id !== id);
    localStorage.setItem('jugadores', JSON.stringify(updatedJugadores));

    console.log('Click en el botón Eliminar');

    // Llamar a la función onDelete para eliminar la tarjeta del DOM
    onDelete(id);
  };

  return (
    <>
      <Card key={id} sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={jugador ? jugador.avatar_url : ''}
            alt={login}
            loading="lazy"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {login}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Número: {id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Puesto: {type}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={handleDelete}>
            Eliminar
          </Button>
        </CardActions>
      </Card>
    </>
  );
};


