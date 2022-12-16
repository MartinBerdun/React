import "../item.css";
import { Link } from "react-router-dom";

const Item = ({id,img,nombre,stock, precioUn}) =>{
    return (
            <div className="container">
                <div className="card">
                <img src={img} alt=""></img> 
                <h4>{nombre}</h4>  
                <p>${precioUn}</p> 
                <button className="botonAgregar"><Link to={`/item/${id}`}>Details</Link></button>
                </div>
            </div>
        
    )
}

export default Item;