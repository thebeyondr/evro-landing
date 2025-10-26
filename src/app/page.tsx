import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="break-words tracking-tighter">
      <div className="relative">
        <div className="absolute inset-0 -z-10" style={{ height: 'calc(100% + 200px)' }}>
          <Image 
            src="/assets/img-hero.png" 
            alt=""
            fill
            quality={75}
            priority
          />
        </div>
        <header className="py-7 px-4 sm:px-8">
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
        <section className=" py-8">
          <div>
            <h1 className="text-6xl font-black tracking-[-0.2em] text-gray-900 mb-6 sm:mb-8 leading-tight pr-3">
              AUTONOMOUS,
              OPEN SOURCE,
              VALUE.
            </h1>
            <p className="px-2 text-3xl font-extralight mb-10">
              <b>EVRO</b> stands for <b>EVOLUTIONARY RESONATING ORGANISM</b>. 
              An open-source protocol that maintains synthetic value units through
              fully decentralized smart-contract mechanics. Built on Liquity V2 principles
              and deployed on Gnosis, it enables on-chain users to <b>CREATE,
              MANAGE AND BALANCE COLLATERALIZED VAULTS</b>, without issuers, custodians
              or intermediaries.
            </p>
            <br/>
            <div className="justify-center flex -mb-10 -mt-4">
              <button className="hover:-translate-y-2 transition-transform duration-300 bg-black text-[#F5889B] border border-1 p-4 px-10 md:w-100 flex items-center justify-center">
                <b className="tracking-[-0.2em] text-2xl">GET ON EVRO</b>
                <ArrowRight className="w-6 h-6 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
      <main>
        <section className="pt-22 sm:px-8 relative">
          <div className="absolute inset-0 -z-10" style={{ height: 'calc(100% + 250px)' }}>
            <Image 
              src="/assets/img-motivation.png" 
              alt=""
              fill
              priority
              className="object-cover"
              quality={100}
            />
          </div>
          <div className="md:grid md:grid-cols-2 md:mb-28 gap-16 space-y-16 mt-32 px-4">
            <div>
              <h2 className="text-3xl font-bold tracking-[-0.2em]">
                <b>EVRO EXISTS FOR BUILDERS, SAVERS, AND PROTOCOLS THAT RELY ON AUTONOMOUS LIQUIDITY.</b>
              </h2>
            </div>
            <div>
              <p className="text-3xl font-thin tracking-wide pb-8">
                By aligning incentives among vault creators, liquidators, and integrators,
                the system sustains value stability through transparent, trustless automation.
              </p>
              <p className="text-3xl font-thin tracking-wide">
                Decentralized design ensures that once deployed, the protocol operates independently.
                EVRO is governed by code, not counterparties.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20 px-2 sm:px-8 text-white relative py-32">
          <div className="absolute inset-0 -z-10 -my-6" style={{ height: 'calc(100% + 100px)' }}>
            <Image 
              src="/assets/img-stats.png" 
              alt=""
              fill
              loading="lazy"
              className="object-cover"
              quality={75}
            />
          </div>
          <div className="mx-auto">
            <div className="md:grid md:grid-cols-3 gap-10 md:gap-52 md:px-22 justify-items-center">
              <div className="text-center mb-36 md:mb-0">
                <div className="text-5xl font-extrabold my-8 tracking-[-0.2em]">1.2M</div>
                <div className="text-3xl md:text-lg">CONTRACT COLLATERAL</div>
              </div>
              <div className="text-center mb-36 md:mb-0">
                <div className="text-5xl font-extrabold my-8 tracking-[-0.2em]">8.7K</div>
                <div className="text-3xl md:text-lg">OPERATIONS EXECUTED</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extrabold my-8 tracking-[-0.2em]">75%</div>
                <div className="text-3xl md:text-lg">COLLATERAL RATIO</div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-16 md:py-24 relative bottom-20 md:bottom-6">
          <div className="absolute inset-0 -z-20" style={{ height: 'calc(100% + 150px)' }}>
            <Image 
              src="/assets/img-corefeature.png" 
              alt=""
              fill
              className="object-cover"
              loading="lazy"
              quality={100}
            />
          </div>
          <div className="mx-auto px-5 py-28 pb-10">
            <h2 className="tracking-[-0.2em] text-6xl md:text-7xl font-extrabold text-center mb-16">
              CORE FEATURES
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative md:mb-50">
  {/* Stability Pools - Top Left */}
  <div className="bg-[#ECF2E8BF] p-3 py-15 my-1 md:my-0 md:p-10 md:pt-40">
    <h3 className="text-4xl font-extrabold tracking-[-0.2em] mb-8 mt-20">
      Stability Pools
    </h3>
    <p className="text-3xl font-extralight">
      Autonomous pools distribute collateral proceeds according to deterministic
      smart contract rules. No discretionary control or managed yield.
    </p>
  </div>
  
  {/* Multi-Collateral Mechanism - Top Right */}
  <div className="bg-[#ECF2E8BF] p-3 py-15 my-1 md:my-0 md:p-10 md:translate-y-52 md:pt-20">
    <h3 className="text-4xl font-extrabold tracking-[-0.2em] mb-8 mt-20">
      Multi-Collateral Mechanism
    </h3>
    <p className="text-3xl font-extralight">
      Vaults automatically generate synthetic value units backed by digital collateral.
      All parameters are enforced on-chain and transparent to every participant.
    </p>
  </div>
  
  {/* Seamless Integration - Middle Left */}
  <div className="bg-[#ECF2E8BF] p-3 pb-30 my-1 md:my-0 md:pt-1 md:p-10 md:translate-y-0">
    <h3 className="text-4xl font-extrabold tracking-[-0.2em] mb-8 mt-14">
      Seamless Integration
    </h3>
    <p className="text-3xl font-extralight">
      Designed for composability — wallets, interfaces, and DeFi tools
      can interact with EVRO contracts directly through permissionless endpoints.
    </p>
  </div>
  
  {/* Immutable Protocol - Bottom Right */}
  <div className="bg-[#ECF2E8BF] p-3 pb-30 md:pb-40 md:pt-1 my-1 md:my-0 md:p-10 md:translate-y-52">
    <h3 className="text-4xl font-extrabold tracking-[-0.2em] mb-8 mt-14">
      Immutable Protocol
    </h3>
    <p className="text-3xl font-extralight">
      EVRO's contracts operate without administrative control or upgrade authority. The
      immutability of the protocol is a foundational primitive that digital economies can
      rely on for predictable, censorship-resistant liquidity.
    </p>
  </div>
