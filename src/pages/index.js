import { Carousel } from "@/components/Carousel";
import { CategoryList } from "@/components/CategoryList";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductList } from "@/components/ProductList";
import config from '../../config.json'

const Home = () => {
  const productsList = config.products;
  return (
    <>
      <Header />
      <Carousel />
      <ProductList title={'Mais vendidos 🔥'} text={'Ver todos'} showBtn={false} products={productsList} orderBy={'bestSellers'} showMaxItens={6} />
      <CategoryList />
      <ProductList title={'Mais produtos 🚀 '} text={'Ver mais'} products={productsList}/>
      <Footer />
    </>
  )
}

export default Home;
