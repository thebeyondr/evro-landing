import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ArrowDown, ArrowRight, Bell } from "lucide-react";
import TallyForm from "@/components/TallyForm";

const stats = [
	{
		value: "1.2M",
		labelLineOne: "COLLATERAL IN",
		labelLineTwo: "CONTRACT",
	},
	{
		value: "8.7K",
		labelLineOne: "OPERATIONS",
		labelLineTwo: "EXECUTED",
	},
	{
		value: "75%",
		labelLineOne: "COLLATERAL",
		labelLineTwo: "RATIO",
	},
];

const coreFeatures = [
	{
		title: "Stability Pools",
		description: "Autonomous pools distribute collateral proceeds according to deterministic smart contract rules. No discretionary control or managed yield.",
		offset: "",
		styles: {
			paddingTop: "md:pt-18 xl:pt-28",
			paddingBottom: "xl:pb-20",
			titleMarginTop: "mt-10",
		},
	},
	{
		title: "Multi-Collateral Mechanism",
		description: "Vaults automatically generate synthetic value units backed by digital collateral. All parameters are enforced on-chain and transparent to every participant.",
		offset: "md:translate-y-52",
		styles: {
			paddingTop: "md:pt-18 xl:pt-28",
			titleMarginTop: "mt-10",
		},
	},
	{
		title: "Seamless Integration",
		description: "Designed for composability, wallets, interfaces, and DeFi tools can interact with EVRO contracts directly through permissionless endpoints.",
		offset: "",
		styles: {
			paddingTop: "md:pt-1",
			paddingBottom: "pb-30 xl:pb-[15%]",
			titleMarginTop: "mt-14",
		},
	},
	{
		title: "Immutable Protocol",
		description: "EVRO's contracts operate without administrative control or upgrade authority. The immutability of the protocol is a foundational primitive that digital economies can rely on for predictable, censorship-resistant liquidity.",
		offset: "md:translate-y-52",
		styles: {
			paddingTop: "md:pt-1 xl:pt-5",
			paddingBottom: "pb-30 md:pb-40",
			titleMarginTop: "mt-14",
		},
	},
];

