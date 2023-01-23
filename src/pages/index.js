import { Carousel } from "@/components/Carousel";
import { CategoryCard } from "@/components/CategoryCard";
import { CategoryList } from "@/components/CategoryList";
import { Header } from "@/components/Header";
import { ProductList } from "@/components/ProductList";

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <ProductList />
      <CategoryList />
    </>
  )
}

export default Home;
