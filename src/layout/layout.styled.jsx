import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  display: flex;
  padding: 10px 0;
  border-bottom: 1px dotted #000;
`;
export const NavStyled = styled.nav`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
  gap: 50px;
  margin-left: 100px;
`;
export const NavLinkStyled = styled(NavLink)`
  --b: 3px; /* border thickness */
  --s: 0.45em; /* size of the corner */
  --color: #373b44;

  padding: calc(0.5em + var(--s)) calc(0.9em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background: conic-gradient(
      from 90deg at var(--b) var(--b),
      #0000 90deg,
      var(--color) 0
    )
    var(--_p) var(--_p) / calc(100% - var(--b) - 2 * var(--_p))
    calc(100% - var(--b) - 2 * var(--_p));
  transition: 0.3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: 0.6em;
  font-size: 16px;

  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover,
  &:focus-visible {
    --_p: 0px;
    outline-color: var(--color);
    outline-offset: 0.05em;
  }

  &:active {
    background: var(--color);
    color: #fff;
  }
`;