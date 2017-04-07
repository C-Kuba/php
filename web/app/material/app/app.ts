import {Concrete} from '../app/concrete'

export class App
{
    private concreteData: any;
    
    constructor(){
        var data = new Concrete();
        this.concreteData = data.getData();
    }

    getSteelConcreteData(fck, fyk): Array<any>{
        var steel = [];

        steel['fyk'] = fck/1.4;
        steel['fyd'] = fyk/1.15;

        return steel;
    }

    getOtulina(fi, cmin_dur):number{
        var c_min;
        var delta_cder = 0.1;

        c_min = Math.max(fi, cmin_dur);

        return (c_min + delta_cder);
    }
    
    get_d(th, fi, cnom):number{
        return (th - cnom - (fi/2));
    }
    
    getReinforcement(moment, steel, d): Array<any>{
        var as1 = [];
        
        moment.forEach(function (value, key) {
            var mi, ksi_eff;
            
            mi = value / (Math.pow(d, 2) * steel['fcd']);
            ksi_eff = 1 - Math.sqrt(1 - 2 * mi);
            
            if(ksi_eff < 0.5){
                var xeff = ksi_eff * d;
                var As1 = (xeff * steel['fcd']) / steel['fyd'];
                as1.push(As1);
            }
            else{
                as1 = [];
                return as1;
            }
        });
        return as1;
    }
}