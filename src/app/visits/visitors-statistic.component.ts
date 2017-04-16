import { Component } from '@angular/core';

import { IVisitorsStatistic } from './visitors-statistic';
import { IVisitor } from './visitor';
import { VisitorStatisticService } from './visitors-statistic.service';
import { VisitorsService } from './visitors.service';
import { VisitorsComponent } from './visitors.component'

@Component({
    selector: 'visitors-statistic-pm',
    moduleId: module.id,
    templateUrl: 'visitors-statistic.component.html',
    styleUrls: ['visitors-statistic.component.css']
})

export class VisitorsStatisticComponent {
    showVisitors: boolean = false;
    errorMessage: string;
    visitorsStatistic: IVisitorsStatistic[];
    startDate: string;
    finishDate: string;

    constructor(private _visitorStatisticService: VisitorStatisticService) {
    }

    search() {
        this.startDate = (<HTMLInputElement>document.getElementById('startDate')).value;
        this.finishDate = (<HTMLInputElement>document.getElementById('finishDate')).value;
        if ((this.startDate) && (this.finishDate)) {
            this._visitorStatisticService.getVisitorStatistic(this.startDate, this.finishDate)
                .subscribe(visitorsStatistic => this.visitorsStatistic = visitorsStatistic,
                error => this.errorMessage = <any>error);

        } else alert("nuuuuuul");
    }

    getVisitorsHidden(id: string, status: string, _visitorsComponent: VisitorsComponent) {
        if (!this.showVisitors) {
            this.showVisitors = !this.showVisitors;
            var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
            _visitorsComponent.getVisitors(this.visitorsStatistic[id].Date.replace(pattern, '$3-$2-$1'), status);
        } else {
            _visitorsComponent.visitors = [];
            this.showVisitors = !this.showVisitors;
        }
    }

    getVisitors(id: string, status: string, _visitorsComponent: VisitorsComponent) {
        var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
        _visitorsComponent.getVisitors(this.visitorsStatistic[id].Date.replace(pattern, '$3-$2-$1'), status);
        this.showVisitors = true;
    }
}