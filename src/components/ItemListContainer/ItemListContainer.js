import React from 'react'

const ItemListContainer = ({item}) => {

    const {nombre, precio, coleccion} = item;

    return (
        <div>
            <h1>{nombre}</h1>
            <h2>{precio}</h2>
            <h2>{coleccion}</h2>
        </div>
    )
}

export default ItemListContainer
