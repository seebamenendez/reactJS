import React, {useState, useEffect} from 'react';
import {traerProductos} from '../../productos';
import ItemList from './ItemList';

const ItemListContainer = ({ saludo }) => {

    const [data, setData] = useState([])

    //lo deja al codigo para cargar al final
    useEffect(() => {
        //Para poder mostrar bien que es lo que trae la promesa
        traerProductos.then((respuesta)=>{
            setData(respuesta);
        })
        .catch((error) => {
            console.error(error)
        });
    }, []);
        

    return (
        <div>
            <h2 style={{textAlign: 'center'}}> {saludo}</h2>
            <ItemList productos={data} />
        </div>
    );
}

export default ItemListContainer
