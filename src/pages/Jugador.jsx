import { ListadoJugadores } from "../components/ListadoJugadores";
import { NavBar } from "../components/NavBars/NavBar";

export const Jugador = () => {
  return (
    <>
    <NavBar></NavBar>
      <div className="container justify-content-center">
        <h1 className="cuerpo">Jugadores</h1>
        <div className="tarjetas">
          <ListadoJugadores />
        </div>
      </div>
    </>
  );
}