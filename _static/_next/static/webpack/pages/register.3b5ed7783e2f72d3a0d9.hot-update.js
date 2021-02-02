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
      lineNumber: 62,
      columnNumber: 24
    }, _this), filled && !user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_form__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }, _this), !filled && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: "col-md-6 mx-auto text-center mt-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "https://bootswatch.com/4/darkly/bootstrap.min.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "Register"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 4
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "form-group col-md-6 mx-auto text-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "wallet",
          children: "Wallet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
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
          lineNumber: 72,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          className: "form-text text-muted",
          children: "This is public, available at explorer.helium.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
          id: "wallet-validation",
          style: {
            color: '#ff0000'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "password",
          children: "Password:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
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
          lineNumber: 82,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          className: "form-text text-muted",
          children: "Note: Do NOT use your official Helium password here!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
          id: "password-validation",
          style: {
            color: '#ff0000'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
          htmlFor: "telegram",
          children: "Telegram:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          children: "t.me/"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
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
          lineNumber: 96,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
          className: "form-text text-muted",
          children: "Input telegram user to be able to chat!"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "dsc",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
            htmlFor: "discord",
            children: "Discord:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("small", {
            style: {
              marginLeft: '-70px'
            },
            children: "discord.com/users/"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
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
            lineNumber: 106,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 5
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("b", {
            id: "socials-validation",
            style: {
              color: '#ff0000'
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 5
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 5
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
          type: "submit",
          id: "submit",
          className: "btn btn-primary mt-3",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 5
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 4
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 16
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiUmVnaXN0ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiZmlsbGVkIiwicmVkaXJlY3R0b0Zvcm0iLCJ3YWxsZXQiLCJwYXNzd29yZCIsInRlbGVncmFtIiwiZGlzY29yZCIsImZvcm0iLCJzZXRGb3JtIiwiYXV0aG9yaXphdGlvbiIsImZpcmViYXNlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImVsZW1lbnRzIiwidmFsdWUiLCJsZW5ndGgiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJUZXh0IiwibnVtbWVycyIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsIndoZXJlIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJlbXB0eSIsImZvckVhY2giLCJtYW51YWxSZWdpc3RlciIsImNvbG9yIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHNCLGtCQUVFQyxzREFBUSxFQUZWO0FBQUEsTUFFZkMsSUFGZTtBQUFBLE1BRVRDLE9BRlM7O0FBQUEsbUJBR1VGLHNEQUFRLENBQUMsS0FBRCxDQUhsQjtBQUFBLE1BR2hCRyxNQUhnQjtBQUFBLE1BR1JDLGNBSFE7O0FBQUEsbUJBSUVKLHNEQUFRLENBQUM7QUFDaENLLFVBQU0sRUFBRSxFQUR3QjtBQUVoQ0MsWUFBUSxFQUFFLEVBRnNCO0FBR2hDQyxZQUFRLEVBQUMsRUFIdUI7QUFJaENDLFdB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QUNyQixDQUFEO0FBQUEscUJBQU9OLE9BQU8saUNBQU1ELElBQU47QUFBWUQsdUJBQU8sRUFBRVEsQ0FBQyxDQUFDRSxNQUFGLENBQVNFO0FBQTlCLGlCQUFkO0FBQUE7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpBLGVBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQQSxlQVFBO0FBQUcsY0FBRSxFQUFDLG9CQUFOO0FBQTJCLGlCQUFLLEVBQUU7QUFBQ2dCLG1CQUFLLEVBQUM7QUFBUDtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQ0QsZUEyQ0M7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixZQUFFLEVBQUMsUUFBekI7QUFBa0MsbUJBQVMsRUFBQyxzQkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0NEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBNERBLENBL0dEOztHQUFNdkMsUTtVQUNVRSxxRDs7O0tBRFZGLFE7QUFnSFNBLHVFQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci4zYjVlZDc3ODNlMmY3MmQzYTBkOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYW51YWxSZWdpc3RlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvQXV0aC9BdXRoZW50aWNhdGlvbic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZGIsIGZpcmViYXNlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9maXJlYmFzZSc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4vZm9ybSc7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vaW5kZXgnO1xyXG5cclxuY29uc3QgUmVnaXN0ZXIgPSAoKSA9PiB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3RbIHVzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoKTtcclxuXHRjb25zdFtmaWxsZWQsIHJlZGlyZWN0dG9Gb3JtXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcblx0XHR3YWxsZXQ6ICcnLFxyXG5cdFx0cGFzc3dvcmQ6ICcnLFxyXG5cdFx0dGVsZWdyYW06JycsXHJcblx0XHRkaXNjb3JkOicnLFxyXG5cdH0pO1xyXG5cclxuXHRhdXRob3JpemF0aW9uKCk7XHJcblx0ZnVuY3Rpb24gYXV0aG9yaXphdGlvbigpe1xyXG5cdCAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG5cdFx0aWYodXNlcil7XHJcblx0XHQgIHNldFVzZXIodXNlcik7XHJcblx0XHQvLyAgIHZhbGlkYXRlVXNlcih1c2VyKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHQgIHNldFVzZXIobnVsbCk7XHJcblx0XHR9XHJcblx0ICB9KVxyXG5cdH07ICBcclxuXHJcblx0Y29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRpZihlLnRhcmdldC5lbGVtZW50c1sxXS52YWx1ZS5sZW5ndGggPCA2KXtcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC12YWxpZGF0aW9uJykuaW5uZXJUZXh0ID0gXCJZb3VyIHBhc3N3b3JkIG11c3QgdG8gYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIVwiO1xyXG5cdFx0fVxyXG5cdFx0aWYoZS50YXJnZXQuZWxlbWVudHNbMl0udmFsdWUubGVuZ3RoIDwgMSAmJiBlLnRhcmdldC5lbGVtZW50c1szXS52YWx1ZS5sZW5ndGggPCAxKXtcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvY2lhbHMtdmFsaWRhdGlvbicpLmlubmVyVGV4dCA9IFwiWW91IGhhdmUgdG8gYWRkIGF0IGxlYXN0IG9uZSBzb2NpYWwgYWNjb3VudCFcIjtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtdmFsaWRhdGlvbicpLmlubmVyVGV4dCA9IFwiXCI7XHJcblxyXG5cdFx0dmFyIG51bW1lcnMgPSBkYi5jb2xsZWN0aW9uKFwiY2hhbm5lbHNcIikuZG9jKFwiZ2VuZXJhbFwiKS5jb2xsZWN0aW9uKCdtZXNzYWdlcycpLndoZXJlKCd3YWxsZXQnLCAnPT0nLCBmb3JtLndhbGxldCk7XHJcblx0XHRudW1tZXJzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuXHRcdFx0aWYgKCFxdWVyeVNuYXBzaG90LmVtcHR5KSB7XHJcblx0XHRcdCAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcclxuXHRcdFx0ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FsbGV0LXZhbGlkYXRpb24nKS5pbm5lclRleHQgPSBcIlRoaXMgd2FsbGV0IElEIGFscmVhZHkgZXhpc3RzIGluIG91ciBkYXRhYmFzZSFcIjtcclxuXHRcdFx0ICB9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FsbGV0LXZhbGlkYXRpb24nKS5pbm5lclRleHQgPSBcIlwiO1xyXG5cdFx0XHQgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ICBtYW51YWxSZWdpc3Rlcihmb3JtKTtcclxuXHRcdFx0ICByZWRpcmVjdHRvRm9ybSh0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0ICB9KTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdj5cclxuXHRcdHsoZmlsbGVkICYmIHVzZXIpICYmIDxIb21lLz59XHJcblx0XHR7KGZpbGxlZCAmJiAhdXNlcikgJiYgPEZvcm0vPn1cclxuXHJcblx0XHR7IWZpbGxlZCAmJiAoPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBteC1hdXRvIHRleHQtY2VudGVyIG10LTVcIj5cclxuXHRcdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9ib290c3dhdGNoLmNvbS80L2RhcmtseS9ib290c3RyYXAubWluLmNzc1wiLz5cclxuXHRcdFx0XHQ8L0hlYWQ+XHJcblx0XHRcdDxoMT5SZWdpc3RlcjwvaDE+XHJcblx0XHRcdDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgY29sLW1kLTYgbXgtYXV0byB0ZXh0LWNlbnRlclwiPlxyXG5cdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwid2FsbGV0XCI+V2FsbGV0PC9sYWJlbD5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJXYWxsZXQgSURcIiBpZD1cIndhbGxldFwiXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCB3YWxsZXQ6IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG5cdFx0XHRcdFx0PHNtYWxsIGNsYXNzTmFtZT1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+VGhpcyBpcyBwdWJsaWMsIGF2YWlsYWJsZSBhdFxyXG5cdFx0XHRcdFx0ZXhwbG9yZXIuaGVsaXVtLmNvbVxyXG5cdFx0XHRcdFx0PC9zbWFsbD5cclxuXHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHQ8YiBpZD1cIndhbGxldC12YWxpZGF0aW9uXCIgc3R5bGU9e3tjb2xvcjonI2ZmMDAwMCd9fT48L2I+XHJcblx0XHRcdFx0PGJyPjwvYnI+XHJcblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkOjwvbGFiZWw+XHJcblx0XHRcdFx0PGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuXHRcdFx0XHRcdG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cclxuXHRcdFx0XHQ8c21hbGwgY2xhc3NOYW1lPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5Ob3RlOiBEbyBOT1QgdXNlIHlvdXIgb2ZmaWNpYWwgSGVsaXVtXHJcblx0XHRcdFx0cGFzc3dvcmQgaGVyZSFcclxuXHRcdFx0XHQ8L3NtYWxsPlxyXG5cdFx0XHRcdDxiciAvPlxyXG5cdFx0XHRcdDxiIGlkPVwicGFzc3dvcmQtdmFsaWRhdGlvblwiIHN0eWxlPXt7Y29sb3I6JyNmZjAwMDAnfX0+PC9iPlxyXG5cclxuXHRcdFx0XHQ8YnIgLz5cclxuXHJcblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ0ZWxlZ3JhbVwiPlRlbGVncmFtOjwvbGFiZWw+XHJcblx0XHRcdFx0PGJyPjwvYnI+XHJcblx0XHRcdFx0PHNtYWxsPnQubWUvPC9zbWFsbD5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIlRlbGVncmFtXCJcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInJvdW5kZWRcIlxyXG5cdFx0XHRcdFx0b25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgdGVsZWdyYW06IGUudGFyZ2V0LnZhbHVlIH0pfSAvPlxyXG5cdFx0XHRcdDxzbWFsbCBjbGFzc05hbWU9XCJmb3JtLXRleHQgdGV4dC1tdXRlZFwiPklucHV0IHRlbGVncmFtIHVzZXIgdG8gYmUgYWJsZSB0byBjaGF0IVxyXG5cdFx0XHRcdDwvc21hbGw+XHJcblx0XHRcdFx0PGJyIC8+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkc2NcIj5cclxuXHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cImRpc2NvcmRcIj5EaXNjb3JkOjwvbGFiZWw+XHJcblx0XHRcdFx0PGJyPjwvYnI+XHJcblx0XHRcdFx0PHNtYWxsIHN0eWxlPXt7bWFyZ2luTGVmdDonLTcwcHgnfX0+ZGlzY29yZC5jb20vdXNlcnMvPC9zbWFsbD5cclxuXHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkRpc2NvcmRcIlxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicm91bmRlZFwiXHJcblx0XHRcdFx0XHRvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBkaXNjb3JkOiBlLnRhcmdldC52YWx1ZSB9KX0gLz5cclxuXHRcdFx0XHQ8YnIgLz5cclxuXHRcdFx0XHQ8YiBpZD1cInNvY2lhbHMtdmFsaWRhdGlvblwiIHN0eWxlPXt7Y29sb3I6JyNmZjAwMDAnfX0+PC9iPlxyXG5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBpZD1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtdC0zXCI+XHJcblx0XHRcdFx0XHRTdWJtaXRcclxuXHRcdFx0ICA8L2J1dHRvbj5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9kaXY+KVxyXG5cdH08L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcclxuXHJcbi8vIGZ1bmN0aW9uIHZhbGlkYXRlVXNlcih1c2VyKXtcclxuLy8gXHR2YXIgbnVtbWVycyA9IGRiLmNvbGxlY3Rpb24oXCJjaGFubmVsc1wiKS5kb2MoXCJnZW5lcmFsXCIpLmNvbGxlY3Rpb24oJ21lc3NhZ2VzJykud2hlcmUoJ2VtYWlsJywgJz09JywgdXNlci5lbWFpbCk7XHJcbi8vIFx0bnVtbWVycy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbi8vIFx0XHRpZiAoIXF1ZXJ5U25hcHNob3QuZW1wdHkpIHtcclxuLy8gXHRcdCAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcclxuLy8gXHRcdFx0Y29uc29sZS5sb2coJ2V4aXN0cycpO1xyXG4vLyBcdFx0fSk7XHJcbi8vIFx0XHR9IGVsc2Uge1xyXG4vLyBcdFx0ICBjb25zb2xlLmxvZygnbm90IGV4aXN0cycpXHJcbi8vIFx0XHQgIGNvbnNvbGUubG9nKHVzZXIuZW1haWwpXHJcbi8vIFx0XHR9XHJcbi8vIFx0ICB9KTtcclxuLy8gfSJdLCJzb3VyY2VSb290IjoiIn0=