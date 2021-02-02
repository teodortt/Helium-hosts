webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var _components_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/firebase */ "./components/firebase.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _pages_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/Login */ "./pages/Login.js");
/* harmony import */ var _components_tokens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/tokens */ "./components/tokens.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "C:\\apps\\helium_app\\pages\\index.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      user = _useState[0],
      setUser = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      channels = _useState2[0],
      setChannels = _useState2[1]; //Authorization


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    _components_firebase__WEBPACK_IMPORTED_MODULE_4__["firebase"].auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }); // channels

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var db = _components_firebase__WEBPACK_IMPORTED_MODULE_4__["firebase"].firestore();
    db.collection('channels').onSnapshot(function (snapshot) {
      var docs = [];
      snapshot.forEach(function (doc) {
        docs.push(_objectSpread(_objectSpread({}, doc.data()), {}, {
          id: doc.id
        }));
      });
      setChannels(docs);
    });
  }, []);
  return user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container-fluid text-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Wallets information"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_tokens__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "stylesheet",
        href: "https://bootswatch.com/4/darkly/bootstrap.min.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Helium app"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "App container pt-5",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_pages_Login__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 7
  }, this);
}

_s(Home, "L/77sl6tYbHOv1RS9aO884HJwS4=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJjaGFubmVscyIsInNldENoYW5uZWxzIiwidXNlRWZmZWN0IiwiZmlyZWJhc2UiLCJhdXRoIiwib25BdXRoU3RhdGVDaGFuZ2VkIiwiZGIiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwib25TbmFwc2hvdCIsInNuYXBzaG90IiwiZG9jcyIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiZGF0YSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLElBQUQsQ0FEcEI7QUFBQSxNQUNOQyxJQURNO0FBQUEsTUFDQUMsT0FEQTs7QUFBQSxtQkFFb0JGLHNEQUFRLENBQUMsSUFBRCxDQUY1QjtBQUFBLE1BRU5HLFFBRk07QUFBQSxNQUVJQyxXQUZKLGtCQUlkOzs7QUFDQUMseURBQVMsQ0FBQyxZQUFLO0FBQ2JDLGlFQUFRLENBQUNDLElBQVQsR0FBZ0JDLGtCQUFoQixDQUFtQyxVQUFDUCxJQUFELEVBQVU7QUFDM0MsVUFBR0EsSUFBSCxFQUFRO0FBQ05DLGVBQU8sQ0FBQ0QsSUFBRCxDQUFQO0FBQ0QsT0FGRCxNQUVPO0FBQ0xDLGVBQU8sQ0FBQyxJQUFELENBQVA7QUFDRDtBQUNGLEtBTkQ7QUFPRCxHQVJRLENBQVQsQ0FMYyxDQWVkOztBQUNBRyx5REFBUyxDQUFDLFlBQUs7QUFDYixRQUFNSSxFQUFFLEdBQUdILDZEQUFRLENBQUNJLFNBQVQsRUFBWDtBQUNERCxNQUFFLENBQUNFLFVBQUgsQ0FBYyxVQUFkLEVBQTBCQyxVQUExQixDQUFxQyxVQUFBQyxRQUFRLEVBQUk7QUFDL0MsVUFBTUMsSUFBSSxHQUFHLEVBQWI7QUFDQUQsY0FBUSxDQUFDRSxPQUFULENBQWlCLFVBQUFDLEdBQUcsRUFBSTtBQUN0QkYsWUFBSSxDQUFDRyxJQUFMLGlDQUNJRCxHQUFHLENBQUNFLElBQUosRUFESjtBQUVFQyxZQUFFLEVBQUVILEdBQUcsQ0FBQ0c7QUFGVjtBQUlELE9BTEQ7QUFNQWYsaUJBQVcsQ0FBQ1UsSUFBRCxDQUFYO0FBQ0QsS0FURDtBQVVBLEdBWlEsRUFZUCxFQVpPLENBQVQ7QUFjQSxTQUFPYixJQUFJLGdCQUNULHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLEVBQUMsNkJBQWY7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEUyxnQkFRUDtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUtJO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsNkJBQ0UscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFSSjtBQWtCRDs7R0FoRFFGLEk7O0tBQUFBLEk7QUFpRE1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI4NmQ3ZGRjNmU4OTNjYTY0NzVlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBcImZpcmViYXNlL2F1dGhcIjtcbmltcG9ydCB7IGZpcmViYXNlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9maXJlYmFzZSc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vcGFnZXMvTG9naW4nXG5pbXBvcnQgVG9rZW5zIGZyb20gJy4uL2NvbXBvbmVudHMvdG9rZW5zJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgWyB1c2VyLCBzZXRVc2VyIF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgWyBjaGFubmVscywgc2V0Q2hhbm5lbHMgXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIC8vQXV0aG9yaXphdGlvblxuICB1c2VFZmZlY3QoKCkgPT57XG4gICAgZmlyZWJhc2UuYXV0aCgpLm9uQXV0aFN0YXRlQ2hhbmdlZCgodXNlcikgPT4ge1xuICAgICAgaWYodXNlcil7XG4gICAgICAgIHNldFVzZXIodXNlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRVc2VyKG51bGwpO1xuICAgICAgfVxuICAgIH0pXG4gIH0pO1xuXG4gIC8vIGNoYW5uZWxzXG4gIHVzZUVmZmVjdCgoKSA9PntcbiAgICBjb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpO1xuICAgZGIuY29sbGVjdGlvbignY2hhbm5lbHMnKS5vblNuYXBzaG90KHNuYXBzaG90ID0+IHtcbiAgICAgY29uc3QgZG9jcyA9IFtdO1xuICAgICBzbmFwc2hvdC5mb3JFYWNoKGRvYyA9PiB7XG4gICAgICAgZG9jcy5wdXNoKHtcbiAgICAgICAgLi4uZG9jLmRhdGEoKSxcbiAgICAgICAgIGlkOiBkb2MuaWRcbiAgICAgICB9KTtcbiAgICAgfSk7XG4gICAgIHNldENoYW5uZWxzKGRvY3MpO1xuICAgfSk7XG4gIH0sW10pO1xuXG4gIHJldHVybiB1c2VyID8gKFxuICAgIDxMYXlvdXQ+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdGV4dC1jZW50ZXJcIj5cbiAgICAgIDxoMz5XYWxsZXRzIGluZm9ybWF0aW9uPC9oMz5cbiAgICAgIDxUb2tlbnMvPlxuICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApIDogKCBcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9ib290c3dhdGNoLmNvbS80L2RhcmtseS9ib290c3RyYXAubWluLmNzc1wiLz5cbiAgICAgICAgICA8dGl0bGU+SGVsaXVtIGFwcDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcCBjb250YWluZXIgcHQtNVwiPlxuICAgICAgICAgICAgPExvZ2luLz5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICApO1xufVxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9