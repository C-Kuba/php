"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Concrete = (function () {
    function Concrete() {
        this.concreteData = {
            fi: 0.8,
            cmin_dur: 0.1,
            fck: 20,
            fyk: 500,
            th: 0.25
        };
    }
    Concrete.prototype.getData = function () {
        return this.concreteData;
    };
    return Concrete;
}());
exports.Concrete = Concrete;
//# sourceMappingURL=concrete.js.map