/**
 * Created by xiecheng on 2017/12/3.
 */

define(['isArray'], function (isArray) {
    function sortArr(arr) {
        if (isArray(arr)) {
            return arr.sort(function (a, b) {
                return a - b;
            });
        } else {
            return '你传入的参数不是个数组';
        }
    }

    return sortArr;
});

