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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/firebase */ "./components/firebase.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./form */ "./pages/form.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index */ "./pages/index.js");



var _jsxFileName = "C:\\apps\\helium_app\\pages\\register.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var Register = function Register() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

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
    _components_firebase__WEBPACK_IMPORTED_MODULE_6__["firebase"].auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user); //   validateUser(user);
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
      var nummers = _components_firebase__WEBPACK_IMPORTED_MODULE_6__["db"].collection("channels").doc("general").collection('messages').where('wallet', '==', form.wallet);
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
    children: [filled && user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_index__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 24
    }, _this), filled && !user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_form__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }, _this), !filled && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "col-md-6 mx-auto text-center mt-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "https://bootswatch.com/4/darkly/bootstrap.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "Register"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "form-group col-md-6 mx-auto text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "wallet",
          children: "Wallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
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
          lineNumber: 74,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          className: "form-text text-muted",
          children: "This is public, available at explorer.helium.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
          id: "wallet-validation",
          style: {
            color: '#ff0000'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "password",
          children: "Password:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
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
          lineNumber: 84,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          className: "form-text text-muted",
          children: "Note: Do NOT use your official Helium password here!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
          id: "password-validation",
          style: {
            color: '#ff0000'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "telegram",
          children: "Telegram:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          children: "t.me/"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
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
          lineNumber: 98,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          className: "form-text text-muted",
          children: "Input telegram user to be able to chat!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "dsc",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "discord",
            children: "Discord:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            style: {
              marginLeft: '-70px'
            },
            children: "discord.com/users/"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 107,
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
            lineNumber: 108,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
            id: "socials-validation",
            style: {
              color: '#ff0000'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 5
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          type: "submit",
          id: "submit",
          className: "btn btn-primary mt-3",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 4
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 16
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 3
  }, _this);
};

