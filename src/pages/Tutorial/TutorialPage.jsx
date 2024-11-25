import CardVideo from "../../components/card/CardVideo.jsx";

import video_cargaVehiculo from "../../assets/videos/cargar_vehiculo.mp4";
import video_sacarTurno from "../../assets/videos/gestionar_turno.mp4";
import video_gestionarTurno from "../../assets/videos/gestionar_turno.mp4";

export default function Tutorial() {
	return (
		<>
			<section className="headerVTV">
				<h1 className="header__title">Centro de atención de consultas de la VTV</h1>
				<hr className="header__separator" />
				<div className="header__text">Mirá como gestionar tus turnos de forma rápida y fácil.</div>
			</section>

			<section className="cards">
				<div className="main__nav">
					<CardVideo
						title="Cargar Vehículo"
						descripcion="Como cargar los datos del vehículo a verificar."
						video={video_cargaVehiculo}
					/>

					<CardVideo
						title="Sacar Turno"
						descripcion="Mirá como sacar un turno para los vehículos cargados."
						video={video_sacarTurno}
					/>

					<CardVideo
						title="Gestionar Turnos"
						descripcion="Como consultar tus turnos, reprogramarlos o anularlos."
						video={video_gestionarTurno}
					/>
				</div>
			</section>
		</>
	);
}
