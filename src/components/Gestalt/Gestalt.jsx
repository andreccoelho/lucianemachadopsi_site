import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, var(--rosa-suave) 0%, var(--branco) 100%);

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: var(--primaria);
  margin-bottom: 0.5rem;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background-color: var(--rosa-claro);
    margin: 0.8rem auto 0;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  color: var(--texto-claro);
  line-height: 2;
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImageRow = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 3rem;

  img {
    flex: 1;
    height: 320px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.03);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
      max-width: 400px;
      height: 260px;
    }
  }
`;

const Gestalt = () => (
  <Section id="gestalt">
    <Container>
      <SectionTitle>Sobre a Gestalt-terapia</SectionTitle>
      <Text>
        Essa é a abordagem psicoterapêutica que utilizo, a linha teórica que norteia
        meu trabalho. A clínica gestáltica é a clínica do diálogo, que visa não enquadrar
        o ser em um modelo desejável e aperfeiçoado, mas acolhe a diferença, o único,
        o real de cada um. Busca a ampliação da awareness através do que é sentido no
        aqui-agora, enfatizando a vivência desse ser e dando a ele a possibilidade
        de se expressar de maneira sensível e autêntica.
      </Text>
      <ImageRow>
        <img src="imagens/img3.JPG" alt="Luciane Machado - Cartão de visita" />
      </ImageRow>
    </Container>
  </Section>
);

export default Gestalt;
