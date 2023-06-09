import { StyledListModal } from "./ModalProducts"
import { FaTrash } from 'react-icons/fa';
import { StyledH3, StyledText } from "../../../styles/typography"

export const ProductsListModal = ({productCart,removeToCart}) => {
  return (
    <StyledListModal>
      {productCart.map(products=>(  
       <li className="products">
        <div className="imgCont">
          <img src={products.img} alt="" />
        </div>
        <div className="infoCont">
          <StyledH3>{products.name}</StyledH3>
          <StyledText>{products.amount}</StyledText>
          <FaTrash className="icon" onClick={()=>{removeToCart(products)}}/>
        </div>
      </li>
      ))}
    </StyledListModal>
  )
}