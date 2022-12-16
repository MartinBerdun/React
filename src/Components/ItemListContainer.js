import Itemlist from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../utils/firestoreFetch";

const ItemListContainer =() =>{
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

useEffect(() => {
    firestoreFetch(idCategory)
        .then(result => setDatos(result))
        .catch(err => console.log(err));
}, [idCategory]);

    return (
        <>
        <Itemlist items={datos}/>
        </>
    )
}

export default ItemListContainer;
