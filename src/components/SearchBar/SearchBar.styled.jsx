import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
export const Input = styled.input`
  display: flex;
  padding: 15px;
  border-top-left-radius: 15px;
  border-end-start-radius: 15px;
  /* border-radius: 15px; */
  outline: none;
  border: 2px dashed #000;
  border-right: none;
`;
export const SearchBtn = styled.button`
  display: flex;
  border-top-right-radius: 15px;
  border-end-end-radius: 15px;
  outline: none;
  border: 2px dashed #000;
  border-left: none;
  cursor: pointer;
  text-transform: uppercase;
  background-image: url('https://img.icons8.com/search');
  width: 50px;
  height: 51.6px;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
`;
