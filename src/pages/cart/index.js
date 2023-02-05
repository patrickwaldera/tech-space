import { Button } from "@/components/Button"
import { CartCard } from "@/components/CartCard"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { ProductCartCard } from "@/components/ProductCartCard"
import { CartContainer, InputBox } from "@/styles/cartPage/styles"

const Cart = () => {
  return (
    <>
        <Header />
        <CartContainer>
            <div className="products-info">
                <CartCard title={'Produto'}>
                    <div className="products-list">
                        <ProductCartCard product={''} />
                        <ProductCartCard product={''} /> 
                        <ProductCartCard product={''} /> 
                    </div>
                </CartCard>
                <div className="clear-btn">
                    <Button text={'Limpar carrinho'} outlined/>
                </div>
                <div className="input-wrapper">
                    <CartCard title={'Cupom'}>
                        <div className="input-cart">
                            <InputBox>
                                <input type="text" placeholder='Cupom de desconto' />
                            </InputBox>
                            <div className="input-btn">
                                <Button text={'Aplicar'} />
                            </div>
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
                        <p>Total: R$ 1.998,00</p>
                    </div>
                    <div className="cost">
                        <div className="cash discount">
                            <span>à vista:</span>
                            <p>R$ 1798,20</p>
                            <span>no PIX</span>
                        </div>
                        <div className="cash">
                            <p>R$ 1798,20</p>
                            <span>em 10x sem juros</span>
                        </div>
                    </div>
                </CartCard>
                <div className="btn">
                    <Button text={'FINALIZAR PEDIDO'} width={'100%'}/>
                    <Button text={'CONTINUAR COMPRANDO'} width={'100%'} outlined/>
                </div>
            </div>
        </CartContainer>
        <Footer />
    </>
  )
}

export default Cart