import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function CartSummary({ cart, total_amount, shipping_fee, orderTotal }) {
    return (
        <div className='cart-summary' >
            <div className="cart-summary-wrap w-100 d-flex flex-column">
                <div className='cartttt'>
                    <h5>Order Summary</h5>
                    <div className='subtotal-wrap'>
                        <span className='subtotal-text'>Items:</span>
                        <span className='subtotal-num'>{cart.length}</span>
                    </div>
                    <div className='subtotal-wrap'>
                        <span className='subtotal-text'>Subtotal:</span>
                        <span className='subtotal-num'>₱{total_amount.toLocaleString()}</span>
                    </div>
                    <div className='shipping-wrap'>
                        <span className='shipping-text'>Shipping fee:</span>
                        <span className='shipping-num'>₱{shipping_fee}</span>
                    </div>
                    <div className="orderTotal-wrap">
                        <span className='order-text'>Order total:</span>
                        <span className='order-num'>₱{orderTotal.toLocaleString()}</span>
                    </div>
                    </div>
                    <div className='w-100 d-flex justify-content-between'>
                    <Link to='/MarF.shoe-shop' className='continue-link'>
                        <Button className='w-100 continue-btn'>Continue shopping</Button>
                    </Link>
                    <Button className='checkout-btn'>Checkout</Button>
                </div>
            </div>
        </div>
    )
}
