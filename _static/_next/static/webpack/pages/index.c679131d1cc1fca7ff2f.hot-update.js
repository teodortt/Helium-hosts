webpackHotUpdate_N_E("pages/index",{

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
        className: "btn btn-success",
        href: "/register",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
            children: "Create new account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 59
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 56
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanMiXSwibmFtZXMiOlsiTG9naW4iLCJ1c2VTdGF0ZSIsImxvZ2dlZCIsInNldExvZ2dlZCIsIndhbGxldCIsInBhc3N3b3JkIiwiZm9ybSIsInNldEZvcm0iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJtYW51YWxMb2dpbiIsIm1hcmdpbiIsInRhcmdldCIsInZhbHVlIiwicGFkZGluZ0JvdHRvbSIsIndpZHRoIiwiaGFuZGxlTG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsS0FBRCxDQURqQjtBQUFBLE1BQ1pDLE1BRFk7QUFBQSxNQUNKQyxTQURJLGlCQUVuQjs7O0FBRm1CLG1CQUdLRixzREFBUSxDQUFDO0FBQ2hDRyxVQUFNLEVBQUUsRUFEd0I7QUFFaENDLFlBQVEsRUFBRTtBQUZzQixHQUFELENBSGI7QUFBQSxNQUdaQyxJQUhZO0FBQUEsTUFHTkMsT0FITTs7QUFPbkIsTUFBTUMsWUFBWTtBQUFBLGdNQUFHLGlCQUFPQyxDQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDcEJBLGVBQUMsQ0FBQ0MsY0FBRjtBQURvQjtBQUFBLHFCQUVkQyxtRkFBVyxDQUFDTCxJQUFELENBRkc7O0FBQUE7QUFHcEJILHVCQUFTLENBQUMsSUFBRCxDQUFULENBSG9CLENBSXBCOztBQUpvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaSyxZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQU9BLHNCQUNDO0FBQUEsNEJBQ0MscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDQTtBQUFNLFdBQUcsRUFBQyxZQUFWO0FBQXVCLFlBQUksRUFBQztBQUE1QjtB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ZGV4LmM2NzkxMzFkMWNjMWZjYTdmZjJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IG1hbnVhbExvZ2luLCBoYW5kbGVMb2dpbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aC9BdXRoZW50aWNhdGlvbic7XHJcblxyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuXHRjb25zdCBbbG9nZ2VkLCBzZXRMb2dnZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdC8vIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcblx0Y29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xyXG5cdFx0d2FsbGV0OiAnJyxcclxuXHRcdHBhc3N3b3JkOiAnJ1xyXG5cdH0pO1xyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRhd2FpdCBtYW51YWxMb2dpbihmb3JtKTtcclxuXHRcdHNldExvZ2dlZCh0cnVlKTtcclxuXHRcdC8vIGlmKGxvZ2luKGZvcm0pKXtoaXN0b3J5LnB1c2goXCIvcHJpdmF0ZVwiKTt9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxIZWFkPlxyXG5cdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vYm9vdHN3YXRjaC5jb20vNC9kYXJrbHkvYm9vdHN0cmFwLm1pbi5jc3NcIi8+XHJcblx0XHRcdDx0aXRsZT5IZWxpdW0gSG9zdHMgTG9naW48L3RpdGxlPlxyXG5cdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdFxyXG5cdFx0XHQ8aW1nIHdpZHRoPXsnMTAwcHgnfSBzcmM9XCJodHRwczovL3d3dy5oZWxpdW0uYmcvd3AtY29udGVudC91cGxvYWRzL2N0LWxvZ29zL2xvZ29fYzg3ZDIyZGE4NTNkNmNjZmNiMmE4OWIxNTQ4ZWMyNTBfMXgucG5nXCIgYWx0PVwiTG9nb1wiLz5cclxuXHRcdFx0PGgzIGNsYXNzTmFtZT1cInB0LTNcIj5IZWxpdW0gSG9zdHMgTG9naW48L2gzPlxyXG5cclxuXHRcdFx0PHAgY2xhc3NOYW1lPVwicHQtM1wiPlByaXZhdGUgYW5kIHNlY3VyZSBjb21tdW5pY2F0aW9uIGJldHdlZW4gSGVsaXVtIGhvdHNwb3QgaG9zdHMuIFlvdSBkb27igJl0IG5lZWQgdG8gcHJvdmlkZVxyXG5cdFx0XHRcdGFueSBwZXJzb25hbCBpbmZvcm1hdGlvbiB0byBhZGQgeW91ciBob3RzcG90cyBhbmQgYmVnaW4gY2hhdHRpbmcgd2l0aCBvdGhlciBob3N0cyBpbiB5b3VyIGFyZWEuPGJyPjwvYnI+XHJcblx0XHRcdFx0SWYgeW91IGhhdmUgYWxyZWFkeSBjcmVhdGVkIGFuIGFjY291bnQsIHBsZWFzZSBsb2dpbiBiZWxvdy4gT3RoZXJ3aXNlLCB5b3UgY2FuIHNpZ24gdXAgYnlcclxuXHRcdFx0XHRjcmVhdGluZyBhbiBhY2NvdW50IGJlbG93Ljxicj48L2JyPlxyXG5cdFx0XHRcdEtlZXAgaW4gbWluZCwgYWxsIGNvbW11bmljYXRpb24gYmV0d2VlbiBob3N0cyBpcyBkb25lIHZpYSBUZWxlZ3JhbSBhbmQgRGlzY29yZC5cclxuXHRcdFx0XHQ8L3A+XHJcblxyXG5cdFx0XHR7LyogeyFsb2dnZWQgPyAqL31cclxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1zbS00IHBiLTUgcHQtMVwiIHN0eWxlPXt7IG1hcmdpbjogJzAgYXV0bycgfX0+XHJcblx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIndhbGxldFwiPldhbGxldDwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIldhbGxldCBJRFwiIGlkPVwid2FsbGV0XCJcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgd2FsbGV0OiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cclxuXHRcdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG5cdFx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L2Zvcm0+IFxyXG5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7cGFkZGluZ0JvdHRvbTonNTBweCd9fT5cclxuXHRcdFx0XHQ8aW1nIHJvbGU9XCJidXR0b25cIiBzdHlsZT17e3dpZHRoOicxNzBweCd9fSBzcmM9XCJodHRwczovL3d3dy5oZWxpdW0uYmcvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDIvYnRuX2dvb2dsZV9zaWduaW5fZGFya19wcmVzc2VkX3dlYkAyeC5wbmdcIiBvbkNsaWNrPXtoYW5kbGVMb2dpbn0vPlxyXG5cdFx0XHRcdDxwPjxiPk9SPC9iPjwvcD5cclxuXHRcdFx0XHQ8TGluayBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiBocmVmPVwiL3JlZ2lzdGVyXCI+PGE+PGI+Q3JlYXRlIG5ldyBhY2NvdW50PC9iPjwvYT48L0xpbms+XHJcblx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0PC9kaXY+XHJcblxyXG5cdCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJzb3VyY2VSb290IjoiIn0=