import { Metadata } from 'next';
import { setBrowserTabTitle } from '../../../../core/utils';
import Cloud from './Cloud';

export const metadata: Metadata = {
  title: setBrowserTabTitle('Cloud'),
};

const ChatPage = () => {
  return <Cloud />;
};

export default ChatPage;
