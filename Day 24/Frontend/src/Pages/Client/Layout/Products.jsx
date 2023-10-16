/*import React from 'react'
import  DATA  from '../../../Data'
import { NavLink } from 'react-router-dom';
import '../../../Assets/css/Product.css'
const Product = () => {
    const cardItem = (item) => {
        return (
            <div class="card my-5 py-4" key={item.id} style={{width: "18rem"}}>
                <img src={item.img} class="card-img-top" alt={item.title}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">{item.title}</h5>
                        <p class="card-text">₹{item.price}</p>
                        <NavLink to={`/products/${item.id}`} class="btn btn-outline-primary">Buy Now</NavLink>
                    </div>
            </div>
        );
    }
    return (
        <div>
           
            <div className="conatiner">
                <div className="row justify-content-around">
                    {DATA.map(cardItem)}
                </div>
            </div>
        </div>
    )
}

export default Product
*/
import React, { useState, useEffect } from 'react'
import { getProduct } from '../../../services/Api'
import Navbar from '../../../Components/Navbar';
import { Footer } from '../../../Components/Footer'
import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/cartActions';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import addItems from '../../../redux/addItem';
import '../../../Assets/css/Product.css'
const Products = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('Token') !== 'null');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const fetchProducts = async () => {
        try {
            const response = await getProduct()
            setProducts(response.data);
            setLoading(false)
        }

        catch (error) {
            console.log(error);
        }
    }
    console.log(products);
    const dispatch = useDispatch();

    const handleAdd = (product) => {
        if (isLoggedIn) {
            dispatch(addItem(product));
            
        }
        else {
            console.log("Login to continue")
        }
    };

    useEffect(() => {
        fetchProducts();
    }, [])

    return (

        <div className='main'>
           
            <div className='d-flex-r-g'>

                {loading ? (
                    Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} className='card-cli'>
                            <Skeleton width={'100px'} height={'100px'} />
                            <Skeleton count={2} />
                            <Skeleton width={80} height={'15px'} />
                            <Skeleton width={40} />
                            <Skeleton width={100} height={'25px'} />
                        </div>
                    ))
                ) : (
                    products.isArray ? (
                        <h1>Checking for Products</h1>
                    ) : (
                        products.map((product) => (
                            <div key={product.pid} className='card-cli'>
                                <img src={product.productImage} className='product-cli-img' alt={product.productName} />
                                <h2 className='product-cli-text'>{product.productName}</h2>
                                <h1 className='product-cli-price'> ₹ {product.productPrice} </h1>
                                <button className='product-btn' onClick={() => handleAdd(product)}>
                                    Add to cart
                                </button>
                            </div>
                        ))
                    )
                )
                }

            </div>
           
        
        </div>
    )
}
export default Products;