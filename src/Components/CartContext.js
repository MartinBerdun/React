import { createContext, useState } from "react";

export const CartContext = createContext()

const CartContextProvider = (props) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (item,cant) =>{
        

        const isItemInCart = cartList.filter(cartItem => cartItem.id === item.id).length;
        if (isItemInCart===0){
            setCartList([
                ...cartList,{
                    ...item,
                    cantidad: cant,
                }
                ])
        } else {
            const newArray = cartList.map (cartItem =>{
                if (cartItem.id === item.id){
                    return{
                        ...cartItem,
                        cantidad:cant + cartItem.cantidad,
                    }
                } else {
                    return cartItem
                }

            })
            setCartList(newArray)
        }

        

    }

    const removeItem = (id) =>{
        let result = cartList.filter(item => item.id !== id);
        setCartList(result);

    }

    const deleteList = () =>{
        setCartList([])
    }

    const total = () =>{
        let suma = 0;
        const totales = cartList.map(item => item.precioUn * item.cantidad)
        for (let i = 0; i < totales.length; i++) {
            suma += totales[i]
    }
    }

    return(
        <CartContext.Provider value={{cartList,addToCart,removeItem, deleteList,total }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;

// me quede el minuto 1,20