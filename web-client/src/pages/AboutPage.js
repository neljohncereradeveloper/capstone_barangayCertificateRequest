import Header from "../styledComponents/header";
import Footer from "../styledComponents/footer";
import About from "../components/About";

function AboutPage() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <About />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AboutPage;
