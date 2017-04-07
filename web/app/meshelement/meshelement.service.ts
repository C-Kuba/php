import {Injectable} from '@angular/core'
import {Http, Response, Headers} from '@angular/http'


@Injectable()
export class MeshElementService{

    constructor( private http: Http) {}

    getMeshElement(element: number){
        return this.http.get('/api/meshelement/' + element)
            .map((res: Response) => res.json());
    }
}