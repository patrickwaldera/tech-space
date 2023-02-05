import { useState } from "react"
import { Button } from "../Button"
import { ProductCartContainer, ProductImg, Skeleton } from "./styles"

const ProductCartCard = () => {
  const [ loading, setLoading] = useState(true)

  return (
    <ProductCartContainer>
        <div className="left-wrapper">
            {loading && <Skeleton />}
            <ProductImg onLoadingComplete={() => { setLoading(false) }} src={''} alt="" fill sizes="100%" onClick={() => router.push(`/product/${id}`)} loading='eager' style={{display: loading ? 'none' : 'block'}} />
            <p>- 1 +</p>
        </div>
       <div className="rigth-wrapper">
            <p>
                Monitor Gamer LG 26 IPS, Ultra Wide, 75Hz, Full HD, 1ms, FreeSync Premium, HDR 10, 99% sRGB, HDMI, VESA - 26WQ500
            </p>
            <div className="product-info">
                <p>1 x R$ 229,99</p>
                <Button text={'Remover'} outlined/>
            </div>
       </div>
    </ProductCartContainer>
  )
}

export { ProductCartCard }