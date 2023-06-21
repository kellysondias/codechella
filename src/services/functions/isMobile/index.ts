function checkMobile() {
  const mediaQuery = window.matchMedia("(pointer: coarse)");
  return mediaQuery.matches;
}

const isMobile = checkMobile();

export default isMobile;
