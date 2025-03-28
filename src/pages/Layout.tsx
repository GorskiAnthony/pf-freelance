import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Layout() {
	return (
		<div className="min-h-screen bg-zinc-50">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default Layout;
