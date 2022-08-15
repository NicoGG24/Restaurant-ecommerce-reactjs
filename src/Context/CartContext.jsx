import { createContext, useState, useEffect } from "react";

export const cartContext = createContext();


const CartContext = ({children}) => {

    const [cartProducts, setCartProducts] = useState([]);
    const [cartAmount, setCartAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [orderCompleted, setOrderCompleted] = useState(false);
    const [orderId, setOrderId] = useState("");


    const orderState = () => {
        setOrderCompleted(true);
    }
    const changeOrderId = (a) => {
        setOrderId(a)
    }

    const addItem = (newCartProduct) => {
        if(cartProducts.some(item => item.name === newCartProduct.name)){
            const productsCopy = [...cartProducts];
            const itemToAddAmmount = productsCopy.find(item => item.name === newCartProduct.name);
            itemToAddAmmount.quantity += newCartProduct.quantity;
            setCartProducts(productsCopy);
        }else{
            setCartProducts([...cartProducts, newCartProduct])
        } 
    }
    const clearCart = () => {
        setCartProducts([]);
    }
    const removeItem = (removedItem) => {
        const newCartProducts = cartProducts.filter(item => item.name != removedItem);
        console.log("item removed")

        setCartProducts(newCartProducts);
    }
    
    const totalPriceV = cartProducts.reduce((total, item) => total + item.quantity*item.price, 0);

    const totalAmmountV = cartProducts.reduce((total, item) => total + item.quantity, 0);


    useEffect(() => {
        
        setCartAmount(Math.round(totalAmmountV, -2))
        setTotalPrice(totalPriceV.toFixed(2))
        setOrderCompleted(false)
    }, [cartProducts])


    return(
        <cartContext.Provider value={{addItem, cartProducts, clearCart, removeItem, cartAmount, totalPrice, orderCompleted, orderState, changeOrderId, orderId}}>
            {children}
        </cartContext.Provider>
    );

};




export default CartContext;