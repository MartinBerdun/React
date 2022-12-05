import Navbar from "./Components/Navbar"
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./Components/CartContext";
import Cart from "./Components/Cart"

const App = () =>{
    return (
        <CartContextProvider>
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:idCategory' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                <Route path="/Cart" element={<Cart/>}/>
            </Routes>
            </BrowserRouter>
        </CartContextProvider>
        
        // <>
        // <Navbar/>
        // <ItemListContainer/>
        // </>
    )
}

export default App;

// rutas en la 1h 10´ de la clase

/*en la clase de EVENTOS, antes del recreo se ven los eventos con clases 
y despues sen ven los eventos con funciones!*/

//Context a partir del minuto 40

// en la clase de rendering, en el  20´ se habla del widget y como hacer para que aparezca la cantidad de productos, usando cart  context tambien..


// tengo que agregar el total en el firebase de cart  de orders

