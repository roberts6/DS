import { useEffect, useState } from "react";
import { CardContainer } from "./Card";

export const ListadoJugadores = () => {
  const [jugadores, setJugadores] = useState([]);
  const [visibleJugadores, setVisibleJugadores] = useState(5); // Ajusta el número de elementos visibles
  const [cargarMas, setCargarMas] = useState(true);

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

  const cargarMasJugadores = () => {
    setVisibleJugadores((prevVisible) => prevVisible + 5); // Ajusta el número de elementos a cargar por clic
  };

  return (
    <>
      {jugadores.slice(0, visibleJugadores).map((jugador) => (
        <CardContainer
          key={jugador.id}
          avatar_url={jugador.avatar_url}
          login={jugador.login}
          type={jugador.type}
          id={jugador.id}
        />
      ))}
      {cargarMas && visibleJugadores < jugadores.length && (
        <button onClick={cargarMasJugadores} className="cargarMas">Cargar más</button>
      )}
    </>
  );
};

