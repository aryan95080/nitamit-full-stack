import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';
const ProductItem =({id,image,name,price})=>{
  const {currency}=useContext(ShopContext);

  return (
    <Link className='bg-green-400 shadow-md backdrop-blur-lg shadow-gray-500 text-black font-bold cursor-pointer rounded overflow-hidden m-1 p-2' to={`/product/${id}`}>
    <div className='overflow-hidden h-45'>
    <img src={image[0]} className=' hover-scale-110 rounded transition ease-in-out' />
    </div>
    <p className='pt-3 pb-1 text-sm'>{name}</p>
    <p className='text-sm font-medium '>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem;