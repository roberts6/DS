import { useEffect, useState } from "react";
import { CardContainer } from "./Card";
import { JugadorDetalle } from "./JugadorDetalle"
import { NavLink } from "react-router-dom";


export const ListadoJugadores = () => {
    const [jugadores, setJugadores] = useState([]);
    const [jugadorSeleccionado, setJugadorSeleccionado] = useState(null);
    //const [visibleJugadores, setVisibleJugadores] = useState(5); // Ajusta el número de elementos visibles
    //const [cargarMas, setCargarMas] = useState(true);

    const fetchListadoJugadores = async () => {
        try {
            const response = await fetch('https://api.github.com/users');
            const data = await response.json();
            setJugadores(data);
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchListadoJugadores();
    }, []);

    //   const cargarMasJugadores = () => {
    //     setVisibleJugadores((prevVisible) => prevVisible + 5); // Ajustar el número de elementos a cargar por clic
    //   };

    const handleJugadorClick = (jugador) => {
        setJugadorSeleccionado(jugador);
        console.log("esta es la info que quiero mandar por props", jugador)
    };

    return (
        <>
            {jugadores.map((jugador) => (
                <NavLink key={jugador.id} to={`/JugadorDetalle/${jugador.id}`}>
                    <CardContainer
                        key={jugador.id}
                        avatar_url={jugador.avatar_url}
                        login={jugador.login}
                        type={jugador.type}
                        id={jugador.id}
                        onClick={() => handleJugadorClick(jugador)}
                    />
                </NavLink>
            ))}
            {/* {cargarMas && visibleJugadores < jugadores.length && (
        <button onClick={cargarMasJugadores} className="cargarMas">Cargar más</button>
      )} */}
                <JugadorDetalle jugador={jugadorSeleccionado} />
        </>
    );
};

