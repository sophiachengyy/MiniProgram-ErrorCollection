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

// import abc from 'abc'

var Counter = function (_wepy$component) {
    _inherits(Counter, _wepy$component);

    function Counter() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Counter);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Counter;
}(_wepy2.default.component);

var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.props = {
        num: {
            type: [Number, String],
            coerce: function coerce(v) {
                return +v;
            },
            default: 50
        }
    };
    this.data = {};
    this.events = {
        'index-broadcast': function indexBroadcast() {
            var _ref2;

            var $event = (_ref2 = arguments.length - 1, arguments.length <= _ref2 ? undefined : arguments[_ref2]);
            console.log(_this2.$name + ' receive ' + $event.name + ' from ' + $event.source.$name);
        }
    };
    this.watch = {
        num: function num(curVal, oldVal) {
            console.log('\u65E7\u503C\uFF1A' + oldVal + '\uFF0C\u65B0\u503C\uFF1A' + curVal);
        }
    };
    this.methods = {
        plus: function plus() {
            this.num = this.num + 1;
            console.log(this.$name + ' plus tap');

            this.$emit('index-emit', 1, 2, 3);
        },
        minus: function minus() {
            this.num = this.num - 1;
            console.log(this.$name + ' minus tap');
        }
    };
};

exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdW50ZXIuanMiXSwibmFtZXMiOlsiQ291bnRlciIsImNvbXBvbmVudCIsInByb3BzIiwibnVtIiwidHlwZSIsIk51bWJlciIsIlN0cmluZyIsImNvZXJjZSIsInYiLCJkZWZhdWx0IiwiZGF0YSIsImV2ZW50cyIsIiRldmVudCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCIkbmFtZSIsIm5hbWUiLCJzb3VyY2UiLCJ3YXRjaCIsImN1clZhbCIsIm9sZFZhbCIsIm1ldGhvZHMiLCJwbHVzIiwiJGVtaXQiLCJtaW51cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7QUFDQTs7SUFFcUJBLE87Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFnQixlQUFLQyxTOzs7OztTQUN0Q0MsSyxHQUFRO0FBQ0pDLGFBQUs7QUFDREMsa0JBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULENBREw7QUFFREMsb0JBQVEsZ0JBQVVDLENBQVYsRUFBYTtBQUNqQix1QkFBTyxDQUFDQSxDQUFSO0FBQ0gsYUFKQTtBQUtEQyxxQkFBUztBQUxSO0FBREQsSztTQVVSQyxJLEdBQU8sRTtTQUNQQyxNLEdBQVM7QUFDTCwyQkFBbUIsMEJBQWE7QUFBQTs7QUFDNUIsZ0JBQUlDLGtCQUFjLFVBQUtDLE1BQUwsR0FBYyxDQUE1QiwyREFBSjtBQUNBQyxvQkFBUUMsR0FBUixDQUFlLE9BQUtDLEtBQXBCLGlCQUFxQ0osT0FBT0ssSUFBNUMsY0FBeURMLE9BQU9NLE1BQVAsQ0FBY0YsS0FBdkU7QUFDSDtBQUpJLEs7U0FPVEcsSyxHQUFRO0FBQ0poQixXQURJLGVBQ0FpQixNQURBLEVBQ1FDLE1BRFIsRUFDZ0I7QUFDaEJQLG9CQUFRQyxHQUFSLHdCQUFrQk0sTUFBbEIsZ0NBQStCRCxNQUEvQjtBQUNIO0FBSEcsSztTQU1SRSxPLEdBQVU7QUFDTkMsWUFETSxrQkFDQztBQUNILGlCQUFLcEIsR0FBTCxHQUFXLEtBQUtBLEdBQUwsR0FBVyxDQUF0QjtBQUNBVyxvQkFBUUMsR0FBUixDQUFZLEtBQUtDLEtBQUwsR0FBYSxXQUF6Qjs7QUFFQSxpQkFBS1EsS0FBTCxDQUFXLFlBQVgsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0I7QUFDSCxTQU5LO0FBT05DLGFBUE0sbUJBT0U7QUFDSixpQkFBS3RCLEdBQUwsR0FBVyxLQUFLQSxHQUFMLEdBQVcsQ0FBdEI7QUFDQVcsb0JBQVFDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLEdBQWEsWUFBekI7QUFDSDtBQVZLLEs7OztrQkF6Qk9oQixPIiwiZmlsZSI6ImNvdW50ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIC8vIGltcG9ydCBhYmMgZnJvbSAnYWJjJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ291bnRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICAgICAgcHJvcHMgPSB7XG4gICAgICAgICAgICBudW06IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgICAgICAgICAgIGNvZXJjZTogZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICt2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiA1MFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGF0YSA9IHt9XG4gICAgICAgIGV2ZW50cyA9IHtcbiAgICAgICAgICAgICdpbmRleC1icm9hZGNhc3QnOiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCAkZXZlbnQgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLiRuYW1lfSByZWNlaXZlICR7JGV2ZW50Lm5hbWV9IGZyb20gJHskZXZlbnQuc291cmNlLiRuYW1lfWApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3YXRjaCA9IHtcbiAgICAgICAgICAgIG51bShjdXJWYWwsIG9sZFZhbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGDml6flgLzvvJoke29sZFZhbH3vvIzmlrDlgLzvvJoke2N1clZhbH1gKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHBsdXMoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5udW0gPSB0aGlzLm51bSArIDFcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiRuYW1lICsgJyBwbHVzIHRhcCcpXG5cbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbmRleC1lbWl0JywgMSwgMiwgMylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtaW51cygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm51bSA9IHRoaXMubnVtIC0gMVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuJG5hbWUgKyAnIG1pbnVzIHRhcCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=