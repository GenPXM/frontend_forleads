import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dasboard";

const App = () => {
	const isAuthenticated = () => {
		return !!localStorage.getItem("token");
	};

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
					<Route path="/register" element={<Register />} />
					<Route
						path="/dashboard"
						element={
							isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />
						}
					/>
				</Routes>
			</main>
			<Footer />
		</Router>
	);
};

export default App;
