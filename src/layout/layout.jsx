import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavLinkStyled, NavStyled } from './layout.styled';
import { Container } from 'components/Container/Container.styled';
import logo from '../img/searchmovies.png';

const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <img src={logo} alt="logo" width="170" />
          <NavStyled>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </NavStyled>
        </Header>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
