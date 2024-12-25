console.info('content-script inject CSS into the Studio DOM')

const style = document.createElement('style', {
  is: 'custom-style',
})
style.setAttribute('data-style-version', __VERSION__)
style.setAttribute('data-style-source', __NAME__)

// Dynamically import the SCSS/CSS
import('src/content-script/studio/cs-studio.scss?inline').then((module) => {
  style.textContent = module.default
  document.head.appendChild(style)
})

// Enable hot-reloading if in development mode
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    // On hot-reload, dynamically inject the updated styles into the iframe
    import('src/content-script/studio/cs-studio.scss?inline').then((module) => {
      style.textContent = module.default
      document.head.appendChild(style)
    })
  })
}
