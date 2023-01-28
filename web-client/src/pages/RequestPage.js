import Header from "../styledComponents/header";
import Footer from "../styledComponents/footer";
import Certificate from "../components/certificate/Certificate";

function RequestPage() {
  return (
    <div className="requestPage">
      <header>
        <Header />
      </header>
      <main>
        <Certificate />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RequestPage;
