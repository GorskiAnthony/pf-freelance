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
		{ name: "À propos", link: "/a-propos" },
		{ name: "Plans & Tarifs", link: "/pricing" },
		{ name: "Blog", link: "/blog" },
	];

	const isActive = (href: string) =>
		href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

	return (
		<nav className="fixed w-full z-50 bg-paper/95 backdrop-blur-sm border-b border-mist">
			<div className="max-w-6xl mx-auto px-5 sm:px-8">
				<div className="flex justify-between items-center h-[72px]">
					{/* Logo */}
					<Link
						to="/"
						className="flex items-center gap-2.5 group"
					>
						<img src="assets/logo.png" alt="Logo" className="w-8 h-8" />
						<span className="font-display text-xl text-ink tracking-tight group-hover:text-petrol transition-colors duration-200">
							Anthony Gorski
						</span>
					</Link>

					{/* Desktop */}
					<div className="hidden md:flex items-center gap-8">
						{navLinks.map((item) => (
							<Link
								key={item.link}
								to={item.link}
								className={clsx(
									"relative py-2 font-mono text-[13px] uppercase tracking-wider transition-colors duration-200",
									isActive(item.link)
										? "text-ink"
										: "text-slate hover:text-ink",
								)}
							>
								{item.name}
								{isActive(item.link) && (
									<motion.div
										layoutId="navbar-indicator"
										className="absolute -bottom-px left-0 right-0 h-[2px] bg-petrol"
									/>
								)}
							</Link>
						))}
						<Link
							to="/contact"
							className="font-mono text-[13px] uppercase tracking-wider bg-ink text-paper px-4 py-2.5 hover:bg-petrol-deep transition-colors duration-200"
						>
							Discutons →
						</Link>
					</div>

					{/* Mobile toggle */}
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="p-2 text-ink"
							aria-label="Menu"
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
						<div className="px-5 py-3 space-y-1 bg-paper border-t border-mist">
							{[...navLinks, { name: "Contact", link: "/contact" }].map(
								(item) => (
									<Link
										key={item.link}
										to={item.link}
										onClick={() => setIsOpen(false)}
										className={clsx(
											"block px-1 py-2.5 font-mono text-sm uppercase tracking-wider border-b border-mist last:border-0",
											isActive(item.link)
												? "text-ink"
												: "text-slate",
										)}
									>
										{item.name}
									</Link>
								),
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
