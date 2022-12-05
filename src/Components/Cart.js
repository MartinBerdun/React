import { collection, increment, serverTimestamp } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { doc, setDoc } from "firebase/firestore"; 
import {db} from "../utils/firebaseConfig";
import { updateDoc } from "firebase/firestore";
// import ItemCount from "./ItemCount";



const Cart = (item) =>{

    

    const {cartList,removeItem,deleteList,total} = useContext(CartContext)
    // console.log(typeof(cartList))

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
                qty: item.stock
            })),
        }
        console.log(order)

        const createOrderinF = async ()=>{
            const idAuto = doc(collection(db,"orders"))
            await setDoc(idAuto, order);
            return idAuto;
        }

        createOrderinF()
        .then (response =>{
            alert ("Order ID =" + response.id)
            cartList.forEach(async(item) => {
                const itemRef = doc(db, "products", "item.id");
                await updateDoc(itemRef, {
                    stock: increment(-item.qty)
                }); 
            });
            //aca debo poner la funcion que borra al carrito clase fireb 2 en el min 1.30
        })
        .catch(err =>console.log(err))
    }

    return (
        <>
                <button onClick={deleteList}>Vaciar carrito</button>


                {
                    cartList.length === 0 
                    ? <li>Tu carrito esta vacio!</li>
                    : cartList.map (item =>
                        <div>
                            <img src={item.img} alt=""></img>
                            <p>{item.nombre}</p><span>{item.cant}</span>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>${item.precioUn} each</p>
                            <p>Total: ${item.cantidad*item.precioUn}</p>
                            <button onClick={()=>removeItem(item.id)}>Eliminar</button>
                        </div>
                    )
                }
                
            <button onClick={createOrder}>Checkout</button>
            <p>Total: {total()}</p>
            



        {/* aca es donde renderizo los objetos del array para el carrito con un map, minuto 54 de la clase */}
        {/* dibujaria una cart para renderizarlo */}
        {/* //ver parte del video 1.35 minuto */}
            
        </>
    )
}

export default Cart;