import { ProductCard } from "../ProductCard"
import { List, ProductListContainer, TitleList, ViewMore } from "./styles"
import ps5 from '../../../public/images/ps5.webp'
import { Button } from "../Button"

const ProductList = () => {
  return (
    <ProductListContainer>
        <TitleList>
            <p>Mais vendidos 🔥</p>
            <a href="">Ver todos</a>
        </TitleList>
        <List>
            <ProductCard rating={2} image={ps5} title={'SSD 120 GB Kingston A400, SATA, Leitura: 500MB/s e Gravação: 320MB/s - SA400S37/120G'} oldprice={'199,90'} price={'12121,90'}/>
            <ProductCard rating={2} image={ps5} title={'SSD 120 GB Kingston A400, SATA, Leitura: 500MB/s e Gravação: 320MB/s - SA400S37/120G'} oldprice={'199,90'} price={'12121,90'}/>
            <ProductCard rating={2} image={ps5} title={'SSD 120 GB Kingston A400, SATA, Leitura: 500MB/s e Gravação: 320MB/s - SA400S37/120G'} oldprice={'199,90'} price={'12121,90'}/>
            <ProductCard rating={2} image={ps5} title={'SSD 120 GB Kingston A400, SATA, Leitura: 500MB/s e Gravação: 320MB/s - SA400S37/120G'} oldprice={'199,90'} price={'12121,90'}/>
            <ProductCard rating={2} image={ps5} title={'SSD 120 GB Kingston A400, SATA, Leitura: 500MB/s e Gravação: 320MB/s - SA400S37/120G'} oldprice={'199,90'} price={'12121,90'}/>
            <ProductCard rating={2} image={ps5} title={'SSD 120 GB Kingston A400, SATA, Leitura: 500MB/s e Gravação: 320MB/s - SA400S37/120G'} oldprice={'199,90'} price={'12121,90'}/>
        </List>
        <Button text='Ver todos' outlined/>
    </ProductListContainer>
  )
}

export { ProductList }
