# Vbee AIVoice Studio powertoys

A `vue3` site [Vite](https://vitejs.dev/)
powered WebExtension on `manifest 3`

## Dev Features

- Vue 3 - Composition API, `Script setup`
- Vue 3 app in Content Script too (template added)
- Vue devtools support
- HMR for extension pages and content scripts, with Firefox support
- [`Tailwind`](https://tailwindcss.com/) css And [`daisyUI`](https://daisyui.com/)

- Tailwindcss plugins for Typography, forms, prettier and daisy ui
- Vue Router setup incuding `unplugin-vue-router` for automatic route registration

- Effortless communications - powered by [`webext-bridge`](https://github.com/zikaari/webext-bridge)
- [Components auto importing](./src/components)
- [Icons](./src/components) - Access to icons from any iconset directly
  - By default [Material Design Icons](https://materialdesignicons.com/cdn/1.6.50-dev/) set is enabled
- Github build and release actions

## Devex

- [TypeScript](https://www.typescriptlang.org/) - type safe
- `Eslint` & `Prettier` configured for `vue`, `javascript`, `TypeScript`
- [CRXJS Vite Plugin](https://crxjs.dev/vite-plugin) Build Chrome, Firefox and Other Extensions with Vite
- vscode recommended settings and extensions for extension/ plugin development

## Brex Features

- Sample `onInstall` & `onUpdate` pages

## Pre-packed

### Vite Plugins

- [`unplugin-vue-router`](https://github.com/posva/unplugin-vue-router) - File system based route generator for Vite
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use `browser` and Vue Composition API without importing
- [`unplugin-vue-components`](https://github.com/antfu/vite-plugin-components) - components auto import
- [`unplugin-icons`](https://github.com/antfu/unplugin-icons) - icons as components

### Vue Plugins

- [Pinia](https://pinia.vuejs.org/) - Intuitive, type safe, light and flexible Store for Vue
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs

### Plugins

- [Marked](https://github.com/markedjs/marked) - A markdown parser and compiler. Used for CHANGELOG.md to show in Update page

### UI Frameworks

- [tailwindcss](https://tailwindcss.com) - A utility-first CSS framework
- [daisyUI](https://daisyui.com/) - The most popular component library for Tailwind CSS

Tailwind css `forms` and `typography` plugins are enabled for default styling of form controls.

### WebExtension Libraries

- [`webext-bridge`](https://github.com/zikaari/webext-bridge) - effortlessly communication between contexts

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)
- Use Composition API with [`setup` SFC syntax](https://pinia.vuejs.org/cookbook/composables.html#Setup-Stores) in Pinia stores

## Development

### Clone from

```bash
pnpx degit mubaidr/vite-vue3-browser-extension-v3 my-webext
cd my-webext
pnpm i
```

```bash
pnpm dev
```

Then **load extension in browser with the `dist/` folder**.

### Build

To build the extension, run

```bash
pnpm build
```

```bash
pnpm lint     # Lint files
```

And then pack files under `dist/chrome` or `dist/firefox`, you can upload to appropriate extension store.

## Usage

### Project Structure

- `src` - main source.
  - `content-script` - scripts and components to be injected as `content_script`
    - `iframe` content script iframe vue3 app which will be injected into page
  - `background` - scripts for background.
  - `popup` - popup vuejs application root
    - `pages` - popup pages
  - `options` - options vuejs application root
    - `pages` - options pages
  - `setup` - Page for Install and Update extension events
    - `pages` - pages for install and update events
  - `offscreen` - extension offscreen pages, can be used for audio, screen recording etc
  - `pages` - application pages, common to all views (About, Contact, Authentication etc)
  - `components` - auto-imported Vue components that are shared in popup and options page.
  - `assets` - assets used in Vue components
- `dist` - built files
  - `chrome` - Chrome extension, can be publishd to Opera, Edge and toher chromium based browsers store etc
  - `firefox` - Firefox extension

### Browser Related Configurations

- `manifest.config.ts` - Base extension manifest with common configuration
- `manifest.chrome.config.ts` - Chrome/ chromium based browsers specific manifest
- `manifest.firefox.config.ts` - Firefox spefic manifest
- `vite.config.ts` - Base vite configuration
- `vite.chrome.config.ts` - Chrome/ chromium based browsers specific vite configuration
- `vite.firefox.config.ts` - Firefox specific vite configuration

_You can also use pnpm dev:chrome, pnpm dev:firefox, pnpm build:chrome, pnpm build:firefox, pnpm lint:fix_

### Extra info

In [src/background/index.ts](./src/background/index.ts) you can find an example of chrome.runtime.onInstalled.addListener.

We add `?type` to the url to tell if it's update or install event. Then in [src/setup/pages/index.ts](./src/setup/pages/index.ts) we check for the `type` and show the appropriate page.

## Contributors

<!-- readme: collaborators,contributors -start -->
<table>
	<tbody>
		<tr>
            <td align="center">
                <a href="https://github.com/lockevn">
                    <img src="https://avatars.githubusercontent.com/u/122280?v=4" width="100;" alt="lockevn"/>
                    <br />
                    <sub><b>lockevn</b></sub>
                </a>
            </td>            
		</tr>
	<tbody>
</table>
<!-- readme: collaborators,contributors -end -->
