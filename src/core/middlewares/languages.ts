import acceptLanguage from 'accept-language';
import { type NextFetchEvent, type NextRequest, NextResponse } from 'next/server';
import { cookieName, fallbackLng, languages } from '@/app/i18n/settings';
import { CustomMiddleware } from './chain';

acceptLanguage.languages(languages);

export function withMultiLanguage(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const response = NextResponse.next();
    const pathName = request.nextUrl.pathname;

    // ignore when it's RESTFUL API and GraphQL
    if (pathName.startsWith('/graphql') || pathName.startsWith('/api')) {
      return middleware(request, event, response);
    }

    let lng = fallbackLng;
    if (request.cookies.has(cookieName)) {
      lng = acceptLanguage.get(request.cookies.get(cookieName)?.value) || fallbackLng;
    } else if (request.headers.has('Accept-Language')) {
      lng = acceptLanguage.get(request.headers.get('Accept-Language')) || fallbackLng;
    }

    if (pathName.startsWith('/verify')) {
      const url = new URL(request.url);
      const searchParamUrl = decodeURIComponent(url.search);
      return NextResponse.redirect(`${url.origin}/${lng}${url.pathname}${searchParamUrl}`);
    }

    // Redirect if lng in path is not supported
    if (!languages.some(loc => pathName.startsWith(`/${loc}`)) && !pathName.startsWith('/_next')) {
      const path = request.nextUrl.search
        ? `${request.nextUrl.pathname}/${request.nextUrl.search}`
        : request.nextUrl.pathname;
      return NextResponse.redirect(new URL(`/${lng}${path}`, request.url));
    }

    if (request.headers.has('referer')) {
      const refererUrl = new URL(request.headers.get('referer') || '');
      const lngInReferer = languages.find(l => refererUrl.pathname.startsWith(`/${l}`));
      if (lngInReferer) {
        response.cookies.set(cookieName, lngInReferer);
      }
      return response;
    }

    return middleware(request, event, response);
  };
}
