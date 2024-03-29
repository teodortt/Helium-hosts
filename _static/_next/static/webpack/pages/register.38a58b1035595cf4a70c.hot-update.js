webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
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





var _jsxFileName = "C:\\apps\\helium_app\\pages\\login.js",
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
      className: "pt-3",
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
      className: "form-group col-sm-4 pb-5 pt-1",
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      style: {
        paddingBottom: '50px'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        role: "button",
        style: {
          width: '170px'
        },
        src: "https://www.helium.bg/wp-content/uploads/2021/02/btn_google_signin_dark_pressed_web@2x.png",
        onClick: _components_Auth_Authentication__WEBPACK_IMPORTED_MODULE_7__["handleLogin"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
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
        href: "/register",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          className: "btn btn-success",
          children: "Create new account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 28
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VTdGF0ZSIsImxvZ2dlZCIsInNldExvZ2dlZCIsIndhbGxldCIsInBhc3N3b3JkIiwiZm9ybSIsInNldEZvcm0iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtYW51YWxMb2dpbiIsIm1hcmdpbiIsInRhcmdldCIsInZhbHVlIiwicGFkZGluZ0JvdHRvbSIsIndpZHRoIiwiaGFuZGxlTG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsS0FBRCxDQURqQjtBQUFBLE1BQ1pDLE1BRFk7QUFBQSxNQUNKQyxTQURJLGlCQUVuQjs7O0FBRm1CLG1CQUdLRixzREFBUSxDQUFDO0FBQ2hDRyxVQUFNLEVBQUUsRUFEd0I7QUFFaENDLFlBQVEsRUFBRTtBQUZzQixHQUFELENBSGI7QUFBQSxNQUdaQyxJQUhZO0FBQUEsTUFHTkMsT0FITTs7QUFPbkIsTUFBTUMsWUFBWTtBQUFBLGdNQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEJBLGVBQUMsQ0FBQ0MsY0FBRjtBQURvQjtBQUFBLHFCQUVkQyxtRkFBVyxDQUFDTCxJQUFELENBRkc7O0FBQUE7QUFHcEJILHVCQUFTLENBQUMsSUFBRCxDQUFULENBSG9CLENBSXBCOztBQUpvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaSyxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQU9BLHNCQUNDO0FBQUEsNEJBQ0MscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDQTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGVBTUM7QUFBSyxXQUFLLEVBQUUsT0FBWjtBQUFxQixTQUFHLEVBQUMsZ0dBQXpCO0FBQTBILFNBQUcsRUFBQztBQUE5SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkQsZUFPQztBQUFJLGVBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEQsZUFTQztBQUFHLGVBQVMsRUFBQyxNQUFiO0FBQUEsK05BQ2dHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEaEcsdUlBRzJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEQsZUFpQkU7QUFBTSxjQUFRLEVBQUVBLFlBQWhCO0FBQThCLGVBQVMsRUFBQywrQkFBeEM7QUFBd0UsV0FBSyxFQUFFO0FBQUVJLGNBQU0sRUFBRTtBQUFWLE9BQS9FO0FBQUEsOEJBQ0M7QUFBTyxlQUFPLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUM7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBUyxFQUFDLGNBQTdCO0FBQ0MsbUJBQVcsRUFBQyxXQURiO0FBQ3lCLFVBQUUsRUFBQyxRQUQ1QjtBQUVDLGdCQUFRLEVBQUUsa0JBQUNILENBQUQ7QUFBQSxpQkFBT0YsT0FBTyxpQ0FBTUQsSUFBTjtBQUFZRixrQkFBTSxFQUFFSyxDQUFDLENBQUNJLE1BQUYsQ0FBU0M7QUFBN0IsYUFBZDtBQUFBO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZELGVBS0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxELGVBTUM7QUFBTyxlQUFPLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5ELGVBT0M7QUFBTyxZQUFJLEVBQUMsVUFBWjtBQUF1QixtQkFBVyxFQUFDLFVBQW5DO0FBQ0MsaUJBQVMsRUFBQyxjQURYO0FBRUMsZ0JBQVEsRUFBRSxrQkFBQ0wsQ0FBRDtBQUFBLGlCQUFPRixPQUFPLGlDQUFNRCxJQUFOO0FBQVlELG9CQUFRLEVBQUVJLENBQUMsQ0FBQ0ksTUFBRixDQUFTQztBQUEvQixhQUFkO0FBQUE7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEQsZUFVQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkQsZUFXQztBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFTLEVBQUMsaUJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakJGLGVBK0JFO0FBQUssV0FBSyxFQUFFO0FBQUNDLHFCQUFhLEVBQUM7QUFBZixPQUFaO0FBQUEsOEJBQ0E7QUFBSyxZQUFJLEVBQUMsUUFBVjtBQUFtQixhQUFLLEVBQUU7QUFBQ0MsZUFBSyxFQUFDO0FBQVAsU0FBMUI7QUFBMkMsV0FBRyxFQUFDLDRGQUEvQztBQUE0SSxlQUFPLEVBQUVDLDJFQUFXQTtBQUFoSztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZUFFQTtBQUFBLCtCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZBLGVBR0EscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsV0FBWDtBQUFBLCtCQUF1QjtBQUFRLG1CQUFTLEVBQUMsaUJBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEvQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUF5Q0EsQ0F2REQ7O0dBQU1qQixLOztLQUFBQSxLO0FBd0RTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci4zOGE1OGIxMDM1NTk1Y2Y0YTcwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBtYW51YWxMb2dpbiwgaGFuZGxlTG9naW4gfSBmcm9tICcuLi9jb21wb25lbnRzL0F1dGgvQXV0aGVudGljYXRpb24nO1xyXG5cclxuY29uc3QgTG9naW4gPSAoKSA9PiB7XHJcblx0Y29uc3QgW2xvZ2dlZCwgc2V0TG9nZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHQvLyBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cdGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcclxuXHRcdHdhbGxldDogJycsXHJcblx0XHRwYXNzd29yZDogJydcclxuXHR9KTtcclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0YXdhaXQgbWFudWFsTG9naW4oZm9ybSk7XHJcblx0XHRzZXRMb2dnZWQodHJ1ZSk7XHJcblx0XHQvLyBpZihsb2dpbihmb3JtKSl7aGlzdG9yeS5wdXNoKFwiL3ByaXZhdGVcIik7fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8SGVhZD5cclxuXHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Jvb3Rzd2F0Y2guY29tLzQvZGFya2x5L2Jvb3RzdHJhcC5taW4uY3NzXCIvPlxyXG5cdFx0XHQ8dGl0bGU+SGVsaXVtIEhvc3RzIExvZ2luPC90aXRsZT5cclxuXHRcdFx0PC9IZWFkPlxyXG5cdFx0XHRcclxuXHRcdFx0PGltZyB3aWR0aD17JzEwMHB4J30gc3JjPVwiaHR0cHM6Ly93d3cuaGVsaXVtLmJnL3dwLWNvbnRlbnQvdXBsb2Fkcy9jdC1sb2dvcy9sb2dvX2M4N2QyMmRhODUzZDZjY2ZjYjJhODliMTU0OGVjMjUwXzF4LnBuZ1wiIGFsdD1cIkxvZ29cIi8+XHJcblx0XHRcdDxoMyBjbGFzc05hbWU9XCJwdC0zXCI+SGVsaXVtIEhvc3RzIExvZ2luPC9oMz5cclxuXHJcblx0XHRcdDxwIGNsYXNzTmFtZT1cInB0LTNcIj5Qcml2YXRlIGFuZCBzZWN1cmUgY29tbXVuaWNhdGlvbiBiZXR3ZWVuIEhlbGl1bSBob3RzcG90IGhvc3RzLiBZb3UgZG9u4oCZdCBuZWVkIHRvIHByb3ZpZGVcclxuXHRcdFx0XHRhbnkgcGVyc29uYWwgaW5mb3JtYXRpb24gdG8gYWRkIHlvdXIgaG90c3BvdHMgYW5kIGJlZ2luIGNoYXR0aW5nIHdpdGggb3RoZXIgaG9zdHMgaW4geW91ciBhcmVhLjxicj48L2JyPlxyXG5cdFx0XHRcdElmIHlvdSBoYXZlIGFscmVhZHkgY3JlYXRlZCBhbiBhY2NvdW50LCBwbGVhc2UgbG9naW4gYmVsb3cuIE90aGVyd2lzZSwgeW91IGNhbiBzaWduIHVwIGJ5XHJcblx0XHRcdFx0Y3JlYXRpbmcgYW4gYWNjb3VudCBiZWxvdy48YnI+PC9icj5cclxuXHRcdFx0XHRLZWVwIGluIG1pbmQsIGFsbCBjb21tdW5pY2F0aW9uIGJldHdlZW4gaG9zdHMgaXMgZG9uZSB2aWEgVGVsZWdyYW0gYW5kIERpc2NvcmQuXHJcblx0XHRcdFx0PC9wPlxyXG5cclxuXHRcdFx0ey8qIHshbG9nZ2VkID8gKi99XHJcblx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtc20tNCBwYi01IHB0LTFcIiBzdHlsZT17eyBtYXJnaW46ICcwIGF1dG8nIH19PlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ3YWxsZXRcIj5XYWxsZXQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJXYWxsZXQgSURcIiBpZD1cIndhbGxldFwiXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIHdhbGxldDogZS50YXJnZXQudmFsdWUgfSl9IC8+XHJcblx0XHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cclxuXHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U3VibWl0PC9idXR0b24+XHJcblx0XHRcdFx0PC9mb3JtPiBcclxuXHJcblx0XHRcdFx0PGRpdiBzdHlsZT17e3BhZGRpbmdCb3R0b206JzUwcHgnfX0+XHJcblx0XHRcdFx0PGltZyByb2xlPVwiYnV0dG9uXCIgc3R5bGU9e3t3aWR0aDonMTcwcHgnfX0gc3JjPVwiaHR0cHM6Ly93d3cuaGVsaXVtLmJnL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAyL2J0bl9nb29nbGVfc2lnbmluX2RhcmtfcHJlc3NlZF93ZWJAMngucG5nXCIgb25DbGljaz17aGFuZGxlTG9naW59Lz5cclxuXHRcdFx0XHQ8cD48Yj5PUjwvYj48L3A+XHJcblx0XHRcdFx0PExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPjxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCI+Q3JlYXRlIG5ldyBhY2NvdW50PC9idXR0b24+PC9MaW5rPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdDwvZGl2PlxyXG5cclxuXHQpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwic291cmNlUm9vdCI6IiJ9