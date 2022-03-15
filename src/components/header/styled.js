import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #eee;
  margin-top:1rem;
  height: 3.6rem;
  width: 20rem;
  position: relative;
  display:flex;
  padding: .4rem;
  border-radius:.3rem;
  margin: 2rem auto 0;
  
  input {
    background-color:transparent;
    width:100%;
    height:100%;
    border: 3px solid black;
    border-radius:.3rem;
    padding:.2rem .6rem;
  }

  label {
    position:absolute;
    background-color: #eee;
    font-size:.8rem;
    font-weight: 700;
    top:0;
    left:1rem;
    padding: 0 .4rem
  }
`;


