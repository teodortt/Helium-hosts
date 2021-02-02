webpackHotUpdate_N_E("pages/private",{

/***/ "./pages/private.js":
/*!**************************!*\
  !*** ./pages/private.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/firebase */ "./components/firebase.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Login */ "./pages/Login.js");


var _jsxFileName = "C:\\apps\\helium_app\\pages\\private.js",
    _this = undefined,
    _s2 = $RefreshSig$();








var PrivateRoute = function PrivateRoute() {
  _s2();

  var _s = $RefreshSig$();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showform = _useState3[0],
      setShowform = _useState3[1];

  function authorization() {
    _components_firebase__WEBPACK_IMPORTED_MODULE_3__["firebase"].auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
        profileID(user);
      } else {
        setUser(null);
      }
    });
  }

  ;

  function profileID(user) {
    // ////////////////////
    var nummers = _components_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection("channels").doc("general").collection('messages').where('user', '==', user.uid);
    nummers.get().then(function (querySnapshot) {
      if (!querySnapshot.empty) {
        querySnapshot.forEach(function (doc) {
          // console.log(doc.id, ' => ', doc.data());
          var results = doc.data();
          setData(results);
          console.log(results); // doc.ref.update({wallet: "bar"})
        });
      } else {
        console.log("false");
      }
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    authorization();
  }, []);

  function Button(_ref) {
    _s();

    var wallet = _ref.wallet;

    var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
        state = _useState4[0],
        setState = _useState4[1];

    navigator.clipboard.writeText(wallet);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: state ? 'btn btn-success btn-sm' : 'btn btn-info btn-sm',
      onClick: function onClick(e) {
        return setState(true);
      },
      children: state ? 'Copied to clipboard!' : 'Copy my wallet ID'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this);
  }

  _s(Button, "BhkeKSQ/+r5twNzt2gbiZr0oFzY=");

  function updateForm(e) {
    e.preventDefault();
    var updateForm = _components_firebase__WEBPACK_IMPORTED_MODULE_3__["db"].collection("channels").doc("general").collection('messages').where('user', '==', user.uid);
    updateForm.get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // //////////////////
        var user = _components_firebase__WEBPACK_IMPORTED_MODULE_3__["firebase"].auth().currentUser;
        user.updateEmail(e.target.elements[0].value + 'gmail.com').then(function () {
          // Update successful.
          console.log('success');
        })["catch"](function (error) {// An error happened.
        }); // ///////////////////

        doc.ref.update({
          wallet: e.target.elements[0].value,
          telegram: e.target.elements[1].value,
          discord: e.target.elements[2].value
        }).then(function () {
          var results = doc.data();
          setData(results);
          e.target.elements[3].click(); // document.getElementById('sbm').click();
        });
      });
    });
  }

  return user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container text-center pt100",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "My personal information"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }, _this), data && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card text-white mb-5 mt-5 mx-auto",
          style: {
            maxWidth: '50rem'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-header",
            children: "Wallet ID"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 11
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "card-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "card-text",
              children: data.wallet
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
              wallet: data.wallet
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "pt-2",
              children: data.telegram ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "link",
                href: "https://t.me/".concat(data.telegram),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://www.helium.bg/wp-content/uploads/2021/01/telegramfullpng.png",
                  style: {
                    width: '150px',
                    height: '50px'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 111
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 52
              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  width: '150px',
                  height: '50px',
                  margin: '0 auto'
                },
                children: "No Telegram account"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 238
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "pt-2",
              children: data.discord ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "link",
                href: "https://discord.gg/users/".concat(data.discord),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "https://www.helium.bg/wp-content/uploads/2021/01/discordpng-1024x282.png",
                  style: {
                    width: '130px',
                    height: '40px',
                    marginRight: '10px'
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 121
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 51
              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                style: {
                  width: '130px',
                  height: '40px',
                  margin: '0 auto'
                },
                children: "No Discord account"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 272
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 97,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            className: "btn btn-warning",
            onClick: function onClick() {
              return setShowform(!showform);
            },
            children: !showform ? 'Edit my profile' : 'Close'
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: "form-group col-md-6 mx-auto text-center ".concat(!showform ? 'updForm' : ''),
        onSubmit: updateForm,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Wallet:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          type: "text",
          defaultValue: data.wallet
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Telegram:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          type: "text",
          defaultValue: data.telegram
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          children: "Discord:"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "form-control",
          type: "text",
          defaultValue: data.discord
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: "btn btn-success mt-3",
          type: "submit",
          id: "sbm",
          value: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 1
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 3
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 6
  }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://bootswatch.com/4/darkly/bootstrap.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "App container pt-3 pb-3",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: "Helium"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 12
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Login__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 11
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 127,
    columnNumber: 5
  }, _this);
};

