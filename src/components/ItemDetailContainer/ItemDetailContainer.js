import { useEffect, useState } from 'react';
import { getFetch } from '../../productos';
import ItemDetail from './ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const [producto, setproducto] = useState({})

    useEffect(() => {
        getFetch
        .then(resp => setproducto(resp.find(prod => prod.id === '2')))
    }, [])
    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
