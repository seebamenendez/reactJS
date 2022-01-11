import React, { useState, useEffect } from 'react';
import { getFetch } from '../../productos';
import ItemList from './ItemList';

function ItemListContainer ({ greeting }) {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    //lo deja al codigo para cargar al final
    useEffect(() => {
        //Para poder mostrar bien que es lo que trae la promesa
        getFetch
        .then(resp => setProductos(resp))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))
    }, []);
        
    console.log(productos);

    return (
        <div>
            <h2>{greeting}</h2> 
            { loading ? 
                    <h2> Cargando ... </h2> 
                : 
                    <ItemList productos={productos}/>
            }
        </div>
    )
}

export default ItemListContainer
