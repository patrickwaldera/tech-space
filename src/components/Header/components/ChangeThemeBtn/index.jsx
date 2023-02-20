import { useContext } from "react";
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { ColorModeContext } from "@/context/ColorMode";
import { ChangeThemeContainer } from './styles'

const ChangeThemeBtn = () => {
  const contexto = useContext(ColorModeContext);
  return (
    <ChangeThemeContainer>
      {contexto.mode === 'dark' ? 
        <MdOutlineLightMode size={24}  onClick={contexto.toggleTheme}/>
          
      :
        <MdDarkMode size={24}  onClick={contexto.toggleTheme}/>
      }
    </ChangeThemeContainer>
  )
}

export { ChangeThemeBtn }
