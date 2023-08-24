import React from 'react'
import { Container, Dropdown, Navbar } from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import './HeaderStyle.css'
import CartPopup from '../Components/CartPopup'
import { useShoppingCartContext } from '../Context/GlobalContext'
import { Link } from 'react-router-dom'

export default function Header({ setInputSearch, inputSearch }) {

    const { cart } = useShoppingCartContext()

    return (
        <Navbar 
            // fixed="top" 
            className='header'
            style={{ height: '70px'}}
        >
            <Container>
                <Navbar.Brand className='title-nav d-flex align-items-center'>
                    <Link to='/' className='title-shop'>MarF.shop</Link>
                </Navbar.Brand>
                <div className='input-wrap'>
                    <input 
                        type="text" 
                        className='search-input' 
                        placeholder='Search a product'
                        value={inputSearch}
                        onChange={(e) => setInputSearch(e.target.value)}
                    />
                </div>
                <Dropdown>
                    <Dropdown.Toggle 
                        variant="success" 
                        id="dropdown-basic"
                        className='cart-dropdown'
                    >
                            <FaShoppingCart className='cart-icon'/>
                                <span className='cart-order-number'>{cart.length}</span>
                    </Dropdown.Toggle>
                
                    <Dropdown.Menu>
                        <CartPopup/>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    )
}
