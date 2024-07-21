import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";
import AuthLogin from "./Auth/AuthLogin";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<Services />
			<About />
			<Feedback />
			<Footer />
		</>
	);
}
export default App;
