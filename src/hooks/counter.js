import { useState } from "react"


export const useCounter = (valorInicial = 0) => {

const [contador, setContador] = useState(valorInicial)

const incrementar = (valor = 1) => {
    setContador(contador + valor) 
}

const decrementar = (valor = 1) => {
    contador > 0 ? setContador(contador - valor) : setContador(0)
}


const resetear = () => {
    setContador(0)
}



  return {
    contador,
    incrementar,
    decrementar,
    resetear
  }
}