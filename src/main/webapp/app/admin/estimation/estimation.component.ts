import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'jhi-estimation',
    templateUrl: './estimation.component.html',
    styles: []
})
export class EstimationComponent implements OnInit {

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
    }

}
