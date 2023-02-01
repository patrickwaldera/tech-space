import { ProductsListContext } from "@/context/ProductList"
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react"
import { AutocompleteContainer, ProductImg } from "./styles"

const Autocomplete = ({inputSearch, clearSearch}) => {
  const router = useRouter();
  const { products } = useContext(ProductsListContext)
  const [ productsFiltered, setProductsFiltered ] = useState([])

  useEffect(() => {
    const newFilter = products.filter((product) => {
        return product.title.toLowerCase().includes(inputSearch.toLowerCase())
    })
    if(inputSearch.length !== 0) {
        setProductsFiltered(newFilter)
    }
    else {
        setProductsFiltered([])
    }
  }, [inputSearch, products])
  
  return (
    <>
        {productsFiltered.length !== 0 && 
            <AutocompleteContainer>
                <ul>
                    {productsFiltered.slice(0,4).map((product) => 
                        <li key={product.id} onClick={() => {router.push(`/product/${product.id}`); clearSearch()}}>
                            <ProductImg  src={product.images[0]} alt="" fill sizes="100%"/>
                            <p>{product.title}</p>
                        </li>
                    )}
                </ul>
            </AutocompleteContainer>
        }
    </>
  )
}

export { Autocomplete }
