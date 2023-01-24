import { ProductCard } from "../ProductCard"
import { List, ProductListContainer, TitleList } from "./styles"
import { Button } from "../Button"

const ProductList = ({title, text, showBtn=true, products, orderBy='', showMaxItens}) => {

  if(orderBy === 'bestSellers') {
    products = products.sort((a, b) => b.sold - a.sold)
  }
  else {
    products = products.sort((a, b) => a.id - b.id)
  }

  if(showMaxItens > 0)
  {
    products = products.slice(0, showMaxItens)
  }

  return (
    <ProductListContainer>
        <TitleList>
            <p>{title}</p>
            <a href="">{text}</a>
        </TitleList>
        <List>
          {products.map((product) => <ProductCard key={product.id} id={product.id} rating={product.rating} image={product.images[0]} title={product.title} oldprice={product.oldprice} price={product.price}/>)}           
        </List>
        {showBtn && <Button text={text} outlined/>
        }
    </ProductListContainer>
  )
}

export { ProductList }
