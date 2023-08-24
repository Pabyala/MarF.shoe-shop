import React from 'react'
import { Dropdown, ListGroup } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import './CartPopupStyle.css'
import { Link } from 'react-router-dom'
import { useShoppingCartContext } from '../Context/GlobalContext'

export default function CartPopup() {

    const { cart, removeItem } = useShoppingCartContext()

    return (
        <div className='cart-popup d-flex flex-column justify-content-between align-items-center'>
            <ListGroup className='listGroup'>
                {cart.length === 0 ? (
                    <div className='w-100 h-100 d-flex align-items-center justify-content-center'>
                        Your cart is empty
                    </div>
                    ) : (
                    cart.map((prod) => {
                        return (
                            <ListGroup.Item key={prod.id}>
                                <div className="product-item">
                                    <div className="product-image">
                                        <img className='img' src={prod.image} alt="" />
                                    </div>
                                    <div className="product-name-price">
                                        <span className='name'>{prod.itemName}</span>
                                        <span className='price text-muted'>₱{prod.price.toLocaleString()}</span>
                                    </div>
                                    <div className="product-delete">
                                        <AiFillDelete 
                                            onClick={() => removeItem(prod.id)}
                                            className='delete-icon'
                                        />
                                    </div>
                                </div>
                            </ListGroup.Item>
                        )
                    })
                )}
                
            </ListGroup>
            <Link className='to-cart-link' to='/cart'>
                <Dropdown.Item as='div' className='to-cart'>
                    Go to your cart
                </Dropdown.Item>
            </Link>
        </div>
    )
}
