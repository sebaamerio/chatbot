import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Typography from "@mui/material/Typography";
export default function HomeCard({ title, descripcion, video }) {
	const Video = () => {
		return (
			<video controls width="100%">
				<source src={video} type="video/mp4" />
				Sorry, your browser doesn support embedded videos.
			</video>
		);
	};

	return (
		<>
			<Card sx={{ maxWidth: 250 }}>
				<CardMedia sx={{ height: 140 }} title={title}>
					<Video videoCargaVehiculo />
				</CardMedia>
				<CardContent sx={{ minHeight: 150 }}>
					<Typography gutterBottom variant="h5" component="div">
						{title}
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary" }}>
						{descripcion}
					</Typography>
				</CardContent>
			</Card>
		</>
	);
}
