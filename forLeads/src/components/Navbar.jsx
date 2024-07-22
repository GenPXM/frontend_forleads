// import React, { useEffect, useState } from "react";
// import logo from "../assets/logo.jpg";
// import { Link as ScrollLink } from "react-scroll";
// import { FaBars, FaXmark } from "react-icons/fa6";
// import { Link } from "react-router-dom"; // Importando Link do react-router-dom

// const Navbar = () => {
// 	const [isMenuOpen, setIsMenuOpen] = useState(false);
// 	const [isSticky, setIsSticky] = useState(false);

// 	const toggleMenu = () => {
// 		setIsMenuOpen(!isMenuOpen);
// 	};

// 	useEffect(() => {
// 		const handleScroll = () => {
// 			if (window.scrollY > 100) {
// 				setIsSticky(true);
// 			} else {
// 				setIsSticky(false);
// 			}
// 		};
// 		window.addEventListener("scroll", handleScroll);
// 		return () => {
// 			window.removeEventListener("scroll", handleScroll);
// 		};
// 	}, []);

// 	const navItems = [
// 		{ link: "Home", path: "home" },
// 		{ link: "Serviços", path: "service" },
// 		{ link: "Quem Somos", path: "about" },
// 		{ link: "Feedback", path: "feedback" },
// 		{ link: "FAQ", path: "faq" },
// 	];

// 	return (
// 		<header className="w-full fixed top-0 left-0 right-0 h-16 z-50">
// 			<div
// 				className={`w-full bg-white ${
// 					isSticky ? "border-b border-gray-200" : ""
// 				}`}
// 			>
// 				<nav className="py-4 lg:px-14 px-4 max-w-screen-2xl mx-auto">
// 					<div className="flex justify-between items-center text-base gap-8">
// 						<a
// 							href="#"
// 							className="text-2xl font-semibold flex items-center space-x-3"
// 						>
// 							<img
// 								src={logo}
// 								alt="Logo"
// 								className="w-10 inline-block items-center"
// 							/>
// 							<span className="text-[#263238]">FORLEADS</span>
// 						</a>
// 						<ul className="md:flex space-x-12 hidden">
// 							{navItems.map(({ link, path }) => (
// 								<ScrollLink
// 									to={path}
// 									spy={true}
// 									smooth={true}
// 									offset={-100}
// 									key={path}
// 									className="block text-base text-gray-900 hover:text-brandPrimary cursor-pointer first:font-medium"
// 								>
// 									{link}
// 								</ScrollLink>
// 							))}
// 						</ul>
// 						<div className="space-x-12 hidden lg:flex items-center">
// 							<Link
// 								to="/login"
// 								className="hidden lg:flex items-center text-brandPrimary hover:text-gray-900"
// 							>
// 								Login
// 							</Link>
// 							<button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">
// 								Sign up
// 							</button>
// 						</div>
// 						<div className="md:hidden">
// 							<button
// 								onClick={toggleMenu}
// 								className="text-neutralDGrey focus:outline-none focus:text-gray-500"
// 							>
// 								{isMenuOpen ? (
// 									<FaXmark className="h-6 w-6" />
// 								) : (
// 									<FaBars className="h-6 w-6" />
// 								)}
// 							</button>
// 						</div>
// 					</div>
// 					<div
// 						className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
// 							isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
// 						}`}
// 					>
// 						{navItems.map(({ link, path }) => (
// 							<ScrollLink
// 								to={path}
// 								spy={true}
// 								smooth={true}
// 								offset={-100}
// 								key={path}
// 								className="block text-base text-white hover:text-gray-300 cursor-pointer first:font-medium"
// 							>
// 								{link}
// 							</ScrollLink>
// 						))}
// 						<Link
// 							to="/login"
// 							className="block text-base text-white hover:text-gray-300 cursor-pointer first:font-medium"
// 						>
// 							Login
// 						</Link>
// 					</div>
// 				</nav>
// 			</div>
// 		</header>
// 	);
// };

// export default Navbar;
import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom"; // Importando useLocation
import logo from "../assets/logo.jpg";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);
	const location = useLocation(); // Hook para pegar a localização atual

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const navItems = [
		{ link: "Home", path: "home" },
		{ link: "Serviços", path: "service" },
		{ link: "Quem Somos", path: "about" },
		{ link: "Feedback", path: "feedback" },
		{ link: "FAQ", path: "faq" },
	];

	const isHomeActive =
		location.pathname === "/" ||
		location.pathname === "/login" ||
		location.pathname === "/register";

	const isSignUpActive = location.pathname === "/register";

	return (
		<header className="w-full fixed top-0 left-0 right-0 h-16 z-50">
			<div
				className={`w-full bg-white ${
					isSticky ? "border-b border-gray-200" : ""
				}`}
			>
				<nav className="py-4 lg:px-14 px-4 max-w-screen-2xl mx-auto">
					<div className="flex justify-between items-center text-base gap-8">
						<a
							href="#"
							className="text-2xl font-semibold flex items-center space-x-3"
						>
							<img
								src={logo}
								alt="Logo"
								className="w-10 inline-block items-center"
							/>
							<span className="text-[#263238]">FORLEADS</span>
						</a>
						<ul className="md:flex space-x-12 hidden">
							<li>
								<Link
									to="/"
									className={`block text-base ${
										isHomeActive ? "text-gray-900" : "text-gray-500"
									} hover:text-brandPrimary cursor-pointer first:font-medium`}
								>
									Home
								</Link>
							</li>
							{navItems.slice(1).map(({ link, path }) => (
								<ScrollLink
									to={path}
									spy={true}
									smooth={true}
									offset={-100}
									key={path}
									className="block text-base text-gray-500 hover:text-brandPrimary cursor-pointer first:font-medium"
								>
									{link}
								</ScrollLink>
							))}
						</ul>
						<div className="space-x-12 hidden lg:flex items-center">
							<Link
								to="/login"
								className="hidden lg:flex items-center text-brandPrimary hover:text-gray-900"
							>
								Login
							</Link>
							<Link
								to="/register"
								className={`bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey ${
									isSignUpActive ? "text-white" : "text-gray-300"
								}`}
							>
								Sign up
							</Link>
						</div>
						<div className="md:hidden">
							<button
								onClick={toggleMenu}
								className="text-neutralDGrey focus:outline-none focus:text-gray-500"
							>
								{isMenuOpen ? (
									<FaXmark className="h-6 w-6" />
								) : (
									<FaBars className="h-6 w-6" />
								)}
							</button>
						</div>
					</div>
					<div
						className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${
							isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
						}`}
					>
						<li>
							<Link
								to="/"
								className={`block text-base ${
									isHomeActive ? "text-white" : "text-gray-300"
								} hover:text-gray-300 cursor-pointer first:font-medium`}
							>
								Home
							</Link>
						</li>
						{navItems.slice(1).map(({ link, path }) => (
							<ScrollLink
								to={path}
								spy={true}
								smooth={true}
								offset={-100}
								key={path}
								className="block text-base text-white hover:text-gray-300 cursor-pointer first:font-medium"
							>
								{link}
							</ScrollLink>
						))}
						<Link
							to="/login"
							className="block text-base text-white hover:text-gray-300 cursor-pointer first:font-medium"
						>
							Login
						</Link>
						<Link
							to="/register"
							className={`block text-base ${
								isSignUpActive ? "text-white" : "text-gray-300"
							} hover:text-gray-300 cursor-pointer first:font-medium`}
						>
							Sign up
						</Link>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
