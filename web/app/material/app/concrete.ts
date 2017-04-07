
export class Concrete
{
    private concreteData: any;
    
    constructor(){
        this.concreteData = {
            fi: 0.8,
            cmin_dur: 0.1,
            fck: 20,
            fyk: 500,
            th: 0.25
        }
    }
    
    public getData(){
        return this.concreteData;
    }
}