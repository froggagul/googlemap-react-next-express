webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PlaceList.js":
/*!*********************************!*\
  !*** ./components/PlaceList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PlaceListInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlaceListInfo */ "./components/PlaceListInfo.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! google-map-react */ "./node_modules/google-map-react/lib/index.js");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\frogg\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\\uC6F9\uAC1C\uBC1C\uACF5\uBD80\\week8\\googlemap-next-reacthook\\googlemap-next-reacthook-20190920\\components\\PlaceList.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var ContactInfo = function ContactInfo(_ref) {
  var lat = _ref.lat,
      lng = _ref.lng;
  var style = {
    color: 'white',
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  };
  return __jsx("div", {
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    lat: Number(lat),
    lng: Number(lng),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, 'mark'));
};

var PlaceList = function PlaceList() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    lat: '37.496217',
    lng: '127.052933'
  }]),
      info = _useState[0],
      setInfo = _useState[1];

  var defaultProps = {
    center: {
      lat: 37.496217,
      lng: 127.052933
    },
    zoom: 17
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    _PlaceListInfo__WEBPACK_IMPORTED_MODULE_2__["getPlaceList"]().then(function (data) {
      console.log(data);
      setInfo(data);
    });
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "\uB9C8\uCEE4 \uBD88\uB7EC\uC624\uAE30"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(info)), __jsx("div", {
    style: {
      height: '80vh',
      width: '80%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(google_map_react__WEBPACK_IMPORTED_MODULE_3___default.a, {
    bootstrapURLKeys: {
      key: "AIzaSyBQwO5M6nWgns0yddNnHq8zNEDny6I1Isc"
    },
    defaultCenter: defaultProps.center,
    defaultZoom: defaultProps.zoom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, info.map(function (contact, i) {
    return __jsx(ContactInfo, {
      lat: contact.lat,
      lng: contact.lng,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    });
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (PlaceList);

/***/ })

})
//# sourceMappingURL=index.js.6db20ceb7475a9c1befd.hot-update.js.map