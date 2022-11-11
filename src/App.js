import Navbar from "./Components/Navbar"
import ItemListContainer from "./Components/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () =>{
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:idCategory' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
        // <>
        // <Navbar/>
        // <ItemListContainer/>
        // </>
    )
}

export default App;

// rutas en la 1h 10´ de la clase