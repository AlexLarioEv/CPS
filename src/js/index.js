import '../scss/style.scss'
import {
  body,
  container,
  aside,
  asideMessage,
  asideTel,
  description,
  burgerOpen,
  burgerClouse,
  messageOpen_1,
  messageOpen_2,
  messageClouse,
  telOpen_1,
  telOpen_2,
  telClouse,
  buttonText,
  selectors,
  button,
  swiper
} from './data.js'

import { findSelector, createSwiper, correctDestroy } from './functions.js'

if (window.screen.width < 768 || window.innerWidth < 768) {
  createSwiper()
} else {
  createSwiper()
  correctDestroy()
}
window.addEventListener('resize', function () {
  if (window.screen.width >= 768 && window.innerWidth >= 768) {
    correctDestroy()
  } else {
    for (let i = 0; i < findSelector(selectors).length; i++) {
      const list = findSelector(selectors)[i].children[0]
      findSelector(selectors)[i].className = `${selectors[i]} swiper`
      list.className = `${selectors[i]}__list swiper-wrapper`
      findSelector(selectors)[i].querySelector(
        '.swiper-pagination'
      ).hidden = false

      for (let i = 0; i < list.children.length; i++) {
        list.children.item(i).className = 'swiper-slide'
      }
      for (let i = 0; i < findSelector(selectors).length; i++) {
        swiper[i].destroy(true, true)
      }
      createSwiper()
    }
  }
  for (let i = 0; i < button.length; i++) {
    button[i].classList.remove('read-more--active')
    button[i].textContent = 'Читать далее'
  }
})
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', function (evt) {
    evt.preventDefault()
    if (button[i].className === 'section-slide__read-more') {
      button[i].classList.toggle('section-slide__read-more--active')
      button[i].textContent = 'Скрыть'
      findSelector(selectors)[i].classList.toggle(`${selectors[i]}--full`)
    } else {
      button[i].classList.toggle('section-slide__read-more--active')
      button[i].textContent = 'Читать далее'
      findSelector(selectors)[i].classList.toggle(`${selectors[i]}--full`)
    }
  })
}
container.addEventListener(
  'click',
  function (evt) {
    if (aside.className === 'aside aside--visible' && evt.value !== true) {
      evt.preventDefault()
      evt.value = true
      aside.classList.toggle('aside--visible')
      container.classList.toggle('container--opacity')
      body.classList.toggle('body--hidden')
    } else if (
      asideMessage.className === 'aside-connection aside-connection--visible' &&
      evt.value !== true
    ) {
      evt.preventDefault()
      evt.value = true
      asideMessage.classList.toggle('aside-connection--visible')
      container.classList.toggle('container--opacity')
      body.classList.toggle('body--hidden')
    } else if (
      asideTel.className === 'aside-tel aside-tel--visible' &&
      evt.value !== true
    ) {
      evt.preventDefault()
      evt.value = true
      asideTel.classList.toggle('aside-tel--visible')
      container.classList.toggle('container--opacity')
      body.classList.toggle('body--hidden')
    }
  },
  true
)
burgerClouse.addEventListener('click', function (evt) {
  evt.preventDefault()
  aside.classList.toggle('aside--visible')
  container.classList.toggle('container--opacity')
  body.classList.toggle('body--hidden')
})

burgerOpen.addEventListener('click', function (evt) {
  evt.preventDefault()
  if (evt.value !== true) {
    evt.value = true
    aside.classList.toggle('aside--visible')
    container.classList.toggle('container--opacity')
    body.classList.toggle('body--hidden')
  }
})
buttonText.addEventListener('click', function (evt) {
  evt.preventDefault()
  description.classList.toggle('description--full')
  buttonText.classList.toggle('section__read-more--activ')
  body.classList.toggle('body--hidden')
})

messageOpen_1.addEventListener('click', function (evt) {
  evt.preventDefault()
  if (evt.value !== true) {
    evt.value = true
    asideMessage.classList.toggle('aside-connection--visible')
    container.classList.toggle('container--opacity')
    body.classList.toggle('body--hidden')
  }
})
messageOpen_2.addEventListener('click', function (evt) {
  evt.preventDefault()
  if (asideMessage.className === 'aside-connection aside-connection--visible') {
    asideMessage.classList.toggle('aside-connection--visible')
    container.classList.toggle('container--opacity')
    body.classList.toggle('body--hidden')
  } else if (
    container.className === 'container container--opacity' &&
    asideTel.className === 'aside-tel aside-tel--visible'
  ) {
    asideMessage.classList.toggle('aside-connection--visible')
    asideTel.classList.toggle('aside-tel--visible')
  } else if (container.className === 'container container--opacity') {
    evt.value = true
    asideMessage.classList.toggle('aside-connection--visible')
    aside.classList.toggle('aside--visible')
  } else if (evt.value !== true) {
    asideMessage.classList.toggle('aside-connection--visible')
    container.classList.toggle('container--opacity')
    body.classList.toggle('body--hidden')
  }
})
messageClouse.addEventListener('click', function (evt) {
  evt.preventDefault()
  evt.value = true
  asideMessage.classList.toggle('aside-connection--visible')
  container.classList.toggle('container--opacity')
  body.classList.toggle('body--hidden')
})
telOpen_1.addEventListener('click', function (evt) {
  evt.preventDefault()
  if (evt.value !== true) {
    evt.value = true
    asideTel.classList.toggle('aside-tel--visible')
    container.classList.toggle('container--opacity')
    body.classList.toggle('body--hidden')
  }
})
telOpen_2.addEventListener('click', function (evt) {
  evt.preventDefault()
  if (asideTel.className === 'aside-tel aside-tel--visible') {
    asideTel.classList.toggle('aside-tel--visible')
    container.classList.toggle('container--opacity')
    body.classList.toggle('body--hidden')
  } else if (
    container.className === 'container container--opacity' &&
    asideMessage.className === 'aside-connection aside-connection--visible'
  ) {
    asideMessage.classList.toggle('aside-connection--visible')
    asideTel.classList.toggle('aside-tel--visible')
  } else if (container.className === 'container container--opacity') {
    evt.value = true
    asideTel.classList.toggle('aside-tel--visible')
    aside.classList.toggle('aside--visible')
  } else if (evt.value !== true) {
    asideTel.classList.toggle('aside-tel--visible')
    container.classList.toggle('container--opacity')
    body.classList.toggle('body--hidden')
  }
})
telClouse.addEventListener('click', function (evt) {
  evt.preventDefault()
  evt.value = true
  asideTel.classList.toggle('aside-tel--visible')
  container.classList.toggle('container--opacity')
  body.classList.toggle('body--hidden')
})
