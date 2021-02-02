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
          event.target.elements[3].click(); // document.getElementById('sbm').click();
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
        lineNumber: 83,
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
            lineNumber: 87,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-text",
              children: data.wallet
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
              wallet: data.wallet
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
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
                  lineNumber: 92,
                  columnNumber: 111
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
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
                lineNumber: 92,
                columnNumber: 238
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
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
                  lineNumber: 93,
                  columnNumber: 121
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
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
                lineNumber: 93,
                columnNumber: 272
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-warning",
            onClick: function onClick() {
              return setShowform(!showform);
            },
            children: !showform ? 'Edit my profile' : 'Close'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: "form-group col-md-6 mx-auto text-center ".concat(!showform ? 'updForm' : ''),
        onSubmit: updateForm,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Wallet:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          type: "text",
          defaultValue: data.wallet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Telegram:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          type: "text",
          defaultValue: data.telegram
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Discord:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          type: "text",
          defaultValue: data.discord
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "btn btn-success mt-3",
          type: "submit",
          id: "sbm",
          value: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 1
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 3
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 6
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://bootswatch.com/4/darkly/bootstrap.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "App container pt-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Helium"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 12
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Login__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "nav-link",
        href: "/register",
        children: "Create new account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 118,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJpdmF0ZS5qcyJdLCJuYW1lcyI6WyJQcml2YXRlUm91dGUiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiZGF0YSIsInNldERhdGEiLCJzaG93Zm9ybSIsInNldFNob3dmb3JtIiwiYXV0aG9yaXphdGlvbiIsImZpcmViYXNlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInByb2ZpbGVJRCIsIm51bW1lcnMiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ3aGVyZSIsInVpZCIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZW1wdHkiLCJmb3JFYWNoIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJ3YWxsZXQiLCJzdGF0ZSIsInNldFN0YXRlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZSIsInVwZGF0ZUZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsInJlZiIsInVwZGF0ZSIsInRhcmdldCIsImVsZW1lbnRzIiwidmFsdWUiLCJ0ZWxlZ3JhbSIsImRpc2NvcmQiLCJldmVudCIsImNsaWNrIiwibWF4V2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsIm1hcmdpblJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQyxLQUFELENBRFg7QUFBQSxNQUNmQyxJQURlO0FBQUEsTUFDVEMsT0FEUzs7QUFBQSxtQkFFR0Ysc0RBQVEsQ0FBQyxFQUFELENBRlg7QUFBQSxNQUVmRyxJQUZlO0FBQUEsTUFFVEMsT0FGUzs7QUFBQSxtQkFHV0osc0RBQVEsQ0FBQyxLQUFELENBSG5CO0FBQUEsTUFHZkssUUFIZTtBQUFB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QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUlNO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsOEJBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERCxlQUVFLHFFQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRixlQUlFLHFFQUFDLGdEQUFEO0FBQU0saUJBQVMsRUFBQyxVQUFoQjtBQUEyQixZQUFJLEVBQUMsV0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0F0Q0g7QUFrREEsQ0ExSEQ7O0lBQU01QyxZOztLQUFBQSxZO0FBMkhTQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcml2YXRlLmM2MGQyOWY1ODY2YzI2ZGU2NTc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgZmlyZWJhc2UsIGRiIH0gZnJvbSAnLi4vY29tcG9uZW50cy9maXJlYmFzZSc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuL0xvZ2luJztcclxuXHJcbmNvbnN0IFByaXZhdGVSb3V0ZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IFsgdXNlciwgc2V0VXNlciBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgWyBkYXRhLCBzZXREYXRhIF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbIHNob3dmb3JtLCBzZXRTaG93Zm9ybSBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBhdXRob3JpemF0aW9uKCl7XHJcbiAgICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgICBpZih1c2VyKXtcclxuICAgICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgICAgICAgICBwcm9maWxlSUQodXNlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIGZ1bmN0aW9uIHByb2ZpbGVJRCh1c2VyKXtcclxuXHJcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgIHZhciBudW1tZXJzID0gZGIuY29sbGVjdGlvbihcImNoYW5uZWxzXCIpLmRvYyhcImdlbmVyYWxcIikuY29sbGVjdGlvbignbWVzc2FnZXMnKS53aGVyZSgndXNlcicsICc9PScsIHVzZXIudWlkKTtcclxuICAgICAgbnVtbWVycy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgICAgaWYgKCFxdWVyeVNuYXBzaG90LmVtcHR5KSB7XHJcbiAgICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZG9jLmlkLCAnID0+ICcsIGRvYy5kYXRhKCkpO1xyXG4gICAgICAgICAgbGV0IHJlc3VsdHMgPSBkb2MuZGF0YSgpO1xyXG4gICAgICAgICAgc2V0RGF0YShyZXN1bHRzKVxyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cylcclxuICAgICAgICAgIC8vIGRvYy5yZWYudXBkYXRlKHt3YWxsZXQ6IFwiYmFyXCJ9KVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VcIilcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PntcclxuICAgICAgYXV0aG9yaXphdGlvbigpO1xyXG4gICAgfSxbXSlcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gQnV0dG9uKHt3YWxsZXR9KXtcclxuICAgICAgY29uc3Rbc3RhdGUsc2V0U3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dCh3YWxsZXQpO1xyXG4gIFxyXG4gICAgICByZXR1cm4oXHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdGF0ZSA/ICdidG4gYnRuLXN1Y2Nlc3MgYnRuLXNtJyA6ICdidG4gYnRuLWluZm8gYnRuLXNtJ30gb25DbGljaz17ZT0+c2V0U3RhdGUodHJ1ZSl9PlxyXG4gICAgICAgIHtzdGF0ZSA/ICdDb3BpZWQgdG8gY2xpcGJvYXJkIScgOiAnQ29weSBteSB3YWxsZXQgSUQnfVxyXG4gICAgICA8L2J1dHRvbj4pXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVGb3JtKGUpe1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICB2YXIgdXBkYXRlRm9ybSA9IGRiLmNvbGxlY3Rpb24oXCJjaGFubmVsc1wiKS5kb2MoXCJnZW5lcmFsXCIpLmNvbGxlY3Rpb24oJ21lc3NhZ2VzJykud2hlcmUoJ3VzZXInLCAnPT0nLCB1c2VyLnVpZCk7XHJcbiAgICAgIHVwZGF0ZUZvcm0uZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcclxuICAgICAgICAgIGRvYy5yZWYudXBkYXRlKHtcclxuICAgICAgICAgICAgd2FsbGV0OiBlLnRhcmdldC5lbGVtZW50c1swXS52YWx1ZSxcclxuICAgICAgICAgICAgdGVsZWdyYW06IGUudGFyZ2V0LmVsZW1lbnRzWzFdLnZhbHVlLFxyXG4gICAgICAgICAgICBkaXNjb3JkOiBlLnRhcmdldC5lbGVtZW50c1syXS52YWx1ZVxyXG4gICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgIGxldCByZXN1bHRzID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgICAgICBzZXREYXRhKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5lbGVtZW50c1szXS5jbGljaygpXHJcblxyXG4gICAgICAgICAgICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzYm0nKS5jbGljaygpO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIClcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gcmV0dXJuKHVzZXIgPyBcclxuICAgICg8TGF5b3V0PlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRleHQtY2VudGVyIHB0MTAwXCI+XHJcbiAgICAgICAgICAgIDxoMz5NeSBwZXJzb25hbCBpbmZvcm1hdGlvbjwvaDM+XHJcbiAgICAgICAgICAgIHtkYXRhICYmIFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCB0ZXh0LXdoaXRlIG1iLTUgbXQtNSBteC1hdXRvXCIgc3R5bGU9e3ttYXhXaWR0aDonNTByZW0nfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+V2FsbGV0IElEPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgey8qIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+PC9oND4gKi99XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+e2RhdGEud2FsbGV0fTwvcD5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHdhbGxldD17ZGF0YS53YWxsZXR9IC8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHQtMlwiPntkYXRhLnRlbGVncmFtID8gPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9e2BodHRwczovL3QubWUvJHtkYXRhLnRlbGVncmFtfWB9PjxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuaGVsaXVtLmJnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAxL3RlbGVncmFtZnVsbHBuZy5wbmdcIiBzdHlsZT17e3dpZHRoOicxNTBweCcsIGhlaWdodDonNTBweCd9fS8+PC9hPiA6IDxkaXYgc3R5bGU9e3t3aWR0aDonMTUwcHgnLCBoZWlnaHQ6JzUwcHgnLCBtYXJnaW46JzAgYXV0byd9fT5ObyBUZWxlZ3JhbSBhY2NvdW50PC9kaXY+fTwvcD5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0yXCI+e2RhdGEuZGlzY29yZCA/IDxhIGNsYXNzTmFtZT1cImxpbmtcIiBocmVmPXtgaHR0cHM6Ly9kaXNjb3JkLmdnL3VzZXJzLyR7ZGF0YS5kaXNjb3JkfWB9PjxpbWcgc3JjPVwiaHR0cHM6Ly93d3cuaGVsaXVtLmJnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAxL2Rpc2NvcmRwbmctMTAyNHgyODIucG5nXCIgc3R5bGU9e3t3aWR0aDonMTMwcHgnLCBoZWlnaHQ6JzQwcHgnLCBtYXJnaW5SaWdodDonMTBweCd9fS8+PC9hPiA6IDxkaXYgc3R5bGU9e3t3aWR0aDonMTMwcHgnLCBoZWlnaHQ6JzQwcHgnLCBtYXJnaW46JzAgYXV0byd9fT5ObyBEaXNjb3JkIGFjY291bnQ8L2Rpdj59PC9wPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi13YXJuaW5nXCIgb25DbGljaz17KCkgPT5zZXRTaG93Zm9ybSghc2hvd2Zvcm0pfT57IXNob3dmb3JtID8gJ0VkaXQgbXkgcHJvZmlsZScgOiAnQ2xvc2UnfTwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuPGZvcm0gY2xhc3NOYW1lPXtgZm9ybS1ncm91cCBjb2wtbWQtNiBteC1hdXRvIHRleHQtY2VudGVyICR7IXNob3dmb3JtID8gJ3VwZEZvcm0nIDogJyd9YH0gb25TdWJtaXQ9e3VwZGF0ZUZvcm19PlxyXG4gICAgICAgIDxsYWJlbD5XYWxsZXQ6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e2RhdGEud2FsbGV0fSAvPlxyXG5cclxuICAgICAgICA8bGFiZWw+VGVsZWdyYW06PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e2RhdGEudGVsZWdyYW19IC8+XHJcblxyXG4gICAgICAgIDxsYWJlbD5EaXNjb3JkOjwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXtkYXRhLmRpc2NvcmR9IC8+XHJcblxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3MgbXQtM1wiIHR5cGU9XCJzdWJtaXRcIiBpZD1cInNibVwiIHZhbHVlPVwiVXBkYXRlXCIgLz5cclxuPC9mb3JtPlxyXG5cclxuICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PikgOiAoIFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9ib290c3dhdGNoLmNvbS80L2RhcmtseS9ib290c3RyYXAubWluLmNzc1wiLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcCBjb250YWluZXIgcHQtNVwiPlxyXG4gICAgICAgICAgIDxoMT5IZWxpdW08L2gxPlxyXG4gICAgICAgICAgICA8TG9naW4vPlxyXG4gICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3JlZ2lzdGVyXCI+Q3JlYXRlIG5ldyBhY2NvdW50PC9MaW5rPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcml2YXRlUm91dGU7Il0sInNvdXJjZVJvb3QiOiIifQ==