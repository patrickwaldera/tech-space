import { LoadingContainer } from "./styles"

const Loading = () => {
  return (
    <LoadingContainer>
        <div className="spinner">
            <div className="cube1"></div>
            <div className="cube2"></div>
        </div>
    </LoadingContainer>
  )
}

export { Loading }