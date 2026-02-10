import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--rosa-suave) 0%, var(--branco) 50%, var(--rosa-claro) 100%);
  padding: 6rem 2rem 4rem;

  @media (max-width: 768px) {
    padding: 9.5rem 2.5rem 3rem;
  }
`;

const Content = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 4rem;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const ImageWrapper = styled.div`
  flex: 0 0 380px;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #dbdcde;
  border: 5px solid var(--rosa-claro);
  box-shadow: 0 20px 40px rgba(155, 1, 61, 0.15);

  img {
    width: 130%;
    height: auto;
    margin-left: -5%;
    margin-top: -5%;
  }

  @media (max-width: 768px) {
    flex: none;
    width: 260px;
    height: 260px;
  }
`;

const TextContent = styled.div`
  flex: 1;

  h1 {
    font-size: 2.8rem;
    color: var(--primaria);
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }

  h2 {
    font-size: 1.3rem;
    color: var(--primaria);
    font-weight: 400;
    font-style: italic;
    margin-bottom: 1.5rem;
    opacity: 0.85;
  }

  p {
    font-size: 1.1rem;
    color: var(--texto-claro);
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    h1 { font-size: 2rem; }
    h2 { font-size: 1.1rem; }
    p { font-size: 1rem; }
  }
`;

const Btn = styled.a`
  display: inline-block;
  background-color: var(--primaria);
  color: var(--branco) !important;
  padding: 0.9rem 2.5rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(155, 1, 61, 0.3);

  &:hover {
    background-color: var(--primaria-escura);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(155, 1, 61, 0.4);
  }
`;

const Hero = () => (
  <Section id="inicio">
    <Content>
      <ImageWrapper>
        <img src="imagens/img1.jpg" alt="Psicóloga Luciane Machado" />
      </ImageWrapper>
      <TextContent>
        <h1>Luciane Machado</h1>
        <h2>Psicóloga Clínica &bull; Gestalt-terapeuta</h2>
        <p>
            Atendimento online e presencial no Recreio dos Bandeirantes e Barra da Tijuca.
        </p>
        <Btn href="#contato">Agende sua consulta</Btn>
      </TextContent>
    </Content>
  </Section>
);

export default Hero;
