import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function HomeCard({ title, descripcion, image, link }) {
	let navigate = useNavigate();

	const handlerLink = () => {
		navigate(`/${link}`);
	};
	return (
		<Card sx={{ maxWidth: 250 }}>
			<CardMedia sx={{ height: 140 }} image={image} title={title} />
			<CardContent sx={{ minHeight: 150 }}>
				<Typography gutterBottom variant="h5" component="div">
					{title}
				</Typography>
				<Typography variant="body2" sx={{ color: "text.secondary" }}>
					{descripcion}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" onClick={handlerLink}>
					ACCEDER
				</Button>
			</CardActions>
		</Card>
	);
}
