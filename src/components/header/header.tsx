import { useTranslation } from "react-i18next";

export default function Header() {
  const { i18n } = useTranslation();

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      height: '80px',
      backgroundColor: 'var(--color-bg)', 
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 2rem',
      borderBottom: '1px solid #ccc',
      backdropFilter: 'blur(8px)' 
    }}>
      <strong>Documento</strong>
      <div>
        <button onClick={() => i18n.changeLanguage('fr')}>Fr</button>
        <button onClick={() => i18n.changeLanguage('en')}>En</button>
      </div>
    </header>
  );
}