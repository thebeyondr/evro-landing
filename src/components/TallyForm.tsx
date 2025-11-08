"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function TallyForm() {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const emailInputRef = useRef<HTMLInputElement>(null);
	const formRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && emailInputRef.current && !isSuccess) {
						// Small delay to ensure smooth scroll completes
						setTimeout(() => {
							emailInputRef.current?.focus();
						}, 300);
					}
				});
			},
			{
				threshold: 0.3, // Trigger when 30% of the form is visible
			}
		);

		if (formRef.current) {
			observer.observe(formRef.current);
		}

		return () => {
			if (formRef.current) {
				observer.unobserve(formRef.current);
			}
		};
	}, [isSuccess]);

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
		<div ref={formRef} className="max-w-4xl mx-auto text-center space-y-6">
			<h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.2em] mt-10">
				GET EARLY ACCESS TO EVRO
			</h2>
			<p className="text-lg sm:text-xl font-light max-w-2xl mx-auto px-4">
				Be among the first to access EVRO when it launches. Get priority access to deploy liquidity and interact with Gnosis-specific assets through Gnosis Pay.
			</p>
			<form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-end md:justify-center gap-4">
				<div className="flex-1 lg:max-w-sm">
					<label htmlFor="email" className="sr-only">
						E-mail <span className="text-[#F5889B]">*</span>
					</label>
					<input
						ref={emailInputRef}
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
						className="cursor-pointer group hover:bg-gray-900 hover:text-orange-500 transition-transform duration-300 bg-black text-white font-bold p-3 text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-black disabled:hover:text-white border-0 outline-none w-full md:w-auto"
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

