
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';


import Category from './Pages/Category';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import MyOrders from './Pages/MyOrders';
import Help from './Pages/Help';
import WishList from './Pages/WishList';
import Cart from './Pages/Cart';
import Register from './Pages/Register';
import Login from './Pages/Login';
import About from './Pages/About';
function App() {
  return (
    <div className="App">
       <>
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/help" element={<Help/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/wishlist" element={<WishList/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
        </Routes>
        
        </BrowserRouter>
        </>
    
    </div>
  );
}

export default App;
