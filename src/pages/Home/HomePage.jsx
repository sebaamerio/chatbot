import HomeCard from "../../components/card/CardHome.jsx";
import CardHomeNavigate from "../../components/card/CardHomeNavigate.jsx";
import "./HomePage.css";
import imgTurnos from "../../assets/turnos.jpg";
import imgPlantas from "../../assets/plantas.jpg";
import imgTutorial from "../../assets/tutorial.jpg";

export default function Home() {
	return (
		<>
			<section className="headerVTV">
				<h1 className="header__title">Centro de atención de consultas de la VTV</h1>
				<hr className="header__separator" />
				<div className="header__text">
					En este apartado encontrará toda la información necesaria para gestionar sus trámites, con
					la asistencia adecuada para cada consulta.
				</div>
			</section>

			<section className="cards">
				<div className="main__nav">
					<HomeCard
						title="Turnos"
						image={imgTurnos}
						descripcion="Ingreso al portal de gestión de turnos de la vtv, donde podrás solicitar, cancelar y/o anular turnos"
						link="https://portal.vtv.gba.gob.ar/"
					/>

					<HomeCard
						title="Plantas"
						image={imgPlantas}
						descripcion="Información de ubicación, horarios y servicios de las distintas plantas verificadoras de la provincia. "
						link="http://geoplantas.com.ar:3000"
					/>

					<CardHomeNavigate
						title="Tutoriales"
						image={imgTutorial}
						descripcion="Mirá como gestionar tus turnos de forma rápida y fácil. "
						link="tutorial"
					/>
				</div>
			</section>
		</>
	);
}
