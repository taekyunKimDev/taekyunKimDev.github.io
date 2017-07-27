requirejs.config({
  baseUrl: 'js/app',
  paths: {
    data: 'data',
    horse: 'horse',
    dice: 'dice',
    popup: 'popup',
    marble: 'marble'
  },
  shim:{
    'marble': {
      deps: ['data', 'horse', 'dice','popup']
    }
  }
});
requirejs(['marble'],
    function(marble) {
        marble.init();
    }
);
