import { db } from "../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Itemlist from "./ItemList";
// import ItemCount from "./ItemCount";
// import { customFetch } from "../utils/customFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// const {data} = require ("../utils/data")

const ItemListContainer =() =>{
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    useEffect (()=>{ 
        async function fetch () {
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataFromFirestore = querySnapshot.docs.map (item =>({
        id : item.id,
        ...item.data()
        }))
        setDatos(dataFromFirestore)
        } 
        fetch();

        // const querySnapshot = await getDocs(collection(db, "products"));
        // const dataFromFirestore = querySnapshot.docs.map (item =>({
        // id : item.id,
        // ...item.data()
        // }))
        // setDatos(dataFromFirestore)
        // console.log(dataFromFirestore);
        // if(idCategory === undefined){
        //     customFetch(2000,data)
        //     .then(result => setDatos(result))
        //     .catch(err => console.log(err))
        // } else {
        //     customFetch(2000, data.filter(item => item.category===idCategory))
        //     .then(result => setDatos(result))
        //     .catch(err => console.log(err))
        // }
}, [idCategory]);

    useEffect (()=>{
        return (()=>{
            setDatos([]);
        })
    }, []);

    return (
        <><Itemlist items={datos}/>
</>
    )
}

export default ItemListContainer;
