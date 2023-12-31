import { useTranslation } from 'react-i18next';
import MainCard from '@/shared/ui/MainCard.tsx';

type ItemType = {
  icon: React.ReactNode,
  title: string;
};

interface PossibilitiesProps {
  items: ItemType[];
}

const Possibilities: React.FC<PossibilitiesProps> = ({ items }) => {
  const { t } = useTranslation();

  return (
    <section className="pb-10 sm:pb-16 md:pb-[11rem]">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
        {t('home.possibilitiesTitle')}{' '}
        <span className="text-[#888a8b]">
          {t('home.possibilitiesSubtitle')}
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <MainCard key={i} icon={item.icon} title={item.title} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Possibilities;
