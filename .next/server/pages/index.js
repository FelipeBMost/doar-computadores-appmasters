/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYXBwLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz83MTI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19iQ09oWVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfX19fVDdLXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19zdVBFUlwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX0d4UTg1XCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18yN190YlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/api/api.js":
/*!**************************!*\
  !*** ./pages/api/api.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"https://doar-computador-api.herokuapp.com/\"\n});\napi.interceptors.request.use(async (config)=>{\n    // DECLARAÇÃO DE TOKEN PARA TESTE //\n    const token = \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9\";\n    if (token) {\n        api.defaults.headers.authorization = `Portador ${token}`;\n    }\n    return config;\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXBpLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUUwQjtBQUUxQixNQUFNQyxHQUFHLEdBQUdELG1EQUFZLENBQUM7SUFDdkJHLE9BQU8sRUFBRSw0Q0FBNEM7Q0FDdEQsQ0FBQztBQUlGRixHQUFHLENBQUNHLFlBQVksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTUMsTUFBTSxHQUFJO0lBQzNDLG9DQUFvQztJQUNwQyxNQUFNQyxLQUFLLEdBQUcsc0NBQXNDO0lBRXBELElBQUlBLEtBQUssRUFBRTtRQUNUUCxHQUFHLENBQUNRLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxhQUFhLEdBQUcsQ0FBQyxTQUFTLEVBQUVILEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDMUQ7SUFFRCxPQUFPRCxNQUFNLENBQUM7Q0FDZixDQUFDLENBQUM7QUFFSCxpRUFBZU4sR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi9wYWdlcy9hcGkvYXBpLmpzPzdjMDciXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogXCJodHRwczovL2RvYXItY29tcHV0YWRvci1hcGkuaGVyb2t1YXBwLmNvbS9cIixcbn0pO1xuXG5cblxuYXBpLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShhc3luYyBjb25maWcgPT4ge1xuICAvLyBERUNMQVJBw4fDg08gREUgVE9LRU4gUEFSQSBURVNURSAvL1xuICBjb25zdCB0b2tlbiA9IFwiZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKU1V6STFOaUo5XCI7XG5cbiAgaWYgKHRva2VuKSB7XG4gICAgYXBpLmRlZmF1bHRzLmhlYWRlcnMuYXV0aG9yaXphdGlvbiA9IGBQb3J0YWRvciAke3Rva2VufWA7XG4gIH1cblxuICByZXR1cm4gY29uZmlnO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFwaTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwidG9rZW4iLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/api.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api/api.js */ \"./pages/api/api.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n // Pacote Axios com URL e Token de autenticação \n // Desconstrução de objeto para não precisar usar React.use...\nfunction Home() {\n    const { 0: status , 1: setStatus  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    // Enviando solicitação GET para a URL definida em 'api.js'\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        _api_api_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get().then((response)=>{\n            setStatus(response.data.alive) // retornando só o valor de 'alive' por ser o único\n            ;\n        }).catch((err)=>{\n            console.error(\"ops! ocorreu um erro\" + err);\n        });\n    }, []);\n    let statusApi = \"\"; // Variável utilizada para o texto\n    if (status) {\n        statusApi = \"API online\";\n    } else {\n        statusApi = \"API offline\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Doa\\xe7\\xe3o de Computadores Usados\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Repos\\\\doar-computadores-appmasters\\\\pages\\\\index.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Repos\\\\doar-computadores-appmasters\\\\pages\\\\index.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Repos\\\\doar-computadores-appmasters\\\\pages\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Repos\\\\doar-computadores-appmasters\\\\pages\\\\index.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                        children: \"Doa\\xe7\\xe3o de computadores usados\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Repos\\\\doar-computadores-appmasters\\\\pages\\\\index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().description),\n                        children: statusApi\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Repos\\\\doar-computadores-appmasters\\\\pages\\\\index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Repos\\\\doar-computadores-appmasters\\\\pages\\\\index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"https://github.com/FelipeBMost\",\n                    target: \"_blank\",\n                    rel: \"noopener noreferrer\",\n                    children: [\n                        \"Powered by\",\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            id: \"EasterEgg\",\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                            children: \"Pura for\\xe7a de vontade\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Repos\\\\doar-computadores-appmasters\\\\pages\\\\index.js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Repos\\\\doar-computadores-appmasters\\\\pages\\\\index.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Repos\\\\doar-computadores-appmasters\\\\pages\\\\index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Repos\\\\doar-computadores-appmasters\\\\pages\\\\index.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEI7QUFDa0I7QUFDaEIsQ0FBQyxnREFBZ0Q7QUFDL0IsQ0FBQyw4REFBOEQ7QUFHaEcsU0FBU00sSUFBSSxHQUFHO0lBRTdCLE1BQU0sS0FBQ0MsTUFBTSxNQUFFQyxTQUFTLE1BQUlILCtDQUFRLEVBQUU7SUFFdEMsMkRBQTJEO0lBQzNERCxnREFBUyxDQUFDLElBQU07UUFDWkYsdURBQ0ksRUFBRSxDQUNMUSxJQUFJLENBQUMsQ0FBQ0MsUUFBUSxHQUFLO1lBQ2xCSCxTQUFTLENBQUNHLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxtREFBbUQ7O1NBQ25GLENBQUMsQ0FDREMsS0FBSyxDQUFDLENBQUNDLEdBQUcsR0FBSztZQUNkQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxzQkFBc0IsR0FBR0YsR0FBRyxDQUFDLENBQUM7U0FDN0MsQ0FBQyxDQUFDO0tBQ0osRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLElBQUlHLFNBQVMsR0FBRyxFQUFFLEVBQUUsa0NBQWtDO0lBRXRELElBQUdYLE1BQU0sRUFBRTtRQUNUVyxTQUFTLEdBQUcsWUFBWSxDQUFDO0tBQzFCLE1BQU07UUFDTEEsU0FBUyxHQUFHLGFBQWEsQ0FBQztLQUMzQjtJQUVILHFCQUVFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBRW5CLDBFQUFnQjs7MEJBQzlCLDhEQUFDRCxrREFBSTs7a0NBQ0gsOERBQUNzQixPQUFLO2tDQUFDLHFDQUE2Qjs7Ozs7NEJBQVE7a0NBQzVDLDhEQUFDQyxNQUFJO3dCQUFDQyxJQUFJLEVBQUMsYUFBYTt3QkFBQ0MsT0FBTyxFQUFDLDhCQUE4Qjs7Ozs7NEJBQUc7a0NBQ2xFLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzRCQUFHOzs7Ozs7b0JBQ2xDOzBCQUVQLDhEQUFDQyxNQUFJO2dCQUFDVCxTQUFTLEVBQUVuQixxRUFBVzs7a0NBQzFCLDhEQUFDNkIsSUFBRTt3QkFBQ1YsU0FBUyxFQUFFbkIsc0VBQVk7a0NBQUUscUNBRTdCOzs7Ozs0QkFBSztrQ0FFTCw4REFBQzhCLEdBQUM7d0JBQUNYLFNBQVMsRUFBRW5CLDRFQUFrQjtrQ0FDN0JpQixTQUFTOzs7Ozs0QkFDUjs7Ozs7O29CQUVDOzBCQUVQLDhEQUFDZSxRQUFNO2dCQUFDYixTQUFTLEVBQUVuQix1RUFBYTswQkFDOUIsNEVBQUNpQyxHQUFDO29CQUNBTixJQUFJLEVBQUMsZ0NBQWdDO29CQUNyQ08sTUFBTSxFQUFDLFFBQVE7b0JBQ2ZSLEdBQUcsRUFBQyxxQkFBcUI7O3dCQUMxQixZQUNXO3dCQUFDLEdBQUc7c0NBQ2QsOERBQUNTLElBQUU7NEJBQUNDLEVBQUUsRUFBQyxXQUFXOzRCQUFDakIsU0FBUyxFQUFFbkIscUVBQVc7c0NBQUUsMEJBRTNDOzs7OztnQ0FBSzs7Ozs7O3dCQUNIOzs7OztvQkFDRzs7Ozs7O1lBQ0wsQ0FDUDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcHAvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBhcGkgZnJvbSAnLi9hcGkvYXBpLmpzJyAvLyBQYWNvdGUgQXhpb3MgY29tIFVSTCBlIFRva2VuIGRlIGF1dGVudGljYcOnw6NvIFxuaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnIC8vIERlc2NvbnN0cnXDp8OjbyBkZSBvYmpldG8gcGFyYSBuw6NvIHByZWNpc2FyIHVzYXIgUmVhY3QudXNlLi4uXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoKTtcblxuICAvLyBFbnZpYW5kbyBzb2xpY2l0YcOnw6NvIEdFVCBwYXJhIGEgVVJMIGRlZmluaWRhIGVtICdhcGkuanMnXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBhcGlcbiAgICAgIC5nZXQoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHNldFN0YXR1cyhyZXNwb25zZS5kYXRhLmFsaXZlKSAvLyByZXRvcm5hbmRvIHPDsyBvIHZhbG9yIGRlICdhbGl2ZScgcG9yIHNlciBvIMO6bmljb1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJvcHMhIG9jb3JyZXUgdW0gZXJyb1wiICsgZXJyKTtcbiAgICAgIH0pO1xuICAgIH0sIFtdKTtcblxuICAgIGxldCBzdGF0dXNBcGkgPSAnJzsgLy8gVmFyacOhdmVsIHV0aWxpemFkYSBwYXJhIG8gdGV4dG9cblxuICAgIGlmKHN0YXR1cykge1xuICAgICAgc3RhdHVzQXBpID0gXCJBUEkgb25saW5lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXR1c0FwaSA9IFwiQVBJIG9mZmxpbmVcIjtcbiAgICB9XG5cbiAgcmV0dXJuIChcbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkRvYcOnw6NvIGRlIENvbXB1dGFkb3JlcyBVc2Fkb3M8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgRG9hw6fDo28gZGUgY29tcHV0YWRvcmVzIHVzYWRvc1xuICAgICAgICA8L2gxPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICB7c3RhdHVzQXBpfVxuICAgICAgICA8L3A+XG4gICAgICAgIFxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9GZWxpcGVCTW9zdFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxuICAgICAgICAgIDxoMiBpZD1cIkVhc3RlckVnZ1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxuICAgICAgICAgICAgUHVyYSBmb3LDp2EgZGUgdm9udGFkZVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsImFwaSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJIb21lIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImFsaXZlIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXNBcGkiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImgxIiwicCIsImRlc2NyaXB0aW9uIiwiZm9vdGVyIiwiYSIsInRhcmdldCIsImgyIiwiaWQiLCJsb2dvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();