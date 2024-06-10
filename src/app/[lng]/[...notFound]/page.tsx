import { Metadata } from 'next';
import { setBrowserTabTitle } from '@/core/utils';
import NotFound from './NotFound';

export const metadata: Metadata = {
  title: setBrowserTabTitle('Not Found'),
};

const Page = async () => {
  return <NotFound />;
};

export default Page;
