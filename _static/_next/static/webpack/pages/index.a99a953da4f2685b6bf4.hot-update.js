webpackHotUpdate_N_E("pages/index",{

/***/ "./components/tokens.js":
/*!******************************!*\
  !*** ./components/tokens.js ***!
  \******************************/
/*! exports provided: Tokens, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tokens", function() { return Tokens; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebase */ "./components/firebase.js");



var _jsxFileName = "C:\\apps\\helium_app\\components\\tokens.js",
    _this = undefined,
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var Tokens = function Tokens() {
  _s2();

  var _s = $RefreshSig$();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      tokens = _useState[0],
      setTokens = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      devices = _useState2[0],
      setDevices = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('fixed-footer closed'),
      footer = _useState3[0],
      setFooter = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      query = _useState4[0],
      setQuery = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      results = _useState5[0],
      setResults = _useState5[1]; //get hotspots


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    _firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('channels').doc('general').collection('messages').orderBy('date', 'desc').onSnapshot(function (snapshot) {
      var docs = [];
      snapshot.forEach(function (doc) {
        docs.push(_objectSpread(_objectSpread({}, doc.data()), {}, {
          id: doc.id
        }));
      }); // docs.sort((d1, d2) => new Date(d1.date).getTime() - new Date(d2.date).getTime()).reverse();
      // let fit = docs.filter((items, idx) => idx % 3 == 0) //1,2,3
      // console.log(docs)

      setTokens(docs);
    });
  }, []);

  function hotspots(id) {
    var api = "https://api.helium.io/v1/accounts/".concat(id, "/hotspots"); // if (query)api  = `https://api.helium.io/v1/accounts/${query}/hotspots`;

    fetch(api).then(function (res) {
      return res.json();
    }).then(function (data) {
      setDevices(data.data); // console.log(data.data);
    });
  }

  function searchUser(e) {
    e.preventDefault();
    findIt(query);
  }

  function findIt(query) {
    var nummers = _firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection("channels").doc("general").collection('messages').where('wallet', '==', query);
    nummers.get().then(function (querySnapshot) {
      if (!querySnapshot.empty) {
        querySnapshot.forEach(function (doc) {
          // console.log(doc.id, ' => ', doc.data());
          setResults(doc.data());
        });
      } else {
        alert("no data");
      }
    });
  }

  function Button(_ref) {
    _s();

    var wallet = _ref.wallet;

    var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        state = _useState6[0],
        setState = _useState6[1];

    navigator.clipboard.writeText(wallet);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: state ? 'btn btn-success btn-sm' : 'btn btn-secondary btn-sm',
      onClick: function onClick(e) {
        return setState(true);
      },
      children: state ? 'Copied to clipboard!' : 'Copy wallet ID'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 5
    }, this);
  }

  _s(Button, "BhkeKSQ/+r5twNzt2gbiZr0oFzY=");

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "row",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container pb-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          className: "form col-md-6 mx-auto mt-5",
          onSubmit: searchUser,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
            className: "form-control mr-sm-2",
            type: "text",
            placeholder: "Search wallet...",
            value: query,
            onChange: function onChange(e) {
              return setQuery(e.target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-secondary my-2 ",
            children: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 3
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 3
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 3
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: !results.wallet ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Recently added wallets"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 1
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row pt-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-sm",
            children: [tokens.slice(0, 15).filter(function (items, idx) {
              return idx % 3 == 0;
            }).map(function (token, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "card text-white bg-primary mb-3",
                  style: {
                    maxWidth: '20rem'
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "card-header",
                    children: token.wallet.slice(0, 25) + '...'
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 1
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "card-body",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
                      wallet: token.wallet
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 1
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "pt-2",
                      children: token.telegram ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        className: "link",
                        target: "_blank",
                        href: "https://t.me/".concat(token.telegram),
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: "https://www.helium.bg/wp-content/uploads/2021/01/telegramfullpng.png",
                          style: {
                            width: '150px',
                            height: '50px'
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 107,
                          columnNumber: 117
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 107,
                        columnNumber: 41
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        style: {
                          width: '150px',
                          height: '50px',
                          margin: '0 auto'
                        },
                        children: "No Telegram account"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 107,
                        columnNumber: 244
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 1
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      children: token.discord ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        className: "link",
                        target: "_blank",
                        href: "https://discord.gg/users/".concat(token.discord),
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          className: "mb-2",
                          src: "https://www.helium.bg/wp-content/uploads/2021/01/discordpng-1024x282.png",
                          style: {
                            width: '130px',
                            height: '35px',
                            marginRight: '10px'
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 108,
                          columnNumber: 110
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 108,
                        columnNumber: 23
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "mb-2",
                        style: {
                          width: '130px',
                          height: '35px',
                          margin: '0 auto'
                        },
                        children: "No Discord account"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 108,
                        columnNumber: 278
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 1
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      className: "btn btn-info mt-2",
                      onClick: function onClick() {
                        hotspots(token.wallet);
                        setFooter('fixed-footer');
                      },
                      children: "show hotspots"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 1
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 1
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 1
                }, _this)
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 9
              }, _this);
            }), "    "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-sm",
            children: [tokens.slice(0, 15).filter(function (items, idx) {
              return idx % 3 == 1;
            }).map(function (token, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "card text-white bg-primary mb-3",
                  style: {
                    maxWidth: '20rem'
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "card-header",
                    children: token.wallet.slice(0, 25) + '...'
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 1
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "card-body",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
                      wallet: token.wallet
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 1
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "pt-2",
                      children: token.telegram ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        className: "link",
                        target: "_blank",
                        href: "https://t.me/".concat(token.telegram),
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: "https://www.helium.bg/wp-content/uploads/2021/01/telegramfullpng.png",
                          style: {
                            width: '150px',
                            height: '50px'
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 128,
                          columnNumber: 117
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 128,
                        columnNumber: 41
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        style: {
                          width: '150px',
                          height: '50px',
                          margin: '0 auto'
                        },
                        children: "No Telegram account"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 128,
                        columnNumber: 244
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 128,
                      columnNumber: 1
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      children: token.discord ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        className: "link",
                        target: "_blank",
                        href: "https://discord.gg/users/".concat(token.discord),
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          className: "mb-2",
                          src: "https://www.helium.bg/wp-content/uploads/2021/01/discordpng-1024x282.png",
                          style: {
                            width: '130px',
                            height: '35px',
                            marginRight: '10px'
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 129,
                          columnNumber: 110
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 129,
                        columnNumber: 23
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "mb-2",
                        style: {
                          width: '130px',
                          height: '35px',
                          margin: '0 auto'
                        },
                        children: "No Discord account"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 129,
                        columnNumber: 278
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 129,
                      columnNumber: 1
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      className: "btn btn-info mt-2",
                      onClick: function onClick() {
                        hotspots(token.wallet);
                        setFooter('fixed-footer');
                      },
                      children: "show hotspots"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 131,
                      columnNumber: 1
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 1
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 1
                }, _this)
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 9
              }, _this);
            }), "    "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-sm",
            children: tokens.slice(0, 15).filter(function (items, idx) {
              return idx % 3 == 2;
            }).map(function (token, index) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "card text-white bg-primary mb-3",
                  style: {
                    maxWidth: '20rem'
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "card-header",
                    children: token.wallet.slice(0, 25) + '...'
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 1
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "card-body",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "pt-2",
                      children: token.telegram ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        className: "link",
                        target: "_blank",
                        href: "https://t.me/".concat(token.telegram),
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: "https://www.helium.bg/wp-content/uploads/2021/01/telegramfullpng.png",
                          style: {
                            width: '150px',
                            height: '50px'
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 148,
                          columnNumber: 117
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 148,
                        columnNumber: 41
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        style: {
                          width: '150px',
                          height: '50px',
                          margin: '0 auto'
                        },
                        children: "No Telegram account"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 148,
                        columnNumber: 244
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 148,
                      columnNumber: 1
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      children: token.discord ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        className: "link",
                        target: "_blank",
                        href: "https://discord.gg/users/".concat(token.discord),
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          className: "mb-2",
                          src: "https://www.helium.bg/wp-content/uploads/2021/01/discordpng-1024x282.png",
                          style: {
                            width: '130px',
                            height: '35px',
                            marginRight: '10px'
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 149,
                          columnNumber: 110
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 149,
                        columnNumber: 23
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "mb-2",
                        style: {
                          width: '130px',
                          height: '35px',
                          margin: '0 auto'
                        },
                        children: "No Discord account"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 149,
                        columnNumber: 278
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 1
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      className: "btn btn-info mt-2",
                      onClick: function onClick() {
                        hotspots(token.wallet);
                        setFooter('fixed-footer');
                      },
                      children: "show hotspots"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 151,
                      columnNumber: 1
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 1
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 1
                }, _this)
              }, index, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 9
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 5
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 3
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 1
      }, _this) :
      /*#__PURE__*/
      // else show query results
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container p-5",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
          children: "Results:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card text-white bg-primary mb-3 mx-auto",
          style: {
            maxWidth: '20rem'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-header",
            children: results.wallet.slice(0, 25) + '...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
              wallet: results.wallet
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "pt-2",
              children: results.telegram ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "link",
                target: "_blank",
                href: "https://t.me/".concat(results.telegram),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://www.helium.bg/wp-content/uploads/2021/01/telegramfullpng.png",
                  style: {
                    width: '150px',
                    height: '50px'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 131
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 53
              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                style: {
                  width: '150px',
                  height: '50px',
                  margin: '0 auto'
                },
                children: "No Telegram account"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 170,
                columnNumber: 258
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "pt-2",
              children: results.discord ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "link",
                target: "_blank",
                href: "https://discord.gg/users/".concat(results.discord),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://www.helium.bg/wp-content/uploads/2021/01/discordpng-1024x282.png",
                  style: {
                    width: '130px',
                    height: '40px',
                    marginRight: '10px'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 141
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 52
              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                style: {
                  width: '130px',
                  height: '40px',
                  margin: '0 auto'
                },
                children: "No Discord account"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 292
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "btn btn-info pt-2",
              onClick: function onClick() {
                hotspots(token.wallet);
                setFooter('fixed-footer');
              },
              children: "show hotspots"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 168,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          onClick: function onClick() {
            return setResults([]);
          },
          children: "Go back"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 3
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: footer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "fixcont container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          id: "close",
          role: "button",
          className: "close",
          onClick: function onClick() {
            return setFooter('fixed-footer closed');
          },
          children: "x"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          className: "table table-hover mt-5 rounded",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              className: "table-secondary",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 7
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 7
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "Address"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 7
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 5
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 189,
            columnNumber: 3
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tbody", {
            children: devices.map(function (device, i) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
                className: "table-primary",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                  scope: "row",
                  children: device.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 7
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: device.status.online
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 7
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: [device.geocode.long_street, ", ", device.geocode.short_country]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 7
                }, _this)]
              }, i, true, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 5
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 3
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "cls btn btn-primary mb-3",
        onClick: function onClick() {
          return setFooter('fixed-footer closed');
        },
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 3
  }, _this);
};

