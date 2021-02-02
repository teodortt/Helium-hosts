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
                      className: "pt-2",
                      children: token.discord ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        className: "link",
                        target: "_blank",
                        href: "https://discord.gg/users/".concat(token.discord),
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: "https://www.helium.bg/wp-content/uploads/2021/01/discordpng-1024x282.png",
                          style: {
                            width: '130px',
                            height: '35px',
                            marginRight: '10px'
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 108,
                          columnNumber: 127
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 108,
                        columnNumber: 40
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
                      className: "btn btn-info pt-2",
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
                      className: "pt-2",
                      children: token.discord ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        className: "link",
                        target: "_blank",
                        href: "https://discord.gg/users/".concat(token.discord),
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: "https://www.helium.bg/wp-content/uploads/2021/01/discordpng-1024x282.png",
                          style: {
                            width: '130px',
                            height: '40px',
                            marginRight: '10px'
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 129,
                          columnNumber: 127
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 129,
                        columnNumber: 40
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        style: {
                          width: '130px',
                          height: '40px',
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
                      className: "btn btn-info pt-2",
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
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
                      wallet: token.wallet
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 148,
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
                          lineNumber: 149,
                          columnNumber: 117
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 149,
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
                        lineNumber: 149,
                        columnNumber: 244
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 149,
                      columnNumber: 1
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "pt-2",
                      children: token.discord ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        className: "link",
                        target: "_blank",
                        href: "https://discord.gg/users/".concat(token.discord),
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: "https://www.helium.bg/wp-content/uploads/2021/01/discordpng-1024x282.png",
                          style: {
                            width: '130px',
                            height: '40px',
                            marginRight: '10px'
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 150,
                          columnNumber: 127
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 150,
                        columnNumber: 40
                      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        style: {
                          width: '130px',
                          height: '40px',
                          margin: '0 auto'
                        },
                        children: "No Discord account"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 150,
                        columnNumber: 278
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 150,
                      columnNumber: 1
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      className: "btn btn-info pt-2",
                      onClick: function onClick() {
                        hotspots(token.wallet);
                        setFooter('fixed-footer');
                      },
                      children: "show hotspots"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 152,
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
          lineNumber: 166,
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
            lineNumber: 168,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
              wallet: results.wallet
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 170,
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
                  lineNumber: 171,
                  columnNumber: 131
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 171,
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
                lineNumber: 171,
                columnNumber: 258
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
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
                  lineNumber: 172,
                  columnNumber: 141
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
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
                lineNumber: 172,
                columnNumber: 292
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
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
              lineNumber: 174,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 169,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          onClick: function onClick() {
            return setResults([]);
          },
          children: "Go back"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
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
          lineNumber: 187,
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
                lineNumber: 192,
                columnNumber: 7
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 7
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "Address"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 7
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 5
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 190,
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
                  lineNumber: 200,
                  columnNumber: 7
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: device.status.online
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 7
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: [device.geocode.long_street, ", ", device.geocode.short_country]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 7
                }, _this)]
              }, i, true, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 5
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 3
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "cls btn btn-primary mb-3",
        onClick: function onClick() {
          return setFooter('fixed-footer closed');
        },
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 185,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b2tlbnMuanMiXSwibmFtZXMiOlsiVG9rZW5zIiwidXNlU3RhdGUiLCJ0b2tlbnMiLCJzZXRUb2tlbnMiLCJkZXZpY2VzIiwic2V0RGV2aWNlcyIsImZvb3RlciIsInNldEZvb3RlciIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsInVzZUVmZmVjdCIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsIm9yZGVyQnkiLCJvblNuYXBzaG90Iiwic25hcHNob3QiLCJkb2NzIiwiZm9yRWFjaCIsInB1c2giLCJkYXRhIiwiaWQiLCJob3RzcG90cyIsImFwaSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzZWFyY2hVc2VyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmluZEl0IiwibnVtbWVycyIsIndoZXJlIiwiZ2V0IiwicXVlcnlTbmFwc2hvdCIsImVtcHR5IiwiYWxlcnQiLCJCdXR0b24iLCJ3YWxsZXQiLCJzdGF0ZSIsInNldFN0YXRlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGFyZ2V0IiwidmFsdWUiLCJzbGljZSIsImZpbHRlciIsIml0ZW1zIiwiaWR4IiwibWFwIiwidG9rZW4iLCJpbmRleCIsIm1heFdpZHRoIiwidGVsZWdyYW0iLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImRpc2NvcmQiLCJtYXJnaW5SaWdodCIsImRldmljZSIsImkiLCJuYW1lIiwic3RhdHVzIiwib25saW5lIiwiZ2VvY29kZSIsImxvbmdfc3RyZWV0Iiwic2hvcnRfY291bnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDLEVBQUQsQ0FEWjtBQUFBLE1BQ2xCQyxNQURrQjtBQUFB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LFFBQW1DTixNQUFNLENBQUNLLE9BQVAsQ0FBZUUsYUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhGO0FBQUEsaUJBQVNOLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFEVztBQUFBLGFBQVo7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQTJCSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0JKLGVBNEJFO0FBQVEsaUJBQVMsRUFBQywwQkFBbEI7QUFBNkMsZUFBTyxFQUFFO0FBQUEsaUJBQUl6RCxTQUFTLENBQUMscUJBQUQsQ0FBYjtBQUFBLFNBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEQTtBQWdKRCxDQXZOTTs7SUFBTVAsTTs7S0FBQUEsTTtBQXlORUEscUVBQWY7QUFFQTtBQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFtQjtBQUVUO0FBQUM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQVUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWQ3ZjEzN2MzOTY5MjQzYTY3NzQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4vZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRva2VucyA9ICgpID0+IHtcclxuICBjb25zdCBbIHRva2Vucywgc2V0VG9rZW5zIF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgWyBkZXZpY2VzLCBzZXREZXZpY2VzIF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgWyBmb290ZXIsIHNldEZvb3RlciBdID0gdXNlU3RhdGUoJ2ZpeGVkLWZvb3RlciBjbG9zZWQnKTtcclxuICBjb25zdCBbIHF1ZXJ5LCBzZXRRdWVyeSBdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFsgcmVzdWx0cywgc2V0UmVzdWx0cyBdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgLy9nZXQgaG90c3BvdHNcclxuICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICBkYlxyXG4gICAgLmNvbGxlY3Rpb24oJ2NoYW5uZWxzJylcclxuICAgIC5kb2MoJ2dlbmVyYWwnKVxyXG4gICAgLmNvbGxlY3Rpb24oJ21lc3NhZ2VzJykub3JkZXJCeSgnZGF0ZScsICdkZXNjJylcclxuICAgIC5vblNuYXBzaG90KHNuYXBzaG90ID0+IHtcclxuICAgICAgY29uc3QgZG9jcyA9IFtdO1xyXG4gICAgICBzbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgZG9jcy5wdXNoKHtcclxuICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICBpZDogZG9jLmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBkb2NzLnNvcnQoKGQxLCBkMikgPT4gbmV3IERhdGUoZDEuZGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoZDIuZGF0ZSkuZ2V0VGltZSgpKS5yZXZlcnNlKCk7XHJcbiAgICAgIC8vIGxldCBmaXQgPSBkb2NzLmZpbHRlcigoaXRlbXMsIGlkeCkgPT4gaWR4ICUgMyA9PSAwKSAvLzEsMiwzXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRvY3MpXHJcbiAgICAgIHNldFRva2Vucyhkb2NzKTtcclxuICAgIH0pO1xyXG4gICB9LFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gaG90c3BvdHMoaWQpe1xyXG4gICAgbGV0IGFwaSA9IGBodHRwczovL2FwaS5oZWxpdW0uaW8vdjEvYWNjb3VudHMvJHtpZH0vaG90c3BvdHNgO1xyXG4gICAgLy8gaWYgKHF1ZXJ5KWFwaSAgPSBgaHR0cHM6Ly9hcGkuaGVsaXVtLmlvL3YxL2FjY291bnRzLyR7cXVlcnl9L2hvdHNwb3RzYDtcclxuXHJcbiAgICBmZXRjaChhcGkpXHJcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldERldmljZXMoZGF0YS5kYXRhKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNlYXJjaFVzZXIoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBmaW5kSXQocXVlcnkpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmluZEl0KHF1ZXJ5KXtcclxuICAgIHZhciBudW1tZXJzID0gZGIuY29sbGVjdGlvbihcImNoYW5uZWxzXCIpLmRvYyhcImdlbmVyYWxcIikuY29sbGVjdGlvbignbWVzc2FnZXMnKS53aGVyZSgnd2FsbGV0JywgJz09JywgcXVlcnkpO1xyXG4gICAgbnVtbWVycy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgIGlmICghcXVlcnlTbmFwc2hvdC5lbXB0eSkge1xyXG5cclxuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkb2MuaWQsICcgPT4gJywgZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgICAgIHNldFJlc3VsdHMoZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWxlcnQoXCJubyBkYXRhXCIpXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gQnV0dG9uKHt3YWxsZXR9KXtcclxuICAgIGNvbnN0W3N0YXRlLHNldFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHdhbGxldCk7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0YXRlID8gJ2J0biBidG4tc3VjY2VzcyBidG4tc20nIDogJ2J0biBidG4tc2Vjb25kYXJ5IGJ0bi1zbSd9IG9uQ2xpY2s9e2U9PnNldFN0YXRlKHRydWUpfT5cclxuICAgICAge3N0YXRlID8gJ0NvcGllZCB0byBjbGlwYm9hcmQhJyA6ICdDb3B5IHdhbGxldCBJRCd9XHJcbiAgICA8L2J1dHRvbj4pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gIDxkaXY+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwYi01XCI+XHJcbiAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybSBjb2wtbWQtNiBteC1hdXRvIG10LTVcIiBvblN1Ym1pdD17c2VhcmNoVXNlcn0+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtci1zbS0yXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCB3YWxsZXQuLi5cIiB2YWx1ZT17cXVlcnl9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UXVlcnkoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSBteS0yIFwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIFxyXG4gIDwvZGl2PlxyXG5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gIHsvKiA8aDM+UmVjZW50bHkgYWRkZWQgd2FsbGV0czwvaDM+ICovfVxyXG5cclxuICB7IXJlc3VsdHMud2FsbGV0ID9cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbjxoMz5SZWNlbnRseSBhZGRlZCB3YWxsZXRzPC9oMz5cclxuXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHQtNFwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxue3Rva2Vucy5zbGljZSgwLCAxNSkuZmlsdGVyKChpdGVtcywgaWR4KSA9PiBpZHggJSAzID09IDApLm1hcCgodG9rZW4sIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLXByaW1hcnkgbWItM1wiIHN0eWxlPXt7bWF4V2lkdGg6JzIwcmVtJ319PlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+e3Rva2VuLndhbGxldC5zbGljZSgwLDI1KSArICcuLi4nfTwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG57LyogPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj48L2g0PiAqL31cclxuey8qIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPnt0b2tlbi53YWxsZXR9PC9wPiAqL31cclxuPEJ1dHRvbiB3YWxsZXQ9e3Rva2VuLndhbGxldH0gLz5cclxuPGRpdiBjbGFzc05hbWU9XCJwdC0yXCI+e3Rva2VuLnRlbGVncmFtID8gPGEgY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2BodHRwczovL3QubWUvJHt0b2tlbi50ZWxlZ3JhbX1gfT48aW1nIHNyYz1cImh0dHBzOi8vd3d3LmhlbGl1bS5iZy93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMS90ZWxlZ3JhbWZ1bGxwbmcucG5nXCIgc3R5bGU9e3t3aWR0aDonMTUwcHgnLCBoZWlnaHQ6JzUwcHgnfX0vPjwvYT4gOiA8ZGl2IHN0eWxlPXt7d2lkdGg6JzE1MHB4JywgaGVpZ2h0Oic1MHB4JywgbWFyZ2luOicwIGF1dG8nfX0+Tm8gVGVsZWdyYW0gYWNjb3VudDwvZGl2Pn08L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJwdC0yXCI+e3Rva2VuLmRpc2NvcmQgPyA8YSBjbGFzc05hbWU9XCJsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YGh0dHBzOi8vZGlzY29yZC5nZy91c2Vycy8ke3Rva2VuLmRpc2NvcmR9YH0+PGltZyBzcmM9XCJodHRwczovL3d3dy5oZWxpdW0uYmcvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDEvZGlzY29yZHBuZy0xMDI0eDI4Mi5wbmdcIiBzdHlsZT17e3dpZHRoOicxMzBweCcsIGhlaWdodDonMzVweCcsIG1hcmdpblJpZ2h0OicxMHB4J319Lz48L2E+IDogPGRpdiBjbGFzc05hbWU9XCJtYi0yXCIgc3R5bGU9e3t3aWR0aDonMTMwcHgnLCBoZWlnaHQ6JzM1cHgnLCBtYXJnaW46JzAgYXV0byd9fT5ObyBEaXNjb3JkIGFjY291bnQ8L2Rpdj59PC9kaXY+XHJcblxyXG48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBwdC0yXCIgb25DbGljaz17KCk9Pntob3RzcG90cyh0b2tlbi53YWxsZXQpOyBzZXRGb290ZXIoJ2ZpeGVkLWZvb3RlcicpO319PnNob3cgaG90c3BvdHM8L2J1dHRvbj5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0pXHJcbiAgXHJcbiAgICB9ICAgIDwvZGl2PlxyXG4gICAgey8qIGVuZCAxICovfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxue3Rva2Vucy5zbGljZSgwLCAxNSkuZmlsdGVyKChpdGVtcywgaWR4KSA9PiBpZHggJSAzID09IDEpLm1hcCgodG9rZW4sIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRleHQtd2hpdGUgYmctcHJpbWFyeSBtYi0zXCIgc3R5bGU9e3ttYXhXaWR0aDonMjByZW0nfX0+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj57dG9rZW4ud2FsbGV0LnNsaWNlKDAsMjUpICsgJy4uLid9PC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbjxCdXR0b24gd2FsbGV0PXt0b2tlbi53YWxsZXR9IC8+XHJcbjxkaXYgY2xhc3NOYW1lPVwicHQtMlwiPnt0b2tlbi50ZWxlZ3JhbSA/IDxhIGNsYXNzTmFtZT1cImxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgaHR0cHM6Ly90Lm1lLyR7dG9rZW4udGVsZWdyYW19YH0+PGltZyBzcmM9XCJodHRwczovL3d3dy5oZWxpdW0uYmcvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDEvdGVsZWdyYW1mdWxscG5nLnBuZ1wiIHN0eWxlPXt7d2lkdGg6JzE1MHB4JywgaGVpZ2h0Oic1MHB4J319Lz48L2E+IDogPGRpdiBzdHlsZT17e3dpZHRoOicxNTBweCcsIGhlaWdodDonNTBweCcsIG1hcmdpbjonMCBhdXRvJ319Pk5vIFRlbGVncmFtIGFjY291bnQ8L2Rpdj59PC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwicHQtMlwiPnt0b2tlbi5kaXNjb3JkID8gPGEgY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2BodHRwczovL2Rpc2NvcmQuZ2cvdXNlcnMvJHt0b2tlbi5kaXNjb3JkfWB9PjxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuaGVsaXVtLmJnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAxL2Rpc2NvcmRwbmctMTAyNHgyODIucG5nXCIgc3R5bGU9e3t3aWR0aDonMTMwcHgnLCBoZWlnaHQ6JzQwcHgnLCBtYXJnaW5SaWdodDonMTBweCd9fS8+PC9hPiA6IDxkaXYgc3R5bGU9e3t3aWR0aDonMTMwcHgnLCBoZWlnaHQ6JzQwcHgnLCBtYXJnaW46JzAgYXV0byd9fT5ObyBEaXNjb3JkIGFjY291bnQ8L2Rpdj59PC9kaXY+XHJcblxyXG48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBwdC0yXCIgb25DbGljaz17KCk9Pntob3RzcG90cyh0b2tlbi53YWxsZXQpOyBzZXRGb290ZXIoJ2ZpeGVkLWZvb3RlcicpO319PnNob3cgaG90c3BvdHM8L2J1dHRvbj5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0pXHJcblxyXG4gICAgfSAgICA8L2Rpdj5cclxuICAgIHsvKiBlbmQyICovfVxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxuICAgIHt0b2tlbnMuc2xpY2UoMCwgMTUpLmZpbHRlcigoaXRlbXMsIGlkeCkgPT4gaWR4ICUgMyA9PSAyKS5tYXAoKHRva2VuLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLXByaW1hcnkgbWItM1wiIHN0eWxlPXt7bWF4V2lkdGg6JzIwcmVtJ319PlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+e3Rva2VuLndhbGxldC5zbGljZSgwLDI1KSArICcuLi4nfTwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG48QnV0dG9uIHdhbGxldD17dG9rZW4ud2FsbGV0fSAvPlxyXG48ZGl2IGNsYXNzTmFtZT1cInB0LTJcIj57dG9rZW4udGVsZWdyYW0gPyA8YSBjbGFzc05hbWU9XCJsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YGh0dHBzOi8vdC5tZS8ke3Rva2VuLnRlbGVncmFtfWB9PjxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuaGVsaXVtLmJnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAxL3RlbGVncmFtZnVsbHBuZy5wbmdcIiBzdHlsZT17e3dpZHRoOicxNTBweCcsIGhlaWdodDonNTBweCd9fS8+PC9hPiA6IDxkaXYgc3R5bGU9e3t3aWR0aDonMTUwcHgnLCBoZWlnaHQ6JzUwcHgnLCBtYXJnaW46JzAgYXV0byd9fT5ObyBUZWxlZ3JhbSBhY2NvdW50PC9kaXY+fTwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cInB0LTJcIj57dG9rZW4uZGlzY29yZCA/IDxhIGNsYXNzTmFtZT1cImxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgaHR0cHM6Ly9kaXNjb3JkLmdnL3VzZXJzLyR7dG9rZW4uZGlzY29yZH1gfT48aW1nIHNyYz1cImh0dHBzOi8vd3d3LmhlbGl1bS5iZy93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMS9kaXNjb3JkcG5nLTEwMjR4MjgyLnBuZ1wiIHN0eWxlPXt7d2lkdGg6JzEzMHB4JywgaGVpZ2h0Oic0MHB4JywgbWFyZ2luUmlnaHQ6JzEwcHgnfX0vPjwvYT4gOiA8ZGl2IHN0eWxlPXt7d2lkdGg6JzEzMHB4JywgaGVpZ2h0Oic0MHB4JywgbWFyZ2luOicwIGF1dG8nfX0+Tm8gRGlzY29yZCBhY2NvdW50PC9kaXY+fTwvZGl2PlxyXG5cclxuPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gcHQtMlwiIG9uQ2xpY2s9eygpPT57aG90c3BvdHModG9rZW4ud2FsbGV0KTsgc2V0Rm9vdGVyKCdmaXhlZC1mb290ZXInKTt9fT5zaG93IGhvdHNwb3RzPC9idXR0b24+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9KVxyXG4gIH08L2Rpdj5cclxuICAgIHsvKiBlbmQzICovfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+IDpcclxuICAvLyBlbHNlIHNob3cgcXVlcnkgcmVzdWx0c1xyXG4gICAgICAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwLTVcIj4gXHJcbiAgICAgICAgICAgIDxoMz5SZXN1bHRzOjwvaDM+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLXByaW1hcnkgbWItMyBteC1hdXRvXCIgc3R5bGU9e3ttYXhXaWR0aDonMjByZW0nfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj57cmVzdWx0cy53YWxsZXQuc2xpY2UoMCwyNSkgKyAnLi4uJ308L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB3YWxsZXQ9e3Jlc3VsdHMud2FsbGV0fSAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0yXCI+e3Jlc3VsdHMudGVsZWdyYW0gPyA8YSBjbGFzc05hbWU9XCJsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YGh0dHBzOi8vdC5tZS8ke3Jlc3VsdHMudGVsZWdyYW19YH0+PGltZyBzcmM9XCJodHRwczovL3d3dy5oZWxpdW0uYmcvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDEvdGVsZWdyYW1mdWxscG5nLnBuZ1wiIHN0eWxlPXt7d2lkdGg6JzE1MHB4JywgaGVpZ2h0Oic1MHB4J319Lz48L2E+IDogPGIgc3R5bGU9e3t3aWR0aDonMTUwcHgnLCBoZWlnaHQ6JzUwcHgnLCBtYXJnaW46JzAgYXV0byd9fT5ObyBUZWxlZ3JhbSBhY2NvdW50PC9iPn08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTJcIj57cmVzdWx0cy5kaXNjb3JkID8gPGEgY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2BodHRwczovL2Rpc2NvcmQuZ2cvdXNlcnMvJHtyZXN1bHRzLmRpc2NvcmR9YH0+PGltZyBzcmM9XCJodHRwczovL3d3dy5oZWxpdW0uYmcvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDEvZGlzY29yZHBuZy0xMDI0eDI4Mi5wbmdcIiBzdHlsZT17e3dpZHRoOicxMzBweCcsIGhlaWdodDonNDBweCcsIG1hcmdpblJpZ2h0OicxMHB4J319Lz48L2E+IDogPGIgc3R5bGU9e3t3aWR0aDonMTMwcHgnLCBoZWlnaHQ6JzQwcHgnLCBtYXJnaW46JzAgYXV0byd9fT5ObyBEaXNjb3JkIGFjY291bnQ8L2I+fTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIHB0LTJcIiBvbkNsaWNrPXsoKT0+e2hvdHNwb3RzKHRva2VuLndhbGxldCk7IHNldEZvb3RlcignZml4ZWQtZm9vdGVyJyk7fX0+c2hvdyBob3RzcG90czwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpPT5zZXRSZXN1bHRzKFtdKX0+R28gYmFjazwvYnV0dG9uPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgIH1cclxuPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Zvb3Rlcn0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGNvbnQgY29udGFpbmVyXCI+XHJcbiAgICA8YSBpZD1cImNsb3NlXCIgcm9sZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17KCk9PnNldEZvb3RlcignZml4ZWQtZm9vdGVyIGNsb3NlZCcpfT54PC9hPlxyXG5cclxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyIG10LTUgcm91bmRlZFwiPlxyXG4gIDx0aGVhZD5cclxuICAgIDx0ciBjbGFzc05hbWU9XCJ0YWJsZS1zZWNvbmRhcnlcIj5cclxuICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TmFtZTwvdGg+XHJcbiAgICAgIDx0aCBzY29wZT1cImNvbFwiPlN0YXR1czwvdGg+XHJcbiAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFkZHJlc3M8L3RoPlxyXG4gICAgPC90cj5cclxuICA8L3RoZWFkPlxyXG4gIDx0Ym9keT5cclxuICB7ZGV2aWNlcy5tYXAoKGRldmljZSwgaSk9PlxyXG4gICAgPHRyIGtleT17aX0gY2xhc3NOYW1lPVwidGFibGUtcHJpbWFyeVwiPlxyXG4gICAgICA8dGggc2NvcGU9XCJyb3dcIj57ZGV2aWNlLm5hbWV9PC90aD5cclxuICAgICAgPHRkPntkZXZpY2Uuc3RhdHVzLm9ubGluZX08L3RkPlxyXG4gICAgICA8dGQ+e2RldmljZS5nZW9jb2RlLmxvbmdfc3RyZWV0fSwge2RldmljZS5nZW9jb2RlLnNob3J0X2NvdW50cnl9PC90ZD5cclxuICAgIDwvdHI+XHJcbiAgKX1cclxuXHJcblxyXG4gIDwvdGJvZHk+XHJcbjwvdGFibGU+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xzIGJ0biBidG4tcHJpbWFyeSBtYi0zXCIgb25DbGljaz17KCk9PnNldEZvb3RlcignZml4ZWQtZm9vdGVyIGNsb3NlZCcpfT5DbG9zZTwvYnV0dG9uPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2tlbnM7XHJcblxyXG57LyogPGRpdiBjbGFzc05hbWU9XCJjb2wtc21cIj5cclxue3Rva2Vucy5zbGljZSgwLCAxNSkuZmlsdGVyKChpdGVtcywgaWR4KSA9PiBpZHggJSAzID09IDEpLm1hcCgodG9rZW4sIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIDxwPjxiPkhlbGl1bSBUb2tlbjogPC9iPjwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndhbGxldFwiPnt0b2tlbi53YWxsZXQuc2xpY2UoMCwxMCkgKyBcIi4uLlwifTwvcD5cclxuICAgICAgICAgIDxCdXR0b24gd2FsbGV0PXt0b2tlbi53YWxsZXR9IC8+XHJcbiAgICAgICAgICA8cD57dG9rZW4udGVsZWdyYW0gPyA8YSBjbGFzc05hbWU9XCJsaW5rXCIgaHJlZj17YGh0dHBzOi8vdC5tZS8ke3Rva2VuLnRlbGVncmFtfWB9PlRlbGVncmFtPC9hPiA6ICdOb3QgdGVsZWdyYW0gYWNjb3VudCd9PC9wPlxyXG4gICAgICAgICAgPHA+e3Rva2VuLmRpc2NvcmQgPyA8YSBjbGFzc05hbWU9XCJsaW5rXCIgaHJlZj17YGh0dHBzOi8vZGlzY29yZC5nZy91c2Vycy8ke3Rva2VuLmRpc2NvcmR9YH0+RGlzY29yZDwvYT4gOiAnTm90IGRpc2NvcmQgYWNjb3VudCd9PC9wPlxyXG5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCk9Pntob3RzcG90cyh0b2tlbi53YWxsZXQpOyBzZXRGb290ZXIoJ2ZpeGVkLWZvb3RlcicpO319PnNob3cgaG90c3BvdHM8L2J1dHRvbj5cclxuICAgICAgICAgIDxocj48L2hyPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0pXHJcblxyXG4gICAgfSAgICA8L2Rpdj4gKi99XHJcblxyXG4gICAgICAgICAgey8qIDxwPntyZXN1bHRzLndhbGxldH08L3A+XHJcbiAgICAgIDxwPjxhIGhyZWY9e2BodHRwczovL3QubWUvJHtyZXN1bHRzLnRlbGVncmFtfWB9PlRlbGVncmFtPC9hPjwvcD5cclxuICAgICAgPHA+PGEgaHJlZj17YGh0dHBzOi8vZGlzY29yZC5nZy91c2Vycy8ke3Jlc3VsdHMuZGlzY29yZH1gfT5EaXNjb3JkPC9hPjwvcD5cclxuICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17KCk9Pntob3RzcG90cyhyZXN1bHRzLndhbGxldCk7IHNldEZvb3RlcignZml4ZWQtZm9vdGVyJyk7fX0+c2hvdyBob3RzcG90czwvYnV0dG9uPlxyXG4gICAgICAgKi99Il0sInNvdXJjZVJvb3QiOiIifQ==