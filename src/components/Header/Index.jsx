
import { StyledH2,} from "../../styles/typography";
import { HeaderStyled } from "./HeaderStyles";
import { FaShoppingCart } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';






export const Header = ({setIsOpen , setInputSearch}) =>{

  


  return(
    <HeaderStyled>
      
      <StyledH2>Burguer <span>Kenzie</span></StyledH2>
      
      <div className="container">
          <FaShoppingCart   className="icon" onClick={()=>{setIsOpen(true)}}/>
          
        <input type="text" placeholder="Busca..." onChange={(e)=> setInputSearch(e.target.value)}/>
        <button> <BiSearch className="iconSearch"/> </button>
      </div>
    </HeaderStyled>
  )

}