import { useNavigate } from "react-router-dom";

import "./Header.css";
import ImageLogo from "../assets/chatvtv2.png";
import ImageBsAs from "../assets/logo_gba.svg";

export default function Header() {
	let navigate = useNavigate();

	const handlerLink = () => {
		navigate("/home");
	};

	return (
		<header className="headerLayout">
			<div className="figure__container">
				<figure className="figure__logoVTV" onClick={handlerLink}>
					<img className="headerLayout__logo_vtv" src={ImageLogo} alt="Logo VTV"></img>
				</figure>
			</div>
			<div className="figure__container">
				<a href="https://www.gba.gob.ar">
					<figure className="figure__bsas">
						<img
							className="headerLayout__logo_vtv"
							src={ImageBsAs}
							alt="Logo Buenos Aires provincia"
						></img>
					</figure>
				</a>
			</div>
		</header>
	);
}
