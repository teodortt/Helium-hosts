webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/Login.js":
/*!************************!*\
  !*** ./pages/Login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Auth_Authentication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Auth/Authentication */ "./components/Auth/Authentication.js");





var _jsxFileName = "C:\\apps\\helium_app\\pages\\Login.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var Login = function Login() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      logged = _useState[0],
      setLogged = _useState[1]; // const history = useHistory();


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    wallet: '',
    password: ''
  }),
      form = _useState2[0],
      setForm = _useState2[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(e) {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return Object(_components_Auth_Authentication__WEBPACK_IMPORTED_MODULE_7__["manualLogin"])(form);

            case 3:
              setLogged(true); // if(login(form)){history.push("/private");}

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://bootswatch.com/4/darkly/bootstrap.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: "Helium Hosts Login"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 4
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
      width: '100px',
      src: "https://www.helium.bg/wp-content/uploads/ct-logos/logo_c87d22da853d6ccfcb2a89b1548ec250_1x.png",
      alt: "Logo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
      className: "pt-3",
      children: "Helium Hosts Login"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      className: "pt-4",
      children: ["Private and secure communication between Helium hotspot hosts. You don\u2019t need to provide any personal information to add your hotspots and begin chatting with other hosts in your area.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 100
      }, _this), "If you have already created an account, please login below. Otherwise, you can sign up by creating an account below.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 31
      }, _this), "Keep in mind, all communication between hosts is done via Telegram and Discord."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      className: "form-group col-sm-4 pb-5 pt-3",
      style: {
        margin: '0 auto'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "wallet",
        children: "Wallet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 6
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
        lineNumber: 40,
        columnNumber: 6
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 6
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "password",
        children: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 6
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
        lineNumber: 45,
        columnNumber: 6
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 6
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        type: "submit",
        className: "btn btn-primary",
        children: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 6
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      className: "btn btn-success mb-3",
      onClick: _components_Auth_Authentication__WEBPACK_IMPORTED_MODULE_7__["handleLogin"],
      children: "Sign in with Gmail"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
        children: "OR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 8
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: "nav-link",
      href: "/register",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
          children: "Create new account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 52
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 49
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 3
  }, _this);
};

_s(Login, "PUFgBTndPRF6XvBQGw1s7Wq+JY4=");

_c = Login;
/* harmony default export */ __webpack_exports__["default"] = (Login);

var _c;

