import React from 'react'
import { useNavigate } from 'react-router-dom'
const ProductCard = ({product}) => {
  const navigate = useNavigate()
  return (
    <>
    <div className='product-side '>
        <div className="porduct-card ">
        <img src={product.image} alt={product.title} />
        <h3>{product.title.slice(0, 15)}{product.title.length > 15 ? '...' : ''}</h3>
        <div className="info-side ">
            <h4>{product.price}$</h4>
            <a onClick={()=> navigate(`/products/${product?.id}`)}>read more</a>
        </div>
       
        </div>
    </div>
    
    </>
  )
}

export default ProductCard
