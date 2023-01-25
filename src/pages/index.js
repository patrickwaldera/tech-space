import { Carousel } from "@/components/Carousel";
import { CategoryList } from "@/components/CategoryList";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";
import { ProductList } from "@/components/ProductList";
import { useEffect, useState } from "react";

const Home = () => {

  const [data, setData] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('/config.json');
      const json = await res.json();
      setData(json);
      const productsList = json.products;
      setProducts(productsList);
    }

    fetchData();
  }, []);

  if (!data) {
    return <Loading />;
  }


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
