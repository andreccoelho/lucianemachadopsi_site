import { useState, useEffect } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #9b013d;
  box-shadow: ${(props) => (props.$scrolled ? "0 2px 15px rgba(0, 0, 0, 0.2)" : "none")};
  z-index: 1000;
  padding: ${(props) => (props.$scrolled ? "0.4rem 2rem" : "1rem 2rem")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  transition: all 0.4s ease;

  img {
    height: ${(props) => (props.$scrolled ? "55px" : "80px")};
    width: auto;
    transition: all 0.4s ease;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Nav $scrolled={scrolled}>
      <Logo href="#inicio" $scrolled={scrolled}>
        <img src="imagens/logo.png" alt="Logo Luciane Machado" />
      </Logo>
    </Nav>
  );
};

export default Header;
