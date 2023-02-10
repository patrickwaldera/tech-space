const { ButtonElement } = require("./styles")

const Button = ({text, type='button', outlined=false, size, width, onClick}) => {
  return (
    <ButtonElement type={type} outlined={outlined} size={size} width={width} onClick={onClick}>
        {text}
    </ButtonElement>
  )
}

export { Button }