import { useTranslation } from 'react-i18next';

export default function Introduction() {
  const { t } = useTranslation();

  return (
    <section style={{ padding: '2rem', maxWidth: '800px' }}>
      <h1 style={{ fontSize: '2rem', color: '#9F5FCE' }}>{t('title')}</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>{t('description')}</p>
    </section>
  );
}
