import isDesktop from "../../../../services/functions/isDesktop";

export default class ScrollHandler {
  private hideOverflow = document.body.classList.add("overflow-y-hidden");
  private showOverflow = document.body.classList.remove("overflow-y-hidden");

  #setPosition = (position: (event: Event) => void) => {
    window.onscroll = position;
  };

  disable = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (isDesktop) this.#setPosition(() => window.scrollTo(0, scrollTop));
    else this.hideOverflow;
    // return this.#setPosition(() => window.scrollTo(0, scrollTop));
  };

  enable = () => {
    if (isDesktop) this.#setPosition(() => null);
    else this.showOverflow;
  };
}
