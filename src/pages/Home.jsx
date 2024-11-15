import Chatbot from "../components/chatbot/Chatbot.jsx";
import HomeCard from "../components/card/CardHome.jsx";
import MainLayout from "../layout/MainLayout.jsx";
import "./Home.css";
import iconPhone from "../assets/icon-telefono.png";
import iconReloj from "../assets/icon-reloj.png";
import iconCarta from "../assets/icon-carta.png";
import iconInterno from "../assets/icon-interno.png";

import imgTurnos from "../assets/turnos.jpg";
import imgPlantas from "../assets/plantas.jpg";

export default function Home() {
  return (
    <>
      <MainLayout>
        <body className="body">
          <main className="main">
            <h1 className="main__title">
              Centro de atención de consultas de la VTV
            </h1>
            <hr className="main__separator" />
            <div className="main__text">
              En este apartado encontrará toda la información necesaria para
              gestionar sus trámites, con la asistencia adecuada para cada
              consulta.
            </div>
            <hr className="main__separatorMenu" />
            <nav className="main__nav">
              <HomeCard
                title="Turnos"
                image={imgTurnos}
                descripcion="Ingresá a nuestra sección para solicitar o modificar su  turno de manera rápida y sencilla."
                link="https://portal.vtv.gba.gob.ar/"
              />

              <HomeCard
                title="Plantas"
                image={imgPlantas}
                descripcion="Ubicaciones para realizan las inspecciones técnicas de los vehículos. "
                link="https://geoplantas.com.ar:3000/"
              />
            </nav>
          </main>
          <aside className="aside">
            <header className="aside__title">Contacto</header>
            <h3 className="aside__subtitle">Dirección Provincial de VTV </h3>
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

              <div className="aside__menu">
                <img src={iconInterno} alt="Email" />
                <span
                  className="aside__text"
                  onClick={window.open(
                    "https://livechat.soportevtv.com.ar/",
                    "_blank"
                  )}
                >
                  Uso interno
                </span>
              </div>

              <Chatbot />
            </nav>
          </aside>
        </body>
      </MainLayout>
    </>
  );
}
