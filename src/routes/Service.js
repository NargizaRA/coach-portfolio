import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Photo from "../assets/four.JPG";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={Photo}
        title="Text here"
        text="Korotkii slogan"
        btnClass="show"
        buttonText="watch the video"
        url="/"
      />
      <h1>Syuda navernoe nado text o vashih uslugah i td</h1>
      <Footer />
    </>
  );
}

export default Service;
