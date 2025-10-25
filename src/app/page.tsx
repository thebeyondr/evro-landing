import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="break-words tracking-tighter">
      {/* Header */}
      <header className="py-7 px-4 sm:px-8 relative">
        {/* Optimized hero background - using Next.js Image */}
        <div className="absolute inset-0 -z-10">
          <Image 
            src="/assets/img-hero.png" 
            alt="Hero background"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
          />
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image 
                src="/assets/Evro-Logo-wordmark.svg" 
                height={40} 
                width={150} 
                alt="Evro Logo" 
                className="w-38 h-auto"
                priority
              />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <button>
              <Link href="https://github.com/evro-finance" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-10 h-10 md:text-[#F5889B]" />
              </Link>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="px-2 sm:px-8 py-16 relative">
          {/* Background continues from header */}
          <div className="absolute inset-0 -z-10">
            <Image 
              src="/assets/img-hero.png" 
              alt="Hero background"
              fill
              className="object-cover"
              quality={75}
              sizes="100vw"
            />
          </div>
          
          <div>
            <h1 className="text-5xl font-black tracking-tighter text-gray-900 mb-6 sm:mb-8 leading-tight uppercase">
              AUTONOMOUS, <br/>
              OPEN SOURCE, 
              VALUE.
            </h1>
            
            <p className="text-2xl font-thin tracking-wide ">
              <b>EVRO</b> stands for <b>EVOLUTIONARY RESONATING ORGANISM</b>. 
              An open-source protocol that maintains synthetic value units through
              fully decentralized smart-contract mechanics. Built on Liquity V2 principles
              and deployed on Gnosis, it enables on-chain users to <b>CREATE,
              MANAGE AND BALANCE COLLATERALIZED VAULTS</b>, without issuers, custodians
              or intermediaries.
            </p>
            <br/>
            <button className="hover:-translate-y-2 transition-transform duration-300 bg-black text-[#F5889B] border border-1 p-4 text-2xl w-full md:w-100 flex items-center justify-center">
              <b className="tracking-[-0.2em]">GET ON EVRO</b>
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
          </div>
        </section>
        
        {/* Connector images with optimized loading */}
        <Image 
          src="/assets/img-hero-motivation.png" 
          height={400} 
          width={1920} 
          alt="hero-motivation-connector" 
          className="w-full h-auto"
          loading="lazy"
          quality={75}
          sizes="100vw"
        />
        
        {/* Vision Statement */}
        <section className="py-24 px-2 sm:px-8 relative">
          {/* Optimized motivation background */}
          <div className="absolute inset-0 -z-10">
            <Image 
              src="/assets/img-motivation.png" 
              alt="Motivation background"
              fill
              className="object-cover object-center"
              loading="lazy"
              quality={70}
              sizes="100vw"
            />
          </div>
          
          <div className="md:grid md:grid-cols-2 gap-16 space-y-16">
            <div>
              <h2 className="text-4xl tracking-[-0.2em]">
                <b>EVRO EXISTS FOR BUILDERS, SAVERS, AND PROTOCOLS THAT RELY ON AUTONOMOUS LIQUIDITY.</b>
              </h2>
            </div>
            <div>
              <p className="text-2xl font-thin tracking-wide pb-8">
                By aligning incentives among vault creators, liquidators, and integrators,
                the system sustains value stability through transparent, trustless automation.
              </p>
              <p className="text-2xl font-thin tracking-wide">
                Decentralized design ensures that once deployed, the protocol operates independently.
                EVRO is governed by code, not counterparties.
              </p>
            </div>
          </div>
        </section>
        
        <Image 
          src="/assets/img-motivation-stats.png" 
          height={400} 
          width={1920} 
          alt="motivation-stats-connector" 
          className="w-full h-auto"
          loading="lazy"
          quality={75}
          sizes="100vw"
        />
        
        {/* Stats Section */}
        <section className="py-16 px-2 md:py-24 bg-[#1D1C1E] text-white">
          <div className="mx-auto">
            <div className="md:grid md:grid-cols-3 gap-10 md:gap-12 md:px-28 justify-items-center">
              <div className="text-center mb-36 md:mb-0">
                <div className="text-6xl font-bold my-6 tracking-[-0.2em]">1.2M</div>
                <div className="text-xl">LOCKED IN CONTRACT</div>
              </div>
              <div className="text-center mb-36 md:mb-0">
                <div className="text-6xl font-bold my-6 tracking-[-0.2em]">8.7K</div>
                <div className="text-xl">OPERATIONS EXECUTED</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold my-6 tracking-[-0.2em]">75%</div>
                <div className="text-xl">COLLATERAL RATIO</div>
              </div>
            </div>
          </div>
        </section>
        
        <Image 
          src="/assets/img-stats-corefeature.png" 
          height={400} 
          width={1920} 
          alt="stats-corefeature-connector" 
          className="w-full h-auto"
          loading="lazy"
          quality={75}
          sizes="100vw"
        />
        
        {/* Core Features */}
        <section className="py-16 md:py-24 relative">
          {/* Optimized core feature background */}
          <div className="absolute inset-0 -z-10">
            <Image 
              src="/assets/img-corefeature.png" 
              alt="Core feature background"
              fill
              className="object-cover object-center"
              loading="lazy"
              quality={70}
              sizes="100vw"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="tracking-[-0.2em] text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16">
              CORE FEATURES
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Stability Pools - Top Left */}
              <div className="bg-[#ECF2E8BF] p-12 md:pt-20 border">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.2em] mb-4">
                  Stability Pools
                </h3>
                <p className="text-lg md:text-xl font-thin">
                  Autonomous pools distribute collateral proceeds according to deterministic
                  smart contract rules. No discretionary control or managed yield.
                </p>
              </div>

              {/* Multi-Collateral Mechanism - Top Right */}
              <div className="bg-[#ECF2E8BF] p-12 md:pt-20 border md:row-span-2 md:mt-16">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.2em] mb-4">
                  Multi-Collateral Mechanism
                </h3>
                <p className="text-lg md:text-xl font-thin">
                  Vaults automatically generate synthetic value units backed by digital collateral.
                  All parameters are enforced on-chain and transparent to every participant.
                </p>
              </div>

              {/* Seamless Integration - Middle Left */}
              <div className="bg-[#ECF2E8BF] p-12 md:pb-20 border md:row-span-2 md:mb-36">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.2em] mb-4">
                  Seamless Integration
                </h3>
                <p className="text-lg md:text-xl font-thin">
                  Designed for composability — wallets, interfaces, and DeFi tools
                  can interact with EVRO contracts directly through permissionless endpoints.
                </p>
              </div>

              {/* Immutable Protocol - Bottom Right */}
              <div className="bg-[#ECF2E8BF] p-12 md:pb-20 border">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.2em] mb-4">
                  Immutable Protocol
                </h3>
                <p className="text-lg md:text-xl font-thin">
                  EVRO's contracts operate without administrative control or upgrade authority. The
                  immutability of the protocol is a foundational primitive that digital economies can
                  rely on for predictable, censorship-resistant liquidity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 relative">
          {/* Optimized community background */}
          <div className="absolute inset-0 -z-10">
            <Image 
              src="/assets/img-community.png" 
              alt="Community background"
              fill
              className="object-cover object-center"
              loading="lazy"
              quality={70}
              sizes="100vw"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.2em] mt-22">
                EVRO IS COMMUNITY GOVERNED AND OPEN-SOURCE
              </h2>
              <br/><br/>
              <p className="text-4xl tracking-wide">
                THE PROTOCOL OPERATES WITHOUT CENTRAL CUSTODY OR MANAGEMENT. ITS ONLY ROLE IS ALIGNING
                INCENTIVES AMONG USERS TO FOSTER A TRANSPARENT, SUSTAINABLE DEFI ECOSYSTEM.
              </p>
              <br/>
              <div className="flex justify-center">
                <button className="hover:-translate-y-2 transition-transform duration-300 bg-black text-white p-2 sm:p-4 text-3xl w-full max-w-lg flex items-center justify-center">
                  <b className="tracking-[-0.2em]">PARTICIPATE</b>
                  <ArrowRight className="w-8 h-8 ml-2" />
                </button>
              </div>
            </div>
            <br/>
            <div className="text-center">
              <i>*Participation in governance does not involve offering, custodying or managing assets
                - it concerns the evolution of the code itself.
              </i>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-[#757BA3] border border-t-white">
        <Image 
          src="/assets/img-logo-pattern.png" 
          height={491} 
          width={1920} 
          alt="footer-connector" 
          className="w-full h-auto"
          loading="lazy"
          quality={75}
          sizes="100vw"
        />
        <div className="text-center mx-auto px-2 py-8">
          <div className="">
            <p className="font-thin text-3xl text-gray-600">
              EVRO IS AN AUTONOMOUS SOFTWARE DEPLOYED ON PUBLIC BLOCKCHAINS. 
              IT DOES NOT ISSUE, HOLD OR REDEEM ASSETS AND IS NOT A FINANCIAL
              SERVICE OR PRODUCT. INTERACTIONS WITH THE PROTOCOL OCCUR DIRECTLY
              THROUGH SMART CONTRACTS AT THE USER'S INITIATIVE. NO ENTITY PROVIDES
              INVESTMENT ADVICE, CUSTODY or GUARANTEES OF VALUE STABILITY.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}