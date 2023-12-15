import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 10px;
`;
export const MovieDetailsInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  /* margin-top: 25px; */
`;
export const MovieImage = styled.img`
  padding: 4px;
  border: 4px dashed #000;
`;
export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
`;
export const TitleMovie = styled.h2`
  margin-bottom: 40px;
  margin-top: 40px;
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 700;
`;
export const Heading4 = styled.h4`
  margin-bottom: 40px;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
`;
export const Text = styled.h4`
  margin-bottom: 40px;
  font-size: 15px;
  font-weight: 400;
`;
export const WrapperLinks = styled.div`
  display: flex;
  gap: 20px;
  margin: 0 auto;
  text-transform: uppercase;
  font-weight: 600;
`;
export const NavStyledLink = styled(NavLink)`
  border-bottom: 2px dashed #000;
  padding: 10px;
`;
