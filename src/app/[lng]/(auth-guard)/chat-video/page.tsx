import { Metadata } from 'next';
import { setBrowserTabTitle } from '../../../../core/utils';
import VideoChat from './VideoChat';

export const metadata: Metadata = {
  title: setBrowserTabTitle('Video Chat'),
};

const ChatPage = () => {
  return <VideoChat />;
};

export default ChatPage;
