"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _FurnitureAbstract2 = _interopRequireDefault(require("./FurnitureAbstract"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Furniture =
/*#__PURE__*/
function (_FurnitureAbstract) {
  _inherits(Furniture, _FurnitureAbstract);

  function Furniture() {
    _classCallCheck(this, Furniture);

    return _possibleConstructorReturn(this, _getPrototypeOf(Furniture).call(this));
  }

  _createClass(Furniture, [{
    key: "put",
    value: function put(object) {
      switch (this.constructor.name) {
        case 'ConveyorBelt':
          if (!this.getIsBusy()) {
            this.addObject(object);
            this.setIsBusy(true);
            return this.getObjects();
          } else {
            console.log('Sorry, the conveyor belt is busy ATM !');
            return null;
          }

        case 'Table':
          if (this.setContent(object)) {
            this.setObjects(this.getContent());
          } else return null;

        default:
          break;
      }
    }
  }, {
    key: "take",
    value: function take() {
      var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      switch (this.constructor.name) {
        case 'ConveyorBelt':
          if (this.getIsBusy()) {
            this.popObject();
            return this.getObjects();
          } else {
            console.log('Sorry, the conveyor belt is busy ATM !');
            return null;
          }

        case 'Table':
          this.takeContent(position);

        default:
          break;
      }
    }
  }]);

  return Furniture;
}(_FurnitureAbstract2["default"]);

var _default = Furniture;
exports["default"] = _default;