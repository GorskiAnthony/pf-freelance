import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { getServiceBySlug, alaCarteServices } from "../content/services";
import { payer } from "../utils/payer";
import { Icons } from "../helpers/Icon";

export default function ServiceDetail() {
	const { slug } = useParams<{ slug: string }>();
	const navigate = useNavigate();
	const service = slug ? getServiceBySlug(slug) : undefined;

	if (!service) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center text-center bg-paper px-4">
				<span className="font-mono text-xs uppercase tracking-wider text-slate mb-4">
					Erreur 404
				</span>
				<h1 className="font-display text-4xl text-ink mb-6">
					Service introuvable.
				</h1>
				<Link
					to="/pricing"
					className="bg-ink text-paper px-6 py-3.5 font-semibold hover:bg-petrol-deep transition-colors duration-200"
				>
					Retour aux tarifs
				</Link>
			</div>
		);
	}

	const handleCta = () => {
		if (service.serviceId) {
			payer(service.serviceId);
		} else {
			navigate("/contact");
		}
	};

	const otherServices = alaCarteServices.filter(
		(s) => s.slug !== service.slug,
	);

	return (
		<div className="bg-paper pt-32 pb-24">
			<div className="max-w-2xl mx-auto px-5 sm:px-8">
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4 }}
				>
					<Link
						to="/pricing"
						className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate hover:text-ink transition-colors mb-10"
					>
						<Icons.ArrowLeft className="w-3.5 h-3.5" />
						Plans &amp; tarifs
					</Link>

					<service.icon
						className="w-8 h-8 text-petrol mb-6"
						strokeWidth={1.75}
					/>

					<span className="block font-mono text-xs uppercase tracking-wider text-petrol mb-4">
						Service à la carte
					</span>

					<h1
						className="font-display text-3xl sm:text-4xl text-ink mb-6 leading-[1.15]"
						style={{ textWrap: "balance" }}
					>
						{service.name}
					</h1>

					<p className="text-slate text-lg leading-relaxed mb-8">
						{service.description}
					</p>

					<div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-mist">
						<div>
							<p className="flex items-baseline gap-x-1.5">
								<span className="font-display text-4xl text-ink tabular-nums">
									{service.price}
								</span>
							</p>
							<p className="text-slate text-sm mt-1">
								{service.priceNote}
							</p>
						</div>
						<button
							onClick={handleCta}
							className="bg-ink text-paper px-6 py-3.5 font-semibold hover:bg-petrol-deep transition-colors duration-200"
						>
							{service.cta} →
						</button>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.4, delay: 0.1 }}
				>
					{/* Pour qui */}
					<h2 className="font-display text-2xl text-ink mt-12 mb-4">
						Pour qui ?
					</h2>
					<ul className="space-y-3 mb-5">
						{service.idealFor.map((item) => (
							<li
								key={item}
								className="flex items-start gap-3 text-slate leading-relaxed text-[17px]"
							>
								<Icons.ArrowUpRight className="w-4 h-4 text-petrol shrink-0 mt-1.5" />
								{item}
							</li>
						))}
					</ul>

					{/* Ce qui est inclus */}
					<h2 className="font-display text-2xl text-ink mt-12 mb-4 pt-8 border-t border-mist">
						Ce qui est inclus
					</h2>
					<ul className="space-y-3 mb-5">
						{service.includes.map((item) => (
							<li
								key={item}
								className="flex items-start gap-3 text-slate leading-relaxed text-[17px]"
							>
								<Icons.Check className="w-4 h-4 text-petrol shrink-0 mt-1.5" />
								{item}
							</li>
						))}
					</ul>

					{/* Déroulé */}
					<h2 className="font-display text-2xl text-ink mt-12 mb-6 pt-8 border-t border-mist">
						Comment ça se déroule
					</h2>
					<div>
						{service.process.map((step, i) => (
							<div
								key={step.title}
								className="relative flex gap-6 pb-8"
							>
								<div className="flex flex-col items-center shrink-0">
									<div className="w-9 h-9 rounded-full border-2 border-petrol bg-paper flex items-center justify-center font-mono text-xs text-petrol">
										0{i + 1}
									</div>
									{i < service.process.length - 1 && (
										<div className="w-px flex-1 bg-mist my-2" />
									)}
								</div>
								<div className="pb-2">
									<h3 className="font-display text-lg text-ink mb-1.5">
										{step.title}
									</h3>
									<p className="text-slate leading-relaxed text-[15px]">
										{step.description}
									</p>
								</div>
							</div>
						))}
					</div>

					{/* Ce qui n'est pas inclus */}
					<h2 className="font-display text-xl text-ink mt-4 mb-4 pt-8 border-t border-mist">
						Ce qui n'est pas inclus
					</h2>
					<ul className="space-y-3">
						{service.notIncluded.map((item) => (
							<li
								key={item}
								className="flex items-start gap-3 text-slate/70 leading-relaxed text-[15px]"
							>
								<Icons.X className="w-4 h-4 text-slate/50 shrink-0 mt-1" />
								{item}
							</li>
						))}
					</ul>
				</motion.div>

				{/* CTA */}
				<div className="mt-16 bg-ink px-8 py-10 sm:px-10 sm:py-12 text-center">
					<h3 className="font-display text-2xl text-paper mb-3">
						{service.name}
					</h3>
					<p className="text-paper/60 mb-7 max-w-md mx-auto">
						{service.price}{" "}
						<span className="text-paper/40">
							{service.priceNote}
						</span>
					</p>
					<button
						onClick={handleCta}
						className="inline-block bg-petrol text-paper px-6 py-3.5 font-semibold hover:bg-petrol-deep transition-colors duration-200"
					>
						{service.cta} →
					</button>
				</div>

				{/* Autres services */}
				{otherServices.length > 0 && (
					<div className="mt-16">
						<h3 className="font-mono text-xs uppercase tracking-wider text-slate mb-6">
							Autres services à la carte
						</h3>
						<div className="border-t border-mist">
							{otherServices.map((s) => (
								<Link
									key={s.slug}
									to={`/services/${s.slug}`}
									className="group flex items-center justify-between gap-4 py-6 border-b border-mist"
								>
									<div>
										<h4 className="font-display text-xl text-ink group-hover:text-petrol transition-colors duration-200">
											{s.name}
										</h4>
										<span className="font-mono text-xs uppercase tracking-wider text-petrol">
											{s.price}
										</span>
									</div>
									<Icons.ArrowUpRight className="w-4 h-4 text-slate group-hover:text-petrol transition-colors duration-200 shrink-0" />
								</Link>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
