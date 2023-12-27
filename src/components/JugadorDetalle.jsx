// hay que arreglar de donde toma la info. Debería ser por props y no hacer de nuevo el fetch, pero 
// de esa forma no pude. Por el momento lo resuelvo así

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import '../styles/cards.css'


export const JugadorDetalle = () => {
    const { id } = useParams();
    const [jugador, setJugador] = useState(null);

    const fetchJugadorDetalle = async () => {
        try {
            const response = await fetch(`https://api.github.com/users/${id}`);
            const data = await response.json();
            setJugador(data);
            console.log(data)
        } catch (error) {
            console.error('Error fetching jugador detalle:', error);
        }
    };

    useEffect(() => {
        if (id) {
            fetchJugadorDetalle();
        }
    }, [id]);

    if (!jugador) {
        return <p>Cargando jugador...</p>;
    }

    return (
        <div className='tarjetaJugador'>
            <h2>{jugador.name}</h2>
            <img src={jugador.avatar_url} loading="lazy"></img>
            <p>ID: {jugador.id}</p>
            <p>locación: {jugador.location}</p>
            <p>seguidores: {jugador.followers}</p>
            <p>Tipo: {jugador.type}</p>
            <NavLink to="/jugadores">
                <button className='boton'>Volver al listado</button>
            </NavLink>
        </div>
    );
};
