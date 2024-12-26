/*
shared functions (can be used in CS or extension pages executeScript()) in this file will be executed in the context of the current tab
*/

/** The body of this function will be executed as a content script inside the current tab */
function cs_updateBodyClassname(isDarkTheme: boolean, isFocusMode: boolean) {
  document.body.classList.toggle('brex__isDarkTheme', isDarkTheme)
  document.body.classList.toggle('brex__isFocusMode', isFocusMode)
}

async function cs_syncBodyClassname() {
  const { isDarkTheme, isFocusMode } = await chrome.storage.sync.get([
    'isDarkTheme',
    'isFocusMode',
  ])
  cs_updateBodyClassname(isDarkTheme, isFocusMode)
}

export { cs_updateBodyClassname, cs_syncBodyClassname }
