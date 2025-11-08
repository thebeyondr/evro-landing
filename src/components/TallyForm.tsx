"use client";

import { useState, FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export default function TallyForm() {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError(null);

		try {
			// Use a hidden iframe to submit the form (Tally forms expect traditional form submission)
			const iframe = document.createElement("iframe");
			iframe.style.position = "absolute";
			iframe.style.width = "0";
			iframe.style.height = "0";
			iframe.style.border = "0";
			iframe.name = "tally-submit-iframe";
			document.body.appendChild(iframe);

			const form = document.createElement("form");
			form.method = "POST";
			form.action = "https://tally.so/r/Zj5O6o";
			form.target = "tally-submit-iframe";
			form.style.display = "none";

			const emailField = document.createElement("input");
			emailField.type = "email";
			emailField.name = "email";
			emailField.value = email;
			form.appendChild(emailField);

			document.body.appendChild(form);
			form.submit();

			// Clean up after a delay
			setTimeout(() => {
				document.body.removeChild(form);
				document.body.removeChild(iframe);
				setIsSuccess(true);
				setEmail("");
				setIsSubmitting(false);
			}, 1500);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
			setIsSubmitting(false);
		}
	};

	if (isSuccess) {
		return (
			<div className="max-w-2xl mx-auto text-center py-12 px-4">
				<h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.2em] mb-4">
					THANK YOU
				</h2>
				<p className="text-lg sm:text-xl font-light">
					We&apos;ll be in touch soon.
				</p>
			</div>
		);
	}

	return (
		<div className="max-w-4xl mx-auto text-center space-y-6">
			<h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.2em] mt-10">
				BE AMONG THE FIRST ON EVRO
			</h2>
			<form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-end md:justify-center gap-4 md:gap-6" noValidate>
				<div className="flex-1 max-w-md mx-auto md:mx-0">
					<label htmlFor="email" className="sr-only">
						E-mail <span className="text-[#F5889B]">*</span>
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="first@evro.finance"
						required
						autoComplete="email"
						aria-label="Email address"
						className="w-full px-4 py-3 text-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 rounded-none focus:outline-none focus-visible:ring-4 focus-visible:ring-[#6C3AED] focus-visible:ring-offset-2 focus-visible:ring-offset-white focus-visible:border-[#6C3AED] transition-all duration-200"
						disabled={isSubmitting}
					/>
					{error && (
						<div className="text-lg font-light text-red-600 mt-2 text-left" role="alert">
							{error}
						</div>
					)}
				</div>
				<div className="flex justify-center md:justify-start">
					<button
						type="submit"
						disabled={isSubmitting || !email.trim()}
						className="cursor-pointer group hover:bg-gray-900 hover:text-orange-500 transition-transform duration-300 bg-black text-white font-bold p-3 text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black disabled:hover:text-white border-0 outline-none"
						style={{ backgroundColor: '#000000' }}
					>
						{isSubmitting ? (
							<b className="tracking-[-0.2em] font-lexend-zetta">Submitting…</b>
						) : (
							<b className="tracking-[-0.2em] font-lexend-zetta">NOTIFY ME</b>
						)}
					</button>
				</div>
			</form>
		</div>
	);
}

