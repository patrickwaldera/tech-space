import { GlobalStyle } from '../styles/styles'
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import ColorModeProvider, { ColorModeContext } from '@/context/ColorMode';
import { useContext} from 'react';
import ProductsListProvider from '@/context/ProductList';

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
        <ProductsListProvider>
          <Component {...pageProps} />
        </ProductsListProvider>
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
