import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Heading2 = styled.h2`
  padding-top: 25px;
  display: flex;
  justify-content: flex-start;
  text-transform: uppercase;
  font-size: 35px;
`;
export const StyledList = styled.ol`
  line-height: 2;
  display: grid;
  padding: 0;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  & li {
    list-style-type: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    counter-increment: item;
    border: 1px dashed #000000;
    max-width: 450px;
    padding: 5px;
    transition: all 0.3s;
  }

  & li:hover {
    border-color: #ffffff;
    color: #ffffff;
    background-color: #000000;
  }
  & li:hover::before {
    background-color: #ffffff;
    color: #000000;
  }

  & li:before {
    content: counter(item);

    /* display: inline-block; */
    display: flex;
    justify-content: center;
    /* flex-direction: row; */
    align-items: center;
    width: 20px;
    height: 20px;
    font-family: 'Indie Flower', cursive;
    margin-right: 5px;
    background-color: #000000;
    color: #ffffff;
    font-weight: bold;
    font-size: 100%;
    /* padding: 0 8px 8px; */
    border-radius: 3px;
    line-height: 1.3;

    transition: all 0.3s;
  }
`;
export const StyledLink = styled(Link)`
  width: 100%;
`;
