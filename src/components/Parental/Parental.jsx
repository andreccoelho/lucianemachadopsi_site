import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 2rem;
  background-color: var(--branco);

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: var(--primaria);
  text-align: center;

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

const Intro = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: var(--texto-claro);
  line-height: 1.8;
  margin-top: 2rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Subtitle = styled.h3`
  text-align: center;
  font-size: 1.3rem;
  color: var(--primaria);
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const Card = styled.div`
  background: linear-gradient(135deg, var(--rosa-suave), var(--branco));
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  border: 1px solid var(--rosa-claro);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(155, 1, 61, 0.1);
  }

  .icon {
    margin-bottom: 1rem;

    svg {
      width: 48px;
      height: 48px;
      stroke: var(--primaria);
      stroke-width: 1.5;
      fill: none;
    }
  }

  h4 {
    font-size: 1.1rem;
    color: var(--primaria);
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 0.95rem;
    color: var(--texto-claro);
    line-height: 1.7;
  }
`;

const Parental = () => (
  <Section id="parental">
    <Container>
      <SectionTitle>Inteligência Parental</SectionTitle>
      <Intro>
        O método de Inteligência Parental apoia pais e cuidadores no desenvolvimento
        de uma parentalidade mais consciente e eficaz.
      </Intro>
      <Subtitle>Tem como objetivos</Subtitle>
      <Cards>
        <Card>
          <div className="icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 4a4 4 0 0 1 0 8 4 4 0 0 1 0-8zM8 4a4 4 0 0 1 0 8 4 4 0 0 1 0-8z" />
              <path d="M16 14c3.3 0 6 1.8 6 4v2H10v-2c0-2.2 2.7-4 6-4zM8 14c-.5 0-1 .04-1.5.12C4.4 14.6 2 16.2 2 18v2h6v-2c0-1.5.6-2.8 1.7-3.8" />
              <path d="M11 12l2 2" strokeLinecap="round" />
            </svg>
          </div>
          <h4>Fortalecer Vínculos</h4>
          <p>
            Fortalecer o vínculo entre adultos e crianças promovendo relações
            baseadas em respeito.
          </p>
        </Card>
        <Card>
          <div className="icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeLinecap="round" />
              <path d="M12 8v4l3 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h4>Orientar com Segurança</h4>
          <p>
            Orientar adultos a educarem com mais segurança contribuindo para um
            ambiente familiar mais harmonioso.
          </p>
        </Card>
        <Card>
          <div className="icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <h4>Educar com Empatia</h4>
          <p>
            Auxiliar famílias a estabelecer limites com mais empatia, a educar com
            coerência, favorecendo o desenvolvimento emocional saudável das crianças.
          </p>
        </Card>
      </Cards>
    </Container>
  </Section>
);

export default Parental;
