import { useRouter } from "next/router"
import config from '../../../config.json'

const Product = () => {
  const router = useRouter()
  let productID = router.query.id  
  
  const product = config.products.find(element => element.id == productID);
  
  return (
    <div>{product?.title}</div>
  )
}

export default Product
