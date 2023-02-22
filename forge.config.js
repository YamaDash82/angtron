module.exports = {
  packagerConfig: {
    icon: 'assets/icon/icon'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        authors: 'YamaDash82', 
        description: 'ヤマダッシュ製Electronアプリケーション'
      },
    }
  ],
};
