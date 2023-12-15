import { ListadoJugadores } from "../components/ListadoJugadores";

export const Jugador = () => {
  return (
    <>
      <div className="container justify-content-center">
        <h1 className="cuerpo">Jugadores</h1>
        <ListadoJugadores />
      </div>
    </>
  );
}