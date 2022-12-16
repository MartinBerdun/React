import Navbar from "./Components/Navbar";
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./Components/CartContext";
import Cart from "./Components/Cart";

const App = () =>{
    return (
        <CartContextProvider>
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:idCategory' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
                <Route path='/cart' element={<Cart/>}/>
            </Routes>
            {/* <Link to='/cart'></Link> */}
            </BrowserRouter>
        </CartContextProvider>
    )
}

export default App;