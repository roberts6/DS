import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../styles/cards.css';

export const JugadorDetalle = ({ avatar_url, id, login, type }) => {

    //const [existe, setExiste] = useState(false)

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={avatar_url}
                        alt={login}
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
                {/* <CardActions>
                        <Button size="small" color="primary">
                            Más información
                        </Button>
                    </CardActions> */}
            </Card>
        </>
    );
};



// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import '../styles/cards.css'


// export const JugadorDetalle = () => {
//     const { id } = useParams();
//     const [jugador, setJugador] = useState(null);

//     const fetchJugadorDetalle = async () => {
//         try {
//             const response = await fetch(`https://api.github.com/users/${id}`);
//             const data = await response.json();
//             setJugador(data);
//             console.log(data)
//         } catch (error) {
//             console.error('Error fetching jugador detalle:', error);
//         }
//     };

//     useEffect(() => {
//         if (id) {
//             fetchJugadorDetalle();
//         }
//     }, [id]);

//     if (!jugador) {
//         return <p>Cargando jugador...</p>;
//     }

//     return (
//         <div className='tarjetaJugador'>
//             <h2>{jugador.name}</h2>
//             <img src={jugador.avatar_url}></img>
//             <p>ID: {jugador.id}</p>
//             <p>locación: {jugador.location}</p>
//             <p>seguidores: {jugador.followers}</p>
//             <p>Tipo: {jugador.type}</p>
//             <NavLink to="/jugadores">
//                 <button className='boton'>Volver al listado</button>
//             </NavLink>
//         </div>
//     );
// };
