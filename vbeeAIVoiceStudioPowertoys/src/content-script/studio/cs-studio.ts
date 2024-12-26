import { cs_syncBodyClassname } from './shared'

console.info('content-script inject CSS into the Studio DOM')

const darkTheme_StyleId = `${__NAME__}-style`

function createDocumentStyle(elementId: string) {
  const style = document.createElement('style', {
    is: 'custom-style',
  })
  style.id = elementId
  style.setAttribute('data-style-version', __VERSION__)
  style.setAttribute('data-style-source', __NAME__)

  return style
}

// Dynamically import the SCSS/CSS
import('src/content-script/studio/cs-studio.scss?inline').then((module) => {
  const style = createDocumentStyle(darkTheme_StyleId)
  style.textContent = module.default
  document.head.appendChild(style)
})

// Enable hot-reloading if in development mode
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    // On hot-reload, dynamically inject the updated styles into the iframe
    import('src/content-script/studio/cs-studio.scss?inline').then((module) => {
      const style = createDocumentStyle(darkTheme_StyleId)
      style.textContent = module.default
      document.head.appendChild(style)
    })
  })
}

console.debug('sync latest settings into the Studio DOM')
cs_syncBodyClassname()
;(async () => {})()
