import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { useRouter } from "next/router"
import { CategoryContainer } from "./styles"

const Category = () => {
    const router = useRouter()
    let category = router.query.name
    return (
        <>
            <Header />
            <CategoryContainer>
                <div>{category}</div>
            </CategoryContainer>
            <Footer />
        </>
    )
}

export default Category
