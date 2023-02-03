import { BuyProduct, CardContainer, CustAndBuy, ProductImg, ProductPrice, ProductTitle, Skeleton } from './styles'
import { StarRating } from '../StarRating'
import { Button } from '../Button'
import { useRouter } from 'next/router';
import LazyLoad from 'react-lazyload';

const ProductCard = ({id, rating, image, title, oldprice, price}) => {
  const router = useRouter();

  return (
    <CardContainer>
        <StarRating ratingStars={rating} />
        <LazyLoad height={88} once={true}>
            <ProductImg src={image} alt="" fill sizes="100%" onClick={() => router.push(`/product/${id}`)} />
        </LazyLoad>
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
                <Button text={'COMPRAR'}/>
            </BuyProduct>
        </CustAndBuy>
    </CardContainer>
  )
}

export { ProductCard }