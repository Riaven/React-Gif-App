import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Black Mirror']);

    // const handleAdd = (newCategory) => {
    //     // setCategories( [...categories, 'Lupin'] );
    //     setCategories( categ => [ ...categ, newCategory ]);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories } />
            <hr/>

            <ol>
                { 
                    /* El key no puede ser el índice y tiene que ser único */
                    categories.map( category => (
                        <GifGrid category = {category} 
                                key = {category}
                        />
                     ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;