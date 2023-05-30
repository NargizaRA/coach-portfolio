import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Photo from "../assets/four.JPG";

function Home() {
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
      <Destination />

      <Footer />
    </>
  );
}

export default Home;
