<<<<<<< HEAD
import React from 'react';
import Item from '../ItemListContainer/Item'

function ItemList ({productos}) {
    return (
        <>
            {productos.map(prod => <Item prod={prod} key={prod.id} /> )
            }
        </>
    )
}

export default ItemList
=======
import React from 'react';
import Item from '../ItemListContainer/Item'

function ItemList ({productos}) {
    return (
        <>
            {productos.map(prod => <Item prod={prod} key={prod.id} /> )
            }
        </>
    )
}

export default ItemList
>>>>>>> a9bd2a2ac6d4177dae416172056ca0257f61e6a8
