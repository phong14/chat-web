import { Metadata } from 'next';
import { setBrowserTabTitle } from '../../../../core/utils';
import Favorite from './Favorite';

export const metadata: Metadata = {
  title: setBrowserTabTitle('Favorite'),
};

const ChatPage = () => {
  return <Favorite />;
};

export default ChatPage;
