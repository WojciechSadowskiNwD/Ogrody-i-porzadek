export type ContactPayload = {
	userName: string;
	userEmail: string;
	userPhone: string;
	txtArea?: string;
	creatingGarden?: boolean;
	landscaping?: boolean;
	cleaning?: boolean;
	cutting?: boolean;
};

export async function sendContactApi(payload: ContactPayload) {
	const res = await fetch("/api/contact", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(payload),
	});
	if (!res.ok) {
		const data = await res.json().catch(() => ({}));
		throw new Error(data.error || "Email send failed");
	}
	return (await res.json()) as { ok: true };
}