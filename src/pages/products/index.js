import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { ProductList } from "@/components/ProductList"
import { ProductsListContext } from "@/context/ProductList"
import { ProductsPageContainer } from "@/styles/productsPage/styles"
import { useRouter } from "next/router"
import { useContext, useState } from "react"

const Products = () => {

    const { products } = useContext(ProductsListContext);
    const router = useRouter()
    const { orderBy } = router.query
    const [ order, setOrder] = useState(orderBy || 'bestSellers')

    const handleSortOrderChange = (event) => {
        setOrder(event.target.value)
    }

    return (
        <>
            <Header />
            <ProductsPageContainer>
                <div className="title">
                    <h1>TODOS OS PRODUTOS</h1>
                </div>            
                <div className="order-by">
                    <p>Ordenar por: </p>
                    <select onChange={handleSortOrderChange}>
                        <option value={'bestSellers'}>Mais vendidos</option>
                        <option value={'bestRated'}>Melhor avaliados</option>
                        <option value={'priceAsc'}>Preço crescente</option>
                        <option value={'priceDesc'} >Preço decrescente</option>
                    </select>
                </div>            
                <ProductList showTitle={false} text={'Ver mais'} products={products} orderBy={order} showMaxItens={50} />
            </ProductsPageContainer>
            <Footer />
        </>
    )
}

export default Products
