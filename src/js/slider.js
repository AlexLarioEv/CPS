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
