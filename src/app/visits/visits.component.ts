import { Component } from '@angular/core';


import { IVisit } from './visit';
import { VisitsService } from './visits.service';

@Component({
    selector: 'visits-pm',
    moduleId: module.id,
    templateUrl: 'visits.component.html',
    styleUrls: ['visits.component.css']
})
export class VisitsComponent {
    errorMessage: string;
    visits: IVisit[];

    constructor(private _visitsService: VisitsService) { }

    getVisits(date: string, name: string, ip: string) {
        this._visitsService.getVisits(date, name, ip)
            .subscribe(visitors => this.visits = visitors,
            error => this.errorMessage = <any>error);
    }
}
