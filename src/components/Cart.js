import CartItem from './CartItem'
import './index.css'
import {moneyFormat} from '../helpers'

function Cart({ cart, products, total, resetCart }) {


    return (
        <>
            <div className='cart-container container'>
                <h3>Alışveriş Detayları</h3>
                <ul>
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} product={products.find(p => p.id === item.id)} />
                    ))}
                </ul>

                <div className='total'>
                    Toplam: ${moneyFormat(total)}
                </div>

                <button className='cart-reset-btn' onClick={resetCart}>Sepeti sıfırla</button>
            </div>

        </>

    )
}

export default Cart