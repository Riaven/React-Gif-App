import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {

    
    const { data :imgs , loading } = useFetchGifs(category);


    // useEffect( ( ) => {
    //     getGifs( category )
    //         .then( setImages ) // se rellena la lista con los datos que se traen al resolver la promesa
    // }, [ category ]); // se pone category aquí por el warning en caso de tener que volver a renderizar 
    
    // al mandar una dependencia vacía, todo
    // lo que se encuentre dentro de la función se va a disparar una única vez 


    return (
        <>
            <h3 className = "animate__animated animate__fadeIn" >{ category }</h3>

            { loading ? <p className = 'animate__animated animate__flash animate__infinite'>Loading</p> : null}
            
            <div className= 'card-grid'>           
                {imgs.map( img => 
                    <GifGridItem 
                        key = {img.id}
                        {...img}/>                    
                )}
            
            </div>
        </>
    )
}
