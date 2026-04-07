const products = [
  ['Option Profit Calculator', 'Free options strategy calculator for payoff, breakeven, and scenario analysis.', 'https://optionprofitcalculator.ai'],
  ['SG Tenancy Agreement', 'Singapore tenancy agreement generator and explainer for landlords and tenants.', 'https://sgtenancy.com'],
  ['Direct Index Club', 'Plain-English tools and writing around ETF fees, direct indexing, and long-term investing.', 'https://directindex.club'],
  ['PokerSnap', 'AI-assisted poker hand analysis for players reviewing hard spots.', 'https://pokersnap.app'],
  ['AskTaxes', 'Tax Q&A platform seeded with practical country-specific answers.', 'https://asktaxes.com'],
  ['AskVisa', 'Immigration and visa Q&A platform focused on practical country workflows.', 'https://askvisa.co']
] as const;

const network = [
  ['Pickle Singapore', 'https://picklesg.com'],
  ['Pickle Johor', 'https://picklejohor.com'],
  ['Pickle KL', 'https://picklekualalumpur.com'],
  ['Padel Singapore', 'https://padelsingapore.com'],
  ['Padel Johor', 'https://padeljohor.com']
] as const;

const skills = [
  ['ClawSpa', 'https://clawspa.org'],
  ['Iknowkungfu', 'https://clawhub.ai/whooshinglander/iknowkungfu'],
  ['Browser Fu', 'https://clawhub.ai/whooshinglander/browser-fu'],
  ['Feelslikeclaude', 'https://clawhub.ai/whooshinglander/feelslikeclaude']
] as const;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <div className="mx-auto max-w-6xl px-6 pb-24 pt-8 sm:px-8 lg:px-10">
        <header className="mb-20 flex flex-col gap-8 border-b border-line pb-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-white/45">WhooshingLander</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/60">
              Builder of fast, useful internet products across finance, AI, and local discovery.
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-white/60">
            <a href="#work" className="transition hover:text-white">Work</a>
            <a href="#network" className="transition hover:text-white">Network</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </header>

        <section className="grid gap-12 border-b border-line pb-24 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.8fr)] lg:items-end">
          <div>
            <p className="mb-6 text-sm uppercase tracking-[0.28em] text-white/45">Dark editorial relaunch</p>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-7xl lg:text-[6.5rem]">
              I build internet products people actually use.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              Ronald ships fast, keeps costs lean, and turns niche pain points into useful tools, local directories, and agent workflows.
            </p>
          </div>
          <div className="rounded-3xl border border-line bg-white/[0.03] p-6 shadow-soft">
            <div className="grid grid-cols-2 gap-6 text-sm text-white/60">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">Focus</p>
                <p className="mt-2 text-base text-white">Finance tools, AI products, SEO sites</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">Style</p>
                <p className="mt-2 text-base text-white">Fast shipping, plain English, no fluff</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">Current stack</p>
                <p className="mt-2 text-base text-white">Next.js, Tailwind, Vercel, Supabase</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">Availability</p>
                <p className="mt-2 text-base text-white">Open to sharp collaborations</p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="py-24">
          <div className="mb-10 flex items-end justify-between gap-6 border-b border-line pb-5">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-white/45">Selected work</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Products already in the wild</h2>
            </div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line">
            {products.map(([name, description, href]) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className="grid gap-4 bg-ink px-6 py-7 transition hover:bg-white/[0.03] sm:grid-cols-[minmax(0,280px)_1fr_auto] sm:items-center">
                <h3 className="text-lg font-medium text-white">{name}</h3>
                <p className="text-sm leading-7 text-white/60">{description}</p>
                <span className="text-sm text-white/45">Visit ↗</span>
              </a>
            ))}
          </div>
        </section>

        <section id="network" className="grid gap-10 border-y border-line py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-white/45">Sports network</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">A local SEO cluster built city by city.</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line">
            {network.map(([name, href]) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between bg-ink px-6 py-5 text-sm text-white/65 transition hover:bg-white/[0.03] hover:text-white">
                <span>{name}</span>
                <span>Open ↗</span>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="py-24">
          <div className="mb-10">
            <p className="text-sm uppercase tracking-[0.28em] text-white/45">Agent tooling</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Skills and systems for OpenClaw.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map(([name, href]) => (
              <a key={name} href={href} target="_blank" rel="noreferrer" className="rounded-3xl border border-line bg-white/[0.03] p-6 transition hover:-translate-y-0.5 hover:bg-white/[0.05]">
                <p className="text-lg font-medium text-white">{name}</p>
                <p className="mt-3 text-sm leading-7 text-white/60">Practical workflow tooling, built from repeated real use.</p>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="rounded-[2rem] border border-line bg-white/[0.03] px-6 py-10 sm:px-8 sm:py-12">
          <p className="text-sm uppercase tracking-[0.28em] text-white/45">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Available for sharp internet projects.</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/65">
            Best place to reach Ronald is GitHub or Buy Me a Coffee. Substack is where the longer writing lives.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/70">
            <a href="https://github.com/whooshinglander" target="_blank" rel="noreferrer" className="rounded-full border border-line px-4 py-2 transition hover:bg-white hover:text-black">GitHub</a>
            <a href="https://buymeacoffee.com/WhooshingLander" target="_blank" rel="noreferrer" className="rounded-full border border-line px-4 py-2 transition hover:bg-white hover:text-black">Buy Me a Coffee</a>
            <a href="https://substack.com/@whooshinglander" target="_blank" rel="noreferrer" className="rounded-full border border-line px-4 py-2 transition hover:bg-white hover:text-black">Substack</a>
          </div>
        </section>
      </div>
    </main>
  );
}
