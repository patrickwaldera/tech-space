import { CartContext } from "@/context/CartProducts"
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import { Button } from "../Button"
import { ProductCartContainer, ProductImg, Skeleton } from "./styles"

const ProductCartCard = ({product, quantity, checkout = false}) => {
  const router = useRouter()
  const [ loading, setLoading] = useState(true)
  const { addProduct, removeProduct, deleteProduct} = useContext(CartContext)

  return (
    <ProductCartContainer>
        <div className="left-wrapper">
            {loading && <Skeleton />}
            <ProductImg onLoadingComplete={() => { setLoading(false) }} src={product.images[0]} alt="" fill sizes="100%" onClick={() => router.push(`/product/${product.id}`)} loading='eager' style={{display: loading ? 'none' : 'block'}} />
        </div>
       <div className="rigth-wrapper">
            <p>
                {product.title}
            </p>
            <div className="product-info">
                <p>{quantity} x R$ {product.price.toLocaleString("pt-br", {style:"decimal", minimumFractionDigits: 2})}</p>
                {!checkout && 
                  <div>
                    <p className="quantity-btn"><Button text={'-'} onClick={() => removeProduct(product.id)}/>{quantity}<Button text={'+'} onClick={() => addProduct(product.id)}/></p>
                    <Button text={'Remover'} outlined onClick={() => deleteProduct(product.id)}/>
                 </div>
                }
            </div>
       </div>
    </ProductCartContainer>
  )
}

export { ProductCartCard }