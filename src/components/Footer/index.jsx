import Image from 'next/image'
import logoWithText from '../../assets/logoWithText.svg'
import paymentMethods from '../../assets/paymentMethods.png'
import { FooterContainer, FooterLinks, PaymentMethods } from './styles'

const Footer = () => {
  return (
    <FooterContainer>
        <a href='#index'>
            <Image id='logoWithText' src={logoWithText} alt='Tech Space' priority/>
        </a>
        <PaymentMethods>
            <p>FORMAS DE PAGAMENTO</p>
            <Image src={paymentMethods} alt='Métodos de Pagamento' loading="lazy"/>
        </PaymentMethods>
        <FooterLinks>
            <div className='footer-link'>
                <p className='footer-link-title'>QUEM SOMOS?</p>
                <a href='/about'>Sobre</a>
                <a href='/location'>Localização</a>
            </div>
            <div className='footer-link'>
                <p className='footer-link-title'>CLIENTE</p>
                <a href=''>Minha Conta</a>
                <a href=''>Meus Pedidos</a>
            </div>
        </FooterLinks>
    </FooterContainer>
  )
}

export { Footer }
