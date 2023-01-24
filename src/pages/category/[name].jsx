import { useRouter } from "next/router"

const Category = () => {
    const router = useRouter()
    let category = router.query.name
    return (
        <div>{category}</div>
    )
}

export default Category
