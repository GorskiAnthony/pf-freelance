import { Icons } from "../helpers/Icon";
import { motion } from "framer-motion";

const Contact = () => {
	return (
		<div className="pt-24 pb-20 px-4 max-w-3xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h1 className="text-4xl font-bold text-center mb-8">
					Contactez-moi
				</h1>
				<p className="text-center text-zinc-600 mb-12">
					Une question, une idée de projet ou juste envie de discuter
					? Écrivez-moi via ce formulaire, ou envoyez-moi directement
					un e-mail.
				</p>

				<form
					className="space-y-6"
					action="mailto:ton@email.com" // remplace par ton email !
					method="POST"
					encType="text/plain"
				>
					<div>
						<label className="block text-sm font-medium text-zinc-700 mb-1">
							Nom
						</label>
						<input
							type="text"
							name="name"
							required
							className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-zinc-700 mb-1">
							Email
						</label>
						<input
							type="email"
							name="email"
							required
							className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</div>

					<div>
						<label className="block text-sm font-medium text-zinc-700 mb-1">
							Message
						</label>
						<textarea
							name="message"
							rows={5}
							required
							className="w-full px-4 py-2 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
						></textarea>
					</div>

					<button
						type="submit"
						className="w-full inline-block text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
					>
						Envoyer le message
					</button>
				</form>

				<div className="mt-12 text-center text-zinc-500">
					<Icons.Mail className="inline-block w-5 h-5 mr-2" />
					<a href="mailto:ton@email.com" className="underline">
						ton@email.com
					</a>
				</div>
			</motion.div>
		</div>
	);
};

export default Contact;
