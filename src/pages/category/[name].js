import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Loading } from "@/components/Loading"
import { NotFound } from "@/components/NotFound"
import { ProductList } from "@/components/ProductList"
import { ProductsListContext } from "@/context/ProductList"
import { CategoryPageContainer } from "@/styles/categoryPage/styles"
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import config from '../../../config.json'

const Category = () => {
    const router = useRouter()
    let category = router.query.name

    const categoryIsValid = config.departments.find(department => department.name.toLowerCase() == category)

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
                    {categoryIsValid ?
                        <>
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
                        </>
                    :
                    <NotFound text={'Categoria não encontrada!'} /> 
                    }
                </CategoryPageContainer>
            <Footer />
        </>
    )
}

export default Category
