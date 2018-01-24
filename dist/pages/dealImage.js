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
        }, _this.data = {
            imageSrc: ''
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYWxJbWFnZS5qcyJdLCJuYW1lcyI6WyJEZWFsSW1hZ2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImltYWdlU3JjIiwicGFyYW0iLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJKU09OIiwic3RyaW5naWZ5Iiwic3JjIiwiY3R4IiwiY3JlYXRlQ2FudmFzQ29udGV4dCIsInF1ZXJ5IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImV4ZWMiLCJyZXMiLCJ3aWR0aCIsImhlaWdodCIsImRyYXdJbWFnZSIsImRyYXciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBRXFCQSxTOzs7Ozs7Ozs7Ozs7OztnTUFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxRQUlUQyxJLEdBQU87QUFDSEMsc0JBQVU7QUFEUCxTOzs7OzsrQkFJQUMsSyxFQUFPO0FBQ1YsMkJBQUtDLFNBQUwsQ0FBZTtBQUNYQyx1QkFBTyxLQURJO0FBRVhDLHlCQUFTQyxLQUFLQyxTQUFMLENBQWVMLEtBQWY7QUFGRSxhQUFmO0FBSUEsZ0JBQU1ELFdBQVdDLE1BQU1NLEdBQXZCO0FBQ0EsZ0JBQU1DLE1BQU0sZUFBS0MsbUJBQUwsQ0FBeUIsTUFBekIsQ0FBWjs7QUFFQSxnQkFBSUMsUUFBUSxlQUFLQyxtQkFBTCxFQUFaO0FBQ0FELGtCQUFNRSxNQUFOLENBQWEsY0FBYixFQUE2QkMsa0JBQTdCO0FBQ0FILGtCQUFNSSxJQUFOLENBQVcsVUFBU0MsR0FBVCxFQUFjO0FBQ3JCLG9CQUFJQyxRQUFRRCxJQUFJLENBQUosRUFBT0MsS0FBbkI7QUFDQSxvQkFBSUMsU0FBU0YsSUFBSSxDQUFKLEVBQU9FLE1BQXBCO0FBQ0FULG9CQUFJVSxTQUFKLENBQWNsQixRQUFkLEVBQXdCLENBQXhCLEVBQTJCLENBQTNCLEVBQThCZ0IsS0FBOUIsRUFBcUNDLE1BQXJDO0FBQ0FULG9CQUFJVyxJQUFKO0FBQ0gsYUFMRDtBQU1IOzs7O0VBekJrQyxlQUFLQyxJOztrQkFBdkJ4QixTIiwiZmlsZSI6ImRlYWxJbWFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBEZWFsSW1hZ2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSZ6aKY6YeH6ZuGJ1xuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGltYWdlU3JjOiAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkKHBhcmFtKSB7XG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmiJDlip/vvIEnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHBhcmFtKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnN0IGltYWdlU3JjID0gcGFyYW0uc3JjXG4gICAgICAgICAgICBjb25zdCBjdHggPSB3ZXB5LmNyZWF0ZUNhbnZhc0NvbnRleHQoJ2RlYWwnKVxuXG4gICAgICAgICAgICBsZXQgcXVlcnkgPSB3ZXB5LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgICAgICAgcXVlcnkuc2VsZWN0KCcjZGVhbC1jYW52YXMnKS5ib3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgcXVlcnkuZXhlYyhmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgd2lkdGggPSByZXNbMF0ud2lkdGhcbiAgICAgICAgICAgICAgICBsZXQgaGVpZ2h0ID0gcmVzWzBdLmhlaWdodFxuICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2VTcmMsIDAsIDAsIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgICAgICAgICAgY3R4LmRyYXcoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiJdfQ==