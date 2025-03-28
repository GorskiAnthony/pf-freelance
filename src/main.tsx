import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout.tsx";
import Pricing from "./components/Pricing.tsx";
import Home from "./components/Home.tsx";
import "./index.css";
import Contact from "./components/Contact.tsx";
import NotFound from "./components/NotFound.tsx";

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
