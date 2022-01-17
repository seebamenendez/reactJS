<<<<<<< HEAD
import React from 'react'
import { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemCount from '../../ItemCount/ItemCount'

const ItemDetail = ({ product }) => {

    const [show, setShow] = useState(true)

    const { foto, nombre, precio, coleccion, stock } = product

    const onAdd = (contador) => {
        setShow(false)
        alert(`${contador}`)
    }
    
    return (
        <div>
            <Card style={{ width: '18rem', margin: '20px' }}>
                <Card.Img variant="top" src={foto} style={{ minHeight: '300px' }} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        Coleccion:{coleccion}
                    </Card.Text>
                    <Card.Text>
                        {precio}
                    </Card.Text>
                </Card.Body>
            </Card>

            {show ? <ItemCount stock={stock} onAdd={onAdd} /> :
                <div>
                    <Link to='/cart'><button>Terminar la Compra</button></Link>
                    <Link to='/'><button>Seguir Comprando</button></Link>
                </div>}

        </div>

    )
}

export default ItemDetail 
=======
import React from 'react'
import { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemCount from '../../ItemCount/ItemCount'

const ItemDetail = ({ product }) => {

    const [show, setShow] = useState(true)

    const { foto, nombre, precio, coleccion, stock } = product

    const onAdd = (contador) => {
        setShow(false)
        alert(`${contador}`)
    }
    
    return (
        <div>
            <Card style={{ width: '18rem', margin: '20px' }}>
                <Card.Img variant="top" src={foto} style={{ minHeight: '300px' }} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        Coleccion:{coleccion}
                    </Card.Text>
                    <Card.Text>
                        {precio}
                    </Card.Text>
                </Card.Body>
            </Card>

            {show ? <ItemCount stock={stock} onAdd={onAdd} /> :
                <div>
                    <Link to='/cart'><button>Terminar la Compra</button></Link>
                    <Link to='/'><button>Seguir Comprando</button></Link>
                </div>}

        </div>

    )
}

export default ItemDetail 
>>>>>>> a9bd2a2ac6d4177dae416172056ca0257f61e6a8
