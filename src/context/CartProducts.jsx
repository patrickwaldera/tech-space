import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({children}) {
    const [ productsList, setProductsList ] = useState([])

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setProductsList(savedCart);
      }, []);

    const addProduct = (productId) => {
        const copyProductsList = [...productsList]

        const item = copyProductsList.find((product) => product.id === productId)

        if(!item) {
            copyProductsList.push({ id: productId, quantity: 1})   
        }
        else {
            item.quantity = item.quantity + 1;
        }

        setProductsList(copyProductsList);
        console.log(copyProductsList)
    };
    
    const removeProduct = (productId) => {
        const copyProductsList = [...productsList]

        const item = copyProductsList.find((product) => product.id === productId)

        if(item.quantity > 1) {
            item.quantity = item.quantity - 1;
            setProductsList(copyProductsList);
        }
        else {
            const arrayFiltered = copyProductsList.filter((product) => product.id !== productId)
            setProductsList(arrayFiltered);
        }
    };

    const updateQuantity = (productId, quantity) => {

        const copyProductsList = [...productsList]

        const item = copyProductsList.find((product) => product.id === productId)

        if(item.quantity > 1) {
            item.quantity = quantity;
            setProductsList(copyProductsList);
        }        
    };

    const clearCart = () => {
        setProductsList([])
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(productsList));
      }, [productsList]);

    return (
        <CartContext.Provider value={{ productsList, addProduct, removeProduct, clearCart, updateQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

