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
      lineNumber: 67,
      columnNumber: 24
    }, _this), filled && !user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_form__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }, _this), !filled && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "col-md-6 mx-auto text-center mt-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "https://bootswatch.com/4/darkly/bootstrap.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "Register"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "form-group col-md-6 mx-auto text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "wallet",
          children: "Email address: !!!will be wallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
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
          lineNumber: 77,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          "class": "form-text text-muted",
          children: "This is public, available at explorer.helium.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
          id: "wallet-validation",
          style: {
            color: '#ff0000'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "password",
          children: "Password:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
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
          lineNumber: 87,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          "class": "form-text text-muted",
          children: "Note: Do NOT use your official Helium password here!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
          id: "password-validation",
          style: {
            color: '#ff0000'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "telegram",
          children: "Telegram:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          children: "t.me/"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
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
          lineNumber: 101,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          "class": "form-text text-muted",
          children: "Input telegram user to be able to chat!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "dsc",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "discord",
            children: "Discord:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            style: {
              marginLeft: '-70px'
            },
            children: "discord.com/users/"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
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
            lineNumber: 111,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
            id: "socials-validation",
            style: {
              color: '#ff0000'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 5
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          type: "submit",
          id: "submit",
          className: "btn btn-primary mt-3",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 4
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 16
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 3
  }, _this);
};

_s(Register, "+4yjqvgtlgqVmVr2Y5N1wpWtQNI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
});

