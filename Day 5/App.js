
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import Comment from './Pages/Comment';
import Category from './Pages/Category';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import MyOrders from './Pages/MyOrders';
import Help from './Pages/Help';
import WishList from './Pages/WishList';
import Cart from './Pages/Cart';
import Register from './Pages/Register';
import Layout from './Components/Layout';
import Login from './Pages/Login';
function App() {
  return (
    <div className="App">
       
      <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/help" element={<Help/>} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/wishlist" element={<WishList/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login/>}/>
          
        </Routes>
        </>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
