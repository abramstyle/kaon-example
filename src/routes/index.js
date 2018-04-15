import MobileDetect from 'mobile-detect';
import desktopRoutes from './desktop';
import mobileRoutes from './mobile';

function getRoutes(ctx) {
  let md = null;
  if (__IS_SERVER__) {
    ({ state: { md } } = ctx);
  } else {
    const { userAgent } = navigator;
    md = new MobileDetect(userAgent);
  }
  return md.mobile() ? mobileRoutes : desktopRoutes;
  return desktopRoutes;
}

export default getRoutes;
