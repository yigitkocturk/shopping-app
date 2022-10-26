import React from 'react'
import './index.css'

export default function CartItem({item, product}) {
  return (
    <li className='cart-item'>
        {product.title} x <span>{item.amount}</span>
    </li>
  )
}
