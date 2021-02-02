webpackHotUpdate_N_E("pages/form",{

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

  function submitData(e) {
    e.preventDefault();

    if (e.target.elements[1].value.length < 1 && e.target.elements[2].value.length < 1) {
      alert('Please add at least one social account!');
    } else {
      var walletID = e.target.elements[0].value;
      var telegram = e.target.elements[1].value;
      var discord = e.target.elements[2].value;
      _components_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection('channels').doc('general').collection('messages').add({
        wallet: walletID,
        telegram: telegram,
        discord: discord,
        user: user.uid,
        date: new Date()
      });
      e.target.reset();
      router.push('/');
    }
  }

  return gmail ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-md-6 mx-auto text-center pt100",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Submit your Helium account info"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Please add at least one social account."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 7
      }, _this), user.uid && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: submitData,
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
          lineNumber: 106,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          id: "wallet-validation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
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
          lineNumber: 109,
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
          lineNumber: 110,
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
            lineNumber: 113,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "submit",
          className: "btn btn-success",
          type: "submit",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 20
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 98,
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
        lineNumber: 124,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 122,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtIiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsInZhbCIsInNldFZhbHVlIiwiZ21haWwiLCJzZXRHbWFpbCIsInRlbGVncmFtIiwiZGlzY29yZCIsInNvY2lhbHMiLCJzZXRTb2NpYWxzIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXV0aG9yaXphdGlvbiIsImZpcmViYXNlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInVzZXJHbWFpbCIsInB1c2giLCJudW1tZXJzIiwiZGIiLCJjb2xsZWN0aW9uIiwiZG9jIiwid2hlcmUiLCJ1aWQiLCJnZXQiLCJ0aGVuIiwicXVlcnlTbmFwc2hvdCIsImVtcHR5IiwiZm9yRWFjaCIsImZpbmRJdCIsImUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGlzYWJsZWQiLCJzdHlsZSIsImNvbG9yIiwiaW5uZXJUZXh0IiwiY29uc29sZSIsImxvZyIsInNlYXJjaCIsInN1Ym1pdERhdGEiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImVsZW1lbnRzIiwidmFsdWUiLCJsZW5ndGgiLCJhbGVydCIsIndhbGxldElEIiwiYWRkIiwid2FsbGV0IiwiZGF0ZSIsIkRhdGUiLCJyZXNldCIsInBhZGRpbmdUb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsSUFBRCxDQURqQjtBQUFBLE1BQ1RDLElBRFM7QUFBQSxNQUNIQyxPQURHOztBQUFBLG1CQUVNRixzREFBUSxDQUFDLEVBQUQsQ0FGZDtBQUFBLE1BRVhHLEdBRlc7QUFBQSxNQUVOQyxRQUZNOztBQUFBLG1CQUdRSixzREFBUSxDQUFDLEtBQUQsQ0FIaEI7QUFBQSxNQUdYSyxLQUhXO0FB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SSxZQUFFLEVBQUMsU0FBbEo7QUFBNEoscUJBQVcsRUFBQztBQUF4SztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVBXLGVBU1g7QUFBQSxpQ0FDRTtBQUFHLHFCQUFTLEVBQUMsTUFBYjtBQUFvQixrQkFBTSxFQUFDLFFBQTNCO0FBQW9DLGVBQUcsRUFBQyxZQUF4QztBQUFxRCxnQkFBSSxFQUFDLHFHQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVFcsZUFhWDtBQUFRLFlBQUUsRUFBQyxRQUFYO0FBQW9CLG1CQUFTLEVBQUMsaUJBQTlCO0FBQWdELGNBQUksRUFBQyxRQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRFUsZ0JBeUJWO0FBQUEsMkJBQ0UscUVBQUMsMERBQUQ7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUMsYUFBZDtBQUE0QixhQUFLLEVBQUU7QUFBQzhDLG9CQUFVLEVBQUM7QUFBWixTQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBekJGO0FBK0JELENBMUhEOztHQUFNdkQsSTtVQVNXYSxxRDs7O0tBVFhiLEk7QUEySFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Zvcm0uOTdiMTRkYWFmYTczYTE0ZDMxMTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGRiLCBmaXJlYmFzZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvZmlyZWJhc2UnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmNvbnN0IEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgWyB1c2VyLCBzZXRVc2VyIF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdFt2YWwsIHNldFZhbHVlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdFtnbWFpbCwgc2V0R21haWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0W3NvY2lhbHMsIHNldFNvY2lhbHNdID0gdXNlU3RhdGUoe1xyXG4gICAgdGVsZWdyYW06JycsXHJcbiAgICBkaXNjb3JkOicnXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBhdXRob3JpemF0aW9uKCk7XHJcbiAgZnVuY3Rpb24gYXV0aG9yaXphdGlvbigpe1xyXG4gICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICBpZih1c2VyKXtcclxuICAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICAgIHVzZXJHbWFpbCh1c2VyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gdXNlckdtYWlsKHVzZXIpe1xyXG4gICAgdmFyIG51bW1lcnMgPSBkYi5jb2xsZWN0aW9uKFwiY2hhbm5lbHNcIikuZG9jKFwiZ2VuZXJhbFwiKS5jb2xsZWN0aW9uKCdtZXNzYWdlcycpLndoZXJlKCd1c2VyJywgJz09JywgdXNlci51aWQpO1xyXG4gICAgbnVtbWVycy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgIGlmICghcXVlcnlTbmFwc2hvdC5lbXB0eSkge1xyXG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2V4aXN0cycpO1xyXG4gICAgICAgIHNldEdtYWlsKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ25vdCBleGlzdHMnKVxyXG4gICAgICAgIHNldEdtYWlsKHRydWUpXHJcbiAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaW5kSXQgPSAoZSkgPT57XHJcbiAgICB2YXIgbnVtbWVycyA9IGRiLmNvbGxlY3Rpb24oXCJjaGFubmVsc1wiKS5kb2MoXCJnZW5lcmFsXCIpLmNvbGxlY3Rpb24oJ21lc3NhZ2VzJykud2hlcmUoJ3dhbGxldCcsICc9PScsIGUpO1xyXG4gICAgbnVtbWVycy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgIGlmICghcXVlcnlTbmFwc2hvdC5lbXB0eSkge1xyXG5cclxuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhbGxldC12YWxpZGF0aW9uXCIpLnN0eWxlLmNvbG9yID0gXCIjZmYwMDAwXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhbGxldC12YWxpZGF0aW9uJykuaW5uZXJUZXh0ID0gXCJUaGlzIHdhbGxldCBJRCBhbHJlYWR5IGV4aXN0cyBpbiBvdXIgZGF0YWJhc2UhXCI7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZG9jLmlkLCAnID0+ICcsIGRvYy5kYXRhKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VcIilcclxuICAgICAgICAvLyBzZXREaXNhYmxlZChmYWxzZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhbGxldC12YWxpZGF0aW9uJykuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZWFyY2goZSl7XHJcbiAgICBzZXRWYWx1ZShlKTtcclxuICAgIGZpbmRJdChlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN1Ym1pdERhdGEoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZihlLnRhcmdldC5lbGVtZW50c1sxXS52YWx1ZS5sZW5ndGggPCAxICYmIGUudGFyZ2V0LmVsZW1lbnRzWzJdLnZhbHVlLmxlbmd0aCA8IDEpe1xyXG4gICAgICBhbGVydCgnUGxlYXNlIGFkZCBhdCBsZWFzdCBvbmUgc29jaWFsIGFjY291bnQhJyk7XHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgY29uc3Qgd2FsbGV0SUQgPSBlLnRhcmdldC5lbGVtZW50c1swXS52YWx1ZTtcclxuICAgICAgY29uc3QgdGVsZWdyYW0gPSBlLnRhcmdldC5lbGVtZW50c1sxXS52YWx1ZTtcclxuICAgICAgY29uc3QgZGlzY29yZCA9IGUudGFyZ2V0LmVsZW1lbnRzWzJdLnZhbHVlO1xyXG5cclxuICAgICAgZGIuY29sbGVjdGlvbignY2hhbm5lbHMnKVxyXG4gICAgICAgIC5kb2MoJ2dlbmVyYWwnKVxyXG4gICAgICAgIC5jb2xsZWN0aW9uKCdtZXNzYWdlcycpXHJcbiAgICAgICAgLmFkZCh7XHJcbiAgICAgICAgICB3YWxsZXQ6IHdhbGxldElELFxyXG4gICAgICAgICAgdGVsZWdyYW06IHRlbGVncmFtLFxyXG4gICAgICAgICAgZGlzY29yZDogZGlzY29yZCxcclxuICAgICAgICAgIHVzZXI6IHVzZXIudWlkLFxyXG4gICAgICAgICAgZGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICAgIGUudGFyZ2V0LnJlc2V0KCk7XHJcbiAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gIHJldHVybiBnbWFpbCA/IChcclxuICAgIDxMYXlvdXQ+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG14LWF1dG8gdGV4dC1jZW50ZXIgcHQxMDBcIj5cclxuICAgICAgPGgzPlN1Ym1pdCB5b3VyIEhlbGl1bSBhY2NvdW50IGluZm88L2gzPlxyXG4gICAgICA8cD5QbGVhc2UgYWRkIGF0IGxlYXN0IG9uZSBzb2NpYWwgYWNjb3VudC48L3A+XHJcbiAgICAgIFxyXG4gICAgICB7dXNlci51aWQgJiYgPGZvcm1cclxuICAgICAgICBvblN1Ym1pdD17c3VibWl0RGF0YX1cclxuICAgICAgICBjbGFzc05hbWU9XCJtdC01IHAtMlwiPlxyXG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17ZT0+c2VhcmNoKGUudGFyZ2V0LnZhbHVlKX0gdmFsdWU9e3ZhbH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTNcIiBpZD1cInRva2VuXCIgcGxhY2Vob2xkZXI9XCJXYWxsZXQgSURcIiAvPlxyXG4gICAgICAgIDxiIGlkPVwid2FsbGV0LXZhbGlkYXRpb25cIj48L2I+XHJcblxyXG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5zZXRTb2NpYWxzKHt0ZWxlZ3JhbTogZS50YXJnZXQudmFsdWUsIGRpc2NvcmQ6c29jaWFscy5kaXNjb3JkfSl9IHZhbHVlPXtzb2NpYWxzLnRlbGVncmFtfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItM1wiIGlkPVwidGVsZWdyYW1cIiBwbGFjZWhvbGRlcj1cIlRlbGVncmFtXCIgLz5cclxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9eyhlKT0+c2V0U29jaWFscyh7dGVsZWdyYW06IHNvY2lhbHMudGVsZWdyYW0sIGRpc2NvcmQ6IGUudGFyZ2V0LnZhbHVlfSl9IHZhbHVlPXtzb2NpYWxzLmRpc2NvcmR9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0zXCIgaWQ9XCJkaXNjb3JkXCIgcGxhY2Vob2xkZXI9XCJEaXNjb3JkXCIgLz5cclxuXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL3N1cHBvcnQuZGlzY29yZC5jb20vaGMvZW4tdXMvYXJ0aWNsZXMvMjA2MzQ2NDk4LVdoZXJlLWNhbi1JLWZpbmQtbXktVXNlci1TZXJ2ZXItTWVzc2FnZS1JRC1cIj5XaGVyZSB0byBmaW5kIG15IGlkPC9hPlxyXG4gICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgPGJ1dHRvbiBpZD1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPn1cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICkgOiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIHN0eWxlPXt7cGFkZGluZ1RvcDonMTUwcHgnfX0+WW91ciBoZWxpdW0gcHJvZmlsZSBpcyBhbHJlYWR5IHN1bWJpdHRlZCE8L2gzPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=