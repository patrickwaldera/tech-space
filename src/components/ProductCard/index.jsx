import { BuyProduct, CardContainer, CustAndBuy, ProductImg, ProductPrice, ProductTitle, Skeleton } from './styles'
import { StarRating } from '../StarRating'
import { Button } from '../Button'
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { Loading } from '../Loading';
import { CartContext } from '@/context/CartProducts';

const ProductCard = ({id, rating, image, title, oldprice, price}) => {

  const router = useRouter();
  const { addProduct } = useContext(CartContext)
  const [ loading, setLoading] = useState(true)

  return (
    <CardContainer>
        <StarRating ratingStars={rating} />
        {loading && <Skeleton><Loading /></Skeleton>}
        <ProductImg onLoadingComplete={() => {
            setLoading(false)
            }} src={image} alt="" fill sizes="100%" onClick={() => router.push(`/product/${id}`)} loading='eager' style={{display: loading ? 'none' : 'block'}} />
        <ProductTitle>
            <p>{title}</p>
        </ProductTitle>
        <CustAndBuy>
            <ProductPrice>
                {oldprice !== 0 ? 
                    <p className='old-price'>de: <span>R$ {oldprice.toLocaleString("pt-br", {style:"decimal", minimumFractionDigits: 2})}</span> por:</p>
                :               
                    <p className='old-price'>-</p>
                }
                <div className='price'>
                    <p>R$ <strong>{price.toLocaleString("pt-br", {style:"decimal", minimumFractionDigits: 2})}</strong></p>
                    <p>à vista</p>
                </div>
            </ProductPrice>
            <BuyProduct>
                <Button text={'COMPRAR'} onClick={() => {
                      addProduct(id)
                      router.push('/cart');
                    }} />
            </BuyProduct>
        </CustAndBuy>
    </CardContainer>
  )
}

export { ProductCard }