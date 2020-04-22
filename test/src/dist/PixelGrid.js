import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useEffect, useRef } from "react";
import pixelGrid from "pixel-grid";
export default (function (_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? [] : _ref$data,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      props = _objectWithoutProperties(_ref, ["data", "options"]);

  var grid = useRef({});
  var container = useRef();
  var queue = useRef([]);
  useEffect(function () {
    grid.current = pixelGrid(data, _objectSpread({}, options, {
      root: container.current
    }));
    return function () {
      queue.current = [];
      grid.current.canvas && grid.current.canvas.remove();
    };
  }, [].concat(_toConsumableArray(Object.values(options).flat()), [data.length]));
  useEffect(function () {
    grid.current.frame && grid.current.frame(function () {
      var shifted = queue.current.shift();
      shifted && grid.current.update(shifted);
    });
  }, []);
  useEffect(function () {
    if (queue.current.length > 30) {
      console.warn("PixelGrid update queue > 30; flushing");
      queue.current = [];
    }

    queue.current.push(data);
  });
  return /*#__PURE__*/React.createElement("div", Object.assign({
    ref: container
  }, props));
});