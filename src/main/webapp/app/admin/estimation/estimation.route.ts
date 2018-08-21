import {Route} from '@angular/router';
import {EstimationComponent} from 'app/admin/estimation/estimation.component';

export const ESTIMATION_ROUTE: Route = {
    path: 'estimation',
    component: EstimationComponent,
    data: {
        authorities: [],
        pageTitle: 'Estimation'
    }
};
