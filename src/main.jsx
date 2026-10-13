import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import { animate, stagger } from 'animejs';
import {
  ArrowDownRight, ArrowUpRight, Award, CheckCircle2,
  ChevronRight, Download, ExternalLink, Mail, MapPin,
  MessageSquare, Send, ShieldCheck
} from 'lucide-react';
import './styles.css';

// Components
import MatrixRain from './components/MatrixRain';
import BootLoader from './components/BootLoader';
import Navbar from './components/Navbar';
import WireCube from './components/WireCube';
import Section from './components/Section';
import AnimatedNumber from './components/AnimatedNumber';
import TypeLoop from './components/TypeLoop';
import TerminalHeader from './components/TerminalHeader';
import BinaryLoader from './components/BinaryLoader';

// Data
import { projects, skillGroups, certifications } from './data/portfolioData';

function App() {
  const [loading, setLoading] = useState(true);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [formStatus, setFormStatus] = useState('');

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, []);

  useEffect(() => {
    animate('.hero-name .letter', {
      opacity: [0, 1],
      translateY: [16, 0],
      delay: stagger(38),
      duration: 650,
      ease: 'outExpo',
      autoplay: !loading
    });
  }, [loading]);

  const submit = async (e) => {
    e.preventDefault();
    setFormStatus('TRANSMITTING SECURE DATA...');
    const data = new FormData(e.currentTarget);
    const object = Object.fromEntries(data.entries());
    object.access_key = "6019ba4f-d463-48b4-a054-7c0bf6a6ca42";
    object.subject = `Portfolio Contact from ${object.name}`;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(object)
      });
      const result = await response.json();
      if (result.success) {
        setFormStatus('TRANSMISSION SUCCESSFUL — THANK YOU!');
        e.target.reset();
      } else {
        setFormStatus('TRANSMISSION FAILED. PLEASE EMAIL mustafamoin061@gmail.com DIRECTLY.');
      }
    } catch (error) {
      setFormStatus('TRANSMISSION ERROR. PLEASE EMAIL mustafamoin061@gmail.com DIRECTLY.');
    }
  };

  return (
    <>
      <div className="cursor" style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }} />
      {loading && <BootLoader done={() => setLoading(false)} />}
      <MatrixRain />
      <div className="ambient-grid" />
      {!loading && <Navbar />}

      <main>
        {/* Home/Hero Section */}
        <section id="home" className="hero">
          <div className="hero-copy">
            <motion.p className="system-label" initial={{ opacity: 0 }} animate={{ opacity: loading ? 0 : 1 }}>
              [ SYSTEM ONLINE / KARACHI, PK ]
            </motion.p>
            <h1 className="hero-name" aria-label="Mustafa Moin">
              {'MUSTAFA MOIN'.split('').map((char, i) => (
                <span className="letter" key={i}>
                  {char === ' ' ? '\u00a0' : char}
                </span>
              ))}
            </h1>
            <div className="role-line">
              <span>&gt; </span>
              <TypeLoop />
            </div>
            <p className="hero-summary">
              BS Computer Science student specializing in SOC operations, network traffic monitoring, threat detection, packet analysis, and phishing detection.
            </p>
            <div className="hero-meta">
              <span>
                <MapPin size={15} /> Karachi, Pakistan
              </span>
              <a href="mailto:mustafamoin061@gmail.com">
                <Mail size={15} /> mustafamoin061@gmail.com
              </a>
            </div>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View Projects <ArrowDownRight size={17} />
              </a>
              <a className="button ghost" href="/Mustafa Moin CV.pdf" download>
                Download Resume <Download size={16} />
              </a>
            </div>
          </div>
          <div className="hero-art">
            <WireCube />
            <div className="hero-stamp">
              <ShieldCheck />
              <span>
                THREAT
                <br />
                AWARE
              </span>
            </div>
          </div>
          <div className="scroll-hint">
            SCROLL TO EXPLORE <ChevronRight size={14} />
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats">
          <AnimatedNumber value={5} suffix="+" label="Projects shipped" />
          <AnimatedNumber value={5} label="Certifications" />
          <AnimatedNumber value={1} suffix=" yr" label="Hands-on security focus" />
        </section>

        {/* About Section */}
        <Section id="about" index="1" eyebrow="PROFILE" title="Built for the signal in the noise.">
          <div className="about-layout">
            <motion.div
              className="terminal-window about-terminal"
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <TerminalHeader title="profile@mustafa:~" />
              <div className="terminal-content">
                <p>
                  <span className="prompt">$</span> cat about.txt
                </p>
                <p className="terminal-paragraph">
                  BS Computer Science student based in Karachi, focused on SOC operations, network traffic monitoring, threat detection, packet analysis, and phishing detection. Hands-on with Python, Scapy, Flask, BeautifulSoup, Kali Linux, Cisco Packet Tracer, React Native, Expo, and Supabase. Cisco CyberOps certified, seeking an entry-level cybersecurity/SOC role.
                </p>
                <p>
                  <span className="prompt">$</span> <span className="cursor-blink">_</span>
                </p>
              </div>
            </motion.div>
            <motion.div
              className="education-card"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="eyebrow">EDUCATION</span>
              <h3>Indus University</h3>
              <p>BS Computer Science</p>
              <strong>
                8th Semester <em>— Ongoing</em>
              </strong>
              <div className="education-icon">
                <Award />
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" index="2" eyebrow="FIELD NOTES" title="Learning by tracing the attack surface.">
          <div className="experience-strip">
            <span>2025</span>
            <i />
            <span>SOHO NETWORK DESIGN</span>
            <i />
            <span>2026</span>
            <i />
            <span>SOC &amp; SECURITY PROJECTS</span>
          </div>
          <p className="section-note">
            A focused project record across network visibility, phishing indicators, local endpoint signals, and applied full-stack development.
          </p>
        </Section>

        {/* Projects Section */}
        <Section id="projects" index="3" eyebrow="SELECTED WORK" title="Projects with a defensive point of view.">
          <div className="project-grid">
            {projects.map((project, index) => {
              const ProjectIcon = project.icon;
              return (
                <motion.article
                  className="project-card"
                  key={project.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{ y: -7, rotateX: 2, rotateY: index % 2 ? -1 : 1 }}
                >
                  <div className="card-top">
                    <ProjectIcon />
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>
                        <CheckCircle2 size={14} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                 
                </motion.article>
              );
            })}
          </div>
        </Section>

        {/* Skills Section */}
        <Section id="skills" index="4" eyebrow="CAPABILITIES" title="Security is a practice, not a checkbox.">
          <div className="skills-layout">
            <div className="skill-groups">
              {skillGroups.map((group, i) => (
                <motion.div
                  className="skill-group"
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <h3>{group.title}</h3>
                  <div className="tag-cloud">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
            <BinaryLoader />
          </div>
        </Section>

        {/* Certifications Section */}
        <Section id="certifications" index="5" eyebrow="CREDENTIALS" title="Signals of commitment.">
          <div className="cert-grid">
            {certifications.map(([year, title, provider], i) => (
              <motion.article
                className="cert-card"
                key={title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <div>
                  <Award />
                  <span>{year}</span>
                </div>
                <h3>{title}</h3>
                <p>{provider}</p>
                <i>VERIFIED PATHWAY</i>
              </motion.article>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section id="contact" index="6" eyebrow="OPEN CHANNEL" title="Let’s make the internet a little safer.">
          <div className="contact-layout">
            <motion.div
              className="contact-details"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p>
                Available for entry-level cybersecurity and SOC opportunities, collaborative projects, and conversations about detection engineering.
              </p>
              <a href="mailto:mustafamoin061@gmail.com">
                <Mail />
                mustafamoin061@gmail.com
              </a>
              <a href="https://wa.me/923433083198" target="_blank" rel="noreferrer">
                <MessageSquare />
                +92 343 3083198 (WhatsApp)
              </a>
              <a href="https://linkedin.com/in/mustafamoin" target="_blank" rel="noreferrer">
                <b className="social-letter">in</b>
                linkedin.com/in/mustafamoin <ExternalLink size={14} />
              </a>
              <span>
                <MapPin />
                Karachi, Pakistan
              </span>
            </motion.div>
            <motion.form
              className="contact-form"
              onSubmit={submit}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <TerminalHeader title="CONTACT_CHANNEL" />
              <div className="form-inner">
                <label>
                  <input name="name" required placeholder=" " />
                  <span>NAME</span>
                </label>
                <label>
                  <input type="email" name="email" required placeholder=" " />
                  <span>EMAIL</span>
                </label>
                <label>
                  <textarea name="message" required placeholder=" " />
                  <span>MESSAGE</span>
                </label>
                <button className="button primary" type="submit">
                  SEND_TRANSMISSION <Send size={16} />
                </button>
                {formStatus && <p className="form-status">{formStatus}</p>}
              </div>
            </motion.form>
          </div>
        </Section>
      </main>

      <footer>
        <div className="footer-prompt">
          mustafa@soc:~$ <span className="cursor-blink">_</span>
        </div>
        <div>
          <a href="https://linkedin.com/in/mustafamoin" aria-label="LinkedIn">
            <b className="social-letter">in</b>
          </a>
          <a href="mailto:mustafamoin061@gmail.com" aria-label="Email">
            <Mail />
          </a>
          
        </div>
        <p>© {new Date().getFullYear()} Mustafa Moin.</p>
      </footer>
      <div className="scanlines" />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
