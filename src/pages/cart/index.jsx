import { CartCard } from "@/components/CartCard"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { CartContainer } from "@/styles/cartPage/styles"

const Cart = () => {
  return (
    <>
        <Header />
        <CartContainer>
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
        </CartContainer>
        <Footer />
    </>
  )
}

export default Cart