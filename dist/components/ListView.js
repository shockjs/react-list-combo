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

var ListView = (function (_Component) {
  _inherits(ListView, _Component);

  function ListView(props) {
    _classCallCheck(this, ListView);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ListView).call(this, props));

    _this.state = _this.loadInit();
    return _this;
  }

  _createClass(ListView, [{
    key: 'loadInit',
    value: function loadInit() {
      var props = arguments.length <= 0 || arguments[0] === undefined ? this.props : arguments[0];
      var _props$perPage = props.perPage;
      var perPage = _props$perPage === undefined ? 20 : _props$perPage;
      var dataSource = props.dataSource;
      var initData = props.initData;

      var currentPage = 1;
      var totalCount = 0;
      var currentData = [];

      /*
       * If initData is present check if it is a request or just a dump of data.
       */
      if (initData !== undefined) {
        if (Array.isArray(initData)) {
          // Client side pagination applies.
          totalCount = initData.length;
          currentData = initData;
        } else if (initData instanceof Object) {
          var meta = initData.meta;
          var payload = initData.payload;

          currentData = payload;

          // If not dataSource is provided then we will handle this client style pagination.
          if (dataSource !== undefined) {
            totalCount = meta.totalCount;
            perPage = meta.perPage;
            currentPage = meta.currentPage;
          } else {
            totalCount = payload.length;
          }
        }
      }

      return {
        currentPage: currentPage,
        totalCount: totalCount,
        perPage: perPage,
        currentData: currentData
      };
    }
  }, {
    key: 'changePage',
    value: function changePage(page) {
      if (page === 0 || page > this.getPageCount()) {
        return;
      }
      if (this.props.dataSource) {
        this.props.dataSource(page);
      } else {
        this.setState({ currentPage: page });
      }
    }
  }, {
    key: 'getPageCount',
    value: function getPageCount() {
      var _state = this.state;
      var totalCount = _state.totalCount;
      var perPage = _state.perPage;

      var pageCount = parseInt(totalCount / perPage);
      pageCount = totalCount % perPage > 0 ? ++pageCount : pageCount;
      return totalCount > 0 ? pageCount : 0;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.loadInit(nextProps));
    }

    /**
     * Render the component.
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var componentsWithProps = _react2.default.Children.toArray(this.props.children).map(function (child) {
        var props = {};
        var _state2 = _this2.state;
        var perPage = _state2.perPage;
        var currentPage = _state2.currentPage;
        var currentData = _state2.currentData;

        switch (child.type.name) {
          case 'GridView':
          case 'ListRows':
            var data = currentData;
            if (_this2.props.dataSource === undefined) {
              var offset = (currentPage - 1) * perPage;
              data = currentData.slice(offset, offset + perPage);
            }

            props = Object.assign(props, {
              currentPage: currentPage,
              currentData: data,
              perPage: perPage
            });

            break;
          case 'Pagination':
            props = Object.assign(props, {
              currentPage: currentPage,
              pagesCount: _this2.getPageCount(),
              changePage: function changePage(page) {
                return _this2.changePage(page);
              }
            });
            break;
        }
        return _react2.default.cloneElement(child, props);
      });

      return _react2.default.createElement(
        'div',
        null,
        componentsWithProps
      );
    }
  }]);

  return ListView;
})(_react.Component);

ListView.propTypes = {
  initData: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.array]),
  dataSource: _react2.default.PropTypes.func,
  perPage: _react2.default.PropTypes.number
};
ListView.defaultProps = {};

exports.default = ListView;