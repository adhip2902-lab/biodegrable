import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowDown, ArrowUpRight, CheckCircle2, FlaskConical, Leaf, Mail, MapPin, Menu, Send, X } from 'lucide-react';
import './styles.css';

const layers = [
  {
    key: 'outer',
    number: '01',
    label: 'Responsive outer layer',
    title: 'Protected in the hand.',
    text: 'A sacrificial surface is designed to hold the system together during useful life, then weaken with moisture, contact and abrasion.',
    material: 'Trigger layer',
  },
  {
    key: 'core',
    number: '02',
    label: 'Biodegradable core',
    title: 'Built from familiar biology.',
    text: 'A starch and cellulose-based matrix gives the concept its biodegradable foundation. The binder and modifier are tuned through testing.',
    material: 'Starch + cellulose',
  },
  {
    key: 'inner',
    number: '03',
    label: 'Natural-fiber reinforcement',
    title: 'Strength with a grain.',
    text: 'A fine lignocellulosic fiber layer, such as bamboo, is intended to add stiffness and structural stability without a persistent plastic skin.',
    material: 'Natural fiber',
  },
];

const lifecycle = [
  ['Protect', 'A stable outer surface supports the job it was made to do.'],
  ['Use', 'Strength, flexibility and shelf stability are designed into the formulation.'],
  ['Expose', 'Moisture, oxygen, microbes and abrasion gradually reach the core.'],
  ['Biodegrade', 'Biodegradable components break down under appropriate conditions.'],
];

const team = [
  ['CEO', 'Durva Bharuka', 'Vision and direction'],
  ['CFO', 'Laksh Agarwal', 'Finance and long-term value'],
  ['COO', 'Shurya Kumar', 'Operations and execution'],
  ['CTO', 'Adhip Choudhury', 'Technology and material systems'],
  ['CMO', 'Tiara Chotlani', 'Brand and market connection'],
];

