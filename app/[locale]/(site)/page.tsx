import { HomePage } from '@/components/home/HomePage';

export default async function HomeRoute({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return <HomePage locale={locale === 'en' ? 'en' : 'fr'} />;
}
