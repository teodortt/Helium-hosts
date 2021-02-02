webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/form.js":
/*!***********************!*\
  !*** ./pages/form.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/firebase */ "./components/firebase.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");


var _jsxFileName = "C:\\apps\\helium_app\\pages\\form.js",
    _this = undefined,
    _s = $RefreshSig$();






var Form = function Form() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      val = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      disabled = _useState3[0],
      setDisabled = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      gmail = _useState4[0],
      setGmail = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    telegram: '',
    discord: ''
  }),
      socials = _useState5[0],
      setSocials = _useState5[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  authorization();

  function authorization() {
    _components_firebase__WEBPACK_IMPORTED_MODULE_3__["firebase"].auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
        userGmail(user);
      } else {
        setUser(null);
        router.push('/');
      }
    });
  }

  ;

  function userGmail(user) {
    var nummers = _components_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection("channels").doc("general").collection('messages').where('user', '==', user.uid);
    nummers.get().then(function (querySnapshot) {
      if (!querySnapshot.empty) {
        querySnapshot.forEach(function (doc) {
          console.log('exists');
          setGmail(false);
        });
      } else {
        console.log('not exists');
        setGmail(true);
      }
    });
  }

  var findIt = function findIt(e) {
    var nummers = _components_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection("channels").doc("general").collection('messages').where('wallet', '==', e);
    nummers.get().then(function (querySnapshot) {
      if (!querySnapshot.empty) {
        querySnapshot.forEach(function (doc) {
          document.getElementById("submit").disabled = true;
          document.getElementById("wallet-validation").style.color = "#ff0000";
          document.getElementById('wallet-validation').innerText = "This wallet ID already exists in our database!"; // console.log(doc.id, ' => ', doc.data());
        });
      } else {
        console.log("false"); // setDisabled(false);

        document.getElementById('wallet-validation').innerText = "";
        document.getElementById("submit").disabled = false;
      }
    });
  };

  function search(e) {
    setValue(e);
    findIt(e);
  }

  return gmail ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-md-6 mx-auto text-center pt100",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Submit your Helium account info"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Please add at least one social account."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 7
      }, _this), user.uid && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: function onSubmit(event) {
          event.preventDefault();
          var walletID = event.target.elements[0].value;
          var telegram = event.target.elements[1].value;
          var discord = event.target.elements[2].value;
          _components_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('channels').doc('general').collection('messages').add({
            wallet: walletID,
            telegram: telegram,
            discord: discord,
            user: user.uid,
            date: new Date()
          });
          event.target.reset();
          router.push('/'); /////////////////////////
          // 
        },
        className: "mt-5 p-2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: function onChange(e) {
            return search(e.target.value);
          },
          value: val,
          className: "form-control mb-3",
          id: "token",
          placeholder: "Wallet ID"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          id: "wallet-validation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: function onChange(e) {
            return setSocials({
              telegram: e.target.value,
              discord: socials.discord
            });
          },
          value: socials.telegram,
          className: "form-control mb-3",
          id: "telegram",
          placeholder: "Telegram"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          onChange: function onChange(e) {
            return setSocials({
              telegram: socials.telegram,
              discord: e.target.value
            });
          },
          value: socials.discord,
          className: "form-control mb-3",
          id: "discord",
          placeholder: "Discord"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "link",
            target: "_blank",
            rel: "noreferrer",
            href: "https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-",
            children: "Where to find my id"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "submit",
          className: "btn btn-success",
          type: "submit",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 20
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        className: "text-center",
        style: {
          paddingTop: '150px'
        },
        children: "Your helium profile is already sumbitted!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 5
  }, _this);
};