_s(Register, "+4yjqvgtlgqVmVr2Y5N1wpWtQNI=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiZmlsbGVkIiwicmVkaXJlY3R0b0Zvcm0iLCJ3YWxsZXQiLCJwYXNzd29yZCIsInRlbGVncmFtIiwiZGlzY29yZCIsImZvcm0iLCJzZXRGb3JtIiwiYXV0aG9yaXphdGlvbiIsImZpcmViYXNlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImVsZW1lbnRzIiwidmFsdWUiLCJsZW5ndGgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJUZXh0IiwibnVtbWVycyIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsIndoZXJlIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJlbXB0eSIsImZvckVhY2giLCJtYW51YWxSZWdpc3RlciIsImNvbG9yIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHNCLGtCQUVFQyxzREFBUSxFQUZWO0FBQUEsTUFFZkMsSUFGZTtBQUFBLE1BRVRDLE9BRlM7O0FBQUEsbUJBR1VGLHNEQUFRLENBQUMsS0FBRCxDQUhsQjtBQUFBLE1BR2hCRyxNQUhnQjtBQUFBLE1BR1JDLGNBSFE7O0FBQUEsbUJBSUVKLHNEQUFRLENBQUM7QUFDaENLLFVBQU0sRUFBRSxFQUR3QjtBQUVoQ0MsWUFBUSxFQUFFLEVBRnNCO0FBR2hDQyxZQUFRLEVBQUMsRUFIdUI7QUFJaENDLFdB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QUNyQixDQUFEO0FBQUEscUJBQU9OLE9BQU8saUNBQU1ELElBQU47QUFBWUQsdUJBQU8sRUFBRVEsQ0FBQyxDQUFDRSxNQUFGLENBQVNFO0FBQTlCLGlCQUFkO0FBQUE7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpBLGVBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQQSxlQVFBO0FBQUcsY0FBRSxFQUFDLG9CQUFOO0FBQTJCLGlCQUFLLEVBQUU7QUFBQ2dCLG1CQUFLLEVBQUM7QUFBUDtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQ0QsZUEyQ0M7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixZQUFFLEVBQUMsUUFBekI7QUFBa0MsbUJBQVMsRUFBQyxzQkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0NEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBNERBLENBaEhEOztHQUFNdkMsUTtVQUNVRSxxRDs7O0tBRFZGLFE7QUFpSFNBLHVFQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci5hMzZmYWU3ZTM2NDE0MTUwMjljNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYW51YWxSZWdpc3RlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aC9BdXRoZW50aWNhdGlvbic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZGIsIGZpcmViYXNlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9maXJlYmFzZSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vaW5kZXgnO1xyXG5cclxuXHJcbmNvbnN0IFJlZ2lzdGVyID0gKCkgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0WyB1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKCk7XHJcblx0Y29uc3RbZmlsbGVkLCByZWRpcmVjdHRvRm9ybV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xyXG5cdFx0d2FsbGV0OiAnJyxcclxuXHRcdHBhc3N3b3JkOiAnJyxcclxuXHRcdHRlbGVncmFtOicnLFxyXG5cdFx0ZGlzY29yZDonJyxcclxuXHR9KTtcclxuXHJcblx0YXV0aG9yaXphdGlvbigpO1xyXG5cdGZ1bmN0aW9uIGF1dGhvcml6YXRpb24oKXtcclxuXHQgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuXHRcdGlmKHVzZXIpe1xyXG5cdFx0ICBzZXRVc2VyKHVzZXIpO1xyXG5cdFx0Ly8gICB2YWxpZGF0ZVVzZXIodXNlcik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0ICBzZXRVc2VyKG51bGwpO1xyXG5cdFx0fVxyXG5cdCAgfSlcclxuXHR9OyAgXHJcblxyXG5cclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGlmKGUudGFyZ2V0LmVsZW1lbnRzWzFdLnZhbHVlLmxlbmd0aCA8IDYpe1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLXZhbGlkYXRpb24nKS5pbm5lclRleHQgPSBcIllvdXIgcGFzc3dvcmQgbXVzdCB0byBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMhXCI7XHJcblx0XHR9XHJcblx0XHRpZihlLnRhcmdldC5lbGVtZW50c1syXS52YWx1ZS5sZW5ndGggPCAxICYmIGUudGFyZ2V0LmVsZW1lbnRzWzNdLnZhbHVlLmxlbmd0aCA8IDEpe1xyXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29jaWFscy12YWxpZGF0aW9uJykuaW5uZXJUZXh0ID0gXCJZb3UgaGF2ZSB0byBhZGQgYXQgbGVhc3Qgb25lIHNvY2lhbCBhY2NvdW50IVwiO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC12YWxpZGF0aW9uJykuaW5uZXJUZXh0ID0gXCJcIjtcclxuXHJcblx0XHR2YXIgbnVtbWVycyA9IGRiLmNvbGxlY3Rpb24oXCJjaGFubmVsc1wiKS5kb2MoXCJnZW5lcmFsXCIpLmNvbGxlY3Rpb24oJ21lc3NhZ2VzJykud2hlcmUoJ3dhbGxldCcsICc9PScsIGZvcm0ud2FsbGV0KTtcclxuXHRcdG51bW1lcnMuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG5cdFx0XHRpZiAoIXF1ZXJ5U25hcHNob3QuZW1wdHkpIHtcclxuXHRcdFx0ICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xyXG5cdFx0XHQgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3YWxsZXQtdmFsaWRhdGlvbicpLmlubmVyVGV4dCA9IFwiVGhpcyB3YWxsZXQgSUQgYWxyZWFkeSBleGlzdHMgaW4gb3VyIGRhdGFiYXNlIVwiO1xyXG5cdFx0XHQgIH0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHQgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3YWxsZXQtdmFsaWRhdGlvbicpLmlubmVyVGV4dCA9IFwiXCI7XHJcblx0XHRcdCAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHQgIG1hbnVhbFJlZ2lzdGVyKGZvcm0pO1xyXG5cdFx0XHQgIHJlZGlyZWN0dG9Gb3JtKHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHQgIH0pO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0eyhmaWxsZWQgJiYgdXNlcikgJiYgPEhvbWUvPn1cclxuXHRcdHsoZmlsbGVkICYmICF1c2VyKSAmJiA8Rm9ybS8+fVxyXG5cclxuXHRcdHshZmlsbGVkICYmICg8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG14LWF1dG8gdGV4dC1jZW50ZXIgbXQtNVwiPlxyXG5cdFx0XHRcdDxIZWFkPlxyXG5cdFx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Jvb3Rzd2F0Y2guY29tLzQvZGFya2x5L2Jvb3RzdHJhcC5taW4uY3NzXCIvPlxyXG5cdFx0XHRcdDwvSGVhZD5cclxuXHRcdFx0PGgxPlJlZ2lzdGVyPC9oMT5cclxuXHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBjb2wtbWQtNiBteC1hdXRvIHRleHQtY2VudGVyXCI+XHJcblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ3YWxsZXRcIj5XYWxsZXQ8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIldhbGxldCBJRFwiIGlkPVwid2FsbGV0XCJcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIHdhbGxldDogZS50YXJnZXQudmFsdWUgfSl9IC8+XHJcblx0XHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5UaGlzIGlzIHB1YmxpYywgYXZhaWxhYmxlIGF0XHJcblx0XHRcdFx0XHRleHBsb3Jlci5oZWxpdW0uY29tXHJcblx0XHRcdFx0XHQ8L3NtYWxsPlxyXG5cdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdDxiIGlkPVwid2FsbGV0LXZhbGlkYXRpb25cIiBzdHlsZT17e2NvbG9yOicjZmYwMDAwJ319PjwvYj5cclxuXHRcdFx0XHQ8YnI+PC9icj5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ6PC9sYWJlbD5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG5cdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPk5vdGU6IERvIE5PVCB1c2UgeW91ciBvZmZpY2lhbCBIZWxpdW1cclxuXHRcdFx0XHRwYXNzd29yZCBoZXJlIVxyXG5cdFx0XHRcdDwvc21hbGw+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGIgaWQ9XCJwYXNzd29yZC12YWxpZGF0aW9uXCIgc3R5bGU9e3tjb2xvcjonI2ZmMDAwMCd9fT48L2I+XHJcblxyXG5cdFx0XHRcdDxiciAvPlxyXG5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInRlbGVncmFtXCI+VGVsZWdyYW06PC9sYWJlbD5cclxuXHRcdFx0XHQ8YnI+PC9icj5cclxuXHRcdFx0XHQ8c21hbGw+dC5tZS88L3NtYWxsPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiVGVsZWdyYW1cIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicm91bmRlZFwiXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCB0ZWxlZ3JhbTogZS50YXJnZXQudmFsdWUgfSl9IC8+XHJcblx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+SW5wdXQgdGVsZWdyYW0gdXNlciB0byBiZSBhYmxlIHRvIGNoYXQhXHJcblx0XHRcdFx0PC9zbWFsbD5cclxuXHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRzY1wiPlxyXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwiZGlzY29yZFwiPkRpc2NvcmQ6PC9sYWJlbD5cclxuXHRcdFx0XHQ8YnI+PC9icj5cclxuXHRcdFx0XHQ8c21hbGwgc3R5bGU9e3ttYXJnaW5MZWZ0OictNzBweCd9fT5kaXNjb3JkLmNvbS91c2Vycy88L3NtYWxsPlxyXG5cdFx0XHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRGlzY29yZFwiXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJyb3VuZGVkXCJcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIGRpc2NvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG5cdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdDxiIGlkPVwic29jaWFscy12YWxpZGF0aW9uXCIgc3R5bGU9e3tjb2xvcjonI2ZmMDAwMCd9fT48L2I+XHJcblxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGlkPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG10LTNcIj5cclxuXHRcdFx0XHRcdFN1Ym1pdFxyXG5cdFx0XHQgIDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj4pXHJcblx0fTwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xyXG5cclxuLy8gZnVuY3Rpb24gdmFsaWRhdGVVc2VyKHVzZXIpe1xyXG4vLyBcdHZhciBudW1tZXJzID0gZGIuY29sbGVjdGlvbihcImNoYW5uZWxzXCIpLmRvYyhcImdlbmVyYWxcIikuY29sbGVjdGlvbignbWVzc2FnZXMnKS53aGVyZSgnZW1haWwnLCAnPT0nLCB1c2VyLmVtYWlsKTtcclxuLy8gXHRudW1tZXJzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuLy8gXHRcdGlmICghcXVlcnlTbmFwc2hvdC5lbXB0eSkge1xyXG4vLyBcdFx0ICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xyXG4vLyBcdFx0XHRjb25zb2xlLmxvZygnZXhpc3RzJyk7XHJcbi8vIFx0XHR9KTtcclxuLy8gXHRcdH0gZWxzZSB7XHJcbi8vIFx0XHQgIGNvbnNvbGUubG9nKCdub3QgZXhpc3RzJylcclxuLy8gXHRcdCAgY29uc29sZS5sb2codXNlci5lbWFpbClcclxuLy8gXHRcdH1cclxuLy8gXHQgIH0pO1xyXG4vLyB9Il0sInNvdXJjZVJvb3QiOiIifQ==