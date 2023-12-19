import '../styles/cards.css'
import { NavLink } from 'react-router-dom';
import equipoBlanco from '../assets/pizarraBlanca.svg';
import silbato from '../assets/silbatoBlanco.svg';
import jugador from '../assets/jugadorBlanco.svg';
import delegado from '../assets/delegadoBlanco.svg';
import federacion from '../assets/federacionBlanco.svg';


export const Home = () => {
    return (
        <>
            <div className="home" id='home'>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <NavLink to="/entrenador">
                        <div className="col">
                            <div className='tarjetaHome'>
                                <div className="card">
                                    <img src={equipoBlanco} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Entrenador</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/delegado">
                        <div className="col">
                            <div className='tarjetaHome'>
                                <div className="card">
                                    <img src={delegado} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Delegado</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/jugadores">
                        <div className="col">
                            <div className='tarjetaHome'>
                                <div className="card">
                                    <img src={jugador} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Jugador</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/arbitro">
                        <div className="col">
                            <div className='tarjetaHome'>
                                <div className="card">
                                    <img src={silbato} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Árbitro</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to="/federacion">
                        <div className="col">
                            <div className='tarjetaHome'>
                                <div className="card">
                                    <img src={federacion} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Federación</h5>
                                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}
