'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collection = function (_wepy$page) {
    _inherits(Collection, _wepy$page);

    function Collection() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Collection);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Collection.__proto__ || Object.getPrototypeOf(Collection)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '错题采集'
        }, _this.data = {
            userInfo: null,
            gridCount: 9
        }, _this.methods = {
            takePhoto: function takePhoto() {
                var ctx = _wepy2.default.createCameraContext();
                ctx.takePhoto({
                    quality: 'high',
                    success: function success(res) {
                        _wepy2.default.vibrateShort();
                        _wepy2.default.redirectTo({
                            url: 'dealImage?src=' + res.tempImagePath
                        });
                    }
                });
            },
            chosePic: function chosePic() {
                _wepy2.default.chooseImage({
                    sizeType: ['compressed'],
                    sourceType: ['album'],
                    success: function success(res) {
                        _wepy2.default.showModal({
                            title: '成功！',
                            content: JSON.stringify(res.tempFilePaths)
                        });
                    }
                });
            },
            back: function back() {
                // wepy.navigateBack()
                _wepy2.default.redirectTo({
                    url: 'dealImage?src=http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071001.gif'
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Collection, [{
        key: 'onLoad',
        value: function onLoad() {
            var self = this;
            this.$parent.getUserInfo(function (res) {
                self.userInfo = res;
            });
        }
    }]);

    return Collection;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Collection , 'pages/collection'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24uanMiXSwibmFtZXMiOlsiQ29sbGVjdGlvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwidXNlckluZm8iLCJncmlkQ291bnQiLCJtZXRob2RzIiwidGFrZVBob3RvIiwiY3R4IiwiY3JlYXRlQ2FtZXJhQ29udGV4dCIsInF1YWxpdHkiLCJzdWNjZXNzIiwicmVzIiwidmlicmF0ZVNob3J0IiwicmVkaXJlY3RUbyIsInVybCIsInRlbXBJbWFnZVBhdGgiLCJjaG9zZVBpYyIsImNob29zZUltYWdlIiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsInRlbXBGaWxlUGF0aHMiLCJiYWNrIiwic2VsZiIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7O2tNQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QjtBQURuQixTLFFBSVRDLEksR0FBTztBQUNIQyxzQkFBVSxJQURQO0FBRUhDLHVCQUFXO0FBRlIsUyxRQUtQQyxPLEdBQVU7QUFDTkMscUJBRE0sdUJBQ007QUFDUixvQkFBTUMsTUFBTSxlQUFLQyxtQkFBTCxFQUFaO0FBQ0FELG9CQUFJRCxTQUFKLENBQWM7QUFDVkcsNkJBQVMsTUFEQztBQUVWQywyQkFGVSxtQkFFRkMsR0FGRSxFQUVHO0FBQ1QsdUNBQUtDLFlBQUw7QUFDQSx1Q0FBS0MsVUFBTCxDQUFnQjtBQUNaQyxpQ0FBSyxtQkFBbUJILElBQUlJO0FBRGhCLHlCQUFoQjtBQUdIO0FBUFMsaUJBQWQ7QUFTSCxhQVpLO0FBYU5DLG9CQWJNLHNCQWFLO0FBQ1AsK0JBQUtDLFdBQUwsQ0FBaUI7QUFDYkMsOEJBQVUsQ0FBQyxZQUFELENBREc7QUFFYkMsZ0NBQVksQ0FBQyxPQUFELENBRkM7QUFHYlQsMkJBSGEsbUJBR0xDLEdBSEssRUFHQTtBQUNULHVDQUFLUyxTQUFMLENBQWU7QUFDWEMsbUNBQU8sS0FESTtBQUVYQyxxQ0FBU0MsS0FBS0MsU0FBTCxDQUFlYixJQUFJYyxhQUFuQjtBQUZFLHlCQUFmO0FBSUg7QUFSWSxpQkFBakI7QUFVSCxhQXhCSztBQXlCTkMsZ0JBekJNLGtCQXlCQztBQUNIO0FBQ0EsK0JBQUtiLFVBQUwsQ0FBZ0I7QUFDWkMseUJBQUs7QUFETyxpQkFBaEI7QUFHSDtBQTlCSyxTOzs7OztpQ0FpQ0Q7QUFDTCxnQkFBSWEsT0FBTyxJQUFYO0FBQ0EsaUJBQUtDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QixVQUFTbEIsR0FBVCxFQUFjO0FBQ25DZ0IscUJBQUt4QixRQUFMLEdBQWdCUSxHQUFoQjtBQUNILGFBRkQ7QUFHSDs7OztFQWhEbUMsZUFBS21CLEk7O2tCQUF4Qi9CLFUiLCJmaWxlIjoiY29sbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsZWN0aW9uIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUmemimOmHh+mbhidcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICB1c2VySW5mbzogbnVsbCxcbiAgICAgICAgICAgIGdyaWRDb3VudDogOVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHRha2VQaG90bygpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdHggPSB3ZXB5LmNyZWF0ZUNhbWVyYUNvbnRleHQoKVxuICAgICAgICAgICAgICAgIGN0eC50YWtlUGhvdG8oe1xuICAgICAgICAgICAgICAgICAgICBxdWFsaXR5OiAnaGlnaCcsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LnZpYnJhdGVTaG9ydCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LnJlZGlyZWN0VG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJ2RlYWxJbWFnZT9zcmM9JyArIHJlcy50ZW1wSW1hZ2VQYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaG9zZVBpYygpIHtcbiAgICAgICAgICAgICAgICB3ZXB5LmNob29zZUltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgc2l6ZVR5cGU6IFsnY29tcHJlc3NlZCddLFxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJ10sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmiJDlip/vvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHJlcy50ZW1wRmlsZVBhdGhzKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFjaygpIHtcbiAgICAgICAgICAgICAgICAvLyB3ZXB5Lm5hdmlnYXRlQmFjaygpXG4gICAgICAgICAgICAgICAgd2VweS5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnZGVhbEltYWdlP3NyYz1odHRwOi8vd3d3LnJ1YW55aWZlbmcuY29tL2Jsb2dpbWcvYXNzZXQvMjAxNS9iZzIwMTUwNzEwMDEuZ2lmJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgICAgICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gcmVzXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuIl19