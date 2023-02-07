import { AstronautImage, NotFoundContainer } from "./styles"
import astronaut from '../../assets/astronaut.png'
import { Button } from "../Button"
import Link from "next/link"
import { ProductList } from "../ProductList"
import { useContext } from "react"
import { ProductsListContext } from "@/context/ProductList"

const NotFound = ({text}) => {
  const { products } = useContext(ProductsListContext);
  return (
    <>
        {text && 
        <NotFoundContainer>
            <div className="not-found-info">
                <h1>404</h1>
                <h2>{text}</h2>
                <Link href='/'>
                    <Button text={'IR A PÁGINA INICIAL'}/>
                </Link>
            </div>
            <div>
                <AstronautImage src={astronaut} alt="" fill sizes="100%" loading="lazy" />
            </div>
        </NotFoundContainer>
        }
        <ProductList title={'Mais produtos 🚀 '} text={'Ver mais'} products={products}/>
    </>
  )
}

export { NotFound }