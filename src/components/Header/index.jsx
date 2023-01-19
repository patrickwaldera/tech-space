import {
    HeaderContainer,
    Menu,
    LogoImg,
    MenuItems,
    SearchBoxMobile,
    SearchBoxDesktop,
    DesktopMenu,
    DepartmentsMenu,
    DepartmentsDropDown,
    DesktopItemsContainer,
    DesktopItem,
    ChangeThemeBtn
} from './styles'
import logo from '../../assets/logo.svg'
import Image from 'next/image'
import { 
    MdDarkMode,
    MdOutlineSearch,
    MdShoppingCart,
    MdAccountCircle,
    MdOutlineLightMode
} from 'react-icons/md'
import { IoList } from 'react-icons/io5'
import { ColorModeContext } from "@/components/ColorMode";
import { useContext, useState } from 'react'

const Header = () => {
  const contexto = useContext(ColorModeContext);
  const [showDropdown, setShowDropdown] = useState(false)
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
                        <div className='dropdown' onMouseEnter={() => setShowDropdown(true)}
                            onMouseLeave={() => setShowDropdown(false)}>
                            <DepartmentsMenu>
                                <p>Departamentos</p>
                            </DepartmentsMenu>
                            {showDropdown && <DepartmentsDropDown>
                                <ul>
                                    <li><a href="">Hardware</a></li>
                                    <li><a href="">Monitores</a></li>
                                    <li><a href="">Gabinetes</a></li>
                                    <li><a href="">Cadeiras Gamer</a></li>
                                    <li><a href="">Notebooks</a></li>
                                    <li><a href="">Periféricos</a></li>
                                    <li><a href="">Rede e Internet</a></li>
                                    <li><a href="">Video Games</a></li>
                                    <li><a href="">Softwares</a></li>
                                </ul>
                            </DepartmentsDropDown> }
                        </div>
                    </DesktopMenu>
                </div>
                <MenuItems>
                    <ChangeThemeBtn>
                        {contexto.mode === 'dark' ? 
                            <MdOutlineLightMode size={24}  onClick={contexto.toggleTheme}/>
                           
                        :
                            <MdDarkMode size={24}  onClick={contexto.toggleTheme}/>
                        }
                    </ChangeThemeBtn>
                    <DesktopItemsContainer>
                        <DesktopItem>
                            <MdShoppingCart size={24} />
                            <div className='cart-items'>
                                <p>0<span>+</span></p>
                            </div>
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
