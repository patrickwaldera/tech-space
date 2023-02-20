import { CategoryCard } from "../CategoryCard"
import { CategoryListContainer, List, TitleList } from "./style"
import config from '../../../config.json'

const CategoryList = () => {
  return (
    <CategoryListContainer>
        <TitleList>
          <p>Categorias 📁</p>
        </TitleList>
        <List>
          {config.departments.map((category) => <CategoryCard key={category.id} title={category.name} image={category.image} />)}        
        </List>
    </CategoryListContainer>
  )
}

export { CategoryList }