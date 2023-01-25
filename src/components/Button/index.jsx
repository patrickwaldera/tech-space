const { ButtonElement } = require("./styles")

const Button = ({text, outlined=false, size, width}) => {
  return (
    <ButtonElement outlined={outlined} size={size} width={width}>
        {text}
    </ButtonElement>
  )
}

export { Button }