_s2(Tokens, "C3eARpcmm8eUv777yAuU2adstg0=");

_c = Tokens;
/* harmony default export */ __webpack_exports__["default"] = (Tokens);
{
  /* <div className="col-sm">
  {tokens.slice(0, 15).filter((items, idx) => idx % 3 == 1).map((token, index) => {
       return (
         <div key={index}>
           <p><b>Helium Token: </b></p>
           <p className="wallet">{token.wallet.slice(0,10) + "..."}</p>
           <Button wallet={token.wallet} />
           <p>{token.telegram ? <a className="link" href={`https://t.me/${token.telegram}`}>Telegram</a> : 'Not telegram account'}</p>
           <p>{token.discord ? <a className="link" href={`https://discord.gg/users/${token.discord}`}>Discord</a> : 'Not discord account'}</p>
  
           <button className="btn btn-primary" onClick={()=>{hotspots(token.wallet); setFooter('fixed-footer');}}>show hotspots</button>
           <hr></hr>
  
         </div>
       );
     })
  
     }    </div> */
}
{
  /* <p>{results.wallet}</p>
  <p><a href={`https://t.me/${results.telegram}`}>Telegram</a></p>
  <p><a href={`https://discord.gg/users/${results.discord}`}>Discord</a></p>
  <br></br>
  <button className="btn btn-primary" onClick={()=>{hotspots(results.wallet); setFooter('fixed-footer');}}>show hotspots</button>
  */
}

var _c;

