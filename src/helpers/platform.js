
import MobileDetect from 'mobile-detect';

function getPlatform() {
  if (!__IS_SERVER__) {
    const { userAgent } = navigator;
    return new MobileDetect(userAgent);
  }
  return false;
}

export default getPlatform;
