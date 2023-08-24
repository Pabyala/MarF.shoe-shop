import React, { createContext, useContext, useReducer } from "react"
import reducer from '../Context/GlobalReducer'

const ShoppingCartContext = createContext({})

const initialState = {
    cart: [],
    total_amount: 0,
    shipping_fee: 60,
}


export const ShoppingCartProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    
    const addToCart = (id, image, name, itemName, price, stock, product) => {
        // run the action of ADD_TO_CART and get/payload of id, image, name, itemName, price, stock
        dispatch({type: "ADD_TO_CART", payload: {id, image, name, itemName, price, stock, product}})
    }

    const increaseQty = (id) => {
        dispatch({ type: "INCREASE_QTY", payload: id });
    };

    const decreaseQty = (id) => {
        dispatch({ type: "DECREASE_QTY", payload: id });
    };

    const removeItem = (id) => {
        dispatch({type: "REMOVE_ITEM", payload: id})
    }

    return (
        <ShoppingCartContext.Provider
            value={{ ...state, addToCart, removeItem, increaseQty, decreaseQty}}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}



export const useShoppingCartContext = () => {
    return useContext(ShoppingCartContext)
}




