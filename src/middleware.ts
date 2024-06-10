import { withAuthMiddleware } from './core/middlewares/auth';
import { chain } from './core/middlewares/chain';
import { withMultiLanguage } from './core/middlewares/languages';

export default chain([withMultiLanguage, withAuthMiddleware]);

export const config = {
  matcher: ['/((?!api|graphql|_next/static|_next/image|assets|manifest|favicon.png|sw.js).*)'],
};
