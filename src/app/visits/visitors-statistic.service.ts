import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IVisitorsStatistic } from './visitors-statistic';
import { IVisitor } from './visitor';


@Injectable()

export class VisitorStatisticService {
    private _visitUrl = 'http://localhost:59328/api/dashboard';
    constructor(private _http: Http) { }

    getVisitorStatistic(startDate: string, finishDate: string): Observable<IVisitorsStatistic[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this._http.post(this._visitUrl, {
            "startDate": startDate,
            "finishDate": finishDate,
            "domainName": "osbb.ck.ua"
        }, options)
            .map((response: Response) => <IVisitorsStatistic>response.json())
            .do(data => data)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');

    }
}