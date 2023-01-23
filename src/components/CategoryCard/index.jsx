import { CategoryContainer, CategoryImg, CategoryTitle, Wrapper } from "./styles"

const CategoryCard = ({title , image}) => {
  return (
    <CategoryContainer>
        <Wrapper>
            <CategoryTitle>
                {title}
            </CategoryTitle>
        </Wrapper>
        <div className="image">
            <CategoryImg  src={image} alt="" fill sizes="(min-width: 600px) 150px, 100px" />         
        </div>
    </CategoryContainer>
    
  )
}

export { CategoryCard }