function LegacySinglePageApp() {
  const [activeLayer, setActiveLayer] = useState('core');
  const [menuOpen, setMenuOpen] = useState(false);
  const active = layers.find((layer) => layer.key === activeLayer);

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" aria-label="Layered Life home">
          <span className="brand-mark"><span /></span>
          <span>Layered Life</span>
        </a>
        <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#architecture" onClick={() => setMenuOpen(false)}>Architecture</a>
          <a href="#lifecycle" onClick={() => setMenuOpen(false)}>Lifecycle</a>
          <a href="#research" onClick={() => setMenuOpen(false)}>Research</a>
          <a className="nav-cta" href="mailto:hello@layeredlife.example" onClick={() => setMenuOpen(false)}>Start a conversation <ArrowUpRight size={15} /></a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="eyebrow-dot" /> A protected material concept
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}>
            Packaging with a <em>second act.</em>
          </motion.h1>
          <motion.p className="hero-text" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}>
            A multilayer biodegradable composite designed to stay useful first, then let the environment in.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
            <a className="button button-dark" href="#architecture">Explore the material <ArrowDown size={17} /></a>
            <a className="text-link" href="#research">View the research boundary <ArrowUpRight size={15} /></a>
          </motion.div>
        </div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.18 }}>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="material-disc">
            <div className="disc-layer disc-outer" />
            <div className="disc-layer disc-core" />
            <div className="disc-layer disc-inner" />
            <div className="disc-center" />
          </div>
          <span className="art-label label-top">responsive layer</span>
          <span className="art-label label-bottom">starch / cellulose core</span>
          <span className="art-note">01—03 <span>material stack</span></span>
        </motion.div>
      </section>

      <section className="intro-band">
        <div className="shell intro-grid">
          <p className="section-kicker">The idea</p>
          <p className="intro-statement">Most packaging asks one material to do everything. This concept gives each layer a job — and gives the end of use a timing of its own.</p>
          <div className="intro-aside"><FlaskConical size={18} /><span>Research-led<br />material design</span></div>
        </div>
      </section>

      <section className="architecture shell" id="architecture">
        <div className="section-heading">
          <div><p className="section-kicker">The architecture</p><h2>Three layers.<br />One deliberate handoff.</h2></div>
          <p className="section-summary">Select a layer to see the role it plays in the material system.</p>
        </div>
        <div className="architecture-grid">
          <div className="layer-visual" aria-label="Interactive material layer visual">
            <div className="stack-shadow" />
            {layers.map((layer, index) => (
              <motion.button key={layer.key} className={`stack-slice slice-${index} ${activeLayer === layer.key ? 'active' : ''}`} onClick={() => setActiveLayer(layer.key)} aria-label={`Show ${layer.label}`}>
                <span>{layer.number}</span>
              </motion.button>
            ))}
            <div className="visual-caption"><span>cross-section</span><span>not to scale</span></div>
          </div>
          <div className="layer-content">
            <div className="layer-tabs" role="tablist">
              {layers.map((layer) => <button key={layer.key} className={activeLayer === layer.key ? 'selected' : ''} onClick={() => setActiveLayer(layer.key)} role="tab" aria-selected={activeLayer === layer.key}>{layer.number}</button>)}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={active.key} className="layer-detail" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
                <p className="detail-label">{active.label}</p>
                <h3>{active.title}</h3>
                <p className="detail-text">{active.text}</p>
                <div className="material-tag"><span /> {active.material}</div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="lifecycle" id="lifecycle">
        <div className="shell">
          <div className="section-heading lifecycle-heading"><div><p className="section-kicker">The lifecycle</p><h2>Useful first.<br />Open later.</h2></div><p className="section-summary">A simple sequence that turns disposal from an afterthought into part of the design.</p></div>
          <div className="lifecycle-track">
            {lifecycle.map(([title, copy], index) => <motion.div className="lifecycle-step" key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: index * 0.1 }}><div className="step-line"><span>0{index + 1}</span><i /></div><h3>{title}</h3><p>{copy}</p></motion.div>)}
          </div>
        </div>
      </section>

      <section className="research shell" id="research">
        <div className="research-card">
          <div className="research-icon"><Leaf size={25} /></div>
          <div><p className="section-kicker">What comes next</p><h2>Good material ideas<br />earn their proof.</h2></div>
          <div className="research-copy"><p>The concept is promising, but the final formulation, layer behaviour and degradation claims belong in the lab. We are investigating strength, water resistance, shelf stability and controlled breakdown — with no shortcut to evidence.</p><a className="button button-light" href="mailto:hello@layeredlife.example">Talk about the next test <ArrowUpRight size={17} /></a></div>
        </div>
      </section>

      <footer className="footer shell"><a className="brand" href="#top"><span className="brand-mark"><span /></span><span>Layered Life</span></a><p>Biodegradable multilayer packaging concept</p><p className="footer-note">Concept / R&amp;D stage · Claims subject to testing</p></footer>
    </main>
  );
}

function SiteNav({ menuOpen, setMenuOpen }) {
  const links = [['Home', '/'], ['Architecture', '/architecture'], ['Lifecycle', '/lifecycle'], ['About us', '/about'], ['Research', '/research'], ['Contact', '/contact']];

  const goTo = (event, path) => {
    event.preventDefault();
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    setMenuOpen(false);
  };

  return (
    <nav className="nav shell">
      <a className="brand" href="/" onClick={(event) => goTo(event, '/')} aria-label="Layered Life home">
        <span className="brand-mark"><span /></span><span>Layered Life</span>
      </a>
      <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
        {links.map(([label, path]) => <a key={path} href={path} onClick={(event) => goTo(event, path)}>{label}</a>)}
        <a className="nav-cta" href="mailto:hello@layeredlife.example" onClick={() => setMenuOpen(false)}>Start a conversation <ArrowUpRight size={15} /></a>
      </div>
    </nav>
  );
}

