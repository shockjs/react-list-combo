'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _store = require('../store');

var _index = require('../../../index.js');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ServerComponent = (function (_Component) {
  _inherits(ServerComponent, _Component);

  function ServerComponent(props) {
    _classCallCheck(this, ServerComponent);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ServerComponent).call(this, props));

    var dispatch = props.dispatch;

    dispatch((0, _store.fetchUsers)(1));
    return _this;
  }

  _createClass(ServerComponent, [{
    key: 'fetchMore',
    value: function fetchMore(page) {
      var dispatch = this.props.dispatch;

      dispatch((0, _store.fetchUsers)(page));
    }
  }, {
    key: 'render',
    value: function render() {
      var users = this.props.users;

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
          { initData: users, dataSource: this.fetchMore.bind(this) },
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
        )
      );
    }
  }]);

  return ServerComponent;
})(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return state;
})(ServerComponent);