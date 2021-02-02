webpackHotUpdate_N_E("pages/private",{

/***/ "./pages/private.js":
/*!**************************!*\
  !*** ./pages/private.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/firebase */ "./components/firebase.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Login */ "./pages/Login.js");


var _jsxFileName = "C:\\apps\\helium_app\\pages\\private.js",
    _this = undefined,
    _s2 = $RefreshSig$();








var PrivateRoute = function PrivateRoute() {
  _s2();

  var _s = $RefreshSig$();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showform = _useState3[0],
      setShowform = _useState3[1];

  function authorization() {
    _components_firebase__WEBPACK_IMPORTED_MODULE_3__["firebase"].auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
        profileID(user);
      } else {
        setUser(null);
      }
    });
  }

  ;

  function profileID(user) {
    // ////////////////////
    var nummers = _components_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection("channels").doc("general").collection('messages').where('user', '==', user.uid);
    nummers.get().then(function (querySnapshot) {
      if (!querySnapshot.empty) {
        querySnapshot.forEach(function (doc) {
          // console.log(doc.id, ' => ', doc.data());
          var results = doc.data();
          setData(results);
          console.log(results); // doc.ref.update({wallet: "bar"})
        });
      } else {
        console.log("false");
      }
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    authorization();
  }, []);

  function Button(_ref) {
    _s();

    var wallet = _ref.wallet;

    var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        state = _useState4[0],
        setState = _useState4[1];

    navigator.clipboard.writeText(wallet);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: state ? 'btn btn-success btn-sm' : 'btn btn-info btn-sm',
      onClick: function onClick(e) {
        return setState(true);
      },
      children: state ? 'Copied to clipboard!' : 'Copy my wallet ID'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this);
  }

  _s(Button, "BhkeKSQ/+r5twNzt2gbiZr0oFzY=");

  function updateForm(e) {
    e.preventDefault();
    var updateForm = _components_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection("channels").doc("general").collection('messages').where('user', '==', user.uid);
    updateForm.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        doc.ref.update({
          wallet: e.target.elements[0].value,
          telegram: e.target.elements[1].value,
          discord: e.target.elements[2].value
        }).then(function () {
          var results = doc.data();
          setData(results);
          document.getElementById('sbm').click();
        });
      });
    });
  }

  return user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container text-center pt100",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "My personal information"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 13
      }, _this), data && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card text-white mb-5 mt-5 mx-auto",
          style: {
            maxWidth: '50rem'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-header",
            children: "Wallet ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-text",
              children: data.wallet
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
              wallet: data.wallet
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "pt-2",
              children: data.telegram ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "link",
                href: "https://t.me/".concat(data.telegram),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://www.helium.bg/wp-content/uploads/2021/01/telegramfullpng.png",
                  style: {
                    width: '150px',
                    height: '50px'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 111
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 52
              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  width: '150px',
                  height: '50px',
                  margin: '0 auto'
                },
                children: "No Telegram account"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 238
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "pt-2",
              children: data.discord ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "link",
                href: "https://discord.gg/users/".concat(data.discord),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://www.helium.bg/wp-content/uploads/2021/01/discordpng-1024x282.png",
                  style: {
                    width: '130px',
                    height: '40px',
                    marginRight: '10px'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 121
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 51
              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  width: '130px',
                  height: '40px',
                  margin: '0 auto'
                },
                children: "No Discord account"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 272
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-warning",
            onClick: function onClick() {
              return setShowform(!showform);
            },
            children: showform ? 'Update my personal data' : 'Close'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: "form-group col-md-6 mx-auto text-center ".concat(!showform ? 'updForm' : ''),
        onSubmit: updateForm,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Wallet:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          type: "text",
          defaultValue: data.wallet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Telegram:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          type: "text",
          defaultValue: data.telegram
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Discord:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          type: "text",
          defaultValue: data.discord
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "btn btn-success mt-3",
          type: "submit",
          id: "sbm",
          value: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 1
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 3
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 6
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://bootswatch.com/4/darkly/bootstrap.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "App container pt-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Helium"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 12
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Login__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "nav-link",
        href: "/register",
        children: "Create new account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 116,
    columnNumber: 5
  }, _this);
};

_s2(PrivateRoute, "kMIWBVQ6qZCySYe8pCcj3ompwJg=");

_c = PrivateRoute;
/* harmony default export */ __webpack_exports__["default"] = (PrivateRoute);

var _c;

