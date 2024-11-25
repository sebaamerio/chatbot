import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import TutorialPage from "./pages/Tutorial/TutorialPage.jsx";

function App() {
	return (
		<BrowserRouter>
			<MainLayout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/tutorial" element={<TutorialPage />} />
					<Route path="*" element={<HomePage />} />
				</Routes>
			</MainLayout>
		</BrowserRouter>
	);
}

export default App;
