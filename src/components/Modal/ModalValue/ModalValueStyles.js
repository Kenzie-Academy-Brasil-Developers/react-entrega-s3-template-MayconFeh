import { styled } from "styled-components";

export const StyledValue = styled.div`

      display: flex;
      flex-direction: column;
      gap: 25px;
      height: 121px;
      margin-left: 20px;
      margin-right: 20px;
      border-top: 2px solid var(--color-grey-100);
      @media (max-width: 768px) {
        margin-right: 0px;
      }


      >div{
        display: flex;
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding-right:20px;
        >span{
          font-weight: 600;
          font-size: 14px;
          line-height: 24px;
        }
      }
      >button{

        margin-right: 0px;
        box-sizing: border-box;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
  
        
        height: 60px;

        background: var(--color-grey-100);
        /* grey-100 */

        border: 2px solid var(--color-grey-100);
        border-radius: 8px;

        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        &:hover{
          border: 2px solid var(--color-negative);
          color: var(--color-white);
          background: var(--color-negative);
        }
        color: var(--color-grey-300);
        @media (max-width: 768px) {
          margin-right: 20px;
        }
      }
`