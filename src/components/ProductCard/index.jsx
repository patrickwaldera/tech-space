import { BuyProduct, CardContainer, CustAndBuy, ProductImg, ProductPrice, ProductTitle, Stars } from './styles'
import { StarRating } from '../StarRating'
import { Button } from '../Button'
import { useRouter } from 'next/router';

const ProductCard = ({id, rating, image, title, oldprice, price}) => {
  const router = useRouter();
  return (
    <CardContainer>
        <StarRating ratingStars={rating} />
        <ProductImg  src={image} alt="" fill sizes="100%" onClick={() => router.push(`/product/${id}`)}/>
        <ProductTitle>
            <p>{title}</p>
        </ProductTitle>
        <CustAndBuy>
            <ProductPrice>
                {oldprice !== 0 ? 
                    <p className='old-price'>de: <span>R$ {oldprice}</span> por:</p>
                :               
                    <p className='old-price'>-</p>
                }
                <div className='price'>
                    <p>R$ <strong>{price}</strong></p>
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