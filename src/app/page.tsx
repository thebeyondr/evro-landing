import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="break-words tracking-tighter">
      {/* Header */}
      <header 
        className="py-7 px-4"
        style={{
          backgroundImage: "url('/assets/img-hero.png')",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/assets/Evro-Logo-wordmark.svg" height={0} width={0} alt="Evro Logo" className="w-38 h-auto" />
          </div>
          <div className="flex items-center gap-6">
            <button>
              <FaGithub className="w-10 h-10" />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section 
          className="px-2 py-16"
          style={{
            backgroundImage: "url('/assets/img-hero.png')",
          }}
        >
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
            <button className="bg-black text-[#F5889B] border border-1 p-4 text-2xl w-full flex items-center justify-center">
              <b className="tracking-[-0.2em]">GET ON EVRO</b>
              <ArrowRight className="w-6 h-6 ml-2" />
            </button>
          </div>
        </section>
        <Image src="/assets/img-hero-motivation.png" height={1920} width={400} alt="hero-motivation-connector" className="w-full h-auto" />
        {/* Vision Statement */}
        <section 
          className="py-24 px-2"
          style={{
            backgroundImage: "url('/assets/img-motivation.png')",
            backgroundPosition: "center",
          }}
        >
          <div>
            <div>
              <h2 className="text-4xl tracking-[-0.2em]">
                <b>EVRO EXISTS FOR BUILDERS, SAVERS, AND PROTOCOLS THAT RELY ON AUTONOMOUS LIQUIDITY.</b>
              </h2>
              <br/><br/>
                <p className="text-2xl font-thin tracking-wide">
                  By aligning incentives among vault creators, liquidators, and integrators,
                  the system sustains value stability through transparent, trustless automation.
                </p>
                <br/><br/>
                <p className="text-2xl font-thin tracking-wide">
                  Decentralized design ensures that once deployed, the protocol operates independently.
                  EVRO is governed by code, not counterparties.
                </p>
              </div>
            </div>
        </section>
        <Image src="/assets/img-motivation-stats.png" height={1920} width={400} alt="motivation-stats-connector" className="w-full h-auto object-fit" />
        {/* Stats Section */}
        <section className="py-16 px-2 md:py-24 bg-[#1D1C1E] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="md:grid-cols-4 gap-10 md:gap-12">
              <div className="text-center mb-36">
                <div className="text-6xl font-bold my-6 tracking-[-0.2em]">1.2M</div>
                <div className="text-3xl uppercase">LOCKED IN CONTRACT</div>
              </div>
              <br/>
              <div className="text-center mb-36">
                <div className="text-6xl font-bold my-6 tracking-[-0.2em]">8.7K</div>
                <div className="text-3xl uppercase">OPERATIONS EXECUTED</div>
              </div>
              <br/>
              <div className="text-center">
                <div className="text-6xl font-bold my-6 tracking-[-0.2em]">75%</div>
                <div className="text-3xl uppercase">COLLATERAL RATIO</div>
              </div>
            </div>
          </div>
        </section>
        <Image src="/assets/img-stats-corefeature.png" height={1920} width={400} alt="stats-corefeature-connector" className="w-full h-auto object-fit" />
        {/* Core Features */}
        <section 
          className="py-16 md:py-24"
          style={{
            backgroundImage: "url('/assets/img-corefeature.png')",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="tracking-[-0.2em] text-7xl md:text-3xl font-bold text-center text-center mb-16">
              CORE FEATURES
            </h2>
            
            <div className="">
              <div className="bg-[#ECF2E8BF] p-8 border py-16">
                <h3 className="text-2xl font-bold tracking-[-0.2em]">
                  Stable Pools
                </h3>
                <br/>
                <p className="text-4xl font-thin">
                  Autonomous pools distribute collateral proceeds according to deterministic
                  smart contract rules. No discretionary control or managed yield.
                </p>
              </div>
              <br/>
              <div className="bg-[#ECF2E8BF] p-8 border py-16">
                <h3 className="text-2xl font-bold tracking-[-0.2em]">
                  Seamless Integration
                </h3>
                <br/>
                <p className="text-4xl font-thin">
                  Designed for composability - wallets, interfaces and DeFi tools
                  can interact with EVRO contracts directly through permissionless endpoints.
                </p>
              </div>
              <br/>
              <div className="bg-[#ECF2E8BF] p-8 border py-16">
                <h3 className="text-2xl font-bold tracking-[-0.2em]">
                  Collateral Mechanism
                </h3>
                <br/>
                <p className="text-4xl font-thin">
                  Vaults automatically generate synthetic value units backed by digital collateral.
                  All parameters are enforced on-chain and transparent to every participant.
                </p>
              </div>
              <br/>
              <div className="bg-[#ECF2E8BF] p-8 border py-16">
                <h3 className="text-2xl font-bold tracking-[-0.2em]">
                  Immutable Protocol
                </h3>
                <br/>
                <p className="text-4xl font-thin">
                  EVRO's contracts operate without administrative control or upgrade authority. The
                  immutability of the protocol is a foundational primitive that digital economies can
                  rely on for predictable, censorship resistant liquidity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section 
          className="py-6"
          style={{
            backgroundImage: "url('/assets/img-community.png')",
            backgroundPosition: "center",
          }}
        >
          <div className="max-w-7xl mx-auto px-5">
            <div className="text-center">
              <h2 className="text-4xl font-bold tracking-[-0.2em]">
                EVRO IS COMMUNITY GOVERNED AND OPEN-SOURCE
              </h2>
              <br/><br/>
              <p className="text-4xl tracking-wide">
                THE PROTOCOL OPERATES WITHOUT CENTRAL CUSTODY OR MANAGEMENT. ITS ONLY ROLE IS ALIGNING
                INCENTIVES AMONG USERS TO FOSTER A TRANSPARENT, SUSTAINABLE DEFI ECOSYSTEM.
              </p>
              <br/>
            <button className="bg-black text-white p-2 sm:pd-4 text-3xl w-full flex items-center justify-center">
              <b className="tracking-[-0.2em]">PARTICIPATE</b>
              <ArrowRight className="w-8 h-8 ml-2" />
            </button>
            </div>
            <br/>
            <i>*Participation in governance does not involve offering, custodying or managing assets
              - it concerns the evolution of the code itself.
            </i>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-[#757BA3]">
        <Image src="/assets/img-logo-pattern.png" height={1920} width={400} alt="footer-connector" className="w-full h-auto" />
        <div className="text-center mx-auto px-2 py-8">
          <div className="">
              <p className="font-thin text-3xl">
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