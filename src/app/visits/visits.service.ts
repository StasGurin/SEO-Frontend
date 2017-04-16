import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IVisit } from './visit';


@Injectable()

export class VisitsService {
    private _visitUrl = 'http://localhost:59328/api/dashboard';
    constructor(private _http: Http) { }

    getVisits(date: string, name: string, ip: string): Observable<IVisit[]> {
        return this._http.post(this._visitUrl + "?date=" + date + "&userName=" + name + "&ip=" + ip, {})
            .map((response: Response) => <IVisit>response.json())
            .do(data => data)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');

    }
}