$RefreshReg$(_c, "PrivateRoute");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJpdmF0ZS5qcyJdLCJuYW1lcyI6WyJQcml2YXRlUm91dGUiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiZGF0YSIsInNldERhdGEiLCJzaG93Zm9ybSIsInNldFNob3dmb3JtIiwiYXV0aG9yaXphdGlvbiIsImZpcmViYXNlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInByb2ZpbGVJRCIsIm51bW1lcnMiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ3aGVyZSIsInVpZCIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZW1wdHkiLCJmb3JFYWNoIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJ3YWxsZXQiLCJzdGF0ZSIsInNldFN0YXRlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZSIsInVwZGF0ZUZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsInJlZiIsInVwZGF0ZSIsInRhcmdldCIsImVsZW1lbnRzIiwidmFsdWUiLCJ0ZWxlZ3JhbSIsImRpc2NvcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xpY2siLCJtYXhXaWR0aCIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwibWFyZ2luUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDLEtBQUQsQ0FEWDtBQUFBLE1BQ2ZDLElBRGU7QUFBQSxNQUNUQyxPQURTOztBQUFBLG1CQUVHRixzREFBUSxDQUFDLEVBQUQsQ0FGWDtBQUFBLE1BRWZHLElBRmU7QUFBQSxNQUVUQyxPQUZTOztBQUFBLG1CQUdXSixzREFBUSxDQUFDLEtBQUQsQ0FIbkI7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LEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlNO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVFLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFLHFFQUFDLGdEQUFEO0FBQU0saUJBQVMsRUFBQyxVQUFoQjtBQUEyQixZQUFJLEVBQUMsV0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0F0Q0g7QUFrREEsQ0F4SEQ7O0lBQU01QyxZOztLQUFBQSxZO0FBeUhTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcml2YXRlLjZmOTc5NTU0ZjY3YWE1YTNkNmJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgZmlyZWJhc2UsIGRiIH0gZnJvbSAnLi4vY29tcG9uZW50cy9maXJlYmFzZSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luJztcclxuXHJcbmNvbnN0IFByaXZhdGVSb3V0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFsgdXNlciwgc2V0VXNlciBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgWyBkYXRhLCBzZXREYXRhIF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbIHNob3dmb3JtLCBzZXRTaG93Zm9ybSBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhdXRob3JpemF0aW9uKCl7XHJcbiAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgICBpZih1c2VyKXtcclxuICAgICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgICAgICAgICBwcm9maWxlSUQodXNlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIHByb2ZpbGVJRCh1c2VyKXtcclxuXHJcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIHZhciBudW1tZXJzID0gZGIuY29sbGVjdGlvbihcImNoYW5uZWxzXCIpLmRvYyhcImdlbmVyYWxcIikuY29sbGVjdGlvbignbWVzc2FnZXMnKS53aGVyZSgndXNlcicsICc9PScsIHVzZXIudWlkKTtcclxuICAgICAgbnVtbWVycy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgaWYgKCFxdWVyeVNuYXBzaG90LmVtcHR5KSB7XHJcbiAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZG9jLmlkLCAnID0+ICcsIGRvYy5kYXRhKCkpO1xyXG4gICAgICAgICAgbGV0IHJlc3VsdHMgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgc2V0RGF0YShyZXN1bHRzKVxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cylcclxuICAgICAgICAgIC8vIGRvYy5yZWYudXBkYXRlKHt3YWxsZXQ6IFwiYmFyXCJ9KVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VcIilcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgYXV0aG9yaXphdGlvbigpO1xyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gQnV0dG9uKHt3YWxsZXR9KXtcclxuICAgICAgY29uc3Rbc3RhdGUsc2V0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh3YWxsZXQpO1xyXG4gIFxyXG4gICAgICByZXR1cm4oXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdGF0ZSA/ICdidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtJyA6ICdidG4gYnRuLWluZm8gYnRuLXNtJ30gb25DbGljaz17ZT0+c2V0U3RhdGUodHJ1ZSl9PlxyXG4gICAgICAgIHtzdGF0ZSA/ICdDb3BpZWQgdG8gY2xpcGJvYXJkIScgOiAnQ29weSBteSB3YWxsZXQgSUQnfVxyXG4gICAgICA8L2J1dHRvbj4pXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVGb3JtKGUpe1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICB2YXIgdXBkYXRlRm9ybSA9IGRiLmNvbGxlY3Rpb24oXCJjaGFubmVsc1wiKS5kb2MoXCJnZW5lcmFsXCIpLmNvbGxlY3Rpb24oJ21lc3NhZ2VzJykud2hlcmUoJ3VzZXInLCAnPT0nLCB1c2VyLnVpZCk7XHJcbiAgICAgIHVwZGF0ZUZvcm0uZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcclxuICAgICAgICAgIGRvYy5yZWYudXBkYXRlKHtcclxuICAgICAgICAgICAgd2FsbGV0OiBlLnRhcmdldC5lbGVtZW50c1swXS52YWx1ZSxcclxuICAgICAgICAgICAgdGVsZWdyYW06IGUudGFyZ2V0LmVsZW1lbnRzWzFdLnZhbHVlLFxyXG4gICAgICAgICAgICBkaXNjb3JkOiBlLnRhcmdldC5lbGVtZW50c1syXS52YWx1ZVxyXG4gICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgIGxldCByZXN1bHRzID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgICAgICBzZXREYXRhKHJlc3VsdHMpXHJcbiAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NibScpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiByZXR1cm4odXNlciA/IFxyXG4gICAgKDxMYXlvdXQ+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXIgcHQxMDBcIj5cclxuICAgICAgICAgICAgPGgzPk15IHBlcnNvbmFsIGluZm9ybWF0aW9uPC9oMz5cclxuICAgICAgICAgICAge2RhdGEgJiYgXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRleHQtd2hpdGUgbWItNSBtdC01IG14LWF1dG9cIiBzdHlsZT17e21heFdpZHRoOic1MHJlbSd9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5XYWxsZXQgSUQ8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICB7LyogPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj48L2g0PiAqL31cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57ZGF0YS53YWxsZXR9PC9wPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gd2FsbGV0PXtkYXRhLndhbGxldH0gLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0yXCI+e2RhdGEudGVsZWdyYW0gPyA8YSBjbGFzc05hbWU9XCJsaW5rXCIgaHJlZj17YGh0dHBzOi8vdC5tZS8ke2RhdGEudGVsZWdyYW19YH0+PGltZyBzcmM9XCJodHRwczovL3d3dy5oZWxpdW0uYmcvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDEvdGVsZWdyYW1mdWxscG5nLnBuZ1wiIHN0eWxlPXt7d2lkdGg6JzE1MHB4JywgaGVpZ2h0Oic1MHB4J319Lz48L2E+IDogPGRpdiBzdHlsZT17e3dpZHRoOicxNTBweCcsIGhlaWdodDonNTBweCcsIG1hcmdpbjonMCBhdXRvJ319Pk5vIFRlbGVncmFtIGFjY291bnQ8L2Rpdj59PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTJcIj57ZGF0YS5kaXNjb3JkID8gPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9e2BodHRwczovL2Rpc2NvcmQuZ2cvdXNlcnMvJHtkYXRhLmRpc2NvcmR9YH0+PGltZyBzcmM9XCJodHRwczovL3d3dy5oZWxpdW0uYmcvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDEvZGlzY29yZHBuZy0xMDI0eDI4Mi5wbmdcIiBzdHlsZT17e3dpZHRoOicxMzBweCcsIGhlaWdodDonNDBweCcsIG1hcmdpblJpZ2h0OicxMHB4J319Lz48L2E+IDogPGRpdiBzdHlsZT17e3dpZHRoOicxMzBweCcsIGhlaWdodDonNDBweCcsIG1hcmdpbjonMCBhdXRvJ319Pk5vIERpc2NvcmQgYWNjb3VudDwvZGl2Pn08L3A+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIiBvbkNsaWNrPXsoKSA9PnNldFNob3dmb3JtKCFzaG93Zm9ybSl9PntzaG93Zm9ybSA/ICdVcGRhdGUgbXkgcGVyc29uYWwgZGF0YScgOiAnQ2xvc2UnfTwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuPGZvcm0gY2xhc3NOYW1lPXtgZm9ybS1ncm91cCBjb2wtbWQtNiBteC1hdXRvIHRleHQtY2VudGVyICR7IXNob3dmb3JtID8gJ3VwZEZvcm0nIDogJyd9YH0gb25TdWJtaXQ9e3VwZGF0ZUZvcm19PlxyXG4gICAgICAgIDxsYWJlbD5XYWxsZXQ6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e2RhdGEud2FsbGV0fSAvPlxyXG5cclxuICAgICAgICA8bGFiZWw+VGVsZWdyYW06PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e2RhdGEudGVsZWdyYW19IC8+XHJcblxyXG4gICAgICAgIDxsYWJlbD5EaXNjb3JkOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXtkYXRhLmRpc2NvcmR9IC8+XHJcblxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgbXQtM1wiIHR5cGU9XCJzdWJtaXRcIiBpZD1cInNibVwiIHZhbHVlPVwiVXBkYXRlXCIgLz5cclxuPC9mb3JtPlxyXG5cclxuICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PikgOiAoIFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9ib290c3dhdGNoLmNvbS80L2RhcmtseS9ib290c3RyYXAubWluLmNzc1wiLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcCBjb250YWluZXIgcHQtNVwiPlxyXG4gICAgICAgICAgIDxoMT5IZWxpdW08L2gxPlxyXG4gICAgICAgICAgICA8TG9naW4vPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3JlZ2lzdGVyXCI+Q3JlYXRlIG5ldyBhY2NvdW50PC9MaW5rPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcml2YXRlUm91dGU7Il0sInNvdXJjZVJvb3QiOiIifQ==