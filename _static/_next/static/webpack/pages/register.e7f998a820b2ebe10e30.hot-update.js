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
      gmail = _useState3[0],
      setGmail = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    telegram: '',
    discord: ''
  }),
      socials = _useState4[0],
      setSocials = _useState4[1];

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
          // console.log('exists');
          setGmail(false);
        });
      } else {
        // console.log('not exists')
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
        lineNumber: 75,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Please add at least one social account."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
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
          lineNumber: 103,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          id: "wallet-validation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
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
          lineNumber: 106,
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
          lineNumber: 107,
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
            lineNumber: 110,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "submit",
          className: "btn btn-success",
          type: "submit",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 20
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 73,
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
        lineNumber: 121,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 5
  }, _this);
};

_s(Form, "TS1K/c6lwM/xuifWBa2GzQsCyNc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtIiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsInZhbCIsInNldFZhbHVlIiwiZ21haWwiLCJzZXRHbWFpbCIsInRlbGVncmFtIiwiZGlzY29yZCIsInNvY2lhbHMiLCJzZXRTb2NpYWxzIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXV0aG9yaXphdGlvbiIsImZpcmViYXNlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXJHbWFpbCIsInB1c2giLCJudW1tZXJzIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwid2hlcmUiLCJ1aWQiLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImVtcHR5IiwiZm9yRWFjaCIsImZpbmRJdCIsImUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGlzYWJsZWQiLCJzdHlsZSIsImNvbG9yIiwiaW5uZXJUZXh0IiwiY29uc29sZSIsImxvZyIsInNlYXJjaCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ3YWxsZXRJRCIsInRhcmdldCIsImVsZW1lbnRzIiwidmFsdWUiLCJhZGQiLCJ3YWxsZXQiLCJkYXRlIiwiRGF0ZSIsInJlc2V0IiwicGFkZGluZ1RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFBQSxrQkFDU0Msc0RBQVEsQ0FBQyxJQUFELENBRGpCO0FBQUEsTUFDVEMsSUFEUztBQUFBLE1BQ0hDLE9BREc7O0FBQUEsbUJBRU1GLHNEQUFRLENBQUMsRUFBRCxDQUZkO0FBQUEsTUFFWEcsR0FGVztBQUFBLE1BRU5DLFFBRk07O0FBQUEsbUJBR1FKLHNEQUFRLENBQUMsS0FBRCxDQUhoQjtBQUFBLE1BR1hLLEtBSFc7QUFBQSxNQUdKQyxRQUhJOztBQUFBLG1C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bUNYO0FBQVEsWUFBRSxFQUFDLFFBQVg7QUFBb0IsbUJBQVMsRUFBQyxpQkFBOUI7QUFBZ0QsY0FBSSxFQUFDLFFBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5DVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFUsZ0JBK0NWO0FBQUEsMkJBQ0UscUVBQUMsMERBQUQ7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUMsYUFBZDtBQUE0QixhQUFLLEVBQUU7QUFBQzRDLG9CQUFVLEVBQUM7QUFBWixTQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBL0NGO0FBcURELENBdkhEOztHQUFNckQsSTtVQVNXYSxxRDs7O0tBVFhiLEk7QUF3SFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLmU3Zjk5OGE4MjBiMmViZTEwZTMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBkYiwgZmlyZWJhc2UgfSBmcm9tICcuLi9jb21wb25lbnRzL2ZpcmViYXNlJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcblxyXG5jb25zdCBGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFsgdXNlciwgc2V0VXNlciBdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3RbdmFsLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3RbZ21haWwsIHNldEdtYWlsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdFtzb2NpYWxzLCBzZXRTb2NpYWxzXSA9IHVzZVN0YXRlKHtcclxuICAgIHRlbGVncmFtOicnLFxyXG4gICAgZGlzY29yZDonJ1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgYXV0aG9yaXphdGlvbigpO1xyXG4gIGZ1bmN0aW9uIGF1dGhvcml6YXRpb24oKXtcclxuICAgIGZpcmViYXNlLmF1dGgoKS5vbkF1dGhTdGF0ZUNoYW5nZWQoKHVzZXIpID0+IHtcclxuICAgICAgaWYodXNlcil7XHJcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcclxuICAgICAgICB1c2VyR21haWwodXNlcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VXNlcihudWxsKTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIHVzZXJHbWFpbCh1c2VyKXtcclxuICAgIHZhciBudW1tZXJzID0gZGIuY29sbGVjdGlvbihcImNoYW5uZWxzXCIpLmRvYyhcImdlbmVyYWxcIikuY29sbGVjdGlvbignbWVzc2FnZXMnKS53aGVyZSgndXNlcicsICc9PScsIHVzZXIudWlkKTtcclxuICAgIG51bW1lcnMuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICBpZiAoIXF1ZXJ5U25hcHNob3QuZW1wdHkpIHtcclxuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdleGlzdHMnKTtcclxuICAgICAgICBzZXRHbWFpbChmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdub3QgZXhpc3RzJylcclxuICAgICAgICBzZXRHbWFpbCh0cnVlKVxyXG4gICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZmluZEl0ID0gKGUpID0+e1xyXG4gICAgdmFyIG51bW1lcnMgPSBkYi5jb2xsZWN0aW9uKFwiY2hhbm5lbHNcIikuZG9jKFwiZ2VuZXJhbFwiKS5jb2xsZWN0aW9uKCdtZXNzYWdlcycpLndoZXJlKCd3YWxsZXQnLCAnPT0nLCBlKTtcclxuICAgIG51bW1lcnMuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICBpZiAoIXF1ZXJ5U25hcHNob3QuZW1wdHkpIHtcclxuXHJcbiAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3YWxsZXQtdmFsaWRhdGlvblwiKS5zdHlsZS5jb2xvciA9IFwiI2ZmMDAwMFwiO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3YWxsZXQtdmFsaWRhdGlvbicpLmlubmVyVGV4dCA9IFwiVGhpcyB3YWxsZXQgSUQgYWxyZWFkeSBleGlzdHMgaW4gb3VyIGRhdGFiYXNlIVwiO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRvYy5pZCwgJyA9PiAnLCBkb2MuZGF0YSgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImZhbHNlXCIpXHJcbiAgICAgICAgLy8gc2V0RGlzYWJsZWQoZmFsc2UpO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3YWxsZXQtdmFsaWRhdGlvbicpLmlubmVyVGV4dCA9IFwiXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIikuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2VhcmNoKGUpe1xyXG4gICAgc2V0VmFsdWUoZSk7XHJcbiAgICBmaW5kSXQoZSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIGdtYWlsID8gKFxyXG4gICAgPExheW91dD5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbXgtYXV0byB0ZXh0LWNlbnRlciBwdDEwMFwiPlxyXG4gICAgICA8aDM+U3VibWl0IHlvdXIgSGVsaXVtIGFjY291bnQgaW5mbzwvaDM+XHJcbiAgICAgIDxwPlBsZWFzZSBhZGQgYXQgbGVhc3Qgb25lIHNvY2lhbCBhY2NvdW50LjwvcD5cclxuICAgICAgXHJcbiAgICAgIHt1c2VyLnVpZCAmJiA8Zm9ybVxyXG4gICAgICAgIG9uU3VibWl0PXtcclxuICAgICAgICAgIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc3Qgd2FsbGV0SUQgPSBldmVudC50YXJnZXQuZWxlbWVudHNbMF0udmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbGVncmFtID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzWzFdLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBkaXNjb3JkID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzWzJdLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgZGIuY29sbGVjdGlvbignY2hhbm5lbHMnKVxyXG4gICAgICAgICAgICAgIC5kb2MoJ2dlbmVyYWwnKVxyXG4gICAgICAgICAgICAgIC5jb2xsZWN0aW9uKCdtZXNzYWdlcycpXHJcbiAgICAgICAgICAgICAgLmFkZCh7XHJcbiAgICAgICAgICAgICAgICB3YWxsZXQ6IHdhbGxldElELFxyXG4gICAgICAgICAgICAgICAgdGVsZWdyYW06IHRlbGVncmFtLFxyXG4gICAgICAgICAgICAgICAgZGlzY29yZDogZGlzY29yZCxcclxuICAgICAgICAgICAgICAgIHVzZXI6IHVzZXIudWlkLFxyXG4gICAgICAgICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuXHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xyXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbiAgICAgICAgICAgIC8vIFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICBjbGFzc05hbWU9XCJtdC01IHAtMlwiPlxyXG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZT0+c2VhcmNoKGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e3ZhbH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTNcIiBpZD1cInRva2VuXCIgcGxhY2Vob2xkZXI9XCJXYWxsZXQgSURcIiAvPlxyXG4gICAgICAgIDxiIGlkPVwid2FsbGV0LXZhbGlkYXRpb25cIj48L2I+XHJcblxyXG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5zZXRTb2NpYWxzKHt0ZWxlZ3JhbTogZS50YXJnZXQudmFsdWUsIGRpc2NvcmQ6c29jaWFscy5kaXNjb3JkfSl9IHZhbHVlPXtzb2NpYWxzLnRlbGVncmFtfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItM1wiIGlkPVwidGVsZWdyYW1cIiBwbGFjZWhvbGRlcj1cIlRlbGVncmFtXCIgLz5cclxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKT0+c2V0U29jaWFscyh7dGVsZWdyYW06IHNvY2lhbHMudGVsZWdyYW0sIGRpc2NvcmQ6IGUudGFyZ2V0LnZhbHVlfSl9IHZhbHVlPXtzb2NpYWxzLmRpc2NvcmR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0zXCIgaWQ9XCJkaXNjb3JkXCIgcGxhY2Vob2xkZXI9XCJEaXNjb3JkXCIgLz5cclxuXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL3N1cHBvcnQuZGlzY29yZC5jb20vaGMvZW4tdXMvYXJ0aWNsZXMvMjA2MzQ2NDk4LVdoZXJlLWNhbi1JLWZpbmQtbXktVXNlci1TZXJ2ZXItTWVzc2FnZS1JRC1cIj5XaGVyZSB0byBmaW5kIG15IGlkPC9hPlxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPn1cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICkgOiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7cGFkZGluZ1RvcDonMTUwcHgnfX0+WW91ciBoZWxpdW0gcHJvZmlsZSBpcyBhbHJlYWR5IHN1bWJpdHRlZCE8L2gzPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=