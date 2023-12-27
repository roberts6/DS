import '../styles/cards.css'
import { NavLink } from 'react-router-dom';
import equipoBlanco from '../assets/pizarraBlanca.svg';
import silbato from '../assets/silbatoBlanco.svg';
import jugador from '../assets/jugadorBlanco.svg';
import delegado from '../assets/delegadoBlanco.svg';
import federacion from '../assets/federacionBlanco.svg';
import Swal from 'sweetalert2'


// me gustaría poner un validador de id para ingresar a determinado área. De esta manera cada usuario
// va a contar con diferentes opciones

export const Home = () => {
//return(
//     Swal.fire({
//         title: "Submit your Github username",
//         input: "text",
//         inputAttributes: {
//           autocapitalize: "off"
//         },
//         showCancelButton: true,
//         confirmButtonText: "Look up",
//         showLoaderOnConfirm: true,
//         preConfirm: async (login) => {
//           try {
//             const githubUrl = `
//               https://api.github.com/users/${login}
//             `;
//             const response = await fetch(githubUrl);
//             if (!response.ok) {
//               return Swal.showValidationMessage(`
//                 ${JSON.stringify(await response.json())}
//               `);
//             }
//             return response.json();
//           } catch (error) {
//             Swal.showValidationMessage(`
//               Request failed: ${error}
//             `);
//           }
//         },
//         allowOutsideClick: () => !Swal.isLoading()
//       }).then((result) => {
//         if (result.isConfirmed) {
//           Swal.fire({
//             title: `${result.value.login}'s avatar`,
//             imageUrl: result.value.avatar_url
//           });
//         }
//       })
// )

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
                                        <p className="card-text">Dirección, instrucción y entrenamiento de un equipo o atletas</p>
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
                                        <p className="card-text">Sos el/la encargad@ de la gestión administrativa</p>
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
                                        <p className="card-text">El por qué y para qué. El corazón de cada actividad</p>
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
                                        <p className="card-text">El que imparte justicia. Sos actor imprescindible.</p>
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
                                        <p className="card-text">Regula y brindan organización a esta hermosa disciplina.</p>
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
