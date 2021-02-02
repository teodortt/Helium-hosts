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
    var nummers = _components_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection("channels").doc("general").collection('messages').where('user', '==', user.uid);
    nummers.get().then(function (querySnapshot) {
      if (!querySnapshot.empty) {
        querySnapshot.forEach(function (doc) {
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
      lineNumber: 50,
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
        lineNumber: 82,
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
            lineNumber: 86,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-text",
              children: data.wallet
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
              wallet: data.wallet
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
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
                  lineNumber: 91,
                  columnNumber: 111
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
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
                lineNumber: 91,
                columnNumber: 238
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
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
                  lineNumber: 92,
                  columnNumber: 121
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
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
                lineNumber: 92,
                columnNumber: 272
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-warning",
            onClick: function onClick() {
              return setShowform(!showform);
            },
            children: !showform ? 'Edit my profile' : 'Close'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: "form-group col-md-6 mx-auto text-center ".concat(!showform ? 'updForm' : ''),
        onSubmit: updateForm,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Wallet:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          type: "text",
          defaultValue: data.wallet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Telegram:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          type: "text",
          defaultValue: data.telegram
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Discord:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          type: "text",
          defaultValue: data.discord
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "btn btn-success mt-3",
          type: "submit",
          id: "sbm",
          value: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 1
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 3
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 6
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://bootswatch.com/4/darkly/bootstrap.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "App container pt-3 pb-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Helium"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 12
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Login__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJpdmF0ZS5qcyJdLCJuYW1lcyI6WyJQcml2YXRlUm91dGUiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiZGF0YSIsInNldERhdGEiLCJzaG93Zm9ybSIsInNldFNob3dmb3JtIiwiYXV0aG9yaXphdGlvbiIsImZpcmViYXNlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInByb2ZpbGVJRCIsIm51bW1lcnMiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ3aGVyZSIsInVpZCIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZW1wdHkiLCJmb3JFYWNoIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJ3YWxsZXQiLCJzdGF0ZSIsInNldFN0YXRlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZSIsInVwZGF0ZUZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsInJlZiIsInVwZGF0ZSIsInRhcmdldCIsImVsZW1lbnRzIiwidmFsdWUiLCJ0ZWxlZ3JhbSIsImRpc2NvcmQiLCJjbGljayIsInVwZGF0ZUVtYWlsIiwibWF4V2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQyxLQUFELENBRFg7QUFBQSxNQUNmQyxJQURlO0FBQUEsTUFDVEMsT0FEUzs7QUFBQSxtQkFFR0Ysc0RBQVEsQ0FBQyxFQUFELENBRlg7QUFBQSxNQUVmRyxJQUZlO0FBQUEsTUFFVEMsT0FGUzs7QUFBQSxtQkFHV0osc0RBQVEsQ0FBQyxLQUFELENBSG5CO0FBQUEsTUFHZkssUUFI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QTtBQUFBO0FBQUE7QUFBQSxXQURPLGdCQXNDUjtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlNO0FBQUssZUFBUyxFQUFDLHlCQUFmO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVFLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0F0Q0g7QUFrREEsQ0F6SEQ7O0lBQU01QyxZOztLQUFBQSxZO0FBMEhTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcml2YXRlLjJhYzEyYmI1MGRjZDFiZjYwZTBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgZmlyZWJhc2UsIGRiIH0gZnJvbSAnLi4vY29tcG9uZW50cy9maXJlYmFzZSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luJztcclxuXHJcbmNvbnN0IFByaXZhdGVSb3V0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFsgdXNlciwgc2V0VXNlciBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgWyBkYXRhLCBzZXREYXRhIF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbIHNob3dmb3JtLCBzZXRTaG93Zm9ybSBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhdXRob3JpemF0aW9uKCl7XHJcbiAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgICBpZih1c2VyKXtcclxuICAgICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgICAgICAgICBwcm9maWxlSUQodXNlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIHByb2ZpbGVJRCh1c2VyKXtcclxuXHJcbiAgICAgIHZhciBudW1tZXJzID0gZGIuY29sbGVjdGlvbihcImNoYW5uZWxzXCIpLmRvYyhcImdlbmVyYWxcIikuY29sbGVjdGlvbignbWVzc2FnZXMnKS53aGVyZSgndXNlcicsICc9PScsIHVzZXIudWlkKTtcclxuICAgICAgbnVtbWVycy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgaWYgKCFxdWVyeVNuYXBzaG90LmVtcHR5KSB7XHJcbiAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xyXG4gICAgICAgICAgbGV0IHJlc3VsdHMgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgc2V0RGF0YShyZXN1bHRzKVxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cylcclxuICAgICAgICAgIC8vIGRvYy5yZWYudXBkYXRlKHt3YWxsZXQ6IFwiYmFyXCJ9KVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VcIilcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgYXV0aG9yaXphdGlvbigpO1xyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gQnV0dG9uKHt3YWxsZXR9KXtcclxuICAgICAgY29uc3Rbc3RhdGUsc2V0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh3YWxsZXQpO1xyXG4gIFxyXG4gICAgICByZXR1cm4oXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdGF0ZSA/ICdidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtJyA6ICdidG4gYnRuLWluZm8gYnRuLXNtJ30gb25DbGljaz17ZT0+c2V0U3RhdGUodHJ1ZSl9PlxyXG4gICAgICAgIHtzdGF0ZSA/ICdDb3BpZWQgdG8gY2xpcGJvYXJkIScgOiAnQ29weSBteSB3YWxsZXQgSUQnfVxyXG4gICAgICA8L2J1dHRvbj4pXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVGb3JtKGUpe1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICB2YXIgdXBkYXRlRm9ybSA9IGRiLmNvbGxlY3Rpb24oXCJjaGFubmVsc1wiKS5kb2MoXCJnZW5lcmFsXCIpLmNvbGxlY3Rpb24oJ21lc3NhZ2VzJykud2hlcmUoJ3VzZXInLCAnPT0nLCB1c2VyLnVpZCk7XHJcbiAgICAgIHVwZGF0ZUZvcm0uZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcclxuIFxyXG4gICAgICAgICAgZG9jLnJlZi51cGRhdGUoe1xyXG4gICAgICAgICAgICB3YWxsZXQ6IGUudGFyZ2V0LmVsZW1lbnRzWzBdLnZhbHVlLFxyXG4gICAgICAgICAgICB0ZWxlZ3JhbTogZS50YXJnZXQuZWxlbWVudHNbMV0udmFsdWUsXHJcbiAgICAgICAgICAgIGRpc2NvcmQ6IGUudGFyZ2V0LmVsZW1lbnRzWzJdLnZhbHVlLFxyXG4gICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgIGxldCByZXN1bHRzID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgICAgICBzZXREYXRhKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LmVsZW1lbnRzWzNdLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgLyogdXBkYXRlIGVtYWlsIGFkZHJlc3MgKi9cclxuICAgICAgICAgICAgICB1c2VyLnVwZGF0ZUVtYWlsKGUudGFyZ2V0LmVsZW1lbnRzWzBdLnZhbHVlICsgJ0BnbWFpbC5jb20nKTtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICAgICApXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuIHJldHVybih1c2VyID8gXHJcbiAgICAoPExheW91dD5cclxuICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciB0ZXh0LWNlbnRlciBwdDEwMFwiPlxyXG4gICAgICAgICAgICA8aDM+TXkgcGVyc29uYWwgaW5mb3JtYXRpb248L2gzPlxyXG4gICAgICAgICAgICB7ZGF0YSAmJiBcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgdGV4dC13aGl0ZSBtYi01IG10LTUgbXgtYXV0b1wiIHN0eWxlPXt7bWF4V2lkdGg6JzUwcmVtJ319PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPldhbGxldCBJRDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgIHsvKiA8aDQgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPjwvaDQ+ICovfVxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPntkYXRhLndhbGxldH08L3A+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB3YWxsZXQ9e2RhdGEud2FsbGV0fSAvPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTJcIj57ZGF0YS50ZWxlZ3JhbSA/IDxhIGNsYXNzTmFtZT1cImxpbmtcIiBocmVmPXtgaHR0cHM6Ly90Lm1lLyR7ZGF0YS50ZWxlZ3JhbX1gfT48aW1nIHNyYz1cImh0dHBzOi8vd3d3LmhlbGl1bS5iZy93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMS90ZWxlZ3JhbWZ1bGxwbmcucG5nXCIgc3R5bGU9e3t3aWR0aDonMTUwcHgnLCBoZWlnaHQ6JzUwcHgnfX0vPjwvYT4gOiA8ZGl2IHN0eWxlPXt7d2lkdGg6JzE1MHB4JywgaGVpZ2h0Oic1MHB4JywgbWFyZ2luOicwIGF1dG8nfX0+Tm8gVGVsZWdyYW0gYWNjb3VudDwvZGl2Pn08L3A+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtMlwiPntkYXRhLmRpc2NvcmQgPyA8YSBjbGFzc05hbWU9XCJsaW5rXCIgaHJlZj17YGh0dHBzOi8vZGlzY29yZC5nZy91c2Vycy8ke2RhdGEuZGlzY29yZH1gfT48aW1nIHNyYz1cImh0dHBzOi8vd3d3LmhlbGl1bS5iZy93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMS9kaXNjb3JkcG5nLTEwMjR4MjgyLnBuZ1wiIHN0eWxlPXt7d2lkdGg6JzEzMHB4JywgaGVpZ2h0Oic0MHB4JywgbWFyZ2luUmlnaHQ6JzEwcHgnfX0vPjwvYT4gOiA8ZGl2IHN0eWxlPXt7d2lkdGg6JzEzMHB4JywgaGVpZ2h0Oic0MHB4JywgbWFyZ2luOicwIGF1dG8nfX0+Tm8gRGlzY29yZCBhY2NvdW50PC9kaXY+fTwvcD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4td2FybmluZ1wiIG9uQ2xpY2s9eygpID0+c2V0U2hvd2Zvcm0oIXNob3dmb3JtKX0+eyFzaG93Zm9ybSA/ICdFZGl0IG15IHByb2ZpbGUnIDogJ0Nsb3NlJ308L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbjxmb3JtIGNsYXNzTmFtZT17YGZvcm0tZ3JvdXAgY29sLW1kLTYgbXgtYXV0byB0ZXh0LWNlbnRlciAkeyFzaG93Zm9ybSA/ICd1cGRGb3JtJyA6ICcnfWB9IG9uU3VibWl0PXt1cGRhdGVGb3JtfT5cclxuICAgICAgICA8bGFiZWw+V2FsbGV0OjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXtkYXRhLndhbGxldH0gLz5cclxuXHJcbiAgICAgICAgPGxhYmVsPlRlbGVncmFtOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXtkYXRhLnRlbGVncmFtfSAvPlxyXG5cclxuICAgICAgICA8bGFiZWw+RGlzY29yZDo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZT17ZGF0YS5kaXNjb3JkfSAvPlxyXG5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIG10LTNcIiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzYm1cIiB2YWx1ZT1cIlVwZGF0ZVwiIC8+XHJcbjwvZm9ybT5cclxuXHJcbiAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD4pIDogKCBcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vYm9vdHN3YXRjaC5jb20vNC9kYXJrbHkvYm9vdHN0cmFwLm1pbi5jc3NcIi8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHAgY29udGFpbmVyIHB0LTMgcGItM1wiPlxyXG4gICAgICAgICAgIDxoMT5IZWxpdW08L2gxPlxyXG4gICAgICAgICAgICA8TG9naW4vPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgey8qIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9yZWdpc3RlclwiPkNyZWF0ZSBuZXcgYWNjb3VudDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByaXZhdGVSb3V0ZTsiXSwic291cmNlUm9vdCI6IiJ9