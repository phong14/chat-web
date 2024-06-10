import { Metadata } from 'next';
import { setBrowserTabTitle } from '../../../../core/utils';
import Folder from './Folder';

export const metadata: Metadata = {
  title: setBrowserTabTitle('Folder'),
};

const ChatPage = () => {
  return <Folder />;
};

export default ChatPage;
