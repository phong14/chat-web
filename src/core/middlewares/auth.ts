import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { NextRequestWithAuth } from 'next-auth/middleware';
import { languages } from '@/app/i18n/settings';
import { routeAuth, routeFeatures, routeSettings } from '../routes';
import { CustomMiddleware } from './chain';

const protectedPaths = [
  routeFeatures.chat(),
  routeFeatures.videoChat(),
  routeFeatures.contacts(),
  routeFeatures.folders(),
  routeFeatures.calendar(),
  routeFeatures.favorite(),
  routeSettings.root(),
  routeFeatures.cloud(),
];

const protectedPathRegex = new RegExp(
  `^(/(${languages.join('|')}))?(${protectedPaths.join('|')})(/.*)?$`,
);

export function withAuthMiddleware(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const response = NextResponse.next();
    const pathName = request.nextUrl.pathname;

    // ignore when it's RESTFUL API and GraphQL
    if (pathName.startsWith('/graphql') || pathName.startsWith('/api')) {
      return middleware(request, event, response);
    }

    const token = await getToken({ req: request });

    (request as NextRequestWithAuth).nextauth = { token };

    const matchProtectedPaths = protectedPathRegex.test(pathName);

    if (!token && matchProtectedPaths) {
      const redirectUrl = `${
        request.nextUrl.origin
      }${routeAuth.login()}?redirectUrl=${encodeURIComponent(pathName)}`;
      return NextResponse.redirect(redirectUrl);
    }

    return middleware(request, event, response);
  };
}
