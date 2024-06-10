import { Metadata } from 'next';
import { setBrowserTabTitle } from '@/core/utils';
import Chat from './Chat';

export const metadata: Metadata = {
  title: setBrowserTabTitle('Chat'),
};

const ChatPage = () => {
  return <Chat />;
};

export default ChatPage;
