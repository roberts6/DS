import { NavLink, useLocation } from "react-router-dom";
import { MagicMotion } from "react-magic-motion";
import { useState } from "react";
import equipoBlanco from '../../assets/pizarraBlanca.svg';
import silbato from '../../assets/silbatoBlanco.svg';
import jugador from '../../assets/jugadorBlanco.svg';
import delegado from '../../assets/delegadoBlanco.svg';
import federacion from '../../assets/federacionBlanco.svg';
import home from '../../assets/homeBlanco.svg';

export const NavBar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const location = useLocation();
    const endPoint = location.pathname

    console.log(endPoint)

    const getEndPoint = (path) => {
        return endPoint === path ? "activo" : "inactivo"
    }
    
    const shouldShowArbitroOption = () => {
        return endPoint !== "/jugadores";
      };

    return (
        <MagicMotion>
            <aside
                style={{
                    position: "fixed",
                    top: 0,
                    left: isCollapsed ? "0" : "0",
                    backgroundColor: "black",
                    padding: "1rem",
                    margin: "1rem 0px 1rem 1rem",
                    borderRadius: "0.65rem",
                    width: isCollapsed ? "2.8rem" : "12rem",
                    fontWeight: "bold",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        gap: "0.5rem",
                        alignItems: "center",
                        justifyContent: isCollapsed ? "flex-start" : "space-between",
                    }}
                >
                    {!isCollapsed && <h4 style={{ margin: 0 }}>¿Cuál es tu rol?</h4>}

                    <button
                        style={{
                            cursor: "pointer",
                            padding: 0,
                            border: 0,
                            backgroundColor: "white",
                        }}
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                    >
                        {isCollapsed ? (
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1 12.9999V10.9999H15.4853L12.2427 7.75724L13.6569 6.34303L19.3137 11.9999L13.6569 17.6567L12.2427 16.2425L15.4853 12.9999H1Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M20.2877 6V18H22.2877V6H20.2877Z"
                                    fill="currentColor"
                                />
                            </svg>
                        ) : (
                            <svg
                                style={{ minWidth: "20px", minHeight: "20px" }}
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22.2877 11.0001V13.0001H7.80237L11.045 16.2428L9.63079 17.657L3.97394 12.0001L9.63079 6.34326L11.045 7.75748L7.80236 11.0001H22.2877Z"
                                    fill="currentColor"
                                />
                                <path d="M3 18V6H1V18H3Z" fill="currentColor" />
                            </svg>
                        )}
                    </button>
                </div>

                <ul
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        margin: 0,
                        padding: 0,
                    }}
                >
                    <NavLink to="/" className={getEndPoint("/")}>
                        <li
                            className="opcionMenu"
                            style={{
                                display: "flex",
                                gap: "0.8rem",
                                alignItems: "center",
                                width: "fit-content",
                                color: "white",
                            }}
                        >
                            <img
                                src={home}
                                alt="Equipo Blanco"
                                style={{ minWidth: "20px", minHeight: "20px" }}
                            />
                            Home
                        </li>
                    </NavLink>
                    <NavLink to="/entrenador" className={getEndPoint("/entrenador")}>
                        <li
                            className="opcionMenu"
                            style={{
                                display: "flex",
                                gap: "0.8rem",
                                alignItems: "center",
                                width: "fit-content",
                                color: "white",
                            }}
                        >
                            <img
                                src={equipoBlanco}
                                alt="Equipo Blanco"
                                style={{ minWidth: "24px", minHeight: "24px" }}
                            />
                            Entrenador
                        </li>
                    </NavLink>
                    <NavLink to="/arbitro" className={getEndPoint("/arbitro")}>
                        <li
                            className={`opcionMenu ${getEndPoint("/jugadores")}`}
                            style={{
                                display: "flex",
                                gap: "0.8rem",
                                alignItems: "center",
                                width: "fit-content",
                                color: "white",
                            }}
                        >
                            <img
                                src={silbato}
                                alt="Equipo Blanco"
                                style={{ minWidth: "24px", minHeight: "24px" }}
                            />
                            Árbitro
                        </li>
                    </NavLink>
                    <NavLink to="/jugadores" className={getEndPoint("/jugadores")}>
                        <li
                            className="opcionMenu"
                            style={{
                                display: "flex",
                                gap: "0.8rem",
                                alignItems: "center",
                                width: "fit-content",
                                color: "white",
                            }}
                        >
                            <img
                                src={jugador}
                                alt="Equipo Blanco"
                                style={{ minWidth: "24px", minHeight: "24px" }}
                            />
                            Jugador
                        </li>
                    </NavLink>
                    <NavLink to="/delegado" className={getEndPoint("/delegado")}>
                        <li
                            className="opcionMenu"
                            style={{
                                display: "flex",
                                gap: "0.8rem",
                                alignItems: "center",
                                width: "fit-content",
                                color: "white",
                            }}
                        >
                            <img
                                src={delegado}
                                alt="Equipo Blanco"
                                style={{ minWidth: "24px", minHeight: "24px" }}
                            />
                            Delegado
                        </li>
                    </NavLink>
                    <NavLink to="/federacion" className={getEndPoint("/federacion")}>
                        <li
                            className="opcionMenu"
                            style={{
                                display: "flex",
                                gap: "0.8rem",
                                alignItems: "center",
                                width: "fit-content",
                                color: "white",
                            }}
                        >
                            <img
                                src={federacion}
                                alt="Equipo Blanco"
                                style={{ minWidth: "24px", minHeight: "24px" }}
                            />
                            Federación
                        </li>
                    </NavLink>
                </ul>
            </aside>
        </MagicMotion>
    );
};
