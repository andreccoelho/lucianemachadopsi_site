import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: var(--primaria);
  color: var(--branco);
  text-align: center;
  padding: 2rem;

  p {
    font-size: 0.9rem;
    opacity: 0.9;
    line-height: 1.6;
  }

  .crp {
    font-weight: 700;
    letter-spacing: 0.5px;
    margin-bottom: 0.3rem;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <p className="crp">Luciane Machado - CRP: 05/70297</p>
    <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
  </FooterWrapper>
);

export default Footer;
