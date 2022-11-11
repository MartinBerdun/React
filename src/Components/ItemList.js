import Item from "./Item";

const Itemlist =({items})=>{

    return (
        <>{
            items.map (item=>(
                <Item
                key={item.id}
                id={item.id}
                stock= {item.stock}
                img = {item.img}
                nombre= {item.nombre}
                precioUn={item.precioUn}
                /> 
            ))
        }
        </>
    )
}

export default Itemlist;

