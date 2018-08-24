import { Route } from '@angular/router';
import { EvaluateeComponent } from 'app/admin/evaluatee/evaluatee.component';

export const EVALUATEE_ROUTE: Route = {
    path: 'evaluatee',
    component: EvaluateeComponent,
    data: {
        authorities: [],
        pageTitle: 'Evaluatee'
    }
};
