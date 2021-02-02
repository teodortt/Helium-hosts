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

  ;

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
  }

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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
            id: "socials-validation",
            style: {
              color: '#ff0000'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
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
          lineNumber: 131,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiZmlsbGVkIiwicmVkaXJlY3R0b0Zvcm0iLCJ3YWxsZXQiLCJwYXNzd29yZCIsInRlbGVncmFtIiwiZGlzY29yZCIsImZvcm0iLCJzZXRGb3JtIiwiYXV0aG9yaXphdGlvbiIsImZpcmViYXNlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInZhbGlkYXRlVXNlciIsIm51bW1lcnMiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ3aGVyZSIsImVtYWlsIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJlbXB0eSIsImZvckVhY2giLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsImxlbmd0aCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJtYW51YWxSZWdpc3RlciIsImNvbG9yIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUN0QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURzQixrQkFFRUMsc0RBQVEsRUFGVjtBQUFBLE1BRWZDLElBRmU7QUFBQSxNQUVUQyxPQUZTOztBQUFBLG1CQUdVRixzREFBUSxDQUFDLEtBQUQsQ0FIbEI7QUFBQSxNQUdoQkcsTUFIZ0I7QUFBQSxNQUdSQyxjQUhROztBQUFBLG1CQUlFSixzREFBUSxDQUFDO0FBQ2hDSyxVQUFNLEVBQUUsRUFEd0I7QUFFaENDLFlB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QUFDLHNCQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTFk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUE0REEsQ0EvSEQ7O0dBQU0zQyxRO1VBQ1VFLHFEOzs7S0FEVkYsUTtBQWdJU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuMTk2NTk2OWYyODFjYWJkNmM1MzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFudWFsUmVnaXN0ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0F1dGgvQXV0aGVudGljYXRpb24nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGRiLCBmaXJlYmFzZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZmlyZWJhc2UnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2luZGV4JztcclxuXHJcblxyXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdFsgdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0W2ZpbGxlZCwgcmVkaXJlY3R0b0Zvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcclxuXHRcdHdhbGxldDogJycsXHJcblx0XHRwYXNzd29yZDogJycsXHJcblx0XHR0ZWxlZ3JhbTonJyxcclxuXHRcdGRpc2NvcmQ6JycsXHJcblx0fSk7XHJcblxyXG5cdGF1dGhvcml6YXRpb24oKTtcclxuXHRmdW5jdGlvbiBhdXRob3JpemF0aW9uKCl7XHJcblx0ICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcblx0XHRpZih1c2VyKXtcclxuXHRcdCAgc2V0VXNlcih1c2VyKTtcclxuXHRcdCAgdmFsaWRhdGVVc2VyKHVzZXIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdCAgc2V0VXNlcihudWxsKTtcclxuXHRcdH1cclxuXHQgIH0pXHJcblx0fTsgIFxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVVc2VyKHVzZXIpe1xyXG5cdHZhciBudW1tZXJzID0gZGIuY29sbGVjdGlvbihcImNoYW5uZWxzXCIpLmRvYyhcImdlbmVyYWxcIikuY29sbGVjdGlvbignbWVzc2FnZXMnKS53aGVyZSgnZW1haWwnLCAnPT0nLCB1c2VyLmVtYWlsKTtcclxuXHRudW1tZXJzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuXHRcdGlmICghcXVlcnlTbmFwc2hvdC5lbXB0eSkge1xyXG5cdFx0ICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xyXG5cdFx0XHRjb25zb2xlLmxvZygnZXhpc3RzJyk7XHJcblx0XHR9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHQgIGNvbnNvbGUubG9nKCdub3QgZXhpc3RzJylcclxuXHRcdCAgY29uc29sZS5sb2codXNlci5lbWFpbClcclxuXHRcdH1cclxuXHQgIH0pO1xyXG59XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0aWYoZS50YXJnZXQuZWxlbWVudHNbMV0udmFsdWUubGVuZ3RoIDwgNil7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtdmFsaWRhdGlvbicpLmlubmVyVGV4dCA9IFwiWW91ciBwYXNzd29yZCBtdXN0IHRvIGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVycyFcIjtcclxuXHRcdH1cclxuXHRcdGlmKGUudGFyZ2V0LmVsZW1lbnRzWzJdLnZhbHVlLmxlbmd0aCA8IDEgJiYgZS50YXJnZXQuZWxlbWVudHNbM10udmFsdWUubGVuZ3RoIDwgMSl7XHJcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb2NpYWxzLXZhbGlkYXRpb24nKS5pbm5lclRleHQgPSBcIllvdSBoYXZlIHRvIGFkZCBhdCBsZWFzdCBvbmUgc29jaWFsIGFjY291bnQhXCI7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLXZhbGlkYXRpb24nKS5pbm5lclRleHQgPSBcIlwiO1xyXG5cclxuXHRcdHZhciBudW1tZXJzID0gZGIuY29sbGVjdGlvbihcImNoYW5uZWxzXCIpLmRvYyhcImdlbmVyYWxcIikuY29sbGVjdGlvbignbWVzc2FnZXMnKS53aGVyZSgnd2FsbGV0JywgJz09JywgZm9ybS53YWxsZXQpO1xyXG5cdFx0bnVtbWVycy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcblx0XHRcdGlmICghcXVlcnlTbmFwc2hvdC5lbXB0eSkge1xyXG5cdFx0XHQgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XHJcblx0XHRcdCAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhbGxldC12YWxpZGF0aW9uJykuaW5uZXJUZXh0ID0gXCJUaGlzIHdhbGxldCBJRCBhbHJlYWR5IGV4aXN0cyBpbiBvdXIgZGF0YWJhc2UhXCI7XHJcblx0XHRcdCAgfSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdCAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhbGxldC12YWxpZGF0aW9uJykuaW5uZXJUZXh0ID0gXCJcIjtcclxuXHRcdFx0ICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdCAgbWFudWFsUmVnaXN0ZXIoZm9ybSk7XHJcblx0XHRcdCAgcmVkaXJlY3R0b0Zvcm0odHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdCAgfSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdHsoZmlsbGVkICYmIHVzZXIpICYmIDxIb21lLz59XHJcblx0XHR7KGZpbGxlZCAmJiAhdXNlcikgJiYgPEZvcm0vPn1cclxuXHJcblx0XHR7IWZpbGxlZCAmJiAoPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBteC1hdXRvIHRleHQtY2VudGVyIG10LTVcIj5cclxuXHRcdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9ib290c3dhdGNoLmNvbS80L2RhcmtseS9ib290c3RyYXAubWluLmNzc1wiLz5cclxuXHRcdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxoMT5SZWdpc3RlcjwvaDE+XHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTYgbXgtYXV0byB0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwid2FsbGV0XCI+RW1haWwgYWRkcmVzczogISEhd2lsbCBiZSB3YWxsZXQ8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIldhbGxldCBJRFwiIGlkPVwid2FsbGV0XCJcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIHdhbGxldDogZS50YXJnZXQudmFsdWUgfSl9IC8+XHJcblx0XHRcdFx0XHQ8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPlRoaXMgaXMgcHVibGljLCBhdmFpbGFibGUgYXRcclxuXHRcdFx0XHRcdGV4cGxvcmVyLmhlbGl1bS5jb21cclxuXHRcdFx0XHRcdDwvc21hbGw+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGIgaWQ9XCJ3YWxsZXQtdmFsaWRhdGlvblwiIHN0eWxlPXt7Y29sb3I6JyNmZjAwMDAnfX0+PC9iPlxyXG5cdFx0XHRcdDxicj48L2JyPlxyXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9IC8+XHJcblx0XHRcdFx0PHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5Ob3RlOiBEbyBOT1QgdXNlIHlvdXIgb2ZmaWNpYWwgSGVsaXVtXHJcblx0XHRcdFx0cGFzc3dvcmQgaGVyZSFcclxuXHRcdFx0XHQ8L3NtYWxsPlxyXG5cdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdDxiIGlkPVwicGFzc3dvcmQtdmFsaWRhdGlvblwiIHN0eWxlPXt7Y29sb3I6JyNmZjAwMDAnfX0+PC9iPlxyXG5cclxuXHRcdFx0XHQ8YnIgLz5cclxuXHJcblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ0ZWxlZ3JhbVwiPlRlbGVncmFtOjwvbGFiZWw+XHJcblx0XHRcdFx0PGJyPjwvYnI+XHJcblx0XHRcdFx0PHNtYWxsPnQubWUvPC9zbWFsbD5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRlbGVncmFtXCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInJvdW5kZWRcIlxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgdGVsZWdyYW06IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG5cdFx0XHRcdDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+SW5wdXQgdGVsZWdyYW0gdXNlciB0byBiZSBhYmxlIHRvIGNoYXQhXHJcblx0XHRcdFx0PC9zbWFsbD5cclxuXHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRzY1wiPlxyXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZGlzY29yZFwiPkRpc2NvcmQ6PC9sYWJlbD5cclxuXHRcdFx0XHQ8YnI+PC9icj5cclxuXHRcdFx0XHQ8c21hbGwgc3R5bGU9e3ttYXJnaW5MZWZ0OictNzBweCd9fT5kaXNjb3JkLmNvbS91c2Vycy88L3NtYWxsPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGlzY29yZFwiXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJyb3VuZGVkXCJcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIGRpc2NvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG5cdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdDxiIGlkPVwic29jaWFscy12YWxpZGF0aW9uXCIgc3R5bGU9e3tjb2xvcjonI2ZmMDAwMCd9fT48L2I+XHJcblxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTNcIj5cclxuXHRcdFx0XHRcdFN1Ym1pdFxyXG5cdFx0XHQgIDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj4pXHJcblx0fTwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyOyJdLCJzb3VyY2VSb290IjoiIn0=