/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_solenewcs_Desktop_Hackathon_2_hackathon2_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var noisejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! noisejs */ \"./node_modules/noisejs/index.js\");\n/* harmony import */ var noisejs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(noisejs__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/solenewcs/Desktop/Hackathon 2/hackathon2-front/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_solenewcs_Desktop_Hackathon_2_hackathon2_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // Modules\n\n\nconst CANVAS_WIDTH = 3000; // The amplitude. The amount the noise affects the movement.\n\nconst NOISE_AMOUNT = 5; // The frequency. Smaller for flat slopes, higher for jagged spikes.\n\nconst NOISE_SPEED = 0.004; // Pixels to move per frame. At 60fps, this would be 18px a sec.\n\nconst SCROLL_SPEED = 0.3;\nconst bubbles = [{\n  s: 0.6,\n  x: 1134,\n  y: 45\n}, {\n  s: 0.6,\n  x: 1620,\n  y: 271\n}, {\n  s: 0.6,\n  x: 1761,\n  y: 372\n}, {\n  s: 0.6,\n  x: 2499,\n  y: 79\n}, {\n  s: 0.8,\n  x: 2704,\n  y: 334\n}, {\n  s: 0.6,\n  x: 2271,\n  y: 356\n}, {\n  s: 0.6,\n  x: 795,\n  y: 226\n}, {\n  s: 0.6,\n  x: 276,\n  y: 256\n}, {\n  s: 0.6,\n  x: 1210,\n  y: 365\n}, {\n  s: 0.6,\n  x: 444,\n  y: 193\n}, {\n  s: 0.6,\n  x: 2545,\n  y: 387\n}, {\n  s: 0.8,\n  x: 1303,\n  y: 193\n}, {\n  s: 0.8,\n  x: 907,\n  y: 88\n}, {\n  s: 0.8,\n  x: 633,\n  y: 320\n}, {\n  s: 0.8,\n  x: 323,\n  y: 60\n}, {\n  s: 0.8,\n  x: 129,\n  y: 357\n}, {\n  s: 0.8,\n  x: 1440,\n  y: 342\n}, {\n  s: 0.8,\n  x: 1929,\n  y: 293\n}, {\n  s: 0.8,\n  x: 2135,\n  y: 198\n}, {\n  s: 0.8,\n  x: 2276,\n  y: 82\n}, {\n  s: 0.8,\n  x: 2654,\n  y: 182\n}, {\n  s: 0.8,\n  x: 2783,\n  y: 60\n}, {\n  s: 1.0,\n  x: 1519,\n  y: 118\n}, {\n  s: 1.0,\n  x: 1071,\n  y: 233\n}, {\n  s: 1.0,\n  x: 1773,\n  y: 148\n}, {\n  s: 1.0,\n  x: 2098,\n  y: 385\n}, {\n  s: 1.0,\n  x: 2423,\n  y: 244\n}, {\n  s: 1.0,\n  x: 901,\n  y: 385\n}, {\n  s: 1.0,\n  x: 624,\n  y: 111\n}, {\n  s: 1.0,\n  x: 75,\n  y: 103\n}, {\n  s: 1.0,\n  x: 413,\n  y: 367\n}, {\n  s: 1.0,\n  x: 2895,\n  y: 271\n}, {\n  s: 1.0,\n  x: 1990,\n  y: 75\n}];\nconst backgroundPositions = [];\n\nfor (let i = 0; i < 7; i += 1) {\n  for (let j = 0; j < 7; j += 1) {\n    backgroundPositions.push(`${-154 * j}px ${-154 * i}px`);\n  }\n}\n\nconst noise = new noisejs__WEBPACK_IMPORTED_MODULE_3__.Noise();\n\nconst HomePage = () => {\n  _s();\n\n  const animationRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef();\n  const bubblesRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(bubbles.map(bubble => _objectSpread(_objectSpread({}, bubble), {}, {\n    noiseSeedX: Math.floor(Math.random() * 70000),\n    noiseSeedY: Math.floor(Math.random() * 70000),\n    xWithNoise: bubble.x,\n    yWithNoise: bubble.y\n  })));\n  const [isReady, setReady] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);\n  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {\n    setTimeout(() => {\n      setReady(true);\n    }, 200);\n    animationRef.current = requestAnimationFrame(animate);\n    return () => {\n      if (animationRef.current) {\n        cancelAnimationFrame(animationRef.current);\n      }\n    };\n  }, []);\n\n  function animate() {\n    bubblesRef.current = bubblesRef.current.map((bubble, index) => {\n      const newNoiseSeedX = bubble.noiseSeedX + NOISE_SPEED;\n      const newNoiseSeedY = bubble.noiseSeedY + NOISE_SPEED;\n      const randomX = noise.simplex2(newNoiseSeedX, 0);\n      const randomY = noise.simplex2(newNoiseSeedY, 0);\n      const newX = bubble.x - SCROLL_SPEED;\n      const newXWithNoise = newX + randomX * NOISE_AMOUNT;\n      const newYWithNoise = bubble.y + randomY * NOISE_AMOUNT;\n      const element = document.getElementById(`bubble-${index}`);\n\n      if (element) {\n        element.style.transform = `translate(${newXWithNoise}px, ${newYWithNoise}px) scale(${bubble.s})`;\n      }\n\n      return _objectSpread(_objectSpread({}, bubble), {}, {\n        noiseSeedX: newNoiseSeedX,\n        noiseSeedY: newNoiseSeedY,\n        // x: newX < -200 ? CANVAS_WIDTH : newX,\n        xWithNoise: newXWithNoise,\n        yWithNoise: newYWithNoise\n      });\n    });\n    animationRef.current = requestAnimationFrame(animate);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"bubbles-wrapper\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"bubbles\",\n      children: bubbles.map((bubble, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bubble\",\n        id: `bubble-${index}`,\n        style: {\n          backgroundPosition: backgroundPositions[index],\n          opacity: isReady ? 1 : 0,\n          transform: `translate(${bubble.x}px, ${bubble.y}px) scale(${bubble.s})`\n        }\n      }, `${bubble.x} ${bubble.y}`, false, {\n        fileName: _jsxFileName,\n        lineNumber: 257,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 255,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 254,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(HomePage, \"we8ZfJ7JyQd7kSktOHxZh5vovLo=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiQ0FOVkFTX1dJRFRIIiwiTk9JU0VfQU1PVU5UIiwiTk9JU0VfU1BFRUQiLCJTQ1JPTExfU1BFRUQiLCJidWJibGVzIiwicyIsIngiLCJ5IiwiYmFja2dyb3VuZFBvc2l0aW9ucyIsImkiLCJqIiwicHVzaCIsIm5vaXNlIiwiTm9pc2UiLCJIb21lUGFnZSIsImFuaW1hdGlvblJlZiIsIlJlYWN0IiwiYnViYmxlc1JlZiIsIm1hcCIsImJ1YmJsZSIsIm5vaXNlU2VlZFgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJub2lzZVNlZWRZIiwieFdpdGhOb2lzZSIsInlXaXRoTm9pc2UiLCJpc1JlYWR5Iiwic2V0UmVhZHkiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImluZGV4IiwibmV3Tm9pc2VTZWVkWCIsIm5ld05vaXNlU2VlZFkiLCJyYW5kb21YIiwic2ltcGxleDIiLCJyYW5kb21ZIiwibmV3WCIsIm5ld1hXaXRoTm9pc2UiLCJuZXdZV2l0aE5vaXNlIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInRyYW5zZm9ybSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFQTtBQUVBLE1BQU1BLFlBQVksR0FBRyxJQUFyQixDLENBQ0E7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLENBQXJCLEMsQ0FDQTs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsS0FBcEIsQyxDQUNBOztBQUNBLE1BQU1DLFlBQVksR0FBRyxHQUFyQjtBQUVBLE1BQU1DLE9BQU8sR0FBRyxDQUNkO0FBQ0VDLEdBQUMsRUFBRSxHQURMO0FBRUVDLEdBQUMsRUFBRSxJQUZMO0FBR0VDLEdBQUMsRUFBRTtBQUhMLENBRGMsRUFNZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQU5jLEVBV2Q7QUFDRUYsR0FBQyxFQUFFLEdBREw7QUFFRUMsR0FBQyxFQUFFLElBRkw7QUFHRUMsR0FBQyxFQUFFO0FBSEwsQ0FYYyxFQWdCZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQWhCYyxFQXFCZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQXJCYyxFQTBCZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQTFCYyxFQStCZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsR0FGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQS9CYyxFQW9DZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsR0FGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQXBDYyxFQXlDZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQXpDYyxFQThDZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsR0FGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQTlDYyxFQW1EZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQW5EYyxFQXdEZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQXhEYyxFQTZEZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsR0FGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQTdEYyxFQWtFZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsR0FGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQWxFYyxFQXVFZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsR0FGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQXZFYyxFQTRFZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsR0FGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQTVFYyxFQWlGZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQWpGYyxFQXNGZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQXRGYyxFQTJGZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQTNGYyxFQWdHZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQWhHYyxFQXFHZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQXJHYyxFQTBHZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQTFHYyxFQStHZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQS9HYyxFQW9IZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQXBIYyxFQXlIZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7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Q1g7QUFDRSxpQkFBUyxFQUFDLFFBRFo7QUFFRSxVQUFFLEVBQUcsVUFBU0EsS0FBTSxFQUZ0QjtBQUlFLGFBQUssRUFBRTtBQUNMYyw0QkFBa0IsRUFBRXhDLG1CQUFtQixDQUFDMEIsS0FBRCxDQURsQztBQUVMZSxpQkFBTyxFQUFFdEIsT0FBTyxHQUFHLENBQUgsR0FBTyxDQUZsQjtBQUdMb0IsbUJBQVMsRUFBRyxhQUFZNUIsTUFBTSxDQUFDYixDQUFFLE9BQU1hLE1BQU0sQ0FBQ1osQ0FBRSxhQUFZWSxNQUFNLENBQUNkLENBQUU7QUFIaEU7QUFKVCxTQUdRLEdBQUVjLE1BQU0sQ0FBQ2IsQ0FBRSxJQUFHYSxNQUFNLENBQUNaLENBQUUsRUFIL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFrQkQsQ0E5RUQ7O0dBQU1PLFE7O0tBQUFBLFE7QUFnRk4sK0RBQWVBLFFBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gTW9kdWxlc1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0L3R5cGVzJztcbmltcG9ydCB7IE5vaXNlIH0gZnJvbSAnbm9pc2Vqcyc7XG5cbmNvbnN0IENBTlZBU19XSURUSCA9IDMwMDA7XG4vLyBUaGUgYW1wbGl0dWRlLiBUaGUgYW1vdW50IHRoZSBub2lzZSBhZmZlY3RzIHRoZSBtb3ZlbWVudC5cbmNvbnN0IE5PSVNFX0FNT1VOVCA9IDU7XG4vLyBUaGUgZnJlcXVlbmN5LiBTbWFsbGVyIGZvciBmbGF0IHNsb3BlcywgaGlnaGVyIGZvciBqYWdnZWQgc3Bpa2VzLlxuY29uc3QgTk9JU0VfU1BFRUQgPSAwLjAwNDtcbi8vIFBpeGVscyB0byBtb3ZlIHBlciBmcmFtZS4gQXQgNjBmcHMsIHRoaXMgd291bGQgYmUgMThweCBhIHNlYy5cbmNvbnN0IFNDUk9MTF9TUEVFRCA9IDAuMztcblxuY29uc3QgYnViYmxlcyA9IFtcbiAge1xuICAgIHM6IDAuNixcbiAgICB4OiAxMTM0LFxuICAgIHk6IDQ1LFxuICB9LFxuICB7XG4gICAgczogMC42LFxuICAgIHg6IDE2MjAsXG4gICAgeTogMjcxLFxuICB9LFxuICB7XG4gICAgczogMC42LFxuICAgIHg6IDE3NjEsXG4gICAgeTogMzcyLFxuICB9LFxuICB7XG4gICAgczogMC42LFxuICAgIHg6IDI0OTksXG4gICAgeTogNzksXG4gIH0sXG4gIHtcbiAgICBzOiAwLjgsXG4gICAgeDogMjcwNCxcbiAgICB5OiAzMzQsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjYsXG4gICAgeDogMjI3MSxcbiAgICB5OiAzNTYsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjYsXG4gICAgeDogNzk1LFxuICAgIHk6IDIyNixcbiAgfSxcbiAge1xuICAgIHM6IDAuNixcbiAgICB4OiAyNzYsXG4gICAgeTogMjU2LFxuICB9LFxuICB7XG4gICAgczogMC42LFxuICAgIHg6IDEyMTAsXG4gICAgeTogMzY1LFxuICB9LFxuICB7XG4gICAgczogMC42LFxuICAgIHg6IDQ0NCxcbiAgICB5OiAxOTMsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjYsXG4gICAgeDogMjU0NSxcbiAgICB5OiAzODcsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjgsXG4gICAgeDogMTMwMyxcbiAgICB5OiAxOTMsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjgsXG4gICAgeDogOTA3LFxuICAgIHk6IDg4LFxuICB9LFxuICB7XG4gICAgczogMC44LFxuICAgIHg6IDYzMyxcbiAgICB5OiAzMjAsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjgsXG4gICAgeDogMzIzLFxuICAgIHk6IDYwLFxuICB9LFxuICB7XG4gICAgczogMC44LFxuICAgIHg6IDEyOSxcbiAgICB5OiAzNTcsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjgsXG4gICAgeDogMTQ0MCxcbiAgICB5OiAzNDIsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjgsXG4gICAgeDogMTkyOSxcbiAgICB5OiAyOTMsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjgsXG4gICAgeDogMjEzNSxcbiAgICB5OiAxOTgsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjgsXG4gICAgeDogMjI3NixcbiAgICB5OiA4MixcbiAgfSxcbiAge1xuICAgIHM6IDAuOCxcbiAgICB4OiAyNjU0LFxuICAgIHk6IDE4MixcbiAgfSxcbiAge1xuICAgIHM6IDAuOCxcbiAgICB4OiAyNzgzLFxuICAgIHk6IDYwLFxuICB9LFxuICB7XG4gICAgczogMS4wLFxuICAgIHg6IDE1MTksXG4gICAgeTogMTE4LFxuICB9LFxuICB7XG4gICAgczogMS4wLFxuICAgIHg6IDEwNzEsXG4gICAgeTogMjMzLFxuICB9LFxuICB7XG4gICAgczogMS4wLFxuICAgIHg6IDE3NzMsXG4gICAgeTogMTQ4LFxuICB9LFxuICB7XG4gICAgczogMS4wLFxuICAgIHg6IDIwOTgsXG4gICAgeTogMzg1LFxuICB9LFxuICB7XG4gICAgczogMS4wLFxuICAgIHg6IDI0MjMsXG4gICAgeTogMjQ0LFxuICB9LFxuICB7XG4gICAgczogMS4wLFxuICAgIHg6IDkwMSxcbiAgICB5OiAzODUsXG4gIH0sXG4gIHtcbiAgICBzOiAxLjAsXG4gICAgeDogNjI0LFxuICAgIHk6IDExMSxcbiAgfSxcbiAge1xuICAgIHM6IDEuMCxcbiAgICB4OiA3NSxcbiAgICB5OiAxMDMsXG4gIH0sXG4gIHtcbiAgICBzOiAxLjAsXG4gICAgeDogNDEzLFxuICAgIHk6IDM2NyxcbiAgfSxcbiAge1xuICAgIHM6IDEuMCxcbiAgICB4OiAyODk1LFxuICAgIHk6IDI3MSxcbiAgfSxcbiAge1xuICAgIHM6IDEuMCxcbiAgICB4OiAxOTkwLFxuICAgIHk6IDc1LFxuICB9LFxuXTtcblxuY29uc3QgYmFja2dyb3VuZFBvc2l0aW9uczogc3RyaW5nW10gPSBbXTtcblxuZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpICs9IDEpIHtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCA3OyBqICs9IDEpIHtcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb25zLnB1c2goYCR7LTE1NCAqIGp9cHggJHstMTU0ICogaX1weGApO1xuICB9XG59XG5cbmNvbnN0IG5vaXNlID0gbmV3IE5vaXNlKCk7XG5cblxuY29uc3QgSG9tZVBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCBhbmltYXRpb25SZWYgPSBSZWFjdC51c2VSZWY8bnVtYmVyPigpO1xuICBjb25zdCBidWJibGVzUmVmID0gUmVhY3QudXNlUmVmKFxuICAgIGJ1YmJsZXMubWFwKChidWJibGUpID0+ICh7XG4gICAgICAuLi5idWJibGUsXG4gICAgICBub2lzZVNlZWRYOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3MDAwMCksXG4gICAgICBub2lzZVNlZWRZOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA3MDAwMCksXG4gICAgICB4V2l0aE5vaXNlOiBidWJibGUueCxcbiAgICAgIHlXaXRoTm9pc2U6IGJ1YmJsZS55LFxuICAgIH0pKSxcbiAgKTtcblxuICBjb25zdCBbaXNSZWFkeSwgc2V0UmVhZHldID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRSZWFkeSh0cnVlKTtcbiAgICB9LCAyMDApO1xuXG4gICAgYW5pbWF0aW9uUmVmLmN1cnJlbnQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgaWYgKGFuaW1hdGlvblJlZi5jdXJyZW50KSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvblJlZi5jdXJyZW50KTtcbiAgICAgIH1cbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICBidWJibGVzUmVmLmN1cnJlbnQgPSBidWJibGVzUmVmLmN1cnJlbnQubWFwKChidWJibGUsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBuZXdOb2lzZVNlZWRYID0gYnViYmxlLm5vaXNlU2VlZFggKyBOT0lTRV9TUEVFRDtcbiAgICAgIGNvbnN0IG5ld05vaXNlU2VlZFkgPSBidWJibGUubm9pc2VTZWVkWSArIE5PSVNFX1NQRUVEO1xuXG4gICAgICBjb25zdCByYW5kb21YID0gbm9pc2Uuc2ltcGxleDIobmV3Tm9pc2VTZWVkWCwgMCk7XG4gICAgICBjb25zdCByYW5kb21ZID0gbm9pc2Uuc2ltcGxleDIobmV3Tm9pc2VTZWVkWSwgMCk7XG5cbiAgICAgIGNvbnN0IG5ld1ggPSBidWJibGUueCAtIFNDUk9MTF9TUEVFRDtcblxuICAgICAgY29uc3QgbmV3WFdpdGhOb2lzZSA9IG5ld1ggKyByYW5kb21YICogTk9JU0VfQU1PVU5UO1xuICAgICAgY29uc3QgbmV3WVdpdGhOb2lzZSA9IGJ1YmJsZS55ICsgcmFuZG9tWSAqIE5PSVNFX0FNT1VOVDtcblxuICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBidWJibGUtJHtpbmRleH1gKTtcblxuICAgICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKCR7bmV3WFdpdGhOb2lzZX1weCwgJHtuZXdZV2l0aE5vaXNlfXB4KSBzY2FsZSgke2J1YmJsZS5zfSlgO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5idWJibGUsXG4gICAgICAgIG5vaXNlU2VlZFg6IG5ld05vaXNlU2VlZFgsXG4gICAgICAgIG5vaXNlU2VlZFk6IG5ld05vaXNlU2VlZFksXG4gICAgICAgIC8vIHg6IG5ld1ggPCAtMjAwID8gQ0FOVkFTX1dJRFRIIDogbmV3WCxcbiAgICAgICAgeFdpdGhOb2lzZTogbmV3WFdpdGhOb2lzZSxcbiAgICAgICAgeVdpdGhOb2lzZTogbmV3WVdpdGhOb2lzZSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICBhbmltYXRpb25SZWYuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidWJibGVzLXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnViYmxlc1wiPlxuICAgICAgICB7YnViYmxlcy5tYXAoKGJ1YmJsZSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidWJibGVcIlxuICAgICAgICAgICAgaWQ9e2BidWJibGUtJHtpbmRleH1gfVxuICAgICAgICAgICAga2V5PXtgJHtidWJibGUueH0gJHtidWJibGUueX1gfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBiYWNrZ3JvdW5kUG9zaXRpb25zW2luZGV4XSxcbiAgICAgICAgICAgICAgb3BhY2l0eTogaXNSZWFkeSA/IDEgOiAwLFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUoJHtidWJibGUueH1weCwgJHtidWJibGUueX1weCkgc2NhbGUoJHtidWJibGUuc30pYCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});