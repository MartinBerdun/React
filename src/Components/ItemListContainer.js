import Itemlist from "./ItemList";
import ItemCount from "./ItemCount";
import { customFetch } from "../utils/customFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const {data} = require ("../utils/data")

const ItemListContainer =() =>{
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    console.log(idCategory);

useEffect (()=>{
    if(idCategory === undefined){
        customFetch(2000,data)
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    } else {
        customFetch(2000, data.filter(item => item.category===idCategory))
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    }
}, [idCategory]);

    const onAdd =(cant)=>{
        alert ("Has seleccionado" + cant + "productos")
    }

    return (
        <><Itemlist items={datos}/>
        <ItemCount stock={5} initial={1} onAdd={onAdd}/>
</>
    )
}

export default ItemListContainer;
