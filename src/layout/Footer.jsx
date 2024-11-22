import "./Footer.css";
import iconPhone from "../assets/icon-telefono.png";
import iconReloj from "../assets/icon-reloj.png";
import iconCarta from "../assets/icon-carta.png";
import iconInterno from "../assets/icon-interno.jpg";
import ImageBsAsFooter from "../assets/provincia_Footer.png";
import social_fb from "../assets/social-fb.png";
import social_tw from "../assets/social-tw.png";
import social_instagram from "../assets/social-instagram.png";
import social_yotube from "../assets/social_yotube.png";

export default function Header() {
  const handlerInterno = () => {
    window.open("https://livechat.soportevtv.com.ar/", "_blank");
  };
  return (
    <footer>
      <div className="footer__container">
        <figure className="footer__figure">
          <img
            className="footer__image"
            src={ImageBsAsFooter}
            alt="Buenos Aires Provincia"
          ></img>
        </figure>

        <div className="footer_contacto">
          <aside className="aside">
            <header className="aside__title">Contacto</header>
            <nav className="aside__nav">
              <div className="aside__menu">
                <img src={iconPhone} alt="Teléfono" />
                <span className="aside__text">
                  Whatsapp: +54 9 221 593-5031
                </span>
              </div>
              <div className="aside__menu">
                <img src={iconReloj} alt="Reloj" />
                <span className="aside__text">
                  Lunes a Viernes de 09 a 15 hs
                </span>
              </div>

              <div className="aside__menu">
                <img src={iconCarta} alt="Email" />
                <span className="aside__text">
                  <a href="mailto:usuariosvtv@transporte.gba.gob.ar">
                    usuariosvtv@transporte.gba.gob.ar
                  </a>
                </span>
              </div>
            </nav>
          </aside>
        </div>

        <div className="footer_contacto">
          <aside className="aside">
            <header className="aside__title">Redes Sociales</header>
            <nav className="aside__nav">
              <div className="aside__social">
                <a href="https://www.facebook.com/BAProvincia/" target="_blank">
                  <img alt="Facebook Buenos Aires Provincia" src={social_fb} />
                </a>
                <a href="https://twitter.com/baprovincia" target="_blank">
                  <img alt="twitter Buenos Aires Provincia" src={social_tw} />
                </a>
                <a href="https://www.instagram.com/provinciaba" target="_blank">
                  <img
                    alt="instagram Buenos Aires Provincia"
                    src={social_instagram}
                  />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCRuY8kHZHaiqAAdjcgobsNw"
                  target="_blank"
                >
                  <img
                    alt="youtube Buenos Aires Provincia"
                    src={social_yotube}
                  />
                </a>
              </div>
            </nav>
            <header className="aside__title">Uso Interno</header>
            <nav className="aside__navlink">
              <div className="aside__menu">
                <img src={iconInterno} alt="Email" />
                <span className="aside__text" onClick={handlerInterno}>
                  Uso interno
                </span>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    </footer>
  );
}
