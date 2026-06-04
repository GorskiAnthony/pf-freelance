import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icons } from "../helpers/Icon";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const navLinks = [
		{ name: "Accueil", link: "/" },
		{ name: "Plans & Tarifs", link: "/pricing" },
		{ name: "Contact", link: "/contact" },
	];

	const isActive = (href: string) =>
		href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

	return (
		<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-200/60 shadow-sm shadow-zinc-200/40">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					{/* Logo */}
					<div className="flex items-center space-x-3">
						<img src="assets/logo.png" alt="Logo" className="w-10 h-10" />
						<Link
							to="/"
							className="text-xl font-black text-zinc-900 tracking-tight hover:text-blue-700 transition-colors duration-200"
						>
							Anthony
						</Link>
					</div>

					{/* Desktop */}
					<div className="hidden md:flex items-center gap-1">
						{navLinks.map((item) => (
							<Link
								key={item.link}
								to={item.link}
								className={clsx(
									"relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200",
									isActive(item.link)
										? "text-blue-700 bg-blue-50"
										: "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100",
								)}
							>
								{item.name}
								{isActive(item.link) && (
									<motion.div
										layoutId="navbar-indicator"
										className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
									/>
								)}
							</Link>
						))}
					</div>

					{/* Mobile toggle */}
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="p-2 rounded-xl text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-all duration-200"
						>
							{isOpen ? <Icons.X size={22} /> : <Icons.Menu size={22} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.2 }}
						className="md:hidden overflow-hidden"
					>
						<div className="px-4 py-3 space-y-1 bg-white/95 backdrop-blur-xl border-t border-zinc-100">
							{navLinks.map((item) => (
								<Link
									key={item.link}
									to={item.link}
									onClick={() => setIsOpen(false)}
									className={clsx(
										"block px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
										isActive(item.link)
											? "text-blue-700 bg-blue-50"
											: "text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100",
									)}
								>
									{item.name}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
