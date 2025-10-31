import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

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
      paddingTop: "md:pt-40 xl:pt-50",
      paddingBottom: "xl:pb-20",
      titleMarginTop: "mt-10",
    },
  },
  {
    title: "Multi-Collateral Mechanism",
    description: "Vaults automatically generate synthetic value units backed by digital collateral. All parameters are enforced on-chain and transparent to every participant.",
    offset: "md:translate-y-52",
    styles: {
      paddingTop: "md:pt-20 xl:pt-50",
      titleMarginTop: "mt-10",
    },
  },
  {
    title: "Seamless Integration",
    description: "Designed for composability — wallets, interfaces, and DeFi tools can interact with EVRO contracts directly through permissionless endpoints.",
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
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 -z-10" style={{ height: 'calc(100% + 260px)' }}>
          <picture>
            {/* Mobile */}
            <source media="(max-width: 768px)" srcSet="/assets/img-hero-sm.webp" type="image/webp" />
            <source media="(max-width: 768px)" srcSet="/assets/img-hero-sm.png" type="image/png" />
            {/* Tablet */}
            <source media="(max-width: 1366px)" srcSet="/assets/img-hero-md.webp" type="image/webp" />
            <source media="(max-width: 1366px)" srcSet="/assets/img-hero-md.png" type="image/png" />
            {/* Desktop */}
            <source media="(max-width: 2048px)" srcSet="/assets/img-hero-lg.webp" type="image/webp" />
            <source media="(max-width: 2048px)" srcSet="/assets/img-hero-lg.png" type="image/png" />
            {/* Wide */}
            <source media="(min-width: 2049px)" srcSet="/assets/img-hero-xl.webp" type="image/webp" />
            <source media="(min-width: 2049px)" srcSet="/assets/img-hero-xl.png" type="image/png" />
            <img src="/assets/img-hero-xl.png" alt="" className="w-full h-full" aria-hidden="true" />
          </picture>
           <video
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="hidden 2xl:block absolute top-0 right-0 h-full"
            aria-hidden="true"
          >
            <source src="/assets/looptrim.webm" type="video/webm" />
          </video>
        </div>
        <div className="max-w-[2000px] mx-auto px-3 md:px-4 lg:px-6">
          <header className="py-7">
            <div className="flex items-center justify-between px-1 md:px-4">
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
              <div className="flex items-center gap-6">
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
          </header>

          <section id="main-content" className="py-8 pb-30 lg:text-left xl:pr-[25%]">
            <div>
              <h1 className="text-3xl sm:text-6xl xl:text-7xl font-black tracking-[-0.2em] text-gray-900 mb-6 sm:mb-8 leading-tight 2xl:pr-[25%] whitespace-pre-line">
                AUTONOMOUS,<br />
                OPEN SOURCE,<br />
                VALUE.
              </h1>
              <p className="px-2 text-xl xl:text-3xl font-extralight mb-5 xl:pr-[20%] text-gray-900">
                <b className="font-extrabold">EVRO</b> stands for <b className="font-extrabold">EVOLUTIONARY RESONATING ORGANISM</b>. 
                An open-source protocol that maintains synthetic value units through
                fully decentralized smart-contract mechanics. Built on Liquity V2 principles
                and deployed on Gnosis, it enables on-chain users to <b className="font-extrabold">CREATE,
                MANAGE AND BALANCE COLLATERALIZED VAULTS</b>, without issuers, custodians
                or intermediaries.
              </p>
              <br/>
              <div className="justify-center sm:justify-start sm:ml-2 flex -mb-10 -mt-4 xl:mt-2">
                <Link 
                  href="#"
                  className="cursor-pointer group hover:bg-gray-900 hover:text-[#F5889B] transition-transform duration-300 bg-black text-[#F5889B] p-4 xl:p-6 px-10 md:w-100 xl:w-150 flex items-center justify-center"
                >
                  <b className="tracking-[-0.2em] text-2xl md:text-3xl xl:text-4xl xl:py-2">GET ON EVRO</b>
                  <ArrowRight className="size-8 ml-3 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

        {/* Motivation Section */}
        <section className="relative py-22 sm:pb-55 md:-bottom-7 xl:-bottom-13 lg:min-h-[1000px] flex flex-col justify-center">
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
              <img src="/assets/img-motivation-xl.png" alt="" className="w-full h-full" aria-hidden="true" />
            </picture>
          </div>
          <div className="max-w-[2000px] mx-auto px-4 sm:px-0">
            <div className="md:grid md:grid-cols-2 gap-16 lg:px-[3%] 2xl:px-[10%] xl:items-start">
              <div>
                <h2 className="text-3xl xl:text-5xl font-bold tracking-[-0.2em] sm:mt-30 xl:px-10">
                  <b>EVRO EXISTS FOR BUILDERS, SAVERS, AND PROTOCOLS THAT RELY ON AUTONOMOUS LIQUIDITY.</b>
                </h2>
              </div>
              <div className="text-2xl xl:text-4xl font-thin tracking-wide mt-12 lg:mt-26 xl:px-10">
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
        <section className="relative px-2 text-white py-32 -mt-13 sm:-mt-36 sm:py-65">
          <div className="absolute inset-0 -z-10 pt-5" style={{ height: 'calc(100% + 50px)' }}>
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
          <div className="max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-5 mx-auto">
            {stats.map((stat) => (
              <div key={stat.value} className="flex flex-col items-center justify-center">
                <div className="text-5xl xl:text-7xl font-bold tracking-[-0.15em] mb-4 tabular-nums font-lexend-zetta">{stat.value}</div>
                <div className="text-base sm:text-lg xl:text-xl font-lexend-zetta">{stat.labelLineOne}</div>
                <div className="text-base sm:text-lg xl:text-xl font-lexend-zetta">{stat.labelLineTwo}</div>
              </div>
            ))}
          </div>
        </section>

       

        {/* Core Features Section */}
        <section className="relative pt-24 sm:py-24 bottom-20 lg:min-h-[2364px] flex flex-col justify-center">
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
          <div className="max-w-[2000px] mx-auto px-5 py-28">
            <h2 className="relative tracking-[-0.2em] text-3xl md:text-7xl xl:text-8xl font-extrabold text-center mb-16 xl:mb-30 wrap-break-word sm:break-normal mr-4">
              <span 
                className="absolute top-0 left-0 w-full h-full text-transparent" 
                style={{ WebkitTextStroke: '6px #EFA960' }}
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
                const baseClasses = "bg-[#ECF2E8BF] p-3 py-15 my-1 md:my-0 md:p-10";
                const styleClasses = [
                  feature.styles.paddingTop,
                  feature.styles.paddingBottom,
                ].filter(Boolean).join(" ");
                
                return (
                  <div
                    key={feature.title}
                    className={`${baseClasses} ${feature.offset} ${styleClasses}`}
                  >
                    <h3 className={`text-3xl xl:text-5xl font-extrabold tracking-[-0.25em] mb-8 ${feature.styles.titleMarginTop}`}>
                      {feature.title}
                    </h3>
                    <p className="text-lg xl:text-3xl font-light">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="relative py-6 pt-2 -mt-4 pb-12 lg:min-h-[1018px] flex flex-col justify-center">
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
          <div className="max-w-[2000px] mx-auto px-5 lg:px-40">
            <div className="text-center md:px-25">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.2em] mt-24">
                EVRO IS COMMUNITY GOVERNED AND OPEN-SOURCE
              </h2>
              <br/><br/>
              <p className="text-2xl font-medium mb-3 mx-3">
                THE PROTOCOL OPERATES WITHOUT CENTRAL CUSTODY OR MANAGEMENT. ITS ONLY ROLE IS ALIGNING
                INCENTIVES AMONG USERS TO FOSTER A TRANSPARENT, SUSTAINABLE DEFI ECOSYSTEM.
              </p>
              <br/>
              <div className="flex justify-center">
                <Link 
                  href="#"
                  className="cursor-pointer group hover:bg-gray-900 hover:text-[#F5889B] transition-transform duration-300 bg-black text-white font-bold p-4 text-2xl w-full flex items-center justify-center mb-1 md:w-100"
                >
                  <b className="tracking-[-0.2em]">PARTICIPATE</b>
                  <ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform duration-300" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <br/>
            <div className="text-center text-lg font-medium">
              <p>*Participation in governance does not involve offering, custodying or managing assets
                — it concerns the evolution of the code itself.
              </p>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="bg-[#757BA3] py-5">
        <div className="w-full aspect-3085/812 relative overflow-hidden">
          <picture>
            <source media="(max-width: 768px)" srcSet="/assets/img-logo-pattern-sm.png" type="image/png" />
            <source media="(max-width: 1366px)" srcSet="/assets/img-logo-pattern-md.png" type="image/png" />
            <source media="(max-width: 2048px)" srcSet="/assets/img-logo-pattern-lg.png" type="image/png" />
            <source media="(min-width: 2049px)" srcSet="/assets/img-logo-pattern-xl.png" type="image/png" />
            <img 
              src="/assets/img-logo-pattern-xl.png" 
              alt="Detailed EVRO logo."
              className="w-full h-full scale-x-107 mix-blend-luminosity"
            />
          </picture>
        </div>
        <div className="max-w-[2000px] mx-auto text-center px-2 py-8 md:px-25 lg:px-20">
            <p className="font-light text-2xl text-gray-700 mt-5">
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