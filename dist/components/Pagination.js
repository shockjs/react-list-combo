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

var Pagination = (function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Pagination).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: 'render',

    /**
     * Render the component.
     */
    value: function render() {
      var pageLinks = [];
      var currentPage = parseInt(this.props.currentPage); // The current page we are on.
      var pagesCount = parseInt(this.props.pagesCount); // The total count of all pages in the database.
      var paginationSpan = parseInt(this.props.pageSpan); // The number of pagination entries to show.
      var changePage = this.props.changePage;
      var disabledClass = this.props.disabledClass || 'disabled';
      var startPos = 2;
      var endPos = startPos + paginationSpan - 1;
      var middlePos = Math.ceil(paginationSpan / 2);

      // Adjust start and end positions to maintain range and keep current page as active.
      if (currentPage >= startPos + 1) {
        startPos = currentPage - middlePos + 1;
        endPos = startPos + paginationSpan - 1;
        if (endPos + 1 > pagesCount) {
          startPos = pagesCount - paginationSpan;
          endPos = pagesCount - 1;
        }
      }

      /*
       * Extra adjustments in case pagination range is larger than results.
       */
      if (startPos < 2) {
        startPos = 2;
      }
      if (endPos >= pagesCount) {
        endPos = pagesCount - 1;
      }

      /*console.log({
        currentPage: currentPage,
        pagesCount: pagesCount,
        paginationSpan: paginationSpan,
        startPos: startPos,
        endPos: endPos,
        middlePos: middlePos,
        changePage: changePage
      });*/

      var identifier = 0;

      /*
       * Create pagination range.
       */
      pageLinks.push(_react2.default.createElement(
        'li',
        { key: identifier++, onClick: function onClick() {
            return changePage(currentPage - 1);
          } },
        _react2.default.createElement(
          'a',
          { href: '#', onClick: function onClick(e) {
              return e.preventDefault();
            }, 'aria-label': 'Previous' },
          _react2.default.createElement(
            'span',
            { 'aria-hidden': 'true' },
            '«'
          )
        )
      ));

      pageLinks.push(_react2.default.createElement(
        'li',
        { key: identifier++,
          className: currentPage === 1 ? 'active' : '',
          onClick: function onClick() {
            return changePage(1);
          } },
        _react2.default.createElement(
          'a',
          { href: '#', 'aria-label': '1' },
          '1'
        )
      ));

      if (startPos > 2) {
        pageLinks.push(_react2.default.createElement(
          'li',
          { key: identifier++ },
          _react2.default.createElement(
            'a',
            { className: disabledClass, 'aria-label': '...' },
            '...'
          )
        ));
      }
      for (var i = startPos; i <= endPos; i++) {
        (function (i) {
          pageLinks.push(_react2.default.createElement(
            'li',
            { key: identifier++, className: currentPage === i ? 'active' : '', onClick: function onClick() {
                return changePage(i);
              } },
            _react2.default.createElement(
              'a',
              { href: '#', onClick: function onClick(e) {
                  return e.preventDefault();
                }, 'aria-label': i },
              i
            )
          ));
        })(i);
      }
      if (endPos + 1 != pagesCount) {
        pageLinks.push(_react2.default.createElement(
          'li',
          { key: identifier++ },
          _react2.default.createElement(
            'a',
            { className: disabledClass, 'aria-label': i + 1 },
            '...'
          )
        ));
      }

      pageLinks.push(_react2.default.createElement(
        'li',
        { key: identifier++, className: pagesCount == currentPage ? 'active' : '', onClick: function onClick() {
            return changePage(pagesCount);
          } },
        _react2.default.createElement(
          'a',
          { href: '#', onClick: function onClick(e) {
              return e.preventDefault();
            }, 'aria-label': pagesCount },
          pagesCount
        )
      ));

      pageLinks.push(_react2.default.createElement(
        'li',
        { key: identifier, onClick: function onClick() {
            return changePage(currentPage + 1);
          } },
        _react2.default.createElement(
          'a',
          { href: '#', onClick: function onClick(e) {
              return e.preventDefault();
            }, 'aria-label': 'Next' },
          _react2.default.createElement(
            'span',
            { 'aria-hidden': 'true' },
            '»'
          )
        )
      ));

      if (pagesCount < 2) {
        return false; //Dont render anything...
      } else {
          return _react2.default.createElement(
            'nav',
            null,
            _react2.default.createElement(
              'ul',
              { className: 'pagination' },
              pageLinks.map(function (link) {
                return link;
              })
            )
          );
        }
    }
  }]);

  return Pagination;
})(_react.Component);

Pagination.propTypes = {
  disabledClass: _react2.default.PropTypes.string,
  currentPage: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  pagesCount: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  pageSpan: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number])
};
Pagination.defaultProps = {
  pageSpan: 2
};

exports.default = Pagination;