import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Icons } from "../helpers/Icon";

const inputClass =
	"block w-full bg-transparent border-b border-mist py-2.5 text-ink placeholder:text-slate/50 focus:outline-none focus:border-petrol transition-colors duration-200";
const labelClass =
	"block font-mono text-xs uppercase tracking-wider text-slate mb-2";

export default function Contact() {
	const form = useRef<HTMLFormElement | null>(null);

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		toast
			.promise(
				emailjs.sendForm(
					import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
					import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
					form.current!,
					import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
				),
				{
					pending: "Envoi du message...",
					success: "Message envoyé avec succès !",
					error: "Une erreur est survenue, réessayez.",
				},
			)
			.then(() => {
				if (form.current) {
					form.current.reset();
				}
			});
	};

	const fadeIn = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 0.6 },
	};

	return (
		<motion.section
			className="bg-paper"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div className="grid grid-cols-1 lg:grid-cols-2">
				{/* Left - info panel */}
				<div className="relative bg-ink px-6 pb-20 pt-32 sm:pt-40 lg:px-12 lg:py-40">
					<div
						className="absolute inset-0 opacity-[0.035] pointer-events-none"
						style={{
							backgroundImage:
								"linear-gradient(rgba(242,241,236,1) 1px, transparent 1px), linear-gradient(90deg, rgba(242,241,236,1) 1px, transparent 1px)",
							backgroundSize: "56px 56px",
						}}
					/>

					<div className="relative mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
						<motion.div
							className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-paper/60 mb-6"
							{...fadeIn}
						>
							<span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
							Disponible pour vos projets
						</motion.div>
						<motion.span
							className="block font-mono text-xs uppercase tracking-wider text-petrol-light mb-4"
							{...fadeIn}
							transition={{ delay: 0.1 }}
						>
							Contact
						</motion.span>
						<motion.h2
							className="font-display text-4xl sm:text-5xl text-paper mb-6"
							style={{ textWrap: "balance" }}
							{...fadeIn}
							transition={{ delay: 0.15 }}
						>
							Parlons de votre projet.
						</motion.h2>
						<motion.p
							className="text-paper/60 text-lg leading-relaxed"
							{...fadeIn}
							transition={{ delay: 0.3 }}
						>
							Une idée, un projet, une question technique ?
							Décrivez-moi votre besoin - je vous réponds
							personnellement sous 24h, avec un devis gratuit et
							sans engagement.
						</motion.p>

						<motion.dl
							className="mt-12 space-y-5"
							{...fadeIn}
							transition={{ delay: 0.45 }}
						>
							<div className="flex items-center gap-4">
								<dt>
									<span className="sr-only">Adresse</span>
									<Icons.MapPin
										aria-hidden="true"
										className="h-5 w-5 text-petrol-light"
									/>
								</dt>
								<dd className="text-paper/75 text-sm">
									Marseille, 13013 - France
								</dd>
							</div>
							<div className="flex items-center gap-4">
								<dt>
									<span className="sr-only">Téléphone</span>
									<Icons.Phone
										aria-hidden="true"
										className="h-5 w-5 text-petrol-light"
									/>
								</dt>
								<dd>
									<a
										href="tel:+33783395103"
										aria-label="Téléphone"
										rel="noopener noreferrer"
										className="text-paper/75 text-sm hover:text-paper transition-colors"
									>
										+33 7 83 39 51 03
									</a>
								</dd>
							</div>
							<div className="flex items-center gap-4">
								<dt>
									<span className="sr-only">Email</span>
									<Icons.Mail
										aria-hidden="true"
										className="h-5 w-5 text-petrol-light"
									/>
								</dt>
								<dd>
									<a
										href="mailto:anthony.developpeurweb@gmail.com"
										className="text-paper/75 text-sm hover:text-paper transition-colors"
										rel="noopener noreferrer"
										aria-label="Adresse email"
									>
										anthony.developpeurweb@gmail.com
									</a>
								</dd>
							</div>
						</motion.dl>

						<motion.div
							className="flex items-center gap-5 mt-10 pt-8 border-t border-paper/10"
							{...fadeIn}
							transition={{ delay: 0.55 }}
						>
							<a
								href="https://github.com/GorskiAnthony"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="GitHub"
								className="text-paper/60 hover:text-paper transition-colors"
							>
								<Icons.Github className="h-5 w-5" />
							</a>
							<a
								href="https://www.linkedin.com/in/anthony-gorski/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="LinkedIn"
								className="text-paper/60 hover:text-paper transition-colors"
							>
								<Icons.Linkedin className="h-5 w-5" />
							</a>
						</motion.div>
					</div>
				</div>

				{/* Right - form */}
				<form
					ref={form}
					onSubmit={sendEmail}
					className="px-6 pb-24 pt-16 sm:pb-32 lg:px-12 lg:py-40"
				>
					<div className="mx-auto max-w-xl">
						<div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
							<div>
								<label
									htmlFor="first-name"
									className={labelClass}
								>
									Prénom <span className="text-petrol">*</span>
								</label>
								<input
									id="first-name"
									name="first-name"
									type="text"
									required
									autoComplete="given-name"
									className={inputClass}
								/>
							</div>
							<div>
								<label
									htmlFor="last-name"
									className={labelClass}
								>
									Nom <span className="text-petrol">*</span>
								</label>
								<input
									id="last-name"
									name="last-name"
									type="text"
									required
									autoComplete="family-name"
									className={inputClass}
								/>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="email" className={labelClass}>
									Email <span className="text-petrol">*</span>
								</label>
								<input
									id="email"
									name="email"
									type="email"
									required
									autoComplete="email"
									className={inputClass}
								/>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="phone-number"
									className={labelClass}
								>
									Téléphone{" "}
									<span className="text-slate/50 normal-case tracking-normal">
										(optionnel)
									</span>
								</label>
								<input
									id="phone-number"
									name="phone-number"
									type="tel"
									autoComplete="tel"
									className={inputClass}
								/>
							</div>
							<div className="sm:col-span-2">
								<label htmlFor="message" className={labelClass}>
									Message <span className="text-petrol">*</span>
								</label>
								<textarea
									id="message"
									name="message"
									rows={4}
									required
									className={inputClass}
								/>
							</div>
						</div>
						<div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
							<p className="text-xs text-slate leading-relaxed sm:max-w-[220px]">
								Réponse sous 24h. Vos informations restent
								confidentielles et ne sont jamais partagées.
							</p>
							<button
								type="submit"
								className="shrink-0 bg-ink text-paper px-6 py-3.5 font-semibold hover:bg-petrol-deep transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-petrol"
							>
								Envoyer mon message →
							</button>
						</div>
					</div>
				</form>
			</div>
		</motion.section>
	);
}
