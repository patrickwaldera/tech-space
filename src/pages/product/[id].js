import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { ProductImages, ProductInfo, ProductImg, ProductContainer, Skeleton } from "@/styles/productPage/styles"
import { useRouter } from "next/router"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { StarRating } from "@/components/StarRating"
import { Button } from "@/components/Button"
import { ProductList } from "@/components/ProductList"
import { useContext, useState } from "react"
import { ProductsListContext } from "@/context/ProductList"
import { NotFound } from "@/components/NotFound"
import { Loading } from "@/components/Loading"
import { CartContext } from "@/context/CartProducts"
import Link from "next/link"

const Product = () => {
  const router = useRouter()
  const productID = router.query.id

  const { products } = useContext(ProductsListContext);
  const { addProduct } = useContext(CartContext)
  const product = products.find(product => product.id == productID);
  const [ loading, setLoading] = useState(true)
  const [showMessage, setShowMessage] = useState(false);
  
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <ProductImg src={product?.images[i]} fill sizes="100%" alt='' loading="lazy"/>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <Header />
        <ProductContainer>
        {product ? 
          <>
            <ProductImages>
              <Slider {...settings}>
                {product.images.map((image) => 
                <div key={image}>
                  {loading && <Skeleton><Loading /></Skeleton>}
                  <ProductImg src={image} fill sizes="100%" alt='' loading="eager" onLoadingComplete={() => {setLoading(false)}} style={{display: loading ? 'none' : 'block'}}/>
                </div>
                )}
              </Slider>
            </ProductImages>
            <ProductInfo>
              <h1>{product?.title}</h1>
              <div className="brand-stars">
                <p className="brand">Marca: {product?.brand.toUpperCase()}</p>
                <StarRating ratingStars={product?.rating} />
              </div>
              <p className="description">{product?.description}</p>
              <div className="price">
                {product?.oldprice !== 0 ? 
                        <p className='old-price'>de: <span>R$ {product?.oldprice.toLocaleString("pt-br", {style:"decimal", minimumFractionDigits: 2})}</span> por:</p>
                    :               
                        <p className='old-price'>-</p>
                    }
                    <div className='price'>
                        <p>R$ <strong>{product?.price.toLocaleString("pt-br", {style:"decimal", minimumFractionDigits: 2})}</strong></p>
                        <p>à vista no boleto ou PIX</p>
                    </div>
              </div>
              <div className="btn">
                    <Button text={'ADICIONAR AO CARRINHO'} size={'1rem'} width={'100%'} outlined onClick={() => {
                      addProduct(product.id)
                      setShowMessage(true);
                      setTimeout(() => setShowMessage(false), 3000);
                    }
                   }/>
                   {showMessage && (
                    <div className={`add-message`}>
                      <p>Item adicionado ao carrinho!<Link id="view-cart" href={'/cart'}>Visualizar!</Link></p>
                    </div>
                   )}
                    <Button text={'COMPRAR'} size={'1rem'} width={'100%'}/>
              </div>
            </ProductInfo>
          <ProductList title={'Mais produtos 🚀 '} text={'Ver mais'} products={products}/>
          </>
        :
          <NotFound text={'Produto não encontrado!'} /> 
        }
        </ProductContainer>
      <Footer />
    </>
  )
}

export default Product
