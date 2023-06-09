import { styled } from "styled-components";

export const StyledOverlayModal = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;
  width: 100%;
  height: 100vh;
  

  background-color: rgba(0,0,0,.3);

  .boxModal{
    position: relative;
    width: 100%;
    max-width: 500px;
    height:411px;
    border-radius:5px 5px 5px 5px ;
    background: var(--color-white);
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: 1s;

    @media (max-width: 768px) {
      max-width: 375px;
    }
    >.headerModal{
      height: 54px;
      width:100%;
      color: white;
      border-radius:5px 5px 0px 0px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px 20px;
      background-color: var(--color-color-primary);
      
      >button{
        border: none;
        outline: none;
        background: transparent;
      }
    }
    
    
  }


`