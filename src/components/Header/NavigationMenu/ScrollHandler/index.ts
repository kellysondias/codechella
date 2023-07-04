export default class ScrollHandler {
  setPosition = (position: (event: Event) => void) => {
    window.onscroll = position;
  };

  disable = () => {
    const scrollTop = document.documentElement.scrollTop;
    return this.setPosition(() => window.scrollTo(0, scrollTop));
  };

  enable = () => {
    return this.setPosition(() => null);
  };
}
