import { useEffect, useState } from "react";
import { CardContainer } from "./Card";
import { JugadorDetalle } from "./JugadorDetalle";
import { NavLink } from "react-router-dom";

export const ListadoJugadores = () => {
  const [jugadores, setJugadores] = useState([]);
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState(null);
  const [inputValue, setInputValue] = useState({ login: "", type: "" });
  const [fileInput, setFileInput] = useState(null);

  const fetchListadoJugadores = async () => {
    try {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setJugadores(data);

      // Guardar datos en el localStorage
      localStorage.setItem("jugadores", JSON.stringify(data));

      // luego de obtener la información cancela el pedido del fetch para dejar de consumir datos
      return () => {
          response&&response.abort()
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    // Verificar si hay datos en el localStorage al cargar la página
    const storedJugadores = localStorage.getItem("jugadores");
    if (storedJugadores) {
      setJugadores(JSON.parse(storedJugadores));
    } else {
      fetchListadoJugadores();
    }
  }, []);

  const handleJugadorClick = (jugador) => {
    setJugadorSeleccionado(jugador);
  };

  const onInputChange = (e, field) => {
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [field]: e.target.value,
    }));
  };

  const onFileChange = (e) => {
    setFileInput(e.target.files[0]);
  };

  const agregarJugador = () => {
    const nuevoJugador = {
      id: jugadores.length + 1,
      login: inputValue.login,
      avatar_url: "", // Puedes agregar lógica para manejar la imagen
      type: inputValue.type,
    };
  
    // Actualizar el estado de jugadores con el nuevo jugador
    setJugadores((prevJugadores) => [...prevJugadores, nuevoJugador]);
  
    // Guardar la lista actualizada en el localStorage
    localStorage.setItem("jugadores", JSON.stringify([...jugadores, nuevoJugador]));
  
    // Limpiar el inputValue y fileInput después de agregar el jugador
    setInputValue({ login: "", type: "" });
    setFileInput(null);
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
            onDelete={jugador.handleDelete}
          />
        </NavLink>
      ))}
      {jugadorSeleccionado && (
        <JugadorDetalle jugador={jugadorSeleccionado} />
      )}
      <form onSubmit={(e) => e.preventDefault()} className="formularioJugador">
        <label>
          Nombre:
          <input
            type="text"
            value={inputValue.login}
            onChange={(e) => onInputChange(e, "login")}
          />
        </label>
        <label>
          Puesto:
          <input
            type="text"
            value={inputValue.type}
            onChange={(e) => onInputChange(e, "type")}
          />
        </label>
        <label>
          Imagen:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onFileChange(e)}
          />
        </label>
        <button className="boton" onClick={() => agregarJugador()}>
          Agregar jugador
        </button>
      </form>
    </>
  );
};





// import { useEffect, useState } from "react";
// import { CardContainer } from "./Card";
// import { JugadorDetalle } from "./JugadorDetalle"
// import { NavLink } from "react-router-dom";


// export const ListadoJugadores = () => {
//     const [jugadores, setJugadores] = useState([]);
//     const [jugadorSeleccionado, setJugadorSeleccionado] = useState(null);
//     //const [visibleJugadores, setVisibleJugadores] = useState(5); // Ajusta el número de elementos visibles
//     //const [cargarMas, setCargarMas] = useState(true);

//     const fetchListadoJugadores = async () => {
//         try {
//             const response = await fetch('https://api.github.com/users');
//             const data = await response.json();
//             setJugadores(data);
//             console.log(data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     useEffect(() => {
//         fetchListadoJugadores();
//     }, []);

//     //   const cargarMasJugadores = () => {
//     //     setVisibleJugadores((prevVisible) => prevVisible + 5); // Ajustar el número de elementos a cargar por clic
//     //   };

//     const handleJugadorClick = (jugador) => {
//         setJugadorSeleccionado(jugador);
//     };

//     const AgregarJugador = (nuevoJugador) => {
//         const [inputValue, setInputValue] = useState('')
    
//     const onInputChange = (e) => {
//         setInputValue(e.target.value)
//     }
// const onSubmit = (e) => {
//     e.preventDefault()
//     nuevoJugador(inputValue)
// console.log(inputValue)
//     setInputValue('')
// }

//     return (
//         <form onSubmit={onSubmit}>
//             <input type="text" placeholder="ingresar nuevo jugador/a" value={inputValue}
//                 onChange={(e) => { onInputChange(e) }}
//             />
//         </form>
//     )
//     }

//     return (
//         <>
//             {jugadores.map((jugador) => (
//                 <NavLink key={jugador.id} to={`/JugadorDetalle/${jugador.id}`}>
//                     <CardContainer
//                         key={jugador.id}
//                         avatar_url={jugador.avatar_url}
//                         login={jugador.login}
//                         type={jugador.type}
//                         id={jugador.id}
//                         onClick={() => handleJugadorClick(jugador)}
//                     />
//                 </NavLink>
//             ))}
//             {/* {cargarMas && visibleJugadores < jugadores.length && (
//         <button onClick={cargarMasJugadores} className="cargarMas">Cargar más</button>
//       )} */}
//             {jugadorSeleccionado && (
//                 <JugadorDetalle jugador={jugadorSeleccionado} />
//             )}
//             <button className="boton" onClick={() => agregarJugador()}>Agregar jugador</button>
//         </>
//     );
// };

