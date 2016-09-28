require.ensure(['./test.js'], function(require){
    var content = require('./test.js');
    document.open();
    document.write('<h1>'+content+'</h1>');
    document.close();
});