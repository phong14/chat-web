import { redirect } from 'next/navigation';
import { routeFeatures } from '@/core/routes';

const RootPage = () => {
  redirect(routeFeatures.chat());
};

export default RootPage;
