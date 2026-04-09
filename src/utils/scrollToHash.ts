export function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, '')
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    return
  }

  // Fallback: update location hash so the browser can scroll if supported.
  if (hash.startsWith('#')) window.location.hash = hash
}

