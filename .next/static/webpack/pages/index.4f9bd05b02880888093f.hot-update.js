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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_solenewcs_Desktop_Hackathon_2_hackathon2_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var noisejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! noisejs */ \"./node_modules/noisejs/index.js\");\n/* harmony import */ var noisejs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(noisejs__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/solenewcs/Desktop/Hackathon 2/hackathon2-front/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_solenewcs_Desktop_Hackathon_2_hackathon2_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n // Modules\n\n\nconst CANVAS_WIDTH = 3000; // The amplitude. The amount the noise affects the movement.\n\nconst NOISE_AMOUNT = 5; // The frequency. Smaller for flat slopes, higher for jagged spikes.\n\nconst NOISE_SPEED = 0.004; // Pixels to move per frame. At 60fps, this would be 18px a sec.\n\nconst SCROLL_SPEED = 0.3;\nconst bubbles = [{\n  s: 0.6,\n  x: 1134,\n  y: 45\n}, // {\n//   s: 0.6,\n//   x: 1620,\n//   y: 271,\n// },\n// {\n//   s: 0.6,\n//   x: 1761,\n//   y: 372,\n// },\n// {\n//   s: 0.6,\n//   x: 2499,\n//   y: 79,\n// },\n// {\n//   s: 0.8,\n//   x: 2704,\n//   y: 334,\n// },\n// {\n//   s: 0.6,\n//   x: 2271,\n//   y: 356,\n// },\n{\n  s: 0.6,\n  x: 795,\n  y: 226\n}, {\n  s: 0.6,\n  x: 276,\n  y: 256\n}, {\n  s: 0.6,\n  x: 1210,\n  y: 365\n}, {\n  s: 0.6,\n  x: 444,\n  y: 193\n}, // {\n//   s: 0.6,\n//   x: 2545,\n//   y: 387,\n// },\n// {\n//   s: 0.8,\n//   x: 1303,\n//   y: 193,\n// },\n{\n  s: 0.8,\n  x: 907,\n  y: 88\n}, {\n  s: 0.8,\n  x: 633,\n  y: 320\n}, {\n  s: 0.8,\n  x: 323,\n  y: 60\n}, {\n  s: 0.8,\n  x: 129,\n  y: 357\n}, {\n  s: 0.8,\n  x: 1440,\n  y: 342\n}, // {\n//   s: 0.8,\n//   x: 1929,\n//   y: 293,\n// },\n// {\n//   s: 0.8,\n//   x: 2135,\n//   y: 198,\n// },\n// {\n//   s: 0.8,\n//   x: 2276,\n//   y: 82,\n// },\n// {\n//   s: 0.8,\n//   x: 2654,\n//   y: 182,\n// },\n// {\n//   s: 0.8,\n//   x: 2783,\n//   y: 60,\n// },\n// {\n//   s: 1.0,\n//   x: 1519,\n//   y: 118,\n// },\n{\n  s: 1.0,\n  x: 1071,\n  y: 233\n}, // {\n//   s: 1.0,\n//   x: 1773,\n//   y: 148,\n// },\n// {\n//   s: 1.0,\n//   x: 2098,\n//   y: 385,\n// },\n// {\n//   s: 1.0,\n//   x: 2423,\n//   y: 244,\n// },\n{\n  s: 1.0,\n  x: 901,\n  y: 385\n}, {\n  s: 1.0,\n  x: 624,\n  y: 111\n}, {\n  s: 1.0,\n  x: 75,\n  y: 103\n} // {\n//   s: 1.0,\n//   x: 413,\n//   y: 367,\n// },\n// {\n//   s: 1.0,\n//   x: 2895,\n//   y: 271,\n// },\n// {\n//   s: 1.0,\n//   x: 1990,\n//   y: 75,\n// },\n];\nconst backgroundPositions = [];\n\nfor (let i = 0; i < 7; i += 1) {\n  for (let j = 0; j < 7; j += 1) {\n    backgroundPositions.push(`${-154 * j}px ${-154 * i}px`);\n  }\n}\n\nconst noise = new noisejs__WEBPACK_IMPORTED_MODULE_3__.Noise();\n\nconst HomePage = () => {\n  _s();\n\n  const animationRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef();\n  const bubblesRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(bubbles.map(bubble => _objectSpread(_objectSpread({}, bubble), {}, {\n    noiseSeedX: Math.floor(Math.random() * 79000),\n    noiseSeedY: Math.floor(Math.random() * 79000),\n    xWithNoise: bubble.x,\n    yWithNoise: bubble.y\n  })));\n  const [isReady, setReady] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);\n  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {\n    setTimeout(() => {\n      setReady(true);\n    }, 200);\n    animationRef.current = requestAnimationFrame(animate);\n    return () => {\n      if (animationRef.current) {\n        cancelAnimationFrame(animationRef.current);\n      }\n    };\n  }, []);\n\n  function animate() {\n    bubblesRef.current = bubblesRef.current.map((bubble, index) => {\n      const newNoiseSeedX = bubble.noiseSeedX + NOISE_SPEED;\n      const newNoiseSeedY = bubble.noiseSeedY + NOISE_SPEED;\n      const randomX = noise.simplex2(newNoiseSeedX, 0);\n      const randomY = noise.simplex2(newNoiseSeedY, 0);\n      const newX = bubble.x - SCROLL_SPEED;\n      const newXWithNoise = newX + randomX * NOISE_AMOUNT;\n      const newYWithNoise = bubble.y + randomY * NOISE_AMOUNT;\n      const element = document.getElementById(`bubble-${index}`);\n\n      if (element) {\n        element.style.transform = `translate(${newXWithNoise}px, ${newYWithNoise}px) scale(${bubble.s})`;\n      }\n\n      return _objectSpread(_objectSpread({}, bubble), {}, {\n        noiseSeedX: newNoiseSeedX,\n        noiseSeedY: newNoiseSeedY,\n        // x: newX < -200 ? CANVAS_WIDTH : newX,\n        xWithNoise: newXWithNoise,\n        yWithNoise: newYWithNoise\n      });\n    });\n    animationRef.current = requestAnimationFrame(animate);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"bubbles-wrapper\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"bubbles\",\n      children: bubbles.map((bubble, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bubble\",\n        id: `bubble-${index}`,\n        style: {\n          backgroundPosition: backgroundPositions[index],\n          opacity: isReady ? 1 : 0,\n          transform: `translate(${bubble.x}px, ${bubble.y}px) scale(${bubble.s})`\n        }\n      }, `${bubble.x} ${bubble.y}`, false, {\n        fileName: _jsxFileName,\n        lineNumber: 257,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 255,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 254,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(HomePage, \"we8ZfJ7JyQd7kSktOHxZh5vovLo=\");\n\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomePage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiQ0FOVkFTX1dJRFRIIiwiTk9JU0VfQU1PVU5UIiwiTk9JU0VfU1BFRUQiLCJTQ1JPTExfU1BFRUQiLCJidWJibGVzIiwicyIsIngiLCJ5IiwiYmFja2dyb3VuZFBvc2l0aW9ucyIsImkiLCJqIiwicHVzaCIsIm5vaXNlIiwiTm9pc2UiLCJIb21lUGFnZSIsImFuaW1hdGlvblJlZiIsIlJlYWN0IiwiYnViYmxlc1JlZiIsIm1hcCIsImJ1YmJsZSIsIm5vaXNlU2VlZFgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJub2lzZVNlZWRZIiwieFdpdGhOb2lzZSIsInlXaXRoTm9pc2UiLCJpc1JlYWR5Iiwic2V0UmVhZHkiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImluZGV4IiwibmV3Tm9pc2VTZWVkWCIsIm5ld05vaXNlU2VlZFkiLCJyYW5kb21YIiwic2ltcGxleDIiLCJyYW5kb21ZIiwibmV3WCIsIm5ld1hXaXRoTm9pc2UiLCJuZXdZV2l0aE5vaXNlIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInRyYW5zZm9ybSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFQTtBQUVBLE1BQU1BLFlBQVksR0FBRyxJQUFyQixDLENBQ0E7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLENBQXJCLEMsQ0FDQTs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsS0FBcEIsQyxDQUNBOztBQUNBLE1BQU1DLFlBQVksR0FBRyxHQUFyQjtBQUVBLE1BQU1DLE9BQU8sR0FBRyxDQUNkO0FBQ0VDLEdBQUMsRUFBRSxHQURMO0FBRUVDLEdBQUMsRUFBRSxJQUZMO0FBR0VDLEdBQUMs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QUFTQSxLQUFNLEVBRnRCO0FBSUUsYUFBSyxFQUFFO0FBQ0xjLDRCQUFrQixFQUFFeEMsbUJBQW1CLENBQUMwQixLQUFELENBRGxDO0FBRUxlLGlCQUFPLEVBQUV0QixPQUFPLEdBQUcsQ0FBSCxHQUFPLENBRmxCO0FBR0xvQixtQkFBUyxFQUFHLGFBQVk1QixNQUFNLENBQUNiLENBQUUsT0FBTWEsTUFBTSxDQUFDWixDQUFFLGFBQVlZLE1BQU0sQ0FBQ2QsQ0FBRTtBQUhoRTtBQUpULFNBR1EsR0FBRWMsTUFBTSxDQUFDYixDQUFFLElBQUdhLE1BQU0sQ0FBQ1osQ0FBRSxFQUgvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW1CRCxDQS9FRDs7R0FBTU8sUTs7S0FBQUEsUTtBQWlGTiwrREFBZUEsUUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBNb2R1bGVzXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQvdHlwZXMnO1xuaW1wb3J0IHsgTm9pc2UgfSBmcm9tICdub2lzZWpzJztcblxuY29uc3QgQ0FOVkFTX1dJRFRIID0gMzAwMDtcbi8vIFRoZSBhbXBsaXR1ZGUuIFRoZSBhbW91bnQgdGhlIG5vaXNlIGFmZmVjdHMgdGhlIG1vdmVtZW50LlxuY29uc3QgTk9JU0VfQU1PVU5UID0gNTtcbi8vIFRoZSBmcmVxdWVuY3kuIFNtYWxsZXIgZm9yIGZsYXQgc2xvcGVzLCBoaWdoZXIgZm9yIGphZ2dlZCBzcGlrZXMuXG5jb25zdCBOT0lTRV9TUEVFRCA9IDAuMDA0O1xuLy8gUGl4ZWxzIHRvIG1vdmUgcGVyIGZyYW1lLiBBdCA2MGZwcywgdGhpcyB3b3VsZCBiZSAxOHB4IGEgc2VjLlxuY29uc3QgU0NST0xMX1NQRUVEID0gMC4zO1xuXG5jb25zdCBidWJibGVzID0gW1xuICB7XG4gICAgczogMC42LFxuICAgIHg6IDExMzQsXG4gICAgeTogNDUsXG4gIH0sXG4gIC8vIHtcbiAgLy8gICBzOiAwLjYsXG4gIC8vICAgeDogMTYyMCxcbiAgLy8gICB5OiAyNzEsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBzOiAwLjYsXG4gIC8vICAgeDogMTc2MSxcbiAgLy8gICB5OiAzNzIsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBzOiAwLjYsXG4gIC8vICAgeDogMjQ5OSxcbiAgLy8gICB5OiA3OSxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHM6IDAuOCxcbiAgLy8gICB4OiAyNzA0LFxuICAvLyAgIHk6IDMzNCxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHM6IDAuNixcbiAgLy8gICB4OiAyMjcxLFxuICAvLyAgIHk6IDM1NixcbiAgLy8gfSxcbiAge1xuICAgIHM6IDAuNixcbiAgICB4OiA3OTUsXG4gICAgeTogMjI2LFxuICB9LFxuICB7XG4gICAgczogMC42LFxuICAgIHg6IDI3NixcbiAgICB5OiAyNTYsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjYsXG4gICAgeDogMTIxMCxcbiAgICB5OiAzNjUsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjYsXG4gICAgeDogNDQ0LFxuICAgIHk6IDE5MyxcbiAgfSxcbiAgLy8ge1xuICAvLyAgIHM6IDAuNixcbiAgLy8gICB4OiAyNTQ1LFxuICAvLyAgIHk6IDM4NyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHM6IDAuOCxcbiAgLy8gICB4OiAxMzAzLFxuICAvLyAgIHk6IDE5MyxcbiAgLy8gfSxcbiAge1xuICAgIHM6IDAuOCxcbiAgICB4OiA5MDcsXG4gICAgeTogODgsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjgsXG4gICAgeDogNjMzLFxuICAgIHk6IDMyMCxcbiAgfSxcbiAge1xuICAgIHM6IDAuOCxcbiAgICB4OiAzMjMsXG4gICAgeTogNjAsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjgsXG4gICAgeDogMTI5LFxuICAgIHk6IDM1NyxcbiAgfSxcbiAge1xuICAgIHM6IDAuOCxcbiAgICB4OiAxNDQwLFxuICAgIHk6IDM0MixcbiAgfSxcbiAgLy8ge1xuICAvLyAgIHM6IDAuOCxcbiAgLy8gICB4OiAxOTI5LFxuICAvLyAgIHk6IDI5MyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHM6IDAuOCxcbiAgLy8gICB4OiAyMTM1LFxuICAvLyAgIHk6IDE5OCxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIHM6IDAuOCxcbiAgLy8gICB4OiAyMjc2LFxuICAvLyAgIHk6IDgyLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgczogMC44LFxuICAvLyAgIHg6IDI2NTQsXG4gIC8vICAgeTogMTgyLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgczogMC44LFxuICAvLyAgIHg6IDI3ODMsXG4gIC8vICAgeTogNjAsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBzOiAxLjAsXG4gIC8vICAgeDogMTUxOSxcbiAgLy8gICB5OiAxMTgsXG4gIC8vIH0sXG4gIHtcbiAgICBzOiAxLjAsXG4gICAgeDogMTA3MSxcbiAgICB5OiAyMzMsXG4gIH0sXG4gIC8vIHtcbiAgLy8gICBzOiAxLjAsXG4gIC8vICAgeDogMTc3MyxcbiAgLy8gICB5OiAxNDgsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBzOiAxLjAsXG4gIC8vICAgeDogMjA5OCxcbiAgLy8gICB5OiAzODUsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBzOiAxLjAsXG4gIC8vICAgeDogMjQyMyxcbiAgLy8gICB5OiAyNDQsXG4gIC8vIH0sXG4gIHtcbiAgICBzOiAxLjAsXG4gICAgeDogOTAxLFxuICAgIHk6IDM4NSxcbiAgfSxcbiAge1xuICAgIHM6IDEuMCxcbiAgICB4OiA2MjQsXG4gICAgeTogMTExLFxuICB9LFxuICB7XG4gICAgczogMS4wLFxuICAgIHg6IDc1LFxuICAgIHk6IDEwMyxcbiAgfSxcbiAgLy8ge1xuICAvLyAgIHM6IDEuMCxcbiAgLy8gICB4OiA0MTMsXG4gIC8vICAgeTogMzY3LFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgczogMS4wLFxuICAvLyAgIHg6IDI4OTUsXG4gIC8vICAgeTogMjcxLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgczogMS4wLFxuICAvLyAgIHg6IDE5OTAsXG4gIC8vICAgeTogNzUsXG4gIC8vIH0sXG5dO1xuXG5jb25zdCBiYWNrZ3JvdW5kUG9zaXRpb25zOiBzdHJpbmdbXSA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDc7IGkgKz0gMSkge1xuICBmb3IgKGxldCBqID0gMDsgaiA8IDc7IGogKz0gMSkge1xuICAgIGJhY2tncm91bmRQb3NpdGlvbnMucHVzaChgJHstMTU0ICogan1weCAkey0xNTQgKiBpfXB4YCk7XG4gIH1cbn1cblxuY29uc3Qgbm9pc2UgPSBuZXcgTm9pc2UoKTtcblxuXG5jb25zdCBIb21lUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGFuaW1hdGlvblJlZiA9IFJlYWN0LnVzZVJlZjxudW1iZXI+KCk7XG4gIGNvbnN0IGJ1YmJsZXNSZWYgPSBSZWFjdC51c2VSZWYoXG4gICAgYnViYmxlcy5tYXAoKGJ1YmJsZSkgPT4gKHtcbiAgICAgIC4uLmJ1YmJsZSxcbiAgICAgIG5vaXNlU2VlZFg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDc5MDAwKSxcbiAgICAgIG5vaXNlU2VlZFk6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDc5MDAwKSxcbiAgICAgIHhXaXRoTm9pc2U6IGJ1YmJsZS54LFxuICAgICAgeVdpdGhOb2lzZTogYnViYmxlLnksXG4gICAgfSkpLFxuICApO1xuXG4gIGNvbnN0IFtpc1JlYWR5LCBzZXRSZWFkeV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFJlYWR5KHRydWUpO1xuICAgIH0sIDIwMCk7XG5cbiAgICBhbmltYXRpb25SZWYuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoYW5pbWF0aW9uUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uUmVmLmN1cnJlbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIGJ1YmJsZXNSZWYuY3VycmVudCA9IGJ1YmJsZXNSZWYuY3VycmVudC5tYXAoKGJ1YmJsZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG5ld05vaXNlU2VlZFggPSBidWJibGUubm9pc2VTZWVkWCArIE5PSVNFX1NQRUVEO1xuICAgICAgY29uc3QgbmV3Tm9pc2VTZWVkWSA9IGJ1YmJsZS5ub2lzZVNlZWRZICsgTk9JU0VfU1BFRUQ7XG5cbiAgICAgIGNvbnN0IHJhbmRvbVggPSBub2lzZS5zaW1wbGV4MihuZXdOb2lzZVNlZWRYLCAwKTtcbiAgICAgIGNvbnN0IHJhbmRvbVkgPSBub2lzZS5zaW1wbGV4MihuZXdOb2lzZVNlZWRZLCAwKTtcblxuICAgICAgY29uc3QgbmV3WCA9IGJ1YmJsZS54IC0gU0NST0xMX1NQRUVEO1xuXG4gICAgICBjb25zdCBuZXdYV2l0aE5vaXNlID0gbmV3WCArIHJhbmRvbVggKiBOT0lTRV9BTU9VTlQ7XG4gICAgICBjb25zdCBuZXdZV2l0aE5vaXNlID0gYnViYmxlLnkgKyByYW5kb21ZICogTk9JU0VfQU1PVU5UO1xuXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJ1YmJsZS0ke2luZGV4fWApO1xuXG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtuZXdYV2l0aE5vaXNlfXB4LCAke25ld1lXaXRoTm9pc2V9cHgpIHNjYWxlKCR7YnViYmxlLnN9KWA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmJ1YmJsZSxcbiAgICAgICAgbm9pc2VTZWVkWDogbmV3Tm9pc2VTZWVkWCxcbiAgICAgICAgbm9pc2VTZWVkWTogbmV3Tm9pc2VTZWVkWSxcbiAgICAgICAgLy8geDogbmV3WCA8IC0yMDAgPyBDQU5WQVNfV0lEVEggOiBuZXdYLFxuICAgICAgICB4V2l0aE5vaXNlOiBuZXdYV2l0aE5vaXNlLFxuICAgICAgICB5V2l0aE5vaXNlOiBuZXdZV2l0aE5vaXNlLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGFuaW1hdGlvblJlZi5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1YmJsZXMtd3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWJibGVzXCI+XG4gICAgICAgIHtidWJibGVzLm1hcCgoYnViYmxlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1YmJsZVwiXG4gICAgICAgICAgICBpZD17YGJ1YmJsZS0ke2luZGV4fWB9XG4gICAgICAgICAgICBrZXk9e2Ake2J1YmJsZS54fSAke2J1YmJsZS55fWB9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGJhY2tncm91bmRQb3NpdGlvbnNbaW5kZXhdLFxuICAgICAgICAgICAgICBvcGFjaXR5OiBpc1JlYWR5ID8gMSA6IDAsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke2J1YmJsZS54fXB4LCAke2J1YmJsZS55fXB4KSBzY2FsZSgke2J1YmJsZS5zfSlgLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});