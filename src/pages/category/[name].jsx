import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { useRouter } from "next/router"

const Category = () => {
    const router = useRouter()
    let category = router.query.name
    return (
        <>
            <Header />
            <div>{category}</div>
            <Footer />
        </>
    )
}

export default Category
