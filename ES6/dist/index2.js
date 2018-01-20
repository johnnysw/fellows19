'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var People = function () {
    function People(name, age) {
        _classCallCheck(this, People);

        this.name = name;
        this.age = age;
    }

    _createClass(People, [{
        key: 'eat',
        value: function eat() {
            console.log(this.name + '在吃!');
        }
    }]);

    return People;
}();

var p1 = new People('ww', 20);
console.log(p1.name);
p1.eat();