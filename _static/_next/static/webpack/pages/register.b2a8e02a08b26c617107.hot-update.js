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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Login */ "./pages/Login.js");


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
        lineNumber: 79,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Please add at least one social account."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
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
          lineNumber: 107,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          id: "wallet-validation"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
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
          lineNumber: 110,
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
          lineNumber: 111,
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
            lineNumber: 114,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          id: "submit",
          className: "btn btn-success",
          type: "submit",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 20
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
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
        lineNumber: 125,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 123,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9ybS5qcyJdLCJuYW1lcyI6WyJGb3JtIiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsInZhbCIsInNldFZhbHVlIiwiZGlzYWJsZWQiLCJzZXREaXNhYmxlZCIsImdtYWlsIiwic2V0R21haWwiLCJ0ZWxlZ3JhbSIsImRpc2NvcmQiLCJzb2NpYWxzIiwic2V0U29jaWFscyIsInJvdXRlciIsInVzZVJvdXRlciIsImF1dGhvcml6YXRpb24iLCJmaXJlYmFzZSIsImF1dGgiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJ1c2VyR21haWwiLCJwdXNoIiwibnVtbWVycyIsImRiIiwiY29sbGVjdGlvbiIsImRvYyIsIndoZXJlIiwidWlkIiwiZ2V0IiwidGhlbiIsInF1ZXJ5U25hcHNob3QiLCJlbXB0eSIsImZvckVhY2giLCJjb25zb2xlIiwibG9nIiwiZmluZEl0IiwiZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsImNvbG9yIiwiaW5uZXJUZXh0Iiwic2VhcmNoIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndhbGxldElEIiwidGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsImFkZCIsIndhbGxldCIsImRhdGUiLCJEYXRlIiwicmVzZXQiLCJwYWRkaW5nVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsa0JBQ1NDLHNEQUFRLENBQUMsSUFBRCxDQURqQjtBQUFBLE1BQ1RDLElBRFM7QUFBQSxNQUNIQyxPQURHOztBQUFBLG1CQUVNRixzREFBUSxDQUFDLEVBQUQsQ0FGZDtBQUFBLE1BRVhHLEdBRlc7QUFBQSxNQUVOQyxRQUZNOztBQUFBLG1CQUdjSixzREFBUSxDQUFDLEtBQUQsQ0FIdEI7QUFBQSxN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QUEsaUNBQ0U7QUFBRyxxQkFBUyxFQUFDLE1BQWI7QUFBb0Isa0JBQU0sRUFBQyxRQUEzQjtBQUFvQyxlQUFHLEVBQUMsWUFBeEM7QUFBcUQsZ0JBQUksRUFBQyxxR0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9CVyxlQW1DWDtBQUFRLFlBQUUsRUFBQyxRQUFYO0FBQW9CLG1CQUFTLEVBQUMsaUJBQTlCO0FBQWdELGNBQUksRUFBQyxRQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuQ1c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURVLGdCQStDVjtBQUFBLDJCQUNFLHFFQUFDLDBEQUFEO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFDLGFBQWQ7QUFBNEIsYUFBSyxFQUFFO0FBQUMyQyxvQkFBVSxFQUFDO0FBQVosU0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQS9DRjtBQWdFRCxDQW5JRDs7R0FBTXRELEk7VUFVV2UscUQ7OztLQVZYZixJO0FBb0lTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci5iMmE4ZTAyYTA4YjI2YzYxNzEwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgZGIsIGZpcmViYXNlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9maXJlYmFzZSc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbic7XHJcblxyXG5jb25zdCBGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFsgdXNlciwgc2V0VXNlciBdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3RbdmFsLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3RbZGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdFtnbWFpbCwgc2V0R21haWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0W3NvY2lhbHMsIHNldFNvY2lhbHNdID0gdXNlU3RhdGUoe1xyXG4gICAgdGVsZWdyYW06JycsXHJcbiAgICBkaXNjb3JkOicnXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBhdXRob3JpemF0aW9uKCk7XHJcbiAgZnVuY3Rpb24gYXV0aG9yaXphdGlvbigpe1xyXG4gICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xyXG4gICAgICBpZih1c2VyKXtcclxuICAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICAgIHVzZXJHbWFpbCh1c2VyKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gdXNlckdtYWlsKHVzZXIpe1xyXG4gICAgdmFyIG51bW1lcnMgPSBkYi5jb2xsZWN0aW9uKFwiY2hhbm5lbHNcIikuZG9jKFwiZ2VuZXJhbFwiKS5jb2xsZWN0aW9uKCdtZXNzYWdlcycpLndoZXJlKCd1c2VyJywgJz09JywgdXNlci51aWQpO1xyXG4gICAgbnVtbWVycy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgIGlmICghcXVlcnlTbmFwc2hvdC5lbXB0eSkge1xyXG4gICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2V4aXN0cycpO1xyXG4gICAgICAgIHNldEdtYWlsKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ25vdCBleGlzdHMnKVxyXG4gICAgICAgIHNldEdtYWlsKHRydWUpXHJcbiAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBmaW5kSXQgPSAoZSkgPT57XHJcbiAgICB2YXIgbnVtbWVycyA9IGRiLmNvbGxlY3Rpb24oXCJjaGFubmVsc1wiKS5kb2MoXCJnZW5lcmFsXCIpLmNvbGxlY3Rpb24oJ21lc3NhZ2VzJykud2hlcmUoJ3dhbGxldCcsICc9PScsIGUpO1xyXG4gICAgbnVtbWVycy5nZXQoKS50aGVuKChxdWVyeVNuYXBzaG90KSA9PiB7XHJcbiAgICAgIGlmICghcXVlcnlTbmFwc2hvdC5lbXB0eSkge1xyXG5cclxuICAgICAgICBxdWVyeVNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24gKGRvYykge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndhbGxldC12YWxpZGF0aW9uXCIpLnN0eWxlLmNvbG9yID0gXCIjZmYwMDAwXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhbGxldC12YWxpZGF0aW9uJykuaW5uZXJUZXh0ID0gXCJUaGlzIHdhbGxldCBJRCBhbHJlYWR5IGV4aXN0cyBpbiBvdXIgZGF0YWJhc2UhXCI7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZG9jLmlkLCAnID0+ICcsIGRvYy5kYXRhKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VcIilcclxuICAgICAgICAvLyBzZXREaXNhYmxlZChmYWxzZSk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dhbGxldC12YWxpZGF0aW9uJykuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdFwiKS5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzZWFyY2goZSl7XHJcbiAgICBzZXRWYWx1ZShlKTtcclxuICAgIGZpbmRJdChlKTtcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gZ21haWwgPyAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBteC1hdXRvIHRleHQtY2VudGVyIHB0MTAwXCI+XHJcbiAgICAgIDxoMz5TdWJtaXQgeW91ciBIZWxpdW0gYWNjb3VudCBpbmZvPC9oMz5cclxuICAgICAgPHA+UGxlYXNlIGFkZCBhdCBsZWFzdCBvbmUgc29jaWFsIGFjY291bnQuPC9wPlxyXG4gICAgICBcclxuICAgICAge3VzZXIudWlkICYmIDxmb3JtXHJcbiAgICAgICAgb25TdWJtaXQ9e1xyXG4gICAgICAgICAgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBjb25zdCB3YWxsZXRJRCA9IGV2ZW50LnRhcmdldC5lbGVtZW50c1swXS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgdGVsZWdyYW0gPSBldmVudC50YXJnZXQuZWxlbWVudHNbMV0udmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc2NvcmQgPSBldmVudC50YXJnZXQuZWxlbWVudHNbMl0udmFsdWU7XHJcblxyXG4gICAgICAgICAgICBkYi5jb2xsZWN0aW9uKCdjaGFubmVscycpXHJcbiAgICAgICAgICAgICAgLmRvYygnZ2VuZXJhbCcpXHJcbiAgICAgICAgICAgICAgLmNvbGxlY3Rpb24oJ21lc3NhZ2VzJylcclxuICAgICAgICAgICAgICAuYWRkKHtcclxuICAgICAgICAgICAgICAgIHdhbGxldDogd2FsbGV0SUQsXHJcbiAgICAgICAgICAgICAgICB0ZWxlZ3JhbTogdGVsZWdyYW0sXHJcbiAgICAgICAgICAgICAgICBkaXNjb3JkOiBkaXNjb3JkLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogdXNlci51aWQsXHJcbiAgICAgICAgICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLFxyXG5cclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LnJlc2V0KCk7XHJcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgICAgLy8gXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm10LTUgcC0yXCI+XHJcbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXtlPT5zZWFyY2goZS50YXJnZXQudmFsdWUpfSB2YWx1ZT17dmFsfSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItM1wiIGlkPVwidG9rZW5cIiBwbGFjZWhvbGRlcj1cIldhbGxldCBJRFwiIC8+XHJcbiAgICAgICAgPGIgaWQ9XCJ3YWxsZXQtdmFsaWRhdGlvblwiPjwvYj5cclxuXHJcbiAgICAgICAgPGlucHV0IG9uQ2hhbmdlPXsoZSk9PnNldFNvY2lhbHMoe3RlbGVncmFtOiBlLnRhcmdldC52YWx1ZSwgZGlzY29yZDpzb2NpYWxzLmRpc2NvcmR9KX0gdmFsdWU9e3NvY2lhbHMudGVsZWdyYW19IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0zXCIgaWQ9XCJ0ZWxlZ3JhbVwiIHBsYWNlaG9sZGVyPVwiVGVsZWdyYW1cIiAvPlxyXG4gICAgICAgIDxpbnB1dCBvbkNoYW5nZT17KGUpPT5zZXRTb2NpYWxzKHt0ZWxlZ3JhbTogc29jaWFscy50ZWxlZ3JhbSwgZGlzY29yZDogZS50YXJnZXQudmFsdWV9KX0gdmFsdWU9e3NvY2lhbHMuZGlzY29yZH0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTNcIiBpZD1cImRpc2NvcmRcIiBwbGFjZWhvbGRlcj1cIkRpc2NvcmRcIiAvPlxyXG5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub3JlZmVycmVyXCIgaHJlZj1cImh0dHBzOi8vc3VwcG9ydC5kaXNjb3JkLmNvbS9oYy9lbi11cy9hcnRpY2xlcy8yMDYzNDY0OTgtV2hlcmUtY2FuLUktZmluZC1teS1Vc2VyLVNlcnZlci1NZXNzYWdlLUlELVwiPldoZXJlIHRvIGZpbmQgbXkgaWQ8L2E+XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8YnV0dG9uIGlkPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zdWNjZXNzXCIgdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+fVxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKSA6IChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgc3R5bGU9e3twYWRkaW5nVG9wOicxNTBweCd9fT5Zb3VyIGhlbGl1bSBwcm9maWxlIGlzIGFscmVhZHkgc3VtYml0dGVkITwvaDM+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgey8qIDxIZWFkPlxyXG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vYm9vdHN3YXRjaC5jb20vNC9kYXJrbHkvYm9vdHN0cmFwLm1pbi5jc3NcIi8+XHJcbiAgICAgIDx0aXRsZT5IZWxpdW0gSG9tZTwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwIGNvbnRhaW5lciBwdC01XCI+XHJcbiAgICAgICA8aDE+SGVsaXVtPC9oMT5cclxuICAgICAgICA8TG9naW4vPlxyXG4gICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9yZWdpc3RlclwiPkNyZWF0ZSBuZXcgYWNjb3VudDwvTGluaz4gXHJcblxyXG4gICAgICAgPC9kaXY+Ki99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGb3JtO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9