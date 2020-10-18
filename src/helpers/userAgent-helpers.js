<<<<<<< HEAD
import { remote, app } from 'electron';
=======

>>>>>>> 97cbc2d06ab4c8fa36619dbe71f8f466f5c68e76
import os from 'os';
import macosVersion from 'macos-version';
import { isMac, isWindows } from '../environment';

<<<<<<< HEAD
// This helper gets included from the backend and frontend but we only need to use "remote"
// if we are in the frontend
const ferdiVersion = remote && remote.app ? remote.app.getVersion() : app.getVersion();

function macOS() {
  const version = macosVersion();
=======
function macOS() {
  const version = macosVersion();

>>>>>>> 97cbc2d06ab4c8fa36619dbe71f8f466f5c68e76
  return `Macintosh; Intel Mac OS X ${version.replace(/\./g, '_')}`;
}

function windows() {
  const version = os.release();
  const [majorVersion, minorVersion] = version.split('.');
  return `Windows NT ${majorVersion}.${minorVersion}; Win64; x64`;
}

function linux() {
<<<<<<< HEAD
  return 'X11; Linux x86_64';
}

export default function userAgent(removeChromeVersion = false, addFerdiVersion = false) {
=======
  return 'X11; Ubuntu; Linux x86_64';
}

export default function userAgent(removeChromeVersion = false) {
>>>>>>> 97cbc2d06ab4c8fa36619dbe71f8f466f5c68e76
  let platformString = '';

  if (isMac) {
    platformString = macOS();
  } else if (isWindows) {
    platformString = windows();
  } else {
    platformString = linux();
  }

<<<<<<< HEAD
  let chromeVersion = 'Chrome';
  if (!removeChromeVersion) {
    chromeVersion = `Chrome/${process.versions.chrome}`;
  }

  let applicationString = '';
  if (addFerdiVersion) {
    applicationString = ` Ferdi/${ferdiVersion} Electron/${process.versions.electron}`;
  }

  // Chrome is pinned to WebKit 537.36, the latest version before hard forking to Blink.
  return `Mozilla/5.0 (${platformString}) AppleWebKit/537.36 (KHTML, like Gecko) ${chromeVersion} Safari/537.36${applicationString}`;
  // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36 Ferdi/5.5.1-nightly.13 Electron/8.2.3
=======
  // TODO: Update AppleWebKit and Safari version after electron update
  return `Mozilla/5.0 (${platformString}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome${!removeChromeVersion ? `/${process.versions.chrome}` : ''} Safari/537.36`;
  // Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) old-airport-include/1.0.0 Chrome Electron/7.1.7 Safari/537.36
>>>>>>> 97cbc2d06ab4c8fa36619dbe71f8f466f5c68e76
}
