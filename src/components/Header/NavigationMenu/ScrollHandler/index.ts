export default class ScrollHandler {
  #setPosition = (position: (event: Event) => void) => {
    window.onscroll = position;
  };

  disable = () => {
    const scrollTop = document.documentElement.scrollTop;
    const isDisabled = Boolean(this.#setPosition(() => window.scrollTo(0, scrollTop)))
    const bgDisabled = document.body.classList.add("disabled-scrollbar")

    return isDisabled && bgDisabled
  };

  enable = () => {
    const isEnabled = Boolean(this.#setPosition(() => null))
    const bgEnabled = document.body.classList.remove("disabled-scrollbar")

    return isEnabled && bgEnabled;
  };
}
