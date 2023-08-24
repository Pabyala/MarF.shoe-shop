import React from 'react'
import './CartPageStyle.css'
import { Container, ListGroup } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import { useShoppingCartContext } from '../Context/GlobalContext'
import Header from './Header'
import CartSummary from '../Components/CartSummary'

export default function CartPage() {
  const { cart, total_amount, shipping_fee, 
        removeItem, increaseQty, decreaseQty } = useShoppingCartContext()

  const orderTotal = total_amount + shipping_fee

  return (
    <div className='cart-page'>
      <Header/>
      <Container>
        <div className='cartpage-wrap'>
            <ListGroup className='cart-items'>
              {cart.length === 0 ? (
                <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
                  Your cart is empty
                </div>
                ) : (
                <ListGroup.Item className='cart-items-wrap h-100'>
                  {cart.map((item) => {
                    const subTotal = item.price * item.qty
                    return (
                      <div key={item.id} className="cart-item">
                        <div className="item-image-name-price">
                          <div className="item-img">
                            <img src={item.image} alt={item.itemName} />
                          </div>
                          <div className="item-name-price">
                            <span className='item-name'>{item.itemName}</span>
                            <span className='item-name-brand'>{item.name}</span>
                            <span className="item-price text-muted"><span>Price: </span>₱{item.price.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="item-qty-subtotal">
                          <span className='stock'>Stock: {item.stock}</span>
                          <span className='qty-text'>Quantity:</span>
                          <div className="item-qty">
                            <div className="increase-decrease">
                              <div className='increase-item' onClick={() => decreaseQty(item.id)}>-</div>
                              <div className="qty-wrap">
                                <span className='qty'>{item.qty}</span>
                              </div>
                              <div className='decrease-item' onClick={() => increaseQty(item.id)}>+</div>
                            </div>
                          </div>
                          <div className="item-subtotal">
                            <span className='subtotal'><span className='subtotal-t'>Subtotal: </span>₱{subTotal.toLocaleString()}</span>
                          </div>
                        </div>
                        <div className="item-delete">
                          <AiFillDelete onClick={() => removeItem(item.id)} className='delete-to-cart'/>
                        </div>
                      </div>
                    )
                  })}
                </ListGroup.Item>
              )} 
            </ListGroup>
            <CartSummary
              cart={cart}
              total_amount={total_amount}
              shipping_fee={shipping_fee}
              orderTotal={orderTotal}
            />
        </div>
      </Container>
    </div>
  )
}
