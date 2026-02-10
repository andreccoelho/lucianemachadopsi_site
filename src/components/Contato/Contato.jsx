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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const InfoCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  background: linear-gradient(135deg, var(--rosa-suave), var(--branco));
  border: 1px solid var(--rosa-claro);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(155, 1, 61, 0.12);
  }

  .icon {
    flex-shrink: 0;
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primaria);
    border-radius: 50%;

    svg {
      width: 24px;
      height: 24px;
      stroke: var(--branco);
      stroke-width: 1.8;
      fill: none;
    }
  }

  .info {
    h4 {
      font-size: 1rem;
      color: var(--primaria);
      margin-bottom: 0.3rem;
    }

    p {
      font-size: 0.95rem;
      color: var(--texto-claro);
      line-height: 1.5;
    }
  }
`;

const MapWrapper = styled.div`
  margin-top: 3rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  iframe {
    width: 100%;
    height: 300px;
    border: 0;
  }
`;

const Contato = () => (
  <Section id="contato">
    <Container>
      <SectionTitle>Contato</SectionTitle>
      <Grid>
        <InfoCard href="https://wa.me/5521965075173" target="_blank" rel="noopener noreferrer">
          <div className="icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
          </div>
          <div className="info">
            <h4>WhatsApp</h4>
            <p>(21) 96507-5173</p>
          </div>
        </InfoCard>
        <InfoCard href="https://www.instagram.com/psilucianemachado" target="_blank" rel="noopener noreferrer">
          <div className="icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.2" fill="white" stroke="none" />
            </svg>
          </div>
          <div className="info">
            <h4>Instagram</h4>
            <p>@psilucianemachado</p>
          </div>
        </InfoCard>
        <InfoCard href="mailto:psilucianemachado@gmail.com">
          <div className="icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 4L12 13 2 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="info">
            <h4>E-mail</h4>
            <p>psilucianemachado@gmail.com</p>
          </div>
        </InfoCard>
        <InfoCard href="https://maps.google.com/?q=Av.+das+Américas,+12900+Sala+216+Recreio+dos+Bandeirantes+Rio+de+Janeiro" target="_blank" rel="noopener noreferrer">
          <div className="icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
          </div>
          <div className="info">
            <h4>Endereço</h4>
            <p>Av. das Américas, 12900 Sala 216<br />Recreio dos Bandeirantes, RJ</p>
          </div>
        </InfoCard>
      </Grid>
      <MapWrapper>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.5!2d-43.4647!3d-23.0127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2e0af9fbd5%3A0x0!2sAv.+das+Am%C3%A9ricas%2C+12900+-+Recreio+dos+Bandeirantes%2C+Rio+de+Janeiro!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização do consultório"
        />
      </MapWrapper>
    </Container>
  </Section>
);

export default Contato;
