import HomeCard from "../components/card/CardHome.jsx";
import MainLayout from "../layout/MainLayout.jsx";
import "./Home.css";
import imgTurnos from "../assets/turnos.jpg";
import imgPlantas from "../assets/plantas.jpg";

export default function Home() {
	return (
		<>
			<MainLayout>
				<body className="body">
					<main className="main">
						<h1 className="main__title">Centro de atención de consultas de la VTV</h1>
						<hr className="main__separator" />
						<div className="main__text">
							En este apartado encontrará toda la información necesaria para gestionar sus trámites,
							con la asistencia adecuada para cada consulta.
						</div>
						<hr className="main__separatorMenu" />
						<nav className="main__nav">
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
						</nav>
					</main>
				</body>
			</MainLayout>
		</>
	);
}
