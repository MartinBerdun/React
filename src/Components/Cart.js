import { collection, increment, serverTimestamp } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { doc, setDoc } from "firebase/firestore"; 
import {db} from "../utils/firebaseConfig";
import { updateDoc } from "firebase/firestore";
import "../Cart.css"

const Cart = (item) =>{
    const {cartList,removeItem,deleteList,total} = useContext(CartContext)
    const createOrder = () =>{
        let order = {
            buyer :{
                name: "Fernando",
                email: "buvv.98@gmail.com",
                phone : "142536426"
            },
            date:serverTimestamp(),
            items : cartList.map (item => ({
                id : item.id,
                price : item.precioUn,
                title : item.nombre,
                description: item.description,
                qty: item.cantidad
            })),
        }
        const createOrderinF = async ()=>{
            const idAuto = doc(collection(db,"orders"))
            await setDoc(idAuto, order);
            return idAuto;
        }

        createOrderinF()
        .then (response =>{
            alert ("Se ha creado la siguiente orden con el ID=" + response.id)
            cartList.forEach(async(item) => {
                const itemRef = doc(db, "products", "item.id");
                await updateDoc(itemRef, {
                    stock: increment(-item.cantidad)
                }); 
            });
            deleteList()
        })
        .catch(err =>console.log(err))
    }

    return (
        <>
                
                {
                    cartList.length === 0 
                    ? <p className="vacio" >Tu carrito esta vacio!</p>
                    : cartList.map (item =>
                        <div className="divMayor">
                            <div className="divCart">  
                            <img className="imgCart" src={item.img} alt=""></img>
                            <div className="divCart2">
                            <p>{item.nombre}</p>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>$ {item.precioUn} c/u</p>
                            <p><b>Total: $ {item.cantidad*item.precioUn}</b></p>
                            <button className="buttonDelete" onClick={()=>removeItem(item.id)}>Eliminar</button>
                            </div>
                        </div>
                        </div>
                    )
                }
            <div>
            <div className="totaldiv"><p className="total" >Total: $ {total()}</p></div>
            <div className="botones">
            <button className="delete" onClick={deleteList}>Vaciar carrito</button>
            <button className="create" onClick={createOrder}>Checkout Now</button>
            </div>
            </div>
        </>
    )
}

export default Cart;