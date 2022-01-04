import React from 'react';

const Item = ({producto}) => {
    return (
        <div>
            <h4>Nombre: {producto.title}</h4>
            <h5>Precio: {producto.precio}</h5>
            <img src={producto.thumbnailUrl} alt={producto.title}/>
        </div>
    )
}

export default Item
