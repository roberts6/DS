import { Route, Routes } from "react-router-dom";
//import { NavBarPrueba } from "./components/NavBarPrueba.jsx";
import { NavBar } from "./components/NavBars/NavBar.jsx";
import {Entrenador} from './pages/Entrenador.jsx'
import {Delegado} from './pages/Delegado.jsx'
import {Jugador} from './pages/Jugador.jsx'
import {Federacion} from './pages/Federacion.jsx'
import {Arbitro} from './pages/Arbitro.jsx'
import { JugadorDetalle } from "./components/JugadorDetalle.jsx";

export const App = () => {
    return (
        <>
            <NavBar></NavBar>
            <Routes>
                <Route path='/entrenador' element={<Entrenador />}></Route>
                <Route path='/arbitro' element={<Arbitro />}></Route>
                <Route path='/jugadores' element={<Jugador />}></Route>
                <Route path='/delegado' element={<Delegado />}></Route>
                <Route path='/federacion' element={<Federacion />}></Route>
                <Route path="/JugadorDetalle/:id" element={<JugadorDetalle />} />
            </Routes>
        </>
    )
}
