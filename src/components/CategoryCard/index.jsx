import { useRouter } from "next/router";
import { CategoryContainer, CategoryImg, CategoryTitle, Wrapper } from "./styles"

const CategoryCard = ({title , image}) => {
  const router = useRouter();
  return (
    <CategoryContainer onClick={() => router.push(`/category/${title.toLowerCase().normalize('NFD').replace(/\p{Mn}/gu, "")}`)}>
        <Wrapper>
          <CategoryTitle>
              {title}
          </CategoryTitle>
        </Wrapper>
        <div className="image">
            <CategoryImg src={image} alt="" fill sizes="(min-width: 600px) 150px, 100px" loading="lazy"/>         
        </div>
    </CategoryContainer>
    
  )
}

export { CategoryCard }
