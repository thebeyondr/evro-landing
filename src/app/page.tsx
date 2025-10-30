import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="break-normal">
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
            <img src="/assets/img-hero-xl.png" alt="" className="w-full h-full" />
          </picture>
           <video
            autoPlay
            loop
            muted
            playsInline
            className="hidden 2xl:block absolute top-0 right-0 h-full h-auto"
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
                    height={0} 
                    width={0} 
                    alt="Evro Logo" 
                    className="w-30 xl:w-50 h-auto"
                    priority
                  />
                </Link>
              </div>
              <div className="flex items-center gap-6">
                <button>
                  <Link href="https://github.com/evro-finance" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="w-10 h-10 xl:w-15 xl:h-15 md:text-[#F5889B]" />
                  </Link>
                </button>
              </div>
            </div>
          </header>
          <section className="py-8 pb-30 lg:text-left xl:pr-[25%]">
            <div>
              <h1 className="break-words sm:break-normal text-5xl sm:text-7xl xl:text-8xl font-black tracking-[-0.2em] text-gray-900 mb-6 sm:mb-8 leading-tight 2xl:pr-[25%] hyphens-auto">
                AUTONOMOUS,
                OPEN SOURCE,
                VALUE.
              </h1>
              <p className="px-2 text-2xl xl:text-4xl font-extralight mb-5 xl:pr-[20%] text-gray-900">
                <b className="font-extrabold">EVRO</b> stands for <b className="font-extrabold">EVOLUTIONARY RESONATING ORGANISM</b>. 
                An open-source protocol that maintains synthetic value units through
                fully decentralized smart-contract mechanics. Built on Liquity V2 principles
                and deployed on Gnosis, it enables on-chain users to <b className="font-extrabold">CREATE,
                MANAGE AND BALANCE COLLATERALIZED VAULTS</b>, without issuers, custodians
                or intermediaries.
              </p>
              <br/>
              <div className="justify-center sm:justify-start sm:ml-2 flex -mb-10 -mt-4 xl:mt-2">
                <button className="hover:-translate-y-2 transition-transform duration-300 bg-black text-[#F5889B] border border-1 p-4 xl:p-6 px-10 md:w-100 xl:w-150 flex items-center justify-center">
                  <b className="tracking-[-0.2em] text-2xl md:text-3xl xl:text-4xl xl:py-2">GET ON EVRO</b>
                  <ArrowRight className="w-6 h-6 ml-2" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <main>
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
              <img src="/assets/img-motivation-xl.png" alt="" className="w-full h-full" />
            </picture>
          </div>
          <div className="max-w-[2000px] mx-auto px-4 sm:px-0">
            <div className="md:grid md:grid-cols-2 sm:mx-10 gap-16 lg:px-[3%] 2xl:px-[10%] xl:items-center">
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
              <img src="/assets/img-stats-xl.png" alt="" className="w-full h-full" />
            </picture>
          </div>
          <div className="max-w-[2000px] mx-auto">
            <div className="md:grid md:grid-cols-3 gap-10 sm:gap-52 sm:px-22 justify-items-center sm:mt-2">
              <div className="text-center mb-36 md:mb-0">
                <div className="text-4xl sm:text-6xl xl:text-7xl font-extrabold my-8 tracking-[-0.2em]">1.2M</div>
                <div className="text-2xl sm:text-xl ">CONTRACT COLLATERAL</div>
              </div>
              <div className="text-center mb-36 md:mb-0">
                <div className="text-4xl sm:text-6xl xl:text-7xl font-extrabold my-8 tracking-[-0.2em]">8.7K</div>
                <div className="text-2xl sm:text-xl">OPERATIONS EXECUTED</div>
              </div>
              <div className="text-center">
                <div className="text-4xl sm:text-6xl xl:text-7xl font-extrabold my-8 tracking-[-0.2em]">75%</div>
                <div className="text-2xl sm:text-xl">COLLATERAL RATIO</div>
              </div>
            </div>
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
              <img src="/assets/img-corefeature-xl.png" alt="" className="w-full h-full" />
            </picture>
          </div>
          <div className="max-w-[2000px] mx-auto px-5 py-28">
            <h2 className="relative tracking-[-0.2em] text-6xl md:text-7xl xl:text-8xl font-extrabold text-center mb-16 xl:mb-30 break-words sm:break-normal mr-4">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-10 relative xl:px-[5%] xl:pb-[5%]">
              {/* Stability Pools - Top Left */}
              <div className="bg-[#ECF2E8BF] p-3 py-15 my-1 md:my-0 md:p-10 md:pt-40 xl:pb-20 xl:pt-50">
                <h3 className="text-3xl xl:text-5xl font-extrabold tracking-[-0.2em] mb-8 mt-10">
                  Stability Pools
                </h3>
                <p className="text-3xl xl:text-4xl font-extralight">
                  Autonomous pools distribute collateral proceeds according to deterministic
                  smart contract rules. No discretionary control or managed yield.
                </p>
              </div>
              
              {/* Multi-Collateral Mechanism - Top Right */}
              <div className="bg-[#ECF2E8BF] p-3 py-15 my-1 md:my-0 md:p-10 md:translate-y-52 md:pt-20 xl:pt-50">
                <h3 className="text-3xl xl:text-5xl font-extrabold tracking-[-0.2em] mb-8 mt-10">
                  Multi-Collateral Mechanism
                </h3>
                <p className="text-3xl xl:text-4xl font-extralight">
                  Vaults automatically generate synthetic value units backed by digital collateral.
                  All parameters are enforced on-chain and transparent to every participant.
                </p>
              </div>
              
              {/* Seamless Integration - Middle Left */}
              <div className="bg-[#ECF2E8BF] p-3 pb-30 my-1 md:my-0 md:pt-1 md:p-10 md:translate-y-0 xl:pb-[15%]">
                <h3 className="text-3xl xl:text-5xl font-extrabold tracking-[-0.2em] mb-8 mt-14">
                  Seamless Integration
                </h3>
                <p className="text-3xl xl:text-4xl font-extralight">
                  Designed for composability — wallets, interfaces, and DeFi tools
                  can interact with EVRO contracts directly through permissionless endpoints.
                </p>
              </div>
              
              {/* Immutable Protocol - Bottom Right */}
              <div className="bg-[#ECF2E8BF] p-3 pb-30 md:pb-40 md:pt-1 my-1 md:my-0 md:p-10 md:translate-y-52 xl:pt-5">
                <h3 className="text-3xl xl:text-5xl font-extrabold tracking-[-0.2em] mb-8 mt-14">
                  Immutable Protocol
                </h3>
                <p className="text-3xl xl:text-4xl font-extralight">
                  EVRO's contracts operate without administrative control or upgrade authority. The
                  immutability of the protocol is a foundational primitive that digital economies can
                  rely on for predictable, censorship-resistant liquidity.
                </p>
              </div>
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
              <img src="/assets/img-community-xl.png" alt="" className="w-full h-full" />
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
                <button className="hover:-translate-y-2 font-bold transition-transform duration-300 bg-black text-white p-4 text-2xl w-full flex items-center justify-center mb-1 md:w-100">
                  <b className="tracking-[-0.2em]">PARTICIPATE</b>
                  <ArrowRight className="w-6 h-6 ml-4" />
                </button>
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
      </main>

      {/* Footer */}
      <footer className="bg-[#757BA3] py-5">
        <div className="w-full aspect-[3085/812] relative overflow-hidden">
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
            <p className="font-light text-2xl text-gray-600 mt-5">
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