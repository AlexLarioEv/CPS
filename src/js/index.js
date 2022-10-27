import '../scss/style.scss'
import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

const container = document.querySelector('.container')
const aside = document.querySelector('.aside')
const asideMessage = document.querySelector('.aside-connection')
const asideTel = document.querySelector('.aside-tel')
const description = document.querySelector('.description')
const burgerOpen = container.querySelector('.button__burger')
const burgerClouse = aside.querySelector('.button__close')
const messageOpen_1 = container.querySelector('.button__message')
const messageOpen_2 = aside.querySelector('.button__message')
const messageClouse = asideMessage.querySelector(
  '.aside-connection__button-clouse'
)
const telOpen_1 = container.querySelector('.button__tel')
const telOpen_2 = aside.querySelector('.button__tel')
const telClouse = asideTel.querySelector('.aside-tel__button-clouse')
const buttonText = container.querySelector('.section__read-more')
const firstSelector = 'slider-brands'
const secondSelector = 'slider-tech'
const thirdSlider = 'slider-price'
const selectors = [firstSelector, secondSelector, thirdSlider]
const button = document.getElementsByClassName('section-slide__read-more')
let swiper = {}

function findSelector(selector) {
  let swipers = []
  for (let i = 0; i < selector.length; i++) {
    swipers.push(document.querySelector(`.${selector[i]}`))
  }
  return swipers
}
function createSwiper() {
  for (let i = 0; i < findSelector(selectors).length; i++) {
    swiper[i] = new Swiper(findSelector(selectors)[i], {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      slidesPerView: 1.2,
      spaceBetween: 16
    })
  }
}
function correctDestroy() {
  for (let i = 0; i < findSelector(selectors).length; i++) {
    const list = findSelector(selectors)[i].children[0]
    swiper[i].destroy(true, true)
    findSelector(selectors)[i].className = selectors[i]
    list.removeAttribute('id')
    list.className = `${selectors[i]}__list`
    findSelector(selectors)[i].querySelector('.swiper-pagination').hidden = true

    for (let j = 0; j < list.children.length; j++) {
      list.children.item(j).className = ''
    }
  }
}
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
    } else if (
      asideMessage.className === 'aside-connection aside-connection--visible' &&
      evt.value !== true
    ) {
      evt.preventDefault()
      evt.value = true
      asideMessage.classList.toggle('aside-connection--visible')
      container.classList.toggle('container--opacity')
    } else if (
      asideTel.className === 'aside-tel aside-tel--visible' &&
      evt.value !== true
    ) {
      evt.preventDefault()
      evt.value = true
      asideTel.classList.toggle('aside-tel--visible')
      container.classList.toggle('container--opacity')
    }
  },
  true
)
burgerClouse.addEventListener('click', function (evt) {
  evt.preventDefault()
  aside.classList.toggle('aside--visible')
  container.classList.toggle('container--opacity')
})

burgerOpen.addEventListener('click', function (evt) {
  evt.preventDefault()
  if (evt.value !== true) {
    evt.value = true
    aside.classList.toggle('aside--visible')
    container.classList.toggle('container--opacity')
  }
})
buttonText.addEventListener('click', function (evt) {
  evt.preventDefault()
  description.classList.toggle('description--full')
  buttonText.classList.toggle('section__read-more--activ')
})

messageOpen_1.addEventListener('click', function (evt) {
  evt.preventDefault()
  if (evt.value !== true) {
    evt.value = true
    asideMessage.classList.toggle('aside-connection--visible')
    container.classList.toggle('container--opacity')
  }
})
messageOpen_2.addEventListener('click', function (evt) {
  evt.preventDefault()
  if (asideMessage.className === 'aside-connection aside-connection--visible') {
    asideMessage.classList.toggle('aside-connection--visible')
    container.classList.toggle('container--opacity')
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
  }
})
messageClouse.addEventListener('click', function (evt) {
  evt.preventDefault()
  evt.value = true
  asideMessage.classList.toggle('aside-connection--visible')
  container.classList.toggle('container--opacity')
})
telOpen_1.addEventListener('click', function (evt) {
  evt.preventDefault()
  if (evt.value !== true) {
    evt.value = true
    asideTel.classList.toggle('aside-tel--visible')
    container.classList.toggle('container--opacity')
  }
})
telOpen_2.addEventListener('click', function (evt) {
  evt.preventDefault()
  if (asideTel.className === 'aside-tel aside-tel--visible') {
    asideTel.classList.toggle('aside-tel--visible')
    container.classList.toggle('container--opacity')
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
  }
})
telClouse.addEventListener('click', function (evt) {
  evt.preventDefault()
  evt.value = true
  asideTel.classList.toggle('aside-tel--visible')
  container.classList.toggle('container--opacity')
})
