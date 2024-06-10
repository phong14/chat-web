import { Metadata } from 'next';
import { setBrowserTabTitle } from '../../../../core/utils';
import Contact from './Contact';

export const metadata: Metadata = {
  title: setBrowserTabTitle('Contact'),
};

const ChatPage = () => {
  return <Contact />;
};

export default ChatPage;