function PageIntro({ eyebrow, title, summary }) {
  return <section className="page-intro shell"><p className="section-kicker">{eyebrow}</p><h1>{title}</h1><p className="page-summary">{summary}</p></section>;
}

function ArchitecturePage() {
  const [activeLayer, setActiveLayer] = useState('core');
  const active = layers.find((layer) => layer.key === activeLayer);

  return <>
    <PageIntro eyebrow="The architecture" title={<>Three layers.<br /><em>One deliberate handoff.</em></>} summary="A material system where every layer has a role: protect during use, then open the way to environmental exposure." />
    <section className="architecture shell page-section">
      <div className="architecture-grid">
      <div className="layer-visual" aria-label="Interactive material layer visual"><div className="stack-shadow" />{layers.map((layer, index) => <motion.button key={layer.key} className={`stack-slice slice-${index} ${activeLayer === layer.key ? 'active' : ''}`} onClick={() => setActiveLayer(layer.key)} aria-label={`Show ${layer.label}`}><span>{layer.number}</span></motion.button>)}<div className="visual-caption"><span>cross-section</span><span>not to scale</span></div></div>
        <div className="layer-content"><div className="layer-tabs" role="tablist">{layers.map((layer) => <button key={layer.key} className={activeLayer === layer.key ? 'selected' : ''} onClick={() => setActiveLayer(layer.key)} role="tab" aria-selected={activeLayer === layer.key}>{layer.number}</button>)}</div><AnimatePresence mode="wait"><motion.div key={active.key} className="layer-detail" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}><p className="detail-label">{active.label}</p><h3>{active.title}</h3><p className="detail-text">{active.text}</p><div className="material-tag"><span /> {active.material}</div></motion.div></AnimatePresence></div>
      </div>
    </section>
    <section className="intro-band"><div className="shell intro-grid"><p className="section-kicker">The material brief</p><p className="intro-statement">The strongest part of the idea is not one ingredient. It is the controlled-lifecycle design.</p><div className="intro-aside"><FlaskConical size={18} /><span>Three jobs<br />one system</span></div></div></section>
  </>;
}

function LifecyclePage() {
  return <><PageIntro eyebrow="The lifecycle" title={<>Useful first.<br /><em>Open later.</em></>} summary="A simple sequence that turns disposal from an afterthought into part of the design." /><section className="lifecycle page-section"><div className="shell"><div className="lifecycle-track">{lifecycle.map(([title, copy], index) => <motion.div className="lifecycle-step" key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ delay: index * 0.1 }}><div className="step-line"><span>0{index + 1}</span><i /></div><h3>{title}</h3><p>{copy}</p></motion.div>)}</div></div></section><section className="shell lifecycle-note"><Leaf size={22} /><p>Exposure is the handoff. The protective layer is designed to weaken, allowing moisture and microorganisms to reach the biodegradable core under appropriate conditions.</p></section></>;
}

function ResearchPage() {
  return <><PageIntro eyebrow="The research boundary" title={<>Good material ideas<br /><em>earn their proof.</em></>} summary="The concept is designed to be tested honestly: strength first, then the right kind of breakdown." /><section className="research shell page-section"><div className="research-card"><div className="research-icon"><Leaf size={25} /></div><div><p className="section-kicker">What comes next</p><h2>From promising<br />to proven.</h2></div><div className="research-copy"><p>We are investigating formulation ratios, tensile strength, tear resistance, water behaviour, shelf stability and controlled degradation. Food contact, aquatic use and ecological benefit claims require additional testing before they can be made.</p><a className="button button-light" href="mailto:hello@layeredlife.example">Talk about the next test <ArrowUpRight size={17} /></a></div></div></section><section className="shell test-grid"><div><p className="section-kicker">Testing focus</p><h2>Questions worth<br />answering.</h2></div><div className="test-list"><p><span>01</span> Does it hold up during use?</p><p><span>02</span> Does the trigger layer respond at the right time?</p><p><span>03</span> Does the breakdown leave safe, testable residues?</p></div></section></>;
}

