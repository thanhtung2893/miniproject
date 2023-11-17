import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./Product.scss"
import { useDispatch } from 'react-redux';
import { addToCart, calculateTotal } from '../../action/Action';

export default function Products() {
    //get API về
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/products")
            .then(res => res.json())
            .then(data => {
                setProducts([...data]);
            })
    }, [])
    const dispatch = useDispatch();

    const handleAddToCart = (product,quantity) => {
      dispatch(addToCart(product,quantity));
      dispatch(calculateTotal());
    };  
   
    return (
         <div className='product'>
            {products.map((i) => {
                return <div className='item' key={i.id}>
                    <Link to={`/products/${i.id}`}><img style={{ width: '200px', height: '200px' }} src={i.image} /></Link>
                    <div>{i.name}</div>
                    <div>price:{i.price}</div>
                    <div><button onClick={() => handleAddToCart(i)}>Add to Cart</button></div>
                </div>
            })}
            <Outlet></Outlet>
        </div>
       
    )
}
