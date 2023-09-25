

import { BrowserRouter, Routes,Route } from 'react-router-dom';


import Home from './Pages/Client/Layout/Home'
import Cart from './Pages/Client/Layout/Cart'
import Profile from './Pages/Client/Layout/Profile'
import WishList from './Pages/Client/Layout/WishList'
import Privacy from './Pages/Client/Footer/Privacy';
import Terms from './Pages/Client/Footer/Terms';
import FAQ from './Pages/Client/Footer/FAQ';
import  Feedback from './Pages/Client/Layout/Feedback';
import Product from './Pages/Client/Layout/Product';
import ProductDetail from './Pages/Client/Layout/ProductDetail';
import Checkout from './Pages/Client/Layout/Checkout';
function App() {
  return (
    <div className="App">
       <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<WishList/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/privacypolicy" element={<Privacy />} />
          <Route path="/termsandconditions" element={<Terms />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        
        </BrowserRouter>
        </>
    
    </div>
  );
}

export default App;
