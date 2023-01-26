import { Carousel } from "@/components/Carousel";
import { CategoryList } from "@/components/CategoryList";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductList } from "@/components/ProductList";
import { ProductsListContext } from "@/context/ProductList";
import { useContext } from "react";

const Home = () => {

  const { products } = useContext(ProductsListContext);

  return (
    <>
      <Header />
      <Carousel />
      <ProductList title={'Mais vendidos 🔥'} text={'Ver todos'} showBtn={false} products={products} orderBy={'bestSellers'} showMaxItens={6} />
      <CategoryList />
      <ProductList title={'Mais produtos 🚀 '} text={'Ver mais'} products={products}/>
      <Footer />
    </>
  )
}

export default Home;
