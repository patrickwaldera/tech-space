const { ButtonElement } = require("./styles")

const Button = ({text, outlined=false}) => {
  return (
    <ButtonElement outlined={outlined}>
        {text}
    </ButtonElement>
  )
}

export { Button }