export default function Home() {
	return (
		<div>
			{/* Skip to content link */}
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-[#F5889B] focus:outline-2 focus:outline-[#F5889B] focus:outline-offset-2 rounded"
			>
				Skip to content
			</a>
			<div className="mx-auto px-3 md:px-4 lg:px-6 bg-[#E7E1F1] noise-texture mix-blend-luminosity">
				<nav className="py-7">
					<div className="flex items-center justify-between px-1 md:px-4 max-w-7xl mx-auto">
						<div className="flex items-center">
							<Link href="/">
								<Image
									src="/assets/Evro-Logo-wordmark.svg"
									height={80}
									width={200}
									alt="Evro Logo"
									className="w-16 xl:w-20 h-auto"
									priority
								/>
							</Link>
						</div>
						<div className="flex items-center gap-6 z-20">
							<Link
								href="https://github.com/evro-finance"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="View EVRO on GitHub"
								className="inline-flex items-center justify-center"
							>
								<FaGithub className="size-6 xl:size-10 md:text-[#F5889B]" />
							</Link>
						</div>
					</div>
				</nav>

				<section id="main-content" className="flex flex-col pt-8 pb-16 md:pb-40 xl:pb-56">
					{/* Triangle video cut out for xl screens */}
					<div
						className="hidden md:block absolute top-0 right-0 md:w-xs xl:w-[960px] h-full"
						aria-hidden="true"
					>
						<video
							autoPlay
							loop
							muted
							playsInline
							preload="none"
							className="absolute top-0 right-0 h-full w-auto min-w-full min-h-full object-cover"
						>
							<source src="/assets/looptrim.webm" type="video/webm" />
						</video>
					</div>
					<div className="xl:pl-18">
						<h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-[-0.2em] text-gray-900 mb-6 sm:mb-8 leading-tight">
							AUTONOMOUS,<br />
							OPEN SOURCE,<br />
							VALUE.
						</h1>
						<p className="text-lg xl:text-xl font-light text-gray-900 max-w-lg">
							<b className="font-bold">EVRO</b> is an open-source protocol deployed on Gnosis that enables you to <b className="font-bold">CREATE,
								MANAGE AND BALANCE COLLATERALIZED VAULTS</b> without issuers, custodians, or intermediaries.
							Built on Liquity V2 principles, EVRO operates through fully decentralized smart contracts with no administrative control and no upgrade authority.
						</p>
						<br />
						<Link
							href="#signup"
							className="group cursor-pointer group flex items-center justify-center bg-black text-[#F5889B] hover:text-white p-2 xl:p-3 px-6 md:w-48 xl:w-64 hover:bg-gray-900 transition-colors duration-200"
							aria-label="Scroll to sign up form"
						>
							<span className="tracking-[-0.2em] text-lg md:text-xl xl:py-2 font-lexend-zetta font-semibold">GET NOTIFIED</span>
							<Bell className="hidden lg:block size-5 ml-3 transition-transform duration-300 group-hover:rotate-12" aria-hidden="true" />
						</Link>
					</div>
				</section>
			</div>

			{/* Motivation Section */}
			<section className="relative pt-18 pb-18 sm:pb-36 flex flex-col justify-center -mt-6 sm:-mt-12 md:-mt-28 xl:-mt-40 z-10">
				<div className="absolute inset-0 -z-10">
					<picture>
						{/* Mobile */}
						<source media="(max-width: 768px)" srcSet="/assets/img-motivation-sm.webp" type="image/webp" />
						<source media="(max-width: 768px)" srcSet="/assets/img-motivation-sm.png" type="image/png" />
						{/* Tablet */}
						<source media="(max-width: 1366px)" srcSet="/assets/img-motivation-md.webp" type="image/webp" />
						<source media="(max-width: 1366px)" srcSet="/assets/img-motivation-md.png" type="image/png" />
						{/* Desktop */}
						<source media="(max-width: 2048px)" srcSet="/assets/img-motivation-lg.webp" type="image/webp" />
						<source media="(max-width: 2048px)" srcSet="/assets/img-motivation-lg.png" type="image/png" />
						{/* Wide */}
						<source media="(min-width: 2049px)" srcSet="/assets/img-motivation-xl.webp" type="image/webp" />
						<source media="(min-width: 2049px)" srcSet="/assets/img-motivation-xl.png" type="image/png" />
						<img src="/assets/img-motivation-xl.png" alt="" className="w-full h-full object-fill" aria-hidden="true" />
					</picture>
				</div>
				<div className="max-w-[2000px] mx-auto px-4">
					<div className="md:grid md:grid-cols-2 gap-16 lg:px-[3%] 2xl:px-[10%] md:items-start md:py-6 xl:py-28">
						<div className="flex items-center justify-center h-full">
							<h2 className="text-2xl xl:text-5xl font-bold tracking-[-0.2em] xl:px-10 self-center">
								EVRO EXISTS FOR BUILDERS, SAVERS, AND PROTOCOLS THAT RELY ON AUTONOMOUS LIQUIDITY.
							</h2>
						</div>
						<div className="text-lg sm:text-xl xl:text-3xl font-light mt-12 lg:mt-0 xl:px-10 h-full">
							<p className="mb-8">
								By aligning incentives among vault creators, liquidators, and integrators,
								the system sustains value stability through transparent, trustless automation.
							</p>
							<p>
								Decentralized design ensures that once deployed, the protocol operates independently.
								EVRO is governed by code, not counterparties.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className="relative px-2 text-white pt-18 pb-12 sm:pt-32 sm:pb-18 xl:pt-48 xl:pb-36 -mt-10 lg:-mt-24 xl:-mt-48 z-10">
				<div className="absolute inset-0 -z-10" style={{ height: 'calc(100% + 50px)' }}>
					<picture>
						{/* Mobile */}
						<source media="(max-width: 768px)" srcSet="/assets/img-stats-sm.webp" type="image/webp" />
						<source media="(max-width: 768px)" srcSet="/assets/img-stats-sm.png" type="image/png" />
						{/* Tablet */}
						<source media="(max-width: 1366px)" srcSet="/assets/img-stats-md.webp" type="image/webp" />
						<source media="(max-width: 1366px)" srcSet="/assets/img-stats-md.png" type="image/png" />
						{/* Desktop */}
						<source media="(max-width: 2048px)" srcSet="/assets/img-stats-lg.webp" type="image/webp" />
						<source media="(max-width: 2048px)" srcSet="/assets/img-stats-lg.png" type="image/png" />
						{/* Wide */}
						<source media="(min-width: 2049px)" srcSet="/assets/img-stats-xl.webp" type="image/webp" />
						<source media="(min-width: 2049px)" srcSet="/assets/img-stats-xl.png" type="image/png" />
						<img src="/assets/img-stats-xl.png" alt="" className="w-full h-full" aria-hidden="true" />
					</picture>
				</div>
				<div className="max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 xl:gap-5 mx-auto">
					{stats.map((stat) => (
						<div key={stat.value} className="flex flex-col items-center justify-center">
							<div className="text-4xl xl:text-5xl font-bold tracking-[-0.15em] mb-2 sm:mb-4 tabular-nums font-lexend-zetta">{stat.value}</div>
							<div className="text-xs md:text-sm xl:text-base font-lexend-zetta">{stat.labelLineOne}</div>
							<div className="text-xs md:text-sm xl:text-base font-lexend-zetta">{stat.labelLineTwo}</div>
						</div>
					))}
				</div>
			</section>



			{/* Core Features Section */}
			<section className="relative pt-24 sm:py-24 bottom-20 flex flex-col justify-center">
				<div className="absolute inset-0 -z-20" style={{ height: 'calc(100% + 150px)' }}>
					<picture>
						{/* Mobile */}
						<source media="(max-width: 768px)" srcSet="/assets/img-corefeature-sm.webp" type="image/webp" />
						<source media="(max-width: 768px)" srcSet="/assets/img-corefeature-sm.png" type="image/png" />
						{/* Tablet */}
						<source media="(max-width: 1366px)" srcSet="/assets/img-corefeature-md.webp" type="image/webp" />
						<source media="(max-width: 1366px)" srcSet="/assets/img-corefeature-md.png" type="image/png" />
						{/* Desktop */}
						<source media="(max-width: 2048px)" srcSet="/assets/img-corefeature-lg.webp" type="image/webp" />
						<source media="(max-width: 2048px)" srcSet="/assets/img-corefeature-lg.png" type="image/png" />
						{/* Wide */}
						<source media="(min-width: 2049px)" srcSet="/assets/img-corefeature-xl.webp" type="image/webp" />
						<source media="(min-width: 2049px)" srcSet="/assets/img-corefeature-xl.png" type="image/png" />
						<img src="/assets/img-corefeature-xl.png" alt="" className="w-full h-full" aria-hidden="true" />
					</picture>
				</div>
				<div className="max-w-[2000px] mx-auto px-5 pt-20 pb-4 sm:pb-28">
					<h2 className="relative tracking-[-0.2em] text-3xl md:text-5xl xl:text-7xl font-bold text-center mb-16 xl:mb-30 wrap-break-word sm:break-normal mr-4">
						<span
							className="absolute top-0 left-0 w-full h-full text-transparent"
							style={{ WebkitTextStroke: '4px #EFA960' }}
							aria-hidden="true"
						>
							CORE FEATURES
						</span>
						<span className="relative text-gray-900">
							CORE FEATURES
						</span>
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-10 relative xl:px-[10%] xl:pb-[5%] max-w-[1400px] mx-auto">
						{coreFeatures.map((feature) => {
							const baseClasses = "bg-[#ECF2E8BF] p-4 py-8 my-1 md:my-0 md:p-8";
							const styleClasses = [
								feature.styles.paddingTop,
								feature.styles.paddingBottom,
							].filter(Boolean).join(" ");

							return (
								<div
									key={feature.title}
									className={`${baseClasses} ${feature.offset} ${styleClasses}`}
								>
									<h3 className={`text-2xl sm:text-3xl xl:text-4xl font-bold tracking-[-0.2em] mb-6 ${feature.styles.titleMarginTop}`}>
										{feature.title}
									</h3>
									<p className="text-lg xl:text-2xl font-light">
										{feature.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Community Section */}
			<section className="relative py-6 pt-2 -mt-4 md:py-28 flex flex-col justify-center">
				<div className="absolute inset-0 -z-10">
					<picture>
						{/* Mobile */}
						<source media="(max-width: 768px)" srcSet="/assets/img-community-sm.webp" type="image/webp" />
						<source media="(max-width: 768px)" srcSet="/assets/img-community-sm.png" type="image/png" />
						{/* Tablet */}
						<source media="(max-width: 1366px)" srcSet="/assets/img-community-md.webp" type="image/webp" />
						<source media="(max-width: 1366px)" srcSet="/assets/img-community-md.png" type="image/png" />
						{/* Desktop */}
						<source media="(max-width: 2048px)" srcSet="/assets/img-community-lg.webp" type="image/webp" />
						<source media="(max-width: 2048px)" srcSet="/assets/img-community-lg.png" type="image/png" />
						{/* Wide */}
						<source media="(min-width: 2049px)" srcSet="/assets/img-community-xl.webp" type="image/webp" />
						<source media="(min-width: 2049px)" srcSet="/assets/img-community-xl.png" type="image/png" />
						<img src="/assets/img-community-xl.png" alt="" className="w-full h-full" aria-hidden="true" />
					</picture>
				</div>
				<div className="max-w-[2000px] mx-auto px-4">
					<div className="text-center space-y-6 max-w-2xl">
						<h2 className="text-2xl sm:text-4xl font-bold tracking-[-0.2em] mt-10">
							EVRO IS COMMUNITY GOVERNED AND OPEN-SOURCE
						</h2>
						<p className="text-lg sm:text-xl font-medium mb-3 mx-3">
							THE PROTOCOL OPERATES WITHOUT CENTRAL CUSTODY OR MANAGEMENT. ITS ONLY ROLE IS ALIGNING
							INCENTIVES AMONG USERS TO FOSTER A TRANSPARENT, SUSTAINABLE DEFI ECOSYSTEM.
						</p>
						<br />
						<div className="flex justify-center">
							<Link
								href="#"
								className="cursor-pointer group hover:bg-gray-900 hover:text-[#F5889B] transition-transform duration-300 bg-black text-white font-bold p-4 text-lg w-full flex items-center justify-center mb-1 md:w-100"
							>
								<b className="tracking-[-0.2em]">PARTICIPATE*</b>
								<ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
							</Link>
						</div>
					</div>
					<div className="text-center text-xs tracking-wide sm:text-base font-medium">
						<p>*Governance participation only affects protocol code, not assets.</p>
					</div>
				</div>
			</section>

			{/* Tally Form Section */}
			<section id="signup" className="relative py-6 md:py-18 md:pb-20 flex flex-col justify-center">
				<div className="absolute inset-0 -z-10 bg-violet-200">
				</div>
				<div className="max-w-[2000px] mx-auto px-4">
					<TallyForm />
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-[#757BA3] pb-5">
				<div className="w-full aspect-3085/812 relative overflow-hidden">
					<img
						src="/assets/evro-large.svg"
						alt="Detailed EVRO logo."
						className="w-full h-full scale-x-107 mix-blend-color-dodge opacity-33 hover:opacity-100 transition-opacity duration-300"
					/>
				</div>
				<div className="max-w-[2000px] mx-auto text-center px-2 py-8 md:px-25 lg:px-20">
					<p className="font-light text-2xl text-gray-800 mt-5 uppercase">
						EVRO IS AN AUTONOMOUS SOFTWARE DEPLOYED ON PUBLIC BLOCKCHAINS.
						IT DOES NOT ISSUE, HOLD OR REDEEM ASSETS AND IS NOT A FINANCIAL
						SERVICE OR PRODUCT. INTERACTIONS WITH THE PROTOCOL OCCUR DIRECTLY
						THROUGH SMART CONTRACTS AT THE USER'S INITIATIVE. NO ENTITY PROVIDES
						INVESTMENT ADVICE, CUSTODY or GUARANTEES OF VALUE STABILITY.
					</p>
				</div>
			</footer>
		</div>
	);
}