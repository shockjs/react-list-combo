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

var Counter = (function (_Component) {
  _inherits(Counter, _Component);

  function Counter() {
    _classCallCheck(this, Counter);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Counter).apply(this, arguments));
  }

  _createClass(Counter, [{
    key: 'render',

    /**
     * Render the component.
     */
    value: function render() {
      var _props = this.props;
      var wrapperClassName = _props.wrapperClassName;
      var totalCount = _props.totalCount;
      var currentPage = _props.currentPage;
      var perPage = _props.perPage;
      var label = _props.label;

      currentPage = parseInt(currentPage);

      var start = (currentPage - 1) * perPage + 1;
      var end = currentPage * perPage <= totalCount ? currentPage * perPage : totalCount;

      if (_react2.default.Children.count(this.props.children) > 0) {
        return _react2.default.createElement(
          'div',
          { className: wrapperClassName },
          _react2.default.Children.toArray(this.props.children).map(function (child) {
            return _react2.default.cloneElement(child, { start: start, end: end, totalCount: totalCount, label: label });
          })
        );
      } else {
        return _react2.default.createElement(
          'div',
          { className: wrapperClassName },
          start,
          ' to ',
          end,
          ' of ',
          totalCount,
          ' ',
          label
        );
      }
    }
  }]);

  return Counter;
})(_react.Component);

Counter.propTypes = {
  wrapperClassName: _react2.default.PropTypes.string,
  label: _react2.default.PropTypes.string,
  perPage: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  currentPage: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  totalCount: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])
};
Counter.defaultProps = {};

exports.default = Counter;