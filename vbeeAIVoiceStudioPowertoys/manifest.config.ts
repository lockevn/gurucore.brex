import { env } from 'node:process'
import type { ManifestV3Export } from '@crxjs/vite-plugin'
import packageJson from './package.json'

const { version, name, description, displayName } = packageJson
// Convert from Semver (example: 0.1.0-beta6)
const [major, minor, patch, label = '0'] = version
  // can only contain digits, dots, or dash
  .replace(/[^\d.-]+/g, '')
  // split into version parts
  .split(/[.-]/)

export default {
  name: env.mode === 'staging' ? `[INTERNAL] ${name}` : displayName || name,
  description,
  // up to four numbers separated by dots
  version: `${major}.${minor}.${patch}.${label}`,
  // semver is OK in "version_name"
  version_name: version,
  manifest_version: 3,
  // key: '',
  action: {
    default_popup: 'src/popup/index.html',
  },
  background: {
    service_worker: 'src/background/background.ts',
    type: 'module',
  },
  content_scripts: [
    {
      matches: [
        '*://studio.vbee.vn/studio/text-to-speech/*',
        '*://studio.vbee.vn/studio/text-to-speech*',
      ],
      js: ['src/content-script/studio/cs-studio.ts'],
      run_at: 'document_end',
    },

    // {
    //   matches: ['*://vnexpress.net/*'],
    //   all_frames: true,
    //   js: ['src/content-script/index.ts'],
    //   run_at: 'document_end',
    // },
  ],

  // Full options page
  options_page: 'src/options/index.html',
  // Embedded options page
  // options_ui: {
  //   page: 'src/options/index.html',
  // },
  offline_enabled: true,
  // host_permissions: [],
  permissions: ['storage', 'tabs', 'background', 'activeTab', 'scripting'],
  web_accessible_resources: [
    {
      matches: ['*://*/*'],
      resources: ['src/content-script/index.ts'],
    },
    {
      matches: ['*://*/*'],
      resources: ['src/content-script/iframe/index.html'],
    },
  ],

  icons: {
    '16': 'src/assets/images/icon-16.png',
    '32': 'src/assets/images/icon-32.png',
    '48': 'src/assets/images/icon-48.png',
    '128': 'src/assets/images/icon-128.png',
  },
} as ManifestV3Export
