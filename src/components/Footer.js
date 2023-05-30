import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Liubov Mukash</h1>
          <p>Spezializaciya</p>
        </div>
      </div>
      <div>
        <a href="/">
          <i className="fa -brands fa-facebook-squarei" />
        </a>
      </div>
      <div className="bottom">
        <div>
          <h4>Kontakty:</h4>
          <i className="fa -brands fa-facebook-squarei" />
          <a href="/">
            <i class="fa-solid fa-house"></i>
            Adress
          </a>
          <a href="/">
            <i class="fa-solid fa-phone"></i>Telefon
          </a>
          <a href="/">
            <i class="fa-solid fa-message"></i>E-mail
          </a>
          <a href="/">
            <i class="fa-solid fa-copyright"></i>copyrights
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
