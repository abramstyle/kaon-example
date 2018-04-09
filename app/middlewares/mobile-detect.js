function detectMobile() {
  const MobileDetect = require('mobile-detect');
  const { isMobile } = require('../../utils');
  return async (ctx, next) => {
    const userAgent = ctx.request.headers['user-agent'];
    const md = new MobileDetect(userAgent);
    const { url } = ctx;

    ctx.state.md = md;
    const mobile = isMobile(url) || md.mobile();
    if (mobile) {
      ctx.state.basename = 'mobile';
      ctx.url = ctx.url.replace('/mobile', '');
    }
    // if is mobile but url is not mobile, then redirect to mobile
    if (md.mobile() && !isMobile(url)) {
      return ctx.redirect(`/mobile${url}`);
    }
    if (!md.mobile() && isMobile(url)) {
      return ctx.redirect(url.replace('/mobile', ''));
    }

    return next();
  };
}

module.exports = detectMobile;
