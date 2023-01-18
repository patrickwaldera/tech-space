import { ColorModeContext } from "@/components/ColorMode";
import { useContext } from "react";

const Teste = () => {
  const contexto = useContext(ColorModeContext);
  return (
    <div>
      teste
      <button onClick={contexto.toggleTheme}>
        setMode
      </button>
    </div>
    
  )
}

export default Teste;
