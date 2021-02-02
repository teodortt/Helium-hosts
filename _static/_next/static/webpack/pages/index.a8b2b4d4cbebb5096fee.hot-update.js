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
          console.log(doc.id, ' => ', doc.data());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b2tlbnMuanMiXSwibmFtZXMiOlsiVG9rZW5zIiwidXNlU3RhdGUiLCJ0b2tlbnMiLCJzZXRUb2tlbnMiLCJkZXZpY2VzIiwic2V0RGV2aWNlcyIsImZvb3RlciIsInNldEZvb3RlciIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJyZXN1bHRzIiwic2V0UmVzdWx0cyIsInVzZUVmZmVjdCIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsIm9yZGVyQnkiLCJvblNuYXBzaG90Iiwic25hcHNob3QiLCJkb2NzIiwiZm9yRWFjaCIsInB1c2giLCJkYXRhIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiaG90c3BvdHMiLCJhcGkiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwic2VhcmNoVXNlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZpbmRJdCIsIm51bW1lcnMiLCJ3aGVyZSIsImdldCIsInF1ZXJ5U25hcHNob3QiLCJlbXB0eSIsImFsZXJ0IiwiQnV0dG9uIiwid2FsbGV0Iiwic3RhdGUiLCJzZXRTdGF0ZSIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsInRhcmdldCIsInZhbHVlIiwic2xpY2UiLCJmaWx0ZXIiLCJpdGVtcyIsImlkeCIsIm1hcCIsInRva2VuIiwiaW5kZXgiLCJtYXhXaWR0aCIsInRlbGVncmFtIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJkaXNjb3JkIiwibWFyZ2luUmlnaHQiLCJkZXZpY2UiLCJpIiwibmFtZSIsInN0YXR1cyIsIm9ubGluZSIsImdlb2NvZGUiLCJsb25nX3N0cmVldCIsInNob3J0X2NvdW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxFQUFELENBRFo7QUFBQSxN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LGFBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFIRjtBQUFBLGlCQUFTTixDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRFc7QUFBQSxhQUFaO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUEyQkk7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTNCSixlQTRCRTtBQUFRLGlCQUFTLEVBQUMsMEJBQWxCO0FBQTZDLGVBQU8sRUFBRTtBQUFBLGlCQUFJM0QsU0FBUyxDQUFDLHFCQUFELENBQWI7QUFBQSxTQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF6R0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREE7QUE0SUQsQ0FwTk07O0lBQU1QLE07O0tBQUFBLE07QUFzTkVBLHFFQUFmO0FBRUE7QUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBbUI7QUFFVDtBQUFDO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE4YjJiNGQ0Y2JlYmI1MDk2ZmVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICcuL2ZpcmViYXNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBUb2tlbnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgWyB0b2tlbnMsIHNldFRva2VucyBdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFsgZGV2aWNlcywgc2V0RGV2aWNlcyBdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFsgZm9vdGVyLCBzZXRGb290ZXIgXSA9IHVzZVN0YXRlKCdmaXhlZC1mb290ZXIgY2xvc2VkJyk7XHJcbiAgY29uc3QgWyBxdWVyeSwgc2V0UXVlcnkgXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbIHJlc3VsdHMsIHNldFJlc3VsdHMgXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcblxyXG4gIC8vZ2V0IGhvdHNwb3RzXHJcbiAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgZGJcclxuICAgIC5jb2xsZWN0aW9uKCdjaGFubmVscycpXHJcbiAgICAuZG9jKCdnZW5lcmFsJylcclxuICAgIC5jb2xsZWN0aW9uKCdtZXNzYWdlcycpLm9yZGVyQnkoJ2RhdGUnLCAnZGVzYycpXHJcbiAgICAub25TbmFwc2hvdChzbmFwc2hvdCA9PiB7XHJcbiAgICAgIGNvbnN0IGRvY3MgPSBbXTtcclxuICAgICAgc25hcHNob3QuZm9yRWFjaChkb2MgPT4ge1xyXG4gICAgICAgIGRvY3MucHVzaCh7XHJcbiAgICAgICAgICAuLi5kb2MuZGF0YSgpLFxyXG4gICAgICAgICAgaWQ6IGRvYy5pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gZG9jcy5zb3J0KChkMSwgZDIpID0+IG5ldyBEYXRlKGQxLmRhdGUpLmdldFRpbWUoKSAtIG5ldyBEYXRlKGQyLmRhdGUpLmdldFRpbWUoKSkucmV2ZXJzZSgpO1xyXG4gICAgICAvLyBsZXQgZml0ID0gZG9jcy5maWx0ZXIoKGl0ZW1zLCBpZHgpID0+IGlkeCAlIDMgPT0gMCkgLy8xLDIsM1xyXG4gICAgICAvLyBpZHggJSAzID09IDBcclxuICAgICAgY29uc29sZS5sb2coZG9jcylcclxuICAgICAgc2V0VG9rZW5zKGRvY3MpO1xyXG4gICAgfSk7XHJcbiAgIH0sW10pO1xyXG5cclxuICBmdW5jdGlvbiBob3RzcG90cyhpZCl7XHJcbiAgICBsZXQgYXBpID0gYGh0dHBzOi8vYXBpLmhlbGl1bS5pby92MS9hY2NvdW50cy8ke2lkfS9ob3RzcG90c2A7XHJcbiAgICAvLyBpZiAocXVlcnkpYXBpICA9IGBodHRwczovL2FwaS5oZWxpdW0uaW8vdjEvYWNjb3VudHMvJHtxdWVyeX0vaG90c3BvdHNgO1xyXG5cclxuICAgIGZldGNoKGFwaSlcclxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0RGV2aWNlcyhkYXRhLmRhdGEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuZGF0YSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2VhcmNoVXNlcihlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGZpbmRJdChxdWVyeSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaW5kSXQocXVlcnkpe1xyXG4gICAgdmFyIG51bW1lcnMgPSBkYi5jb2xsZWN0aW9uKFwiY2hhbm5lbHNcIikuZG9jKFwiZ2VuZXJhbFwiKS5jb2xsZWN0aW9uKCdtZXNzYWdlcycpLndoZXJlKCd3YWxsZXQnLCAnPT0nLCBxdWVyeSk7XHJcbiAgICBudW1tZXJzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgaWYgKCFxdWVyeVNuYXBzaG90LmVtcHR5KSB7XHJcblxyXG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRvYy5pZCwgJyA9PiAnLCBkb2MuZGF0YSgpKTtcclxuICAgICAgICAgICAgc2V0UmVzdWx0cyhkb2MuZGF0YSgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhbGVydChcIm5vIGRhdGFcIilcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBCdXR0b24oe3dhbGxldH0pe1xyXG4gICAgY29uc3Rbc3RhdGUsc2V0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQod2FsbGV0KTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3RhdGUgPyAnYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbScgOiAnYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtJ30gb25DbGljaz17ZT0+c2V0U3RhdGUodHJ1ZSl9PlxyXG4gICAgICB7c3RhdGUgPyAnQ29waWVkIHRvIGNsaXBib2FyZCEnIDogJ0NvcHkgd2FsbGV0IElEJ31cclxuICAgIDwvYnV0dG9uPilcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgPGRpdj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHBiLTVcIj5cclxuICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtIGNvbC1tZC02IG14LWF1dG8gbXQtNVwiIG9uU3VibWl0PXtzZWFyY2hVc2VyfT5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1yLXNtLTJcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIHdhbGxldC4uLlwiIHZhbHVlPXtxdWVyeX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRRdWVyeShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IG15LTIgXCI+U2VhcmNoPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgXHJcbiAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgPGgzPlJlY2VudGx5IGFkZGVkIHdhbGxldHM8L2gzPlxyXG5cclxuICB7IXJlc3VsdHMud2FsbGV0ID9cclxuXHJcbiAgPGRpdiBjbGFzcz1cInJvdyBwdC00XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtXCI+XHJcbnt0b2tlbnMuc2xpY2UoMCwgMTUpLmZpbHRlcigoaXRlbXMsIGlkeCkgPT4gaWR4ICUgMyA9PSAwKS5tYXAoKHRva2VuLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcblxyXG48ZGl2IGNsYXNzTmFtZT1cImNhcmQgdGV4dC13aGl0ZSBiZy1wcmltYXJ5IG1iLTNcIiBzdHlsZT17e21heFdpZHRoOicyMHJlbSd9fT5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPnt0b2tlbi53YWxsZXQuc2xpY2UoMCwyNSkgKyAnLi4uJ308L2Rpdj5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuey8qIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+PC9oND4gKi99XHJcbnsvKiA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57dG9rZW4ud2FsbGV0fTwvcD4gKi99XHJcbjxCdXR0b24gd2FsbGV0PXt0b2tlbi53YWxsZXR9IC8+XHJcbjxwIGNsYXNzTmFtZT1cInB0LTJcIj57dG9rZW4udGVsZWdyYW0gPyA8YSBjbGFzc05hbWU9XCJsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YGh0dHBzOi8vdC5tZS8ke3Rva2VuLnRlbGVncmFtfWB9PjxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuaGVsaXVtLmJnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAxL3RlbGVncmFtZnVsbHBuZy5wbmdcIiBzdHlsZT17e3dpZHRoOicxNTBweCcsIGhlaWdodDonNTBweCd9fS8+PC9hPiA6IDxiIHN0eWxlPXt7d2lkdGg6JzE1MHB4JywgaGVpZ2h0Oic1MHB4JywgbWFyZ2luOicwIGF1dG8nfX0+Tm8gVGVsZWdyYW0gYWNjb3VudDwvYj59PC9wPlxyXG48cCBjbGFzc05hbWU9XCJwdC0yXCI+e3Rva2VuLmRpc2NvcmQgPyA8YSBjbGFzc05hbWU9XCJsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YGh0dHBzOi8vZGlzY29yZC5nZy91c2Vycy8ke3Rva2VuLmRpc2NvcmR9YH0+PGltZyBzcmM9XCJodHRwczovL3d3dy5oZWxpdW0uYmcvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDEvZGlzY29yZHBuZy0xMDI0eDI4Mi5wbmdcIiBzdHlsZT17e3dpZHRoOicxMzBweCcsIGhlaWdodDonNDBweCcsIG1hcmdpblJpZ2h0OicxMHB4J319Lz48L2E+IDogPGIgc3R5bGU9e3t3aWR0aDonMTMwcHgnLCBoZWlnaHQ6JzQwcHgnLCBtYXJnaW46JzAgYXV0byd9fT5ObyBEaXNjb3JkIGFjY291bnQ8L2I+fTwvcD5cclxuXHJcbjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIHB0LTJcIiBvbkNsaWNrPXsoKT0+e2hvdHNwb3RzKHRva2VuLndhbGxldCk7IHNldEZvb3RlcignZml4ZWQtZm9vdGVyJyk7fX0+c2hvdyBob3RzcG90czwvYnV0dG9uPlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSlcclxuICBcclxuICAgIH0gICAgPC9kaXY+XHJcbiAgICB7LyogZW5kIDEgKi99XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29sLXNtXCI+XHJcbnt0b2tlbnMuc2xpY2UoMCwgMTUpLmZpbHRlcigoaXRlbXMsIGlkeCkgPT4gaWR4ICUgMyA9PSAxKS5tYXAoKHRva2VuLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLXByaW1hcnkgbWItM1wiIHN0eWxlPXt7bWF4V2lkdGg6JzIwcmVtJ319PlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+e3Rva2VuLndhbGxldC5zbGljZSgwLDI1KSArICcuLi4nfTwvZGl2PlxyXG48ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG48QnV0dG9uIHdhbGxldD17dG9rZW4ud2FsbGV0fSAvPlxyXG48cCBjbGFzc05hbWU9XCJwdC0yXCI+e3Rva2VuLnRlbGVncmFtID8gPGEgY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2BodHRwczovL3QubWUvJHt0b2tlbi50ZWxlZ3JhbX1gfT48aW1nIHNyYz1cImh0dHBzOi8vd3d3LmhlbGl1bS5iZy93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMS90ZWxlZ3JhbWZ1bGxwbmcucG5nXCIgc3R5bGU9e3t3aWR0aDonMTUwcHgnLCBoZWlnaHQ6JzUwcHgnfX0vPjwvYT4gOiA8YiBzdHlsZT17e3dpZHRoOicxNTBweCcsIGhlaWdodDonNTBweCcsIG1hcmdpbjonMCBhdXRvJ319Pk5vIFRlbGVncmFtIGFjY291bnQ8L2I+fTwvcD5cclxuPHAgY2xhc3NOYW1lPVwicHQtMlwiPnt0b2tlbi5kaXNjb3JkID8gPGEgY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2BodHRwczovL2Rpc2NvcmQuZ2cvdXNlcnMvJHt0b2tlbi5kaXNjb3JkfWB9PjxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuaGVsaXVtLmJnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAxL2Rpc2NvcmRwbmctMTAyNHgyODIucG5nXCIgc3R5bGU9e3t3aWR0aDonMTMwcHgnLCBoZWlnaHQ6JzQwcHgnLCBtYXJnaW5SaWdodDonMTBweCd9fS8+PC9hPiA6IDxiIHN0eWxlPXt7d2lkdGg6JzEzMHB4JywgaGVpZ2h0Oic0MHB4JywgbWFyZ2luOicwIGF1dG8nfX0+Tm8gRGlzY29yZCBhY2NvdW50PC9iPn08L3A+XHJcblxyXG48YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBwdC0yXCIgb25DbGljaz17KCk9Pntob3RzcG90cyh0b2tlbi53YWxsZXQpOyBzZXRGb290ZXIoJ2ZpeGVkLWZvb3RlcicpO319PnNob3cgaG90c3BvdHM8L2J1dHRvbj5cclxuPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0pXHJcblxyXG4gICAgfSAgICA8L2Rpdj5cclxuICAgIHsvKiBlbmQyICovfVxyXG4gICAgPGRpdiBjbGFzcz1cImNvbC1zbVwiPlxyXG4gICAge3Rva2Vucy5zbGljZSgwLCAxNSkuZmlsdGVyKChpdGVtcywgaWR4KSA9PiBpZHggJSAzID09IDIpLm1hcCgodG9rZW4sIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRleHQtd2hpdGUgYmctcHJpbWFyeSBtYi0zXCIgc3R5bGU9e3ttYXhXaWR0aDonMjByZW0nfX0+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj57dG9rZW4ud2FsbGV0LnNsaWNlKDAsMjUpICsgJy4uLid9PC9kaXY+XHJcbjxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbjxCdXR0b24gd2FsbGV0PXt0b2tlbi53YWxsZXR9IC8+XHJcbjxwIGNsYXNzTmFtZT1cInB0LTJcIj57dG9rZW4udGVsZWdyYW0gPyA8YSBjbGFzc05hbWU9XCJsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YGh0dHBzOi8vdC5tZS8ke3Rva2VuLnRlbGVncmFtfWB9PjxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuaGVsaXVtLmJnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAxL3RlbGVncmFtZnVsbHBuZy5wbmdcIiBzdHlsZT17e3dpZHRoOicxNTBweCcsIGhlaWdodDonNTBweCd9fS8+PC9hPiA6IDxiIHN0eWxlPXt7d2lkdGg6JzE1MHB4JywgaGVpZ2h0Oic1MHB4JywgbWFyZ2luOicwIGF1dG8nfX0+Tm8gVGVsZWdyYW0gYWNjb3VudDwvYj59PC9wPlxyXG48cCBjbGFzc05hbWU9XCJwdC0yXCI+e3Rva2VuLmRpc2NvcmQgPyA8YSBjbGFzc05hbWU9XCJsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17YGh0dHBzOi8vZGlzY29yZC5nZy91c2Vycy8ke3Rva2VuLmRpc2NvcmR9YH0+PGltZyBzcmM9XCJodHRwczovL3d3dy5oZWxpdW0uYmcvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDEvZGlzY29yZHBuZy0xMDI0eDI4Mi5wbmdcIiBzdHlsZT17e3dpZHRoOicxMzBweCcsIGhlaWdodDonNDBweCcsIG1hcmdpblJpZ2h0OicxMHB4J319Lz48L2E+IDogPGIgc3R5bGU9e3t3aWR0aDonMTMwcHgnLCBoZWlnaHQ6JzQwcHgnLCBtYXJnaW46JzAgYXV0byd9fT5ObyBEaXNjb3JkIGFjY291bnQ8L2I+fTwvcD5cclxuXHJcbjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvIHB0LTJcIiBvbkNsaWNrPXsoKT0+e2hvdHNwb3RzKHRva2VuLndhbGxldCk7IHNldEZvb3RlcignZml4ZWQtZm9vdGVyJyk7fX0+c2hvdyBob3RzcG90czwvYnV0dG9uPlxyXG48L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSlcclxuICB9PC9kaXY+XHJcbiAgICB7LyogZW5kMyAqL31cclxuICA8L2Rpdj4gOlxyXG4gIC8vIGVsc2Ugc2hvdyBxdWVyeSByZXN1bHRzXHJcbiAgICAgIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtNVwiPiBcclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LXdoaXRlIGJnLXByaW1hcnkgbWItMyBteC1hdXRvXCIgc3R5bGU9e3ttYXhXaWR0aDonMjByZW0nfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj57cmVzdWx0cy53YWxsZXQuc2xpY2UoMCwyNSkgKyAnLi4uJ308L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiB3YWxsZXQ9e3Jlc3VsdHMud2FsbGV0fSAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0yXCI+e3Rva2VuLnRlbGVncmFtID8gPGEgY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2BodHRwczovL3QubWUvJHt0b2tlbi50ZWxlZ3JhbX1gfT48aW1nIHNyYz1cImh0dHBzOi8vd3d3LmhlbGl1bS5iZy93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMS90ZWxlZ3JhbWZ1bGxwbmcucG5nXCIgc3R5bGU9e3t3aWR0aDonMTUwcHgnLCBoZWlnaHQ6JzUwcHgnfX0vPjwvYT4gOiA8YiBzdHlsZT17e3dpZHRoOicxNTBweCcsIGhlaWdodDonNTBweCcsIG1hcmdpbjonMCBhdXRvJ319Pk5vIFRlbGVncmFtIGFjY291bnQ8L2I+fTwvcD5cclxuPHAgY2xhc3NOYW1lPVwicHQtMlwiPnt0b2tlbi5kaXNjb3JkID8gPGEgY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2BodHRwczovL2Rpc2NvcmQuZ2cvdXNlcnMvJHt0b2tlbi5kaXNjb3JkfWB9PjxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuaGVsaXVtLmJnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAxL2Rpc2NvcmRwbmctMTAyNHgyODIucG5nXCIgc3R5bGU9e3t3aWR0aDonMTMwcHgnLCBoZWlnaHQ6JzQwcHgnLCBtYXJnaW5SaWdodDonMTBweCd9fS8+PC9hPiA6IDxiIHN0eWxlPXt7d2lkdGg6JzEzMHB4JywgaGVpZ2h0Oic0MHB4JywgbWFyZ2luOicwIGF1dG8nfX0+Tm8gRGlzY29yZCBhY2NvdW50PC9iPn08L3A+XHJcblxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4taW5mbyBwdC0yXCIgb25DbGljaz17KCk9Pntob3RzcG90cyh0b2tlbi53YWxsZXQpOyBzZXRGb290ZXIoJ2ZpeGVkLWZvb3RlcicpO319PnNob3cgaG90c3BvdHM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKT0+c2V0UmVzdWx0cyhbXSl9PkdvIGJhY2s8L2J1dHRvbj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gICB9XHJcbjwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtmb290ZXJ9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhjb250IGNvbnRhaW5lclwiPlxyXG4gICAgPGEgaWQ9XCJjbG9zZVwiIHJvbGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9eygpPT5zZXRGb290ZXIoJ2ZpeGVkLWZvb3RlciBjbG9zZWQnKX0+eDwvYT5cclxuXHJcbiAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIG10LTUgcm91bmRlZFwiPlxyXG4gIDx0aGVhZD5cclxuICAgIDx0ciBjbGFzc05hbWU9XCJ0YWJsZS1zZWNvbmRhcnlcIj5cclxuICAgICAgPHRoIHNjb3BlPVwiY29sXCI+TmFtZTwvdGg+XHJcbiAgICAgIDx0aCBzY29wZT1cImNvbFwiPlN0YXR1czwvdGg+XHJcbiAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFkZHJlc3M8L3RoPlxyXG4gICAgPC90cj5cclxuICA8L3RoZWFkPlxyXG4gIDx0Ym9keT5cclxuICB7ZGV2aWNlcy5tYXAoKGRldmljZSwgaSk9PlxyXG4gICAgPHRyIGtleT17aX0gY2xhc3NOYW1lPVwidGFibGUtcHJpbWFyeVwiPlxyXG4gICAgICA8dGggc2NvcGU9XCJyb3dcIj57ZGV2aWNlLm5hbWV9PC90aD5cclxuICAgICAgPHRkPntkZXZpY2Uuc3RhdHVzLm9ubGluZX08L3RkPlxyXG4gICAgICA8dGQ+e2RldmljZS5nZW9jb2RlLmxvbmdfc3RyZWV0fSwge2RldmljZS5nZW9jb2RlLnNob3J0X2NvdW50cnl9PC90ZD5cclxuICAgIDwvdHI+XHJcbiAgKX1cclxuXHJcblxyXG4gIDwvdGJvZHk+XHJcbjwvdGFibGU+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2xzIGJ0biBidG4tcHJpbWFyeSBtYi0zXCIgb25DbGljaz17KCk9PnNldEZvb3RlcignZml4ZWQtZm9vdGVyIGNsb3NlZCcpfT5DbG9zZTwvYnV0dG9uPlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2tlbnM7XHJcblxyXG57LyogPGRpdiBjbGFzcz1cImNvbC1zbVwiPlxyXG57dG9rZW5zLnNsaWNlKDAsIDE1KS5maWx0ZXIoKGl0ZW1zLCBpZHgpID0+IGlkeCAlIDMgPT0gMSkubWFwKCh0b2tlbiwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgPHA+PGI+SGVsaXVtIFRva2VuOiA8L2I+PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwid2FsbGV0XCI+e3Rva2VuLndhbGxldC5zbGljZSgwLDEwKSArIFwiLi4uXCJ9PC9wPlxyXG4gICAgICAgICAgPEJ1dHRvbiB3YWxsZXQ9e3Rva2VuLndhbGxldH0gLz5cclxuICAgICAgICAgIDxwPnt0b2tlbi50ZWxlZ3JhbSA/IDxhIGNsYXNzTmFtZT1cImxpbmtcIiBocmVmPXtgaHR0cHM6Ly90Lm1lLyR7dG9rZW4udGVsZWdyYW19YH0+VGVsZWdyYW08L2E+IDogJ05vdCB0ZWxlZ3JhbSBhY2NvdW50J308L3A+XHJcbiAgICAgICAgICA8cD57dG9rZW4uZGlzY29yZCA/IDxhIGNsYXNzTmFtZT1cImxpbmtcIiBocmVmPXtgaHR0cHM6Ly9kaXNjb3JkLmdnL3VzZXJzLyR7dG9rZW4uZGlzY29yZH1gfT5EaXNjb3JkPC9hPiA6ICdOb3QgZGlzY29yZCBhY2NvdW50J308L3A+XHJcblxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKT0+e2hvdHNwb3RzKHRva2VuLndhbGxldCk7IHNldEZvb3RlcignZml4ZWQtZm9vdGVyJyk7fX0+c2hvdyBob3RzcG90czwvYnV0dG9uPlxyXG4gICAgICAgICAgPGhyPjwvaHI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSlcclxuXHJcbiAgICB9ICAgIDwvZGl2PiAqL31cclxuXHJcbiAgICAgICAgICB7LyogPHA+e3Jlc3VsdHMud2FsbGV0fTwvcD5cclxuICAgICAgPHA+PGEgaHJlZj17YGh0dHBzOi8vdC5tZS8ke3Jlc3VsdHMudGVsZWdyYW19YH0+VGVsZWdyYW08L2E+PC9wPlxyXG4gICAgICA8cD48YSBocmVmPXtgaHR0cHM6Ly9kaXNjb3JkLmdnL3VzZXJzLyR7cmVzdWx0cy5kaXNjb3JkfWB9PkRpc2NvcmQ8L2E+PC9wPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXsoKT0+e2hvdHNwb3RzKHJlc3VsdHMud2FsbGV0KTsgc2V0Rm9vdGVyKCdmaXhlZC1mb290ZXInKTt9fT5zaG93IGhvdHNwb3RzPC9idXR0b24+XHJcbiAgICAgICAqL30iXSwic291cmNlUm9vdCI6IiJ9