$RefreshReg$(_c, "Tokens");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b2tlbnMuanMiXSwibmFtZXMiOlsiVG9rZW5zIiwidXNlU3RhdGUiLCJ0b2tlbnMiLCJzZXRUb2tlbnMiLCJkZXZpY2VzIiwic2V0RGV2aWNlcyIsImZvb3RlciIsInNldEZvb3RlciIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsInVzZUVmZmVjdCIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsIm9yZGVyQnkiLCJvblNuYXBzaG90Iiwic25hcHNob3QiLCJkb2NzIiwiZm9yRWFjaCIsInB1c2giLCJkYXRhIiwiaWQiLCJob3RzcG90cyIsImFwaSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzZWFyY2hVc2VyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmluZEl0IiwibnVtbWVycyIsIndoZXJlIiwiZ2V0IiwicXVlcnlTbmFwc2hvdCIsImVtcHR5IiwiYWxlcnQiLCJCdXR0b24iLCJ3YWxsZXQiLCJzdGF0ZSIsInNldFN0YXRlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJzbGljZSIsImZpbHRlciIsIml0ZW1zIiwiaWR4IiwibWFwIiwidG9rZW4iLCJpbmRleCIsIm1heFdpZHRoIiwidGVsZWdyYW0iLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImRpc2NvcmQiLCJtYXJnaW5SaWdodCIsImRldmljZSIsImkiLCJuYW1lIiwic3RhdHVzIiwib25saW5lIiwiZ2VvY29kZSIsImxvbmdfc3RyZWV0Iiwic2hvcnRfY291bnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDLEVBQUQsQ0FEWjtBQUFBLE1BQ2xCQyxNQURrQjtBQUFBLE1BQ1ZDLFNBRFU7O0FBQUEsbUJBRU1GLHNEQUFRLENBQUMsRUFBRCxDQUZkO0FBQUEsTUFFbEJHLE9BRmtCO0FBQUEsTUFFVEMsVUFGUzs7QUFBQSxtQkFHSUosc0RBQVEsQ0FBQyxxQkFBRCxDQUhaO0FBQUEsTUFHbEJLLE1BSGtCO0FBQUEsTUFHVkMsU0FIVTs7QUFBQSxtQkFJRU4sc0RBQVEsQ0FBQyxFQUFELENBSlY7QUFBQSxNQUlsQk8sS0FKa0I7QUFBQSxNQUlYQyxRQUpXOztBQUFBLG1CQUtNUixzREFBUSxDQUFDLEVBQUQsQ0FMZDtBQUFBLE1BS2xCUyxPQUxrQjtBQUFBLE1BS1RDLFVBTFMsa0JBUTFCOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFLO0FBQ2JDLGdEQUFFLENBQ0RDLFVBREQsQ0FDWSxVQURaLEVBRUNDLEdBRkQsQ0FFSyxTQUZMLEVBR0NELFVBSEQsQ0FHWSxVQUhaLEVBR3dCRSxPQUh4QixDQUdnQyxNQUhoQyxFQUd3QyxNQUh4QyxFQUlDQyxVQUpELENBSVksVUFBQUMsUUFBUSxFQUFJO0FBQ3RCLFVBQU1DLElBQUksR0FBRyxFQUFiO0FBQ0FELGNBQVEsQ0FBQ0UsT0FBVCxDQUFpQixVQUFBTCxHQUFHLEVBQUk7QUFDdEJJLFlBQUksQ0FBQ0UsSUFBTCxpQ0FDS04sR0FBRyxDQUFDTyxJQUFKLEVBREw7QUFFRUMsWUFBRSxFQUFFUixHQUFHLENBQUNRO0FBRlY7QUFJRCxPQUxELEVBRnNCLENBUXRCO0FBQ0E7QUFDQTs7QUFDQXBCLGVBQVMsQ0FBQ2dCLElBQUQsQ0FBVDtBQUNELEtBaEJEO0FBaUJBLEdBbEJPLEVBa0JOLEVBbEJNLENBQVQ7O0FBb0JBLFdBQVNLLFFBQVQsQ0FBa0JELEVBQWxCLEVBQXFCO0FBQ25CLFFBQUlFLEdBQUcsK0NBQXdDRixFQUF4QyxjQUFQLENBRG1CLENBRW5COztBQUVBRyxTQUFLLENBQUNELEdBQUQsQ0FBTCxDQUNHRSxJQURILENBQ1EsVUFBQUMsR0FBRztBQUFBLGFBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsS0FEWCxFQUVHRixJQUZILENBRVEsVUFBQ0wsSUFBRCxFQUFVO0FBQ2RqQixnQkFBVSxDQUFDaUIsSUFBSSxDQUFDQSxJQUFOLENBQVYsQ0FEYyxDQUVkO0FBQ0QsS0FMSDtBQU1EOztBQUVELFdBQVNRLFVBQVQsQ0FBb0JDLENBQXBCLEVBQXNCO0FBQ3BCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsVUFBTSxDQUFDekIsS0FBRCxDQUFOO0FBQ0Q7O0FBRUQsV0FBU3lCLE1BQVQsQ0FBZ0J6QixLQUFoQixFQUFzQjtBQUNwQixRQUFJMEIsT0FBTyxHQUFHckIsNENBQUUsQ0FBQ0MsVUFBSCxDQUFjLFVBQWQsRUFBMEJDLEdBQTFCLENBQThCLFNBQTlCLEVBQXlDRCxVQUF6QyxDQUFvRCxVQUFwRCxFQUFnRXFCLEtBQWhFLENBQXNFLFFBQXRFLEVBQWdGLElBQWhGLEVBQXNGM0IsS0FBdEYsQ0FBZDtBQUNBMEIsV0FBTyxDQUFDRSxHQUFSLEdBQWNULElBQWQsQ0FBbUIsVUFBQ1UsYUFBRCxFQUFtQjtBQUNwQyxVQUFJLENBQUNBLGFBQWEsQ0FBQ0MsS0FBbkIsRUFBMEI7QUFFeEJELHFCQUFhLENBQUNqQixPQUFkLENBQXNCLFVBQVVMLEdBQVYsRUFBZTtBQUNqQztBQUNBSixvQkFBVSxDQUFDSSxHQUFHLENBQUNPLElBQUosRUFBRCxDQUFWO0FBQ0gsU0FIRDtBQUlELE9BTkQsTUFNTztBQUNMaUIsYUFBSyxDQUFDLFNBQUQsQ0FBTDtBQUNEO0FBQ0YsS0FWRDtBQVdEOztBQUVELFdBQVNDLE1BQVQsT0FBeUI7QUFBQTs7QUFBQSxRQUFSQyxNQUFRLFFBQVJBLE1BQVE7O0FBQUEscUJBQ0N4QyxzREFBUSxDQUFDLEtBQUQsQ0FEVDtBQUFBLFFBQ2pCeUMsS0FEaUI7QUFBQSxRQUNYQyxRQURXOztBQUV2QkMsYUFBUyxDQUFDQyxTQUFWLENBQW9CQyxTQUFwQixDQUE4QkwsTUFBOUI7QUFFQSx3QkFDQTtBQUFRLGVBQVMsRUFBRUMsS0FBSyxHQUFHLHdCQUFILEdBQThCLDBCQUF0RDtBQUFrRixhQUFPLEVBQUUsaUJBQUFYLENBQUM7QUFBQSxlQUFFWSxRQUFRLENBQUMsSUFBRCxDQUFWO0FBQUEsT0FBNUY7QUFBQSxnQkFDR0QsS0FBSyxHQUFHLHNCQUFILEdBQTRCO0FBRHBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQTtBQUlEOztBQXJFeUIsS0E2RGpCRixNQTdEaUI7O0FBdUUxQixzQkFDQTtBQUFBLDRCQUNBO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw2QkFDQTtBQUFLLGlCQUFTLEVBQUMsZ0JBQWY7QUFBQSwrQkFDQTtBQUFNLG1CQUFTLEVBQUMsNEJBQWhCO0FBQTZDLGtCQUFRLEVBQUVWLFVBQXZEO0FBQUEsa0NBQ007QUFBTyxxQkFBUyxFQUFDLHNCQUFqQjtBQUF3QyxnQkFBSSxFQUFDLE1BQTdDO0FBQW9ELHVCQUFXLEVBQUMsa0JBQWhFO0FBQW1GLGlCQUFLLEVBQUV0QixLQUExRjtBQUFpRyxvQkFBUSxFQUFFLGtCQUFDdUIsQ0FBRDtBQUFBLHFCQUFPdEIsUUFBUSxDQUFDc0IsQ0FBQyxDQUFDZ0IsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQUEzRztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUROLGVBRU07QUFBUSxxQkFBUyxFQUFDLHlCQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURBLGVBV0E7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLGdCQUdDLENBQUN0QyxPQUFPLENBQUMrQixNQUFULGdCQUVIO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsZ0NBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFHRTtBQUFLLG1CQUFTLEVBQUMsVUFBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxRQUFmO0FBQUEsdUJBQ0h2QyxNQUFNLENBQUMrQyxLQUFQLENBQWEsQ0FBYixFQUFnQixFQUFoQixFQUFvQkMsTUFBcEIsQ0FBMkIsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEscUJBQWdCQSxHQUFHLEdBQUcsQ0FBTixJQUFXLENBQTNCO0FBQUEsYUFBM0IsRUFBeURDLEdBQXpELENBQTZELFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUMxRSxrQ0FDRTtBQUFBLHVDQUVSO0FBQUssMkJBQVMsRUFBQyxpQ0FBZjtBQUFpRCx1QkFBSyxFQUFFO0FBQUNDLDRCQUFRLEVBQUM7QUFBVixtQkFBeEQ7QUFBQSwwQ0FDQTtBQUFLLDZCQUFTLEVBQUMsYUFBZjtBQUFBLDhCQUE4QkYsS0FBSyxDQUFDYixNQUFOLENBQWFRLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBcUIsRUFBckIsSUFBMkI7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEQSxlQUVBO0FBQUssNkJBQVMsRUFBQyxXQUFmO0FBQUEsNENBR0EscUVBQUMsTUFBRDtBQUFRLDRCQUFNLEVBQUVLLEtBQUssQ0FBQ2I7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFIQSxlQUlBO0FBQUssK0JBQVMsRUFBQyxNQUFmO0FBQUEsZ0NBQXVCYSxLQUFLLENBQUNHLFFBQU4sZ0JBQWlCO0FBQUcsaUNBQVMsRUFBQyxNQUFiO0FBQW9CLDhCQUFNLEVBQUMsUUFBM0I7QUFBb0MsNEJBQUkseUJBQWtCSCxLQUFLLENBQUNHLFFBQXhCLENBQXhDO0FBQUEsK0NBQTRFO0FBQUssNkJBQUcsRUFBQyxzRUFBVDtBQUFnRiwrQkFBSyxFQUFFO0FBQUNDLGlDQUFLLEVBQUMsT0FBUDtBQUFnQkMsa0NBQU0sRUFBQztBQUF2QjtBQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQWpCLGdCQUE0TjtBQUFLLDZCQUFLLEVBQUU7QUFBQ0QsK0JBQUssRUFBQyxPQUFQO0FBQWdCQyxnQ0FBTSxFQUFDLE1BQXZCO0FBQStCQyxnQ0FBTSxFQUFDO0FBQXRDLHlCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5QO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBSkEsZUFLQTtBQUFBLGdDQUFNTixLQUFLLENBQUNPLE9BQU4sZ0JBQWdCO0FBQUcsaUNBQVMsRUFBQyxNQUFiO0FBQW9CLDhCQUFNLEVBQUMsUUFBM0I7QUFBb0MsNEJBQUkscUNBQThCUCxLQUFLLENBQUNPLE9BQXBDLENBQXhDO0FBQUEsK0NBQXVGO0FBQUssbUNBQVMsRUFBQyxNQUFmO0FBQXNCLDZCQUFHLEVBQUMsMEVBQTFCO0FBQXFHLCtCQUFLLEVBQUU7QUFBQ0gsaUNBQUssRUFBQyxPQUFQO0FBQWdCQyxrQ0FBTSxFQUFDLE1BQXZCO0FBQStCRyx1Q0FBVyxFQUFDO0FBQTNDO0FBQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBaEIsZ0JBQStRO0FBQUssaUNBQVMsRUFBQyxNQUFmO0FBQXNCLDZCQUFLLEVBQUU7QUFBQ0osK0JBQUssRUFBQyxPQUFQO0FBQWdCQyxnQ0FBTSxFQUFDLE1BQXZCO0FBQStCQyxnQ0FBTSxFQUFDO0FBQXRDLHlCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyUjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUxBLGVBT0E7QUFBUSwrQkFBUyxFQUFDLG1CQUFsQjtBQUFzQyw2QkFBTyxFQUFFLG1CQUFJO0FBQUNwQyxnQ0FBUSxDQUFDOEIsS0FBSyxDQUFDYixNQUFQLENBQVI7QUFBd0JsQyxpQ0FBUyxDQUFDLGNBQUQsQ0FBVDtBQUEyQix1QkFBdkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZRLGlCQUFVZ0QsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBa0JELGFBbkJKLENBREc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBeUJFO0FBQUsscUJBQVMsRUFBQyxRQUFmO0FBQUEsdUJBQ0hyRCxNQUFNLENBQUMrQyxLQUFQLENBQWEsQ0FBYixFQUFnQixFQUFoQixFQUFvQkMsTUFBcEIsQ0FBMkIsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEscUJBQWdCQSxHQUFHLEdBQUcsQ0FBTixJQUFXLENBQTNCO0FBQUEsYUFBM0IsRUFBeURDLEdBQXpELENBQTZELFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUMxRSxrQ0FDRTtBQUFBLHVDQUNSO0FBQUssMkJBQVMsRUFBQyxpQ0FBZjtBQUFpRCx1QkFBSyxFQUFFO0FBQUNDLDRCQUFRLEVBQUM7QUFBVixtQkFBeEQ7QUFBQSwwQ0FDQTtBQUFLLDZCQUFTLEVBQUMsYUFBZjtBQUFBLDhCQUE4QkYsS0FBSyxDQUFDYixNQUFOLENBQWFRLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBcUIsRUFBckIsSUFBMkI7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEQSxlQUVBO0FBQUssNkJBQVMsRUFBQyxXQUFmO0FBQUEsNENBQ0EscUVBQUMsTUFBRDtBQUFRLDRCQUFNLEVBQUVLLEtBQUssQ0FBQ2I7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFEQSxlQUVBO0FBQUssK0JBQVMsRUFBQyxNQUFmO0FBQUEsZ0NBQXVCYSxLQUFLLENBQUNHLFFBQU4sZ0JBQWlCO0FBQUcsaUNBQVMsRUFBQyxNQUFiO0FBQW9CLDhCQUFNLEVBQUMsUUFBM0I7QUFBb0MsNEJBQUkseUJBQWtCSCxLQUFLLENBQUNHLFFBQXhCLENBQXhDO0FBQUEsK0NBQTRFO0FBQUssNkJBQUcsRUFBQyxzRUFBVDtBQUFnRiwrQkFBSyxFQUFFO0FBQUNDLGlDQUFLLEVBQUMsT0FBUDtBQUFnQkMsa0NBQU0sRUFBQztBQUF2QjtBQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQWpCLGdCQUE0TjtBQUFLLDZCQUFLLEVBQUU7QUFBQ0QsK0JBQUssRUFBQyxPQUFQO0FBQWdCQyxnQ0FBTSxFQUFDLE1BQXZCO0FBQStCQyxnQ0FBTSxFQUFDO0FBQXRDLHlCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW5QO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkEsZUFHQTtBQUFBLGdDQUFNTixLQUFLLENBQUNPLE9BQU4sZ0JBQWdCO0FBQUcsaUNBQVMsRUFBQyxNQUFiO0FBQW9CLDhCQUFNLEVBQUMsUUFBM0I7QUFBb0MsNEJBQUkscUNBQThCUCxLQUFLLENBQUNPLE9BQXBDLENBQXhDO0FBQUEsK0NBQXVGO0FBQUssbUNBQVMsRUFBQyxNQUFmO0FBQXNCLDZCQUFHLEVBQUMsMEVBQTFCO0FBQXFHLCtCQUFLLEVBQUU7QUFBQ0gsaUNBQUssRUFBQyxPQUFQO0FBQWdCQyxrQ0FBTSxFQUFDLE1BQXZCO0FBQStCRyx1Q0FBVyxFQUFDO0FBQTNDO0FBQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBaEIsZ0JBQStRO0FBQUssaUNBQVMsRUFBQyxNQUFmO0FBQXNCLDZCQUFLLEVBQUU7QUFBQ0osK0JBQUssRUFBQyxPQUFQO0FBQWdCQyxnQ0FBTSxFQUFDLE1BQXZCO0FBQStCQyxnQ0FBTSxFQUFDO0FBQXRDLHlCQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyUjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUhBLGVBS0E7QUFBUSwrQkFBUyxFQUFDLG1CQUFsQjtBQUFzQyw2QkFBTyxFQUFFLG1CQUFJO0FBQUNwQyxnQ0FBUSxDQUFDOEIsS0FBSyxDQUFDYixNQUFQLENBQVI7QUFBd0JsQyxpQ0FBUyxDQUFDLGNBQUQsQ0FBVDtBQUEyQix1QkFBdkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURRLGlCQUFVZ0QsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGO0FBZUQsYUFoQkosQ0FERztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBekJGLGVBOENFO0FBQUsscUJBQVMsRUFBQyxRQUFmO0FBQUEsc0JBQ0NyRCxNQUFNLENBQUMrQyxLQUFQLENBQWEsQ0FBYixFQUFnQixFQUFoQixFQUFvQkMsTUFBcEIsQ0FBMkIsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSO0FBQUEscUJBQWdCQSxHQUFHLEdBQUcsQ0FBTixJQUFXLENBQTNCO0FBQUEsYUFBM0IsRUFBeURDLEdBQXpELENBQTZELFVBQUNDLEtBQUQsRUFBUUMsS0FBUixFQUFrQjtBQUM5RSxrQ0FDRTtBQUFBLHVDQUNSO0FBQUssMkJBQVMsRUFBQyxpQ0FBZjtBQUFpRCx1QkFBSyxFQUFFO0FBQUNDLDRCQUFRLEVBQUM7QUFBVixtQkFBeEQ7QUFBQSwwQ0FDQTtBQUFLLDZCQUFTLEVBQUMsYUFBZjtBQUFBLDhCQUE4QkYsS0FBSyxDQUFDYixNQUFOLENBQWFRLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBcUIsRUFBckIsSUFBMkI7QUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEQSxlQUVBO0FBQUssNkJBQVMsRUFBQyxXQUFmO0FBQUEsNENBQ0E7QUFBSywrQkFBUyxFQUFDLE1BQWY7QUFBQSxnQ0FBdUJLLEtBQUssQ0FBQ0csUUFBTixnQkFBaUI7QUFBRyxpQ0FBUyxFQUFDLE1BQWI7QUFBb0IsOEJBQU0sRUFBQyxRQUEzQjtBQUFvQyw0QkFBSSx5QkFBa0JILEtBQUssQ0FBQ0csUUFBeEIsQ0FBeEM7QUFBQSwrQ0FBNEU7QUFBSyw2QkFBRyxFQUFDLHNFQUFUO0FBQWdGLCtCQUFLLEVBQUU7QUFBQ0MsaUNBQUssRUFBQyxPQUFQO0FBQWdCQyxrQ0FBTSxFQUFDO0FBQXZCO0FBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUU7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFBakIsZ0JBQTROO0FBQUssNkJBQUssRUFBRTtBQUFDRCwrQkFBSyxFQUFDLE9BQVA7QUFBZ0JDLGdDQUFNLEVBQUMsTUFBdkI7QUFBK0JDLGdDQUFNLEVBQUM7QUFBdEMseUJBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBblA7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFEQSxlQUVBO0FBQUEsZ0NBQU1OLEtBQUssQ0FBQ08sT0FBTixnQkFBZ0I7QUFBRyxpQ0FBUyxFQUFDLE1BQWI7QUFBb0IsOEJBQU0sRUFBQyxRQUEzQjtBQUFvQyw0QkFBSSxxQ0FBOEJQLEtBQUssQ0FBQ08sT0FBcEMsQ0FBeEM7QUFBQSwrQ0FBdUY7QUFBSyxtQ0FBUyxFQUFDLE1BQWY7QUFBc0IsNkJBQUcsRUFBQywwRUFBMUI7QUFBcUcsK0JBQUssRUFBRTtBQUFDSCxpQ0FBSyxFQUFDLE9BQVA7QUFBZ0JDLGtDQUFNLEVBQUMsTUFBdkI7QUFBK0JHLHVDQUFXLEVBQUM7QUFBM0M7QUFBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2RjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUFoQixnQkFBK1E7QUFBSyxpQ0FBUyxFQUFDLE1BQWY7QUFBc0IsNkJBQUssRUFBRTtBQUFDSiwrQkFBSyxFQUFDLE9BQVA7QUFBZ0JDLGdDQUFNLEVBQUMsTUFBdkI7QUFBK0JDLGdDQUFNLEVBQUM7QUFBdEMseUJBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJSO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBRkEsZUFJQTtBQUFRLCtCQUFTLEVBQUMsbUJBQWxCO0FBQXNDLDZCQUFPLEVBQUUsbUJBQUk7QUFBQ3BDLGdDQUFRLENBQUM4QixLQUFLLENBQUNiLE1BQVAsQ0FBUjtBQUF3QmxDLGlDQUFTLENBQUMsY0FBRCxDQUFUO0FBQTJCLHVCQUF2RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFEsaUJBQVVnRCxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREY7QUFjRCxhQWZBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkE5Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZHO0FBQUE7QUF3RUQ7QUFFRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLGdDQUNRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURSLGVBRVE7QUFBSyxtQkFBUyxFQUFDLHlDQUFmO0FBQXlELGVBQUssRUFBRTtBQUFDQyxvQkFBUSxFQUFDO0FBQVYsV0FBaEU7QUFBQSxrQ0FDQTtBQUFLLHFCQUFTLEVBQUMsYUFBZjtBQUFBLHNCQUE4QjlDLE9BQU8sQ0FBQytCLE1BQVIsQ0FBZVEsS0FBZixDQUFxQixDQUFyQixFQUF1QixFQUF2QixJQUE2QjtBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBRUE7QUFBSyxxQkFBUyxFQUFDLFdBQWY7QUFBQSxvQ0FDQSxxRUFBQyxNQUFEO0FBQVEsb0JBQU0sRUFBRXZDLE9BQU8sQ0FBQytCO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREEsZUFFQTtBQUFHLHVCQUFTLEVBQUMsTUFBYjtBQUFBLHdCQUFxQi9CLE9BQU8sQ0FBQytDLFFBQVIsZ0JBQW1CO0FBQUcseUJBQVMsRUFBQyxNQUFiO0FBQW9CLHNCQUFNLEVBQUMsUUFBM0I7QUFBb0Msb0JBQUkseUJBQWtCL0MsT0FBTyxDQUFDK0MsUUFBMUIsQ0FBeEM7QUFBQSx1Q0FBOEU7QUFBSyxxQkFBRyxFQUFDLHNFQUFUO0FBQWdGLHVCQUFLLEVBQUU7QUFBQ0MseUJBQUssRUFBQyxPQUFQO0FBQWdCQywwQkFBTSxFQUFDO0FBQXZCO0FBQXZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBbkIsZ0JBQWdPO0FBQUcscUJBQUssRUFBRTtBQUFDRCx1QkFBSyxFQUFDLE9BQVA7QUFBZ0JDLHdCQUFNLEVBQUMsTUFBdkI7QUFBK0JDLHdCQUFNLEVBQUM7QUFBdEMsaUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBclA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGQSxlQUdBO0FBQUcsdUJBQVMsRUFBQyxNQUFiO0FBQUEsd0JBQXFCbEQsT0FBTyxDQUFDbUQsT0FBUixnQkFBa0I7QUFBRyx5QkFBUyxFQUFDLE1BQWI7QUFBb0Isc0JBQU0sRUFBQyxRQUEzQjtBQUFvQyxvQkFBSSxxQ0FBOEJuRCxPQUFPLENBQUNtRCxPQUF0QyxDQUF4QztBQUFBLHVDQUF5RjtBQUFLLHFCQUFHLEVBQUMsMEVBQVQ7QUFBb0YsdUJBQUssRUFBRTtBQUFDSCx5QkFBSyxFQUFDLE9BQVA7QUFBZ0JDLDBCQUFNLEVBQUMsTUFBdkI7QUFBK0JHLCtCQUFXLEVBQUM7QUFBM0M7QUFBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF6RjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFsQixnQkFBa1E7QUFBRyxxQkFBSyxFQUFFO0FBQUNKLHVCQUFLLEVBQUMsT0FBUDtBQUFnQkMsd0JBQU0sRUFBQyxNQUF2QjtBQUErQkMsd0JBQU0sRUFBQztBQUF0QyxpQkFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF2UjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhBLGVBS0E7QUFBUSx1QkFBUyxFQUFDLG1CQUFsQjtBQUFzQyxxQkFBTyxFQUFFLG1CQUFJO0FBQUNwQyx3QkFBUSxDQUFDOEIsS0FBSyxDQUFDYixNQUFQLENBQVI7QUFBd0JsQyx5QkFBUyxDQUFDLGNBQUQsQ0FBVDtBQUEyQixlQUF2RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZSLGVBYVE7QUFBUSxtQkFBUyxFQUFDLGlCQUFsQjtBQUFvQyxpQkFBTyxFQUFFO0FBQUEsbUJBQUlJLFVBQVUsQ0FBQyxFQUFELENBQWQ7QUFBQSxXQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE3RUY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhBLGVBNEdFO0FBQUssZUFBUyxFQUFFTCxNQUFoQjtBQUFBLDhCQUNBO0FBQUssaUJBQVMsRUFBQyxtQkFBZjtBQUFBLGdDQUNBO0FBQUcsWUFBRSxFQUFDLE9BQU47QUFBYyxjQUFJLEVBQUMsUUFBbkI7QUFBNEIsbUJBQVMsRUFBQyxPQUF0QztBQUE4QyxpQkFBTyxFQUFFO0FBQUEsbUJBQUlDLFNBQVMsQ0FBQyxxQkFBRCxDQUFiO0FBQUEsV0FBdkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREEsZUFHRTtBQUFPLG1CQUFTLEVBQUMsZ0NBQWpCO0FBQUEsa0NBQ0o7QUFBQSxtQ0FDRTtBQUFJLHVCQUFTLEVBQUMsaUJBQWQ7QUFBQSxzQ0FDRTtBQUFJLHFCQUFLLEVBQUMsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQUkscUJBQUssRUFBQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGLGVBR0U7QUFBSSxxQkFBSyxFQUFDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESSxlQVFKO0FBQUEsc0JBQ0NILE9BQU8sQ0FBQ2lELEdBQVIsQ0FBWSxVQUFDVSxNQUFELEVBQVNDLENBQVQ7QUFBQSxrQ0FDWDtBQUFZLHlCQUFTLEVBQUMsZUFBdEI7QUFBQSx3Q0FDRTtBQUFJLHVCQUFLLEVBQUMsS0FBVjtBQUFBLDRCQUFpQkQsTUFBTSxDQUFDRTtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBQSw0QkFBS0YsTUFBTSxDQUFDRyxNQUFQLENBQWNDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkYsZUFHRTtBQUFBLDZCQUFLSixNQUFNLENBQUNLLE9BQVAsQ0FBZUMsV0FBcEIsUUFBbUNOLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlRSxhQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEY7QUFBQSxpQkFBU04sQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURXO0FBQUEsYUFBWjtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGVBMkJJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUEzQkosZUE0QkU7QUFBUSxpQkFBUyxFQUFDLDBCQUFsQjtBQUE2QyxlQUFPLEVBQUU7QUFBQSxpQkFBSXpELFNBQVMsQ0FBQyxxQkFBRCxDQUFiO0FBQUEsU0FBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURBO0FBK0lELENBdE5NOztJQUFNUCxNOztLQUFBQSxNO0FBd05FQSxxRUFBZjtBQUVBO0FBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQW1CO0FBRVQ7QUFBQztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hOTlhOTUzZGE0ZjI2ODViNmJmNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGRiIH0gZnJvbSAnLi9maXJlYmFzZSc7XHJcblxyXG5leHBvcnQgY29uc3QgVG9rZW5zID0gKCkgPT4ge1xyXG4gIGNvbnN0IFsgdG9rZW5zLCBzZXRUb2tlbnMgXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbIGRldmljZXMsIHNldERldmljZXMgXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbIGZvb3Rlciwgc2V0Rm9vdGVyIF0gPSB1c2VTdGF0ZSgnZml4ZWQtZm9vdGVyIGNsb3NlZCcpO1xyXG4gIGNvbnN0IFsgcXVlcnksIHNldFF1ZXJ5IF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgWyByZXN1bHRzLCBzZXRSZXN1bHRzIF0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuICAvL2dldCBob3RzcG90c1xyXG4gIHVzZUVmZmVjdCgoKSA9PntcclxuICAgIGRiXHJcbiAgICAuY29sbGVjdGlvbignY2hhbm5lbHMnKVxyXG4gICAgLmRvYygnZ2VuZXJhbCcpXHJcbiAgICAuY29sbGVjdGlvbignbWVzc2FnZXMnKS5vcmRlckJ5KCdkYXRlJywgJ2Rlc2MnKVxyXG4gICAgLm9uU25hcHNob3Qoc25hcHNob3QgPT4ge1xyXG4gICAgICBjb25zdCBkb2NzID0gW107XHJcbiAgICAgIHNuYXBzaG90LmZvckVhY2goZG9jID0+IHtcclxuICAgICAgICBkb2NzLnB1c2goe1xyXG4gICAgICAgICAgLi4uZG9jLmRhdGEoKSxcclxuICAgICAgICAgIGlkOiBkb2MuaWRcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8vIGRvY3Muc29ydCgoZDEsIGQyKSA9PiBuZXcgRGF0ZShkMS5kYXRlKS5nZXRUaW1lKCkgLSBuZXcgRGF0ZShkMi5kYXRlKS5nZXRUaW1lKCkpLnJldmVyc2UoKTtcclxuICAgICAgLy8gbGV0IGZpdCA9IGRvY3MuZmlsdGVyKChpdGVtcywgaWR4KSA9PiBpZHggJSAzID09IDApIC8vMSwyLDNcclxuICAgICAgLy8gY29uc29sZS5sb2coZG9jcylcclxuICAgICAgc2V0VG9rZW5zKGRvY3MpO1xyXG4gICAgfSk7XHJcbiAgIH0sW10pO1xyXG5cclxuICBmdW5jdGlvbiBob3RzcG90cyhpZCl7XHJcbiAgICBsZXQgYXBpID0gYGh0dHBzOi8vYXBpLmhlbGl1bS5pby92MS9hY2NvdW50cy8ke2lkfS9ob3RzcG90c2A7XHJcbiAgICAvLyBpZiAocXVlcnkpYXBpICA9IGBodHRwczovL2FwaS5oZWxpdW0uaW8vdjEvYWNjb3VudHMvJHtxdWVyeX0vaG90c3BvdHNgO1xyXG5cclxuICAgIGZldGNoKGFwaSlcclxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0RGV2aWNlcyhkYXRhLmRhdGEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2VhcmNoVXNlcihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGZpbmRJdChxdWVyeSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaW5kSXQocXVlcnkpe1xyXG4gICAgdmFyIG51bW1lcnMgPSBkYi5jb2xsZWN0aW9uKFwiY2hhbm5lbHNcIikuZG9jKFwiZ2VuZXJhbFwiKS5jb2xsZWN0aW9uKCdtZXNzYWdlcycpLndoZXJlKCd3YWxsZXQnLCAnPT0nLCBxdWVyeSk7XHJcbiAgICBudW1tZXJzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgaWYgKCFxdWVyeVNuYXBzaG90LmVtcHR5KSB7XHJcblxyXG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRvYy5pZCwgJyA9PiAnLCBkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgc2V0UmVzdWx0cyhkb2MuZGF0YSgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChcIm5vIGRhdGFcIilcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBCdXR0b24oe3dhbGxldH0pe1xyXG4gICAgY29uc3Rbc3RhdGUsc2V0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQod2FsbGV0KTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3RhdGUgPyAnYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbScgOiAnYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtJ30gb25DbGljaz17ZT0+c2V0U3RhdGUodHJ1ZSl9PlxyXG4gICAgICB7c3RhdGUgPyAnQ29waWVkIHRvIGNsaXBib2FyZCEnIDogJ0NvcHkgd2FsbGV0IElEJ31cclxuICAgIDwvYnV0dG9uPilcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgPGRpdj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHBiLTVcIj5cclxuICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtIGNvbC1tZC02IG14LWF1dG8gbXQtNVwiIG9uU3VibWl0PXtzZWFyY2hVc2VyfT5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1yLXNtLTJcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHdhbGxldC4uLlwiIHZhbHVlPXtxdWVyeX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IG15LTIgXCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgXHJcbiAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgey8qIDxoMz5SZWNlbnRseSBhZGRlZCB3YWxsZXRzPC9oMz4gKi99XHJcblxyXG4gIHshcmVzdWx0cy53YWxsZXQgP1xyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuPGgzPlJlY2VudGx5IGFkZGVkIHdhbGxldHM8L2gzPlxyXG5cclxuICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwdC00XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxyXG57dG9rZW5zLnNsaWNlKDAsIDE1KS5maWx0ZXIoKGl0ZW1zLCBpZHgpID0+IGlkeCAlIDMgPT0gMCkubWFwKCh0b2tlbiwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRleHQtd2hpdGUgYmctcHJpbWFyeSBtYi0zXCIgc3R5bGU9e3ttYXhXaWR0aDonMjByZW0nfX0+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj57dG9rZW4ud2FsbGV0LnNsaWNlKDAsMjUpICsgJy4uLid9PC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbnsvKiA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPjwvaDQ+ICovfVxyXG57LyogPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e3Rva2VuLndhbGxldH08L3A+ICovfVxyXG48QnV0dG9uIHdhbGxldD17dG9rZW4ud2FsbGV0fSAvPlxyXG48ZGl2IGNsYXNzTmFtZT1cInB0LTJcIj57dG9rZW4udGVsZWdyYW0gPyA8YSBjbGFzc05hbWU9XCJsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YGh0dHBzOi8vdC5tZS8ke3Rva2VuLnRlbGVncmFtfWB9PjxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuaGVsaXVtLmJnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAxL3RlbGVncmFtZnVsbHBuZy5wbmdcIiBzdHlsZT17e3dpZHRoOicxNTBweCcsIGhlaWdodDonNTBweCd9fS8+PC9hPiA6IDxkaXYgc3R5bGU9e3t3aWR0aDonMTUwcHgnLCBoZWlnaHQ6JzUwcHgnLCBtYXJnaW46JzAgYXV0byd9fT5ObyBUZWxlZ3JhbSBhY2NvdW50PC9kaXY+fTwvZGl2PlxyXG48ZGl2Pnt0b2tlbi5kaXNjb3JkID8gPGEgY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2BodHRwczovL2Rpc2NvcmQuZ2cvdXNlcnMvJHt0b2tlbi5kaXNjb3JkfWB9PjxpbWcgY2xhc3NOYW1lPVwibWItMlwiIHNyYz1cImh0dHBzOi8vd3d3LmhlbGl1bS5iZy93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMS9kaXNjb3JkcG5nLTEwMjR4MjgyLnBuZ1wiIHN0eWxlPXt7d2lkdGg6JzEzMHB4JywgaGVpZ2h0OiczNXB4JywgbWFyZ2luUmlnaHQ6JzEwcHgnfX0vPjwvYT4gOiA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIiBzdHlsZT17e3dpZHRoOicxMzBweCcsIGhlaWdodDonMzVweCcsIG1hcmdpbjonMCBhdXRvJ319Pk5vIERpc2NvcmQgYWNjb3VudDwvZGl2Pn08L2Rpdj5cclxuXHJcbjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIG10LTJcIiBvbkNsaWNrPXsoKT0+e2hvdHNwb3RzKHRva2VuLndhbGxldCk7IHNldEZvb3RlcignZml4ZWQtZm9vdGVyJyk7fX0+c2hvdyBob3RzcG90czwvYnV0dG9uPlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSlcclxuICBcclxuICAgIH0gICAgPC9kaXY+XHJcbiAgICB7LyogZW5kIDEgKi99XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbVwiPlxyXG57dG9rZW5zLnNsaWNlKDAsIDE1KS5maWx0ZXIoKGl0ZW1zLCBpZHgpID0+IGlkeCAlIDMgPT0gMSkubWFwKCh0b2tlbiwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhcmQgdGV4dC13aGl0ZSBiZy1wcmltYXJ5IG1iLTNcIiBzdHlsZT17e21heFdpZHRoOicyMHJlbSd9fT5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPnt0b2tlbi53YWxsZXQuc2xpY2UoMCwyNSkgKyAnLi4uJ308L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuPEJ1dHRvbiB3YWxsZXQ9e3Rva2VuLndhbGxldH0gLz5cclxuPGRpdiBjbGFzc05hbWU9XCJwdC0yXCI+e3Rva2VuLnRlbGVncmFtID8gPGEgY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2BodHRwczovL3QubWUvJHt0b2tlbi50ZWxlZ3JhbX1gfT48aW1nIHNyYz1cImh0dHBzOi8vd3d3LmhlbGl1bS5iZy93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMS90ZWxlZ3JhbWZ1bGxwbmcucG5nXCIgc3R5bGU9e3t3aWR0aDonMTUwcHgnLCBoZWlnaHQ6JzUwcHgnfX0vPjwvYT4gOiA8ZGl2IHN0eWxlPXt7d2lkdGg6JzE1MHB4JywgaGVpZ2h0Oic1MHB4JywgbWFyZ2luOicwIGF1dG8nfX0+Tm8gVGVsZWdyYW0gYWNjb3VudDwvZGl2Pn08L2Rpdj5cclxuPGRpdj57dG9rZW4uZGlzY29yZCA/IDxhIGNsYXNzTmFtZT1cImxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgaHR0cHM6Ly9kaXNjb3JkLmdnL3VzZXJzLyR7dG9rZW4uZGlzY29yZH1gfT48aW1nIGNsYXNzTmFtZT1cIm1iLTJcIiBzcmM9XCJodHRwczovL3d3dy5oZWxpdW0uYmcvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDEvZGlzY29yZHBuZy0xMDI0eDI4Mi5wbmdcIiBzdHlsZT17e3dpZHRoOicxMzBweCcsIGhlaWdodDonMzVweCcsIG1hcmdpblJpZ2h0OicxMHB4J319Lz48L2E+IDogPGRpdiBjbGFzc05hbWU9XCJtYi0yXCIgc3R5bGU9e3t3aWR0aDonMTMwcHgnLCBoZWlnaHQ6JzM1cHgnLCBtYXJnaW46JzAgYXV0byd9fT5ObyBEaXNjb3JkIGFjY291bnQ8L2Rpdj59PC9kaXY+XHJcblxyXG48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBtdC0yXCIgb25DbGljaz17KCk9Pntob3RzcG90cyh0b2tlbi53YWxsZXQpOyBzZXRGb290ZXIoJ2ZpeGVkLWZvb3RlcicpO319PnNob3cgaG90c3BvdHM8L2J1dHRvbj5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0pXHJcblxyXG4gICAgfSAgICA8L2Rpdj5cclxuICAgIHsvKiBlbmQyICovfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxuICAgIHt0b2tlbnMuc2xpY2UoMCwgMTUpLmZpbHRlcigoaXRlbXMsIGlkeCkgPT4gaWR4ICUgMyA9PSAyKS5tYXAoKHRva2VuLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLXByaW1hcnkgbWItM1wiIHN0eWxlPXt7bWF4V2lkdGg6JzIwcmVtJ319PlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+e3Rva2VuLndhbGxldC5zbGljZSgwLDI1KSArICcuLi4nfTwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG48ZGl2IGNsYXNzTmFtZT1cInB0LTJcIj57dG9rZW4udGVsZWdyYW0gPyA8YSBjbGFzc05hbWU9XCJsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YGh0dHBzOi8vdC5tZS8ke3Rva2VuLnRlbGVncmFtfWB9PjxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuaGVsaXVtLmJnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAxL3RlbGVncmFtZnVsbHBuZy5wbmdcIiBzdHlsZT17e3dpZHRoOicxNTBweCcsIGhlaWdodDonNTBweCd9fS8+PC9hPiA6IDxkaXYgc3R5bGU9e3t3aWR0aDonMTUwcHgnLCBoZWlnaHQ6JzUwcHgnLCBtYXJnaW46JzAgYXV0byd9fT5ObyBUZWxlZ3JhbSBhY2NvdW50PC9kaXY+fTwvZGl2PlxyXG48ZGl2Pnt0b2tlbi5kaXNjb3JkID8gPGEgY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2BodHRwczovL2Rpc2NvcmQuZ2cvdXNlcnMvJHt0b2tlbi5kaXNjb3JkfWB9PjxpbWcgY2xhc3NOYW1lPVwibWItMlwiIHNyYz1cImh0dHBzOi8vd3d3LmhlbGl1bS5iZy93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMS9kaXNjb3JkcG5nLTEwMjR4MjgyLnBuZ1wiIHN0eWxlPXt7d2lkdGg6JzEzMHB4JywgaGVpZ2h0OiczNXB4JywgbWFyZ2luUmlnaHQ6JzEwcHgnfX0vPjwvYT4gOiA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIiBzdHlsZT17e3dpZHRoOicxMzBweCcsIGhlaWdodDonMzVweCcsIG1hcmdpbjonMCBhdXRvJ319Pk5vIERpc2NvcmQgYWNjb3VudDwvZGl2Pn08L2Rpdj5cclxuXHJcbjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIG10LTJcIiBvbkNsaWNrPXsoKT0+e2hvdHNwb3RzKHRva2VuLndhbGxldCk7IHNldEZvb3RlcignZml4ZWQtZm9vdGVyJyk7fX0+c2hvdyBob3RzcG90czwvYnV0dG9uPlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSlcclxuICB9PC9kaXY+XHJcbiAgICB7LyogZW5kMyAqL31cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PiA6XHJcbiAgLy8gZWxzZSBzaG93IHF1ZXJ5IHJlc3VsdHNcclxuICAgICAgKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC01XCI+IFxyXG4gICAgICAgICAgICA8aDM+UmVzdWx0czo8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdGV4dC13aGl0ZSBiZy1wcmltYXJ5IG1iLTMgbXgtYXV0b1wiIHN0eWxlPXt7bWF4V2lkdGg6JzIwcmVtJ319PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+e3Jlc3VsdHMud2FsbGV0LnNsaWNlKDAsMjUpICsgJy4uLid9PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxCdXR0b24gd2FsbGV0PXtyZXN1bHRzLndhbGxldH0gLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtMlwiPntyZXN1bHRzLnRlbGVncmFtID8gPGEgY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2BodHRwczovL3QubWUvJHtyZXN1bHRzLnRlbGVncmFtfWB9PjxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuaGVsaXVtLmJnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAxL3RlbGVncmFtZnVsbHBuZy5wbmdcIiBzdHlsZT17e3dpZHRoOicxNTBweCcsIGhlaWdodDonNTBweCd9fS8+PC9hPiA6IDxiIHN0eWxlPXt7d2lkdGg6JzE1MHB4JywgaGVpZ2h0Oic1MHB4JywgbWFyZ2luOicwIGF1dG8nfX0+Tm8gVGVsZWdyYW0gYWNjb3VudDwvYj59PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0yXCI+e3Jlc3VsdHMuZGlzY29yZCA/IDxhIGNsYXNzTmFtZT1cImxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgaHR0cHM6Ly9kaXNjb3JkLmdnL3VzZXJzLyR7cmVzdWx0cy5kaXNjb3JkfWB9PjxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuaGVsaXVtLmJnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAxL2Rpc2NvcmRwbmctMTAyNHgyODIucG5nXCIgc3R5bGU9e3t3aWR0aDonMTMwcHgnLCBoZWlnaHQ6JzQwcHgnLCBtYXJnaW5SaWdodDonMTBweCd9fS8+PC9hPiA6IDxiIHN0eWxlPXt7d2lkdGg6JzEzMHB4JywgaGVpZ2h0Oic0MHB4JywgbWFyZ2luOicwIGF1dG8nfX0+Tm8gRGlzY29yZCBhY2NvdW50PC9iPn08L3A+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBwdC0yXCIgb25DbGljaz17KCk9Pntob3RzcG90cyh0b2tlbi53YWxsZXQpOyBzZXRGb290ZXIoJ2ZpeGVkLWZvb3RlcicpO319PnNob3cgaG90c3BvdHM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKT0+c2V0UmVzdWx0cyhbXSl9PkdvIGJhY2s8L2J1dHRvbj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICB9XHJcbjwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtmb290ZXJ9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhjb250IGNvbnRhaW5lclwiPlxyXG4gICAgPGEgaWQ9XCJjbG9zZVwiIHJvbGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9eygpPT5zZXRGb290ZXIoJ2ZpeGVkLWZvb3RlciBjbG9zZWQnKX0+eDwvYT5cclxuXHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlciBtdC01IHJvdW5kZWRcIj5cclxuICA8dGhlYWQ+XHJcbiAgICA8dHIgY2xhc3NOYW1lPVwidGFibGUtc2Vjb25kYXJ5XCI+XHJcbiAgICAgIDx0aCBzY29wZT1cImNvbFwiPk5hbWU8L3RoPlxyXG4gICAgICA8dGggc2NvcGU9XCJjb2xcIj5TdGF0dXM8L3RoPlxyXG4gICAgICA8dGggc2NvcGU9XCJjb2xcIj5BZGRyZXNzPC90aD5cclxuICAgIDwvdHI+XHJcbiAgPC90aGVhZD5cclxuICA8dGJvZHk+XHJcbiAge2RldmljZXMubWFwKChkZXZpY2UsIGkpPT5cclxuICAgIDx0ciBrZXk9e2l9IGNsYXNzTmFtZT1cInRhYmxlLXByaW1hcnlcIj5cclxuICAgICAgPHRoIHNjb3BlPVwicm93XCI+e2RldmljZS5uYW1lfTwvdGg+XHJcbiAgICAgIDx0ZD57ZGV2aWNlLnN0YXR1cy5vbmxpbmV9PC90ZD5cclxuICAgICAgPHRkPntkZXZpY2UuZ2VvY29kZS5sb25nX3N0cmVldH0sIHtkZXZpY2UuZ2VvY29kZS5zaG9ydF9jb3VudHJ5fTwvdGQ+XHJcbiAgICA8L3RyPlxyXG4gICl9XHJcblxyXG5cclxuICA8L3Rib2R5PlxyXG48L3RhYmxlPlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNscyBidG4gYnRuLXByaW1hcnkgbWItM1wiIG9uQ2xpY2s9eygpPT5zZXRGb290ZXIoJ2ZpeGVkLWZvb3RlciBjbG9zZWQnKX0+Q2xvc2U8L2J1dHRvbj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9rZW5zO1xyXG5cclxuey8qIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtXCI+XHJcbnt0b2tlbnMuc2xpY2UoMCwgMTUpLmZpbHRlcigoaXRlbXMsIGlkeCkgPT4gaWR4ICUgMyA9PSAxKS5tYXAoKHRva2VuLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8cD48Yj5IZWxpdW0gVG9rZW46IDwvYj48L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3YWxsZXRcIj57dG9rZW4ud2FsbGV0LnNsaWNlKDAsMTApICsgXCIuLi5cIn08L3A+XHJcbiAgICAgICAgICA8QnV0dG9uIHdhbGxldD17dG9rZW4ud2FsbGV0fSAvPlxyXG4gICAgICAgICAgPHA+e3Rva2VuLnRlbGVncmFtID8gPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9e2BodHRwczovL3QubWUvJHt0b2tlbi50ZWxlZ3JhbX1gfT5UZWxlZ3JhbTwvYT4gOiAnTm90IHRlbGVncmFtIGFjY291bnQnfTwvcD5cclxuICAgICAgICAgIDxwPnt0b2tlbi5kaXNjb3JkID8gPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9e2BodHRwczovL2Rpc2NvcmQuZ2cvdXNlcnMvJHt0b2tlbi5kaXNjb3JkfWB9PkRpc2NvcmQ8L2E+IDogJ05vdCBkaXNjb3JkIGFjY291bnQnfTwvcD5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpPT57aG90c3BvdHModG9rZW4ud2FsbGV0KTsgc2V0Rm9vdGVyKCdmaXhlZC1mb290ZXInKTt9fT5zaG93IGhvdHNwb3RzPC9idXR0b24+XHJcbiAgICAgICAgICA8aHI+PC9ocj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9KVxyXG5cclxuICAgIH0gICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgIHsvKiA8cD57cmVzdWx0cy53YWxsZXR9PC9wPlxyXG4gICAgICA8cD48YSBocmVmPXtgaHR0cHM6Ly90Lm1lLyR7cmVzdWx0cy50ZWxlZ3JhbX1gfT5UZWxlZ3JhbTwvYT48L3A+XHJcbiAgICAgIDxwPjxhIGhyZWY9e2BodHRwczovL2Rpc2NvcmQuZ2cvdXNlcnMvJHtyZXN1bHRzLmRpc2NvcmR9YH0+RGlzY29yZDwvYT48L3A+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpPT57aG90c3BvdHMocmVzdWx0cy53YWxsZXQpOyBzZXRGb290ZXIoJ2ZpeGVkLWZvb3RlcicpO319PnNob3cgaG90c3BvdHM8L2J1dHRvbj5cclxuICAgICAgICovfSJdLCJzb3VyY2VSb290IjoiIn0=