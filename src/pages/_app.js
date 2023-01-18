import { GlobalStyle } from '../styles/styles'
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import ColorModeProvider, { ColorModeContext } from '@/components/ColorMode';
import { useContext} from 'react';

function ProviderWrapper({children}) {
  return (
    <ColorModeProvider initialMode={'light'}>
      {children}
    </ColorModeProvider>
  )
}


function App({ Component, pageProps }) {
  const contexto = useContext(ColorModeContext);
  return (
    <ThemeProvider theme={theme[contexto.mode]}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}

export default function _App(props){
  return(
    <ProviderWrapper>
      <App {...props} />
    </ProviderWrapper>
  )
}
