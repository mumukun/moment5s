'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _card = require('./../components/card.js');

var _card2 = _interopRequireDefault(_card);

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
            navigationBarTitleText: "Moment5s"
        }, _this.$repeat = { "pictureList": { "com": "card", "props": "" } }, _this.$props = { "card": { "xmlns:v-bind": { "value": "", "for": "pictureList", "item": "item", "index": "index", "key": "key" }, "v-bind:content.once": { "value": "item.content", "for": "pictureList", "item": "item", "index": "index", "key": "key" }, "v-bind:stars.once": { "value": "item.starsAmount", "for": "pictureList", "item": "item", "index": "index", "key": "key" }, "v-bind:comments.once": { "value": "item.commentsAmount", "for": "pictureList", "item": "item", "index": "index", "key": "key" }, "v-bind:reviews.once": { "value": "item.commentsAmount", "for": "pictureList", "item": "item", "index": "index", "key": "key" }, "v-bind:imgUrl.once": { "value": "item.imgUrl", "for": "pictureList", "item": "item", "index": "index", "key": "key" } } }, _this.$events = {}, _this.components = {
            card: _card2.default,
            toast: _wepyComToast2.default
        }, _this.data = {
            userInfo: {
                nickName: '加载中...'
            },
            pictureList: [],
            isLoadingMore: false,
            currentPage: 1,
            info: ''
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
            this.loadList();
        }
    }, {
        key: 'onPullDownRefresh',
        value: function onPullDownRefresh() {
            console.log('onPullDownRefresh');
        }
    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            console.log('bottom');
            this.currentPage++;
            if (this.currentPage >= 10) {
                // 最多只能加载10页
                this.isLoadingMore = false;
                this.info = 'No more news';
                this.$apply();
                return;
            }
            this.isLoadingMore = true;
            this.loadList();
        }
    }, {
        key: 'loadList',
        value: function loadList() {
            // wx.request({
            //     url: `https://www.shanbay.com/api/v2/news/articles/?ipp=10&page=${this.currentPage}`,
            //     success: (res) => {
            //         if (res.data.msg === 'SUCCESS') {
            // this.pictureList = this.pictureList.concat(pictureData.data || [])
            //         }
            //         this.$apply()
            //         wx.hideLoading()
            //     }
            // })

            console.log('this，getPictureData');
            console.log('pictureData', _picture2.default);
            var self = this;
            this.pictureList = this.pictureList.concat(_picture2.default.data || []);
            self.$apply();
            console.log('self', self);
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImNhcmQiLCJ0b2FzdCIsImRhdGEiLCJ1c2VySW5mbyIsIm5pY2tOYW1lIiwicGljdHVyZUxpc3QiLCJpc0xvYWRpbmdNb3JlIiwiY3VycmVudFBhZ2UiLCJpbmZvIiwiY29tcHV0ZWQiLCJub3ciLCJEYXRlIiwibWV0aG9kcyIsImV2ZW50cyIsInNlbGYiLCJjb25zb2xlIiwibG9nIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwiJGFwcGx5IiwibG9hZExpc3QiLCJjb25jYXQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUdWQyxPLEdBQVUsRUFBQyxlQUFjLEVBQUMsT0FBTSxNQUFQLEVBQWMsU0FBUSxFQUF0QixFQUFmLEUsUUFDYkMsTSxHQUFTLEVBQUMsUUFBTyxFQUFDLGdCQUFlLEVBQUMsU0FBUSxFQUFULEVBQVksT0FBTSxhQUFsQixFQUFnQyxRQUFPLE1BQXZDLEVBQThDLFNBQVEsT0FBdEQsRUFBOEQsT0FBTSxLQUFwRSxFQUFoQixFQUEyRix1QkFBc0IsRUFBQyxTQUFRLGNBQVQsRUFBd0IsT0FBTSxhQUE5QixFQUE0QyxRQUFPLE1BQW5ELEVBQTBELFNBQVEsT0FBbEUsRUFBMEUsT0FBTSxLQUFoRixFQUFqSCxFQUF3TSxxQkFBb0IsRUFBQyxTQUFRLGtCQUFULEVBQTRCLE9BQU0sYUFBbEMsRUFBZ0QsUUFBTyxNQUF2RCxFQUE4RCxTQUFRLE9BQXRFLEVBQThFLE9BQU0sS0FBcEYsRUFBNU4sRUFBdVQsd0JBQXVCLEVBQUMsU0FBUSxxQkFBVCxFQUErQixPQUFNLGFBQXJDLEVBQW1ELFFBQU8sTUFBMUQsRUFBaUUsU0FBUSxPQUF6RSxFQUFpRixPQUFNLEtBQXZGLEVBQTlVLEVBQTRhLHVCQUFzQixFQUFDLFNBQVEscUJBQVQsRUFBK0IsT0FBTSxhQUFyQyxFQUFtRCxRQUFPLE1BQTFELEVBQWlFLFNBQVEsT0FBekUsRUFBaUYsT0FBTSxLQUF2RixFQUFsYyxFQUFnaUIsc0JBQXFCLEVBQUMsU0FBUSxhQUFULEVBQXVCLE9BQU0sYUFBN0IsRUFBMkMsUUFBTyxNQUFsRCxFQUF5RCxTQUFRLE9BQWpFLEVBQXlFLE9BQU0sS0FBL0UsRUFBcmpCLEVBQVIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDTkMsZ0NBRE07QUFFTkM7QUFGTSxTLFFBS1ZDLEksR0FBTztBQUNIQyxzQkFBVTtBQUNOQywwQkFBVTtBQURKLGFBRFA7QUFJSEMseUJBQWEsRUFKVjtBQUtIQywyQkFBZSxLQUxaO0FBTUhDLHlCQUFhLENBTlY7QUFPSEMsa0JBQU07QUFQSCxTLFFBVVBDLFEsR0FBVztBQUNQQyxlQURPLGlCQUNEO0FBQ0YsdUJBQU8sQ0FBQyxJQUFJQyxJQUFKLEVBQVI7QUFDSDtBQUhNLFMsUUFNWEMsTyxHQUFVLEUsUUFJVkMsTSxHQUFTLEU7Ozs7O2lDQUlBO0FBQ0wsZ0JBQUlDLE9BQU8sSUFBWDtBQUNBQyxvQkFBUUMsR0FBUixDQUFZLFNBQVosRUFBdUIsSUFBdkI7QUFDQSxpQkFBS0MsT0FBTCxDQUFhQyxXQUFiLENBQXlCLFVBQVNmLFFBQVQsRUFBbUI7QUFDeEMsb0JBQUlBLFFBQUosRUFBYztBQUNWVyx5QkFBS1gsUUFBTCxHQUFnQkEsUUFBaEI7QUFDSDtBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFXLHFCQUFLSyxNQUFMO0FBQ0gsYUFiRDtBQWNBLGlCQUFLQyxRQUFMO0FBQ0g7Ozs0Q0FDbUI7QUFDaEJMLG9CQUFRQyxHQUFSLENBQVksbUJBQVo7QUFDSDs7O3dDQUNlO0FBQ1pELG9CQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBLGlCQUFLVCxXQUFMO0FBQ0EsZ0JBQUksS0FBS0EsV0FBTCxJQUFvQixFQUF4QixFQUE0QjtBQUFFO0FBQzFCLHFCQUFLRCxhQUFMLEdBQXFCLEtBQXJCO0FBQ0EscUJBQUtFLElBQUwsR0FBWSxjQUFaO0FBQ0EscUJBQUtXLE1BQUw7QUFDQTtBQUNIO0FBQ0QsaUJBQUtiLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxpQkFBS2MsUUFBTDtBQUNIOzs7bUNBQ1U7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUwsb0JBQVFDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBRCxvQkFBUUMsR0FBUixDQUFZLGFBQVo7QUFDQSxnQkFBSUYsT0FBTyxJQUFYO0FBQ0EsaUJBQUtULFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQmdCLE1BQWpCLENBQXdCLGtCQUFZbkIsSUFBWixJQUFvQixFQUE1QyxDQUFuQjtBQUNBWSxpQkFBS0ssTUFBTDtBQUNBSixvQkFBUUMsR0FBUixDQUFZLE1BQVosRUFBb0JGLElBQXBCO0FBQ0g7Ozs7RUF4RjhCLGVBQUtRLEk7O2tCQUFuQjdCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2NhcmQnXG5pbXBvcnQgVG9hc3QgZnJvbSAnd2VweS1jb20tdG9hc3QnXG5pbXBvcnQgcGljdHVyZURhdGEgZnJvbSAnLi4vZGF0YS9waWN0dXJlLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiBcIk1vbWVudDVzXCIsXG4gICAgfVxuICAgJHJlcGVhdCA9IHtcInBpY3R1cmVMaXN0XCI6e1wiY29tXCI6XCJjYXJkXCIsXCJwcm9wc1wiOlwiXCJ9fTtcclxuJHByb3BzID0ge1wiY2FyZFwiOntcInhtbG5zOnYtYmluZFwiOntcInZhbHVlXCI6XCJcIixcImZvclwiOlwicGljdHVyZUxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6Y29udGVudC5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW0uY29udGVudFwiLFwiZm9yXCI6XCJwaWN0dXJlTGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifSxcInYtYmluZDpzdGFycy5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW0uc3RhcnNBbW91bnRcIixcImZvclwiOlwicGljdHVyZUxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn0sXCJ2LWJpbmQ6Y29tbWVudHMub25jZVwiOntcInZhbHVlXCI6XCJpdGVtLmNvbW1lbnRzQW1vdW50XCIsXCJmb3JcIjpcInBpY3R1cmVMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9LFwidi1iaW5kOnJldmlld3Mub25jZVwiOntcInZhbHVlXCI6XCJpdGVtLmNvbW1lbnRzQW1vdW50XCIsXCJmb3JcIjpcInBpY3R1cmVMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9LFwidi1iaW5kOmltZ1VybC5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW0uaW1nVXJsXCIsXCJmb3JcIjpcInBpY3R1cmVMaXN0XCIsXCJpdGVtXCI6XCJpdGVtXCIsXCJpbmRleFwiOlwiaW5kZXhcIixcImtleVwiOlwia2V5XCJ9fX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgICAgIGNhcmQ6IENhcmQsXG4gICAgICAgIHRvYXN0OiBUb2FzdFxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICAgICAgfSxcbiAgICAgICAgcGljdHVyZUxpc3Q6IFtdLFxuICAgICAgICBpc0xvYWRpbmdNb3JlOiBmYWxzZSxcbiAgICAgICAgY3VycmVudFBhZ2U6IDEsXG4gICAgICAgIGluZm86ICcnXG4gICAgfVxuXG4gICAgY29tcHV0ZWQgPSB7XG4gICAgICAgIG5vdygpIHtcbiAgICAgICAgICAgIHJldHVybiArbmV3IERhdGUoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcblxuICAgIH1cblxuICAgIGV2ZW50cyA9IHtcblxuICAgIH1cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzPT09JywgdGhpcylcbiAgICAgICAgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uKHVzZXJJbmZvKSB7XG4gICAgICAgICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gdXNlckluZm9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHNlbGYubm9ybWFsVGl0bGUgPSAn5qCH6aKY5bey6KKr5L+u5pS5J1xuXG4gICAgICAgICAgICAvLyBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfmoIfpopjkuInnp5LlkI7kvJrooqvkv67mlLknXG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICBzZWxmLnNldFRpbWVvdXRUaXRsZSA9ICfliLDkuInnp5LkuoYnXG4gICAgICAgICAgICAvLyAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgICAgLy8gfSwgMzAwMClcblxuICAgICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmxvYWRMaXN0KClcbiAgICB9XG4gICAgb25QdWxsRG93blJlZnJlc2goKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvblB1bGxEb3duUmVmcmVzaCcpXG4gICAgfVxuICAgIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdib3R0b20nKVxuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlKytcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2UgPj0gMTApIHsgLy8g5pyA5aSa5Y+q6IO95Yqg6L29MTDpobVcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkaW5nTW9yZSA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmluZm8gPSAnTm8gbW9yZSBuZXdzJ1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0xvYWRpbmdNb3JlID0gdHJ1ZVxuICAgICAgICB0aGlzLmxvYWRMaXN0KClcbiAgICB9XG4gICAgbG9hZExpc3QoKSB7XG4gICAgICAgIC8vIHd4LnJlcXVlc3Qoe1xuICAgICAgICAvLyAgICAgdXJsOiBgaHR0cHM6Ly93d3cuc2hhbmJheS5jb20vYXBpL3YyL25ld3MvYXJ0aWNsZXMvP2lwcD0xMCZwYWdlPSR7dGhpcy5jdXJyZW50UGFnZX1gLFxuICAgICAgICAvLyAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAvLyAgICAgICAgIGlmIChyZXMuZGF0YS5tc2cgPT09ICdTVUNDRVNTJykge1xuICAgICAgICAvLyB0aGlzLnBpY3R1cmVMaXN0ID0gdGhpcy5waWN0dXJlTGlzdC5jb25jYXQocGljdHVyZURhdGEuZGF0YSB8fCBbXSlcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgdGhpcy4kYXBwbHkoKVxuICAgICAgICAvLyAgICAgICAgIHd4LmhpZGVMb2FkaW5nKClcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfSlcblxuICAgICAgICBjb25zb2xlLmxvZygndGhpc++8jGdldFBpY3R1cmVEYXRhJylcbiAgICAgICAgY29uc29sZS5sb2coJ3BpY3R1cmVEYXRhJywgcGljdHVyZURhdGEpXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICB0aGlzLnBpY3R1cmVMaXN0ID0gdGhpcy5waWN0dXJlTGlzdC5jb25jYXQocGljdHVyZURhdGEuZGF0YSB8fCBbXSlcbiAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICBjb25zb2xlLmxvZygnc2VsZicsIHNlbGYpXG4gICAgfVxufVxuIl19