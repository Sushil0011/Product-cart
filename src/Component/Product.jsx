import React, { useState, useEffect } from 'react'

import axios from 'axios';
import { data } from 'autoprefixer';
import Card from './Card';

const Product = () => {

  const [product, setProduct] = useState([]);



  // console.log(product)


  const api = "https://fakestoreapi.com/products"
  const fetchProducts = async (url) => {
    const res = await axios.get(url);
    const product = await res.data;

    setProduct(product)
    // console.log(product)
  }
  useEffect(() => {
    fetchProducts(api);
  }, [])
  return (


    <div  className='grid  2xl:grid-cols-3  gap-[2rem]   xl:grid-cols-2 grid-col-1 place-content-center place-items-center'>
      {
        product.map((elem) => {
          // console.log( "product ",elem)
          return (
            <Card  key={elem.id}   elem={elem}    product={product}/>
          )
        })
      }

    </div>
  )
}

export default Product