'use strict';

var a = 5;
var add = function add(x, y) {
    return x + y;
};

var arr = [5, 6, 7];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var item = _step.value;

        console.log(item);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var b = 6;

var oUl = document.querySelector('#ul1');
var aLi = document.querySelectorAll('#ul1 li');

var _loop = function _loop(i) {
    aLi[i].index = i;
    aLi[i].onclick = function () {
        console.log(i);
    };
};

for (var i = 0; i < aLi.length; i++) {
    _loop(i);
}