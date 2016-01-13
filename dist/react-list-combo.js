/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const ListView = __webpack_require__(2);
	const GridView = __webpack_require__(4);
	const GridColumn = __webpack_require__(5);
	const Pagination = __webpack_require__(6);
	const ListRows = __webpack_require__(7);

	module.exports = {
	  ListRows: ListRows.default,
	  ListView: ListView.default,
	  GridView: GridView.default,
	  GridColumn: GridColumn.default,
	  Pagination: Pagination.default
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

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

	      return _react2.default.createElement('div', null, componentsWithProps);
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

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _typeof(obj) {
	  return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

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

	      return _react2.default.createElement('table', { className: tableClassName }, _react2.default.createElement('thead', null, _react2.default.createElement('tr', null, headers.map(function (header, i) {
	        return _react2.default.createElement('th', { key: i }, header);
	      }))), _react2.default.createElement('tbody', null, rows.map(function (row, i) {
	        return _react2.default.createElement('tr', { key: i }, row.map(function (col, j) {
	          return _react2.default.createElement('td', { key: j }, col);
	        }));
	      })));
	    }
	  }]);

	  return GridView;
	})(_react.Component);

	GridView.propTypes = {};
	GridView.defaultProps = {};

	exports.default = GridView;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var GridColumn = (function (_Component) {
	  _inherits(GridColumn, _Component);

	  function GridColumn() {
	    _classCallCheck(this, GridColumn);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(GridColumn).apply(this, arguments));
	  }

	  _createClass(GridColumn, [{
	    key: 'render',

	    /**
	     * Render the component.
	     */
	    value: function render() {
	      return _react2.default.createElement('td', null, this.props.children);
	    }
	  }]);

	  return GridColumn;
	})(_react.Component);

	exports.default = GridColumn;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

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
	      pageLinks.push(_react2.default.createElement('li', { key: identifier++, onClick: function onClick() {
	          return changePage(currentPage - 1);
	        } }, _react2.default.createElement('a', { href: '#', onClick: function onClick(e) {
	          return e.preventDefault();
	        }, 'aria-label': 'Previous' }, _react2.default.createElement('span', { 'aria-hidden': 'true' }, '«'))));

	      pageLinks.push(_react2.default.createElement('li', { key: identifier++,
	        className: currentPage === 1 ? 'active' : '',
	        onClick: function onClick() {
	          return changePage(1);
	        } }, _react2.default.createElement('a', { href: '#', 'aria-label': '1' }, '1')));

	      if (startPos > 2) {
	        pageLinks.push(_react2.default.createElement('li', { key: identifier++ }, _react2.default.createElement('a', { className: disabledClass, 'aria-label': '...' }, '...')));
	      }
	      for (var i = startPos; i <= endPos; i++) {
	        (function (i) {
	          pageLinks.push(_react2.default.createElement('li', { key: identifier++, className: currentPage === i ? 'active' : '', onClick: function onClick() {
	              return changePage(i);
	            } }, _react2.default.createElement('a', { href: '#', onClick: function onClick(e) {
	              return e.preventDefault();
	            }, 'aria-label': i }, i)));
	        })(i);
	      }
	      if (endPos + 1 != pagesCount) {
	        pageLinks.push(_react2.default.createElement('li', { key: identifier++ }, _react2.default.createElement('a', { className: disabledClass, 'aria-label': i + 1 }, '...')));
	      }

	      pageLinks.push(_react2.default.createElement('li', { key: identifier++, className: pagesCount == currentPage ? 'active' : '', onClick: function onClick() {
	          return changePage(pagesCount);
	        } }, _react2.default.createElement('a', { href: '#', onClick: function onClick(e) {
	          return e.preventDefault();
	        }, 'aria-label': pagesCount }, pagesCount)));

	      pageLinks.push(_react2.default.createElement('li', { key: identifier, onClick: function onClick() {
	          return changePage(currentPage + 1);
	        } }, _react2.default.createElement('a', { href: '#', onClick: function onClick(e) {
	          return e.preventDefault();
	        }, 'aria-label': 'Next' }, _react2.default.createElement('span', { 'aria-hidden': 'true' }, '»'))));

	      if (pagesCount < 2) {
	        return false; //Dont render anything...
	      } else {
	          return _react2.default.createElement('nav', null, _react2.default.createElement('ul', { className: 'pagination' }, pageLinks.map(function (link) {
	            return link;
	          })));
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

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	})();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var ListRows = (function (_Component) {
	  _inherits(ListRows, _Component);

	  function ListRows() {
	    _classCallCheck(this, ListRows);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ListRows).apply(this, arguments));
	  }

	  _createClass(ListRows, [{
	    key: 'render',

	    /**
	     * Render the component.
	     */
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var currentData = _props.currentData;
	      var rowClassName = _props.rowClassName;

	      return _react2.default.createElement('div', { className: rowClassName }, currentData.map(function (row, i) {
	        return _react2.default.createElement('div', { key: i }, _react2.default.Children.toArray(_this2.props.children).map(function (Child) {
	          return _react2.default.cloneElement(Child, { data: row, index: i });
	        }));
	      }));
	    }
	  }]);

	  return ListRows;
	})(_react.Component);

	ListRows.propTypes = {
	  rowClassName: _react2.default.PropTypes.string
	};

	exports.default = ListRows;

/***/ }
/******/ ]);