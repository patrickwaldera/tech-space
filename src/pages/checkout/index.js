import { useRouter } from "next/router"

const { Footer } = require("@/components/Footer")
const { Header } = require("@/components/Header")

const Checkout = () => {
    const router = useRouter();

    const total = parseInt(router.query.total);
    const coupon = router.query.coupon;

    return (
        <>
            <Header />
            Total: {total.toLocaleString("pt-br", {style:"decimal", minimumFractionDigits: 2})}
            Cupom: {coupon}
            <Footer />        
        </>
    )
}

export default Checkout