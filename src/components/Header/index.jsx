import {
    HeaderContainer,
    Menu,
    LogoImg,
    MenuItems,
    SearchBoxMobile
} from './styles'
import logo from '../../assets/logo.svg'
import Image from 'next/image'
import { MdDarkMode, MdOutlineSearch } from 'react-icons/md'
import { IoList } from 'react-icons/io5'

const Header = () => {
  return (
    <HeaderContainer>
        <div className='wrapper'>
            <Menu>
                <LogoImg>
                    <Image src={logo} alt='Tech Space' priority/>
                </LogoImg>
                <MenuItems>
                    <MdDarkMode size={24} />
                    <IoList size={24}/>
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
