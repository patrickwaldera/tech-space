import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { ProductList } from "@/components/ProductList"
import { ProductsListContext } from "@/context/ProductList"
import { CategoryPageContainer } from "@/styles/categoryPage/styles"
import { useRouter } from "next/router"
import { useContext, useState } from "react"

const Category = () => {
    const router = useRouter()
    let category = router.query.name
    const { products } = useContext(ProductsListContext);
    const productsFiltered = products.filter((product) => product.category == category)
    const [ order, setOrder] = useState('bestSellers')

    const handleSortOrderChange = (event) => {
        setOrder(event.target.value)
    }

    return (
        <>
            <Header />
                <CategoryPageContainer>
                    <div className="category-title">
                        <h1>{category}</h1>
                    </div>
                    {productsFiltered.length === 0 ? 
                        <h2>Nehum produto encontrado!</h2>
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
                </CategoryPageContainer>
            <Footer />
        </>
    )
}

export default Category
