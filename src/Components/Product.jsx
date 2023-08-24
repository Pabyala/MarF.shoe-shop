import React from 'react'
import { Card } from 'react-bootstrap'
import { useShoppingCartContext } from '../Context/GlobalContext';
import { BiSolidAddToQueue } from 'react-icons/bi'
import './ProductStyle.css'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Product({ product }) {
    const { id, image, name, itemName, price, stock } = product;
    const { addToCart, cart } = useShoppingCartContext()

    const handleAddToCart = () => {
        const cartItemProduct = cart.find((item) => item.id === id);
        if (cartItemProduct) {
          toast.info('This item is already in your cart', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          addToCart(id, image, name, itemName, price, stock, product);
          toast.success('Added to cart', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      };

    return (
        <Card className='card-item'>
            <div className='image-con'>
                <Card.Img 
                    className='item-img'
                    variant="top" 
                    src={image} 
                    alt={itemName}
                />
            </div>
            <Card.Body className='card-detail'>
                <div className='products'>
                <Card.Title className='cart-name'>{itemName}</Card.Title>
                <Card.Text className='cart-brand text-muted'>{name}</Card.Text>
                <Card.Text className='cart-stock text-muted'>Stock: {stock}</Card.Text>
                </div>
                <div className='cart-price-addbtn w-100 d-flex align-items-center justify-content-between'>
                    <div className="cart-price-wrap">
                        <Card.Text className='cart-price text-muted'>₱{price.toLocaleString()}</Card.Text>
                    </div>
                    <div className="cart-addbtn-wrap">
                        <BiSolidAddToQueue 
                            className='cart-addbtn'
                            onClick={handleAddToCart}
                        />
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}
