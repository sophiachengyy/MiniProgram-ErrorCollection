'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
    _inherits(_default, _wepy$app);

    function _default() {
        _classCallCheck(this, _default);

        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

        _this.config = {
            pages: ['pages/home', 'pages/collection', 'pages/dealImage'],
            window: {
                backgroundTextStyle: 'light',
                navigationBarBackgroundColor: '#42de93',
                navigationBarTitleText: '云智错题本',
                navigationBarTextStyle: 'black'
            },
            tabBar: {
                list: [{
                    pagePath: 'pages/home',
                    text: '我的错题'
                }, {
                    pagePath: 'pages/collection',
                    text: '错题采集'
                }]
            }
        };
        _this.globalData = {
            userInfo: null
        };
        _this.methods = {
            back: function back() {
                _wepy2.default.navigateBack();
            }
        };

        _this.use('requestfix');
        return _this;
    }

    _createClass(_default, [{
        key: 'onLaunch',
        value: function onLaunch() {
            this.getUserInfo();
        }
    }, {
        key: 'sleep',
        value: function sleep(s) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve('promise resolved');
                }, s * 1000);
            });
        }
    }, {
        key: 'testAsync',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.sleep(3);

                            case 2:
                                data = _context.sent;

                                console.log(data);

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function testAsync() {
                return _ref.apply(this, arguments);
            }

            return testAsync;
        }()
    }, {
        key: 'getUserInfo',
        value: function getUserInfo(cb) {
            var that = this;
            if (this.globalData.userInfo) {
                return this.globalData.userInfo;
            }
            _wepy2.default.getUserInfo({
                success: function success(res) {
                    that.globalData.userInfo = res.userInfo;
                    cb && cb(res.userInfo);
                },
                fail: function fail(res) {
                    _wepy2.default.openSetting();
                }
            });
        }
    }]);

    return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJ0YWJCYXIiLCJsaXN0IiwicGFnZVBhdGgiLCJ0ZXh0IiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwibWV0aG9kcyIsImJhY2siLCJuYXZpZ2F0ZUJhY2siLCJ1c2UiLCJnZXRVc2VySW5mbyIsInMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJzbGVlcCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2IiLCJ0aGF0Iiwic3VjY2VzcyIsInJlcyIsImZhaWwiLCJvcGVuU2V0dGluZyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBOEJJLHdCQUFjO0FBQUE7O0FBQUE7O0FBQUEsY0EzQmRBLE1BMkJjLEdBM0JMO0FBQ0xDLG1CQUFPLENBQ0gsWUFERyxFQUVILGtCQUZHLEVBR0gsaUJBSEcsQ0FERjtBQU1MQyxvQkFBUTtBQUNKQyxxQ0FBcUIsT0FEakI7QUFFSkMsOENBQThCLFNBRjFCO0FBR0pDLHdDQUF3QixPQUhwQjtBQUlKQyx3Q0FBd0I7QUFKcEIsYUFOSDtBQVlMQyxvQkFBUTtBQUNKQyxzQkFBTSxDQUFDO0FBQ0hDLDhCQUFVLFlBRFA7QUFFSEMsMEJBQU07QUFGSCxpQkFBRCxFQUdIO0FBQ0NELDhCQUFVLGtCQURYO0FBRUNDLDBCQUFNO0FBRlAsaUJBSEc7QUFERjtBQVpILFNBMkJLO0FBQUEsY0FKZEMsVUFJYyxHQUpEO0FBQ1RDLHNCQUFVO0FBREQsU0FJQztBQUFBLGNBcUNkQyxPQXJDYyxHQXFDSjtBQUNOQyxnQkFETSxrQkFDQztBQUNILCtCQUFLQyxZQUFMO0FBQ0g7QUFISyxTQXJDSTs7QUFFVixjQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZVO0FBR2I7Ozs7bUNBRVU7QUFDUCxpQkFBS0MsV0FBTDtBQUNIOzs7OEJBRUtDLEMsRUFBRztBQUNMLG1CQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENDLDJCQUFXLFlBQU07QUFDYkYsNEJBQVEsa0JBQVI7QUFDSCxpQkFGRCxFQUVHRixJQUFJLElBRlA7QUFHSCxhQUpNLENBQVA7QUFLSDs7Ozs7Ozs7Ozs7dUNBR3NCLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiQyxvQzs7QUFDTkMsd0NBQVFDLEdBQVIsQ0FBWUYsSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUdRRyxFLEVBQUk7QUFDWixnQkFBTUMsT0FBTyxJQUFiO0FBQ0EsZ0JBQUksS0FBS2pCLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzFCLHVCQUFPLEtBQUtELFVBQUwsQ0FBZ0JDLFFBQXZCO0FBQ0g7QUFDRCwyQkFBS0ssV0FBTCxDQUFpQjtBQUNiWSx1QkFEYSxtQkFDTEMsR0FESyxFQUNBO0FBQ1RGLHlCQUFLakIsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJrQixJQUFJbEIsUUFBL0I7QUFDQWUsMEJBQU1BLEdBQUdHLElBQUlsQixRQUFQLENBQU47QUFDSCxpQkFKWTtBQUtibUIsb0JBTGEsZ0JBS1JELEdBTFEsRUFLSDtBQUNOLG1DQUFLRSxXQUFMO0FBQ0g7QUFQWSxhQUFqQjtBQVNIOzs7O0VBaEV3QixlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHBhZ2VzOiBbXG4gICAgICAgICAgICAgICAgJ3BhZ2VzL2hvbWUnLFxuICAgICAgICAgICAgICAgICdwYWdlcy9jb2xsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAncGFnZXMvZGVhbEltYWdlJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHdpbmRvdzoge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyM0MmRlOTMnLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkupHmmbrplJnpopjmnKwnLFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICdibGFjaydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWJCYXI6IHtcbiAgICAgICAgICAgICAgICBsaXN0OiBbe1xuICAgICAgICAgICAgICAgICAgICBwYWdlUGF0aDogJ3BhZ2VzL2hvbWUnLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn5oiR55qE6ZSZ6aKYJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9jb2xsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ+mUmemimOmHh+mbhidcbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2xvYmFsRGF0YSA9IHtcbiAgICAgICAgICAgIHVzZXJJbmZvOiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgICAgIHN1cGVyKClcbiAgICAgICAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTGF1bmNoKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpXG4gICAgICAgIH1cblxuICAgICAgICBzbGVlcChzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcbiAgICAgICAgICAgICAgICB9LCBzICogMTAwMClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyB0ZXN0QXN5bmMoKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5zbGVlcCgzKVxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFVzZXJJbmZvKGNiKSB7XG4gICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpc1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgICAgICAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsKHJlcykge1xuICAgICAgICAgICAgICAgICAgICB3ZXB5Lm9wZW5TZXR0aW5nKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBiYWNrKCkge1xuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVCYWNrKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==