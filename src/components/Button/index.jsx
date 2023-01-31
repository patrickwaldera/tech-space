const { ButtonElement } = require("./styles")

const Button = ({text, outlined=false, size, width, onClick}) => {
  return (
    <ButtonElement outlined={outlined} size={size} width={width} onClick={onClick}>
        {text}
    </ButtonElement>
  )
}

export { Button }