function AboutPage() {
  return <><PageIntro eyebrow="About us" title={<>A small team with<br /><em>a layered ambition.</em></>} summary="We are developing a more considered relationship between packaging, performance and the moment after use." /><section className="about-story shell page-section"><div><p className="section-kicker">Why we exist</p><h2>Useful packaging<br />should know when<br />to let go.</h2></div><div className="about-copy"><p>Layered Life is a materials-led venture exploring biodegradable packaging that is strong enough for its useful life and designed to become more environmentally accessible after disposal.</p><p>Our starting point is a simple observation: packaging has two jobs that are usually treated as opposites. It must protect what is inside, then stop getting in the way of natural processes. A responsive multilayer design gives those jobs a sequence.</p><div className="about-principles"><div><span>01</span><strong>Performance with purpose</strong><p>We design around the real forces a package meets: moisture, handling, storage and transport.</p></div><div><span>02</span><strong>Evidence over easy claims</strong><p>Every future claim about strength, compostability or safety belongs to a test plan.</p></div></div></div></section><section className="team-section"><div className="shell"><div className="section-heading"><div><p className="section-kicker">The team</p><h2>Different lenses.<br />One material future.</h2></div><p className="section-summary">A founding team bringing strategy, science, operations and storytelling into the same room.</p></div><div className="team-grid">{team.map(([role, name, focus], index) => <motion.article className="team-member" key={name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.08 }}><div className="team-avatar">{name.split(' ').map((part) => part[0]).join('')}</div><div className="team-meta"><span>{role}</span><h3>{name}</h3><p>{focus}</p></div><ArrowUpRight size={16} /></motion.article>)}</div></div></section><section className="about-cta shell"><p className="section-kicker">Build with us</p><h2>The next layer is<br /><em>still being written.</em></h2><a className="button button-dark" href="mailto:hello@layeredlife.example">Connect with the team <ArrowUpRight size={17} /></a></section></>;
}

function ContactPage() {
  const [sent, setSent] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return <><PageIntro eyebrow="Contact us" title={<>Let’s give<br /><em>good ideas room.</em></>} summary="Whether you want to test the material, explore a packaging format or help us take the next step, we would like to hear from you." /><section className="contact-layout shell page-section"><div className="contact-aside"><div className="contact-signal"><span /><span /><span /></div><h2>Bring us<br />a question.</h2><p>We are open to conversations with makers, researchers, manufacturers and people who simply want packaging to have a more thoughtful afterlife.</p><div className="contact-details"><a href="mailto:hello@layeredlife.example"><Mail size={17} /> hello@layeredlife.example</a><p><MapPin size={17} /> Building the next layer, wherever the work takes us.</p></div></div><div className="contact-form-wrap">{sent ? <motion.div className="contact-success" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}><CheckCircle2 size={28} /><p className="section-kicker">Message ready</p><h2>Thank you for<br /><em>starting the conversation.</em></h2><p>Your note has been captured for the next step. We will be in touch through the details you shared.</p><button className="button button-dark" onClick={() => setSent(false)}>Send another note <Send size={16} /></button></motion.div> : <form className="contact-form" onSubmit={submitForm}><div className="form-heading"><p className="section-kicker">Start here</p><p>Tell us what you are curious about.</p></div><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>What brings you here?<select name="topic" defaultValue="partnership"><option value="partnership">A potential partnership</option><option value="research">Research or testing</option><option value="manufacturing">Manufacturing and scale-up</option><option value="other">Something else</option></select></label><label>Message<textarea required name="message" placeholder="A few words about the idea..."></textarea></label><button className="button button-dark" type="submit">Send your note <Send size={16} /></button></form>}</div></section></>;
}

