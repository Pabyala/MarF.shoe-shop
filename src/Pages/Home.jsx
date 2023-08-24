import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProductsItem } from '../Data/ProducstItem';
import './HomeStyle.css'
import Product from '../Components/Product';
import BrandofProduct from '../Components/BrandofProduct';
import Header from './Header';

export default function Home() {
    const [filteredData, setFilteredData] = useState(ProductsItem)
    const [inputSearch, setInputSearch] = useState('')
    
    const filteredProducts = filteredData.filter((item) => {
        if(inputSearch === ''){
            return true
        } else {
            return item.itemName.toLowerCase().includes(inputSearch.toLowerCase())
        }
    })

    return (
        <>
            <div className="home">
                <Header
                    setInputSearch={setInputSearch}
                    inputSearch={inputSearch}
                />
                <Container className='product-list-container'>
                    <div className='product-container'>
                        <BrandofProduct
                            setFilteredData={setFilteredData}
                        />
                        <Row className='row-wrap w-100 m-0'>
                            {filteredProducts.map((prod) => {
                                prod.qty = 1
                                return (
                                    <Col key={prod.id} xxs={4} xs={6} sm={4} md={3} lg={3} 
                                        className='custom-col px-1'
                                    >
                                        <Product product={prod}/>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                </Container>
                <div className="footer">
                    <span className='footer-name'>Design by: Eleomar</span>
                </div>
            </div>
        </>      
    )
}
