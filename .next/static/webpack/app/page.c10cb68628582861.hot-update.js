"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/nav.tsx":
/*!****************************!*\
  !*** ./components/nav.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Nav: function() { return /* binding */ Nav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _mobile_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-nav */ \"(app-pages-browser)/./components/mobile-nav.tsx\");\n/* __next_internal_client_entry_do_not_use__ Nav auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst navItems = [\n    {\n        href: \"#company\",\n        label: \"Company\",\n        sectionId: \"company\"\n    },\n    {\n        href: \"#approach\",\n        label: \"Approach\",\n        sectionId: \"approach\"\n    },\n    {\n        href: \"#solutions\",\n        label: \"Solutions\",\n        sectionId: \"solutions\"\n    },\n    {\n        href: \"#about\",\n        label: \"Our story\",\n        sectionId: \"about\"\n    },\n    {\n        href: \"#contact\",\n        label: \"Contact\",\n        sectionId: \"contact\"\n    }\n];\nfunction Nav() {\n    _s();\n    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"company\");\n    const handleScroll = ()=>{\n        const sections = navItems.map((item)=>document.getElementById(item.sectionId)).filter(Boolean);\n        if (sections.length === 0) return;\n        let mostVisibleSection = sections[0];\n        let maxVisibility = 0;\n        sections.forEach((section)=>{\n            const rect = section.getBoundingClientRect();\n            const windowHeight = window.innerHeight;\n            const visibleTop = Math.max(0, rect.top);\n            const visibleBottom = Math.min(windowHeight, rect.bottom);\n            const visibleHeight = Math.max(0, visibleBottom - visibleTop);\n            const visibility = visibleHeight / rect.height;\n            if (visibility > maxVisibility) {\n                maxVisibility = visibility;\n                mostVisibleSection = section;\n            }\n        });\n        if (mostVisibleSection && mostVisibleSection.id !== activeSection) {\n            setActiveSection(mostVisibleSection.id);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        handleScroll();\n        window.addEventListener(\"scroll\", handleScroll, {\n            passive: true\n        });\n        return ()=>window.removeEventListener(\"scroll\", handleScroll);\n    }, [\n        activeSection\n    ]);\n    const handleNavClick = (href)=>{\n        const targetId = href.replace(\"#\", \"\");\n        const targetElement = document.getElementById(targetId);\n        if (targetElement) {\n            window.scrollTo({\n                top: targetElement.offsetTop,\n                behavior: \"smooth\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mobile_nav__WEBPACK_IMPORTED_MODULE_4__.MobileNav, {\n                items: navItems,\n                activeSection: activeSection,\n                onNavigate: handleNavClick\n            }, void 0, false, {\n                fileName: \"/Users/elina/interlinear/components/nav.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"desktop-nav\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"nav-wrapper\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            href: \"/\",\n                            className: \"nav-logo\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: \"https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-uUKedsE17DHcdxyNrIjBsHhW1OKAJR.svg\",\n                                alt: \"Interlinear Logo\",\n                                width: 120,\n                                height: 24,\n                                className: \"logo\"\n                            }, void 0, false, {\n                                fileName: \"/Users/elina/interlinear/components/nav.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/elina/interlinear/components/nav.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"nav-links\",\n                            children: navItems.map((item)=>{\n                                const isActive = activeSection === item.sectionId;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: item.href,\n                                    onClick: (e)=>{\n                                        e.preventDefault();\n                                        handleNavClick(item.href);\n                                    },\n                                    className: \"nav-link \".concat(isActive ? \"active\" : \"\"),\n                                    children: [\n                                        isActive && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"nav-dot\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/elina/interlinear/components/nav.tsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 32\n                                        }, this),\n                                        item.label\n                                    ]\n                                }, item.href, true, {\n                                    fileName: \"/Users/elina/interlinear/components/nav.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 17\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/elina/interlinear/components/nav.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/elina/interlinear/components/nav.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/elina/interlinear/components/nav.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Nav, \"risClw+53KMYbgHmER0FIV5yK2I=\");\n_c = Nav;\nvar _c;\n$RefreshReg$(_c, \"Nav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbmF2LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFMkM7QUFDYjtBQUNGO0FBQ1k7QUFFeEMsTUFBTUssV0FBVztJQUNmO1FBQUVDLE1BQU07UUFBWUMsT0FBTztRQUFXQyxXQUFXO0lBQVU7SUFDM0Q7UUFBRUYsTUFBTTtRQUFhQyxPQUFPO1FBQVlDLFdBQVc7SUFBVztJQUM5RDtRQUFFRixNQUFNO1FBQWNDLE9BQU87UUFBYUMsV0FBVztJQUFZO0lBQ2pFO1FBQUVGLE1BQU07UUFBVUMsT0FBTztRQUFhQyxXQUFXO0lBQVE7SUFDekQ7UUFBRUYsTUFBTTtRQUFZQyxPQUFPO1FBQVdDLFdBQVc7SUFBVTtDQUM1RDtBQUVNLFNBQVNDOztJQUNkLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdWLCtDQUFRQSxDQUFTO0lBRTNELE1BQU1XLGVBQWU7UUFDbkIsTUFBTUMsV0FBV1IsU0FBU1MsR0FBRyxDQUFDLENBQUNDLE9BQVNDLFNBQVNDLGNBQWMsQ0FBQ0YsS0FBS1AsU0FBUyxHQUFHVSxNQUFNLENBQUNDO1FBRXhGLElBQUlOLFNBQVNPLE1BQU0sS0FBSyxHQUFHO1FBRTNCLElBQUlDLHFCQUFxQlIsUUFBUSxDQUFDLEVBQUU7UUFDcEMsSUFBSVMsZ0JBQWdCO1FBRXBCVCxTQUFTVSxPQUFPLENBQUMsQ0FBQ0M7WUFDaEIsTUFBTUMsT0FBT0QsUUFBUUUscUJBQXFCO1lBQzFDLE1BQU1DLGVBQWVDLE9BQU9DLFdBQVc7WUFFdkMsTUFBTUMsYUFBYUMsS0FBS0MsR0FBRyxDQUFDLEdBQUdQLEtBQUtRLEdBQUc7WUFDdkMsTUFBTUMsZ0JBQWdCSCxLQUFLSSxHQUFHLENBQUNSLGNBQWNGLEtBQUtXLE1BQU07WUFDeEQsTUFBTUMsZ0JBQWdCTixLQUFLQyxHQUFHLENBQUMsR0FBR0UsZ0JBQWdCSjtZQUVsRCxNQUFNUSxhQUFhRCxnQkFBZ0JaLEtBQUtjLE1BQU07WUFFOUMsSUFBSUQsYUFBYWhCLGVBQWU7Z0JBQzlCQSxnQkFBZ0JnQjtnQkFDaEJqQixxQkFBcUJHO1lBQ3ZCO1FBQ0Y7UUFFQSxJQUFJSCxzQkFBc0JBLG1CQUFtQm1CLEVBQUUsS0FBSzlCLGVBQWU7WUFDakVDLGlCQUFpQlUsbUJBQW1CbUIsRUFBRTtRQUN4QztJQUNGO0lBRUF4QyxnREFBU0EsQ0FBQztRQUNSWTtRQUNBZ0IsT0FBT2EsZ0JBQWdCLENBQUMsVUFBVTdCLGNBQWM7WUFBRThCLFNBQVM7UUFBSztRQUNoRSxPQUFPLElBQU1kLE9BQU9lLG1CQUFtQixDQUFDLFVBQVUvQjtJQUNwRCxHQUFHO1FBQUNGO0tBQWM7SUFFbEIsTUFBTWtDLGlCQUFpQixDQUFDdEM7UUFDdEIsTUFBTXVDLFdBQVd2QyxLQUFLd0MsT0FBTyxDQUFDLEtBQUs7UUFDbkMsTUFBTUMsZ0JBQWdCL0IsU0FBU0MsY0FBYyxDQUFDNEI7UUFFOUMsSUFBSUUsZUFBZTtZQUNqQm5CLE9BQU9vQixRQUFRLENBQUM7Z0JBQ2RmLEtBQUtjLGNBQWNFLFNBQVM7Z0JBQzVCQyxVQUFVO1lBQ1o7UUFDRjtJQUNGO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDOUMsa0RBQVNBO2dCQUFDK0MsT0FBTzlDO2dCQUFVSyxlQUFlQTtnQkFBZTBDLFlBQVlSOzs7Ozs7MEJBQ3RFLDhEQUFDUztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDbkQsaURBQUlBOzRCQUFDRyxNQUFLOzRCQUFJZ0QsV0FBVTtzQ0FDdkIsNEVBQUNwRCxrREFBS0E7Z0NBQ0pzRCxLQUFJO2dDQUNKQyxLQUFJO2dDQUNKQyxPQUFPO2dDQUNQbkIsUUFBUTtnQ0FDUmUsV0FBVTs7Ozs7Ozs7Ozs7c0NBR2QsOERBQUNDOzRCQUFJRCxXQUFVO3NDQUNaakQsU0FBU1MsR0FBRyxDQUFDLENBQUNDO2dDQUNiLE1BQU00QyxXQUFXakQsa0JBQWtCSyxLQUFLUCxTQUFTO2dDQUNqRCxxQkFDRSw4REFBQ29EO29DQUVDdEQsTUFBTVMsS0FBS1QsSUFBSTtvQ0FDZnVELFNBQVMsQ0FBQ0M7d0NBQ1JBLEVBQUVDLGNBQWM7d0NBQ2hCbkIsZUFBZTdCLEtBQUtULElBQUk7b0NBQzFCO29DQUNBZ0QsV0FBVyxZQUFxQyxPQUF6QkssV0FBVyxXQUFXOzt3Q0FFNUNBLDBCQUFZLDhEQUFDSzs0Q0FBS1YsV0FBVTs7Ozs7O3dDQUM1QnZDLEtBQUtSLEtBQUs7O21DQVROUSxLQUFLVCxJQUFJOzs7Ozs0QkFZcEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNWjtHQXZGZ0JHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmF2LnRzeD9kNGQ2Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuaW1wb3J0IHsgTW9iaWxlTmF2IH0gZnJvbSBcIi4vbW9iaWxlLW5hdlwiXG5cbmNvbnN0IG5hdkl0ZW1zID0gW1xuICB7IGhyZWY6IFwiI2NvbXBhbnlcIiwgbGFiZWw6IFwiQ29tcGFueVwiLCBzZWN0aW9uSWQ6IFwiY29tcGFueVwiIH0sXG4gIHsgaHJlZjogXCIjYXBwcm9hY2hcIiwgbGFiZWw6IFwiQXBwcm9hY2hcIiwgc2VjdGlvbklkOiBcImFwcHJvYWNoXCIgfSxcbiAgeyBocmVmOiBcIiNzb2x1dGlvbnNcIiwgbGFiZWw6IFwiU29sdXRpb25zXCIsIHNlY3Rpb25JZDogXCJzb2x1dGlvbnNcIiB9LFxuICB7IGhyZWY6IFwiI2Fib3V0XCIsIGxhYmVsOiBcIk91ciBzdG9yeVwiLCBzZWN0aW9uSWQ6IFwiYWJvdXRcIiB9LFxuICB7IGhyZWY6IFwiI2NvbnRhY3RcIiwgbGFiZWw6IFwiQ29udGFjdFwiLCBzZWN0aW9uSWQ6IFwiY29udGFjdFwiIH0sXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBOYXYoKSB7XG4gIGNvbnN0IFthY3RpdmVTZWN0aW9uLCBzZXRBY3RpdmVTZWN0aW9uXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJjb21wYW55XCIpXG5cbiAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgIGNvbnN0IHNlY3Rpb25zID0gbmF2SXRlbXMubWFwKChpdGVtKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpdGVtLnNlY3Rpb25JZCkpLmZpbHRlcihCb29sZWFuKSBhcyBIVE1MRWxlbWVudFtdXG5cbiAgICBpZiAoc2VjdGlvbnMubGVuZ3RoID09PSAwKSByZXR1cm5cblxuICAgIGxldCBtb3N0VmlzaWJsZVNlY3Rpb24gPSBzZWN0aW9uc1swXVxuICAgIGxldCBtYXhWaXNpYmlsaXR5ID0gMFxuXG4gICAgc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xuICAgICAgY29uc3QgcmVjdCA9IHNlY3Rpb24uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcbiAgICAgIGNvbnN0IHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodFxuXG4gICAgICBjb25zdCB2aXNpYmxlVG9wID0gTWF0aC5tYXgoMCwgcmVjdC50b3ApXG4gICAgICBjb25zdCB2aXNpYmxlQm90dG9tID0gTWF0aC5taW4od2luZG93SGVpZ2h0LCByZWN0LmJvdHRvbSlcbiAgICAgIGNvbnN0IHZpc2libGVIZWlnaHQgPSBNYXRoLm1heCgwLCB2aXNpYmxlQm90dG9tIC0gdmlzaWJsZVRvcClcblxuICAgICAgY29uc3QgdmlzaWJpbGl0eSA9IHZpc2libGVIZWlnaHQgLyByZWN0LmhlaWdodFxuXG4gICAgICBpZiAodmlzaWJpbGl0eSA+IG1heFZpc2liaWxpdHkpIHtcbiAgICAgICAgbWF4VmlzaWJpbGl0eSA9IHZpc2liaWxpdHlcbiAgICAgICAgbW9zdFZpc2libGVTZWN0aW9uID0gc2VjdGlvblxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAobW9zdFZpc2libGVTZWN0aW9uICYmIG1vc3RWaXNpYmxlU2VjdGlvbi5pZCAhPT0gYWN0aXZlU2VjdGlvbikge1xuICAgICAgc2V0QWN0aXZlU2VjdGlvbihtb3N0VmlzaWJsZVNlY3Rpb24uaWQpXG4gICAgfVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBoYW5kbGVTY3JvbGwoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbClcbiAgfSwgW2FjdGl2ZVNlY3Rpb25dKVxuXG4gIGNvbnN0IGhhbmRsZU5hdkNsaWNrID0gKGhyZWY6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHRhcmdldElkID0gaHJlZi5yZXBsYWNlKFwiI1wiLCBcIlwiKVxuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZClcblxuICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IHRhcmdldEVsZW1lbnQub2Zmc2V0VG9wLFxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1vYmlsZU5hdiBpdGVtcz17bmF2SXRlbXN9IGFjdGl2ZVNlY3Rpb249e2FjdGl2ZVNlY3Rpb259IG9uTmF2aWdhdGU9e2hhbmRsZU5hdkNsaWNrfSAvPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJkZXNrdG9wLW5hdlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyXCI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJuYXYtbG9nb1wiPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vaGViYmt4MWFuaGlsYTV5Zi5wdWJsaWMuYmxvYi52ZXJjZWwtc3RvcmFnZS5jb20vbG9nby11VUtlZHNFMTdESGNkeHlOcklqQnNIaFcxT0tBSlIuc3ZnXCJcbiAgICAgICAgICAgICAgYWx0PVwiSW50ZXJsaW5lYXIgTG9nb1wiXG4gICAgICAgICAgICAgIHdpZHRoPXsxMjB9XG4gICAgICAgICAgICAgIGhlaWdodD17MjR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ29cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtbGlua3NcIj5cbiAgICAgICAgICAgIHtuYXZJdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBhY3RpdmVTZWN0aW9uID09PSBpdGVtLnNlY3Rpb25JZFxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaHJlZn1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e2l0ZW0uaHJlZn1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVOYXZDbGljayhpdGVtLmhyZWYpXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHtpc0FjdGl2ZSA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7aXNBY3RpdmUgJiYgPHNwYW4gY2xhc3NOYW1lPVwibmF2LWRvdFwiIC8+fVxuICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICA8Lz5cbiAgKVxufVxuXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkxpbmsiLCJNb2JpbGVOYXYiLCJuYXZJdGVtcyIsImhyZWYiLCJsYWJlbCIsInNlY3Rpb25JZCIsIk5hdiIsImFjdGl2ZVNlY3Rpb24iLCJzZXRBY3RpdmVTZWN0aW9uIiwiaGFuZGxlU2Nyb2xsIiwic2VjdGlvbnMiLCJtYXAiLCJpdGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZpbHRlciIsIkJvb2xlYW4iLCJsZW5ndGgiLCJtb3N0VmlzaWJsZVNlY3Rpb24iLCJtYXhWaXNpYmlsaXR5IiwiZm9yRWFjaCIsInNlY3Rpb24iLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwid2luZG93SGVpZ2h0Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJ2aXNpYmxlVG9wIiwiTWF0aCIsIm1heCIsInRvcCIsInZpc2libGVCb3R0b20iLCJtaW4iLCJib3R0b20iLCJ2aXNpYmxlSGVpZ2h0IiwidmlzaWJpbGl0eSIsImhlaWdodCIsImlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlTmF2Q2xpY2siLCJ0YXJnZXRJZCIsInJlcGxhY2UiLCJ0YXJnZXRFbGVtZW50Iiwic2Nyb2xsVG8iLCJvZmZzZXRUb3AiLCJiZWhhdmlvciIsIml0ZW1zIiwib25OYXZpZ2F0ZSIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsInNyYyIsImFsdCIsIndpZHRoIiwiaXNBY3RpdmUiLCJhIiwib25DbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/nav.tsx\n"));

/***/ })

});