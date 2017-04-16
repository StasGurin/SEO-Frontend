import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IVisitor } from './visitor';


@Injectable()

export class VisitorsService {
    private _visitUrl = 'http://localhost:59328/api/dashboard';
    constructor(private _http: Http) { }

    getVisitors(date: string, domainName: string, status: string): Observable<IVisitor[]> {
        return this._http.post(this._visitUrl + "?date=" + date + "&domainName=" + domainName + "&status=" + status, {})
            .map((response: Response) => <IVisitor>response.json())
            .do(data => data)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');

    }
}