import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Home.css'; 

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="home-container">

      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-logo">D</div>
          <h1 className="hero-title">Documento</h1>
          <p className="hero-subtitle">{t('home.tagline')}</p>
          <a href="/installation" className="cta-button">{t('home.getStarted')}</a>
        </motion.div>
      </section>


      <section className="tech-section">
        <h2>{t('home.techTitle')}</h2>
        <div className="tech-grid">
          <div className="tech-card">
            <img src="/vite.svg" alt="Vite" />
            <h3>Vite</h3>
            <p>{t('home.viteDesc')}</p>
          </div>
          <div className="tech-card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" />
            <h3>React</h3>
            <p>{t('home.reactDesc')}</p>
          </div>
          <div className="tech-card">
            <img src="https://raw.githubusercontent.com/i18next/branding/master/i18next-01.svg" alt="i18next" />
            <h3>i18next</h3>
            <p>{t('home.i18nDesc')}</p>
          </div>
        </div>
      </section>


      <section className="team-section">
        <h2>{t('home.teamTitle')}</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="https://avatars.githubusercontent.com/u/16978131?v=4" alt="Dev 1" />
            <h4>GRARE Thomas</h4>
            <p>Chef de Projet</p>
            <a href="https://github.com/saithomas-gbz">GitHub</a>
          </div>
          <div className="team-card">
            <img src="https://avatars.githubusercontent.com/u/92850354?v=4" alt="Dev 2" />
            <h4>Remy</h4>
            <p>Backend</p>
            <a href="https://github.com/sofia">GitHub</a>
          </div>
          <div className="team-card">
            <img src="https://avatars.githubusercontent.com/u/99355964?s=400&u=3cea93bd9c544cae8f1b9ebea202f98045351284&v=4" alt="Dev 2" />
            <h4>Yanis</h4>
            <p>Frontend</p>
            <a href="https://github.com/Tarumii">GitHub</a>
          </div>
        </div>
      </section>
    </div>
  );
}
