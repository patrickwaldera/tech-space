import { CardContainer, ContentCard, TitleCard } from "./styles"

const CartCard = ({children, title}) => {
  return (
    <>
        <CardContainer>
            <TitleCard>
                <p>{title}</p>
            </TitleCard>
            <ContentCard>
                {children}
            </ContentCard>
        </CardContainer>
    </>
  )
}

export { CartCard }