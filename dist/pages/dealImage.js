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

var sx = void 0,
    sy = void 0,
    mx = void 0,
    my = void 0;
var psx = void 0,
    psy = void 0,
    pmx = void 0,
    pmy = void 0;
var MIN_CUT_WIDTH = 20;

var DealImage = function (_wepy$page) {
    _inherits(DealImage, _wepy$page);

    function DealImage() {
        var _ref;

        var _temp, _this2, _ret;

        _classCallCheck(this, DealImage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = DealImage.__proto__ || Object.getPrototypeOf(DealImage)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
            navigationBarTitleText: '错题采集'
        }, _this2.components = {}, _this2.data = {
            imageSrc: '',
            cutWidth: 200,
            cutHeight: 200,
            cutLeft: 100,
            cutTop: 100,
            containerWidth: 0,
            containerHeight: 0,
            ctx: null
        }, _this2.methods = {
            blockTouchStart: function blockTouchStart(e) {
                sx = e.touches[0].clientX;
                sy = e.touches[0].clientY;
            },
            blockTouchMove: function blockTouchMove(e) {
                mx = e.touches[0].clientX;
                my = e.touches[0].clientY;
                var ox = mx - sx;
                var oy = my - sy;
                this.moveCutBlock(ox, oy);
                sx = mx;
                sy = my;
            },
            pointTouchStart: function pointTouchStart(e) {
                psx = e.touches[0].clientX;
                psy = e.touches[0].clientY;
            },
            pointTouchMove: function pointTouchMove(e) {
                pmx = e.touches[0].clientX;
                pmy = e.touches[0].clientY;
                var ox = pmx - psx;
                var oy = pmy - psy;
                this.resizeCutBlock(ox, oy, e.currentTarget);
                psx = pmx;
                psy = pmy;
            },
            doCut: function doCut() {
                var _this = this;
                _wepy2.default.showLoading({
                    title: '处理中。。。'
                });
                _wepy2.default.canvasToTempFilePath({
                    x: this.cutLeft,
                    y: this.cutTop,
                    width: this.cutWidth,
                    height: this.cutHeight,
                    canvasId: 'deal',
                    success: function success(res) {
                        _wepy2.default.hideLoading();
                        _this.imageSrc = res.tempFilePath;
                        _this.$apply();
                        _wepy2.default.showToast({
                            title: _this.imageSrc
                        });
                    },
                    fail: function fail(res) {
                        _wepy2.default.hideLoading();
                        _wepy2.default.showModal({
                            title: '提示',
                            content: JSON.stringify(res)
                        });
                    }
                });
            }
        }, _this2.computed = {
            maxLeft: function maxLeft() {
                return this.containerWidth - this.cutWidth;
            },
            maxTop: function maxTop() {
                return this.containerHeight - this.cutHeight;
            }
        }, _temp), _possibleConstructorReturn(_this2, _ret);
    }

    _createClass(DealImage, [{
        key: 'moveCutBlock',
        value: function moveCutBlock(ox, oy) {
            var distX = this.cutLeft + ox;
            var distY = this.cutTop + oy;
            if (distX >= 0 && distY >= 0 && distX <= this.maxLeft && distY < this.maxTop) {
                this.cutLeft = distX;
                this.cutTop = distY;
            } else {
                if (distX < 0) {
                    distX = 0;
                }
                if (distY < 0) {
                    distY = 0;
                }
                if (distX > this.maxLeft) {
                    distX = this.maxLeft;
                }
                if (distY > this.maxTop) {
                    distY = this.maxTop;
                }
                this.cutLeft = distX;
                this.cutTop = distY;
            }
        }
    }, {
        key: 'resizeCutBlock',
        value: function resizeCutBlock(ox, oy, target) {
            if (target.dataset.pos === 'top') {
                this.resizeTop(ox, oy);
            } else if (target.dataset.pos === 'left') {
                this.resizeLeft(ox, oy);
            } else if (target.dataset.pos === 'bottom') {
                this.resizeBottom(ox, oy);
            } else if (target.dataset.pos === 'right') {
                this.resizeRight(ox, oy);
            } else if (target.dataset.pos === 'top-left') {
                this.resizeLeft(ox, oy);
                this.resizeTop(ox, oy);
            } else if (target.dataset.pos === 'top-right') {
                this.resizeRight(ox, oy);
                this.resizeTop(ox, oy);
            } else if (target.dataset.pos === 'bottom-left') {
                this.resizeLeft(ox, oy);
                this.resizeBottom(ox, oy);
            } else if (target.dataset.pos === 'bottom-right') {
                this.resizeRight(ox, oy);
                this.resizeBottom(ox, oy);
            }
        }
    }, {
        key: 'resizeTop',
        value: function resizeTop(ox, oy) {
            var distTop = this.cutTop + oy;
            var fixTop = Math.max(distTop, 0);
            fixTop = Math.min(fixTop, this.cutTop + this.cutHeight - MIN_CUT_WIDTH);
            var realChangeH = fixTop - this.cutTop;
            this.cutHeight -= realChangeH;
            this.cutTop = fixTop;
        }
    }, {
        key: 'resizeLeft',
        value: function resizeLeft(ox, oy) {
            var distLeft = this.cutLeft + ox;
            var fixLeft = Math.max(distLeft, 0);
            fixLeft = Math.min(fixLeft, this.cutLeft + this.cutWidth - MIN_CUT_WIDTH);
            var realChangeW = fixLeft - this.cutLeft;
            this.cutWidth -= realChangeW;
            this.cutLeft = fixLeft;
        }
    }, {
        key: 'resizeRight',
        value: function resizeRight(ox, oy) {
            var distW = this.cutWidth + ox;
            var fixW = Math.max(distW, MIN_CUT_WIDTH);
            fixW = Math.min(fixW, this.containerWidth - this.cutLeft);
            this.cutWidth = fixW;
        }
    }, {
        key: 'resizeBottom',
        value: function resizeBottom(ox, oy) {
            var distH = this.cutHeight + oy;
            var fixH = Math.max(distH, MIN_CUT_WIDTH);
            fixH = Math.min(fixH, this.containerHeight - this.cutTop);
            this.cutHeight = fixH;
        }
    }, {
        key: 'onLoad',
        value: function onLoad(param) {
            var imageSrc = param.src;
            this.imageSrc = imageSrc;
            var ctx = _wepy2.default.createCanvasContext('deal');
            this.ctx = ctx;
        }
    }, {
        key: 'onReady',
        value: function onReady() {
            var _this3 = this;

            var _this = this;
            var query = _wepy2.default.createSelectorQuery();
            query.select('#deal-canvas').boundingClientRect();
            query.exec(function (res) {
                var canvasWidth = res[0].width;
                var canvasHeight = res[0].height;
                _wepy2.default.getImageInfo({
                    src: _this.imageSrc,
                    success: function success(res) {
                        var drawWidth = void 0,
                            drawHeight = void 0;
                        if (res.width / res.height > 1) {
                            drawWidth = canvasWidth;
                            drawHeight = drawWidth * res.height / res.width;
                        } else {
                            drawHeight = canvasHeight;
                            drawWidth = drawHeight * res.width / res.height;
                        }
                        var offsetX = (canvasWidth - drawWidth) / 2;
                        var offsetY = (canvasHeight - drawHeight) / 2;
                        _this.ctx.drawImage(_this.imageSrc, offsetX, offsetY, drawWidth, drawHeight);
                        _this.ctx.draw();
                    }
                });
            });

            var subQuery = _wepy2.default.createSelectorQuery();
            subQuery.select('.rect-cut-container').boundingClientRect();
            subQuery.exec(function (res) {
                _this3.containerWidth = res[0].width;
                _this3.containerHeight = res[0].height;
            });
        }
    }]);

    return DealImage;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(DealImage , 'pages/dealImage'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlYWxJbWFnZS5qcyJdLCJuYW1lcyI6WyJzeCIsInN5IiwibXgiLCJteSIsInBzeCIsInBzeSIsInBteCIsInBteSIsIk1JTl9DVVRfV0lEVEgiLCJEZWFsSW1hZ2UiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJpbWFnZVNyYyIsImN1dFdpZHRoIiwiY3V0SGVpZ2h0IiwiY3V0TGVmdCIsImN1dFRvcCIsImNvbnRhaW5lcldpZHRoIiwiY29udGFpbmVySGVpZ2h0IiwiY3R4IiwibWV0aG9kcyIsImJsb2NrVG91Y2hTdGFydCIsImUiLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJibG9ja1RvdWNoTW92ZSIsIm94Iiwib3kiLCJtb3ZlQ3V0QmxvY2siLCJwb2ludFRvdWNoU3RhcnQiLCJwb2ludFRvdWNoTW92ZSIsInJlc2l6ZUN1dEJsb2NrIiwiY3VycmVudFRhcmdldCIsImRvQ3V0IiwiX3RoaXMiLCJzaG93TG9hZGluZyIsInRpdGxlIiwiY2FudmFzVG9UZW1wRmlsZVBhdGgiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0IiwiY2FudmFzSWQiLCJzdWNjZXNzIiwicmVzIiwiaGlkZUxvYWRpbmciLCJ0ZW1wRmlsZVBhdGgiLCIkYXBwbHkiLCJzaG93VG9hc3QiLCJmYWlsIiwic2hvd01vZGFsIiwiY29udGVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb21wdXRlZCIsIm1heExlZnQiLCJtYXhUb3AiLCJkaXN0WCIsImRpc3RZIiwidGFyZ2V0IiwiZGF0YXNldCIsInBvcyIsInJlc2l6ZVRvcCIsInJlc2l6ZUxlZnQiLCJyZXNpemVCb3R0b20iLCJyZXNpemVSaWdodCIsImRpc3RUb3AiLCJmaXhUb3AiLCJNYXRoIiwibWF4IiwibWluIiwicmVhbENoYW5nZUgiLCJkaXN0TGVmdCIsImZpeExlZnQiLCJyZWFsQ2hhbmdlVyIsImRpc3RXIiwiZml4VyIsImRpc3RIIiwiZml4SCIsInBhcmFtIiwic3JjIiwiY3JlYXRlQ2FudmFzQ29udGV4dCIsInF1ZXJ5IiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsInNlbGVjdCIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImV4ZWMiLCJjYW52YXNXaWR0aCIsImNhbnZhc0hlaWdodCIsImdldEltYWdlSW5mbyIsImRyYXdXaWR0aCIsImRyYXdIZWlnaHQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImRyYXdJbWFnZSIsImRyYXciLCJzdWJRdWVyeSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxXQUFKO0FBQUEsSUFBUUMsV0FBUjtBQUFBLElBQVlDLFdBQVo7QUFBQSxJQUFnQkMsV0FBaEI7QUFDQSxJQUFJQyxZQUFKO0FBQUEsSUFBU0MsWUFBVDtBQUFBLElBQWNDLFlBQWQ7QUFBQSxJQUFtQkMsWUFBbkI7QUFDQSxJQUFNQyxnQkFBZ0IsRUFBdEI7O0lBRXFCQyxTOzs7Ozs7Ozs7Ozs7OzttTUFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0I7QUFEbkIsUyxTQUlUQyxVLEdBQWEsRSxTQUdiQyxJLEdBQU87QUFDSEMsc0JBQVUsRUFEUDtBQUVIQyxzQkFBVSxHQUZQO0FBR0hDLHVCQUFXLEdBSFI7QUFJSEMscUJBQVMsR0FKTjtBQUtIQyxvQkFBUSxHQUxMO0FBTUhDLDRCQUFnQixDQU5iO0FBT0hDLDZCQUFpQixDQVBkO0FBUUhDLGlCQUFLO0FBUkYsUyxTQVdQQyxPLEdBQVU7QUFDTkMsMkJBRE0sMkJBQ1VDLENBRFYsRUFDYTtBQUNmeEIscUJBQUt3QixFQUFFQyxPQUFGLENBQVUsQ0FBVixFQUFhQyxPQUFsQjtBQUNBekIscUJBQUt1QixFQUFFQyxPQUFGLENBQVUsQ0FBVixFQUFhRSxPQUFsQjtBQUNILGFBSks7QUFLTkMsMEJBTE0sMEJBS1NKLENBTFQsRUFLWTtBQUNkdEIscUJBQUtzQixFQUFFQyxPQUFGLENBQVUsQ0FBVixFQUFhQyxPQUFsQjtBQUNBdkIscUJBQUtxQixFQUFFQyxPQUFGLENBQVUsQ0FBVixFQUFhRSxPQUFsQjtBQUNBLG9CQUFJRSxLQUFLM0IsS0FBS0YsRUFBZDtBQUNBLG9CQUFJOEIsS0FBSzNCLEtBQUtGLEVBQWQ7QUFDQSxxQkFBSzhCLFlBQUwsQ0FBa0JGLEVBQWxCLEVBQXNCQyxFQUF0QjtBQUNBOUIscUJBQUtFLEVBQUw7QUFDQUQscUJBQUtFLEVBQUw7QUFDSCxhQWJLO0FBY042QiwyQkFkTSwyQkFjVVIsQ0FkVixFQWNhO0FBQ2ZwQixzQkFBTW9CLEVBQUVDLE9BQUYsQ0FBVSxDQUFWLEVBQWFDLE9BQW5CO0FBQ0FyQixzQkFBTW1CLEVBQUVDLE9BQUYsQ0FBVSxDQUFWLEVBQWFFLE9BQW5CO0FBQ0gsYUFqQks7QUFrQk5NLDBCQWxCTSwwQkFrQlNULENBbEJULEVBa0JZO0FBQ2RsQixzQkFBTWtCLEVBQUVDLE9BQUYsQ0FBVSxDQUFWLEVBQWFDLE9BQW5CO0FBQ0FuQixzQkFBTWlCLEVBQUVDLE9BQUYsQ0FBVSxDQUFWLEVBQWFFLE9BQW5CO0FBQ0Esb0JBQUlFLEtBQUt2QixNQUFNRixHQUFmO0FBQ0Esb0JBQUkwQixLQUFLdkIsTUFBTUYsR0FBZjtBQUNBLHFCQUFLNkIsY0FBTCxDQUFvQkwsRUFBcEIsRUFBd0JDLEVBQXhCLEVBQTRCTixFQUFFVyxhQUE5QjtBQUNBL0Isc0JBQU1FLEdBQU47QUFDQUQsc0JBQU1FLEdBQU47QUFDSCxhQTFCSztBQTJCTjZCLGlCQTNCTSxtQkEyQkU7QUFDSixvQkFBTUMsUUFBUSxJQUFkO0FBQ0EsK0JBQUtDLFdBQUwsQ0FBaUI7QUFDYkMsMkJBQU87QUFETSxpQkFBakI7QUFHQSwrQkFBS0Msb0JBQUwsQ0FBMEI7QUFDdEJDLHVCQUFHLEtBQUt4QixPQURjO0FBRXRCeUIsdUJBQUcsS0FBS3hCLE1BRmM7QUFHdEJ5QiwyQkFBTyxLQUFLNUIsUUFIVTtBQUl0QjZCLDRCQUFRLEtBQUs1QixTQUpTO0FBS3RCNkIsOEJBQVUsTUFMWTtBQU10QkMsMkJBTnNCLG1CQU1kQyxHQU5jLEVBTVQ7QUFDVCx1Q0FBS0MsV0FBTDtBQUNBWCw4QkFBTXZCLFFBQU4sR0FBaUJpQyxJQUFJRSxZQUFyQjtBQUNBWiw4QkFBTWEsTUFBTjtBQUNBLHVDQUFLQyxTQUFMLENBQWU7QUFDWFosbUNBQU9GLE1BQU12QjtBQURGLHlCQUFmO0FBR0gscUJBYnFCO0FBY3RCc0Msd0JBZHNCLGdCQWNqQkwsR0FkaUIsRUFjWjtBQUNOLHVDQUFLQyxXQUFMO0FBQ0EsdUNBQUtLLFNBQUwsQ0FBZTtBQUNYZCxtQ0FBTyxJQURJO0FBRVhlLHFDQUFTQyxLQUFLQyxTQUFMLENBQWVULEdBQWY7QUFGRSx5QkFBZjtBQUlIO0FBcEJxQixpQkFBMUI7QUFzQkg7QUF0REssUyxTQXlJVlUsUSxHQUFXO0FBQ1BDLG1CQURPLHFCQUNHO0FBQ04sdUJBQU8sS0FBS3ZDLGNBQUwsR0FBc0IsS0FBS0osUUFBbEM7QUFDSCxhQUhNO0FBSVA0QyxrQkFKTyxvQkFJRTtBQUNMLHVCQUFPLEtBQUt2QyxlQUFMLEdBQXVCLEtBQUtKLFNBQW5DO0FBQ0g7QUFOTSxTOzs7OztxQ0FoRkVhLEUsRUFBSUMsRSxFQUFJO0FBQ2pCLGdCQUFJOEIsUUFBUSxLQUFLM0MsT0FBTCxHQUFlWSxFQUEzQjtBQUNBLGdCQUFJZ0MsUUFBUSxLQUFLM0MsTUFBTCxHQUFjWSxFQUExQjtBQUNBLGdCQUFJOEIsU0FBUyxDQUFULElBQWNDLFNBQVMsQ0FBdkIsSUFBNkJELFNBQVMsS0FBS0YsT0FBM0MsSUFBdURHLFFBQVEsS0FBS0YsTUFBeEUsRUFBZ0Y7QUFDNUUscUJBQUsxQyxPQUFMLEdBQWUyQyxLQUFmO0FBQ0EscUJBQUsxQyxNQUFMLEdBQWMyQyxLQUFkO0FBQ0gsYUFIRCxNQUdPO0FBQ0gsb0JBQUlELFFBQVEsQ0FBWixFQUFlO0FBQ1hBLDRCQUFRLENBQVI7QUFDSDtBQUNELG9CQUFJQyxRQUFRLENBQVosRUFBZTtBQUNYQSw0QkFBUSxDQUFSO0FBQ0g7QUFDRCxvQkFBSUQsUUFBUSxLQUFLRixPQUFqQixFQUEwQjtBQUN0QkUsNEJBQVEsS0FBS0YsT0FBYjtBQUNIO0FBQ0Qsb0JBQUlHLFFBQVEsS0FBS0YsTUFBakIsRUFBeUI7QUFDckJFLDRCQUFRLEtBQUtGLE1BQWI7QUFDSDtBQUNELHFCQUFLMUMsT0FBTCxHQUFlMkMsS0FBZjtBQUNBLHFCQUFLMUMsTUFBTCxHQUFjMkMsS0FBZDtBQUNIO0FBQ0o7Ozt1Q0FFY2hDLEUsRUFBSUMsRSxFQUFJZ0MsTSxFQUFRO0FBQzNCLGdCQUFJQSxPQUFPQyxPQUFQLENBQWVDLEdBQWYsS0FBdUIsS0FBM0IsRUFBa0M7QUFDOUIscUJBQUtDLFNBQUwsQ0FBZXBDLEVBQWYsRUFBbUJDLEVBQW5CO0FBQ0gsYUFGRCxNQUVPLElBQUlnQyxPQUFPQyxPQUFQLENBQWVDLEdBQWYsS0FBdUIsTUFBM0IsRUFBbUM7QUFDdEMscUJBQUtFLFVBQUwsQ0FBZ0JyQyxFQUFoQixFQUFvQkMsRUFBcEI7QUFDSCxhQUZNLE1BRUEsSUFBSWdDLE9BQU9DLE9BQVAsQ0FBZUMsR0FBZixLQUF1QixRQUEzQixFQUFxQztBQUN4QyxxQkFBS0csWUFBTCxDQUFrQnRDLEVBQWxCLEVBQXNCQyxFQUF0QjtBQUNILGFBRk0sTUFFQSxJQUFJZ0MsT0FBT0MsT0FBUCxDQUFlQyxHQUFmLEtBQXVCLE9BQTNCLEVBQW9DO0FBQ3ZDLHFCQUFLSSxXQUFMLENBQWlCdkMsRUFBakIsRUFBcUJDLEVBQXJCO0FBQ0gsYUFGTSxNQUVBLElBQUlnQyxPQUFPQyxPQUFQLENBQWVDLEdBQWYsS0FBdUIsVUFBM0IsRUFBdUM7QUFDMUMscUJBQUtFLFVBQUwsQ0FBZ0JyQyxFQUFoQixFQUFvQkMsRUFBcEI7QUFDQSxxQkFBS21DLFNBQUwsQ0FBZXBDLEVBQWYsRUFBbUJDLEVBQW5CO0FBQ0gsYUFITSxNQUdBLElBQUlnQyxPQUFPQyxPQUFQLENBQWVDLEdBQWYsS0FBdUIsV0FBM0IsRUFBd0M7QUFDM0MscUJBQUtJLFdBQUwsQ0FBaUJ2QyxFQUFqQixFQUFxQkMsRUFBckI7QUFDQSxxQkFBS21DLFNBQUwsQ0FBZXBDLEVBQWYsRUFBbUJDLEVBQW5CO0FBQ0gsYUFITSxNQUdBLElBQUlnQyxPQUFPQyxPQUFQLENBQWVDLEdBQWYsS0FBdUIsYUFBM0IsRUFBMEM7QUFDN0MscUJBQUtFLFVBQUwsQ0FBZ0JyQyxFQUFoQixFQUFvQkMsRUFBcEI7QUFDQSxxQkFBS3FDLFlBQUwsQ0FBa0J0QyxFQUFsQixFQUFzQkMsRUFBdEI7QUFDSCxhQUhNLE1BR0EsSUFBSWdDLE9BQU9DLE9BQVAsQ0FBZUMsR0FBZixLQUF1QixjQUEzQixFQUEyQztBQUM5QyxxQkFBS0ksV0FBTCxDQUFpQnZDLEVBQWpCLEVBQXFCQyxFQUFyQjtBQUNBLHFCQUFLcUMsWUFBTCxDQUFrQnRDLEVBQWxCLEVBQXNCQyxFQUF0QjtBQUNIO0FBQ0o7OztrQ0FFU0QsRSxFQUFJQyxFLEVBQUk7QUFDZCxnQkFBSXVDLFVBQVUsS0FBS25ELE1BQUwsR0FBY1ksRUFBNUI7QUFDQSxnQkFBSXdDLFNBQVNDLEtBQUtDLEdBQUwsQ0FBU0gsT0FBVCxFQUFrQixDQUFsQixDQUFiO0FBQ0FDLHFCQUFTQyxLQUFLRSxHQUFMLENBQVNILE1BQVQsRUFBaUIsS0FBS3BELE1BQUwsR0FBYyxLQUFLRixTQUFuQixHQUErQlIsYUFBaEQsQ0FBVDtBQUNBLGdCQUFJa0UsY0FBY0osU0FBUyxLQUFLcEQsTUFBaEM7QUFDQSxpQkFBS0YsU0FBTCxJQUFrQjBELFdBQWxCO0FBQ0EsaUJBQUt4RCxNQUFMLEdBQWNvRCxNQUFkO0FBQ0g7OzttQ0FFVXpDLEUsRUFBSUMsRSxFQUFJO0FBQ2YsZ0JBQUk2QyxXQUFXLEtBQUsxRCxPQUFMLEdBQWVZLEVBQTlCO0FBQ0EsZ0JBQUkrQyxVQUFVTCxLQUFLQyxHQUFMLENBQVNHLFFBQVQsRUFBbUIsQ0FBbkIsQ0FBZDtBQUNBQyxzQkFBVUwsS0FBS0UsR0FBTCxDQUFTRyxPQUFULEVBQWtCLEtBQUszRCxPQUFMLEdBQWUsS0FBS0YsUUFBcEIsR0FBK0JQLGFBQWpELENBQVY7QUFDQSxnQkFBSXFFLGNBQWNELFVBQVUsS0FBSzNELE9BQWpDO0FBQ0EsaUJBQUtGLFFBQUwsSUFBaUI4RCxXQUFqQjtBQUNBLGlCQUFLNUQsT0FBTCxHQUFlMkQsT0FBZjtBQUNIOzs7b0NBRVcvQyxFLEVBQUlDLEUsRUFBSTtBQUNoQixnQkFBSWdELFFBQVEsS0FBSy9ELFFBQUwsR0FBZ0JjLEVBQTVCO0FBQ0EsZ0JBQUlrRCxPQUFPUixLQUFLQyxHQUFMLENBQVNNLEtBQVQsRUFBZ0J0RSxhQUFoQixDQUFYO0FBQ0F1RSxtQkFBT1IsS0FBS0UsR0FBTCxDQUFTTSxJQUFULEVBQWUsS0FBSzVELGNBQUwsR0FBc0IsS0FBS0YsT0FBMUMsQ0FBUDtBQUNBLGlCQUFLRixRQUFMLEdBQWdCZ0UsSUFBaEI7QUFDSDs7O3FDQUVZbEQsRSxFQUFJQyxFLEVBQUk7QUFDakIsZ0JBQUlrRCxRQUFRLEtBQUtoRSxTQUFMLEdBQWlCYyxFQUE3QjtBQUNBLGdCQUFJbUQsT0FBT1YsS0FBS0MsR0FBTCxDQUFTUSxLQUFULEVBQWdCeEUsYUFBaEIsQ0FBWDtBQUNBeUUsbUJBQU9WLEtBQUtFLEdBQUwsQ0FBU1EsSUFBVCxFQUFlLEtBQUs3RCxlQUFMLEdBQXVCLEtBQUtGLE1BQTNDLENBQVA7QUFDQSxpQkFBS0YsU0FBTCxHQUFpQmlFLElBQWpCO0FBQ0g7OzsrQkFXTUMsSyxFQUFPO0FBQ1YsZ0JBQU1wRSxXQUFXb0UsTUFBTUMsR0FBdkI7QUFDQSxpQkFBS3JFLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsZ0JBQU1PLE1BQU0sZUFBSytELG1CQUFMLENBQXlCLE1BQXpCLENBQVo7QUFDQSxpQkFBSy9ELEdBQUwsR0FBV0EsR0FBWDtBQUNIOzs7a0NBRVM7QUFBQTs7QUFDTixnQkFBTWdCLFFBQVEsSUFBZDtBQUNBLGdCQUFJZ0QsUUFBUSxlQUFLQyxtQkFBTCxFQUFaO0FBQ0FELGtCQUFNRSxNQUFOLENBQWEsY0FBYixFQUE2QkMsa0JBQTdCO0FBQ0FILGtCQUFNSSxJQUFOLENBQVcsVUFBUzFDLEdBQVQsRUFBYztBQUNyQixvQkFBSTJDLGNBQWMzQyxJQUFJLENBQUosRUFBT0osS0FBekI7QUFDQSxvQkFBSWdELGVBQWU1QyxJQUFJLENBQUosRUFBT0gsTUFBMUI7QUFDQSwrQkFBS2dELFlBQUwsQ0FBa0I7QUFDZFQseUJBQUs5QyxNQUFNdkIsUUFERztBQUVkZ0MsMkJBRmMsbUJBRU5DLEdBRk0sRUFFRDtBQUNULDRCQUFJOEMsa0JBQUo7QUFBQSw0QkFBZUMsbUJBQWY7QUFDQSw0QkFBSS9DLElBQUlKLEtBQUosR0FBWUksSUFBSUgsTUFBaEIsR0FBeUIsQ0FBN0IsRUFBZ0M7QUFDNUJpRCx3Q0FBWUgsV0FBWjtBQUNBSSx5Q0FBYUQsWUFBWTlDLElBQUlILE1BQWhCLEdBQXlCRyxJQUFJSixLQUExQztBQUNILHlCQUhELE1BR087QUFDSG1ELHlDQUFhSCxZQUFiO0FBQ0FFLHdDQUFZQyxhQUFhL0MsSUFBSUosS0FBakIsR0FBeUJJLElBQUlILE1BQXpDO0FBQ0g7QUFDRCw0QkFBSW1ELFVBQVUsQ0FBQ0wsY0FBY0csU0FBZixJQUE0QixDQUExQztBQUNBLDRCQUFJRyxVQUFVLENBQUNMLGVBQWVHLFVBQWhCLElBQThCLENBQTVDO0FBQ0F6RCw4QkFBTWhCLEdBQU4sQ0FBVTRFLFNBQVYsQ0FBb0I1RCxNQUFNdkIsUUFBMUIsRUFBb0NpRixPQUFwQyxFQUE2Q0MsT0FBN0MsRUFBc0RILFNBQXRELEVBQWlFQyxVQUFqRTtBQUNBekQsOEJBQU1oQixHQUFOLENBQVU2RSxJQUFWO0FBQ0g7QUFmYSxpQkFBbEI7QUFpQkgsYUFwQkQ7O0FBc0JBLGdCQUFJQyxXQUFXLGVBQUtiLG1CQUFMLEVBQWY7QUFDQWEscUJBQVNaLE1BQVQsQ0FBZ0IscUJBQWhCLEVBQXVDQyxrQkFBdkM7QUFDQVcscUJBQVNWLElBQVQsQ0FBYyxVQUFDMUMsR0FBRCxFQUFTO0FBQ25CLHVCQUFLNUIsY0FBTCxHQUFzQjRCLElBQUksQ0FBSixFQUFPSixLQUE3QjtBQUNBLHVCQUFLdkIsZUFBTCxHQUF1QjJCLElBQUksQ0FBSixFQUFPSCxNQUE5QjtBQUNILGFBSEQ7QUFJSDs7OztFQTVNa0MsZUFBS3dELEk7O2tCQUF2QjNGLFMiLCJmaWxlIjoiZGVhbEltYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBsZXQgc3gsIHN5LCBteCwgbXlcbiAgICBsZXQgcHN4LCBwc3ksIHBteCwgcG15XG4gICAgY29uc3QgTUlOX0NVVF9XSURUSCA9IDIwXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBEZWFsSW1hZ2UgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6ZSZ6aKY6YeH6ZuGJ1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50cyA9IHtcbiAgICAgICAgfVxuXG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBpbWFnZVNyYzogJycsXG4gICAgICAgICAgICBjdXRXaWR0aDogMjAwLFxuICAgICAgICAgICAgY3V0SGVpZ2h0OiAyMDAsXG4gICAgICAgICAgICBjdXRMZWZ0OiAxMDAsXG4gICAgICAgICAgICBjdXRUb3A6IDEwMCxcbiAgICAgICAgICAgIGNvbnRhaW5lcldpZHRoOiAwLFxuICAgICAgICAgICAgY29udGFpbmVySGVpZ2h0OiAwLFxuICAgICAgICAgICAgY3R4OiBudWxsXG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgYmxvY2tUb3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgICAgICAgICBzeCA9IGUudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICAgICAgICAgICAgc3kgPSBlLnRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJsb2NrVG91Y2hNb3ZlKGUpIHtcbiAgICAgICAgICAgICAgICBteCA9IGUudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICAgICAgICAgICAgbXkgPSBlLnRvdWNoZXNbMF0uY2xpZW50WVxuICAgICAgICAgICAgICAgIGxldCBveCA9IG14IC0gc3hcbiAgICAgICAgICAgICAgICBsZXQgb3kgPSBteSAtIHN5XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlQ3V0QmxvY2sob3gsIG95KVxuICAgICAgICAgICAgICAgIHN4ID0gbXhcbiAgICAgICAgICAgICAgICBzeSA9IG15XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcG9pbnRUb3VjaFN0YXJ0KGUpIHtcbiAgICAgICAgICAgICAgICBwc3ggPSBlLnRvdWNoZXNbMF0uY2xpZW50WFxuICAgICAgICAgICAgICAgIHBzeSA9IGUudG91Y2hlc1swXS5jbGllbnRZXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcG9pbnRUb3VjaE1vdmUoZSkge1xuICAgICAgICAgICAgICAgIHBteCA9IGUudG91Y2hlc1swXS5jbGllbnRYXG4gICAgICAgICAgICAgICAgcG15ID0gZS50b3VjaGVzWzBdLmNsaWVudFlcbiAgICAgICAgICAgICAgICBsZXQgb3ggPSBwbXggLSBwc3hcbiAgICAgICAgICAgICAgICBsZXQgb3kgPSBwbXkgLSBwc3lcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZUN1dEJsb2NrKG94LCBveSwgZS5jdXJyZW50VGFyZ2V0KVxuICAgICAgICAgICAgICAgIHBzeCA9IHBteFxuICAgICAgICAgICAgICAgIHBzeSA9IHBteVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvQ3V0KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IF90aGlzID0gdGhpc1xuICAgICAgICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WkhOeQhuS4reOAguOAguOAgidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHdlcHkuY2FudmFzVG9UZW1wRmlsZVBhdGgoe1xuICAgICAgICAgICAgICAgICAgICB4OiB0aGlzLmN1dExlZnQsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRoaXMuY3V0VG9wLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5jdXRXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmN1dEhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzSWQ6ICdkZWFsJyxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW1hZ2VTcmMgPSByZXMudGVtcEZpbGVQYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy4kYXBwbHkoKVxuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdGhpcy5pbWFnZVNyY1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmFpbChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBKU09OLnN0cmluZ2lmeShyZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1vdmVDdXRCbG9jayhveCwgb3kpIHtcbiAgICAgICAgICAgIGxldCBkaXN0WCA9IHRoaXMuY3V0TGVmdCArIG94XG4gICAgICAgICAgICBsZXQgZGlzdFkgPSB0aGlzLmN1dFRvcCArIG95XG4gICAgICAgICAgICBpZiAoZGlzdFggPj0gMCAmJiBkaXN0WSA+PSAwICYmIChkaXN0WCA8PSB0aGlzLm1heExlZnQpICYmIGRpc3RZIDwgdGhpcy5tYXhUb3ApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1dExlZnQgPSBkaXN0WFxuICAgICAgICAgICAgICAgIHRoaXMuY3V0VG9wID0gZGlzdFlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpc3RYIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0WCA9IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRpc3RZIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBkaXN0WSA9IDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRpc3RYID4gdGhpcy5tYXhMZWZ0KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RYID0gdGhpcy5tYXhMZWZ0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkaXN0WSA+IHRoaXMubWF4VG9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3RZID0gdGhpcy5tYXhUb3BcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5jdXRMZWZ0ID0gZGlzdFhcbiAgICAgICAgICAgICAgICB0aGlzLmN1dFRvcCA9IGRpc3RZXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXNpemVDdXRCbG9jayhveCwgb3ksIHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldC5kYXRhc2V0LnBvcyA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZVRvcChveCwgb3kpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5kYXRhc2V0LnBvcyA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVMZWZ0KG94LCBveSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmRhdGFzZXQucG9zID09PSAnYm90dG9tJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplQm90dG9tKG94LCBveSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmRhdGFzZXQucG9zID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVSaWdodChveCwgb3kpXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5kYXRhc2V0LnBvcyA9PT0gJ3RvcC1sZWZ0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplTGVmdChveCwgb3kpXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVUb3Aob3gsIG95KVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuZGF0YXNldC5wb3MgPT09ICd0b3AtcmlnaHQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVSaWdodChveCwgb3kpXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNpemVUb3Aob3gsIG95KVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuZGF0YXNldC5wb3MgPT09ICdib3R0b20tbGVmdCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2l6ZUxlZnQob3gsIG95KVxuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplQm90dG9tKG94LCBveSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmRhdGFzZXQucG9zID09PSAnYm90dG9tLXJpZ2h0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplUmlnaHQob3gsIG95KVxuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplQm90dG9tKG94LCBveSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlc2l6ZVRvcChveCwgb3kpIHtcbiAgICAgICAgICAgIGxldCBkaXN0VG9wID0gdGhpcy5jdXRUb3AgKyBveVxuICAgICAgICAgICAgbGV0IGZpeFRvcCA9IE1hdGgubWF4KGRpc3RUb3AsIDApXG4gICAgICAgICAgICBmaXhUb3AgPSBNYXRoLm1pbihmaXhUb3AsIHRoaXMuY3V0VG9wICsgdGhpcy5jdXRIZWlnaHQgLSBNSU5fQ1VUX1dJRFRIKVxuICAgICAgICAgICAgbGV0IHJlYWxDaGFuZ2VIID0gZml4VG9wIC0gdGhpcy5jdXRUb3BcbiAgICAgICAgICAgIHRoaXMuY3V0SGVpZ2h0IC09IHJlYWxDaGFuZ2VIXG4gICAgICAgICAgICB0aGlzLmN1dFRvcCA9IGZpeFRvcFxuICAgICAgICB9XG5cbiAgICAgICAgcmVzaXplTGVmdChveCwgb3kpIHtcbiAgICAgICAgICAgIGxldCBkaXN0TGVmdCA9IHRoaXMuY3V0TGVmdCArIG94XG4gICAgICAgICAgICBsZXQgZml4TGVmdCA9IE1hdGgubWF4KGRpc3RMZWZ0LCAwKVxuICAgICAgICAgICAgZml4TGVmdCA9IE1hdGgubWluKGZpeExlZnQsIHRoaXMuY3V0TGVmdCArIHRoaXMuY3V0V2lkdGggLSBNSU5fQ1VUX1dJRFRIKVxuICAgICAgICAgICAgbGV0IHJlYWxDaGFuZ2VXID0gZml4TGVmdCAtIHRoaXMuY3V0TGVmdFxuICAgICAgICAgICAgdGhpcy5jdXRXaWR0aCAtPSByZWFsQ2hhbmdlV1xuICAgICAgICAgICAgdGhpcy5jdXRMZWZ0ID0gZml4TGVmdFxuICAgICAgICB9XG5cbiAgICAgICAgcmVzaXplUmlnaHQob3gsIG95KSB7XG4gICAgICAgICAgICBsZXQgZGlzdFcgPSB0aGlzLmN1dFdpZHRoICsgb3hcbiAgICAgICAgICAgIGxldCBmaXhXID0gTWF0aC5tYXgoZGlzdFcsIE1JTl9DVVRfV0lEVEgpXG4gICAgICAgICAgICBmaXhXID0gTWF0aC5taW4oZml4VywgdGhpcy5jb250YWluZXJXaWR0aCAtIHRoaXMuY3V0TGVmdClcbiAgICAgICAgICAgIHRoaXMuY3V0V2lkdGggPSBmaXhXXG4gICAgICAgIH1cblxuICAgICAgICByZXNpemVCb3R0b20ob3gsIG95KSB7XG4gICAgICAgICAgICBsZXQgZGlzdEggPSB0aGlzLmN1dEhlaWdodCArIG95XG4gICAgICAgICAgICBsZXQgZml4SCA9IE1hdGgubWF4KGRpc3RILCBNSU5fQ1VUX1dJRFRIKVxuICAgICAgICAgICAgZml4SCA9IE1hdGgubWluKGZpeEgsIHRoaXMuY29udGFpbmVySGVpZ2h0IC0gdGhpcy5jdXRUb3ApXG4gICAgICAgICAgICB0aGlzLmN1dEhlaWdodCA9IGZpeEhcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXB1dGVkID0ge1xuICAgICAgICAgICAgbWF4TGVmdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXJXaWR0aCAtIHRoaXMuY3V0V2lkdGhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXhUb3AoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29udGFpbmVySGVpZ2h0IC0gdGhpcy5jdXRIZWlnaHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9uTG9hZChwYXJhbSkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VTcmMgPSBwYXJhbS5zcmNcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VTcmMgPSBpbWFnZVNyY1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gd2VweS5jcmVhdGVDYW52YXNDb250ZXh0KCdkZWFsJylcbiAgICAgICAgICAgIHRoaXMuY3R4ID0gY3R4XG4gICAgICAgIH1cblxuICAgICAgICBvblJlYWR5KCkge1xuICAgICAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzXG4gICAgICAgICAgICBsZXQgcXVlcnkgPSB3ZXB5LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgICAgICAgcXVlcnkuc2VsZWN0KCcjZGVhbC1jYW52YXMnKS5ib3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgICAgICAgcXVlcnkuZXhlYyhmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2FudmFzV2lkdGggPSByZXNbMF0ud2lkdGhcbiAgICAgICAgICAgICAgICBsZXQgY2FudmFzSGVpZ2h0ID0gcmVzWzBdLmhlaWdodFxuICAgICAgICAgICAgICAgIHdlcHkuZ2V0SW1hZ2VJbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBfdGhpcy5pbWFnZVNyYyxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkcmF3V2lkdGgsIGRyYXdIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMud2lkdGggLyByZXMuaGVpZ2h0ID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdXaWR0aCA9IGNhbnZhc1dpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0hlaWdodCA9IGRyYXdXaWR0aCAqIHJlcy5oZWlnaHQgLyByZXMud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0hlaWdodCA9IGNhbnZhc0hlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdXaWR0aCA9IGRyYXdIZWlnaHQgKiByZXMud2lkdGggLyByZXMuaGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0WCA9IChjYW52YXNXaWR0aCAtIGRyYXdXaWR0aCkgLyAyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0WSA9IChjYW52YXNIZWlnaHQgLSBkcmF3SGVpZ2h0KSAvIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmN0eC5kcmF3SW1hZ2UoX3RoaXMuaW1hZ2VTcmMsIG9mZnNldFgsIG9mZnNldFksIGRyYXdXaWR0aCwgZHJhd0hlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmN0eC5kcmF3KClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsZXQgc3ViUXVlcnkgPSB3ZXB5LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKVxuICAgICAgICAgICAgc3ViUXVlcnkuc2VsZWN0KCcucmVjdC1jdXQtY29udGFpbmVyJykuYm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgICAgICAgIHN1YlF1ZXJ5LmV4ZWMoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbmVyV2lkdGggPSByZXNbMF0ud2lkdGhcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRhaW5lckhlaWdodCA9IHJlc1swXS5oZWlnaHRcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4iXX0=