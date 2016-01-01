'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GridView = (function (_Component) {
  _inherits(GridView, _Component);

  function GridView() {
    _classCallCheck(this, GridView);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(GridView).apply(this, arguments));
  }

  _createClass(GridView, [{
    key: 'render',

    /**
     * Render the component.
     */
    value: function render() {
      var tableClassName = this.props.tableClassName;

      // Only GridColumns are valid components.

      var grids = _react2.default.Children.toArray(this.props.children).filter(function (child) {
        return child.type.name === 'GridColumn';
      });

      // Fetch headers.
      var headers = grids.map(function (grid) {
        return grid.props.header || '&nbsp;';
      });

      // Fetch column names or component to be used.
      var colNames = grids.map(function (grid) {
        if (_react2.default.Children.count(grid.props.children) > 0) {
          return _react2.default.Children.toArray(grid.props.children).map(function (child) {
            return _react2.default.cloneElement(child, { name: grid.props.name });
          });
        } else {
          return grid.props.name || '&nbsp;';
        }
      });

      var rows = this.props.currentData.map(function (data) {
        return colNames.map(function (row) {
          switch (typeof row === 'undefined' ? 'undefined' : _typeof(row)) {
            case "string":
              return data[row]; // Column name provided.
            default:
              // Provided a component.
              return _react2.default.Children.toArray(row).map(function (child) {
                return _react2.default.cloneElement(child, {
                  data: data[child.props.name],
                  row: data
                });
              });
          }
        });
      });

      return _react2.default.createElement(
        'table',
        { className: tableClassName },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            headers.map(function (header, i) {
              return _react2.default.createElement(
                'th',
                { key: i },
                header
              );
            })
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          rows.map(function (row, i) {
            return _react2.default.createElement(
              'tr',
              { key: i },
              row.map(function (col, j) {
                return _react2.default.createElement(
                  'td',
                  { key: j },
                  col
                );
              })
            );
          })
        )
      );
    }
  }]);

  return GridView;
})(_react.Component);

GridView.propTypes = {};
GridView.defaultProps = {};

exports.default = GridView;