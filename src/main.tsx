import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout.tsx";
import Pricing from "./components/Pricing.tsx";
import Home from "./components/Home.tsx";
import "./index.css";
import Contact from "./components/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";
import MentionsLegales from "./pages/MentionLegal.tsx";
import Cgv from "./pages/CGV.tsx";
import { PolitiqueConfidentialite } from "./pages/PolitiqueConfidentialite.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/pricing",
				element: <Pricing />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/mentions-legales",
				element: <MentionsLegales />,
			},
			{
				path: "/cgv",
				element: <Cgv />,
			},
			{
				path: "/politique-confidentialite",
				element: <PolitiqueConfidentialite />,
			},
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

const rootElement = document.getElementById("root");

if (rootElement == null) {
	throw new Error(
		`Your HTML Document should contain a <div id="root"></div>`
	);
}

createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
