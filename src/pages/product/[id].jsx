import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { useRouter } from "next/router"
import config from '../../../config.json'

const Product = () => {
  const router = useRouter()
  let productID = router.query.id  
  
  const product = config.products.find(element => element.id == productID);
  
  return (
    <>
      <Header />
        <div>{product?.title}</div>
      <Footer />
    </>
  )
}

export default Product
