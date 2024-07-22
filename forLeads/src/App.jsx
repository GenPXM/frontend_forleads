import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";
import Login from "./Pages/Login";
import Register from "./Pages/Register"; // Importe a nova página de registro

function App() {
	return (
		<Router>
			<Navbar />
			<main className="mt-16">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<Home />
								<Services />
								<About />
								<Feedback />
							</>
						}
					/>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />{" "}
					{/* Nova rota para o registro */}
				</Routes>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
