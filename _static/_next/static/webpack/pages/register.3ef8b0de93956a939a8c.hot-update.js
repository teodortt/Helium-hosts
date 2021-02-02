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
    }

    if (e.target.elements[2].value.length < 1 && e.target.elements[3].value.length < 1) {
      document.getElementById('socials-validation').innerText = "You have to add at least one social account!";
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
      lineNumber: 83,
      columnNumber: 24
    }, _this), filled && !user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_form__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }, _this), !filled && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "col-md-6 mx-auto text-center mt-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "https://bootswatch.com/4/darkly/bootstrap.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "Register"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "form-group col-md-6 mx-auto text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "wallet",
          children: "Email address: !!!will be wallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
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
          lineNumber: 93,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          "class": "form-text text-muted",
          children: "This is public, available at explorer.helium.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
          id: "wallet-validation",
          style: {
            color: '#ff0000'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "password",
          children: "Password:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
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
          lineNumber: 103,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          "class": "form-text text-muted",
          children: "Note: Do NOT use your official Helium password here!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
          id: "password-validation",
          style: {
            color: '#ff0000'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "telegram",
          children: "Telegram:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          children: "t.me/"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
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
          lineNumber: 117,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          "class": "form-text text-muted",
          children: "Input telegram user to be able to chat!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "dsc",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "discord",
            children: "Discord:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            style: {
              marginLeft: '-70px'
            },
            children: "discord.com/users/"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
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
            lineNumber: 127,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
            id: "socials-validation",
            style: {
              color: '#ff0000'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 5
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          type: "submit",
          id: "submit",
          className: "btn btn-primary mt-3",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 4
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 16
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiZmlsbGVkIiwicmVkaXJlY3R0b0Zvcm0iLCJ3YWxsZXQiLCJwYXNzd29yZCIsInRlbGVncmFtIiwiZGlzY29yZCIsImZvcm0iLCJzZXRGb3JtIiwiYXV0aG9yaXphdGlvbiIsImZpcmViYXNlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInZhbGlkYXRlVXNlciIsIm51bW1lcnMiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ3aGVyZSIsImVtYWlsIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJlbXB0eSIsImZvckVhY2giLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsImxlbmd0aCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJtYW51YWxSZWdpc3RlciIsImNvbG9yIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUN0QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURzQixrQkFFRUMsc0RBQVEsRUFGVjtBQUFBLE1BRWZDLElBRmU7QUFBQSxNQUVUQyxPQUZTOztBQUFBLG1CQUdVRixzREFBUSxDQUFDLEtBQUQsQ0FIbEI7QUFBQSxNQUdoQkcsTUFIZ0I7QUFBQSxNQUdSQyxjQUhROztBQUFBLG1CQUlFSixzREFBUSxDQUFDO0FBQ2hDSyxVQUFNLEVBQUUsRUFEd0I7QUFFaENDLFlB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WUFBRSxFQUFDLFFBQXpCO0FBQWtDLG1CQUFTLEVBQUMsc0JBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTZEQSxDQW5JRDs7R0FBTTNDLFE7VUFDVUUscUQ7OztLQURWRixRO0FBb0lTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci4zZWY4YjBkZTkzOTU2YTkzOWE4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYW51YWxSZWdpc3RlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aC9BdXRoZW50aWNhdGlvbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZGIsIGZpcmViYXNlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9maXJlYmFzZSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vaW5kZXgnO1xyXG5cclxuXHJcbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0WyB1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3RbZmlsbGVkLCByZWRpcmVjdHRvRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xyXG5cdFx0d2FsbGV0OiAnJyxcclxuXHRcdHBhc3N3b3JkOiAnJyxcclxuXHRcdHRlbGVncmFtOicnLFxyXG5cdFx0ZGlzY29yZDonJyxcclxuXHR9KTtcclxuXHJcblx0YXV0aG9yaXphdGlvbigpO1xyXG5cdGZ1bmN0aW9uIGF1dGhvcml6YXRpb24oKXtcclxuXHQgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuXHRcdGlmKHVzZXIpe1xyXG5cdFx0ICBzZXRVc2VyKHVzZXIpO1xyXG5cdFx0ICB2YWxpZGF0ZVVzZXIodXNlcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0ICBzZXRVc2VyKG51bGwpO1xyXG5cdFx0fVxyXG5cdCAgfSlcclxuXHR9OyAgXHJcblxyXG4vLyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuZnVuY3Rpb24gdmFsaWRhdGVVc2VyKHVzZXIpe1xyXG5cdHZhciBudW1tZXJzID0gZGIuY29sbGVjdGlvbihcImNoYW5uZWxzXCIpLmRvYyhcImdlbmVyYWxcIikuY29sbGVjdGlvbignbWVzc2FnZXMnKS53aGVyZSgnZW1haWwnLCAnPT0nLCB1c2VyLmVtYWlsKTtcclxuXHRudW1tZXJzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuXHRcdGlmICghcXVlcnlTbmFwc2hvdC5lbXB0eSkge1xyXG5cdFx0ICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZXhpc3RzJyk7XHJcblx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHQgIGNvbnNvbGUubG9nKCdub3QgZXhpc3RzJylcclxuXHRcdCAgY29uc29sZS5sb2codXNlci5lbWFpbClcclxuXHRcdH1cclxuXHQgIH0pO1xyXG59XHJcbi8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5cclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGlmKGUudGFyZ2V0LmVsZW1lbnRzWzFdLnZhbHVlLmxlbmd0aCA8IDYpe1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLXZhbGlkYXRpb24nKS5pbm5lclRleHQgPSBcIllvdXIgcGFzc3dvcmQgbXVzdCB0byBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMhXCI7XHJcblx0XHR9XHJcblx0XHRpZihlLnRhcmdldC5lbGVtZW50c1syXS52YWx1ZS5sZW5ndGggPCAxICYmIGUudGFyZ2V0LmVsZW1lbnRzWzNdLnZhbHVlLmxlbmd0aCA8IDEpe1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29jaWFscy12YWxpZGF0aW9uJykuaW5uZXJUZXh0ID0gXCJZb3UgaGF2ZSB0byBhZGQgYXQgbGVhc3Qgb25lIHNvY2lhbCBhY2NvdW50IVwiO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC12YWxpZGF0aW9uJykuaW5uZXJUZXh0ID0gXCJcIjtcclxuXHJcblx0XHR2YXIgbnVtbWVycyA9IGRiLmNvbGxlY3Rpb24oXCJjaGFubmVsc1wiKS5kb2MoXCJnZW5lcmFsXCIpLmNvbGxlY3Rpb24oJ21lc3NhZ2VzJykud2hlcmUoJ3dhbGxldCcsICc9PScsIGZvcm0ud2FsbGV0KTtcclxuXHRcdG51bW1lcnMuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG5cdFx0XHRpZiAoIXF1ZXJ5U25hcHNob3QuZW1wdHkpIHtcclxuXHRcdFx0ICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xyXG5cdFx0XHQgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3YWxsZXQtdmFsaWRhdGlvbicpLmlubmVyVGV4dCA9IFwiVGhpcyB3YWxsZXQgSUQgYWxyZWFkeSBleGlzdHMgaW4gb3VyIGRhdGFiYXNlIVwiO1xyXG5cdFx0XHQgIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHQgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3YWxsZXQtdmFsaWRhdGlvbicpLmlubmVyVGV4dCA9IFwiXCI7XHJcblx0XHRcdCAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHQgIG1hbnVhbFJlZ2lzdGVyKGZvcm0pO1xyXG5cdFx0XHQgIHJlZGlyZWN0dG9Gb3JtKHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHQgIH0pO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXY+XHJcblx0XHR7KGZpbGxlZCAmJiB1c2VyKSAmJiA8SG9tZS8+fVxyXG5cdFx0eyhmaWxsZWQgJiYgIXVzZXIpICYmIDxGb3JtLz59XHJcblxyXG5cdFx0eyFmaWxsZWQgJiYgKDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbXgtYXV0byB0ZXh0LWNlbnRlciBtdC01XCI+XHJcblx0XHRcdFx0PEhlYWQ+XHJcblx0XHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vYm9vdHN3YXRjaC5jb20vNC9kYXJrbHkvYm9vdHN0cmFwLm1pbi5jc3NcIi8+XHJcblx0XHRcdFx0PC9IZWFkPlxyXG5cdFx0XHQ8aDE+UmVnaXN0ZXI8L2gxPlxyXG5cdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIGNvbC1tZC02IG14LWF1dG8gdGV4dC1jZW50ZXJcIj5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cIndhbGxldFwiPkVtYWlsIGFkZHJlc3M6ICEhIXdpbGwgYmUgd2FsbGV0PC9sYWJlbD5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJXYWxsZXQgSURcIiBpZD1cIndhbGxldFwiXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCB3YWxsZXQ6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG5cdFx0XHRcdFx0PHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5UaGlzIGlzIHB1YmxpYywgYXZhaWxhYmxlIGF0XHJcblx0XHRcdFx0XHRleHBsb3Jlci5oZWxpdW0uY29tXHJcblx0XHRcdFx0XHQ8L3NtYWxsPlxyXG5cdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdDxiIGlkPVwid2FsbGV0LXZhbGlkYXRpb25cIiBzdHlsZT17e2NvbG9yOicjZmYwMDAwJ319PjwvYj5cclxuXHRcdFx0XHQ8YnI+PC9icj5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG5cdFx0XHRcdDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+Tm90ZTogRG8gTk9UIHVzZSB5b3VyIG9mZmljaWFsIEhlbGl1bVxyXG5cdFx0XHRcdHBhc3N3b3JkIGhlcmUhXHJcblx0XHRcdFx0PC9zbWFsbD5cclxuXHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHQ8YiBpZD1cInBhc3N3b3JkLXZhbGlkYXRpb25cIiBzdHlsZT17e2NvbG9yOicjZmYwMDAwJ319PjwvYj5cclxuXHJcblx0XHRcdFx0PGJyIC8+XHJcblxyXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwidGVsZWdyYW1cIj5UZWxlZ3JhbTo8L2xhYmVsPlxyXG5cdFx0XHRcdDxicj48L2JyPlxyXG5cdFx0XHRcdDxzbWFsbD50Lm1lLzwvc21hbGw+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJUZWxlZ3JhbVwiXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJyb3VuZGVkXCJcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIHRlbGVncmFtOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cclxuXHRcdFx0XHQ8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPklucHV0IHRlbGVncmFtIHVzZXIgdG8gYmUgYWJsZSB0byBjaGF0IVxyXG5cdFx0XHRcdDwvc21hbGw+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkc2NcIj5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImRpc2NvcmRcIj5EaXNjb3JkOjwvbGFiZWw+XHJcblx0XHRcdFx0PGJyPjwvYnI+XHJcblx0XHRcdFx0PHNtYWxsIHN0eWxlPXt7bWFyZ2luTGVmdDonLTcwcHgnfX0+ZGlzY29yZC5jb20vdXNlcnMvPC9zbWFsbD5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkRpc2NvcmRcIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicm91bmRlZFwiXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBkaXNjb3JkOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cclxuXHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHQ8YiBpZD1cInNvY2lhbHMtdmFsaWRhdGlvblwiIHN0eWxlPXt7Y29sb3I6JyNmZjAwMDAnfX0+PC9iPlxyXG5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHR7LyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL31cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtdC0zXCI+XHJcblx0XHRcdFx0XHRTdWJtaXRcclxuXHRcdFx0ICA8L2J1dHRvbj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+KVxyXG5cdH08L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjsiXSwic291cmNlUm9vdCI6IiJ9