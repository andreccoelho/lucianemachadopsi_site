import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Sobre from "../components/Sobre/Sobre";
import Gestalt from "../components/Gestalt/Gestalt";
import Parental from "../components/Parental/Parental";
import Formacoes from "../components/Formacoes/Formacoes";
import Contato from "../components/Contato/Contato";
import Footer from "../components/Footer/Footer";

const Home = () => (
  <>
    <Header />
    <main>
      <Hero />
      <Sobre />
      <Gestalt />
      <Parental />
      <Formacoes />
      <Contato />
    </main>
    <Footer />
  </>
);

export default Home;
