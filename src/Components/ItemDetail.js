import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ItemDetail = ({item}) =>{
    const [itemCount, setItemCount]= useState(0)
    const {addToCart} = useContext(CartContext)
    
    const onAdd =(cant)=>{
        setItemCount(cant)
        addToCart(item,cant)
    }

    return (
        <>
        <div>
            <img src={item.img} alt=""></img>
            <p>{item.nombre}</p>
            <p>${item.precioUn}</p>
            <p>{item.description}</p>

        { itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' ><button variant="contained" color="secondary">CheckOut</button></Link>}
        </div>
        </>
    )
}

export default ItemDetail;