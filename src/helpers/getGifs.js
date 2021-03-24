

// devuelve 10 gifs
export const getGifs = async( category ) => {


    const url = `https://api.giphy.com/v1/gifs/search?api_key=44nktku9kuZWhrj4HyoTCQeBDZZwL04w&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    // para recorrer y devolver lo que se requiere de la imagen

    const gifs = data.map( img => {
        return{
            id: img.id,
            title : img.title.trim() ? img.title : 'Luci',
            url : img.images?.downsized_medium.url
        }
    });
    
    return gifs; // devuelve una promesaa que resuelver
}