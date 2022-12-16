import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState, useEffect } from 'react';
import "../ItemCount.css"

const ItemCount = ({stock=0, initial =1, onAdd}) => { 
    const [rate, setRate] = useState(0); 

    useEffect(()=>{
        setRate(initial);
    },[]);

    const increment = () =>{
        if (rate<stock){
            setRate(rate+1)
        }
    }

    const decrement = () => {
        if (rate>initial){
            setRate(rate-1)
        } 
    }

    return (
        <div >
            <AddIcon onClick={increment}></AddIcon>
            <span className='rate'>{rate}</span>
            <RemoveIcon onClick={decrement}></RemoveIcon>
            <button className="botonAgregar" onClick={()=>onAdd(rate)}>Agregar</button>
            
        </div>
    )
}

export default ItemCount; 




