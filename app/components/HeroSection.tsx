"use client";
import { useLanguage } from '../i18n/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <>
      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          padding: 140px 24px 80px;
          background: var(--background);
        }
        
        /* Subtle grid background */
        .hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 100%);
        }
        
        /* Gradient orb */
        .hero-orb {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 600px;
          background: radial-gradient(ellipse at center, var(--primary-pale) 0%, transparent 60%);
          pointer-events: none;
          opacity: 0.8;
        }
        
        .hero-content {
          max-width: 900px;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-full);
          padding: 6px 6px 6px 16px;
          font-size: 13px;
          font-weight: 500;
          color: var(--muted-foreground);
          margin-bottom: 32px;
          box-shadow: var(--shadow-sm);
          animation: fadeUp 0.6s ease forwards;
        }
        
        .badge-new {
          background: var(--foreground);
          color: var(--white);
          border-radius: var(--radius-full);
          padding: 4px 12px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.5px;
        }
        
        .hero-title {
          font-family: var(--font-sans);
          font-size: clamp(48px, 8vw, 80px);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -2px;
          color: var(--foreground);
          margin-bottom: 24px;
          animation: fadeUp 0.6s ease 0.1s forwards;
          opacity: 0;
        }
        
        .hero-title .highlight {
          color: var(--primary);
          position: relative;
        }
        
        .hero-desc {
          color: var(--muted-foreground);
          font-size: 18px;
          line-height: 1.7;
          max-width: 600px;
          margin: 0 auto 40px;
          font-weight: 400;
          animation: fadeUp 0.6s ease 0.2s forwards;
          opacity: 0;
        }
        
        .hero-actions {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 64px;
          animation: fadeUp 0.6s ease 0.3s forwards;
          opacity: 0;
        }
        
        .btn-hero-primary {
          background: var(--foreground);
          color: var(--white);
          border: none;
          border-radius: var(--radius-lg);
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 600;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .btn-hero-primary:hover {
          background: var(--gray-800);
          transform: translateY(-2px);
          box-shadow: var(--shadow-xl);
        }
        
        .btn-hero-secondary {
          background: var(--white);
          color: var(--foreground);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 16px 32px;
          font-size: 16px;
          font-weight: 500;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .btn-hero-secondary:hover {
          border-color: var(--gray-300);
          background: var(--muted);
        }
        
        .play-icon {
          width: 20px;
          height: 20px;
          background: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .play-icon::after {
          content: '';
          width: 0;
          height: 0;
          border-left: 6px solid white;
          border-top: 4px solid transparent;
          border-bottom: 4px solid transparent;
          margin-left: 2px;
        }

        /* Dashboard Preview Card */
        .dashboard-preview {
          width: 100%;
          max-width: 1000px;
          animation: fadeUp 0.6s ease 0.4s forwards;
          opacity: 0;
          perspective: 1000px;
        }
        
        .dashboard-card {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-2xl);
          box-shadow: var(--shadow-2xl);
          overflow: hidden;
          transform: rotateX(5deg);
          transform-origin: center top;
          transition: transform 0.4s ease;
        }
        
        .dashboard-card:hover {
          transform: rotateX(0deg);
        }
        
        .dashboard-topbar {
          background: var(--muted);
          border-bottom: 1px solid var(--border);
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .win-btn {
          width: 12px; 
          height: 12px;
          border-radius: 50%;
        }
        
        .dashboard-body {
          padding: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 16px;
        }
        
        .dash-header {
          grid-column: 1 / -1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-light);
          margin-bottom: 8px;
        }
        
        .dash-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--foreground);
        }
        
        .dash-sprint {
          font-size: 11px;
          font-family: var(--font-mono);
          background: var(--primary-pale);
          color: var(--primary);
          border: 1px solid var(--primary-muted);
          border-radius: var(--radius-full);
          padding: 4px 12px;
          font-weight: 600;
        }
        
        .dash-stat {
          background: var(--muted);
          border-radius: var(--radius-lg);
          padding: 16px;
          transition: all 0.2s ease;
        }
        
        .dash-stat:hover {
          background: var(--gray-100);
        }
        
        .dash-stat-val {
          font-size: 28px;
          font-weight: 700;
          color: var(--foreground);
          font-family: var(--font-sans);
          letter-spacing: -1px;
        }
        
        .dash-stat-lbl {
          font-size: 11px;
          color: var(--muted-foreground);
          margin-top: 4px;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .kanban-preview {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 12px;
          margin-top: 8px;
        }
        
        .kanban-col {
          border-radius: var(--radius-lg);
          padding: 12px;
        }
        
        .kanban-col-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 10px;
          font-family: var(--font-mono);
        }
        
        .kanban-ticket {
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          padding: 10px 12px;
          font-size: 12px;
          color: var(--foreground);
          margin-bottom: 8px;
          font-weight: 500;
          box-shadow: var(--shadow-xs);
        }
        
        .ai-bar {
          grid-column: 1 / -1;
          background: linear-gradient(135deg, var(--primary-pale), rgba(22,163,74,0.08));
          border: 1px solid var(--primary-muted);
          border-radius: var(--radius-lg);
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 8px;
        }
        
        .ai-icon {
          width: 36px; 
          height: 36px;
          background: var(--primary);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
          flex-shrink: 0;
        }
        
        .ai-text {
          flex: 1;
        }
        
        .ai-label { 
          font-size: 13px; 
          font-weight: 600; 
          color: var(--foreground); 
        }
        
        .ai-sub { 
          font-size: 11px; 
          color: var(--muted-foreground); 
          margin-top: 2px; 
        }
        
        .ai-confirm {
          background: var(--primary);
          color: white;
          border: none;
          border-radius: var(--radius-md);
          padding: 8px 16px;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .ai-confirm:hover {
          background: var(--primary-light);
        }

        /* Floating elements */
        .floating-badge {
          position: absolute;
          background: var(--white);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 10px 16px;
          font-size: 13px;
          font-weight: 600;
          box-shadow: var(--shadow-lg);
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-badge.top-right {
          top: -20px;
          right: -20px;
          color: var(--primary);
          border-color: var(--primary-muted);
          background: var(--primary-pale);
        }
        
        .floating-badge.bottom-left {
          bottom: -20px;
          left: -20px;
          animation-delay: 1s;
        }
        
        @media (max-width: 768px) {
          .hero { padding: 120px 20px 60px; }
          .hero-title { letter-spacing: -1px; }
          .dashboard-body { grid-template-columns: 1fr; padding: 16px; }
          .kanban-preview { grid-template-columns: 1fr; }
          .floating-badge { display: none; }
          .dashboard-card { transform: none; }
        }
      `}</style>

      <section className="hero">
        <div className="hero-orb" />
        
        <div className="hero-content">
          <div className="hero-badge">
            <span>{t.hero.badge}</span>
            <span className="badge-new">{t.hero.new}</span>
          </div>

          <h1 className="hero-title text-balance">
            {t.hero.title1}<br />
            {t.hero.title2}<span className="highlight">{t.hero.title3}</span><br />
            {t.hero.title4}
          </h1>

          <p className="hero-desc text-pretty">
            {t.hero.desc}
          </p>

          <div className="hero-actions">
            <button className="btn-hero-primary">
              {t.hero.cta1}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-hero-secondary">
              <span className="play-icon" />
              {t.hero.cta2}
            </button>
          </div>
        </div>

        <div className="dashboard-preview">
          <div style={{ position: 'relative' }}>
            <div className="dashboard-card">
              <div className="dashboard-topbar">
                <div className="win-btn" style={{ background: "#EF4444" }} />
                <div className="win-btn" style={{ background: "#F59E0B" }} />
                <div className="win-btn" style={{ background: "#22C55E" }} />
                <span style={{ marginLeft: 12, fontSize: 12, color: "var(--muted-foreground)", fontFamily: "var(--font-mono)" }}>
                  projAI — Dashboard
                </span>
              </div>
              <div className="dashboard-body">
                <div className="dash-header">
                  <div className="dash-title">Sprint 2 - Semaine 3</div>
                  <div className="dash-sprint">ACTIF</div>
                </div>

                {[
                  { v: "24", l: "TICKETS" },
                  { v: "17", l: "COMPLETED" },
                  { v: "3", l: "RISKS" },
                ].map(s => (
                  <div key={s.l} className="dash-stat">
                    <div className="dash-stat-val">{s.v}</div>
                    <div className="dash-stat-lbl">{s.l}</div>
                  </div>
                ))}

                <div className="kanban-preview">
                  {[
                    { label: "TO DO", bg: "var(--muted)", border: "var(--border)", labelColor: "var(--muted-foreground)", items: ["CDC Form", "Auth UI"] },
                    { label: "IN PROGRESS", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.2)", labelColor: "var(--accent-violet)", items: ["Gemini API", "Kanban"] },
                    { label: "DONE", bg: "var(--primary-pale)", border: "var(--primary-muted)", labelColor: "var(--primary)", items: ["JWT setup", "DB schema"] },
                  ].map(col => (
                    <div key={col.label} className="kanban-col" style={{ background: col.bg, border: `1px solid ${col.border}` }}>
                      <div className="kanban-col-label" style={{ color: col.labelColor }}>{col.label}</div>
                      {col.items.map(item => (
                        <div key={item} className="kanban-ticket">{item}</div>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="ai-bar">
                  <div className="ai-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div className="ai-text">
                    <div className="ai-label">Analyse IA terminee</div>
                    <div className="ai-sub">14 taches - Complexite Moyenne - 3 risques</div>
                  </div>
                  <button className="ai-confirm">Confirmer</button>
                </div>
              </div>
            </div>

            <div className="floating-badge top-right">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              Gemini AI actif
            </div>
            <div className="floating-badge bottom-left">
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>docker-compose up</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
