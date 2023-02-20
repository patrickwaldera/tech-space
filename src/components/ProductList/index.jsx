import { ProductCard } from "../ProductCard"
import { List, ProductListContainer, TitleList } from "./styles"
import { Button } from "../Button"
import { useState } from "react"
import Link from "next/link"

const ProductList = ({title, text, showTitle=true, showBtn=true, products, orderBy='', showMaxItens}) => {

  const [limit, setLimit] = useState(showMaxItens || 12)
  if(orderBy === 'bestSellers') {
    products = products.sort((a, b) => b.sold - a.sold)
  }
  else if(orderBy === 'bestRated') {
    products = products.sort((a, b) => b.rating - a.rating)
  }
  else if(orderBy === 'priceAsc') {
    products = products.sort((a, b) => a.price - b.price)
  }
  else if(orderBy === 'priceDesc') {
    products = products.sort((a, b) => b.price - a.price)
  }
  else {
    products = products.sort((a, b) => a.id - b.id)
  }

  const handleLoadMore = () => {
    setLimit(limit + 6);
  };

  return (
    <ProductListContainer>
      {showTitle && 
      <TitleList>
        <p>{title}</p>
        <Link href={{ pathname: '/products', query: { q: orderBy } }}>{text}</Link>
      </TitleList>
      }
      <List>
        {products.slice(0, limit).map((product) => <ProductCard key={product.id} id={product.id} rating={product.rating} image={product.images[0]} title={product.title} oldprice={product.oldprice} price={product.price}/>)}           
      </List>
      {limit < products.length ?
          <>
            {showBtn && <Button text={text} outlined onClick={handleLoadMore} />}
          </>
        :
          null
      }
    </ProductListContainer>
  )
}

export { ProductList }
