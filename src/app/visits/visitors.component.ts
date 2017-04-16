import { Component } from '@angular/core';

import { IVisitor } from './visitor';
import { VisitorsService } from './visitors.service';
import { VisitsComponent } from './visits.component';

@Component({
    selector: 'visitors-pm',
    moduleId: module.id,
    templateUrl: 'visitors.component.html',
    styleUrls: ['visitors.component.css']
})

export class VisitorsComponent {
    errorMessage: string;
    visitors: IVisitor[];
    date: string;
    showVisits: boolean = false;

    constructor(private _visitorsService: VisitorsService) {
    }

    getVisitors(date: string, status: string) {
        this.date = date;
        this._visitorsService.getVisitors(date, "osbb.ck.ua", status)
            .subscribe(visitors => this.visitors = visitors,
            error => this.errorMessage = <any>error);
    }


    getVisits(id: string, _visitsComponent: VisitsComponent) {
        if (!this.showVisits) {
            this.showVisits = !this.showVisits;
            var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
            _visitsComponent.getVisits(this.date.replace(pattern, '$3-$2-$1'), this.visitors[id].UserName,
                this.visitors[id].IP);
        } else {
            _visitsComponent.visits = [];
            this.showVisits = !this.showVisits;
        }
    }
}

