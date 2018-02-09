'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_wepy$component) {
    _inherits(Card, _wepy$component);

    function Card() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Card);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Card.__proto__ || Object.getPrototypeOf(Card)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
            content: String,
            stars: Number,
            comments: Number,
            reviews: Number,
            imgUrl: String
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Card;
}(_wepy2.default.component);

exports.default = Card;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuanMiXSwibmFtZXMiOlsiQ2FyZCIsInByb3BzIiwiY29udGVudCIsIlN0cmluZyIsInN0YXJzIiwiTnVtYmVyIiwiY29tbWVudHMiLCJyZXZpZXdzIiwiaW1nVXJsIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7c0xBQ2pCQyxLLEdBQVE7QUFDSkMscUJBQVNDLE1BREw7QUFFSkMsbUJBQU9DLE1BRkg7QUFHSkMsc0JBQVVELE1BSE47QUFJSkUscUJBQVNGLE1BSkw7QUFLSkcsb0JBQVFMO0FBTEosUzs7OztFQURzQixlQUFLTSxTOztrQkFBbEJULEkiLCJmaWxlIjoiY2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgICAgY29udGVudDogU3RyaW5nLFxuICAgICAgICBzdGFyczogTnVtYmVyLFxuICAgICAgICBjb21tZW50czogTnVtYmVyLFxuICAgICAgICByZXZpZXdzOiBOdW1iZXIsXG4gICAgICAgIGltZ1VybDogU3RyaW5nXG4gICAgfVxufVxuIl19