const path = require('path');

module.exports = {
  packagerConfig: {
    icon: path.join(__dirname, './assets/icon/icon'), 
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        authors: 'hogehoge_forge_config', 
        description: 'Angtronサンプルアプリケーション', 
        setupIcon: path.join(__dirname, './assets/icon/icon.ico'), 
      },
    },
    /*
    {
      name: '@electron-forge/maker-zip'
    }
    */
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github', 
      config: {
        repository: {
          owner: 'AKDeveloper1978', 
          name: 'angtron'
        }, 
        prerelease: false,
        draft: true, 
      }, 
    }, 
  ], 
};
