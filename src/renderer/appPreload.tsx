import '@misc/window/windowPreload';

// Say something
console.log('[ERWT] : Preload execution started');

// Get versions
window.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const { env } = process;
  const versions: Record<string, unknown> = {};

  // ERWT Package version
  versions['erwt'] = env['npm_package_version'];
  versions['license'] = env['npm_package_license'];

  // Process versions
  for (const type of ['chrome', 'node', 'electron']) {
    versions[type] = process.versions[type].replace('+', '');
  }

  // NPM deps versions
  for (const type of ['react']) {
    const v = env['npm_package_dependencies_' + type];
    if (v) versions[type] = v.replace('^', '');
  }

  // NPM @dev deps versions
  for (const type of ['webpack', 'typescript']) {
    const v = env['npm_package_devDependencies_' + type];
    if (v) versions[type] = v.replace('^', '');
  }

  // Set versions to app data
  app.setAttribute('data-versions', JSON.stringify(versions));
});