function HomePage({ navigate }) {
  const reduceMotion = useReducedMotion();
  return <><section className="hero shell" id="top"><div className="hero-copy"><motion.div className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}><span className="eyebrow-dot" /> A protected material concept</motion.div><motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}>Packaging with a <em>second act.</em></motion.h1><motion.p className="hero-text" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.18 }}>A multilayer biodegradable composite designed to stay useful first, then let the environment in.</motion.p><motion.div className="hero-proof" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}><span>01</span><p><strong>Designed in layers.</strong> Performance now, environmental access later.</p></motion.div><motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}><a className="button button-dark" href="/architecture" onClick={(event) => navigate(event, '/architecture')}>Explore the material <ArrowDown size={17} /></a><a className="text-link" href="/research" onClick={(event) => navigate(event, '/research')}>View the research boundary <ArrowUpRight size={15} /></a></motion.div></div><motion.div className="hero-art" initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.18 }}><div className="specimen-header"><span>Material specimen / 01</span><span>Cross-section</span></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /><motion.div className="hero-scan-line" animate={reduceMotion ? { opacity: 0 } : { y: [0, 370], opacity: [0, .9, 0] }} transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 1.2, ease: 'linear' }} /><div className="material-disc"><div className="disc-layer disc-outer" /><div className="disc-layer disc-core" /><div className="disc-layer disc-inner" /><div className="disc-center" /></div><div className="hero-layer-label label-outer"><span>01</span><strong>Responsive skin</strong><small>protects during use</small></div><div className="hero-layer-label label-core"><span>02</span><strong>Biodegradable core</strong><small>starch + cellulose</small></div><div className="hero-layer-label label-inner"><span>03</span><strong>Fiber reinforcement</strong><small>strength with a grain</small></div><div className="hero-flow"><span>PROTECT</span><i /><span>EXPOSE</span><i /><span>RETURN</span></div><span className="art-note">01—03 <span>material stack</span></span></motion.div></section><section className="intro-band"><div className="shell intro-grid"><p className="section-kicker">The idea</p><p className="intro-statement">Most packaging asks one material to do everything. This concept gives each layer a job — and gives the end of use a timing of its own.</p><div className="intro-aside"><FlaskConical size={18} /><span>Research-led<br />material design</span></div></div></section><section className="home-links shell"><a href="/architecture" onClick={(event) => navigate(event, '/architecture')}><span>01</span><strong>Explore the architecture</strong><ArrowUpRight size={17} /></a><a href="/lifecycle" onClick={(event) => navigate(event, '/lifecycle')}><span>02</span><strong>Follow the lifecycle</strong><ArrowUpRight size={17} /></a><a href="/research" onClick={(event) => navigate(event, '/research')}><span>03</span><strong>See what must be proven</strong><ArrowUpRight size={17} /></a></section></>;
}

function HomeContent({ navigate }) {
  const applications = [
    ['Shopping + produce bags', 'A flexible everyday format where strength, shelf life and end-of-use behaviour all matter.'],
    ['Wrapping films', 'A lightweight surface for selected applications, with the formulation tuned to its specific job.'],
    ['Takeaway + inserts', 'A route toward trays, containers and protective inserts that need structure without a permanent plastic skin.'],
  ];

  return <section className="home-content"><div className="shell"><div className="section-heading home-content-heading"><div><p className="section-kicker">Where it can go</p><h2>One material idea.<br /><em>Many useful formats.</em></h2></div><p className="section-summary">Different applications will need different formulations. The architecture stays constant: protect, use, expose, biodegrade.</p></div><div className="application-grid">{applications.map(([title, copy], index) => <motion.article className="application-card" key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ delay: index * 0.1 }}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p><a href="/architecture" onClick={(event) => navigate(event, '/architecture')}>See the material logic <ArrowUpRight size={15} /></a></motion.article>)}</div><div className="home-belief"><Leaf size={23} /><p>We are not replacing one disposable object with another. We are designing a material whose useful life and environmental life are part of the same story.</p></div></div></section>;
}

