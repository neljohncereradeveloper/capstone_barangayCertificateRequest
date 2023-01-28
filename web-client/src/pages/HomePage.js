import React from "react";
import "../assets/css/homePage/homePage_layout.css";
import Header from "../styledComponents/header";
import Footer from "../styledComponents/footer";
import {
  Banner,
  Services,
  MissionVision,
  Officials,
  FeedBack,
} from "../components/homePage";

function HomePage() {
  return (
    <div className="homePage">
      <header>
        <Header />
      </header>
      <main>
        <Banner />
        <Services />
        <MissionVision />
        <Officials />
        <FeedBack />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
