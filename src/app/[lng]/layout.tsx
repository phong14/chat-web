import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Viewport } from 'next';
import { getServerSession, Session } from 'next-auth';
import { authOptions } from '@/core/lib/auth';
import ThemeCustomization from '@/core/lib/mui';
import SessionProvider from '@/features/authentication/components/SessionProvider';
import Providers from '../providers';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const RootLayout = async ({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) => {
  const session = await getServerSession(authOptions);
  return (
    <html lang={lng}>
      <body suppressHydrationWarning>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeCustomization>
            <SessionProvider session={session as Session}>
              <Providers>{children}</Providers>
            </SessionProvider>
          </ThemeCustomization>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};
export default RootLayout;
