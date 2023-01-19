import {
    HeaderContainer,
    Menu,
    LogoImg,
    MenuItems,
    SearchBoxMobile,
    SearchBoxDesktop,
    DesktopMenu,
    DepartmentsMenu,
    DesktopItemsContainer,
    DesktopItem
} from './styles'
import logo from '../../assets/logo.svg'
import Image from 'next/image'
import { 
    MdDarkMode,
    MdOutlineSearch,
    MdShoppingCart,
    MdAccountCircle
} from 'react-icons/md'
import { IoList } from 'react-icons/io5'

const Header = () => {
  return (
    <HeaderContainer>
        <div className='wrapper'>
            <Menu>
                <div className='leftWrapper'>
                    <LogoImg>
                        <Image id='logo' src={logo} alt='Tech Space' priority/>
                    </LogoImg>
                    <DesktopMenu>
                        <SearchBoxDesktop>
                            <MdOutlineSearch className='searchIcon' size={32}/>
                            <input type="text" placeholder='O que você procura? Digite aqui' />
                        </SearchBoxDesktop>
                        <DepartmentsMenu>
                            <p>Departamentos</p>
                        </DepartmentsMenu>
                    </DesktopMenu>
                </div>
                <MenuItems>
                    <MdDarkMode size={24} />
                    <DesktopItemsContainer>
                        <DesktopItem>
                            <MdShoppingCart size={24} />
                            <p>Carrinho</p>
                        </DesktopItem>
                        <DesktopItem>
                            <MdAccountCircle size={24} />
                            <p>Minha Conta</p>
                        </DesktopItem>
                    </DesktopItemsContainer>
                    <IoList id='mobileMenu' size={24}/>
                </MenuItems>
            </Menu>
            <SearchBoxMobile>
                <MdOutlineSearch className='searchIcon' size={20}/>
                <input type="text" placeholder='O que você procura? Digite aqui' />
            </SearchBoxMobile>
        </div>
    </HeaderContainer>
  )
}

export { Header }
