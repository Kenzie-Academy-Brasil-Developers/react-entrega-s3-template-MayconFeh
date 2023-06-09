import { styled } from "styled-components";

export const StyledListModal = styled.ul`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-left: 20px;
  padding-right: 20px;
  overflow-y: auto;
  max-height:180px ;
  min-height:180px ;
 

  >.products{
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: row;
        gap: 10px;
      >.imgCont{
          height: 80px;
          width: 82px;
          border-radius: 5px;
          background: var(--color-grey-100);
          display: flex;
          align-items: center;
          justify-content: center;
          
          >img{
            width: 55px;
            height: 55px;
          }
        }
      >.infoCont{
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 75%;
          >.icon{
           cursor: pointer;
            color:var(--color-grey-300);
          }
        }
      }
    

`