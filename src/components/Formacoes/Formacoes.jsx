import styled from "styled-components";

const Section = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(180deg, var(--rosa-suave) 0%, var(--branco) 100%);

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  color: var(--primaria);

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

const List = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Item = styled.div`
  background-color: var(--branco);
  border-left: 4px solid var(--primaria);
  border-radius: 0 12px 12px 0;
  padding: 1.5rem 2rem;
  text-align: left;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateX(5px);
  }

  h4 {
    font-size: 1.1rem;
    color: var(--primaria);
    margin-bottom: 0.4rem;
  }

  p {
    font-size: 0.95rem;
    color: var(--texto-claro);
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 1.2rem 1.5rem;
  }
`;

const Crp = styled.p`
  margin-top: 2rem;
  font-size: 1rem;
  color: var(--primaria);
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const Formacoes = () => (
  <Section id="formacoes">
    <Container>
      <SectionTitle>Formações</SectionTitle>
      <List>
        <Item>
          <h4>Pós-graduação em Psicologia Clínica</h4>
          <p>Com ênfase em Gestalt-terapia pela Universidade Celso Lisboa</p>
        </Item>
        <Item>
          <h4>Pós-graduação em Inteligência Parental</h4>
          <p>Pela INPAR</p>
        </Item>
      </List>
      <Crp>CRP: 05/70297</Crp>
    </Container>
  </Section>
);

export default Formacoes;