_c = Register;
/* harmony default export */ __webpack_exports__["default"] = (Register); // function validateUser(user){
// 	var nummers = db.collection("channels").doc("general").collection('messages').where('email', '==', user.email);
// 	nummers.get().then((querySnapshot) => {
// 		if (!querySnapshot.empty) {
// 		  querySnapshot.forEach(function (doc) {
// 			console.log('exists');
// 		});
// 		} else {
// 		  console.log('not exists')
// 		  console.log(user.email)
// 		}
// 	  });
// }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiZmlsbGVkIiwicmVkaXJlY3R0b0Zvcm0iLCJ3YWxsZXQiLCJwYXNzd29yZCIsInRlbGVncmFtIiwiZGlzY29yZCIsImZvcm0iLCJzZXRGb3JtIiwiYXV0aG9yaXphdGlvbiIsImZpcmViYXNlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInZhbGlkYXRlVXNlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImVsZW1lbnRzIiwidmFsdWUiLCJsZW5ndGgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJUZXh0IiwibnVtbWVycyIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsIndoZXJlIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJlbXB0eSIsImZvckVhY2giLCJtYW51YWxSZWdpc3RlciIsImNvbG9yIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUN0QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURzQixrQkFFRUMsc0RBQVEsRUFGVjtBQUFBLE1BRWZDLElBRmU7QUFBQSxNQUVUQyxPQUZTOztBQUFBLG1CQUdVRixzREFBUSxDQUFDLEtBQUQsQ0FIbEI7QUFBQSxNQUdoQkcsTUFIZ0I7QUFBQSxNQUdSQyxjQUhROztBQUFBLG1CQUlFSixzREFBUSxDQUFDO0FBQ2hDSyxVQUFNLEVBQUUsRUFEd0I7QUFFaENDLFlBQVEsRUFBRSxFQUZzQjtBQUdoQ0MsWUFB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RFg7QUFFQyxvQkFBUSxFQUFFLGtCQUFDckIsQ0FBRDtBQUFBLHFCQUFPUCxPQUFPLGlDQUFNRCxJQUFOO0FBQVlELHVCQUFPLEVBQUVTLENBQUMsQ0FBQ0UsTUFBRixDQUFTRTtBQUE5QixpQkFBZDtBQUFBO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKQSxlQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEEsZUFRQTtBQUFHLGNBQUUsRUFBQyxvQkFBTjtBQUEyQixpQkFBSyxFQUFFO0FBQUNnQixtQkFBSyxFQUFDO0FBQVA7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaENELGVBMkNDO0FBQVEsY0FBSSxFQUFDLFFBQWI7QUFBc0IsWUFBRSxFQUFDLFFBQXpCO0FBQWtDLG1CQUFTLEVBQUMsc0JBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTREQSxDQWxIRDs7R0FBTXhDLFE7VUFDVUUscUQ7OztLQURWRixRO0FBbUhTQSx1RUFBZixFLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuNjdiNTQ4ZjdhOGI0YmQ5OTllMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFudWFsUmVnaXN0ZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL0F1dGgvQXV0aGVudGljYXRpb24nO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGRiLCBmaXJlYmFzZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZmlyZWJhc2UnO1xyXG5pbXBvcnQgRm9ybSBmcm9tICcuL2Zvcm0nO1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2luZGV4JztcclxuXHJcblxyXG5jb25zdCBSZWdpc3RlciA9ICgpID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdFsgdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSgpO1xyXG5cdGNvbnN0W2ZpbGxlZCwgcmVkaXJlY3R0b0Zvcm1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcclxuXHRcdHdhbGxldDogJycsXHJcblx0XHRwYXNzd29yZDogJycsXHJcblx0XHR0ZWxlZ3JhbTonJyxcclxuXHRcdGRpc2NvcmQ6JycsXHJcblx0fSk7XHJcblxyXG5cdGF1dGhvcml6YXRpb24oKTtcclxuXHRmdW5jdGlvbiBhdXRob3JpemF0aW9uKCl7XHJcblx0ICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcblx0XHRpZih1c2VyKXtcclxuXHRcdCAgc2V0VXNlcih1c2VyKTtcclxuXHRcdCAgdmFsaWRhdGVVc2VyKHVzZXIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdCAgc2V0VXNlcihudWxsKTtcclxuXHRcdH1cclxuXHQgIH0pXHJcblx0fTsgIFxyXG5cclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRpZihlLnRhcmdldC5lbGVtZW50c1sxXS52YWx1ZS5sZW5ndGggPCA2KXtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC12YWxpZGF0aW9uJykuaW5uZXJUZXh0ID0gXCJZb3VyIHBhc3N3b3JkIG11c3QgdG8gYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIVwiO1xyXG5cdFx0fVxyXG5cdFx0aWYoZS50YXJnZXQuZWxlbWVudHNbMl0udmFsdWUubGVuZ3RoIDwgMSAmJiBlLnRhcmdldC5lbGVtZW50c1szXS52YWx1ZS5sZW5ndGggPCAxKXtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvY2lhbHMtdmFsaWRhdGlvbicpLmlubmVyVGV4dCA9IFwiWW91IGhhdmUgdG8gYWRkIGF0IGxlYXN0IG9uZSBzb2NpYWwgYWNjb3VudCFcIjtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtdmFsaWRhdGlvbicpLmlubmVyVGV4dCA9IFwiXCI7XHJcblxyXG5cdFx0dmFyIG51bW1lcnMgPSBkYi5jb2xsZWN0aW9uKFwiY2hhbm5lbHNcIikuZG9jKFwiZ2VuZXJhbFwiKS5jb2xsZWN0aW9uKCdtZXNzYWdlcycpLndoZXJlKCd3YWxsZXQnLCAnPT0nLCBmb3JtLndhbGxldCk7XHJcblx0XHRudW1tZXJzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuXHRcdFx0aWYgKCFxdWVyeVNuYXBzaG90LmVtcHR5KSB7XHJcblx0XHRcdCAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcclxuXHRcdFx0ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FsbGV0LXZhbGlkYXRpb24nKS5pbm5lclRleHQgPSBcIlRoaXMgd2FsbGV0IElEIGFscmVhZHkgZXhpc3RzIGluIG91ciBkYXRhYmFzZSFcIjtcclxuXHRcdFx0ICB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FsbGV0LXZhbGlkYXRpb24nKS5pbm5lclRleHQgPSBcIlwiO1xyXG5cdFx0XHQgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ICBtYW51YWxSZWdpc3Rlcihmb3JtKTtcclxuXHRcdFx0ICByZWRpcmVjdHRvRm9ybSh0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0ICB9KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0eyhmaWxsZWQgJiYgdXNlcikgJiYgPEhvbWUvPn1cclxuXHRcdHsoZmlsbGVkICYmICF1c2VyKSAmJiA8Rm9ybS8+fVxyXG5cclxuXHRcdHshZmlsbGVkICYmICg8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG14LWF1dG8gdGV4dC1jZW50ZXIgbXQtNVwiPlxyXG5cdFx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Jvb3Rzd2F0Y2guY29tLzQvZGFya2x5L2Jvb3RzdHJhcC5taW4uY3NzXCIvPlxyXG5cdFx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PGgxPlJlZ2lzdGVyPC9oMT5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtNiBteC1hdXRvIHRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ3YWxsZXRcIj5FbWFpbCBhZGRyZXNzOiAhISF3aWxsIGJlIHdhbGxldDwvbGFiZWw+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiV2FsbGV0IElEXCIgaWQ9XCJ3YWxsZXRcIlxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgd2FsbGV0OiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cclxuXHRcdFx0XHRcdDxzbWFsbCBjbGFzcz1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+VGhpcyBpcyBwdWJsaWMsIGF2YWlsYWJsZSBhdFxyXG5cdFx0XHRcdFx0ZXhwbG9yZXIuaGVsaXVtLmNvbVxyXG5cdFx0XHRcdFx0PC9zbWFsbD5cclxuXHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHQ8YiBpZD1cIndhbGxldC12YWxpZGF0aW9uXCIgc3R5bGU9e3tjb2xvcjonI2ZmMDAwMCd9fT48L2I+XHJcblx0XHRcdFx0PGJyPjwvYnI+XHJcblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cclxuXHRcdFx0XHQ8c21hbGwgY2xhc3M9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPk5vdGU6IERvIE5PVCB1c2UgeW91ciBvZmZpY2lhbCBIZWxpdW1cclxuXHRcdFx0XHRwYXNzd29yZCBoZXJlIVxyXG5cdFx0XHRcdDwvc21hbGw+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGIgaWQ9XCJwYXNzd29yZC12YWxpZGF0aW9uXCIgc3R5bGU9e3tjb2xvcjonI2ZmMDAwMCd9fT48L2I+XHJcblxyXG5cdFx0XHRcdDxiciAvPlxyXG5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInRlbGVncmFtXCI+VGVsZWdyYW06PC9sYWJlbD5cclxuXHRcdFx0XHQ8YnI+PC9icj5cclxuXHRcdFx0XHQ8c21hbGw+dC5tZS88L3NtYWxsPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGVsZWdyYW1cIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicm91bmRlZFwiXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCB0ZWxlZ3JhbTogZS50YXJnZXQudmFsdWUgfSl9IC8+XHJcblx0XHRcdFx0PHNtYWxsIGNsYXNzPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5JbnB1dCB0ZWxlZ3JhbSB1c2VyIHRvIGJlIGFibGUgdG8gY2hhdCFcclxuXHRcdFx0XHQ8L3NtYWxsPlxyXG5cdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHNjXCI+XHJcblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJkaXNjb3JkXCI+RGlzY29yZDo8L2xhYmVsPlxyXG5cdFx0XHRcdDxicj48L2JyPlxyXG5cdFx0XHRcdDxzbWFsbCBzdHlsZT17e21hcmdpbkxlZnQ6Jy03MHB4J319PmRpc2NvcmQuY29tL3VzZXJzLzwvc21hbGw+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJEaXNjb3JkXCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInJvdW5kZWRcIlxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgZGlzY29yZDogZS50YXJnZXQudmFsdWUgfSl9IC8+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGIgaWQ9XCJzb2NpYWxzLXZhbGlkYXRpb25cIiBzdHlsZT17e2NvbG9yOicjZmYwMDAwJ319PjwvYj5cclxuXHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgaWQ9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXQtM1wiPlxyXG5cdFx0XHRcdFx0U3VibWl0XHJcblx0XHRcdCAgPC9idXR0b24+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PilcclxuXHR9PC9kaXY+XHJcblx0KTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XHJcblxyXG4vLyBmdW5jdGlvbiB2YWxpZGF0ZVVzZXIodXNlcil7XHJcbi8vIFx0dmFyIG51bW1lcnMgPSBkYi5jb2xsZWN0aW9uKFwiY2hhbm5lbHNcIikuZG9jKFwiZ2VuZXJhbFwiKS5jb2xsZWN0aW9uKCdtZXNzYWdlcycpLndoZXJlKCdlbWFpbCcsICc9PScsIHVzZXIuZW1haWwpO1xyXG4vLyBcdG51bW1lcnMuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4vLyBcdFx0aWYgKCFxdWVyeVNuYXBzaG90LmVtcHR5KSB7XHJcbi8vIFx0XHQgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XHJcbi8vIFx0XHRcdGNvbnNvbGUubG9nKCdleGlzdHMnKTtcclxuLy8gXHRcdH0pO1xyXG4vLyBcdFx0fSBlbHNlIHtcclxuLy8gXHRcdCAgY29uc29sZS5sb2coJ25vdCBleGlzdHMnKVxyXG4vLyBcdFx0ICBjb25zb2xlLmxvZyh1c2VyLmVtYWlsKVxyXG4vLyBcdFx0fVxyXG4vLyBcdCAgfSk7XHJcbi8vIH0iXSwic291cmNlUm9vdCI6IiJ9