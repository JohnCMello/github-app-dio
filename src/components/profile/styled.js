import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height:13rem ;
  flex-direction:column;
  align-items: center;
  background-color:#eee;
  margin-top: .2rem;
  border-radius:.3rem;
  
`;

export const WrapperImage = styled.img`
  border: .2rem solid black;
  border-radius: 50%;
  width: 5rem;
  margin: 1rem auto .2rem;
  padding:.11rem

`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  width:100%;

  h3 {
    font-size: .8rem;
    font-weight: 600;
    margin:0 auto;
   }

  a {
    font-size: .8rem;
    font-weight: 600;
    margin:0 auto;
 }
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;

  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  justify-content:space-around;
  margin:.6rem auto;
  width:100%;

  div {
    display:flex;
    flex-direction:column;
    align-items:center;

    h4 {
      font-size:.8rem;
      margin: .2rem auto;
    }

    span{
      font-size:.7rem;

    }
  }
`;
