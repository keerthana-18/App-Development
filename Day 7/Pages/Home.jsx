import React from 'react'
import Layout from '../Components/Layout';
import '../Assets/css/Home.css'
const Home = () => {
  return (
    <>
    <Layout>
    <div className='homeimagebox'>
        <div className="himg1">
          <img src='https://res.cloudinary.com/dwsmjmxqk/image/upload/v1695365975/pik_jmgi6c.jpg' style={{width:'200px',height:'200px'}}></img>
          <h2>Apple</h2>
          <h2>₹250</h2>
        </div>
        <div className="himg1">
          <img src='https://images.pexels.com/photos/934055/pexels-photo-934055.jpeg?auto=compress&cs=tinysrgb&w=600' style={{width:'200px',height:'200px'}}></img>
          <h2>Strawberry</h2>
          <h2>₹200</h2>
        </div>
        <div className="himg1">
          <img src='https://images.pexels.com/photos/1398655/pexels-photo-1398655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' style={{width:'200px',height:'200px'}}></img>
          <h2>Water Melon</h2>
          <h2>₹100</h2>
        </div>
        <div className="himg1">
          <img src='https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=600' style={{width:'200px',height:'200px'}}></img>
          <h2>Carrot</h2>
          <h2>₹50</h2>
        </div>
        <div className="himg1">
          <img src='https://images.pexels.com/photos/128420/pexels-photo-128420.jpeg?auto=compress&cs=tinysrgb&w=600' style={{width:'200px',height:'200px'}}></img>
          <h2>Cucumber</h2>
          <h2>₹60</h2>
        </div>
        <div className="himg1">
          <img src='https://images.pexels.com/photos/3872433/pexels-photo-3872433.jpeg?auto=compress&cs=tinysrgb&w=600' style={{width:'200px',height:'200px'}}></img>
          <h2>Broccoli</h2>
          <h2>₹190</h2>
        </div>
        <div className="himg1">
          <img src='https://images.pexels.com/photos/793267/pexels-photo-793267.jpeg?auto=compress&cs=tinysrgb&w=600' style={{width:'200px',height:'200px'}}></img>
          <h2>Mushroom</h2>
          <h2>₹230</h2>
        </div>
        <div className="himg1">
          <img src='https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=600' style={{width:'200px',height:'200px'}}></img>
          <h2>Potato</h2>
          <h2>₹80</h2>
        </div>
        
    </div>
            </Layout>   
    </>
  )
}

export default Home