$RefreshReg$(_c, "Login");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VTdGF0ZSIsImxvZ2dlZCIsInNldExvZ2dlZCIsIndhbGxldCIsInBhc3N3b3JkIiwiZm9ybSIsInNldEZvcm0iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtYW51YWxMb2dpbiIsIm1hcmdpbiIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlTG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsS0FBRCxDQURqQjtBQUFBLE1BQ1pDLE1BRFk7QUFBQSxNQUNKQyxTQURJLGlCQUVuQjs7O0FBRm1CLG1CQUdLRixzREFBUSxDQUFDO0FBQ2hDRyxVQUFNLEVBQUUsRUFEd0I7QUFFaENDLFlBQVEsRUFBRTtBQUZzQixHQUFELENBSGI7QUFBQSxNQUdaQyxJQUhZO0FBQUEsTUFHTkMsT0FITTs7QUFPbkIsTUFBTUMsWUFBWTtBQUFBLGdNQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEJBLGVBQUMsQ0FBQ0MsY0FBRjtBQURvQjtBQUFBLHFCQUVkQyxtRkFBVyxDQUFDTCxJQUFELENBRkc7O0FBQUE7QUFHcEJILHVCQUFTLENBQUMsSUFBRCxDQUFULENBSG9CLENBSXBCOztBQUpvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaSyxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQU9BLHNCQUNDO0FBQUEsNEJBQ0MscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDQTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBTUM7QUFBSyxXQUFLLEVBQUUsT0FBWjtBQUFxQixTQUFHLEVBQUMsZ0dBQXpCO0FBQTBILFNBQUcsRUFBQztBQUE5SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkQsZUFPQztBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEQsZUFTQztBQUFHLGVBQVMsRUFBQyxNQUFiO0FBQUEsK05BQ2dHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEaEcsdUlBRzJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEQsZUFpQkU7QUFBTSxjQUFRLEVBQUVBLFlBQWhCO0FBQThCLGVBQVMsRUFBQywrQkFBeEM7QUFBd0UsV0FBSyxFQUFFO0FBQUVJLGNBQU0sRUFBRTtBQUFWLE9BQS9FO0FBQUEsOEJBQ0M7QUFBTyxlQUFPLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUM7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBUyxFQUFDLGNBQTdCO0FBQ0MsbUJBQVcsRUFBQyxXQURiO0FBQ3lCLFVBQUUsRUFBQyxRQUQ1QjtBQUVDLGdCQUFRLEVBQUUsa0JBQUNILENBQUQ7QUFBQSxpQkFBT0YsT0FBTyxpQ0FBTUQsSUFBTjtBQUFZRixrQkFBTSxFQUFFSyxDQUFDLENBQUNJLE1BQUYsQ0FBU0M7QUFBN0IsYUFBZDtBQUFBO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZELGVBS0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxELGVBTUM7QUFBTyxlQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5ELGVBT0M7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixtQkFBVyxFQUFDLFVBQW5DO0FBQ0MsaUJBQVMsRUFBQyxjQURYO0FBRUMsZ0JBQVEsRUFBRSxrQkFBQ0wsQ0FBRDtBQUFBLGlCQUFPRixPQUFPLGlDQUFNRCxJQUFOO0FBQVlELG9CQUFRLEVBQUVJLENBQUMsQ0FBQ0ksTUFBRixDQUFTQztBQUEvQixhQUFkO0FBQUE7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEQsZUFVQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkQsZUFXQztBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFTLEVBQUMsaUJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJGLGVBK0JFO0FBQVEsZUFBUyxFQUFDLHNCQUFsQjtBQUF5QyxhQUFPLEVBQUVDLDJFQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9CRixlQWlDRTtBQUFBLDZCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpDRixlQW1DRSxxRUFBQyxnREFBRDtBQUFNLGVBQVMsRUFBQyxVQUFoQjtBQUEyQixVQUFJLEVBQUMsV0FBaEM7QUFBQSw2QkFBNEM7QUFBQSwrQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQXlDQSxDQXZERDs7R0FBTWYsSzs7S0FBQUEsSztBQXdEU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDZhYzM1NjY1YWQ3MmFjN2IwOGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgbWFudWFsTG9naW4sIGhhbmRsZUxvZ2luIH0gZnJvbSAnLi4vY29tcG9uZW50cy9BdXRoL0F1dGhlbnRpY2F0aW9uJztcclxuXHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG5cdGNvbnN0IFtsb2dnZWQsIHNldExvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Ly8gY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuXHRjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcblx0XHR3YWxsZXQ6ICcnLFxyXG5cdFx0cGFzc3dvcmQ6ICcnXHJcblx0fSk7XHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGF3YWl0IG1hbnVhbExvZ2luKGZvcm0pO1xyXG5cdFx0c2V0TG9nZ2VkKHRydWUpO1xyXG5cdFx0Ly8gaWYobG9naW4oZm9ybSkpe2hpc3RvcnkucHVzaChcIi9wcml2YXRlXCIpO31cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PEhlYWQ+XHJcblx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9ib290c3dhdGNoLmNvbS80L2RhcmtseS9ib290c3RyYXAubWluLmNzc1wiLz5cclxuXHRcdFx0PHRpdGxlPkhlbGl1bSBIb3N0cyBMb2dpbjwvdGl0bGU+XHJcblx0XHRcdDwvSGVhZD5cclxuXHRcdFx0XHJcblx0XHRcdDxpbWcgd2lkdGg9eycxMDBweCd9IHNyYz1cImh0dHBzOi8vd3d3LmhlbGl1bS5iZy93cC1jb250ZW50L3VwbG9hZHMvY3QtbG9nb3MvbG9nb19jODdkMjJkYTg1M2Q2Y2NmY2IyYTg5YjE1NDhlYzI1MF8xeC5wbmdcIiBhbHQ9XCJMb2dvXCIvPlxyXG5cdFx0XHQ8aDMgY2xhc3NOYW1lPVwicHQtM1wiPkhlbGl1bSBIb3N0cyBMb2dpbjwvaDM+XHJcblxyXG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJwdC00XCI+UHJpdmF0ZSBhbmQgc2VjdXJlIGNvbW11bmljYXRpb24gYmV0d2VlbiBIZWxpdW0gaG90c3BvdCBob3N0cy4gWW91IGRvbuKAmXQgbmVlZCB0byBwcm92aWRlXHJcblx0XHRcdFx0YW55IHBlcnNvbmFsIGluZm9ybWF0aW9uIHRvIGFkZCB5b3VyIGhvdHNwb3RzIGFuZCBiZWdpbiBjaGF0dGluZyB3aXRoIG90aGVyIGhvc3RzIGluIHlvdXIgYXJlYS48YnI+PC9icj5cclxuXHRcdFx0XHRJZiB5b3UgaGF2ZSBhbHJlYWR5IGNyZWF0ZWQgYW4gYWNjb3VudCwgcGxlYXNlIGxvZ2luIGJlbG93LiBPdGhlcndpc2UsIHlvdSBjYW4gc2lnbiB1cCBieVxyXG5cdFx0XHRcdGNyZWF0aW5nIGFuIGFjY291bnQgYmVsb3cuPGJyPjwvYnI+XHJcblx0XHRcdFx0S2VlcCBpbiBtaW5kLCBhbGwgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIGhvc3RzIGlzIGRvbmUgdmlhIFRlbGVncmFtIGFuZCBEaXNjb3JkLlxyXG5cdFx0XHRcdDwvcD5cclxuXHJcblx0XHRcdHsvKiB7IWxvZ2dlZCA/ICovfVxyXG5cdFx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLXNtLTQgcGItNSBwdC0zXCIgc3R5bGU9e3sgbWFyZ2luOiAnMCBhdXRvJyB9fT5cclxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwid2FsbGV0XCI+V2FsbGV0PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiV2FsbGV0IElEXCIgaWQ9XCJ3YWxsZXRcIlxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCB3YWxsZXQ6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG5cdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9IC8+XHJcblx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPlN1Ym1pdDwvYnV0dG9uPlxyXG5cdFx0XHRcdDwvZm9ybT4gXHJcblxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzIG1iLTNcIiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0+U2lnbiBpbiB3aXRoIEdtYWlsPC9idXR0b24+XHJcblxyXG5cdFx0XHRcdDxwPjxiPk9SPC9iPjwvcD5cclxuXHJcblx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL3JlZ2lzdGVyXCI+PGE+PGI+Q3JlYXRlIG5ldyBhY2NvdW50PC9iPjwvYT48L0xpbms+XHJcblxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=