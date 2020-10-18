import autoUpdate from './autoUpdate';
import settings from './settings';
import appIndicator from './appIndicator';
import download from './download';
<<<<<<< HEAD
import processManager from './processManager';
import localServer from './localServer';
=======
import cld from './cld';
import dnd from './dnd';
>>>>>>> 97cbc2d06ab4c8fa36619dbe71f8f466f5c68e76

export default (params) => {
  settings(params);
  autoUpdate(params);
  appIndicator(params);
  download(params);
<<<<<<< HEAD
  processManager(params);
  localServer(params);
=======
  cld(params);
  dnd();
>>>>>>> 97cbc2d06ab4c8fa36619dbe71f8f466f5c68e76
};
