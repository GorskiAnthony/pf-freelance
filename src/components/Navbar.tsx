import { useState } from "react";
import { Link } from "react-router-dom";
import { Icons } from "../helpers/Icon";
import { motion } from "framer-motion";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navbar = [
		{
			name: "Accueil",
			link: "/",
		},
		{
			name: "Plans & Tarifs",
			link: "/pricing",
		},
		{
			name: "Contact",
			link: "/contact",
		},
	];

	return (
		<nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-zinc-200">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center space-x-3">
						<img
							src="assets/logo.png"
							alt="Logo"
							className="w-11 h-11"
						/>
						<Link
							to="/"
							className="text-xl font-bold text-zinc-900"
						>
							Anthony
						</Link>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center space-x-8">
						{navbar.map((item, index) => (
							<Link
								key={index}
								to={item.link}
								className="text-zinc-600 hover:text-zinc-900 transition-colors"
							>
								{item.name}
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-zinc-600"
						>
							{isOpen ? (
								<Icons.X size={24} />
							) : (
								<Icons.Menu size={24} />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					className="md:hidden"
				>
					<div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-zinc-200">
						<Link
							to="/"
							className="block px-3 py-2 text-zinc-600 hover:text-zinc-900"
						>
							Home
						</Link>
						<Link
							to="/pricing"
							className="block px-3 py-2 text-zinc-600 hover:text-zinc-900"
						>
							Pricing
						</Link>
					</div>
				</motion.div>
			)}
		</nav>
	);
};

export default Navbar;
