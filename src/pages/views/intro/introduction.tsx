import { useTranslation } from 'react-i18next';

export default function Introduction() {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>
    </div>
  );
}
