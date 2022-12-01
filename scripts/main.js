const ariaExpandedAttr = `aria-expanded`

const btnThreeEl = document.querySelector(`[data-element="btn-three"]`)

btnThreeEl.addEventListener(`click`, (e) => {
  const expandedAttr = btnThreeEl.getAttribute(ariaExpandedAttr)
  if (expandedAttr && expandedAttr === `true`) {
    btnThreeEl.setAttribute(ariaExpandedAttr, `false`)
  } else {
    btnThreeEl.setAttribute(ariaExpandedAttr, `true`)
  }
})
