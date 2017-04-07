import {Injectable} from '@angular/core'
import {Http, Response, Headers} from '@angular/http'


@Injectable()
export class ElementService{

    constructor( private http: Http) {}

    getElements(){
        return this.http.get('/api/elements')
            .map((res: Response) => res.json());
    }
}