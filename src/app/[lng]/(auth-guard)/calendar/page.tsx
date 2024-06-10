import { Metadata } from 'next';
import { setBrowserTabTitle } from '../../../../core/utils';
import Calendar from './Calendar';

export const metadata: Metadata = {
  title: setBrowserTabTitle('Calendar'),
};

const ChatPage = () => {
  return <Calendar />;
};

export default ChatPage;
