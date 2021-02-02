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
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Login */ "./pages/Login.js");


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
    var nummers = _components_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection("channels").doc("general").collection('messages').where('user', '==', user.uid);
    nummers.get().then(function (querySnapshot) {
      if (!querySnapshot.empty) {
        querySnapshot.forEach(function (doc) {
          var results = doc.data();
          setData(results);
          console.log(results); // doc.ref.update({wallet: "bar"})
        });
      } else {// console.log("false")
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
      lineNumber: 48,
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
          e.target.elements[3].click();
          /* update email address */

          user.updateEmail(e.target.elements[0].value + '@gmail.com');
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
        lineNumber: 79,
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
            lineNumber: 83,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-text",
              children: data.wallet
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
              wallet: data.wallet
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
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
                  lineNumber: 88,
                  columnNumber: 111
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
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
                lineNumber: 88,
                columnNumber: 238
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
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
                  lineNumber: 89,
                  columnNumber: 121
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
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
                lineNumber: 89,
                columnNumber: 272
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-warning",
            onClick: function onClick() {
              return setShowform(!showform);
            },
            children: !showform ? 'Edit my profile' : 'Close'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: "form-group col-md-6 mx-auto text-center ".concat(!showform ? 'updForm' : ''),
        onSubmit: updateForm,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Wallet:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          type: "text",
          defaultValue: data.wallet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Telegram:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          type: "text",
          defaultValue: data.telegram
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Discord:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          type: "text",
          defaultValue: data.discord
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "btn btn-success mt-3",
          type: "submit",
          id: "sbm",
          value: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 1
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 3
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 6
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://bootswatch.com/4/darkly/bootstrap.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "App container pt-3 pb-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Helium"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 12
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Login__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 113,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJpdmF0ZS5qcyJdLCJuYW1lcyI6WyJQcml2YXRlUm91dGUiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiZGF0YSIsInNldERhdGEiLCJzaG93Zm9ybSIsInNldFNob3dmb3JtIiwiYXV0aG9yaXphdGlvbiIsImZpcmViYXNlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInByb2ZpbGVJRCIsIm51bW1lcnMiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ3aGVyZSIsInVpZCIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZW1wdHkiLCJmb3JFYWNoIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJ3YWxsZXQiLCJzdGF0ZSIsInNldFN0YXRlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZSIsInVwZGF0ZUZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsInJlZiIsInVwZGF0ZSIsInRhcmdldCIsImVsZW1lbnRzIiwidmFsdWUiLCJ0ZWxlZ3JhbSIsImRpc2NvcmQiLCJjbGljayIsInVwZGF0ZUVtYWlsIiwibWF4V2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxDQUFDLEtBQUQsQ0FEWDtBQUFBLE1BQ2ZDLElBRGU7QUFBQSxNQUNUQyxPQURTOztBQUFBLG1CQUVHRixzREFBUSxDQUFDLEVBQUQsQ0FGWDtBQUFBLE1BRWZHLElBRmU7QUFBQSxNQUVUQyxPQUZTOztBQUFBLG1CQUdXSixzREFBUSxDQUFDLEtBQUQsQ0FIbkI7QUFBQSxNQUdmSyxRQUhlO0FBQUEs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NEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBSU07QUFBSyxlQUFTLEVBQUMseUJBQWY7QUFBQSw4QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUUscUVBQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQXJDSDtBQWdEQSxDQXJIRDs7SUFBTTVDLFk7O0tBQUFBLFk7QUFzSFNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ByaXZhdGUuMzZkNzdhY2RhNWEzMWIxY2ZiNmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgeyBmaXJlYmFzZSwgZGIgfSBmcm9tICcuLi9jb21wb25lbnRzL2ZpcmViYXNlJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExvZ2luIGZyb20gJy4vTG9naW4nO1xyXG5cclxuY29uc3QgUHJpdmF0ZVJvdXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgWyB1c2VyLCBzZXRVc2VyIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbIGRhdGEsIHNldERhdGEgXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFsgc2hvd2Zvcm0sIHNldFNob3dmb3JtIF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gYXV0aG9yaXphdGlvbigpe1xyXG4gICAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgaWYodXNlcil7XHJcbiAgICAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICAgICAgcHJvZmlsZUlEKHVzZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIHByb2ZpbGVJRCh1c2VyKXtcclxuICAgICAgdmFyIG51bW1lcnMgPSBkYi5jb2xsZWN0aW9uKFwiY2hhbm5lbHNcIikuZG9jKFwiZ2VuZXJhbFwiKS5jb2xsZWN0aW9uKCdtZXNzYWdlcycpLndoZXJlKCd1c2VyJywgJz09JywgdXNlci51aWQpO1xyXG4gICAgICBudW1tZXJzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgICBpZiAoIXF1ZXJ5U25hcHNob3QuZW1wdHkpIHtcclxuICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XHJcbiAgICAgICAgICBsZXQgcmVzdWx0cyA9IGRvYy5kYXRhKCk7XHJcbiAgICAgICAgICBzZXREYXRhKHJlc3VsdHMpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKVxyXG4gICAgICAgICAgLy8gZG9jLnJlZi51cGRhdGUoe3dhbGxldDogXCJiYXJcIn0pXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJmYWxzZVwiKVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+e1xyXG4gICAgICBhdXRob3JpemF0aW9uKCk7XHJcbiAgICB9LFtdKVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBCdXR0b24oe3dhbGxldH0pe1xyXG4gICAgICBjb25zdFtzdGF0ZSxzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHdhbGxldCk7XHJcbiAgXHJcbiAgICAgIHJldHVybihcclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0YXRlID8gJ2J0biBidG4tc3VjY2VzcyBidG4tc20nIDogJ2J0biBidG4taW5mbyBidG4tc20nfSBvbkNsaWNrPXtlPT5zZXRTdGF0ZSh0cnVlKX0+XHJcbiAgICAgICAge3N0YXRlID8gJ0NvcGllZCB0byBjbGlwYm9hcmQhJyA6ICdDb3B5IG15IHdhbGxldCBJRCd9XHJcbiAgICAgIDwvYnV0dG9uPilcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZUZvcm0oZSl7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIHZhciB1cGRhdGVGb3JtID0gZGIuY29sbGVjdGlvbihcImNoYW5uZWxzXCIpLmRvYyhcImdlbmVyYWxcIikuY29sbGVjdGlvbignbWVzc2FnZXMnKS53aGVyZSgndXNlcicsICc9PScsIHVzZXIudWlkKTtcclxuICAgICAgdXBkYXRlRm9ybS5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xyXG4gXHJcbiAgICAgICAgICBkb2MucmVmLnVwZGF0ZSh7XHJcbiAgICAgICAgICAgIHdhbGxldDogZS50YXJnZXQuZWxlbWVudHNbMF0udmFsdWUsXHJcbiAgICAgICAgICAgIHRlbGVncmFtOiBlLnRhcmdldC5lbGVtZW50c1sxXS52YWx1ZSxcclxuICAgICAgICAgICAgZGlzY29yZDogZS50YXJnZXQuZWxlbWVudHNbMl0udmFsdWUsXHJcbiAgICAgICAgICAgfSkudGhlbihcclxuICAgICAgICAgICAgICgpPT57XHJcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgICAgIHNldERhdGEocmVzdWx0cyk7XHJcbiAgICAgICAgICAgICAgZS50YXJnZXQuZWxlbWVudHNbM10uY2xpY2soKTtcclxuICAgICAgICAgICAgICAvKiB1cGRhdGUgZW1haWwgYWRkcmVzcyAqL1xyXG4gICAgICAgICAgICAgIHVzZXIudXBkYXRlRW1haWwoZS50YXJnZXQuZWxlbWVudHNbMF0udmFsdWUgKyAnQGdtYWlsLmNvbScpO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIClcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiByZXR1cm4odXNlciA/IFxyXG4gICAgKDxMYXlvdXQ+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXIgcHQxMDBcIj5cclxuICAgICAgICAgICAgPGgzPk15IHBlcnNvbmFsIGluZm9ybWF0aW9uPC9oMz5cclxuICAgIHtkYXRhICYmIFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LXdoaXRlIG1iLTUgbXQtNSBteC1hdXRvXCIgc3R5bGU9e3ttYXhXaWR0aDonNTByZW0nfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+V2FsbGV0IElEPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgey8qIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+PC9oND4gKi99XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e2RhdGEud2FsbGV0fTwvcD5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHdhbGxldD17ZGF0YS53YWxsZXR9IC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtMlwiPntkYXRhLnRlbGVncmFtID8gPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9e2BodHRwczovL3QubWUvJHtkYXRhLnRlbGVncmFtfWB9PjxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuaGVsaXVtLmJnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAxL3RlbGVncmFtZnVsbHBuZy5wbmdcIiBzdHlsZT17e3dpZHRoOicxNTBweCcsIGhlaWdodDonNTBweCd9fS8+PC9hPiA6IDxkaXYgc3R5bGU9e3t3aWR0aDonMTUwcHgnLCBoZWlnaHQ6JzUwcHgnLCBtYXJnaW46JzAgYXV0byd9fT5ObyBUZWxlZ3JhbSBhY2NvdW50PC9kaXY+fTwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0yXCI+e2RhdGEuZGlzY29yZCA/IDxhIGNsYXNzTmFtZT1cImxpbmtcIiBocmVmPXtgaHR0cHM6Ly9kaXNjb3JkLmdnL3VzZXJzLyR7ZGF0YS5kaXNjb3JkfWB9PjxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuaGVsaXVtLmJnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAxL2Rpc2NvcmRwbmctMTAyNHgyODIucG5nXCIgc3R5bGU9e3t3aWR0aDonMTMwcHgnLCBoZWlnaHQ6JzQwcHgnLCBtYXJnaW5SaWdodDonMTBweCd9fS8+PC9hPiA6IDxkaXYgc3R5bGU9e3t3aWR0aDonMTMwcHgnLCBoZWlnaHQ6JzQwcHgnLCBtYXJnaW46JzAgYXV0byd9fT5ObyBEaXNjb3JkIGFjY291bnQ8L2Rpdj59PC9wPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCIgb25DbGljaz17KCkgPT5zZXRTaG93Zm9ybSghc2hvd2Zvcm0pfT57IXNob3dmb3JtID8gJ0VkaXQgbXkgcHJvZmlsZScgOiAnQ2xvc2UnfTwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgfVxyXG5cclxuPGZvcm0gY2xhc3NOYW1lPXtgZm9ybS1ncm91cCBjb2wtbWQtNiBteC1hdXRvIHRleHQtY2VudGVyICR7IXNob3dmb3JtID8gJ3VwZEZvcm0nIDogJyd9YH0gb25TdWJtaXQ9e3VwZGF0ZUZvcm19PlxyXG4gICAgICAgIDxsYWJlbD5XYWxsZXQ6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e2RhdGEud2FsbGV0fSAvPlxyXG5cclxuICAgICAgICA8bGFiZWw+VGVsZWdyYW06PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e2RhdGEudGVsZWdyYW19IC8+XHJcblxyXG4gICAgICAgIDxsYWJlbD5EaXNjb3JkOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXtkYXRhLmRpc2NvcmR9IC8+XHJcblxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgbXQtM1wiIHR5cGU9XCJzdWJtaXRcIiBpZD1cInNibVwiIHZhbHVlPVwiVXBkYXRlXCIgLz5cclxuPC9mb3JtPlxyXG5cclxuICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PikgOiAoIFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9ib290c3dhdGNoLmNvbS80L2RhcmtseS9ib290c3RyYXAubWluLmNzc1wiLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcCBjb250YWluZXIgcHQtMyBwYi0zXCI+XHJcbiAgICAgICAgICAgPGgxPkhlbGl1bTwvaDE+XHJcbiAgICAgICAgICAgIDxMb2dpbi8+XHJcbiAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcml2YXRlUm91dGU7Il0sInNvdXJjZVJvb3QiOiIifQ==