function isMobile(url) {
  const mobileReg = /^\/mobile\S+/;
  return mobileReg.test(url);
}

exports.isMobile = isMobile;
