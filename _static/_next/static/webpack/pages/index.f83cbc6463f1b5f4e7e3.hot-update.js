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
      // idx % 3 == 0

      console.log(docs);
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
      lineNumber: 71,
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
            lineNumber: 81,
            columnNumber: 9
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-secondary my-2 ",
            children: "Search"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 9
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 3
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 3
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 3
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Recently added wallets"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 3
      }, _this), !results.wallet ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "class": "row pt-4",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "col-sm",
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
                  lineNumber: 100,
                  columnNumber: 1
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "card-body",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
                    wallet: token.wallet
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 104,
                    columnNumber: 1
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
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
                        lineNumber: 105,
                        columnNumber: 115
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 39
                    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                      style: {
                        width: '150px',
                        height: '50px',
                        margin: '0 auto'
                      },
                      children: "No Telegram account"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 242
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 1
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
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
                        lineNumber: 106,
                        columnNumber: 125
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 38
                    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                      style: {
                        width: '130px',
                        height: '40px',
                        margin: '0 auto'
                      },
                      children: "No Discord account"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 276
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
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
                    lineNumber: 108,
                    columnNumber: 1
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 1
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 1
              }, _this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 9
            }, _this);
          }), "    "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "col-sm",
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
                  lineNumber: 123,
                  columnNumber: 1
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "card-body",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
                    wallet: token.wallet
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 125,
                    columnNumber: 1
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
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
                        lineNumber: 126,
                        columnNumber: 115
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 39
                    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                      style: {
                        width: '150px',
                        height: '50px',
                        margin: '0 auto'
                      },
                      children: "No Telegram account"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 126,
                      columnNumber: 242
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 1
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
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
                        lineNumber: 127,
                        columnNumber: 125
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 38
                    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                      style: {
                        width: '130px',
                        height: '40px',
                        margin: '0 auto'
                      },
                      children: "No Discord account"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 276
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
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
                    lineNumber: 129,
                    columnNumber: 1
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 124,
                  columnNumber: 1
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 1
              }, _this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 9
            }, _this);
          }), "    "]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          "class": "col-sm",
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
                  lineNumber: 144,
                  columnNumber: 1
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "card-body",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
                    wallet: token.wallet
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 146,
                    columnNumber: 1
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
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
                        lineNumber: 147,
                        columnNumber: 115
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 39
                    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                      style: {
                        width: '150px',
                        height: '50px',
                        margin: '0 auto'
                      },
                      children: "No Telegram account"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 242
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 147,
                    columnNumber: 1
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
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
                        lineNumber: 148,
                        columnNumber: 125
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 148,
                      columnNumber: 38
                    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                      style: {
                        width: '130px',
                        height: '40px',
                        margin: '0 auto'
                      },
                      children: "No Discord account"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 148,
                      columnNumber: 276
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 148,
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
                    lineNumber: 150,
                    columnNumber: 1
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 145,
                  columnNumber: 1
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 1
              }, _this)
            }, index, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 9
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 3
      }, _this) :
      /*#__PURE__*/
      // else show query results
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container p-5",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card text-white bg-primary mb-3 mx-auto",
          style: {
            maxWidth: '20rem'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-header",
            children: results.wallet.slice(0, 25) + '...'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
              wallet: results.wallet
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
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
                  lineNumber: 168,
                  columnNumber: 127
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 51
              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                style: {
                  width: '150px',
                  height: '50px',
                  margin: '0 auto'
                },
                children: "No Telegram account"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 254
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 13
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
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
                  lineNumber: 169,
                  columnNumber: 125
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 38
              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
                style: {
                  width: '130px',
                  height: '40px',
                  margin: '0 auto'
                },
                children: "No Discord account"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 276
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
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
              lineNumber: 171,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: "btn btn-primary",
          onClick: function onClick() {
            return setResults([]);
          },
          children: "Go back"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
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
          lineNumber: 184,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("table", {
          "class": "table table-hover mt-5 rounded",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("thead", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("tr", {
              className: "table-secondary",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "Name"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 189,
                columnNumber: 7
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "Status"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 7
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("th", {
                scope: "col",
                children: "Address"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 7
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 5
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
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
                  lineNumber: 197,
                  columnNumber: 7
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: device.status.online
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 7
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("td", {
                  children: [device.geocode.long_street, ", ", device.geocode.short_country]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 7
                }, _this)]
              }, i, true, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 5
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 3
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 7
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "cls btn btn-primary mb-3",
        onClick: function onClick() {
          return setFooter('fixed-footer closed');
        },
        children: "Close"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 3
  }, _this);
};

_s2(Tokens, "C3eARpcmm8eUv777yAuU2adstg0=");

_c = Tokens;
/* harmony default export */ __webpack_exports__["default"] = (Tokens);
{
  /* <div class="col-sm">
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b2tlbnMuanMiXSwibmFtZXMiOlsiVG9rZW5zIiwidXNlU3RhdGUiLCJ0b2tlbnMiLCJzZXRUb2tlbnMiLCJkZXZpY2VzIiwic2V0RGV2aWNlcyIsImZvb3RlciIsInNldEZvb3RlciIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsInVzZUVmZmVjdCIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsIm9yZGVyQnkiLCJvblNuYXBzaG90Iiwic25hcHNob3QiLCJkb2NzIiwiZm9yRWFjaCIsInB1c2giLCJkYXRhIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiaG90c3BvdHMiLCJhcGkiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwic2VhcmNoVXNlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZpbmRJdCIsIm51bW1lcnMiLCJ3aGVyZSIsImdldCIsInF1ZXJ5U25hcHNob3QiLCJlbXB0eSIsImFsZXJ0IiwiQnV0dG9uIiwid2FsbGV0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRhcmdldCIsInZhbHVlIiwic2xpY2UiLCJmaWx0ZXIiLCJpdGVtcyIsImlkeCIsIm1hcCIsInRva2VuIiwiaW5kZXgiLCJtYXhXaWR0aCIsInRlbGVncmFtIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJkaXNjb3JkIiwibWFyZ2luUmlnaHQiLCJkZXZpY2UiLCJpIiwibmFtZSIsInN0YXR1cyIsIm9ubGluZSIsImdlb2NvZGUiLCJsb25nX3N0cmVldCIsInNob3J0X2NvdW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxN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QUFBLGFBQVo7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQSxlQTJCSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBM0JKLGVBNEJFO0FBQVEsaUJBQVMsRUFBQywwQkFBbEI7QUFBNkMsZUFBTyxFQUFFO0FBQUEsaUJBQUkzRCxTQUFTLENBQUMscUJBQUQsQ0FBYjtBQUFBLFNBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXpHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEQTtBQTRJRCxDQXBOTTs7SUFBTVAsTTs7S0FBQUEsTTtBQXNORUEscUVBQWY7QUFFQTtBQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFtQjtBQUVUO0FBQUM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQVUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjgzY2JjNjQ2M2YxYjVmNGU3ZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4vZmlyZWJhc2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRva2VucyA9ICgpID0+IHtcclxuICBjb25zdCBbIHRva2Vucywgc2V0VG9rZW5zIF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgWyBkZXZpY2VzLCBzZXREZXZpY2VzIF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgWyBmb290ZXIsIHNldEZvb3RlciBdID0gdXNlU3RhdGUoJ2ZpeGVkLWZvb3RlciBjbG9zZWQnKTtcclxuICBjb25zdCBbIHF1ZXJ5LCBzZXRRdWVyeSBdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFsgcmVzdWx0cywgc2V0UmVzdWx0cyBdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuXHJcbiAgLy9nZXQgaG90c3BvdHNcclxuICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICBkYlxyXG4gICAgLmNvbGxlY3Rpb24oJ2NoYW5uZWxzJylcclxuICAgIC5kb2MoJ2dlbmVyYWwnKVxyXG4gICAgLmNvbGxlY3Rpb24oJ21lc3NhZ2VzJykub3JkZXJCeSgnZGF0ZScsICdkZXNjJylcclxuICAgIC5vblNuYXBzaG90KHNuYXBzaG90ID0+IHtcclxuICAgICAgY29uc3QgZG9jcyA9IFtdO1xyXG4gICAgICBzbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XHJcbiAgICAgICAgZG9jcy5wdXNoKHtcclxuICAgICAgICAgIC4uLmRvYy5kYXRhKCksXHJcbiAgICAgICAgICBpZDogZG9jLmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBkb2NzLnNvcnQoKGQxLCBkMikgPT4gbmV3IERhdGUoZDEuZGF0ZSkuZ2V0VGltZSgpIC0gbmV3IERhdGUoZDIuZGF0ZSkuZ2V0VGltZSgpKS5yZXZlcnNlKCk7XHJcbiAgICAgIC8vIGxldCBmaXQgPSBkb2NzLmZpbHRlcigoaXRlbXMsIGlkeCkgPT4gaWR4ICUgMyA9PSAwKSAvLzEsMiwzXHJcbiAgICAgIC8vIGlkeCAlIDMgPT0gMFxyXG4gICAgICBjb25zb2xlLmxvZyhkb2NzKVxyXG4gICAgICBzZXRUb2tlbnMoZG9jcyk7XHJcbiAgICB9KTtcclxuICAgfSxbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIGhvdHNwb3RzKGlkKXtcclxuICAgIGxldCBhcGkgPSBgaHR0cHM6Ly9hcGkuaGVsaXVtLmlvL3YxL2FjY291bnRzLyR7aWR9L2hvdHNwb3RzYDtcclxuICAgIC8vIGlmIChxdWVyeSlhcGkgID0gYGh0dHBzOi8vYXBpLmhlbGl1bS5pby92MS9hY2NvdW50cy8ke3F1ZXJ5fS9ob3RzcG90c2A7XHJcblxyXG4gICAgZmV0Y2goYXBpKVxyXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBzZXREZXZpY2VzKGRhdGEuZGF0YSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YS5kYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZWFyY2hVc2VyKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZmluZEl0KHF1ZXJ5KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGZpbmRJdChxdWVyeSl7XHJcbiAgICB2YXIgbnVtbWVycyA9IGRiLmNvbGxlY3Rpb24oXCJjaGFubmVsc1wiKS5kb2MoXCJnZW5lcmFsXCIpLmNvbGxlY3Rpb24oJ21lc3NhZ2VzJykud2hlcmUoJ3dhbGxldCcsICc9PScsIHF1ZXJ5KTtcclxuICAgIG51bW1lcnMuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICBpZiAoIXF1ZXJ5U25hcHNob3QuZW1wdHkpIHtcclxuXHJcbiAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZG9jLmlkLCAnID0+ICcsIGRvYy5kYXRhKCkpO1xyXG4gICAgICAgICAgICBzZXRSZXN1bHRzKGRvYy5kYXRhKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGFsZXJ0KFwibm8gZGF0YVwiKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIEJ1dHRvbih7d2FsbGV0fSl7XHJcbiAgICBjb25zdFtzdGF0ZSxzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh3YWxsZXQpO1xyXG5cclxuICAgIHJldHVybihcclxuICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdGF0ZSA/ICdidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtJyA6ICdidG4gYnRuLXNlY29uZGFyeSBidG4tc20nfSBvbkNsaWNrPXtlPT5zZXRTdGF0ZSh0cnVlKX0+XHJcbiAgICAgIHtzdGF0ZSA/ICdDb3BpZWQgdG8gY2xpcGJvYXJkIScgOiAnQ29weSB3YWxsZXQgSUQnfVxyXG4gICAgPC9idXR0b24+KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICA8ZGl2PlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcGItNVwiPlxyXG4gIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0gY29sLW1kLTYgbXgtYXV0byBtdC01XCIgb25TdWJtaXQ9e3NlYXJjaFVzZXJ9PlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbXItc20tMlwiIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggd2FsbGV0Li4uXCIgdmFsdWU9e3F1ZXJ5fSBvbkNoYW5nZT17KGUpID0+IHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgbXktMiBcIj5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICBcclxuICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICA8aDM+UmVjZW50bHkgYWRkZWQgd2FsbGV0czwvaDM+XHJcblxyXG4gIHshcmVzdWx0cy53YWxsZXQgP1xyXG5cclxuICA8ZGl2IGNsYXNzPVwicm93IHB0LTRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc21cIj5cclxue3Rva2Vucy5zbGljZSgwLCAxNSkuZmlsdGVyKChpdGVtcywgaWR4KSA9PiBpZHggJSAzID09IDApLm1hcCgodG9rZW4sIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuXHJcbjxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLXByaW1hcnkgbWItM1wiIHN0eWxlPXt7bWF4V2lkdGg6JzIwcmVtJ319PlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+e3Rva2VuLndhbGxldC5zbGljZSgwLDI1KSArICcuLi4nfTwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG57LyogPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj48L2g0PiAqL31cclxuey8qIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPnt0b2tlbi53YWxsZXR9PC9wPiAqL31cclxuPEJ1dHRvbiB3YWxsZXQ9e3Rva2VuLndhbGxldH0gLz5cclxuPHAgY2xhc3NOYW1lPVwicHQtMlwiPnt0b2tlbi50ZWxlZ3JhbSA/IDxhIGNsYXNzTmFtZT1cImxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgaHR0cHM6Ly90Lm1lLyR7dG9rZW4udGVsZWdyYW19YH0+PGltZyBzcmM9XCJodHRwczovL3d3dy5oZWxpdW0uYmcvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDEvdGVsZWdyYW1mdWxscG5nLnBuZ1wiIHN0eWxlPXt7d2lkdGg6JzE1MHB4JywgaGVpZ2h0Oic1MHB4J319Lz48L2E+IDogPGIgc3R5bGU9e3t3aWR0aDonMTUwcHgnLCBoZWlnaHQ6JzUwcHgnLCBtYXJnaW46JzAgYXV0byd9fT5ObyBUZWxlZ3JhbSBhY2NvdW50PC9iPn08L3A+XHJcbjxwIGNsYXNzTmFtZT1cInB0LTJcIj57dG9rZW4uZGlzY29yZCA/IDxhIGNsYXNzTmFtZT1cImxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgaHR0cHM6Ly9kaXNjb3JkLmdnL3VzZXJzLyR7dG9rZW4uZGlzY29yZH1gfT48aW1nIHNyYz1cImh0dHBzOi8vd3d3LmhlbGl1bS5iZy93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMS9kaXNjb3JkcG5nLTEwMjR4MjgyLnBuZ1wiIHN0eWxlPXt7d2lkdGg6JzEzMHB4JywgaGVpZ2h0Oic0MHB4JywgbWFyZ2luUmlnaHQ6JzEwcHgnfX0vPjwvYT4gOiA8YiBzdHlsZT17e3dpZHRoOicxMzBweCcsIGhlaWdodDonNDBweCcsIG1hcmdpbjonMCBhdXRvJ319Pk5vIERpc2NvcmQgYWNjb3VudDwvYj59PC9wPlxyXG5cclxuPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gcHQtMlwiIG9uQ2xpY2s9eygpPT57aG90c3BvdHModG9rZW4ud2FsbGV0KTsgc2V0Rm9vdGVyKCdmaXhlZC1mb290ZXInKTt9fT5zaG93IGhvdHNwb3RzPC9idXR0b24+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9KVxyXG4gIFxyXG4gICAgfSAgICA8L2Rpdj5cclxuICAgIHsvKiBlbmQgMSAqL31cclxuICAgIDxkaXYgY2xhc3M9XCJjb2wtc21cIj5cclxue3Rva2Vucy5zbGljZSgwLCAxNSkuZmlsdGVyKChpdGVtcywgaWR4KSA9PiBpZHggJSAzID09IDEpLm1hcCgodG9rZW4sIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRleHQtd2hpdGUgYmctcHJpbWFyeSBtYi0zXCIgc3R5bGU9e3ttYXhXaWR0aDonMjByZW0nfX0+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj57dG9rZW4ud2FsbGV0LnNsaWNlKDAsMjUpICsgJy4uLid9PC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbjxCdXR0b24gd2FsbGV0PXt0b2tlbi53YWxsZXR9IC8+XHJcbjxwIGNsYXNzTmFtZT1cInB0LTJcIj57dG9rZW4udGVsZWdyYW0gPyA8YSBjbGFzc05hbWU9XCJsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YGh0dHBzOi8vdC5tZS8ke3Rva2VuLnRlbGVncmFtfWB9PjxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuaGVsaXVtLmJnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAxL3RlbGVncmFtZnVsbHBuZy5wbmdcIiBzdHlsZT17e3dpZHRoOicxNTBweCcsIGhlaWdodDonNTBweCd9fS8+PC9hPiA6IDxiIHN0eWxlPXt7d2lkdGg6JzE1MHB4JywgaGVpZ2h0Oic1MHB4JywgbWFyZ2luOicwIGF1dG8nfX0+Tm8gVGVsZWdyYW0gYWNjb3VudDwvYj59PC9wPlxyXG48cCBjbGFzc05hbWU9XCJwdC0yXCI+e3Rva2VuLmRpc2NvcmQgPyA8YSBjbGFzc05hbWU9XCJsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YGh0dHBzOi8vZGlzY29yZC5nZy91c2Vycy8ke3Rva2VuLmRpc2NvcmR9YH0+PGltZyBzcmM9XCJodHRwczovL3d3dy5oZWxpdW0uYmcvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDEvZGlzY29yZHBuZy0xMDI0eDI4Mi5wbmdcIiBzdHlsZT17e3dpZHRoOicxMzBweCcsIGhlaWdodDonNDBweCcsIG1hcmdpblJpZ2h0OicxMHB4J319Lz48L2E+IDogPGIgc3R5bGU9e3t3aWR0aDonMTMwcHgnLCBoZWlnaHQ6JzQwcHgnLCBtYXJnaW46JzAgYXV0byd9fT5ObyBEaXNjb3JkIGFjY291bnQ8L2I+fTwvcD5cclxuXHJcbjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIHB0LTJcIiBvbkNsaWNrPXsoKT0+e2hvdHNwb3RzKHRva2VuLndhbGxldCk7IHNldEZvb3RlcignZml4ZWQtZm9vdGVyJyk7fX0+c2hvdyBob3RzcG90czwvYnV0dG9uPlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSlcclxuXHJcbiAgICB9ICAgIDwvZGl2PlxyXG4gICAgey8qIGVuZDIgKi99XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtXCI+XHJcbiAgICB7dG9rZW5zLnNsaWNlKDAsIDE1KS5maWx0ZXIoKGl0ZW1zLCBpZHgpID0+IGlkeCAlIDMgPT0gMikubWFwKCh0b2tlbiwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhcmQgdGV4dC13aGl0ZSBiZy1wcmltYXJ5IG1iLTNcIiBzdHlsZT17e21heFdpZHRoOicyMHJlbSd9fT5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPnt0b2tlbi53YWxsZXQuc2xpY2UoMCwyNSkgKyAnLi4uJ308L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuPEJ1dHRvbiB3YWxsZXQ9e3Rva2VuLndhbGxldH0gLz5cclxuPHAgY2xhc3NOYW1lPVwicHQtMlwiPnt0b2tlbi50ZWxlZ3JhbSA/IDxhIGNsYXNzTmFtZT1cImxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgaHR0cHM6Ly90Lm1lLyR7dG9rZW4udGVsZWdyYW19YH0+PGltZyBzcmM9XCJodHRwczovL3d3dy5oZWxpdW0uYmcvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDEvdGVsZWdyYW1mdWxscG5nLnBuZ1wiIHN0eWxlPXt7d2lkdGg6JzE1MHB4JywgaGVpZ2h0Oic1MHB4J319Lz48L2E+IDogPGIgc3R5bGU9e3t3aWR0aDonMTUwcHgnLCBoZWlnaHQ6JzUwcHgnLCBtYXJnaW46JzAgYXV0byd9fT5ObyBUZWxlZ3JhbSBhY2NvdW50PC9iPn08L3A+XHJcbjxwIGNsYXNzTmFtZT1cInB0LTJcIj57dG9rZW4uZGlzY29yZCA/IDxhIGNsYXNzTmFtZT1cImxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtgaHR0cHM6Ly9kaXNjb3JkLmdnL3VzZXJzLyR7dG9rZW4uZGlzY29yZH1gfT48aW1nIHNyYz1cImh0dHBzOi8vd3d3LmhlbGl1bS5iZy93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMS9kaXNjb3JkcG5nLTEwMjR4MjgyLnBuZ1wiIHN0eWxlPXt7d2lkdGg6JzEzMHB4JywgaGVpZ2h0Oic0MHB4JywgbWFyZ2luUmlnaHQ6JzEwcHgnfX0vPjwvYT4gOiA8YiBzdHlsZT17e3dpZHRoOicxMzBweCcsIGhlaWdodDonNDBweCcsIG1hcmdpbjonMCBhdXRvJ319Pk5vIERpc2NvcmQgYWNjb3VudDwvYj59PC9wPlxyXG5cclxuPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWluZm8gcHQtMlwiIG9uQ2xpY2s9eygpPT57aG90c3BvdHModG9rZW4ud2FsbGV0KTsgc2V0Rm9vdGVyKCdmaXhlZC1mb290ZXInKTt9fT5zaG93IGhvdHNwb3RzPC9idXR0b24+XHJcbjwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9KVxyXG4gIH08L2Rpdj5cclxuICAgIHsvKiBlbmQzICovfVxyXG4gIDwvZGl2PiA6XHJcbiAgLy8gZWxzZSBzaG93IHF1ZXJ5IHJlc3VsdHNcclxuICAgICAgKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcC01XCI+IFxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRleHQtd2hpdGUgYmctcHJpbWFyeSBtYi0zIG14LWF1dG9cIiBzdHlsZT17e21heFdpZHRoOicyMHJlbSd9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPntyZXN1bHRzLndhbGxldC5zbGljZSgwLDI1KSArICcuLi4nfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHdhbGxldD17cmVzdWx0cy53YWxsZXR9IC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTJcIj57dG9rZW4udGVsZWdyYW0gPyA8YSBjbGFzc05hbWU9XCJsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YGh0dHBzOi8vdC5tZS8ke3Rva2VuLnRlbGVncmFtfWB9PjxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuaGVsaXVtLmJnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAxL3RlbGVncmFtZnVsbHBuZy5wbmdcIiBzdHlsZT17e3dpZHRoOicxNTBweCcsIGhlaWdodDonNTBweCd9fS8+PC9hPiA6IDxiIHN0eWxlPXt7d2lkdGg6JzE1MHB4JywgaGVpZ2h0Oic1MHB4JywgbWFyZ2luOicwIGF1dG8nfX0+Tm8gVGVsZWdyYW0gYWNjb3VudDwvYj59PC9wPlxyXG48cCBjbGFzc05hbWU9XCJwdC0yXCI+e3Rva2VuLmRpc2NvcmQgPyA8YSBjbGFzc05hbWU9XCJsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YGh0dHBzOi8vZGlzY29yZC5nZy91c2Vycy8ke3Rva2VuLmRpc2NvcmR9YH0+PGltZyBzcmM9XCJodHRwczovL3d3dy5oZWxpdW0uYmcvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDEvZGlzY29yZHBuZy0xMDI0eDI4Mi5wbmdcIiBzdHlsZT17e3dpZHRoOicxMzBweCcsIGhlaWdodDonNDBweCcsIG1hcmdpblJpZ2h0OicxMHB4J319Lz48L2E+IDogPGIgc3R5bGU9e3t3aWR0aDonMTMwcHgnLCBoZWlnaHQ6JzQwcHgnLCBtYXJnaW46JzAgYXV0byd9fT5ObyBEaXNjb3JkIGFjY291bnQ8L2I+fTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIHB0LTJcIiBvbkNsaWNrPXsoKT0+e2hvdHNwb3RzKHRva2VuLndhbGxldCk7IHNldEZvb3RlcignZml4ZWQtZm9vdGVyJyk7fX0+c2hvdyBob3RzcG90czwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpPT5zZXRSZXN1bHRzKFtdKX0+R28gYmFjazwvYnV0dG9uPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgICApXHJcbiAgIH1cclxuPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Zvb3Rlcn0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGNvbnQgY29udGFpbmVyXCI+XHJcbiAgICA8YSBpZD1cImNsb3NlXCIgcm9sZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgb25DbGljaz17KCk9PnNldEZvb3RlcignZml4ZWQtZm9vdGVyIGNsb3NlZCcpfT54PC9hPlxyXG5cclxuICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXIgbXQtNSByb3VuZGVkXCI+XHJcbiAgPHRoZWFkPlxyXG4gICAgPHRyIGNsYXNzTmFtZT1cInRhYmxlLXNlY29uZGFyeVwiPlxyXG4gICAgICA8dGggc2NvcGU9XCJjb2xcIj5OYW1lPC90aD5cclxuICAgICAgPHRoIHNjb3BlPVwiY29sXCI+U3RhdHVzPC90aD5cclxuICAgICAgPHRoIHNjb3BlPVwiY29sXCI+QWRkcmVzczwvdGg+XHJcbiAgICA8L3RyPlxyXG4gIDwvdGhlYWQ+XHJcbiAgPHRib2R5PlxyXG4gIHtkZXZpY2VzLm1hcCgoZGV2aWNlLCBpKT0+XHJcbiAgICA8dHIga2V5PXtpfSBjbGFzc05hbWU9XCJ0YWJsZS1wcmltYXJ5XCI+XHJcbiAgICAgIDx0aCBzY29wZT1cInJvd1wiPntkZXZpY2UubmFtZX08L3RoPlxyXG4gICAgICA8dGQ+e2RldmljZS5zdGF0dXMub25saW5lfTwvdGQ+XHJcbiAgICAgIDx0ZD57ZGV2aWNlLmdlb2NvZGUubG9uZ19zdHJlZXR9LCB7ZGV2aWNlLmdlb2NvZGUuc2hvcnRfY291bnRyeX08L3RkPlxyXG4gICAgPC90cj5cclxuICApfVxyXG5cclxuXHJcbiAgPC90Ym9keT5cclxuPC90YWJsZT5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8YnI+PC9icj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjbHMgYnRuIGJ0bi1wcmltYXJ5IG1iLTNcIiBvbkNsaWNrPXsoKT0+c2V0Rm9vdGVyKCdmaXhlZC1mb290ZXIgY2xvc2VkJyl9PkNsb3NlPC9idXR0b24+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRva2VucztcclxuXHJcbnsvKiA8ZGl2IGNsYXNzPVwiY29sLXNtXCI+XHJcbnt0b2tlbnMuc2xpY2UoMCwgMTUpLmZpbHRlcigoaXRlbXMsIGlkeCkgPT4gaWR4ICUgMyA9PSAxKS5tYXAoKHRva2VuLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8cD48Yj5IZWxpdW0gVG9rZW46IDwvYj48L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ3YWxsZXRcIj57dG9rZW4ud2FsbGV0LnNsaWNlKDAsMTApICsgXCIuLi5cIn08L3A+XHJcbiAgICAgICAgICA8QnV0dG9uIHdhbGxldD17dG9rZW4ud2FsbGV0fSAvPlxyXG4gICAgICAgICAgPHA+e3Rva2VuLnRlbGVncmFtID8gPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9e2BodHRwczovL3QubWUvJHt0b2tlbi50ZWxlZ3JhbX1gfT5UZWxlZ3JhbTwvYT4gOiAnTm90IHRlbGVncmFtIGFjY291bnQnfTwvcD5cclxuICAgICAgICAgIDxwPnt0b2tlbi5kaXNjb3JkID8gPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9e2BodHRwczovL2Rpc2NvcmQuZ2cvdXNlcnMvJHt0b2tlbi5kaXNjb3JkfWB9PkRpc2NvcmQ8L2E+IDogJ05vdCBkaXNjb3JkIGFjY291bnQnfTwvcD5cclxuXHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpPT57aG90c3BvdHModG9rZW4ud2FsbGV0KTsgc2V0Rm9vdGVyKCdmaXhlZC1mb290ZXInKTt9fT5zaG93IGhvdHNwb3RzPC9idXR0b24+XHJcbiAgICAgICAgICA8aHI+PC9ocj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICk7XHJcbiAgICB9KVxyXG5cclxuICAgIH0gICAgPC9kaXY+ICovfVxyXG5cclxuICAgICAgICAgIHsvKiA8cD57cmVzdWx0cy53YWxsZXR9PC9wPlxyXG4gICAgICA8cD48YSBocmVmPXtgaHR0cHM6Ly90Lm1lLyR7cmVzdWx0cy50ZWxlZ3JhbX1gfT5UZWxlZ3JhbTwvYT48L3A+XHJcbiAgICAgIDxwPjxhIGhyZWY9e2BodHRwczovL2Rpc2NvcmQuZ2cvdXNlcnMvJHtyZXN1bHRzLmRpc2NvcmR9YH0+RGlzY29yZDwvYT48L3A+XHJcbiAgICAgIDxicj48L2JyPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9eygpPT57aG90c3BvdHMocmVzdWx0cy53YWxsZXQpOyBzZXRGb290ZXIoJ2ZpeGVkLWZvb3RlcicpO319PnNob3cgaG90c3BvdHM8L2J1dHRvbj5cclxuICAgICAgICovfSJdLCJzb3VyY2VSb290IjoiIn0=