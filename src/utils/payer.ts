export const payer = async (service: string) => {
	const res = await fetch("/api/create-checkout-session", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ service }),
	});
	const data = await res.json();
	if (data.url) {
		window.location.href = data.url;
	}
};
