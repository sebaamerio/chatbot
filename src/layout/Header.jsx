import "./Header.css";
import ImageLogo from "../assets/chatvtv2.png";
import ImageBsAs from "../assets/logo_gba.svg";

export default function Header() {
  return (
    <header className="headerLayout">
      <div className="header__container">
        <img
          className="headerLayout__logo_vtv"
          src={ImageLogo}
          alt="Logo VTV"
          width="192px"
        ></img>
        <div>
          <a href="https://www.gba.gob.ar">
            <img
              className="headerLayout__logo_bsas"
              src={ImageBsAs}
              alt="logo buenos aires provincia"
              height="125px"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
