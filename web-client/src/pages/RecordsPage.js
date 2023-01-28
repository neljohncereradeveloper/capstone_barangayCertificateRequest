import Header from "../styledComponents/header";
import Footer from "../styledComponents/footer";
import Records from "../components/Records";

function RecordsPage() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Records />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default RecordsPage;
