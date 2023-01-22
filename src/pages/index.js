import { Carousel } from "@/components/Carousel";
import { Header } from "@/components/Header";
import { ProductList } from "@/components/ProductList";

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <ProductList />
      <ProductList />
    </>
  )
}

export default Home;