_s2(PrivateRoute, "kMIWBVQ6qZCySYe8pCcj3ompwJg=");

_c = PrivateRoute;
/* harmony default export */ __webpack_exports__["default"] = (PrivateRoute);

var _c;

$RefreshReg$(_c, "PrivateRoute");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJpdmF0ZS5qcyJdLCJuYW1lcyI6WyJQcml2YXRlUm91dGUiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiZGF0YSIsInNldERhdGEiLCJzaG93Zm9ybSIsInNldFNob3dmb3JtIiwiYXV0aG9yaXphdGlvbiIsImZpcmViYXNlIiwiYXV0aCIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInByb2ZpbGVJRCIsIm51bW1lcnMiLCJkYiIsImNvbGxlY3Rpb24iLCJkb2MiLCJ3aGVyZSIsInVpZCIsImdldCIsInRoZW4iLCJxdWVyeVNuYXBzaG90IiwiZW1wdHkiLCJmb3JFYWNoIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJCdXR0b24iLCJ3YWxsZXQiLCJzdGF0ZSIsInNldFN0YXRlIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiZSIsInVwZGF0ZUZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnRVc2VyIiwidXBkYXRlRW1haWwiLCJ0YXJnZXQiLCJlbGVtZW50cyIsInZhbHVlIiwiZXJyb3IiLCJyZWYiLCJ1cGRhdGUiLCJ0ZWxlZ3JhbSIsImRpc2NvcmQiLCJjbGljayIsIm1heFdpZHRoIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0dDLHNEQUFRLENBQUMsS0FBRCxDQURYO0FBQUEsTUFDZkMsSUFEZTtBQUFBLE1BQ1RDLE9BRFM7O0FBQUEsbUJBRUdGLHNEQUFRLENBQUMsRUFBRCxDQUZYO0FBQUEsTUFFZkcsSUFGZTtBQUFBLE1BRVRDLE9BRlM7O0FBQUEsbUJBR1dKLHNEQUFRLENBQUMsS0FB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Q0FBQzJDO0FBQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUlIsZUFVUTtBQUFPLG1CQUFTLEVBQUMsc0JBQWpCO0FBQXdDLGNBQUksRUFBQyxRQUE3QztBQUFzRCxZQUFFLEVBQUMsS0FBekQ7QUFBK0QsZUFBSyxFQUFDO0FBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBckJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURHO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FETyxnQkFzQ1I7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDZCQUNFO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJTTtBQUFLLGVBQVMsRUFBQyx5QkFBZjtBQUFBLDhCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFRSxxRUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBdENIO0FBa0RBLENBbklEOztJQUFNL0MsWTs7S0FBQUEsWTtBQW9JU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJpdmF0ZS5lZGI0YmJhY2ZhY2M2NDViM2ZlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IGZpcmViYXNlLCBkYiB9IGZyb20gJy4uL2NvbXBvbmVudHMvZmlyZWJhc2UnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbic7XHJcblxyXG5jb25zdCBQcml2YXRlUm91dGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbIHVzZXIsIHNldFVzZXIgXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFsgZGF0YSwgc2V0RGF0YSBdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgWyBzaG93Zm9ybSwgc2V0U2hvd2Zvcm0gXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gYXV0aG9yaXphdGlvbigpe1xyXG4gICAgICBmaXJlYmFzZS5hdXRoKCkub25BdXRoU3RhdGVDaGFuZ2VkKCh1c2VyKSA9PiB7XHJcbiAgICAgICAgaWYodXNlcil7XHJcbiAgICAgICAgICBzZXRVc2VyKHVzZXIpO1xyXG4gICAgICAgICAgcHJvZmlsZUlEKHVzZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICBmdW5jdGlvbiBwcm9maWxlSUQodXNlcil7XHJcblxyXG4gICAgICAvLyAvLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICB2YXIgbnVtbWVycyA9IGRiLmNvbGxlY3Rpb24oXCJjaGFubmVsc1wiKS5kb2MoXCJnZW5lcmFsXCIpLmNvbGxlY3Rpb24oJ21lc3NhZ2VzJykud2hlcmUoJ3VzZXInLCAnPT0nLCB1c2VyLnVpZCk7XHJcbiAgICAgIG51bW1lcnMuZ2V0KCkudGhlbigocXVlcnlTbmFwc2hvdCkgPT4ge1xyXG4gICAgICAgIGlmICghcXVlcnlTbmFwc2hvdC5lbXB0eSkge1xyXG4gICAgICAgICAgcXVlcnlTbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uIChkb2MpIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRvYy5pZCwgJyA9PiAnLCBkb2MuZGF0YSgpKTtcclxuICAgICAgICAgIGxldCByZXN1bHRzID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgIHNldERhdGEocmVzdWx0cylcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpXHJcbiAgICAgICAgICAvLyBkb2MucmVmLnVwZGF0ZSh7d2FsbGV0OiBcImJhclwifSlcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImZhbHNlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT57XHJcbiAgICAgIGF1dGhvcml6YXRpb24oKTtcclxuICAgIH0sW10pXHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIEJ1dHRvbih7d2FsbGV0fSl7XHJcbiAgICAgIGNvbnN0W3N0YXRlLHNldFN0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQod2FsbGV0KTtcclxuICBcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3RhdGUgPyAnYnRuIGJ0bi1zdWNjZXNzIGJ0bi1zbScgOiAnYnRuIGJ0bi1pbmZvIGJ0bi1zbSd9IG9uQ2xpY2s9e2U9PnNldFN0YXRlKHRydWUpfT5cclxuICAgICAgICB7c3RhdGUgPyAnQ29waWVkIHRvIGNsaXBib2FyZCEnIDogJ0NvcHkgbXkgd2FsbGV0IElEJ31cclxuICAgICAgPC9idXR0b24+KVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBkYXRlRm9ybShlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgdmFyIHVwZGF0ZUZvcm0gPSBkYi5jb2xsZWN0aW9uKFwiY2hhbm5lbHNcIikuZG9jKFwiZ2VuZXJhbFwiKS5jb2xsZWN0aW9uKCdtZXNzYWdlcycpLndoZXJlKCd1c2VyJywgJz09JywgdXNlci51aWQpO1xyXG4gICAgICB1cGRhdGVGb3JtLmdldCgpLnRoZW4oKHF1ZXJ5U25hcHNob3QpID0+IHtcclxuICAgICAgICAgIHF1ZXJ5U25hcHNob3QuZm9yRWFjaChmdW5jdGlvbiAoZG9jKSB7XHJcbiAgICAgICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vL1xyXG4gICAgICAgICAgICB2YXIgdXNlciA9IGZpcmViYXNlLmF1dGgoKS5jdXJyZW50VXNlcjtcclxuICAgICAgICAgICAgdXNlci51cGRhdGVFbWFpbChlLnRhcmdldC5lbGVtZW50c1swXS52YWx1ZSArICdnbWFpbC5jb20nKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAvLyBVcGRhdGUgc3VjY2Vzc2Z1bC5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKVxyXG4gICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBBbiBlcnJvciBoYXBwZW5lZC5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy9cclxuICAgICAgICAgIGRvYy5yZWYudXBkYXRlKHtcclxuICAgICAgICAgICAgd2FsbGV0OiBlLnRhcmdldC5lbGVtZW50c1swXS52YWx1ZSxcclxuICAgICAgICAgICAgdGVsZWdyYW06IGUudGFyZ2V0LmVsZW1lbnRzWzFdLnZhbHVlLFxyXG4gICAgICAgICAgICBkaXNjb3JkOiBlLnRhcmdldC5lbGVtZW50c1syXS52YWx1ZVxyXG4gICAgICAgICAgIH0pLnRoZW4oXHJcbiAgICAgICAgICAgICAoKT0+e1xyXG4gICAgICAgICAgICAgIGxldCByZXN1bHRzID0gZG9jLmRhdGEoKTtcclxuICAgICAgICAgICAgICBzZXREYXRhKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgIGUudGFyZ2V0LmVsZW1lbnRzWzNdLmNsaWNrKClcclxuXHJcbiAgICAgICAgICAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NibScpLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgKVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiByZXR1cm4odXNlciA/IFxyXG4gICAgKDxMYXlvdXQ+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgdGV4dC1jZW50ZXIgcHQxMDBcIj5cclxuICAgICAgICAgICAgPGgzPk15IHBlcnNvbmFsIGluZm9ybWF0aW9uPC9oMz5cclxuICAgICAgICAgICAge2RhdGEgJiYgXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIHRleHQtd2hpdGUgbWItNSBtdC01IG14LWF1dG9cIiBzdHlsZT17e21heFdpZHRoOic1MHJlbSd9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5XYWxsZXQgSUQ8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICB7LyogPGg0IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj48L2g0PiAqL31cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57ZGF0YS53YWxsZXR9PC9wPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gd2FsbGV0PXtkYXRhLndhbGxldH0gLz5cclxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdC0yXCI+e2RhdGEudGVsZWdyYW0gPyA8YSBjbGFzc05hbWU9XCJsaW5rXCIgaHJlZj17YGh0dHBzOi8vdC5tZS8ke2RhdGEudGVsZWdyYW19YH0+PGltZyBzcmM9XCJodHRwczovL3d3dy5oZWxpdW0uYmcvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDEvdGVsZWdyYW1mdWxscG5nLnBuZ1wiIHN0eWxlPXt7d2lkdGg6JzE1MHB4JywgaGVpZ2h0Oic1MHB4J319Lz48L2E+IDogPGRpdiBzdHlsZT17e3dpZHRoOicxNTBweCcsIGhlaWdodDonNTBweCcsIG1hcmdpbjonMCBhdXRvJ319Pk5vIFRlbGVncmFtIGFjY291bnQ8L2Rpdj59PC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInB0LTJcIj57ZGF0YS5kaXNjb3JkID8gPGEgY2xhc3NOYW1lPVwibGlua1wiIGhyZWY9e2BodHRwczovL2Rpc2NvcmQuZ2cvdXNlcnMvJHtkYXRhLmRpc2NvcmR9YH0+PGltZyBzcmM9XCJodHRwczovL3d3dy5oZWxpdW0uYmcvd3AtY29udGVudC91cGxvYWRzLzIwMjEvMDEvZGlzY29yZHBuZy0xMDI0eDI4Mi5wbmdcIiBzdHlsZT17e3dpZHRoOicxMzBweCcsIGhlaWdodDonNDBweCcsIG1hcmdpblJpZ2h0OicxMHB4J319Lz48L2E+IDogPGRpdiBzdHlsZT17e3dpZHRoOicxMzBweCcsIGhlaWdodDonNDBweCcsIG1hcmdpbjonMCBhdXRvJ319Pk5vIERpc2NvcmQgYWNjb3VudDwvZGl2Pn08L3A+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXdhcm5pbmdcIiBvbkNsaWNrPXsoKSA9PnNldFNob3dmb3JtKCFzaG93Zm9ybSl9Pnshc2hvd2Zvcm0gPyAnRWRpdCBteSBwcm9maWxlJyA6ICdDbG9zZSd9PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG48Zm9ybSBjbGFzc05hbWU9e2Bmb3JtLWdyb3VwIGNvbC1tZC02IG14LWF1dG8gdGV4dC1jZW50ZXIgJHshc2hvd2Zvcm0gPyAndXBkRm9ybScgOiAnJ31gfSBvblN1Ym1pdD17dXBkYXRlRm9ybX0+XHJcbiAgICAgICAgPGxhYmVsPldhbGxldDo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZT17ZGF0YS53YWxsZXR9IC8+XHJcblxyXG4gICAgICAgIDxsYWJlbD5UZWxlZ3JhbTo8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZT17ZGF0YS50ZWxlZ3JhbX0gLz5cclxuXHJcbiAgICAgICAgPGxhYmVsPkRpc2NvcmQ6PC9sYWJlbD5cclxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e2RhdGEuZGlzY29yZH0gLz5cclxuXHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBtdC0zXCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwic2JtXCIgdmFsdWU9XCJVcGRhdGVcIiAvPlxyXG48L2Zvcm0+XHJcblxyXG4gICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+KSA6ICggXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2Jvb3Rzd2F0Y2guY29tLzQvZGFya2x5L2Jvb3RzdHJhcC5taW4uY3NzXCIvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwIGNvbnRhaW5lciBwdC0zIHBiLTNcIj5cclxuICAgICAgICAgICA8aDE+SGVsaXVtPC9oMT5cclxuICAgICAgICAgICAgPExvZ2luLz5cclxuICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgIHsvKiA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvcmVnaXN0ZXJcIj5DcmVhdGUgbmV3IGFjY291bnQ8L0xpbms+ICovfVxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PilcclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcml2YXRlUm91dGU7Il0sInNvdXJjZVJvb3QiOiIifQ==