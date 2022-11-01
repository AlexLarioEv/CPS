import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])
import { selectors, swiper } from './data.js'

const functions = {
  findSelector: function (selector) {
    let swipers = []
    for (let i = 0; i < selector.length; i++) {
      swipers.push(document.querySelector(`.${selector[i]}`))
    }
    return swipers
  },
  createSwiper: function () {
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
  },
  correctDestroy: function () {
    for (let i = 0; i < findSelector(selectors).length; i++) {
      const list = findSelector(selectors)[i].children[0]
      swiper[i].destroy(true, true)
      findSelector(selectors)[i].className = selectors[i]
      list.removeAttribute('id')
      list.className = `${selectors[i]}__list`
      findSelector(selectors)[i].querySelector(
        '.swiper-pagination'
      ).hidden = true
      for (let j = 0; j < list.children.length; j++) {
        list.children.item(j).className = ''
      }
    }
  }
}

export const findSelector = functions.findSelector
export const createSwiper = functions.createSwiper
export const correctDestroy = functions.correctDestroy
