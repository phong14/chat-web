import { Metadata } from 'next';
import { setBrowserTabTitle } from '../../../../core/utils';
import Setting from './Setting';

export const metadata: Metadata = {
  title: setBrowserTabTitle('Setting'),
};

const ChatPage = () => {
  return <Setting />;
};

export default ChatPage;
