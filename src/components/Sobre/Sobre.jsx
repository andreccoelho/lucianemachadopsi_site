import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 2rem;
  background-color: var(--branco);

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

const TextContent = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: var(--primaria);
  margin-bottom: 0.5rem;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: var(--rosa-claro);
    margin-top: 0.8rem;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;

    &::after {
      margin: 0.8rem auto 0;
    }
  }
`;

const Text = styled.p`
  font-size: 1.05rem;
  color: var(--texto-claro);
  line-height: 1.9;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 0 0 400px;

  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: center 15%;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    max-width: 400px;
  }
`;

const Sobre = () => (
  <Section id="sobre">
    <Container>
      <TextContent>
        <SectionTitle>Sobre mim</SectionTitle>
        <Text>
          Psicóloga clínica, Gestalt-terapeuta e Especialista em Inteligência Parental.
          Trabalho com psicoterapia individual para crianças e adultos e psicoterapia
          de casais e famílias.
        </Text>
      </TextContent>
      <ImageWrapper>
        <img src="imagens/img4.JPG" alt="Luciane Machado - Psicóloga" />
      </ImageWrapper>
    </Container>
  </Section>
);

export default Sobre;
