import { ipcMain } from 'electron';

export default (params) => {
  ipcMain.on('getAppSettings', (event, type) => {
    const cleanData = JSON.parse(JSON.stringify(params.settings[type].all));

    params.mainWindow.webContents.send('appSettings', {
      type,
<<<<<<< HEAD
      data: cleanData,
=======
      data: params.settings[type].allSerialized,
>>>>>>> 97cbc2d06ab4c8fa36619dbe71f8f466f5c68e76
    });
  });

  ipcMain.on('updateAppSettings', (event, args) => {
    params.settings[args.type].set(args.data);
  });
};
