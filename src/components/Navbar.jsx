import React, { useState, useEffect } from 'react';
import { Download, X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  'Home',
  'About',
  'Experience',
  'Projects',
  'Skills',
  'Certifications',
  'Contact'
];

const drawerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.2, ease: 'easeIn' }
  }
};

const linkVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.28, ease: 'easeOut' }
  })
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener
  useEffect(() => {
    const listener = () => setScrolled(window.scrollY > 25);
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header className={`nav-wrap ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
        <a className="brand" href="#home" onClick={closeMenu}>
          <img src="/fav-icon.png" alt="Mustafa Moin Logo" className="brand-logo" />
        </a>

        {/* Desktop nav */}
        <nav className="desktop-nav">
          {NAV_LINKS.map((link) => (
            <a href={`#${link.toLowerCase()}`} key={link}>
              {link}
            </a>
          ))}
        </nav>

        <a className="nav-resume desktop-resume" href="/Mustafa Moin CV.pdf" download>
          <Download size={14} /> Download Resume
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="menu-button"
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Full-screen Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-modal="true"
            role="dialog"
          >
            {/* Ambient grid texture for visual polish */}
            <div className="drawer-grid" aria-hidden="true" />

            <nav className="drawer-nav">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="drawer-link"
                  onClick={closeMenu}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <span className="drawer-link-index">0{i + 1}</span>
                  {link}
                </motion.a>
              ))}
            </nav>

            <motion.a
              className="drawer-resume-btn"
              href="/Mustafa Moin CV.pdf"
              download
              onClick={closeMenu}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, transition: { delay: NAV_LINKS.length * 0.06 + 0.1, duration: 0.3 } }}
            >
              <Download size={16} /> Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
