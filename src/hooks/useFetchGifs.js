// un  hooks son solamente archivos que contienen funciones 

import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data: [],
        loading : true
    });

    useEffect(() => {
        getGifs( category )
            .then( img => {
                setState( {
                    data : img,
                    loading : false
                } )
            } )
    }, [ category ]) // con esto solo cambiará cuando la categoría cambie

    return state; // va retornar loading false, ya cuando la promesa se resuelva
}