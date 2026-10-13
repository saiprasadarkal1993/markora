// Scroll to a section on the home page, or go home first when on another page.
export function goToSection(e, href) {
  const target = window.location.pathname === '/' ? document.querySelector(href) : null
  if (target) {
    e.preventDefault()
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', href)
  } else {
    e.preventDefault()
    window.location.href = '/' + href
  }
}
