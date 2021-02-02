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

    if (e.target.elements[0].value === null) {
      alert('eeeeeeeeeeee');
    }

    var nummers = _components_firebase__WEBPACK_IMPORTED_MODULE_7__["db"].collection("channels").doc("general").collection('messages').where('wallet', '==', form.wallet);
    nummers.get().then(function (querySnapshot) {
      if (!querySnapshot.empty) {
        querySnapshot.forEach(function (doc) {
          document.getElementById('wallet-validation').innerText = "This wallet ID already exists in our database!";
        });
      } else {
        document.getElementById('wallet-validation').innerText = "";
        e.preventDefault();
        Object(_components_Auth_Authentication__WEBPACK_IMPORTED_MODULE_3__["manualRegister"])(form); //   router.push('/form')

        redirecttoForm(true);
      }
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    children: [filled && user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_index__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 24
    }, _this), filled && !user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_form__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }, _this), !filled && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "col-md-6 mx-auto text-center mt-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "https://bootswatch.com/4/darkly/bootstrap.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "Register"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "form-group col-md-6 mx-auto text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "wallet",
          children: "Email address: !!!will be wallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
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
          lineNumber: 85,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          "class": "form-text text-muted",
          children: "This is public, available at explorer.helium.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
          id: "wallet-validation",
          style: {
            color: '#ff0000'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "password",
          children: "Password:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
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
          lineNumber: 95,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          "class": "form-text text-muted",
          children: "Note: Do NOT use your official Helium password here!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "telegram",
          children: "Telegram:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          children: "t.me/"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
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
          lineNumber: 108,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          "class": "form-text text-muted",
          children: "Input telegram user to be able to chat!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "dsc",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "discord",
            children: "Discord:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            style: {
              marginLeft: '-70px'
            },
            children: "discord.com/users/"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
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
            lineNumber: 118,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 5
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          type: "submit",
          id: "submit",
          className: "btn btn-primary mt-3",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 4
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 16
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiZmlsbGVkIiwicmVkaXJlY3R0b0Zvcm0iLCJ3YWxsZXQiLCJwYXNzd29yZCIsInRlbGVncmFtIiwiZGlzY29yZCIsImZvcm0iLCJzZXRGb3JtIiwiYXV0aG9yaXphdGlvbiIsImZpcmViYXNlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInZhbGlkYXRlVXNlciIsIm51bW1lcnMiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ3aGVyZSIsImVtYWlsIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJlbXB0eSIsImZvckVhY2giLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsImFsZXJ0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVyVGV4dCIsIm1hbnVhbFJlZ2lzdGVyIiwiY29sb3IiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHNCLGtCQUVFQyxzREFBUSxFQUZWO0FBQUEsTUFFZkMsSUFGZTtBQUFBLE1BRVRDLE9BRlM7O0FBQUEsbUJBR1VGLHNEQUFRLENBQUMsS0FBRCxDQUhsQjtBQUFBLE1BR2hCRyxNQUhnQjtBQUFBLE1BR1JDLGNBSFE7O0FBQUEsbUJBSUVKLHNEQUFRLENBQUM7QUFDaENLLFVBQU0sRUFBRSxFQUR3QjtBQUVoQ0MsWUFB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEEsZUFJQTtBQUFPLGdCQUFJLEVBQUMsTUFBWjtBQUFtQix1QkFBVyxFQUFDLFNBQS9CO0FBQ0MscUJBQVMsRUFBQyxTQURYO0FBRUMsb0JBQVEsRUFBRSxrQkFBQ1gsQ0FBRDtBQUFBLHFCQUFPcEIsT0FBTyxpQ0FBTUQsSUFBTjtBQUFZRCx1QkFBTyxFQUFFc0IsQ0FBQyxDQUFDRSxNQUFGLENBQVNFO0FBQTlCLGlCQUFkO0FBQUE7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpBLGVBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0JELGVBeUNDO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsWUFBRSxFQUFDLFFBQXpCO0FBQWtDLG1CQUFTLEVBQUMsc0JBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTBEQSxDQXhIRDs7R0FBTXJDLFE7VUFDVUUscUQ7OztLQURWRixRO0FBeUhTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci5kZDdkYmZhMmNlZjM0ZDdlNWQxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYW51YWxSZWdpc3RlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aC9BdXRoZW50aWNhdGlvbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZGIsIGZpcmViYXNlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9maXJlYmFzZSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vaW5kZXgnO1xyXG5cclxuXHJcbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0WyB1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3RbZmlsbGVkLCByZWRpcmVjdHRvRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xyXG5cdFx0d2FsbGV0OiAnJyxcclxuXHRcdHBhc3N3b3JkOiAnJyxcclxuXHRcdHRlbGVncmFtOicnLFxyXG5cdFx0ZGlzY29yZDonJyxcclxuXHR9KTtcclxuXHJcblx0YXV0aG9yaXphdGlvbigpO1xyXG5cdGZ1bmN0aW9uIGF1dGhvcml6YXRpb24oKXtcclxuXHQgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuXHRcdGlmKHVzZXIpe1xyXG5cdFx0ICBzZXRVc2VyKHVzZXIpO1xyXG5cdFx0ICB2YWxpZGF0ZVVzZXIodXNlcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0ICBzZXRVc2VyKG51bGwpO1xyXG5cdFx0fVxyXG5cdCAgfSlcclxuXHR9OyAgXHJcblxyXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gdmFsaWRhdGVVc2VyKHVzZXIpe1xyXG5cdHZhciBudW1tZXJzID0gZGIuY29sbGVjdGlvbihcImNoYW5uZWxzXCIpLmRvYyhcImdlbmVyYWxcIikuY29sbGVjdGlvbignbWVzc2FnZXMnKS53aGVyZSgnZW1haWwnLCAnPT0nLCB1c2VyLmVtYWlsKTtcclxuXHRudW1tZXJzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuXHRcdGlmICghcXVlcnlTbmFwc2hvdC5lbXB0eSkge1xyXG5cdFx0ICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZXhpc3RzJyk7XHJcblx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHQgIGNvbnNvbGUubG9nKCdub3QgZXhpc3RzJylcclxuXHRcdCAgY29uc29sZS5sb2codXNlci5lbWFpbClcclxuXHRcdH1cclxuXHQgIH0pO1xyXG59XHJcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGlmKGUudGFyZ2V0LmVsZW1lbnRzWzBdLnZhbHVlID09PSBudWxsKXthbGVydCgnZWVlZWVlZWVlZWVlJyl9XHJcblxyXG5cdFx0dmFyIG51bW1lcnMgPSBkYi5jb2xsZWN0aW9uKFwiY2hhbm5lbHNcIikuZG9jKFwiZ2VuZXJhbFwiKS5jb2xsZWN0aW9uKCdtZXNzYWdlcycpLndoZXJlKCd3YWxsZXQnLCAnPT0nLCBmb3JtLndhbGxldCk7XHJcblx0XHRudW1tZXJzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuXHRcdFx0aWYgKCFxdWVyeVNuYXBzaG90LmVtcHR5KSB7XHJcblx0XHRcdCAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcclxuXHRcdFx0ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FsbGV0LXZhbGlkYXRpb24nKS5pbm5lclRleHQgPSBcIlRoaXMgd2FsbGV0IElEIGFscmVhZHkgZXhpc3RzIGluIG91ciBkYXRhYmFzZSFcIjtcclxuXHRcdFx0ICB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FsbGV0LXZhbGlkYXRpb24nKS5pbm5lclRleHQgPSBcIlwiO1xyXG5cdFx0XHQgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ICBtYW51YWxSZWdpc3Rlcihmb3JtKTtcclxuXHRcdFx0Ly8gICByb3V0ZXIucHVzaCgnL2Zvcm0nKVxyXG5cdFx0XHRcdHJlZGlyZWN0dG9Gb3JtKHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHQgIH0pO1xyXG5cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdHsoZmlsbGVkICYmIHVzZXIpICYmIDxIb21lLz59XHJcblx0XHR7KGZpbGxlZCAmJiAhdXNlcikgJiYgPEZvcm0vPn1cclxuXHJcblx0XHR7IWZpbGxlZCAmJiAoPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBteC1hdXRvIHRleHQtY2VudGVyIG10LTVcIj5cclxuXHRcdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9ib290c3dhdGNoLmNvbS80L2RhcmtseS9ib290c3RyYXAubWluLmNzc1wiLz5cclxuXHRcdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxoMT5SZWdpc3RlcjwvaDE+XHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTYgbXgtYXV0byB0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwid2FsbGV0XCI+RW1haWwgYWRkcmVzczogISEhd2lsbCBiZSB3YWxsZXQ8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIldhbGxldCBJRFwiIGlkPVwid2FsbGV0XCJcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIHdhbGxldDogZS50YXJnZXQudmFsdWUgfSl9IC8+XHJcblx0XHRcdFx0XHQ8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlRoaXMgaXMgcHVibGljLCBhdmFpbGFibGUgYXRcclxuXHRcdFx0XHRcdGV4cGxvcmVyLmhlbGl1bS5jb21cclxuXHRcdFx0XHRcdDwvc21hbGw+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGIgaWQ9XCJ3YWxsZXQtdmFsaWRhdGlvblwiIHN0eWxlPXt7Y29sb3I6JyNmZjAwMDAnfX0+PC9iPlxyXG5cdFx0XHRcdDxicj48L2JyPlxyXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9IC8+XHJcblx0XHRcdFx0PHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5Ob3RlOiBEbyBOT1QgdXNlIHlvdXIgb2ZmaWNpYWwgSGVsaXVtXHJcblx0XHRcdFx0cGFzc3dvcmQgaGVyZSFcclxuXHRcdFx0XHQ8L3NtYWxsPlxyXG5cdFx0XHRcdDxiciAvPlxyXG5cclxuXHRcdFx0XHQ8YnIgLz5cclxuXHJcblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ0ZWxlZ3JhbVwiPlRlbGVncmFtOjwvbGFiZWw+XHJcblx0XHRcdFx0PGJyPjwvYnI+XHJcblx0XHRcdFx0PHNtYWxsPnQubWUvPC9zbWFsbD5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRlbGVncmFtXCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInJvdW5kZWRcIlxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgdGVsZWdyYW06IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG5cdFx0XHRcdDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+SW5wdXQgdGVsZWdyYW0gdXNlciB0byBiZSBhYmxlIHRvIGNoYXQhXHJcblx0XHRcdFx0PC9zbWFsbD5cclxuXHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRzY1wiPlxyXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZGlzY29yZFwiPkRpc2NvcmQ6PC9sYWJlbD5cclxuXHRcdFx0XHQ8YnI+PC9icj5cclxuXHRcdFx0XHQ8c21hbGwgc3R5bGU9e3ttYXJnaW5MZWZ0OictNzBweCd9fT5kaXNjb3JkLmNvbS91c2Vycy88L3NtYWxsPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGlzY29yZFwiXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJyb3VuZGVkXCJcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIGRpc2NvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG5cdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdHsvKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovfVxyXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTNcIj5cclxuXHRcdFx0XHRcdFN1Ym1pdFxyXG5cdFx0XHQgIDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj4pXHJcblx0fTwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyOyJdLCJzb3VyY2VSb290IjoiIn0=