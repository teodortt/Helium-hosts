webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Auth_Authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Auth/Authentication */ "./components/Auth/Authentication.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/firebase */ "./components/firebase.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form */ "./pages/form.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index */ "./pages/index.js");



var _jsxFileName = "C:\\apps\\helium_app\\pages\\register.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Register = function Register() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      filled = _useState2[0],
      redirecttoForm = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    wallet: '',
    password: '',
    telegram: '',
    discord: ''
  }),
      form = _useState3[0],
      setForm = _useState3[1];

  authorization();

  function authorization() {
    _components_firebase__WEBPACK_IMPORTED_MODULE_7__["firebase"].auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
        validateUser(user);
      } else {
        setUser(null);
      }
    });
  }

  ; // //////////////////////////////////////////////////////////////////

  function validateUser(user) {
    var nummers = _components_firebase__WEBPACK_IMPORTED_MODULE_7__["db"].collection("channels").doc("general").collection('messages').where('email', '==', user.email);
    nummers.get().then(function (querySnapshot) {
      if (!querySnapshot.empty) {
        querySnapshot.forEach(function (doc) {
          console.log('exists');
        });
      } else {
        console.log('not exists');
        console.log(user.email);
      }
    });
  } // //////////////////////////////////////////////////////////////


  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    if (e.target.elements[1].value.length < 6) {
      document.getElementById('password-validation').innerText = "Your password must to be at least 6 characters!";
    } else {
      document.getElementById('password-validation').innerText = "";
      var nummers = _components_firebase__WEBPACK_IMPORTED_MODULE_7__["db"].collection("channels").doc("general").collection('messages').where('wallet', '==', form.wallet);
      nummers.get().then(function (querySnapshot) {
        if (!querySnapshot.empty) {
          querySnapshot.forEach(function (doc) {
            document.getElementById('wallet-validation').innerText = "This wallet ID already exists in our database!";
          });
        } else {
          document.getElementById('wallet-validation').innerText = "";
          e.preventDefault();
          Object(_components_Auth_Authentication__WEBPACK_IMPORTED_MODULE_3__["manualRegister"])(form);
          redirecttoForm(true);
        }
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [filled && user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_index__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 24
    }, _this), filled && !user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_form__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }, _this), !filled && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "col-md-6 mx-auto text-center mt-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "https://bootswatch.com/4/darkly/bootstrap.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "Register"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "form-group col-md-6 mx-auto text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "wallet",
          children: "Email address: !!!will be wallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "text",
          className: "form-control",
          placeholder: "Wallet ID",
          id: "wallet",
          onChange: function onChange(e) {
            return setForm(_objectSpread(_objectSpread({}, form), {}, {
              wallet: e.target.value
            }));
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          "class": "form-text text-muted",
          children: "This is public, available at explorer.helium.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
          id: "wallet-validation",
          style: {
            color: '#ff0000'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "password",
          children: "Password:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "password",
          placeholder: "Password",
          className: "form-control",
          onChange: function onChange(e) {
            return setForm(_objectSpread(_objectSpread({}, form), {}, {
              password: e.target.value
            }));
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          "class": "form-text text-muted",
          children: "Note: Do NOT use your official Helium password here!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
          id: "password-validation",
          style: {
            color: '#ff0000'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "telegram",
          children: "Telegram:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          children: "t.me/"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "text",
          placeholder: "Telegram",
          className: "rounded",
          onChange: function onChange(e) {
            return setForm(_objectSpread(_objectSpread({}, form), {}, {
              telegram: e.target.value
            }));
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          "class": "form-text text-muted",
          children: "Input telegram user to be able to chat!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "dsc",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "discord",
            children: "Discord:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            style: {
              marginLeft: '-70px'
            },
            children: "discord.com/users/"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Discord",
            className: "rounded",
            onChange: function onChange(e) {
              return setForm(_objectSpread(_objectSpread({}, form), {}, {
                discord: e.target.value
              }));
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 5
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          type: "submit",
          id: "submit",
          className: "btn btn-primary mt-3",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 4
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 16
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
    columnNumber: 3
  }, _this);
};

_s(Register, "+4yjqvgtlgqVmVr2Y5N1wpWtQNI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register);

var _c;

$RefreshReg$(_c, "Register");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiZmlsbGVkIiwicmVkaXJlY3R0b0Zvcm0iLCJ3YWxsZXQiLCJwYXNzd29yZCIsInRlbGVncmFtIiwiZGlzY29yZCIsImZvcm0iLCJzZXRGb3JtIiwiYXV0aG9yaXphdGlvbiIsImZpcmViYXNlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInZhbGlkYXRlVXNlciIsIm51bW1lcnMiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ3aGVyZSIsImVtYWlsIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJlbXB0eSIsImZvckVhY2giLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsImxlbmd0aCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJtYW51YWxSZWdpc3RlciIsImNvbG9yIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUN0QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURzQixrQkFFRUMsc0RBQVEsRUFGVjtBQUFBLE1BRWZDLElBRmU7QUFBQSxNQUVUQyxPQUZTOztBQUFBLG1CQUdVRixzREFBUSxDQUFDLEtBQUQsQ0FIbEI7QUFBQSxNQUdoQkcsTUFIZ0I7QUFBQSxNQUdSQyxjQUhROztBQUFBLG1CQUlFSixzREFBUSxDQUFDO0FBQ2hDSyxVQUFNLEVBQUUsRUFEd0I7QUFFaENDLFlB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RCxlQStCQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9CRCxlQWdDQztBQUFLLG1CQUFTLEVBQUMsS0FBZjtBQUFBLGtDQUNBO0FBQU8sbUJBQU8sRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQSxlQUdBO0FBQU8saUJBQUssRUFBRTtBQUFDTyx3QkFBVSxFQUFDO0FBQVosYUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIQSxlQUlBO0FBQU8sZ0JBQUksRUFBQyxNQUFaO0FBQW1CLHVCQUFXLEVBQUMsU0FBL0I7QUFDQyxxQkFBUyxFQUFDLFNBRFg7QUFFQyxvQkFBUSxFQUFFLGtCQUFDWCxDQUFEO0FBQUEscUJBQU9wQixPQUFPLGlDQUFNRCxJQUFOO0FBQVlELHVCQUFPLEVBQUVzQixDQUFDLENBQUNFLE1BQUYsQ0FBU0U7QUFBOUIsaUJBQWQ7QUFBQTtBQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkEsZUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQ0QsZUEwQ0M7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixZQUFFLEVBQUMsUUFBekI7QUFBa0MsbUJBQVMsRUFBQyxzQkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBMkRBLENBOUhEOztHQUFNckMsUTtVQUNVRSxxRDs7O0tBRFZGLFE7QUErSFNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLjVmMDQ1MzQxZDEwOTNmNzJmMTczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1hbnVhbFJlZ2lzdGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9BdXRoL0F1dGhlbnRpY2F0aW9uJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBkYiwgZmlyZWJhc2UgfSBmcm9tICcuLi9jb21wb25lbnRzL2ZpcmViYXNlJztcclxuaW1wb3J0IEZvcm0gZnJvbSAnLi9mb3JtJztcclxuaW1wb3J0IEhvbWUgZnJvbSAnLi9pbmRleCc7XHJcblxyXG5cclxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3RbIHVzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdFtmaWxsZWQsIHJlZGlyZWN0dG9Gb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcblx0XHR3YWxsZXQ6ICcnLFxyXG5cdFx0cGFzc3dvcmQ6ICcnLFxyXG5cdFx0dGVsZWdyYW06JycsXHJcblx0XHRkaXNjb3JkOicnLFxyXG5cdH0pO1xyXG5cclxuXHRhdXRob3JpemF0aW9uKCk7XHJcblx0ZnVuY3Rpb24gYXV0aG9yaXphdGlvbigpe1xyXG5cdCAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG5cdFx0aWYodXNlcil7XHJcblx0XHQgIHNldFVzZXIodXNlcik7XHJcblx0XHQgIHZhbGlkYXRlVXNlcih1c2VyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHQgIHNldFVzZXIobnVsbCk7XHJcblx0XHR9XHJcblx0ICB9KVxyXG5cdH07ICBcclxuXHJcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG5mdW5jdGlvbiB2YWxpZGF0ZVVzZXIodXNlcil7XHJcblx0dmFyIG51bW1lcnMgPSBkYi5jb2xsZWN0aW9uKFwiY2hhbm5lbHNcIikuZG9jKFwiZ2VuZXJhbFwiKS5jb2xsZWN0aW9uKCdtZXNzYWdlcycpLndoZXJlKCdlbWFpbCcsICc9PScsIHVzZXIuZW1haWwpO1xyXG5cdG51bW1lcnMuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG5cdFx0aWYgKCFxdWVyeVNuYXBzaG90LmVtcHR5KSB7XHJcblx0XHQgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdleGlzdHMnKTtcclxuXHRcdH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdCAgY29uc29sZS5sb2coJ25vdCBleGlzdHMnKVxyXG5cdFx0ICBjb25zb2xlLmxvZyh1c2VyLmVtYWlsKVxyXG5cdFx0fVxyXG5cdCAgfSk7XHJcbn1cclxuLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0aWYoZS50YXJnZXQuZWxlbWVudHNbMV0udmFsdWUubGVuZ3RoIDwgNil7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtdmFsaWRhdGlvbicpLmlubmVyVGV4dCA9IFwiWW91ciBwYXNzd29yZCBtdXN0IHRvIGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyFcIjtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtdmFsaWRhdGlvbicpLmlubmVyVGV4dCA9IFwiXCI7XHJcblxyXG5cdFx0dmFyIG51bW1lcnMgPSBkYi5jb2xsZWN0aW9uKFwiY2hhbm5lbHNcIikuZG9jKFwiZ2VuZXJhbFwiKS5jb2xsZWN0aW9uKCdtZXNzYWdlcycpLndoZXJlKCd3YWxsZXQnLCAnPT0nLCBmb3JtLndhbGxldCk7XHJcblx0XHRudW1tZXJzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuXHRcdFx0aWYgKCFxdWVyeVNuYXBzaG90LmVtcHR5KSB7XHJcblx0XHRcdCAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcclxuXHRcdFx0ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FsbGV0LXZhbGlkYXRpb24nKS5pbm5lclRleHQgPSBcIlRoaXMgd2FsbGV0IElEIGFscmVhZHkgZXhpc3RzIGluIG91ciBkYXRhYmFzZSFcIjtcclxuXHRcdFx0ICB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FsbGV0LXZhbGlkYXRpb24nKS5pbm5lclRleHQgPSBcIlwiO1xyXG5cdFx0XHQgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ICBtYW51YWxSZWdpc3Rlcihmb3JtKTtcclxuXHRcdFx0ICByZWRpcmVjdHRvRm9ybSh0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0ICB9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0eyhmaWxsZWQgJiYgdXNlcikgJiYgPEhvbWUvPn1cclxuXHRcdHsoZmlsbGVkICYmICF1c2VyKSAmJiA8Rm9ybS8+fVxyXG5cclxuXHRcdHshZmlsbGVkICYmICg8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG14LWF1dG8gdGV4dC1jZW50ZXIgbXQtNVwiPlxyXG5cdFx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Jvb3Rzd2F0Y2guY29tLzQvZGFya2x5L2Jvb3RzdHJhcC5taW4uY3NzXCIvPlxyXG5cdFx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PGgxPlJlZ2lzdGVyPC9oMT5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtNiBteC1hdXRvIHRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ3YWxsZXRcIj5FbWFpbCBhZGRyZXNzOiAhISF3aWxsIGJlIHdhbGxldDwvbGFiZWw+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiV2FsbGV0IElEXCIgaWQ9XCJ3YWxsZXRcIlxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgd2FsbGV0OiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cclxuXHRcdFx0XHRcdDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+VGhpcyBpcyBwdWJsaWMsIGF2YWlsYWJsZSBhdFxyXG5cdFx0XHRcdFx0ZXhwbG9yZXIuaGVsaXVtLmNvbVxyXG5cdFx0XHRcdFx0PC9zbWFsbD5cclxuXHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHQ8YiBpZD1cIndhbGxldC12YWxpZGF0aW9uXCIgc3R5bGU9e3tjb2xvcjonI2ZmMDAwMCd9fT48L2I+XHJcblx0XHRcdFx0PGJyPjwvYnI+XHJcblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cclxuXHRcdFx0XHQ8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPk5vdGU6IERvIE5PVCB1c2UgeW91ciBvZmZpY2lhbCBIZWxpdW1cclxuXHRcdFx0XHRwYXNzd29yZCBoZXJlIVxyXG5cdFx0XHRcdDwvc21hbGw+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGIgaWQ9XCJwYXNzd29yZC12YWxpZGF0aW9uXCIgc3R5bGU9e3tjb2xvcjonI2ZmMDAwMCd9fT48L2I+XHJcblxyXG5cdFx0XHRcdDxiciAvPlxyXG5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInRlbGVncmFtXCI+VGVsZWdyYW06PC9sYWJlbD5cclxuXHRcdFx0XHQ8YnI+PC9icj5cclxuXHRcdFx0XHQ8c21hbGw+dC5tZS88L3NtYWxsPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGVsZWdyYW1cIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicm91bmRlZFwiXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCB0ZWxlZ3JhbTogZS50YXJnZXQudmFsdWUgfSl9IC8+XHJcblx0XHRcdFx0PHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5JbnB1dCB0ZWxlZ3JhbSB1c2VyIHRvIGJlIGFibGUgdG8gY2hhdCFcclxuXHRcdFx0XHQ8L3NtYWxsPlxyXG5cdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHNjXCI+XHJcblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJkaXNjb3JkXCI+RGlzY29yZDo8L2xhYmVsPlxyXG5cdFx0XHRcdDxicj48L2JyPlxyXG5cdFx0XHRcdDxzbWFsbCBzdHlsZT17e21hcmdpbkxlZnQ6Jy03MHB4J319PmRpc2NvcmQuY29tL3VzZXJzLzwvc21hbGw+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJEaXNjb3JkXCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInJvdW5kZWRcIlxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgZGlzY29yZDogZS50YXJnZXQudmFsdWUgfSl9IC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0ey8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi99XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXQtM1wiPlxyXG5cdFx0XHRcdFx0U3VibWl0XHJcblx0XHRcdCAgPC9idXR0b24+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PilcclxuXHR9PC9kaXY+XHJcblx0KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==