</div>
          </div>
        </section>
        <section className="py-6 pt-2 -mt-4 relative pb-12">
          <div className="absolute inset-0 -z-10">
            <Image 
              src="/assets/img-community.png" 
              alt=""
              fill
              className="object-cover"
              loading="lazy"
              quality={100}
            />
          </div>
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.2em] mt-24">
                EVRO IS COMMUNITY GOVERNED AND OPEN-SOURCE
              </h2>
              <br/><br/>
              <p className="text-3xl font-medium mb-3 -mx-3">
                THE PROTOCOL OPERATES WITHOUT CENTRAL CUSTODY OR MANAGEMENT. ITS ONLY ROLE IS ALIGNING
                INCENTIVES AMONG USERS TO FOSTER A TRANSPARENT, SUSTAINABLE DEFI ECOSYSTEM.
              </p>
              <br/>
              <div className="flex justify-center">
                <button className="hover:-translate-y-2 font-bold transition-transform duration-300 bg-black text-white p-4 text-2xl w-full flex items-center justify-center mb-1">
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
      <footer className="bg-[#757BA3] pb-5">
      <div className="relative w-full h-[105px] sm:h-[300px] md:h-[400px] lg:h-[491px]">
        <Image 
          src="/assets/img-logo-pattern.png" 
          alt="Detailed EVRO logo."
          fill
          sizes="100vw"
          loading="lazy"
          quality={85}
          className="object-cover my-5"
        />
      </div>
        <div className="text-center mx-auto px-2 py-8">
          <div className="">
            <p className="font-light text-2xl text-gray-600 mt-5">
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