import { Button } from "@/components/Button"
import { CartCard } from "@/components/CartCard"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { NotFound } from "@/components/NotFound"
import { ProductCartCard } from "@/components/ProductCartCard"
import { CartContext } from "@/context/CartProducts"
import { ProductsListContext } from "@/context/ProductList"
import { CartContainer, InputBox } from "@/styles/cartPage/styles"
import { useRouter } from "next/router"
import { useContext, useState } from "react"

const Cart = () => {
  const router = useRouter()
  const { products } = useContext(ProductsListContext)
  const { productsList, clearCart} = useContext(CartContext)
  const [couponCode, setCouponCode] = useState('');

  const calculateTotal = (discount = 0) => {
    let total = 0;
    productsList.forEach((item) => {
        const product = products.find((p) => p.id === item.id);
        total += product.price * item.quantity;
    });
    total = total - (total * discount)
    return total;
  };

  const handleSubmitCoupon = (event) => {
    event.preventDefault();
    // Apply the coupon code here
  };

  return (
    <>
        <Header />
        <CartContainer>
            {productsList.length > 0 ? 
            <>
                <div className="products-info">
                    <CartCard title={'Produto'}>
                        <div className="products-list">
                            {productsList.map((item) => {
                                const product = products.find((p) => p.id === item.id);
                                return (
                                    <ProductCartCard key={product.id} product={product} quantity={item.quantity}/>
                                );
                            })}
                        </div>
                    </CartCard>
                    <div className="clear-btn">
                        <Button text={'Limpar carrinho'} outlined onClick={() => clearCart()}/>
                    </div>
                    <div className="input-wrapper">
                        <CartCard title={'Cupom'}>
                            <div className="input-cart">
                                <form onSubmit={handleSubmitCoupon}>
                                    <InputBox>
                                        <input type="text" placeholder='Cupom de desconto'
                                        value={couponCode}
                                        onChange={(event) => setCouponCode(event.target.value)} />
                                    </InputBox>
                                    <div className="input-btn">
                                        <Button type="submit" text={'Aplicar'} />
                                    </div>
                                </form>
                            </div>
                        </CartCard>
                        <CartCard title={'Frete'}>
                            <div className="input-cart">
                                <InputBox>
                                    <input type="text" placeholder='CEP' />
                                </InputBox>
                                <div className="input-btn">
                                    <Button text={'Calcular'} />
                                </div>
                            </div>
                        </CartCard>
                    </div>
                </div>
                <div className="summary">
                    <CartCard title={'Resumo'}>
                        <div className="total">
                            <p>Total: R$ {calculateTotal().toLocaleString("pt-br", {style:"decimal", minimumFractionDigits: 2})}</p>
                        </div>
                        <div className="cost">
                            <div className="cash discount">
                                <span>à vista:</span>
                                <p>R$ {calculateTotal(0.05).toLocaleString("pt-br", {style:"decimal", minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                                <span>no PIX</span>
                            </div>
                            <div className="cash">
                                <p>R$ {calculateTotal().toLocaleString("pt-br", {style:"decimal", minimumFractionDigits: 2})}</p>
                                <span>em 10x sem juros</span>
                            </div>
                        </div>
                    </CartCard>
                    <div className="btn">
                        <Button text={'FINALIZAR PEDIDO'} width={'100%'}/>
                        <Button text={'CONTINUAR COMPRANDO'} width={'100%'} outlined onClick={() => router.push(`/products`)}/>
                    </div>
                </div>
            </>
        :                
            <>
                <div className="empty-cart">
                    <h1>O seu carrinho está vazio.</h1>
                    <NotFound />
                </div>
            </>
        }
        </CartContainer>
        <Footer />
    </>
  )
}

export default Cart