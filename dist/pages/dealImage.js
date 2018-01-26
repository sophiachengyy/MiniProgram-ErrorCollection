'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _cutMask = require('./../components/cutMask.js');

var _cutMask2 = _interopRequireDefault(_cutMask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DealImage = function (_wepy$page) {
    _inherits(DealImage, _wepy$page);

    function DealImage() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DealImage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DealImage.__proto__ || Object.getPrototypeOf(DealImage)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '错题采集'
        }, _this.$repeat = {}, _this.$props = { "cutmask": { "xmlns:v-bind": "", "v-bind:width.once": "cutWidth", "v-bind:height.once": "cutHeight", "v-bind:top.once": "cutTop", "v-bind:left.once": "cutLeft" } }, _this.$events = {}, _this.components = {
            cutmask: _cutMask2.default
        }, _this.data = {
            imageSrc: '',
            cutWidth: 200,
            cutHeight: 200,
            cutLeft: 100,
            cutTop: 100
        }, _this.methods = {}, _this.computed = {
            topLeftBlockTop: function topLeftBlockTop() {
                return this.cutTop;
            },
            topLeftBlockLeft: function topLeftBlockLeft() {
                return this.cutLeft - 5;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DealImage, [{
        key: 'onLoad',
        value: function onLoad(param) {
            _wepy2.default.showModal({
                title: '成功！',
                content: JSON.stringify(param)
            });
            var imageSrc = param.src;
            var ctx = _wepy2.default.createCanvasContext('deal');

            var query = _wepy2.default.createSelectorQuery();
            query.select('#deal-canvas').boundingClientRect();
            query.exec(function (res) {
                var width = res[0].width;
                var height = res[0].height;
                ctx.drawImage(imageSrc, 0, 0, width, height);
                ctx.draw();
            });
        }
    }]);

    return DealImage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(DealImage , 'pages/dealImage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYWxJbWFnZS5qcyJdLCJuYW1lcyI6WyJEZWFsSW1hZ2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiY3V0bWFzayIsImRhdGEiLCJpbWFnZVNyYyIsImN1dFdpZHRoIiwiY3V0SGVpZ2h0IiwiY3V0TGVmdCIsImN1dFRvcCIsIm1ldGhvZHMiLCJjb21wdXRlZCIsInRvcExlZnRCbG9ja1RvcCIsInRvcExlZnRCbG9ja0xlZnQiLCJwYXJhbSIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJzcmMiLCJjdHgiLCJjcmVhdGVDYW52YXNDb250ZXh0IiwicXVlcnkiLCJjcmVhdGVTZWxlY3RvclF1ZXJ5Iiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwiZXhlYyIsInJlcyIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0ltYWdlIiwiZHJhdyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7Z01BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCO0FBRG5CLFMsUUFJVkMsTyxHQUFVLEUsUUFDakJDLE0sR0FBUyxFQUFDLFdBQVUsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixxQkFBb0IsVUFBdkMsRUFBa0Qsc0JBQXFCLFdBQXZFLEVBQW1GLG1CQUFrQixRQUFyRyxFQUE4RyxvQkFBbUIsU0FBakksRUFBWCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNGQztBQURFLFMsUUFJTkMsSSxHQUFPO0FBQ0hDLHNCQUFVLEVBRFA7QUFFSEMsc0JBQVUsR0FGUDtBQUdIQyx1QkFBVyxHQUhSO0FBSUhDLHFCQUFTLEdBSk47QUFLSEMsb0JBQVE7QUFMTCxTLFFBUVBDLE8sR0FBVSxFLFFBSVZDLFEsR0FBVztBQUNQQywyQkFETyw2QkFDVztBQUNkLHVCQUFPLEtBQUtILE1BQVo7QUFDSCxhQUhNO0FBSVBJLDRCQUpPLDhCQUlZO0FBQ2YsdUJBQU8sS0FBS0wsT0FBTCxHQUFlLENBQXRCO0FBQ0g7QUFOTSxTOzs7OzsrQkFTSk0sSyxFQUFPO0FBQ1YsMkJBQUtDLFNBQUwsQ0FBZTtBQUNYQyx1QkFBTyxLQURJO0FBRVhDLHlCQUFTQyxLQUFLQyxTQUFMLENBQWVMLEtBQWY7QUFGRSxhQUFmO0FBSUEsZ0JBQU1ULFdBQVdTLE1BQU1NLEdBQXZCO0FBQ0EsZ0JBQU1DLE1BQU0sZUFBS0MsbUJBQUwsQ0FBeUIsTUFBekIsQ0FBWjs7QUFFQSxnQkFBSUMsUUFBUSxlQUFLQyxtQkFBTCxFQUFaO0FBQ0FELGtCQUFNRSxNQUFOLENBQWEsY0FBYixFQUE2QkMsa0JBQTdCO0FBQ0FILGtCQUFNSSxJQUFOLENBQVcsVUFBU0MsR0FBVCxFQUFjO0FBQ3JCLG9CQUFJQyxRQUFRRCxJQUFJLENBQUosRUFBT0MsS0FBbkI7QUFDQSxvQkFBSUMsU0FBU0YsSUFBSSxDQUFKLEVBQU9FLE1BQXBCO0FBQ0FULG9CQUFJVSxTQUFKLENBQWMxQixRQUFkLEVBQXdCLENBQXhCLEVBQTJCLENBQTNCLEVBQThCd0IsS0FBOUIsRUFBcUNDLE1BQXJDO0FBQ0FULG9CQUFJVyxJQUFKO0FBQ0gsYUFMRDtBQU1IOzs7O0VBakRrQyxlQUFLQyxJOztrQkFBdkJyQyxTIiwiZmlsZSI6ImRlYWxJbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IGN1dE1hc2sgZnJvbSAnLi4vY29tcG9uZW50cy9jdXRNYXNrJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVhbEltYWdlIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mUmemimOmHh+mbhidcbiAgICAgICAgfVxuXG4gICAgICAgJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJjdXRtYXNrXCI6e1wieG1sbnM6di1iaW5kXCI6XCJcIixcInYtYmluZDp3aWR0aC5vbmNlXCI6XCJjdXRXaWR0aFwiLFwidi1iaW5kOmhlaWdodC5vbmNlXCI6XCJjdXRIZWlnaHRcIixcInYtYmluZDp0b3Aub25jZVwiOlwiY3V0VG9wXCIsXCJ2LWJpbmQ6bGVmdC5vbmNlXCI6XCJjdXRMZWZ0XCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgICAgICAgIGN1dG1hc2s6IGN1dE1hc2tcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpbWFnZVNyYzogJycsXG4gICAgICAgICAgICBjdXRXaWR0aDogMjAwLFxuICAgICAgICAgICAgY3V0SGVpZ2h0OiAyMDAsXG4gICAgICAgICAgICBjdXRMZWZ0OiAxMDAsXG4gICAgICAgICAgICBjdXRUb3A6IDEwMFxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29tcHV0ZWQgPSB7XG4gICAgICAgICAgICB0b3BMZWZ0QmxvY2tUb3AoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3V0VG9wXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9wTGVmdEJsb2NrTGVmdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jdXRMZWZ0IC0gNVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkKHBhcmFtKSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmiJDlip/vvIEnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHBhcmFtKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGltYWdlU3JjID0gcGFyYW0uc3JjXG4gICAgICAgICAgICBjb25zdCBjdHggPSB3ZXB5LmNyZWF0ZUNhbnZhc0NvbnRleHQoJ2RlYWwnKVxuXG4gICAgICAgICAgICBsZXQgcXVlcnkgPSB3ZXB5LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgICAgICAgcXVlcnkuc2VsZWN0KCcjZGVhbC1jYW52YXMnKS5ib3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgcXVlcnkuZXhlYyhmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgd2lkdGggPSByZXNbMF0ud2lkdGhcbiAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gcmVzWzBdLmhlaWdodFxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VTcmMsIDAsIDAsIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgICAgICAgICAgY3R4LmRyYXcoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==