

import { BrowserRouter, Routes,Route } from 'react-router-dom';


import Home from './Pages/Client/Layout/Home'
import Cart from './Pages/Client/Layout/Cart'

import WishList from './Pages/Client/Layout/WishList'
import Privacy from './Pages/Client/Footer/Privacy';
import Terms from './Pages/Client/Footer/Terms';
import FAQ from './Pages/Client/Footer/FAQ';
import  Feedback from './Pages/Client/Layout/Feedback';
import Products from './Pages/Client/Layout/Products';
import ProductDetail from './Pages/Client/Layout/ProductDetail';
import Checkout from './Pages/Client/Layout/Checkout';
import Register from './Pages/Client/Layout/Register'
import Login from './Pages/Client/Layout/Login';

import Dashboard from './Pages/Admin/Dashboard';

import User from './Pages/Admin/User/User';
import ViewFeedback from './Pages/Admin/Feedback/ViewFeedback';
import Orders from './Pages/Admin/User/Orders';
import { Profile } from './Pages/Client/Layout/Profile';
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
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          
          <Route path="/users" element={<User/>} />
          <Route path="/admin/feedback" element={<ViewFeedback/>} />
          <Route path="/admin/orders" element={<Orders/>} />
          <Route path="/profile" element={<Profile/>} />

        </Routes>
        
        </BrowserRouter>
        </>
    
    </div>
  );
}

export default App;
