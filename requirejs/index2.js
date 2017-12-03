//requirejs  AMD
// require(['sort'], function (sortArr) {
//     var arr = [5, 3, 11, 2, 1];
//     // var arr = '12313';
//     //...
//     console.log(sortArr(arr));
// });


//seajs  CMD
define(function(require){
    var arr = [5, 3, 11, 2, 1];
    //...
    var sortArr = require('sort');
    console.log(sortArr(arr));
});