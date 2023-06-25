function checkDesktop() {
  const mediaQuery = window.matchMedia("(pointer: fine)");
  return mediaQuery.matches;
}

const isDesktop = checkDesktop();

export default isDesktop;
