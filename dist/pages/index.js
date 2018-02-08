'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyComToast = require('./../npm/wepy-com-toast/toast.js');

var _wepyComToast2 = _interopRequireDefault(_wepyComToast);

var _picture = require('./../data/picture.js');

var _picture2 = _interopRequireDefault(_picture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Index);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: 'Moment5s'
        }, _this.components = {
            toast: _wepyComToast2.default
        }, _this.data = {
            userInfo: {
                nickName: '加载中...'
            },
            pictureList: []
        }, _this.computed = {
            now: function now() {
                return +new Date();
            }
        }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {
            var self = this;
            console.log('this===', this);
            this.getPictureData();
            this.$parent.getUserInfo(function (userInfo) {
                if (userInfo) {
                    self.userInfo = userInfo;
                }
                // self.normalTitle = '标题已被修改'

                // self.setTimeoutTitle = '标题三秒后会被修改'
                // setTimeout(() => {
                //     self.setTimeoutTitle = '到三秒了'
                //     self.$apply()
                // }, 3000)

                self.$apply();
            });
        }
    }, {
        key: 'getPictureData',
        value: function getPictureData() {
            console.log('this，getPictureData');
            console.log('pictureData', _picture2.default);
            var self = this;
            this.pictureList = _picture2.default.data || [];
            console.log('self', self);
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJ0b2FzdCIsImRhdGEiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwicGljdHVyZUxpc3QiLCJjb21wdXRlZCIsIm5vdyIsIkRhdGUiLCJtZXRob2RzIiwiZXZlbnRzIiwic2VsZiIsImNvbnNvbGUiLCJsb2ciLCJnZXRQaWN0dXJlRGF0YSIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdUQyxVLEdBQWE7QUFDVEM7QUFEUyxTLFFBSWJDLEksR0FBTztBQUNIQyxzQkFBVTtBQUNOQywwQkFBVTtBQURKLGFBRFA7QUFJSEMseUJBQWE7QUFKVixTLFFBT1BDLFEsR0FBVztBQUNQQyxlQURPLGlCQUNEO0FBQ0YsdUJBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDSDtBQUhNLFMsUUFNWEMsTyxHQUFVLEUsUUFJVkMsTSxHQUFTLEU7Ozs7O2lDQUlBO0FBQ0wsZ0JBQUlDLE9BQU8sSUFBWDtBQUNBQyxvQkFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUIsSUFBdkI7QUFDQSxpQkFBS0MsY0FBTDtBQUNBLGlCQUFLQyxPQUFMLENBQWFDLFdBQWIsQ0FBeUIsVUFBU2IsUUFBVCxFQUFtQjtBQUN4QyxvQkFBSUEsUUFBSixFQUFjO0FBQ1ZRLHlCQUFLUixRQUFMLEdBQWdCQSxRQUFoQjtBQUNIO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQVEscUJBQUtNLE1BQUw7QUFDSCxhQWJEO0FBY0g7Ozt5Q0FDZ0I7QUFDYkwsb0JBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBRCxvQkFBUUMsR0FBUixDQUFZLGFBQVo7QUFDQSxnQkFBSUYsT0FBTyxJQUFYO0FBQ0EsaUJBQUtOLFdBQUwsR0FBbUIsa0JBQVlILElBQVosSUFBb0IsRUFBdkM7QUFDQVUsb0JBQVFDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CRixJQUFwQjtBQUNIOzs7O0VBdEQ4QixlQUFLTyxJOztrQkFBbkJyQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IFRvYXN0IGZyb20gJ3dlcHktY29tLXRvYXN0J1xuaW1wb3J0IHBpY3R1cmVEYXRhIGZyb20gJy4uL2RhdGEvcGljdHVyZS5qcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ01vbWVudDVzJ1xuICAgIH1cbiAgICBjb21wb25lbnRzID0ge1xuICAgICAgICB0b2FzdDogVG9hc3RcbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgICB1c2VySW5mbzoge1xuICAgICAgICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgICAgIH0sXG4gICAgICAgIHBpY3R1cmVMaXN0OiBbXVxuICAgIH1cblxuICAgIGNvbXB1dGVkID0ge1xuICAgICAgICBub3coKSB7XG4gICAgICAgICAgICByZXR1cm4gK25ldyBEYXRlKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG5cbiAgICB9XG5cbiAgICBldmVudHMgPSB7XG5cbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBjb25zb2xlLmxvZygndGhpcz09PScsIHRoaXMpXG4gICAgICAgIHRoaXMuZ2V0UGljdHVyZURhdGEoKVxuICAgICAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24odXNlckluZm8pIHtcbiAgICAgICAgICAgIGlmICh1c2VySW5mbykge1xuICAgICAgICAgICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2VsZi5ub3JtYWxUaXRsZSA9ICfmoIfpopjlt7Looqvkv67mlLknXG5cbiAgICAgICAgICAgIC8vIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+agh+mimOS4ieenkuWQjuS8muiiq+S/ruaUuSdcbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHNlbGYuc2V0VGltZW91dFRpdGxlID0gJ+WIsOS4ieenkuS6hidcbiAgICAgICAgICAgIC8vICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgICAgICAvLyB9LCAzMDAwKVxuXG4gICAgICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGdldFBpY3R1cmVEYXRhKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndGhpc++8jGdldFBpY3R1cmVEYXRhJylcbiAgICAgICAgY29uc29sZS5sb2coJ3BpY3R1cmVEYXRhJywgcGljdHVyZURhdGEpXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICB0aGlzLnBpY3R1cmVMaXN0ID0gcGljdHVyZURhdGEuZGF0YSB8fCBbXVxuICAgICAgICBjb25zb2xlLmxvZygnc2VsZicsIHNlbGYpXG4gICAgfVxufVxuIl19