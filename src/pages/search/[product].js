import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { NotFound } from "@/components/NotFound"
import { ProductList } from "@/components/ProductList"
import { ProductsListContext } from "@/context/ProductList"
import { SearchPageContainer } from "@/styles/searchPage/styles"
import { useRouter } from "next/router"
import { useContext, useState } from "react"

const Search = () => {
    
    const router = useRouter()
    let search = router.query.product
    const { products } = useContext(ProductsListContext);
    const productsFiltered = products.filter((product) => {
        return product.title.toLowerCase().includes(search) || product.category.toLowerCase().includes(search)
    })
    const [ order, setOrder] = useState('bestSellers')

    const handleSortOrderChange = (event) => {
        setOrder(event.target.value)
    }

    return (
        <>
            <Header />
                <SearchPageContainer>
                    <div className="search-text">
                        <h1>Resultados da busca por: {`"${search}"`}</h1>
                    </div>
                    {productsFiltered.length === 0 ? 
                        <NotFound text={'Nehum produto encontrado!'} />
                        :
                        <>
                        <div className="order-by">
                            <p>Ordenar por: </p>
                            <select onChange={handleSortOrderChange}>
                                <option value={'bestSellers'}>Mais vendidos</option>
                                <option value={'bestRated'}>Melhor avaliados</option>
                                <option value={'priceAsc'}>Preço crescente</option>
                                <option value={'priceDesc'} >Preço decrescente</option>
                            </select>
                        </div> 
                        <ProductList showTitle={false} text={'Ver mais'} products={productsFiltered} orderBy={order} />
                    </>
                    }
                </SearchPageContainer>
            <Footer />
        </>
    )
}

export default Search
