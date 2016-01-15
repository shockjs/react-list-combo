'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../../../index.js');

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _CustomCounter = require('./CustomCounter');

var _CustomCounter2 = _interopRequireDefault(_CustomCounter);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ClientComponent = (function (_Component) {
  _inherits(ClientComponent, _Component);

  function ClientComponent() {
    _classCallCheck(this, ClientComponent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ClientComponent).apply(this, arguments));
  }

  _createClass(ClientComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Users'
        ),
        _react2.default.createElement(
          _index.ListView,
          { initData: this.props.users, perPage: 2 },
          _react2.default.createElement(
            _index.Counter,
            { label: 'Users' },
            _react2.default.createElement(_CustomCounter2.default, null)
          ),
          _react2.default.createElement(
            _index.GridView,
            { tableClassName: 'table table-bordered table-response table-hover table-condensed' },
            _react2.default.createElement(_index.GridColumn, { header: '#', name: 'id' }),
            _react2.default.createElement(_index.GridColumn, { header: 'First Name', name: 'firstName' }),
            _react2.default.createElement(_index.GridColumn, { header: 'Last Name', name: 'lastName' }),
            _react2.default.createElement(_index.GridColumn, { header: 'Username', name: 'username' }),
            _react2.default.createElement(_index.GridColumn, { header: 'Active', name: 'active' })
          ),
          _react2.default.createElement(_index.Pagination, null)
        ),
        _react2.default.createElement(
          _index.ListView,
          { initData: this.props.users, perPage: 3 },
          _react2.default.createElement(
            _index.ListRows,
            { className: 'well' },
            _react2.default.createElement(_Row2.default, null)
          ),
          _react2.default.createElement(_index.Pagination, null)
        )
      );
    }
  }]);

  return ClientComponent;
})(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(ClientComponent);