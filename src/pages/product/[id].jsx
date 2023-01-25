import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { ProductImages, ProductInfo, ProductImg, ProductContainer } from "@/styles/productPage/styles"
import { useRouter } from "next/router"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { StarRating } from "@/components/StarRating"
import { Button } from "@/components/Button"
import { ProductList } from "@/components/ProductList"
import { useEffect, useState } from "react"
import { Loading } from "@/components/Loading"

const Product = () => {
  const router = useRouter()
  const productID = router.query.id

  const [data, setData] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/config.json');
      const json = await res.json();
      setData(json);
      const foundProduct = json.products.find(element => element.id == productID);
      setProduct(foundProduct);
    }

    fetchData();
  }, [productID]);

  if (!data) {
    return <Loading />;
  }
  
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <ProductImg src={product?.images[0]} fill sizes="100%" alt='' />
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
          <ProductImages>
            <Slider className="carousel-product" {...settings}>
              <div>
                <ProductImg src={product?.images[0]} fill sizes="100%" alt='' />
              </div>
              <div>
                <ProductImg src={product?.images[0]} fill sizes="100%" alt='' />
              </div>
              <div>
                <ProductImg src={product?.images[0]} fill sizes="100%" alt='' />
              </div>
              <div>
                <ProductImg src={product?.images[0]} fill sizes="100%" alt='' />
              </div>
            </Slider>
          </ProductImages>
          <ProductInfo>
            <h1>{product?.title}</h1>
            <div className="brand-stars">
              <p className="brand">Marca: {product?.brand.toUpperCase()}</p>
              <StarRating ratingStars={product?.rating} />
            </div>
            <p>{product?.description}</p>
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
                  <Button text={'ADICIONAR AO CARRINHO'} size={'1rem'} width={'100%'} outlined/>
                  <Button text={'COMPRAR'} size={'1rem'} width={'100%'}/>
            </div>
          </ProductInfo>
        </ProductContainer>
        <ProductList title={'Mais produtos 🚀 '} text={'Ver mais'} products={data.products}/>
      <Footer />
    </>
  )
}

export default Product
