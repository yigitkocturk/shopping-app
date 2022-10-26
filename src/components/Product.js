/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-mixed-operators */
import './index.css'
import {moneyFormat} from '../helpers'
import React from 'react'

function Product({ product ,cart, setCart, total , money}) {

const cartItem = cart.find(item => item.id === product.id)


const addCart = () => {
    const checkCart = cart.find(item => item.id === product.id)
    if(checkCart){
        checkCart.amount += 1
        setCart([...cart.filter(item => item.id !== product.id), checkCart])
    }else {
        setCart([...cart, {
            id:product.id,
            amount:1
        }])
    }
   
}

const removeCart = () => {
    const currentCart = cart.find(item => item.id === product.id)
    const cartWithoutCurrent = cart.filter(item => item.id !==product.id)
    currentCart.amount -= 1
    if(currentCart.amount === 0){
        setCart([...cartWithoutCurrent])
    }else {
        setCart([...cartWithoutCurrent , currentCart])
    }
}

    return (
        <>
            <div className='product'>
                <img src={product.image}/>
                <h6>{product.title}</h6>
                <div className='price'>${moneyFormat(product.price)}</div>
                <div className='actions'>
                    <button className='sell-button' disabled={!cartItem} onClick={removeCart}>Çıkar</button>
                    <span className='amount'>{cartItem && cartItem.amount || 0}</span>
                    <button className='buy-btn' disabled={total + product.price > money} onClick={addCart}>Ekle</button>
                </div>
                
            </div>

        </>
    )
}

export default Product