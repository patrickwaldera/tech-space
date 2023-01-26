import { Loading } from "@/components/Loading";
import { createContext, useEffect, useState } from "react"

export const ProductsListContext = createContext();

export default function ProductsListProvider({children}) {

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
    <ProductsListContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsListContext.Provider>
  )
}
