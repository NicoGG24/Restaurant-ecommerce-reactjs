import './App.css';
import Navbar from "./Components/Header/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/ItemCategory/Landing";
import ItemListContainer from './Pages/ItemListContainer/ItemListContainer';
import ItemDetails from './Pages/ItemDetails/ItemDetails';
import Footer from './Components/Footer/Footer';
import CartContext from './Context/CartContext';
import Cart from "./Pages/Cart/Cart"
import Checkout from './Components/Checkout/Checkout';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartContext>
          <Navbar />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/category/:categoryName' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetails />} />
            <Route path='/Cart' element={<Cart />}/>
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
          <Footer />
        </CartContext>
      </BrowserRouter>
    </>
  );
}

export default App;
