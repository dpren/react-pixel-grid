import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState, useEffect, useRef } from "react";
import pixelGrid from "pixel-grid";
export default (function (_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      props = _objectWithoutProperties(_ref, ["data", "options"]);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      grid = _useState2[0],
      setGrid = _useState2[1];

  var container = useRef();
  useEffect(function () {
    var _grid = pixelGrid(data, _objectSpread({}, options, {
      root: container.current
    }));

    setGrid(_grid);
    return function () {
      _grid.canvas && _grid.canvas.remove();
    };
  }, [].concat(_toConsumableArray(Object.values(options).flat()), [data.length]));
  useEffect(function () {
    grid && grid.update(data);
  });
  return /*#__PURE__*/React.createElement("div", Object.assign({
    ref: container
  }, props));
});