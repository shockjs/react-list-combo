'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomCounter = (function (_Component) {
  _inherits(CustomCounter, _Component);

  function CustomCounter() {
    _classCallCheck(this, CustomCounter);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CustomCounter).apply(this, arguments));
  }

  _createClass(CustomCounter, [{
    key: 'render',

    /**
     * Render the component.
     */
    value: function render() {
      var _props = this.props;
      var totalCount = _props.totalCount;
      var start = _props.start;
      var end = _props.end;
      var label = _props.label;

      return _react2.default.createElement(
        'div',
        null,
        start,
        ' - ',
        end,
        ' / ',
        totalCount,
        ' ',
        label
      );
    }
  }]);

  return CustomCounter;
})(_react.Component);

CustomCounter.propTypes = {
  label: _react2.default.PropTypes.string,
  start: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  end: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  totalCount: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])
};
CustomCounter.defaultProps = {};

exports.default = CustomCounter;