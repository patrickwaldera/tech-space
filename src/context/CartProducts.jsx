import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({children}) {
    
    const [ productsList, setProductsList ] = useState('')

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart'));
        if(savedCart) {
            setProductsList(savedCart);
        }
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

    const deleteProduct = (productId) => {
        const copyProductList = [...productsList]
        const arrayFiltered = copyProductList.filter((product) => product.id !== productId)
        setProductsList(arrayFiltered);
    }

    const clearCart = () => {
        setProductsList([])
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(productsList));
      }, [productsList]);

    return (
        <CartContext.Provider value={{ productsList, addProduct, removeProduct, deleteProduct, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

