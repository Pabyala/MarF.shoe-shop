import React, { useEffect, useState } from 'react'
import './BrandofProductStyle.css'
import Nike from "../Assets/Brand logo's/nike-logo.png"
import Vans from "../Assets/Brand logo's/vans-logo.png"
import Addidas from "../Assets/Brand logo's/addidas-logo.png"
import Converse from "../Assets/Brand logo's/Converse_logo.png"
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'
import { ProductsItem } from '../Data/ProducstItem';
import { FilterItem } from '../Data/FilterItem'

export default function BrandofProduct({setFilteredData}) {
    const [isActive, setIsActive] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState("All products")

    useEffect(() => {
        let updatedFilteredData = ProductsItem;

        if (selectedFilter === "High-Low") {
            updatedFilteredData = [...ProductsItem].sort((a, b) => b.price - a.price);
        } else if (selectedFilter === "Low-High") {
            updatedFilteredData = [...ProductsItem].sort((a, b) => a.price - b.price);
        } else if (selectedFilter === "All products") {
            updatedFilteredData = ProductsItem;
        } else if (selectedFilter === "Nike"){
            updatedFilteredData = ProductsItem.filter(item => item.name === "Nike")
        } else if (selectedFilter === "Vans"){
            updatedFilteredData = ProductsItem.filter(item => item.name === "Vans")
        } else if (selectedFilter === "Adidas"){
            updatedFilteredData = ProductsItem.filter(item => item.name === "Adidas")
        } else if (selectedFilter === "Converse"){
            updatedFilteredData = ProductsItem.filter(item => item.name === "Converse")
        }

        setFilteredData(updatedFilteredData);
    }, [selectedFilter, setFilteredData]);

    function handleSelectedFilter(itemFilter){
        setSelectedFilter(itemFilter);
        setIsActive(false)
    }

    const handleFilter = () => {
        setIsActive(!isActive)
    }
    return (
        <div className='w-100'>
            <h3 className='brand-title'>Our Products</h3>
            <div className="all-product-brand">
                <div className="brand nike">
                    <div className="brand-wrap">
                        <img className='brand-img' src={Nike} alt="Nike" />
                    </div>
                </div>
                <div className="brand vans">
                    <div className="brand-wrap">
                        <img className='brand-img' src={Vans} alt="Vans" />
                    </div>

                </div>
                <div className="brand addidas">
                    <div className="brand-wrap">
                        <img className='brand-img' src={Addidas} alt="Addidas" />
                    </div>

                </div>
                <div className="brand converse">
                    <div className="brand-wrap">
                        <img className='brand-img' src={Converse} alt="Converse" />
                    </div>
                </div>
            </div>
            <div className="filter-con">
                <p className='filter-text'>Product Filters</p>
                <div className="filter-wrap">
                    <div className="dropdown-filter" onClick={handleFilter}>
                        <span className='all-products'>{selectedFilter}</span>
                        {isActive ? 
                            (<AiFillCaretUp className='down-icon'/>) 
                            : (<AiFillCaretDown className='down-icon'/>)
                        }
                    </div>
                    {isActive && (
                        <div className="dropdown-content">
                            {FilterItem.map((item) => {
                                return (
                                    <div 
                                        key={item.id}
                                        className="dropdown-item" 
                                        onClick={() => handleSelectedFilter(item.name)}
                                    >
                                        {item.name}
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
