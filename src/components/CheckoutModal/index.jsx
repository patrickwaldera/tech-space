import { useContext, useEffect, useRef } from 'react';
import { useRouter } from "next/router"
import {CheckoutContainer} from './styles'
import { CartCard } from "@/components/CartCard"
import { ProductCartCard } from "@/components/ProductCartCard"
import { ProductsListContext } from "@/context/ProductList"
import { Button } from "@/components/Button"
import { IoClose } from "react-icons/io5"

const CheckoutModal = ({modalIsVisible, setModalIsVisible, productsList}) => {
  const router = useRouter()
  const modalRef = useRef(null);
  const { products } = useContext(ProductsListContext)
  
  useEffect(() => {
    if(modalIsVisible) {
        document.body.style.overflowY = 'hidden';
    } 
  }, [modalIsVisible])

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        document.body.style.overflowY = 'auto';
        setModalIsVisible(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, setModalIsVisible]);
  
  return (
    <CheckoutContainer isVisible={modalIsVisible}>
        <div className='modal' ref={modalRef}>
            <IoClose id="close" size={36} onClick={() => setModalIsVisible(false)}/>
            <CartCard title={'Parabéns!'}>
                <p id='message'>Seu pedido foi finalizado!</p>
                <div className='products-title'>
                    <p>Produtos:</p>
                </div>
                <div className='products'>
                    {productsList.length > 0 ? 
                        productsList.map((item) => {
                            const product = products.find((p) => p.id === item.id);
                            return (
                                <ProductCartCard key={product.id} product={product} quantity={item.quantity} checkout={true}/>
                            );
                        }) 
                        : 
                        null
                    }
                </div>
                <div className='button'>
                    <Button text={'CONTINUAR COMPRANDO'} width={'100%'} onClick={() => router.push(`/products`)}/>
                </div>
            </CartCard>
        </div>
    </CheckoutContainer>
  )
}

export { CheckoutModal }
