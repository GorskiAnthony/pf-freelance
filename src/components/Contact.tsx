import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
	BuildingOffice2Icon,
	EnvelopeIcon,
	PhoneIcon,
} from "@heroicons/react/24/outline";
import { toast } from "react-toastify";

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
					import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
				),
				{
					pending: "⏳ Envoi du message...",
					success: "Message envoyé avec succès !",
					error: "Une erreur est survenue, réessayez.",
				}
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
			className="relative isolate bg-white"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			<div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
				<div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
					<div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
						<motion.div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
							<svg
								aria-hidden="true"
								className="absolute inset-0 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
							>
								<defs>
									<pattern
										x="100%"
										y={-1}
										id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
										width={200}
										height={200}
										patternUnits="userSpaceOnUse"
									>
										<path
											d="M130 200V.5M.5 .5H200"
											fill="none"
										/>
									</pattern>
								</defs>
								<rect
									fill="white"
									width="100%"
									height="100%"
									strokeWidth={0}
								/>
								<svg
									x="100%"
									y={-1}
									className="overflow-visible fill-gray-50"
								>
									<path
										d="M-470.5 0h201v201h-201Z"
										strokeWidth={0}
									/>
								</svg>
								<rect
									fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
									width="100%"
									height="100%"
									strokeWidth={0}
								/>
							</svg>
						</motion.div>
						<motion.h2
							className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl"
							{...fadeIn}
							transition={{ delay: 0.2 }}
						>
							Contactez-nous
						</motion.h2>
						<motion.p
							className="mt-6 text-lg/8 text-gray-600"
							{...fadeIn}
							transition={{ delay: 0.4 }}
						>
							Nous sommes là pour vous aider. Si vous avez des
							questions ou des préoccupations, n'hésitez pas à
							nous contacter. Nous nous engageons à vous répondre
							dans les plus brefs délais.
						</motion.p>
						<motion.dl
							className="mt-10 space-y-4 text-base/7 text-gray-600"
							{...fadeIn}
							transition={{ delay: 0.6 }}
						>
							<div className="flex gap-x-4">
								<dt className="flex-none">
									<span className="sr-only">Address</span>
									<BuildingOffice2Icon
										aria-hidden="true"
										className="h-7 w-6 text-gray-400"
									/>
								</dt>
								<dd>
									France
									<br />
									Marseille, 13013
								</dd>
							</div>
							<div className="flex gap-x-4">
								<dt className="flex-none">
									<span className="sr-only">Telephone</span>
									<PhoneIcon
										aria-hidden="true"
										className="h-7 w-6 text-gray-400"
									/>
								</dt>
								<dd>
									<a
										href="tel:+33783395103"
										aria-label="Phone number"
										rel="noopener noreferrer"
										className="hover:text-gray-900"
									>
										+33 7 83 39 51 03
									</a>
								</dd>
							</div>
							<div className="flex gap-x-4">
								<dt className="flex-none">
									<span className="sr-only">Email</span>
									<EnvelopeIcon
										aria-hidden="true"
										className="h-7 w-6 text-gray-400"
									/>
								</dt>
								<dd>
									<a
										href="mailto:anthony.developpeurweb@gmail.com"
										className="hover:text-gray-900"
										rel="noopener noreferrer"
										aria-label="Email address"
									>
										anthony.developpeurweb@gmail.com
									</a>
								</dd>
							</div>
						</motion.dl>
					</div>
				</div>
				<form
					ref={form}
					onSubmit={sendEmail}
					className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
				>
					<div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
							<div>
								<label
									htmlFor="first-name"
									className="block text-sm/6 font-semibold text-gray-900"
								>
									Prénom
								</label>
								<div className="mt-2.5">
									<input
										id="first-name"
										name="first-name"
										type="text"
										required
										autoComplete="given-name"
										className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="last-name"
									className="block text-sm/6 font-semibold text-gray-900"
								>
									Nom
								</label>
								<div className="mt-2.5">
									<input
										id="last-name"
										name="last-name"
										type="text"
										required
										autoComplete="family-name"
										className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="email"
									className="block text-sm/6 font-semibold text-gray-900"
								>
									Email
								</label>
								<div className="mt-2.5">
									<input
										id="email"
										name="email"
										type="email"
										required
										autoComplete="email"
										className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="phone-number"
									className="block text-sm/6 font-semibold text-gray-900"
								>
									Téléphone
								</label>
								<div className="mt-2.5">
									<input
										id="phone-number"
										name="phone-number"
										type="tel"
										autoComplete="tel"
										className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="message"
									className="block text-sm/6 font-semibold text-gray-900"
								>
									Message
								</label>
								<div className="mt-2.5">
									<textarea
										id="message"
										name="message"
										rows={4}
										required
										className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
									/>
								</div>
							</div>
						</div>
						<div className="mt-8 flex justify-end">
							<button
								type="submit"
								className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Envoyer
							</button>
						</div>
					</div>
				</form>
			</div>
		</motion.section>
	);
}
