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
  MdAccountCircle
} from 'react-icons/md'
import config from '/config.json'
import { useContext, useEffect, useRef } from "react"
import { useRouter } from "next/router"
import { CartContext } from "@/context/CartProducts"

const MenuMobile = ({menuIsVisible, setMenuIsVisible}) => {

  const mobileRef = useRef(null);
  const router = useRouter();
  const { productsList } = useContext(CartContext)
  
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
          <MenuItem onClick={() => router.push(`/account`)}>
            <MdAccountCircle size={24} />
            <p>Minha Conta</p>
          </MenuItem>
          <MenuItem onClick={() => router.push(`/cart`)}>
            <MdShoppingCart size={24} />
            <div className='cart-items'>
              {productsList.length < 10 ? <p>{productsList.length}</p> : <p>9<span>+</span></p>}
            </div>
            <p>Carrinho</p>
          </MenuItem>
          <Divider />
          <Departments>
            <p>Departamentos</p>
          </Departments>
          <MenuItem className='departments'>
            <ul>
              {config.departments.map((department) => <li key={department.id}><a href={`/category/${department.name.toLowerCase().normalize('NFD').replace(/\p{Mn}/gu, "")}`}>{department.name}</a></li>)}            
            </ul>
          </MenuItem>
        </MenuItemsContainer>
      </Wrapper>
    </MenuMobileContainer>
  )
}

export { MenuMobile }
