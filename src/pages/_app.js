import { GlobalStyle } from '../styles/styles'
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import ColorModeProvider, { ColorModeContext } from '@/context/ColorMode';
import { useContext} from 'react';
import ProductsListProvider from '@/context/ProductList';
import Head from 'next/head';
import favicon from '../../public/static/favicon.ico';
import CartProvider from '@/context/CartProducts';

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
    <>
      <Head>
        <link rel="icon" href={favicon.src} type="image/x-icon"/>
        <title>Tech Space</title>
      </Head>
      <ThemeProvider theme={theme[contexto.mode]}>
          <GlobalStyle />
          <ProductsListProvider>
            <CartProvider>
              <Component {...pageProps} />
            </CartProvider>
          </ProductsListProvider>
      </ThemeProvider>
    </>
  ) 
}

export default function _App(props){
  return(
    <ProviderWrapper>
      <App {...props} />
    </ProviderWrapper>
  )
}
