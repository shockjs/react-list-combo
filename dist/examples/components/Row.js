"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Row = (function (_Component) {
  _inherits(Row, _Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Row).apply(this, arguments));
  }

  _createClass(Row, [{
    key: "render",

    /**
     * Render the component.
     */
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "span",
          null,
          _react2.default.createElement("img", { src: "https://unsplash.it/100/100" })
        ),
        _react2.default.createElement(
          "span",
          null,
          this.props.data.firstName,
          " ",
          this.props.data.lastName
        )
      );
    }
  }]);

  return Row;
})(_react.Component);

Row.propTypes = {
  index: _react2.default.PropTypes.number,
  data: _react2.default.PropTypes.object
};
Row.defaultProps = {};

exports.default = Row;