import { NavLink } from "react-router-dom"
import equipoBlanco from '../assets/pizarraBlanca.svg';
import silbato from '../assets/silbatoBlanco.svg'
import jugador from '../assets/jugadorBlanco.svg'
import delegado from '../assets/delegadoBlanco.svg'
import federacion from '../assets/federacionBlanco.svg';


export const NavBarPrueba = () => {

    return (
        <nav className="nav flex-column">
            <NavLink className="nav-link active" to="/jugador" >Jugador</NavLink>
            <NavLink className="nav-link" to="/arbitro">Árbitro</NavLink>
            <NavLink className="nav-link" to="/delegado">Delegado</NavLink>
            <NavLink className="nav-link" to="/entrenador">Entrenador</NavLink>
        </nav>
    )
}