import { createContext,  useState } from "react";
export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {
    const [cartList,setCarList]= useState([])
    
    function agregarAlCarrito(itemAgregar){
        setCarList(itemAgregar)
    }

    return (
        <CartContext.Provider value={{cartList, agregarAlCarrito}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider