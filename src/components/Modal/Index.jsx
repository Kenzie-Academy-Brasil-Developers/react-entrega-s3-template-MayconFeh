import { useEffect, useRef } from "react";
import { StyledOverlayModal } from "./ModalStyles";
import { StyledH3, StyledText } from "../../styles/typography"
import { ProductsListModal } from "./ModalProducts/Index";
import { TotalValue } from "./ModalValue/Index"
import { EmptyList } from "./ModalEmptyList/Index";



export const Modal = ({setIsOpen,productCart , removeToCart , setProductCart, valueCart}) => {
  const refModal = useRef(null);
  const refButton = useRef(null)

useEffect(()=>{
  const handleOutClick = (e) => {
 
    if(!refModal.current?.contains(e.target)){
      setIsOpen(false)
    }
  }
  const handleKeyDown = (e) => {
      if(e.key === "Escape"){
        refButton.current?.click()
      }
    
  }


  window.addEventListener('mousedown',handleOutClick)

  window.addEventListener('keydown',handleKeyDown)
  

  return () =>{

   window.removeEventListener('mousedown',handleOutClick)

   window.removeEventListener('keydown',handleKeyDown)
  }
},[])

  return(
    <StyledOverlayModal role="dialog">
      <div ref={refModal} className="boxModal">
        <div className="headerModal">
          <StyledH3>Carinho de compras</StyledH3> 
          <button ref={refButton} onClick={()=>setIsOpen(false)}>X</button>
        </div> 
          {
            productCart.length > 0 ? 
            <ProductsListModal productCart={productCart} removeToCart={removeToCart}/>  :        
              <EmptyList/>
          }       
          <TotalValue valueCart={valueCart} productCart={productCart} setProductCart={setProductCart}/> 
      </div>
    </StyledOverlayModal>
  )
}