import {
    HeaderContainer,
    Menu,
    MenuItems,
    SearchBoxMobile,
    SearchBoxDesktop,
    DesktopMenu,
    DesktopItemsContainer,
    DesktopItem,
} from './styles'
import logo from '../../assets/logo.svg'
import Image from 'next/image'
import { 
    MdOutlineSearch,
    MdShoppingCart,
    MdAccountCircle
} from 'react-icons/md'
import { IoList } from 'react-icons/io5'
import { Dropdown } from './components/Dropdown'
import { ChangeThemeBtn } from './components/ChangeThemeBtn'
import { MenuMobile } from './components/MenuMobile'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Autocomplete } from './components/Autocomplete'

const Header = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/search/${search.toLowerCase().normalize('NFD').replace(/\p{Mn}/gu, "")}`)
  }

  const clearSearch = () => {
    setSearch('')
  }

  return (
    <>
        <MenuMobile
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
        />
        <HeaderContainer id='index'>
            <div className='wrapper'>
                <Menu>
                    <div className='leftWrapper'>
                        <Link href='/'>
                            <Image src={logo} alt='Tech Space' priority/>
                        </Link>
                        <DesktopMenu>
                            <SearchBoxDesktop>
                                <MdOutlineSearch className='searchIcon' size={32}/>
                                <input type="text" placeholder='O que você procura? Digite aqui' value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={e => e.key === 'Enter' ? handleSearch() : ''}/>
                                <Autocomplete inputSearch={search} clearSearch={clearSearch} />
                            </SearchBoxDesktop>                            
                            <Dropdown />
                        </DesktopMenu>
                    </div>
                    <MenuItems>
                        <ChangeThemeBtn />
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
                        <IoList id='mobileMenu' size={24} onClick={() => setMenuIsVisible(true)}/>
                    </MenuItems>
                </Menu>
                <SearchBoxMobile>
                    <MdOutlineSearch className='searchIcon' size={20}/>
                    <input type="text" placeholder='O que você procura? Digite aqui' value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={e => e.key === 'Enter' ? handleSearch() : ''}/>
                    <Autocomplete inputSearch={search}/>
                </SearchBoxMobile>
            </div>
        </HeaderContainer>
    </>
  )
}

export { Header }