_s(Form, "NZyAheopFhwh48zuSMnFI+xYJcE=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Form;
/* harmony default export */ __webpack_exports__["default"] = (Form);

var _c;

$RefreshReg$(_c, "Form");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtIiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsInZhbCIsInNldFZhbHVlIiwiZGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsImdtYWlsIiwic2V0R21haWwiLCJ0ZWxlZ3JhbSIsImRpc2NvcmQiLCJzb2NpYWxzIiwic2V0U29jaWFscyIsInJvdXRlciIsInVzZVJvdXRlciIsImF1dGhvcml6YXRpb24iLCJmaXJlYmFzZSIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyR21haWwiLCJwdXNoIiwibnVtbWVycyIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsIndoZXJlIiwidWlkIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJlbXB0eSIsImZvckVhY2giLCJjb25zb2xlIiwibG9nIiwiZmluZEl0IiwiZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImNvbG9yIiwiaW5uZXJUZXh0Iiwic2VhcmNoIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndhbGxldElEIiwidGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsImFkZCIsIndhbGxldCIsImRhdGUiLCJEYXRlIiwicmVzZXQiLCJwYWRkaW5nVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUNTQyxzREFBUSxDQUFDLElBQUQsQ0FEakI7QUFBQSxNQUNUQyxJQURTO0FBQUEsTUFDSEMsT0FERzs7QUFBQSxtQkFFTUYsc0RBQVEsQ0FBQyxFQUFELENBRmQ7QUFBQSxNQUVYRyxHQUZXO0FBQUEsTUFFTkMsUUFGTTs7QUFBQSxtQkFHY0osc0RBQVEsQ0FBQyxLQUFELENBSHRCO0FBQUEsTUFHWEssUUFIVztBQUFBLE1BR0RD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RUFBQyxNQUFiO0FBQW9CLGtCQUFNLEVBQUMsUUFBM0I7QUFBb0MsZUFBRyxFQUFDLFlBQXhDO0FBQXFELGdCQUFJLEVBQUMscUdBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvQlcsZUFtQ1g7QUFBUSxZQUFFLEVBQUMsUUFBWDtBQUFvQixtQkFBUyxFQUFDLGlCQUE5QjtBQUFnRCxjQUFJLEVBQUMsUUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbkNXO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEVSxnQkErQ1Y7QUFBQSwyQkFDRSxxRUFBQywwREFBRDtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQyxhQUFkO0FBQTRCLGFBQUssRUFBRTtBQUFDMkMsb0JBQVUsRUFBQztBQUFaLFNBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0EvQ0Y7QUFxREQsQ0F4SEQ7O0dBQU10RCxJO1VBVVdlLHFEOzs7S0FWWGYsSTtBQXlIU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuM2U4Njc3ZjFiMDQ0N2E5YzQ2NGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGRiLCBmaXJlYmFzZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZmlyZWJhc2UnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmNvbnN0IEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgWyB1c2VyLCBzZXRVc2VyIF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdFt2YWwsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdFtkaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0W2dtYWlsLCBzZXRHbWFpbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Rbc29jaWFscywgc2V0U29jaWFsc10gPSB1c2VTdGF0ZSh7XHJcbiAgICB0ZWxlZ3JhbTonJyxcclxuICAgIGRpc2NvcmQ6JydcclxuICB9KTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGF1dGhvcml6YXRpb24oKTtcclxuICBmdW5jdGlvbiBhdXRob3JpemF0aW9uKCl7XHJcbiAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICAgIGlmKHVzZXIpe1xyXG4gICAgICAgIHNldFVzZXIodXNlcik7XHJcbiAgICAgICAgdXNlckdtYWlsKHVzZXIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiB1c2VyR21haWwodXNlcil7XHJcbiAgICB2YXIgbnVtbWVycyA9IGRiLmNvbGxlY3Rpb24oXCJjaGFubmVsc1wiKS5kb2MoXCJnZW5lcmFsXCIpLmNvbGxlY3Rpb24oJ21lc3NhZ2VzJykud2hlcmUoJ3VzZXInLCAnPT0nLCB1c2VyLnVpZCk7XHJcbiAgICBudW1tZXJzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgaWYgKCFxdWVyeVNuYXBzaG90LmVtcHR5KSB7XHJcbiAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZXhpc3RzJyk7XHJcbiAgICAgICAgc2V0R21haWwoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbm90IGV4aXN0cycpXHJcbiAgICAgICAgc2V0R21haWwodHJ1ZSlcclxuICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGZpbmRJdCA9IChlKSA9PntcclxuICAgIHZhciBudW1tZXJzID0gZGIuY29sbGVjdGlvbihcImNoYW5uZWxzXCIpLmRvYyhcImdlbmVyYWxcIikuY29sbGVjdGlvbignbWVzc2FnZXMnKS53aGVyZSgnd2FsbGV0JywgJz09JywgZSk7XHJcbiAgICBudW1tZXJzLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgaWYgKCFxdWVyeVNuYXBzaG90LmVtcHR5KSB7XHJcblxyXG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIikuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2FsbGV0LXZhbGlkYXRpb25cIikuc3R5bGUuY29sb3IgPSBcIiNmZjAwMDBcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FsbGV0LXZhbGlkYXRpb24nKS5pbm5lclRleHQgPSBcIlRoaXMgd2FsbGV0IElEIGFscmVhZHkgZXhpc3RzIGluIG91ciBkYXRhYmFzZSFcIjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkb2MuaWQsICcgPT4gJywgZG9jLmRhdGEoKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJmYWxzZVwiKVxyXG4gICAgICAgIC8vIHNldERpc2FibGVkKGZhbHNlKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2FsbGV0LXZhbGlkYXRpb24nKS5pbm5lclRleHQgPSBcIlwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNlYXJjaChlKXtcclxuICAgIHNldFZhbHVlKGUpO1xyXG4gICAgZmluZEl0KGUpO1xyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiBnbWFpbCA/IChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG14LWF1dG8gdGV4dC1jZW50ZXIgcHQxMDBcIj5cclxuICAgICAgPGgzPlN1Ym1pdCB5b3VyIEhlbGl1bSBhY2NvdW50IGluZm88L2gzPlxyXG4gICAgICA8cD5QbGVhc2UgYWRkIGF0IGxlYXN0IG9uZSBzb2NpYWwgYWNjb3VudC48L3A+XHJcbiAgICAgIFxyXG4gICAgICB7dXNlci51aWQgJiYgPGZvcm1cclxuICAgICAgICBvblN1Ym1pdD17XHJcbiAgICAgICAgICBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdhbGxldElEID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCB0ZWxlZ3JhbSA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1sxXS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgZGlzY29yZCA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1syXS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oJ2NoYW5uZWxzJylcclxuICAgICAgICAgICAgICAuZG9jKCdnZW5lcmFsJylcclxuICAgICAgICAgICAgICAuY29sbGVjdGlvbignbWVzc2FnZXMnKVxyXG4gICAgICAgICAgICAgIC5hZGQoe1xyXG4gICAgICAgICAgICAgICAgd2FsbGV0OiB3YWxsZXRJRCxcclxuICAgICAgICAgICAgICAgIHRlbGVncmFtOiB0ZWxlZ3JhbSxcclxuICAgICAgICAgICAgICAgIGRpc2NvcmQ6IGRpc2NvcmQsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiB1c2VyLnVpZCxcclxuICAgICAgICAgICAgICAgIGRhdGU6IG5ldyBEYXRlKCksXHJcblxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQucmVzZXQoKTtcclxuICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICAgICAgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgICAgICAvLyBcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibXQtNSBwLTJcIj5cclxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2U9PnNlYXJjaChlLnRhcmdldC52YWx1ZSl9IHZhbHVlPXt2YWx9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0zXCIgaWQ9XCJ0b2tlblwiIHBsYWNlaG9sZGVyPVwiV2FsbGV0IElEXCIgLz5cclxuICAgICAgICA8YiBpZD1cIndhbGxldC12YWxpZGF0aW9uXCI+PC9iPlxyXG5cclxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKT0+c2V0U29jaWFscyh7dGVsZWdyYW06IGUudGFyZ2V0LnZhbHVlLCBkaXNjb3JkOnNvY2lhbHMuZGlzY29yZH0pfSB2YWx1ZT17c29jaWFscy50ZWxlZ3JhbX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTNcIiBpZD1cInRlbGVncmFtXCIgcGxhY2Vob2xkZXI9XCJUZWxlZ3JhbVwiIC8+XHJcbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSk9PnNldFNvY2lhbHMoe3RlbGVncmFtOiBzb2NpYWxzLnRlbGVncmFtLCBkaXNjb3JkOiBlLnRhcmdldC52YWx1ZX0pfSB2YWx1ZT17c29jaWFscy5kaXNjb3JkfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItM1wiIGlkPVwiZGlzY29yZFwiIHBsYWNlaG9sZGVyPVwiRGlzY29yZFwiIC8+XHJcblxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9zdXBwb3J0LmRpc2NvcmQuY29tL2hjL2VuLXVzL2FydGljbGVzLzIwNjM0NjQ5OC1XaGVyZS1jYW4tSS1maW5kLW15LVVzZXItU2VydmVyLU1lc3NhZ2UtSUQtXCI+V2hlcmUgdG8gZmluZCBteSBpZDwvYT5cclxuICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgIDxidXR0b24gaWQ9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT59XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApIDogKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBzdHlsZT17e3BhZGRpbmdUb3A6JzE1MHB4J319PllvdXIgaGVsaXVtIHByb2ZpbGUgaXMgYWxyZWFkeSBzdW1iaXR0ZWQhPC9oMz5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9