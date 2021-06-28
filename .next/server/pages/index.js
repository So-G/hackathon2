/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function () {
  var exports = {};
  exports.id = 'pages/index';
  exports.ids = ['pages/index'];
  exports.modules = {
    /***/ './pages/index.tsx':
      /*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var noisejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! noisejs */ "noisejs");\n/* harmony import */ var noisejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(noisejs__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = "/Users/solenewcs/Desktop/Hackathon 2/hackathon2-front/pages/index.tsx";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // Modules\n\n\nconst CANVAS_WIDTH = 3000; // The amplitude. The amount the noise affects the movement.\n\nconst NOISE_AMOUNT = 5; // The frequency. Smaller for flat slopes, higher for jagged spikes.\n\nconst NOISE_SPEED = 0.004; // Pixels to move per frame. At 60fps, this would be 18px a sec.\n\nconst SCROLL_SPEED = 0.3;\nconst bubbles = [{\n  s: 0.6,\n  x: 1134,\n  y: 45\n}, {\n  s: 0.6,\n  x: 1620,\n  y: 271\n}, {\n  s: 0.6,\n  x: 1761,\n  y: 372\n}, {\n  s: 0.6,\n  x: 2499,\n  y: 79\n}, {\n  s: 0.8,\n  x: 2704,\n  y: 334\n}, {\n  s: 0.6,\n  x: 2271,\n  y: 356\n}, {\n  s: 0.6,\n  x: 795,\n  y: 226\n}, {\n  s: 0.6,\n  x: 276,\n  y: 256\n}, {\n  s: 0.6,\n  x: 1210,\n  y: 365\n}, {\n  s: 0.6,\n  x: 444,\n  y: 193\n}, {\n  s: 0.6,\n  x: 2545,\n  y: 387\n}, {\n  s: 0.8,\n  x: 1303,\n  y: 193\n}, {\n  s: 0.8,\n  x: 907,\n  y: 88\n}, {\n  s: 0.8,\n  x: 633,\n  y: 320\n}, {\n  s: 0.8,\n  x: 323,\n  y: 60\n}, {\n  s: 0.8,\n  x: 129,\n  y: 357\n}, {\n  s: 0.8,\n  x: 1440,\n  y: 342\n}, {\n  s: 0.8,\n  x: 1929,\n  y: 293\n}, {\n  s: 0.8,\n  x: 2135,\n  y: 198\n}, {\n  s: 0.8,\n  x: 2276,\n  y: 82\n}, {\n  s: 0.8,\n  x: 2654,\n  y: 182\n}, {\n  s: 0.8,\n  x: 2783,\n  y: 60\n}, {\n  s: 1.0,\n  x: 1519,\n  y: 118\n}, {\n  s: 1.0,\n  x: 1071,\n  y: 233\n}, {\n  s: 1.0,\n  x: 1773,\n  y: 148\n}, {\n  s: 1.0,\n  x: 2098,\n  y: 385\n}, {\n  s: 1.0,\n  x: 2423,\n  y: 244\n}, {\n  s: 1.0,\n  x: 901,\n  y: 385\n}, {\n  s: 1.0,\n  x: 624,\n  y: 111\n}, {\n  s: 1.0,\n  x: 75,\n  y: 103\n}, {\n  s: 1.0,\n  x: 413,\n  y: 367\n}, {\n  s: 1.0,\n  x: 2895,\n  y: 271\n}, {\n  s: 1.0,\n  x: 1990,\n  y: 75\n}];\nconst backgroundPositions = [];\n\nfor (let i = 0; i < 7; i += 1) {\n  for (let j = 0; j < 7; j += 1) {\n    backgroundPositions.push(`${-154 * j}px ${-154 * i}px`);\n  }\n}\n\nconst noise = new noisejs__WEBPACK_IMPORTED_MODULE_2__.Noise();\n\nconst HomePage = () => {\n  const animationRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef();\n  const bubblesRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(bubbles.map(bubble => _objectSpread(_objectSpread({}, bubble), {}, {\n    noiseSeedX: Math.floor(Math.random() * 79000),\n    noiseSeedY: Math.floor(Math.random() * 79000),\n    xWithNoise: bubble.x,\n    yWithNoise: bubble.y\n  })));\n  const [isReady, setReady] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n  react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {\n    setTimeout(() => {\n      setReady(true);\n    }, 200);\n    animationRef.current = requestAnimationFrame(animate);\n    return () => {\n      if (animationRef.current) {\n        cancelAnimationFrame(animationRef.current);\n      }\n    };\n  }, []);\n\n  function animate() {\n    bubblesRef.current = bubblesRef.current.map((bubble, index) => {\n      const newNoiseSeedX = bubble.noiseSeedX + NOISE_SPEED;\n      const newNoiseSeedY = bubble.noiseSeedY + NOISE_SPEED;\n      const randomX = noise.simplex2(newNoiseSeedX, 0);\n      const randomY = noise.simplex2(newNoiseSeedY, 0);\n      const newX = bubble.x - SCROLL_SPEED;\n      const newXWithNoise = newX + randomX * NOISE_AMOUNT;\n      const newYWithNoise = bubble.y + randomY * NOISE_AMOUNT;\n      const element = document.getElementById(`bubble-${index}`);\n\n      if (element) {\n        element.style.transform = `translate(${newXWithNoise}px, ${newYWithNoise}px) scale(${bubble.s})`;\n      }\n\n      return _objectSpread(_objectSpread({}, bubble), {}, {\n        noiseSeedX: newNoiseSeedX,\n        noiseSeedY: newNoiseSeedY,\n        // x: newX < -200 ? CANVAS_WIDTH : newX,\n        xWithNoise: newXWithNoise,\n        yWithNoise: newYWithNoise\n      });\n    });\n    animationRef.current = requestAnimationFrame(animate);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n    className: "bubbles-wrapper",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n      className: "bubbles",\n      children: bubbles.map((bubble, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        className: "bubble",\n        id: `bubble-${index}`,\n        style: {\n          backgroundPosition: backgroundPositions[index],\n          opacity: isReady ? 1 : 0,\n          transform: `translate(${bubble.x}px, ${bubble.y}px) scale(${bubble.s})`\n        }\n      }, `${bubble.x} ${bubble.y}`, false, {\n        fileName: _jsxFileName,\n        lineNumber: 257,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 255,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n      className: "bubble company-1"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 269,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n      className: "bubble company-2"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 270,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n      className: "bubble company-3"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 271,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 254,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVha2luZy1jb2RlLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiQ0FOVkFTX1dJRFRIIiwiTk9JU0VfQU1PVU5UIiwiTk9JU0VfU1BFRUQiLCJTQ1JPTExfU1BFRUQiLCJidWJibGVzIiwicyIsIngiLCJ5IiwiYmFja2dyb3VuZFBvc2l0aW9ucyIsImkiLCJqIiwicHVzaCIsIm5vaXNlIiwiTm9pc2UiLCJIb21lUGFnZSIsImFuaW1hdGlvblJlZiIsIlJlYWN0IiwiYnViYmxlc1JlZiIsIm1hcCIsImJ1YmJsZSIsIm5vaXNlU2VlZFgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJub2lzZVNlZWRZIiwieFdpdGhOb2lzZSIsInlXaXRoTm9pc2UiLCJpc1JlYWR5Iiwic2V0UmVhZHkiLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFuaW1hdGUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImluZGV4IiwibmV3Tm9pc2VTZWVkWCIsIm5ld05vaXNlU2VlZFkiLCJyYW5kb21YIiwic2ltcGxleDIiLCJyYW5kb21ZIiwibmV3WCIsIm5ld1hXaXRoTm9pc2UiLCJuZXdZV2l0aE5vaXNlIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsInRyYW5zZm9ybSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFFQTtBQUVBLE1BQU1BLFlBQVksR0FBRyxJQUFyQixDLENBQ0E7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLENBQXJCLEMsQ0FDQTs7QUFDQSxNQUFNQyxXQUFXLEdBQUcsS0FBcEIsQyxDQUNBOztBQUNBLE1BQU1DLFlBQVksR0FBRyxHQUFyQjtBQUVBLE1BQU1DLE9BQU8sR0FBRyxDQUNkO0FBQ0VDLEdBQUMsRUFBRSxHQURMO0FBRUVDLEdBQUMsRUFBRSxJQUZMO0FBR0VDLEdBQUMsRUFBRTtBQUhMLENBRGMsRUFNZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQU5jLEVBV2Q7QUFDRUYsR0FBQyxFQUFFLEdBREw7QUFFRUMsR0FBQyxFQUFFLElBRkw7QUFHRUMsR0FBQyxFQUFFO0FBSEwsQ0FYYyxFQWdCZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQWhCYyxFQXFCZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQXJCYyxFQTBCZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQTFCYyxFQStCZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsR0FGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQS9CYyxFQW9DZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsR0FGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQXBDYyxFQXlDZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQXpDYyxFQThDZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsR0FGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQTlDYyxFQW1EZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQW5EYyxFQXdEZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQXhEYyxFQTZEZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsR0FGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQTdEYyxFQWtFZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsR0FGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQWxFYyxFQXVFZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsR0FGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQXZFYyxFQTRFZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsR0FGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQTVFYyxFQWlGZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQWpGYyxFQXNGZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQXRGYyxFQTJGZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQTNGYyxFQWdHZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQWhHYyxFQXFHZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQXJHYyxFQTBHZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQTFHYyxFQStHZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQS9HYyxFQW9IZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFDLEVBQUU7QUFITCxDQXBIYyxFQXlIZDtBQUNFRixHQUFDLEVBQUUsR0FETDtBQUVFQyxHQUFDLEVBQUUsSUFGTDtBQUdFQyxHQUFD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Q1g7QUFDRSxpQkFBUyxFQUFDLFFBRFo7QUFFRSxVQUFFLEVBQUcsVUFBU0EsS0FBTSxFQUZ0QjtBQUlFLGFBQUssRUFBRTtBQUNMYyw0QkFBa0IsRUFBRXhDLG1CQUFtQixDQUFDMEIsS0FBRCxDQURsQztBQUVMZSxpQkFBTyxFQUFFdEIsT0FBTyxHQUFHLENBQUgsR0FBTyxDQUZsQjtBQUdMb0IsbUJBQVMsRUFBRyxhQUFZNUIsTUFBTSxDQUFDYixDQUFFLE9BQU1hLE1BQU0sQ0FBQ1osQ0FBRSxhQUFZWSxNQUFNLENBQUNkLENBQUU7QUFIaEU7QUFKVCxTQUdRLEdBQUVjLE1BQU0sQ0FBQ2IsQ0FBRSxJQUFHYSxNQUFNLENBQUNaLENBQUUsRUFIL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFlRTtBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZkYsZUFnQkU7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRixlQWlCRTtBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBcUJELENBakZEOztBQW1GQSwrREFBZU8sUUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBNb2R1bGVzXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQvdHlwZXMnO1xuaW1wb3J0IHsgTm9pc2UgfSBmcm9tICdub2lzZWpzJztcblxuY29uc3QgQ0FOVkFTX1dJRFRIID0gMzAwMDtcbi8vIFRoZSBhbXBsaXR1ZGUuIFRoZSBhbW91bnQgdGhlIG5vaXNlIGFmZmVjdHMgdGhlIG1vdmVtZW50LlxuY29uc3QgTk9JU0VfQU1PVU5UID0gNTtcbi8vIFRoZSBmcmVxdWVuY3kuIFNtYWxsZXIgZm9yIGZsYXQgc2xvcGVzLCBoaWdoZXIgZm9yIGphZ2dlZCBzcGlrZXMuXG5jb25zdCBOT0lTRV9TUEVFRCA9IDAuMDA0O1xuLy8gUGl4ZWxzIHRvIG1vdmUgcGVyIGZyYW1lLiBBdCA2MGZwcywgdGhpcyB3b3VsZCBiZSAxOHB4IGEgc2VjLlxuY29uc3QgU0NST0xMX1NQRUVEID0gMC4zO1xuXG5jb25zdCBidWJibGVzID0gW1xuICB7XG4gICAgczogMC42LFxuICAgIHg6IDExMzQsXG4gICAgeTogNDUsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjYsXG4gICAgeDogMTYyMCxcbiAgICB5OiAyNzEsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjYsXG4gICAgeDogMTc2MSxcbiAgICB5OiAzNzIsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjYsXG4gICAgeDogMjQ5OSxcbiAgICB5OiA3OSxcbiAgfSxcbiAge1xuICAgIHM6IDAuOCxcbiAgICB4OiAyNzA0LFxuICAgIHk6IDMzNCxcbiAgfSxcbiAge1xuICAgIHM6IDAuNixcbiAgICB4OiAyMjcxLFxuICAgIHk6IDM1NixcbiAgfSxcbiAge1xuICAgIHM6IDAuNixcbiAgICB4OiA3OTUsXG4gICAgeTogMjI2LFxuICB9LFxuICB7XG4gICAgczogMC42LFxuICAgIHg6IDI3NixcbiAgICB5OiAyNTYsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjYsXG4gICAgeDogMTIxMCxcbiAgICB5OiAzNjUsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjYsXG4gICAgeDogNDQ0LFxuICAgIHk6IDE5MyxcbiAgfSxcbiAge1xuICAgIHM6IDAuNixcbiAgICB4OiAyNTQ1LFxuICAgIHk6IDM4NyxcbiAgfSxcbiAge1xuICAgIHM6IDAuOCxcbiAgICB4OiAxMzAzLFxuICAgIHk6IDE5MyxcbiAgfSxcbiAge1xuICAgIHM6IDAuOCxcbiAgICB4OiA5MDcsXG4gICAgeTogODgsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjgsXG4gICAgeDogNjMzLFxuICAgIHk6IDMyMCxcbiAgfSxcbiAge1xuICAgIHM6IDAuOCxcbiAgICB4OiAzMjMsXG4gICAgeTogNjAsXG4gIH0sXG4gIHtcbiAgICBzOiAwLjgsXG4gICAgeDogMTI5LFxuICAgIHk6IDM1NyxcbiAgfSxcbiAge1xuICAgIHM6IDAuOCxcbiAgICB4OiAxNDQwLFxuICAgIHk6IDM0MixcbiAgfSxcbiAge1xuICAgIHM6IDAuOCxcbiAgICB4OiAxOTI5LFxuICAgIHk6IDI5MyxcbiAgfSxcbiAge1xuICAgIHM6IDAuOCxcbiAgICB4OiAyMTM1LFxuICAgIHk6IDE5OCxcbiAgfSxcbiAge1xuICAgIHM6IDAuOCxcbiAgICB4OiAyMjc2LFxuICAgIHk6IDgyLFxuICB9LFxuICB7XG4gICAgczogMC44LFxuICAgIHg6IDI2NTQsXG4gICAgeTogMTgyLFxuICB9LFxuICB7XG4gICAgczogMC44LFxuICAgIHg6IDI3ODMsXG4gICAgeTogNjAsXG4gIH0sXG4gIHtcbiAgICBzOiAxLjAsXG4gICAgeDogMTUxOSxcbiAgICB5OiAxMTgsXG4gIH0sXG4gIHtcbiAgICBzOiAxLjAsXG4gICAgeDogMTA3MSxcbiAgICB5OiAyMzMsXG4gIH0sXG4gIHtcbiAgICBzOiAxLjAsXG4gICAgeDogMTc3MyxcbiAgICB5OiAxNDgsXG4gIH0sXG4gIHtcbiAgICBzOiAxLjAsXG4gICAgeDogMjA5OCxcbiAgICB5OiAzODUsXG4gIH0sXG4gIHtcbiAgICBzOiAxLjAsXG4gICAgeDogMjQyMyxcbiAgICB5OiAyNDQsXG4gIH0sXG4gIHtcbiAgICBzOiAxLjAsXG4gICAgeDogOTAxLFxuICAgIHk6IDM4NSxcbiAgfSxcbiAge1xuICAgIHM6IDEuMCxcbiAgICB4OiA2MjQsXG4gICAgeTogMTExLFxuICB9LFxuICB7XG4gICAgczogMS4wLFxuICAgIHg6IDc1LFxuICAgIHk6IDEwMyxcbiAgfSxcbiAge1xuICAgIHM6IDEuMCxcbiAgICB4OiA0MTMsXG4gICAgeTogMzY3LFxuICB9LFxuICB7XG4gICAgczogMS4wLFxuICAgIHg6IDI4OTUsXG4gICAgeTogMjcxLFxuICB9LFxuICB7XG4gICAgczogMS4wLFxuICAgIHg6IDE5OTAsXG4gICAgeTogNzUsXG4gIH0sXG5dO1xuXG5jb25zdCBiYWNrZ3JvdW5kUG9zaXRpb25zOiBzdHJpbmdbXSA9IFtdO1xuXG5mb3IgKGxldCBpID0gMDsgaSA8IDc7IGkgKz0gMSkge1xuICBmb3IgKGxldCBqID0gMDsgaiA8IDc7IGogKz0gMSkge1xuICAgIGJhY2tncm91bmRQb3NpdGlvbnMucHVzaChgJHstMTU0ICogan1weCAkey0xNTQgKiBpfXB4YCk7XG4gIH1cbn1cblxuY29uc3Qgbm9pc2UgPSBuZXcgTm9pc2UoKTtcblxuXG5jb25zdCBIb21lUGFnZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IGFuaW1hdGlvblJlZiA9IFJlYWN0LnVzZVJlZjxudW1iZXI+KCk7XG4gIGNvbnN0IGJ1YmJsZXNSZWYgPSBSZWFjdC51c2VSZWYoXG4gICAgYnViYmxlcy5tYXAoKGJ1YmJsZSkgPT4gKHtcbiAgICAgIC4uLmJ1YmJsZSxcbiAgICAgIG5vaXNlU2VlZFg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDc5MDAwKSxcbiAgICAgIG5vaXNlU2VlZFk6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDc5MDAwKSxcbiAgICAgIHhXaXRoTm9pc2U6IGJ1YmJsZS54LFxuICAgICAgeVdpdGhOb2lzZTogYnViYmxlLnksXG4gICAgfSkpLFxuICApO1xuXG4gIGNvbnN0IFtpc1JlYWR5LCBzZXRSZWFkeV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFJlYWR5KHRydWUpO1xuICAgIH0sIDIwMCk7XG5cbiAgICBhbmltYXRpb25SZWYuY3VycmVudCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoYW5pbWF0aW9uUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uUmVmLmN1cnJlbnQpO1xuICAgICAgfVxuICAgIH07XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIGJ1YmJsZXNSZWYuY3VycmVudCA9IGJ1YmJsZXNSZWYuY3VycmVudC5tYXAoKGJ1YmJsZSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IG5ld05vaXNlU2VlZFggPSBidWJibGUubm9pc2VTZWVkWCArIE5PSVNFX1NQRUVEO1xuICAgICAgY29uc3QgbmV3Tm9pc2VTZWVkWSA9IGJ1YmJsZS5ub2lzZVNlZWRZICsgTk9JU0VfU1BFRUQ7XG5cbiAgICAgIGNvbnN0IHJhbmRvbVggPSBub2lzZS5zaW1wbGV4MihuZXdOb2lzZVNlZWRYLCAwKTtcbiAgICAgIGNvbnN0IHJhbmRvbVkgPSBub2lzZS5zaW1wbGV4MihuZXdOb2lzZVNlZWRZLCAwKTtcblxuICAgICAgY29uc3QgbmV3WCA9IGJ1YmJsZS54IC0gU0NST0xMX1NQRUVEO1xuXG4gICAgICBjb25zdCBuZXdYV2l0aE5vaXNlID0gbmV3WCArIHJhbmRvbVggKiBOT0lTRV9BTU9VTlQ7XG4gICAgICBjb25zdCBuZXdZV2l0aE5vaXNlID0gYnViYmxlLnkgKyByYW5kb21ZICogTk9JU0VfQU1PVU5UO1xuXG4gICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGJ1YmJsZS0ke2luZGV4fWApO1xuXG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUoJHtuZXdYV2l0aE5vaXNlfXB4LCAke25ld1lXaXRoTm9pc2V9cHgpIHNjYWxlKCR7YnViYmxlLnN9KWA7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmJ1YmJsZSxcbiAgICAgICAgbm9pc2VTZWVkWDogbmV3Tm9pc2VTZWVkWCxcbiAgICAgICAgbm9pc2VTZWVkWTogbmV3Tm9pc2VTZWVkWSxcbiAgICAgICAgLy8geDogbmV3WCA8IC0yMDAgPyBDQU5WQVNfV0lEVEggOiBuZXdYLFxuICAgICAgICB4V2l0aE5vaXNlOiBuZXdYV2l0aE5vaXNlLFxuICAgICAgICB5V2l0aE5vaXNlOiBuZXdZV2l0aE5vaXNlLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGFuaW1hdGlvblJlZi5jdXJyZW50ID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1YmJsZXMtd3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWJibGVzXCI+XG4gICAgICAgIHtidWJibGVzLm1hcCgoYnViYmxlLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1YmJsZVwiXG4gICAgICAgICAgICBpZD17YGJ1YmJsZS0ke2luZGV4fWB9XG4gICAgICAgICAgICBrZXk9e2Ake2J1YmJsZS54fSAke2J1YmJsZS55fWB9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IGJhY2tncm91bmRQb3NpdGlvbnNbaW5kZXhdLFxuICAgICAgICAgICAgICBvcGFjaXR5OiBpc1JlYWR5ID8gMSA6IDAsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke2J1YmJsZS54fXB4LCAke2J1YmJsZS55fXB4KSBzY2FsZSgke2J1YmJsZS5zfSlgLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJidWJibGUgY29tcGFueS0xXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnViYmxlIGNvbXBhbnktMlwiIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1YmJsZSBjb21wYW55LTNcIiAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n'
        );

        /***/
      },

    /***/ noisejs:
      /*!**************************!*\
  !*** external "noisejs" ***!
  \**************************/
      /***/ function (module) {
        'use strict';
        module.exports = require('noisejs');

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /***/ function (module) {
        'use strict';
        module.exports = require('react');

        /***/
      },

    /***/ 'react/jsx-dev-runtime':
      /*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
      /***/ function (module) {
        'use strict';
        module.exports = require('react/jsx-dev-runtime');

        /***/
      },
  };
  // load runtime
  var __webpack_require__ = require('../webpack-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = function (moduleId) {
    return __webpack_require__((__webpack_require__.s = moduleId));
  };
  var __webpack_exports__ = __webpack_exec__('./pages/index.tsx');
  module.exports = __webpack_exports__;
})();
