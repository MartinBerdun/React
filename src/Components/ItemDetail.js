import ItemCount from "./ItemCount";

const ItemDetail = ({item}) =>{
    
    const onAdd =(cant)=>{
        alert ("Has seleccionado" + cant + "productos")
    }

    return (
        <>
        <div>
            <img src={item.img} alt=""></img>
            <p>{item.nombre}</p>
            <p>${item.precioUn}</p>
            <p>{item.description}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
        </div>
        </>
    )
}

export default ItemDetail;