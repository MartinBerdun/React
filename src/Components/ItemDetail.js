import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import "../ItemDetail.css"

const ItemDetail = ({item}) =>{
    const [itemCount, setItemCount]= useState(0)
    const {addToCart} = useContext(CartContext)
    
    const onAdd =(cant)=>{
        setItemCount(cant)
        addToCart(item,cant)
    }

    return (
        <>
        <div className="divItem">
        <p className="nombre">{item.nombre}</p>
            <img className="imgDetail" src={item.img} alt=""></img>
            <div className="divItem2">
            <p>{item.description}</p>
            <p><b>${item.precioUn}</b></p>
            { itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart' ><button variant="contained" className="button">CheckOut</button></Link>}
            </div>
            
        </div>
        </>
    )
}

export default ItemDetail;