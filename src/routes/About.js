import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/four.JPG";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={AboutImg}
        title="Coaching"
        text="Hellohello"
        buttonText="Consalting"
        url="/"
        btnClass="show"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
