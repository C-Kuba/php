"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var concrete_1 = require("../app/concrete");
var App = (function () {
    function App() {
        var data = new concrete_1.Concrete();
        this.concreteData = data.getData();
    }
    App.prototype.getSteelConcreteData = function (fck, fyk) {
        var steel = [];
        steel['fyk'] = fck / 1.4;
        steel['fyd'] = fyk / 1.15;
        return steel;
    };
    App.prototype.getOtulina = function (fi, cmin_dur) {
        var c_min;
        var delta_cder = 0.1;
        c_min = Math.max(fi, cmin_dur);
        return (c_min + delta_cder);
    };
    App.prototype.get_d = function (th, fi, cnom) {
        return (th - cnom - (fi / 2));
    };
    App.prototype.getReinforcement = function (moment, steel, d) {
        var as1 = [];
        moment.forEach(function (value, key) {
            var mi, ksi_eff;
            mi = value / (Math.pow(d, 2) * steel['fcd']);
            ksi_eff = 1 - Math.sqrt(1 - 2 * mi);
            if (ksi_eff < 0.5) {
                var xeff = ksi_eff * d;
                var As1 = (xeff * steel['fcd']) / steel['fyd'];
                as1.push(As1);
            }
            else {
                as1 = [];
                return as1;
            }
        });
        return as1;
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map