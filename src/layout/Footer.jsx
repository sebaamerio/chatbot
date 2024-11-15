import "./Header.css";
import ImageLogo from "../assets/logo_vtv_web.png";
import ImageBsAs from "../assets/logo_gba.svg";

export default function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src={ImageLogo}
        alt="Logo VTV"
        width="192px"
      ></img>

      <a href="https://www.gba.gob.ar">
        <img src={ImageBsAs} alt="logo buenos aires provincia" height="125px" />
      </a>
    </div>
  );
}
