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
