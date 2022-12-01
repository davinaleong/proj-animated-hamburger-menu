const dataStateAttr = `data-state`
const ariaExpandedAttr = `aria-expanded`

// const btnThreeEl = document.querySelector(`[data-element="btn-three"]`)

// btnThreeEl.addEventListener(`click`, (e) => {
//   const expandedAttr = btnThreeEl.getAttribute(ariaExpandedAttr)
//   if (expandedAttr && expandedAttr === `true`) {
//     btnThreeEl.setAttribute(ariaExpandedAttr, `false`)
//   } else {
//     btnThreeEl.setAttribute(ariaExpandedAttr, `true`)
//   }
// })

const btnEls = document.querySelectorAll(`[data-element="btn"]`)
btnEls.forEach((btn) => {
  btn.addEventListener(`click`, (e) => {
    const currentState = btn.getAttribute(dataStateAttr)
    if (!currentState || currentState === "closed") {
      btn.setAttribute("data-state", "opened")
      btn.setAttribute("aria-expanded", "true")
    } else {
      btn.setAttribute("data-state", "closed")
      btn.setAttribute("aria-expanded", "false")
    }
  })
})
