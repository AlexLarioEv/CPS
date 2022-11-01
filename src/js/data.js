const value = {
  body: document.querySelector('.body'),
  container: document.querySelector('.container'),
  aside: document.querySelector('.aside'),
  asideMessage: document.querySelector('.aside-connection'),
  asideTel: document.querySelector('.aside-tel'),
  description: document.querySelector('.description'),
  firstSelector: 'slider-brands',
  secondSelector: 'slider-tech',
  thirdSlider: 'slider-price',
  selectors: ['slider-brands', 'slider-tech', 'slider-price'],
  button: document.getElementsByClassName('section-slide__read-more'),
  swiper: {}
}

export const {
  body,
  container,
  aside,
  asideMessage,
  asideTel,
  description,
  firstSelector,
  secondSelector,
  thirdSlider,
  selectors,
  button
} = value
const containerElement = {
  burgerOpen: container.querySelector('.button__burger'),
  messageOpen_1: container.querySelector('.button__message'),
  telOpen_1: container.querySelector('.button__tel'),
  buttonText: container.querySelector('.section__read-more')
}

const asideElement = {
  burgerClouse: aside.querySelector('.button__close'),
  messageOpen_2: aside.querySelector('.button__message'),
  telOpen_2: aside.querySelector('.button__tel')
}
export let swiper = value.swiper
export const { burgerOpen, messageOpen_1, telOpen_1, buttonText } =
  containerElement
export const { burgerClouse, messageOpen_2, telOpen_2 } = asideElement
export const messageClouse = asideMessage.querySelector(
  '.aside-connection__button-clouse'
)
export const telClouse = asideTel.querySelector('.aside-tel__button-clouse')
