"use client";
import { useState, useEffect } from "react";
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../i18n/LanguageContext';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .navbar {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .navbar.scrolled {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
        }
        
        .nav-inner {
          max-width: 1280px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-sans);
          font-size: 20px;
          font-weight: 700;
          color: var(--foreground);
          letter-spacing: -0.5px;
        }
        
        .nav-logo-mark {
          width: 36px; 
          height: 36px;
          background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
          border-radius: var(--radius-lg);
          display: flex; 
          align-items: center; 
          justify-content: center;
          color: var(--white);
          font-size: 16px;
          font-family: var(--font-mono);
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(13,148,136,0.25);
        }
        
        .nav-center {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px;
          background: var(--muted);
          border-radius: var(--radius-full);
        }
        
        .nav-link {
          font-size: 14px;
          font-weight: 500;
          color: var(--muted-foreground);
          padding: 8px 16px;
          border-radius: var(--radius-full);
          transition: all 0.2s ease;
          border: none;
          background: transparent;
        }
        
        .nav-link:hover {
          color: var(--foreground);
          background: var(--white);
          box-shadow: var(--shadow-sm);
        }
        
        .nav-link.active {
          color: var(--foreground);
          background: var(--white);
          box-shadow: var(--shadow-sm);
        }
        
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .status-indicator {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background: var(--primary-pale);
          border: 1px solid var(--primary-muted);
          border-radius: var(--radius-full);
          font-size: 12px;
          font-weight: 500;
          color: var(--primary);
        }
        
        .status-dot {
          width: 6px; 
          height: 6px;
          border-radius: 50%;
          background: var(--primary);
          animation: pulse-ring 2s ease-in-out infinite;
        }
        
        .btn-nav-ghost {
          font-size: 14px;
          font-weight: 500;
          color: var(--foreground);
          background: transparent;
          border: none;
          padding: 8px 16px;
          border-radius: var(--radius-md);
          transition: all 0.2s ease;
        }
        
        .btn-nav-ghost:hover {
          background: var(--muted);
        }
        
        .btn-nav-primary {
          font-size: 14px;
          font-weight: 600;
          color: var(--white);
          background: var(--foreground);
          border: none;
          border-radius: var(--radius-md);
          padding: 10px 20px;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .btn-nav-primary:hover {
          background: var(--gray-800);
          transform: translateY(-1px);
          box-shadow: var(--shadow-md);
        }

        /* Mobile menu button */
        .menu-toggle {
          display: none;
          background: none;
          border: none;
          padding: 8px;
          cursor: pointer;
        }
        
        .menu-icon {
          width: 24px;
          height: 2px;
          background: var(--foreground);
          position: relative;
          transition: all 0.3s ease;
        }
        
        .menu-icon::before,
        .menu-icon::after {
          content: '';
          position: absolute;
          width: 24px;
          height: 2px;
          background: var(--foreground);
          transition: all 0.3s ease;
        }
        
        .menu-icon::before { top: -7px; }
        .menu-icon::after { bottom: -7px; }

        @media (max-width: 1024px) {
          .nav-center { display: none; }
          .status-indicator { display: none; }
        }
        
        @media (max-width: 768px) {
          .navbar { padding: 0 20px; }
          .menu-toggle { display: block; }
          .nav-actions > *:not(.menu-toggle) { display: none; }
        }
      `}</style>

      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          {/* Logo */}
          <a href="/" className="nav-logo">
            <div className="nav-logo-mark">P</div>
            <span>Proj<span style={{ color: 'var(--primary)' }}>AI</span></span>
          </a>

          {/* Center Nav Links */}
          <div className="nav-center">
            {[t.nav.features, t.nav.workflow, t.nav.modules, t.nav.docs].map((link, index) => (
              <button 
                key={link} 
                className={`nav-link ${index === 0 ? 'active' : ''}`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="nav-actions">
            <div className="status-indicator">
              <div className="status-dot" />
              <span>{t.nav.status}</span>
            </div>
            <LanguageToggle />
            <button className="btn-nav-ghost">{t.nav.login}</button>
            <button className="btn-nav-primary">
              {t.nav.start}
            </button>
            <button className="menu-toggle">
              <div className="menu-icon" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
