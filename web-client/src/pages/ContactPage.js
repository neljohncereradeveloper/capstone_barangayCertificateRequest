import Header from "../styledComponents/header";
import Footer from "../styledComponents/footer";
import Contact from "../components/Contact";

function ContactPage() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default ContactPage;
