import { 
  MenuMobileContainer,
  MenuItemsContainer,
  MenuItem,
  Wrapper,
  Divider,
  Departments 
} from "./styles"
import { IoClose } from "react-icons/io5"
import { 
  MdShoppingCart,
  MdAccountCircle,
  MdOutlineFavorite
} from 'react-icons/md'
import config from '../../../../../config.json'
import { useEffect, useRef } from "react"

const MenuMobile = ({menuIsVisible, setMenuIsVisible}) => {

  const mobileRef = useRef(null);
  
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
  }, [menuIsVisible])

  useEffect(() => {
    function handleClickOutside(event) {
      if (mobileRef.current && !mobileRef.current.contains(event.target)) {
        setMenuIsVisible(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileRef, setMenuIsVisible]);

  return (
    <MenuMobileContainer isVisible={menuIsVisible}>
      <Wrapper ref={mobileRef}>
        <IoClose id="close" size={36} onClick={() => setMenuIsVisible(false)}/>
        <MenuItemsContainer>
          <MenuItem>
            <MdAccountCircle size={24} />
            <p>Minha Conta</p>
          </MenuItem>
          <MenuItem>
            <MdShoppingCart size={24} />
            <div className='cart-items'>
                <p>0<span>+</span></p>
            </div>
            <p>Carrinho</p>
          </MenuItem>
          <MenuItem>
            <MdOutlineFavorite size={24} />
            <p>Favoritos</p>
          </MenuItem>
          <Divider />
          <Departments>
            <p>Departamentos</p>
          </Departments>
          <MenuItem className='departments'>
            <ul>
              {config.departments.map((department) => <li key={department.id}><a href={`/category/${department.name.toLowerCase()}`}>{department.name}</a></li>)}            
            </ul>
          </MenuItem>
        </MenuItemsContainer>
      </Wrapper>
    </MenuMobileContainer>
  )
}

export { MenuMobile }