function HomeEvidence({ navigate }) {
  const focus = [
    ['A practical brief', 'Strong and stable enough for its intended use, without losing sight of its end-of-life behaviour.'],
    ['A controlled handoff', 'The outer layer protects the core first, then environmental exposure becomes part of the design.'],
    ['A research boundary', 'Strength, water response, shelf life and degradation must all be established through testing.'],
  ];

  return <section className="home-evidence"><div className="shell"><div className="evidence-heading"><p className="section-kicker">What we are solving for</p><h2>Not just biodegradable.<br /><em>Better timed.</em></h2><p>Material innovation lives in the balance between performance today and responsibility after use.</p></div><div className="evidence-grid">{focus.map(([title, copy], index) => <motion.div className="evidence-item" key={title} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ delay: index * 0.1 }}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></motion.div>)}</div><div className="evidence-bottom"><p><strong>Current stage</strong> Concept / R&amp;D</p><a className="text-link" href="/research" onClick={(event) => navigate(event, '/research')}>See the questions we are testing <ArrowUpRight size={15} /></a></div></div></section>;
}

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updatePath = () => { setPath(window.location.pathname); window.scrollTo(0, 0); };
    window.addEventListener('popstate', updatePath);
    return () => window.removeEventListener('popstate', updatePath);
  }, []);

  const navigate = (event, nextPath) => { event.preventDefault(); window.history.pushState({}, '', nextPath); window.dispatchEvent(new PopStateEvent('popstate')); setMenuOpen(false); };
  const page = path === '/architecture' ? <ArchitecturePage /> : path === '/lifecycle' ? <LifecyclePage /> : path === '/about' ? <AboutPage /> : path === '/research' ? <ResearchPage /> : path === '/contact' ? <ContactPage /> : <><HomePage navigate={navigate} /><HomeContent navigate={navigate} /><HomeEvidence navigate={navigate} /></>;

  return <main><SiteNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} /><AnimatePresence mode="wait"><motion.div key={path} className="route-view" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.42, ease: [0.23, 1, 0.32, 1] }}>{page}</motion.div></AnimatePresence><footer className="footer"><div className="shell footer-field"><div className="footer-topline"><span>Layered Life / 2026</span><span>Material systems for a lighter afterlife</span></div><div className="footer-hero-row"><div className="footer-claim"><p className="footer-heading">Continue the work</p><h2>Make the next<br /><em>layer matter.</em></h2><a className="footer-contact-link" href="/contact" onClick={(event) => navigate(event, '/contact')}>Start a conversation <ArrowUpRight size={15} /></a></div><div className="footer-material-stamp"><div className="footer-stamp-ring"><span>LL</span></div><p>PROTECT<br />USE<br />EXPOSE<br />RETURN</p></div></div><div className="footer-nav-row"><div className="footer-brand"><a className="brand" href="/" onClick={(event) => navigate(event, '/')}><span className="brand-mark"><span /></span><span>Layered Life</span></a><p>Biodegradable multilayer packaging concept.</p></div><div className="footer-column"><p className="footer-heading">Explore</p><a href="/" onClick={(event) => navigate(event, '/')}>Home</a><a href="/architecture" onClick={(event) => navigate(event, '/architecture')}>Architecture</a><a href="/lifecycle" onClick={(event) => navigate(event, '/lifecycle')}>Lifecycle</a><a href="/about" onClick={(event) => navigate(event, '/about')}>About us</a></div><div className="footer-column"><p className="footer-heading">Connect</p><a href="/research" onClick={(event) => navigate(event, '/research')}>Research notes</a><a href="/contact" onClick={(event) => navigate(event, '/contact')}>Contact the team</a><a href="mailto:hello@layeredlife.example">hello@layeredlife.example</a></div></div><div className="footer-bottom"><span>Concept / R&amp;D stage</span><span>Claims subject to testing</span><span>Designed in layers.</span></div></div></footer></main>;
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);