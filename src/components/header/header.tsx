import { useTranslation } from 'react-i18next';

export default function Header() {
  const { i18n } = useTranslation();

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <strong>Documento</strong>
      <div>
        <button onClick={() => i18n.changeLanguage('fr')}>Fr</button>
        <button onClick={() => i18n.changeLanguage('en')}>En</button>
      </div>
    </header>
  );
}